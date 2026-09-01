import { LocalizedHomeData } from '../types';

export const ptHome: LocalizedHomeData = {
  heroPill: 'Privacidade Total • Sem Uploads no Servidor • 27 Ferramentas Gratuitas',
  heroHeadlineMain: 'Ferramentas de Imagem de Alta Precisão,',
  heroHeadlineAccent: 'Diretamente no seu Navegador',
  heroSubheadline: 'Corte, redimensione, comprima, converta e edite fotos localmente sem uploads na nuvem, com latência zero e máxima nitidez.',
  guarantee1: '100% Privacidade no Navegador',
  guarantee2: 'Velocidade Instantânea sem Upload',
  guarantee3: 'Sem Limites de Tamanho',
  whyChooseTitle: 'Por que Profissionais Escolhem o Image Toolbox',
  whyChooseSubtitle: 'Desenvolvido para desenvolvedores, designers, fotógrafos e usuários focados em privacidade.',
  feature1Title: 'Zero Uploads para Servidores',
  feature1Desc: 'Suas fotos permanecem no seu computador ou celular. O motor HTML5 Canvas processa tudo no navegador com segurança total.',
  feature2Title: 'Motor Canvas Ultrarrápido',
  feature2Desc: 'Pré-visualizações em tempo real, processamento em lote e codificadores WebP/PNG de alto desempenho sem filas.',
  feature3Title: 'Pronto para Desenvolvedores',
  feature3Desc: 'Codificação Base64, rasterização de SVG, remoção de EXIF e geração de pacotes favicon num único lugar.',
  categories: [
    { id: 'edit', label: 'Editar e Transformar', description: 'Cortar, redimensionar, girar, inverter e criar molduras' },
    { id: 'optimize', label: 'Otimizar e Comprimir', description: 'Reduzir tamanho de arquivo e remover metadados' },
    { id: 'convert', label: 'Converter Formatos', description: 'Converter entre WebP, PNG, JPG e AVIF' },
    { id: 'utilities', label: 'Calculadoras e Utilitários', description: 'Conta-gotas de cor, proporções e cálculo de DPI' },
    { id: 'developer', label: 'Ferramentas Web e Dev', description: 'Gerador de favicon, Base64 e Data URIs' }
  ],
  faqs: [
    {
      question: 'Minhas fotos são enviadas para algum servidor externo?',
      answer: 'Não. Nunca. O Image Toolbox executa todas as operações dentro do seu próprio navegador através do HTML5 Canvas. Seus arquivos nunca são enviados pela internet.'
    },
    {
      question: 'O Image Toolbox é realmente 100% gratuito?',
      answer: 'Sim, todas as 27 ferramentas são completamente gratuitas, sem limites de uso, sem marcas d’água e sem cadastro.'
    },
    {
      question: 'Quais formatos de imagem posso converter e otimizar?',
      answer: 'O Image Toolbox suporta JPG, JPEG, PNG, WebP, AVIF, SVG, GIF e Data URIs Base64 em todas as operações.'
    },
    {
      question: 'Posso processar várias imagens de uma vez?',
      answer: 'Sim! Nossas ferramentas de redimensionamento e compressão em lote processam dezenas de arquivos e geram um download instantâneo em arquivo ZIP.'
    }
  ]
};
