import type { HubTexts } from './types';

export const ptHubs: HubTexts = {
  labels: {
    server: 'Usa nosso servidor',
    more: 'Mais coleções',
    allTools: 'Todas as {count} ferramentas',
  },
  pages: {
    'pdf-tools': {
      title: 'Ferramentas PDF grátis: juntar, converter, editar e assinar',
      description: '57 ferramentas PDF grátis em um só lugar: junte, divida e comprima PDFs, converta de e para Word ou imagens, edite, assine e proteja. Sem cadastro e sem marca d’água.',
      h1: 'Ferramentas PDF',
      intro:
        'Tudo para trabalhar com PDFs, grátis e sem conta: junte e divida arquivos, transforme Word, Excel, PowerPoint e imagens em PDF e vice-versa, edite, preencha, assine e proteja. A maioria das ferramentas funciona no seu navegador, então o PDF não sai do seu dispositivo; as poucas que precisam do nosso servidor estão marcadas, e os arquivos delas são apagados logo depois.',
      groups: {
        toPdf: 'Converter para PDF',
        fromPdf: 'Converter de PDF',
        edit: 'Editar e anotar',
        pages: 'Organizar páginas',
        secure: 'Assinar, proteger e limpar',
        fix: 'Comprimir, reparar e conferir',
      },
      faqs: [
        { question: 'Essas ferramentas PDF são grátis?', answer: 'Sim. Todas são grátis, sem conta, sem marca d’água e sem limite diário.' },
        {
          question: 'Meus PDFs são enviados?',
          answer:
            'A maioria das ferramentas funciona dentro do seu navegador, então o arquivo fica no seu dispositivo. As marcadas com “Usa nosso servidor”, como Word para PDF, Comprimir PDF e OCR PDF, enviam o arquivo por uma conexão criptografada e o apagam assim que o resultado é devolvido.',
        },
      ],
    },
    'image-editing-tools': {
      title: 'Ferramentas grátis para editar imagens: cortar, redimensionar',
      description: '42 ferramentas grátis para editar fotos no navegador: corte, redimensione e gire, remova ou troque o fundo, adicione texto e marca d’água, corrija cores e ajuste imagens para redes sociais.',
      h1: 'Ferramentas para editar imagens',
      intro:
        'Edições rápidas sem instalar nada: corte e redimensione, remova ou troque o fundo, adicione texto, marcas d’água e bordas, deixe mais nítido e corrija as cores, ou ajuste uma imagem para Instagram, YouTube e outras redes. Todas funcionam no seu navegador, então suas fotos nunca são enviadas e mantêm o formato sempre que possível.',
      groups: {
        basics: 'Cortar, redimensionar e girar',
        background: 'Fundos e recortes',
        text: 'Texto, marcas d’água e anotações',
        enhance: 'Corrigir e melhorar',
        social: 'Tamanhos para redes sociais',
        combine: 'Juntar e dividir',
      },
      faqs: [
        { question: 'Preciso instalar um app?', answer: 'Não. As ferramentas funcionam em qualquer navegador atual, no computador ou no celular, e suas fotos ficam no seu dispositivo.' },
        {
          question: 'Minha foto perde qualidade?',
          answer: 'As edições são feitas na foto em tamanho real, que é salva no formato original sempre que possível. Arquivos JPG e WebP são salvos de novo com alta qualidade.',
        },
      ],
    },
    'image-format-converters': {
      title: 'Conversor de imagens grátis: HEIC, JPG, PNG, WebP, AVIF',
      description: '26 conversores de imagem grátis no navegador: HEIC para JPG, JPG para PNG, WebP e AVIF, GIF, BMP, TIFF e SVG para formatos comuns, vários arquivos de uma vez.',
      h1: 'Conversores de formato de imagem',
      intro:
        'Passe uma imagem para o formato que você precisa: fotos HEIC do iPhone para JPG, PNG para JPG ou WebP para arquivos menores, AVIF para a web, ou GIF, BMP, TIFF e SVG para formatos do dia a dia. A maioria dos conversores aceita vários arquivos de uma vez, e todos funcionam no seu navegador, então nada é enviado. Não sabe qual usar? O Conversor de imagens abre quase qualquer imagem e salva como JPG, PNG, WebP ou AVIF.',
      groups: {
        any: 'Qualquer formato',
        heic: 'Fotos do iPhone (HEIC)',
        jpgPng: 'JPG e PNG',
        web: 'WebP e AVIF',
        other: 'GIF, BMP, TIFF e SVG',
        pdf: 'Para PDF e texto',
      },
      faqs: [
        {
          question: 'Qual formato devo escolher?',
          answer: 'JPG para fotos que precisam abrir em qualquer lugar, PNG para capturas de tela, logos e transparência, e WebP ou AVIF para arquivos menores em sites. Fotos HEIC do iPhone ficam melhores em JPG para compartilhar.',
        },
        { question: 'Posso converter muitas imagens de uma vez?', answer: 'Sim. Solte vários arquivos em um conversor e eles são convertidos juntos com os mesmos ajustes, depois baixados em um só ZIP.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: 'Gerador e leitor de QR code e código de barras grátis',
      description: '15 ferramentas grátis para criar QR codes de links, Wi-Fi, contatos, WhatsApp e pagamentos, gerar códigos de barras EAN, UPC e ISBN, e ler códigos com a câmera.',
      h1: 'Ferramentas de QR code e código de barras',
      intro:
        'Crie um QR code para um link, uma rede Wi-Fi, um cartão de contato, uma conversa no WhatsApp ou um pagamento, gere códigos de barras EAN, UPC, ISBN, Data Matrix e PDF417, ou crie centenas de uma vez a partir de uma lista e imprima numa folha. Você também pode ler códigos de uma foto ou da câmera. Tudo funciona no seu navegador, sem cadastro.',
      groups: {
        qr: 'QR codes',
        barcodes: 'Códigos de barras',
        read: 'Escanear e ler',
      },
      faqs: [
        { question: 'Os QR codes expiram?', answer: 'Não. O conteúdo fica no próprio código, não atrás de um link nosso, então funciona enquanto o código impresso puder ser lido.' },
        {
          question: 'Posso usar esses códigos de barras em produtos de loja?',
          answer: 'Os códigos seguem o padrão, mas números EAN e UPC de produtos vendidos em lojas precisam vir da GS1. Para seu estoque, prateleiras ou eventos, qualquer número funciona.',
        },
      ],
    },
    'image-utilities': {
      title: 'Utilitários de imagem grátis: EXIF, conta-gotas, DPI e mais',
      description: '21 ferramentas grátis para analisar e medir imagens: veja e remova metadados, capture cores, altere o DPI, converta pixels em polegadas ou cm, compare fotos e copie o texto de imagens.',
      h1: 'Utilitários de imagem',
      intro:
        'Pequenas ferramentas para as dúvidas que surgem com imagens: o que os metadados de uma foto revelam e como removê-los, quais cores ela usa, de que tamanho ela sai impressa em certo DPI, se duas fotos são diferentes ou que texto ela contém. Todas funcionam no seu navegador, então suas imagens ficam no seu dispositivo.',
      groups: {
        inspect: 'Analisar fotos',
        colour: 'Cores',
        size: 'Tamanhos, DPI e impressão',
        text: 'Texto e mensagens ocultas',
      },
      faqs: [
        {
          question: 'Posso tirar a localização de uma foto?',
          answer: 'Sim. Remover metadados da imagem apaga a localização GPS, os dados da câmera e outros dados EXIF, e o Visualizador de EXIF mostra o que a foto contém antes de você compartilhar.',
        },
        {
          question: 'Que DPI preciso para imprimir?',
          answer: '300 DPI é o comum para fotos e documentos. O DPI só define o tamanho impresso, não a quantidade de pixels: Alterar DPI da imagem grava o valor no arquivo, e as calculadoras Pixels para polegadas e Pixels para cm mostram o tamanho da impressão.',
        },
      ],
    },
  },
};
