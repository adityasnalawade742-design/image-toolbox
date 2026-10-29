import type { LocalizedHomeData } from '../types';

export const ptHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: 'Todas as ferramentas de imagem que você precisa, em um só lugar',
    subtitle:
      'Corte, redimensione, comprima, converta, remova fundos e limpe fotos de graça. Sem cadastro, sem marca d’água, e seus arquivos ficam no seu dispositivo.',
    dropzoneTitle: 'Arraste uma imagem para começar',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, TIFF, SVG ou HEIC do iPhone, até 50 MB',
  },
  sections: {
    indexTitle: 'Todas as ferramentas',
    indexSubtitle: 'Todas as ferramentas usam a mesma área de trabalho: abra uma imagem, ajuste e baixe.',
    pillarsTitle: 'Como funciona',
    faqTitle: 'Perguntas',
  },
  trustPillars: [
    {
      title: 'Uma área de trabalho para tudo',
      description:
        'Todas as ferramentas abrem do mesmo jeito, e você pode passar sua imagem direto para a próxima, por exemplo cortar e depois comprimir.',
      icon: 'Layers',
    },
    {
      title: 'Nada é enviado',
      description:
        'As imagens são processadas pelo seu navegador no seu próprio dispositivo, então não há espera de envio nem cópia em um servidor.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Grátis e sem conta',
      description: 'Sem cadastro, sem marca d’água e sem limite diário. Arquivos individuais podem ter até 50 MB; as ferramentas em lote aceitam até 50 arquivos.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': 'Editar e transformar',
    'optimize-compress': 'Otimizar e comprimir',
    'convert-formats': 'Converter formatos',
    'pdf-documents': 'PDF e documentos',
    utilities: 'Inspecionar e utilitários',
    developer: 'Ferramentas para desenvolvedores',
  },
  faqs: [
    {
      question: 'Minhas imagens são enviadas para algum lugar?',
      answer:
        'Não. Todas as ferramentas funcionam dentro do seu navegador, então suas imagens são processadas no seu próprio dispositivo e nunca são enviadas para um servidor. O removedor de fundo baixa o modelo de IA uma vez e depois também funciona no dispositivo.',
    },
    {
      question: 'É grátis mesmo?',
      answer: 'Sim. Todas as ferramentas são grátis, sem precisar de conta, e nada recebe marca d’água.',
    },
    {
      question: 'Qual o tamanho máximo das imagens?',
      answer:
        'Imagens individuais podem ter até 50 MB. A compressão e o redimensionamento em lote aceitam até 50 imagens de uma vez, cada uma com até 50 MB. Fotos muito grandes podem ficar lentas em celulares mais antigos.',
    },
    {
      question: 'Quais formatos posso abrir e salvar?',
      answer:
        'Você pode abrir fotos JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, SVG e HEIC do iPhone. Você pode salvar em JPG, PNG, WebP ou AVIF, dependendo da ferramenta.',
    },
    {
      question: 'Funciona no meu celular?',
      answer:
        'Sim. As ferramentas funcionam nos navegadores atuais de iPhone e Android, incluindo fotos HEIC do iPhone. Você também pode instalar o site como app. Depois da primeira visita, a maioria das ferramentas funciona offline; a exportação em AVIF e a remoção de fundo precisam ser usadas uma vez com internet.',
    },
    {
      question: 'Posso usar uma ferramenta depois da outra?',
      answer:
        'Sim. Depois de editar, escolha um próximo passo, como Comprimir ou Redimensionar, e sua imagem abre nessa ferramenta sem precisar salvar e enviar de novo.',
    },
  ],
};
