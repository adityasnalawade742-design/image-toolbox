#!/usr/bin/env bash
# One-time setup on a fresh Oracle Cloud Ubuntu 24.04 instance (run from the server/ folder as a sudo user):
#   bash setup.sh
# Installs Docker from Ubuntu's own packages, opens ports 80/443 in the host firewall, enables
# automatic security updates, writes .env (domain + secret) if missing, and starts the service.
set -euo pipefail
cd "$(dirname "$0")"

echo "== packages"
sudo apt-get update -y
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y docker.io docker-compose-v2 unattended-upgrades iptables-persistent openssl curl
sudo systemctl enable --now docker
sudo usermod -aG docker "$USER" || true
sudo dpkg-reconfigure -f noninteractive unattended-upgrades

echo "== firewall: Oracle's Ubuntu image rejects everything but SSH by default"
for port in 80 443; do
  if ! sudo iptables -C INPUT -p tcp --dport "$port" -m state --state NEW -j ACCEPT 2>/dev/null; then
    sudo iptables -I INPUT 5 -p tcp --dport "$port" -m state --state NEW -j ACCEPT
  fi
done
sudo netfilter-persistent save

echo "== swap: a 4 GB safety margin on small instances (LibreOffice and OCR spike in memory)"
if [ ! -f /swapfile ] && [ "$(awk '/MemTotal/ {print $2}' /proc/meminfo)" -lt 8000000 ]; then
  sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile
  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
fi

echo "== .env"
if [ ! -f .env ]; then
  ip=$(curl -fsS https://api.ipify.org)
  secret=$(openssl rand -hex 32)
  cat > .env <<EOF
DOMAIN=${ip//./-}.sslip.io
ORIGIN_SECRET=$secret
MAX_UPLOAD_MB=50
JOB_TIMEOUT_S=120
# One job at a time on 1 OCPU; on 2+ OCPU raise CONCURRENCY, API_CPUS and API_MEM_LIMIT
CONCURRENCY=1
MAX_WAITING=6
API_CPUS=1
API_MEM_LIMIT=3g
API_TMP_SIZE=1g
EOF
  chmod 600 .env
fi
grep '^DOMAIN=' .env

echo "== start"
sudo docker compose up -d --build
sudo docker compose ps
echo "Done. The Worker needs DOC_API_URL=https://$(grep '^DOMAIN=' .env | cut -d= -f2) and the ORIGIN_SECRET from .env."
