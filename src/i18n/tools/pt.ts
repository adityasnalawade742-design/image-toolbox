import type { LocalizedToolItem } from '../types';

export const ptTools: Record<string, LocalizedToolItem> = {
  "crop-image": {
    name: "Cortar imagem",
    shortName: "Cortar",
    tagline: "Recorte a parte da foto que você quer com as alças de arraste, valores exatos em pixels ou proporções prontas.",
    intro:
      "Cortar imagem recorta a foto na área que você selecionar e salva só essa área em resolução total. Use para tirar bordas vazias, enquadrar um assunto ou ajustar ao formato que um post de rede social exige. Além do corte livre, há proporções prontas como 1:1, 4:5, 9:16 e 16:9, campos de pixels exatos e um modo círculo para fotos de perfil.",
    seoTitle: "Cortar imagem online grátis, sem upload",
    seoDescription:
      "Cortar imagem online grátis. Arraste a moldura ou digite os pixels exatos, use 1:1, 4:5, 16:9 ou 9:16 e salve em JPG, PNG, WebP ou AVIF. Sem upload.",
    keywords: [
      "cortar imagem",
      "cortar foto online",
      "recortar imagem",
      "cortar foto quadrada",
      "cortar foto para instagram",
      "cortar imagem em círculo",
      "cortar imagem sem perder qualidade",
    ],
    howToSteps: [
      {
        title: "Adicione sua foto",
        description:
          "Arraste uma imagem para a área de envio, clique para escolher um arquivo ou cole com Ctrl+V. Arquivos JPG, PNG, WebP, AVIF, GIF e HEIC do iPhone são aceitos.",
      },
      {
        title: "Selecione a área do corte",
        description:
          "Arraste a moldura e as alças na prévia, ou clique em uma proporção como Quadrado 1:1, Story 9:16 ou um tamanho de rede social. Para um resultado exato, digite a borda esquerda, a borda superior, a largura e a altura em pixels.",
      },
      {
        title: "Escolha o formato do corte e do arquivo",
        description:
          "Mude para Círculo para um corte redondo (1:1). O formato original do arquivo é mantido por padrão, ou você pode escolher JPG, PNG, WebP ou AVIF em Salvar como.",
      },
      {
        title: "Baixe a imagem cortada",
        description:
          "Clique em Baixar para salvar só a área selecionada em resolução total, ou copie para a área de transferência.",
      },
    ],
    features: [
      {
        title: "Proporções e tamanhos para redes sociais",
        description:
          "Original, 1:1, 4:3, 16:9, 9:16, 2:3, 3:2 e 21:9, além de formatos para retrato do Instagram (4:5), Reels e TikTok, miniaturas do YouTube e pins do Pinterest.",
      },
      {
        title: "Valores exatos em pixels",
        description:
          "Digite a posição, a largura e a altura em pixels, trave a proporção se precisar e veja o tamanho final antes de salvar.",
      },
      {
        title: "Corte em círculo para avatares",
        description:
          "O modo círculo trava a moldura em um quadrado e gera uma imagem redonda. Salve em PNG ou WebP para manter os cantos transparentes.",
      },
      {
        title: "Corte feito nos pixels originais",
        description:
          "A prévia pode ser reduzida para ficar mais rápida, mas o download é cortado da foto em resolução total no seu dispositivo. Nada é enviado.",
      },
    ],
    faqs: [
      {
        question: "Cortar a imagem reduz a qualidade?",
        answer:
          "O corte só remove os pixels fora da moldura; o resto continua nítido. Se você salvar em JPG, WebP ou AVIF, a imagem é comprimida de novo, então use qualidade de 90% ou mais, ou salve em PNG, para ficar perto do original.",
      },
      {
        question: "Como cortar uma foto quadrada para o Instagram?",
        answer:
          "Clique em Quadrado 1:1 ou no tamanho de post do Instagram (1:1) e arraste a moldura sobre a parte que você quer manter. Para um post em retrato mais alto, use o retrato do Instagram (4:5).",
      },
      {
        question: "Como fazer uma foto de perfil redonda?",
        answer:
          "Selecione Círculo (1:1), posicione o círculo sobre o rosto e salve em PNG ou WebP. O JPG não guarda transparência, então a área fora do círculo seria preenchida de branco.",
      },
      {
        question: "Posso cortar uma foto HEIC do iPhone?",
        answer:
          "Sim. O arquivo HEIC é convertido no seu navegador quando você o abre. O resultado cortado é salvo em JPG por padrão, e você pode mudar para PNG, WebP ou AVIF.",
      },
      {
        question: "Os dados EXIF da foto são mantidos depois do corte?",
        answer:
          "Não. O novo arquivo é criado só a partir dos pixels da imagem, então os dados da câmera e a localização GPS do original não são copiados.",
      },
      {
        question: "Posso cortar um GIF animado?",
        answer:
          "Você pode abrir um GIF, mas o resultado é uma única imagem estática, porque JPG, PNG, WebP e AVIF são salvos aqui sem animação.",
      },
    ],
  },
  "resize-image": {
    name: "Redimensionar imagem",
    shortName: "Redimensionar",
    tagline: "Mude a largura e a altura de uma imagem em pixels ou por porcentagem, com a proporção travada ou livre.",
    intro:
      "Redimensionar imagem muda as dimensões em pixels de uma foto ou arte. Use para deixar uma foto grande de câmera pequena o bastante para e-mail ou site, ou para chegar a um tamanho exato como 1080 × 1080. Você pode digitar a largura e a altura ou mudar a escala de 10% a 300%, e a opção Não ampliar evita que você aumente uma imagem por engano.",
    seoTitle: "Redimensionar imagem online em pixels ou %",
    seoDescription:
      "Redimensionar imagem online grátis. Digite a largura e a altura exatas em pixels ou mude a escala em %, mantenha a proporção e salve em JPG, PNG, WebP ou AVIF.",
    keywords: [
      "redimensionar imagem",
      "redimensionar imagem online",
      "mudar tamanho da imagem em pixels",
      "redimensionar foto sem perder qualidade",
      "redimensionar imagem para 1080x1080",
      "diminuir tamanho da imagem",
      "aumentar tamanho da imagem",
    ],
    howToSteps: [
      {
        title: "Abra sua imagem",
        description: "Arraste, escolha ou cole (Ctrl+V) uma imagem JPG, PNG, WebP, AVIF ou HEIC do iPhone.",
      },
      {
        title: "Defina o novo tamanho",
        description:
          "No modo Pixels, digite a largura ou a altura; com Manter proporção ativado, o outro lado muda sozinho. No modo Porcentagem, use o controle deslizante ou os botões de 25% a 200%.",
      },
      {
        title: "Escolha o formato do arquivo",
        description:
          "O formato original é mantido por padrão. Você pode mudar para JPG, PNG, WebP ou AVIF e ajustar a qualidade de JPG, WebP e AVIF.",
      },
      {
        title: "Baixe o resultado",
        description:
          "Clique em Baixar para salvar a imagem redimensionada, ou envie para Comprimir se também quiser um arquivo menor.",
      },
    ],
    features: [
      {
        title: "Pixels ou porcentagem",
        description: "Digite dimensões exatas de até 10.000 pixels, ou mude a escala da imagem inteira de 10% a 300%.",
      },
      {
        title: "Trava de proporção",
        description:
          "Mantenha as proporções originais para a imagem não ficar esticada, ou destrave para definir a largura e a altura separadamente.",
      },
      {
        title: "Sem ampliação",
        description:
          "Limita o tamanho às dimensões originais, para que uma imagem pequena nunca seja aumentada e fique borrada sem querer.",
      },
      {
        title: "Mantém o tipo do arquivo",
        description: "Um JPG continua JPG e um PNG continua PNG, a menos que você escolha outro formato.",
      },
    ],
    faqs: [
      {
        question: "Como redimensionar uma imagem sem perder qualidade?",
        answer:
          "Diminuir uma imagem mantém a nitidez. Aumentar além do original não cria detalhes, então ela fica mais suave; ative Não ampliar para evitar isso. Salve em PNG, ou use qualidade de 90% ou mais para JPG e WebP.",
      },
      {
        question: "Redimensionar diminui o tamanho do arquivo?",
        answer:
          "Normalmente, sim. Reduzir a largura e a altura pela metade deixa cerca de um quarto dos pixels, então o arquivo fica bem menor. Para arquivos ainda menores, comprima o resultado depois.",
      },
      {
        question: "Posso redimensionar para um tamanho exato como 1080 × 1080?",
        answer:
          "Sim. Desative Manter proporção e digite os dois números. Se o original não for quadrado, ele vai ficar esticado, então corte em 1:1 primeiro e depois redimensione.",
      },
      {
        question: "Posso redimensionar várias imagens de uma vez?",
        answer:
          "Esta página redimensiona uma imagem por vez. Para redimensionar até 50 imagens de uma vez e baixar em um ZIP, use o Redimensionar imagens em lote.",
      },
      {
        question: "Posso redimensionar fotos do meu iPhone?",
        answer:
          "Sim. As fotos HEIC são convertidas no seu navegador e a imagem redimensionada é salva em JPG por padrão.",
      },
    ],
  },
  "compress-image": {
    name: "Comprimir imagem",
    shortName: "Comprimir",
    tagline: "Deixe o arquivo de imagem menor escolhendo o formato e a qualidade, e veja o novo tamanho antes de baixar.",
    intro:
      "Comprimir imagem reduz o tamanho do arquivo de uma foto para ela carregar mais rápido em um site ou caber no limite de um e-mail ou envio. A imagem é salva de novo no próprio formato (o padrão) ou em WebP, AVIF, JPG ou PNG na qualidade que você escolher, e o novo tamanho estimado e a porcentagem economizada aparecem enquanto você move o controle. O modo Tamanho do arquivo define a qualidade para você quando é preciso ficar abaixo de um limite como 100 KB.",
    seoTitle: "Comprimir imagem online: reduza o tamanho",
    seoDescription:
      "Comprimir imagem online grátis. Escolha WebP, AVIF, JPG ou PNG, defina a qualidade ou um tamanho em KB e veja a economia antes de baixar. Sem upload.",
    keywords: [
      "comprimir imagem",
      "reduzir tamanho de imagem",
      "comprimir jpg",
      "comprimir imagem para 100kb",
      "compressor de imagem online",
      "diminuir tamanho da foto em kb",
      "comprimir png",
      "converter imagem para webp",
    ],
    howToSteps: [
      {
        title: "Adicione uma imagem",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Escolha o formato de saída",
        description:
          "O formato do seu arquivo vem selecionado por padrão. O WebP costuma ser menor. O AVIF costuma gerar os menores arquivos, mas demora mais para codificar; o JPG abre em qualquer lugar; e o PNG é sem perdas, então é o que menos economiza espaço.",
      },
      {
        title: "Defina a qualidade ou um tamanho alvo",
        description:
          "Mova o controle de qualidade e acompanhe a estimativa de tamanho, ou mude para Tamanho do arquivo e digite um tamanho em KB ou clique em 50, 100, 200 ou 500 KB.",
      },
      {
        title: "Confira e baixe",
        description: "Veja a prévia e a porcentagem economizada e clique em Baixar.",
      },
    ],
    features: [
      {
        title: "Estimativa de tamanho ao vivo",
        description:
          "O novo tamanho do arquivo e a porcentagem economizada mudam conforme você ajusta as opções, e você recebe um aviso quando o resultado ficaria maior que o original.",
      },
      {
        title: "AVIF, WebP, JPG e PNG",
        description:
          "Quatro formatos de saída, incluindo AVIF, codificado direto no seu navegador com um codificador WebAssembly.",
      },
      {
        title: "Modo de tamanho alvo",
        description:
          "Digite um tamanho em KB e a ferramenta escolhe a qualidade para chegar perto dele. É uma estimativa, então confira o tamanho ao vivo antes de baixar.",
      },
      {
        title: "As dimensões não mudam",
        description:
          "A compressão mantém a largura e a altura. Para um arquivo bem menor, redimensione primeiro e depois comprima.",
      },
    ],
    faqs: [
      {
        question: "Quanto menor minha imagem vai ficar?",
        answer:
          "Depende da imagem. Fotos grandes de câmera costumam diminuir bastante em WebP ou AVIF com qualidade de 70% a 85%, enquanto artes pequenas ou arquivos já comprimidos podem diminuir muito pouco. A estimativa ao vivo mostra o resultado antes do download.",
      },
      {
        question: "Qual formato gera o menor arquivo: AVIF, WebP ou JPG?",
        answer:
          "O AVIF costuma ser o menor com qualidade visual parecida, seguido do WebP e depois do JPG. O AVIF demora mais para codificar no navegador, principalmente em fotos grandes, e alguns programas antigos não conseguem abri-lo.",
      },
      {
        question: "Como comprimir uma imagem para 100 KB?",
        answer:
          "Escolha Tamanho do arquivo e clique em 100 KB. Se o tamanho ao vivo ainda passar de 100 KB, baixe um pouco mais a qualidade, ou reduza as dimensões com Redimensionar imagem antes.",
      },
      {
        question: "A compressão vai piorar minha foto?",
        answer:
          "WebP, AVIF e JPG removem detalhes difíceis de perceber. Com qualidade de 75% a 90%, a maioria das fotos parece igual no tamanho normal de visualização, enquanto valores muito baixos causam borrões e blocos.",
      },
      {
        question: "Por que o arquivo comprimido ficou maior que o original?",
        answer:
          "Isso acontece quando o original já estava bem otimizado, ou quando uma foto é salva em PNG. Tente WebP ou AVIF, ou uma qualidade menor.",
      },
      {
        question: "Os dados EXIF são removidos quando comprimo uma foto?",
        answer:
          "Sim. O novo arquivo é criado a partir dos pixels da imagem, então os dados da câmera e a localização GPS não são incluídos.",
      },
    ],
  },
  "rotate-image": {
    name: "Girar imagem",
    shortName: "Girar",
    tagline: "Gire uma imagem em 90°, 180° ou em qualquer ângulo de -180° a 180° e salve no formato que você precisa.",
    intro:
      "Girar imagem corrige fotos que aparecem de lado ou de cabeça para baixo e endireita fotos um pouco tortas. Use os botões de 90° para giros rápidos ou o controle de ângulo personalizado para pequenos ajustes. Quando o ângulo não é múltiplo de 90°, a tela aumenta para caber a imagem girada inteira, então nenhum canto é cortado.",
    seoTitle: "Girar imagem online: 90°, 180° ou qualquer ângulo",
    seoDescription:
      "Girar imagem online grátis. Gire a foto 90° para a esquerda ou direita, 180° ou em qualquer ângulo e salve em JPG, PNG, WebP ou AVIF. Sem upload.",
    keywords: [
      "girar imagem",
      "girar foto online",
      "girar imagem 90 graus",
      "rotacionar imagem",
      "endireitar foto",
      "girar jpg",
      "girar imagem em qualquer ângulo",
    ],
    howToSteps: [
      {
        title: "Abra a imagem",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Gire a imagem",
        description:
          "Clique em +90° para girar no sentido horário, -90° para girar no sentido anti-horário ou 180° para virar de cabeça para baixo. Para um pequeno ajuste, arraste o controle de ângulo personalizado.",
      },
      {
        title: "Escolha o formato",
        description:
          "O formato original é mantido por padrão. Depois de um ângulo personalizado, PNG, WebP e AVIF deixam os novos cantos transparentes, enquanto o JPG os preenche de branco.",
      },
      {
        title: "Baixe",
        description: "Clique em Baixar para salvar a imagem girada, ou copie para a área de transferência.",
      },
    ],
    features: [
      {
        title: "Giros rápidos de 90° e 180°",
        description: "Corrija fotos de lado ou de cabeça para baixo com um clique, e use Redefinir para voltar ao início.",
      },
      {
        title: "Qualquer ângulo",
        description: "Endireite um horizonte ou documento torto com o controle deslizante, de grau em grau, de -180° a 180°.",
      },
      {
        title: "Nada é cortado",
        description: "Em ângulos personalizados, a tela de saída aumenta para que a imagem girada caiba inteira.",
      },
      {
        title: "Funciona com fotos do iPhone",
        description: "As fotos HEIC são convertidas no seu navegador, então você não precisa convertê-las antes.",
      },
    ],
    faqs: [
      {
        question: "Por que minha foto aparece de lado em alguns apps?",
        answer:
          "Os celulares costumam salvar a imagem em uma direção e adicionar uma marcação de rotação nos dados EXIF, que alguns apps ignoram. O arquivo que você baixa aqui tem os próprios pixels girados e nenhuma marcação de rotação, então aparece igual em qualquer lugar.",
      },
      {
        question: "Girar uma imagem reduz a qualidade?",
        answer:
          "Girar 90° ou 180° move os pixels sem alterá-los. Outros ângulos exigem recalcular os pixels, o que suaviza a imagem muito de leve. Salvar em JPG, WebP ou AVIF também comprime de novo, o que o PNG evita.",
      },
      {
        question: "O que preenche os cantos depois de um giro personalizado?",
        answer:
          "A tela aumenta para caber a imagem girada. Em PNG, WebP e AVIF os novos cantos ficam transparentes; em JPG ficam brancos.",
      },
      {
        question: "Posso girar uma foto HEIC do iPhone?",
        answer:
          "Sim. A foto é convertida no seu navegador e a versão girada é salva em JPG, a menos que você escolha outro formato.",
      },
    ],
  },
  "flip-image": {
    name: "Espelhar imagem",
    shortName: "Espelhar",
    tagline: "Espelhe uma imagem na horizontal ou na vertical, por exemplo para corrigir uma selfie invertida ou um texto ao contrário.",
    intro:
      "Espelhar imagem cria uma cópia espelhada de uma foto. O espelhamento horizontal troca a esquerda pela direita, o que corrige selfies da câmera frontal em que a escrita aparece ao contrário. O espelhamento vertical vira a imagem de cabeça para baixo, como um reflexo na água, e usar os dois juntos dá o mesmo resultado que girar 180°.",
    seoTitle: "Espelhar imagem online: horizontal ou vertical",
    seoDescription:
      "Espelhar imagem online grátis. Inverta uma foto na horizontal ou vertical, corrija selfies e textos ao contrário e salve em JPG, PNG, WebP ou AVIF. Sem upload.",
    keywords: [
      "espelhar imagem",
      "inverter imagem",
      "espelhar foto online",
      "inverter foto horizontalmente",
      "inverter imagem verticalmente",
      "desespelhar selfie",
      "virar imagem",
    ],
    howToSteps: [
      {
        title: "Abra a imagem",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Escolha a direção",
        description:
          "Clique em Horizontal para trocar esquerda e direita, ou em Vertical para virar de cabeça para baixo. Clique de novo em um botão para desfazer, ou use Espelhar ambos ou Redefinir.",
      },
      {
        title: "Escolha o formato",
        description: "O formato original é mantido por padrão, ou você pode salvar em JPG, PNG, WebP ou AVIF.",
      },
      {
        title: "Baixe",
        description: "Clique em Baixar para salvar a imagem espelhada, ou copie para a área de transferência.",
      },
    ],
    features: [
      {
        title: "Espelho horizontal e vertical",
        description: "Espelhe em uma direção ou nas duas e veja o resultado na prévia na hora.",
      },
      {
        title: "Os pixels não são alterados",
        description: "Espelhar só muda os pixels de lugar. Salve em PNG para manter cada pixel exatamente como era.",
      },
      {
        title: "Mantém seu formato",
        description: "Um JPG é salvo como JPG e um PNG como PNG por padrão, então você recebe o mesmo tipo de arquivo.",
      },
      {
        title: "Processado no seu navegador",
        description: "A imagem é espelhada no seu dispositivo e nunca é enviada para um servidor.",
      },
    ],
    faqs: [
      {
        question: "Qual a diferença entre espelhar e girar?",
        answer:
          "Espelhar cria uma imagem refletida, então qualquer texto fica ao contrário. Girar vira a imagem inteira em torno do centro, e o texto continua legível.",
      },
      {
        question: "Como corrigir uma selfie espelhada?",
        answer:
          "Muitas câmeras frontais salvam selfies espelhadas. Abra a foto, clique em Horizontal e baixe; o texto ao fundo volta a ficar legível.",
      },
      {
        question: "Espelhar uma imagem reduz a qualidade?",
        answer:
          "O espelhamento em si não altera nenhum valor de pixel. Se você salvar em JPG, WebP ou AVIF, a imagem é comprimida de novo, então use uma qualidade alta ou PNG.",
      },
      {
        question: "Posso espelhar uma imagem nos dois sentidos de uma vez?",
        answer:
          "Sim. Espelhar ambos inverte a imagem na horizontal e na vertical, o que fica igual a girá-la 180°.",
      },
    ],
  },
  "convert-image": {
    name: "Conversor de imagens",
    shortName: "Conversor",
    tagline: "Converta imagens JPG, PNG, WebP, AVIF, GIF, BMP, SVG ou HEIC do iPhone para JPG, PNG, WebP ou AVIF.",
    intro:
      "O Conversor de imagens muda uma imagem de um formato de arquivo para outro. Ele abre qualquer imagem que seu navegador consegue exibir, como JPG, PNG, WebP, AVIF, GIF, BMP e SVG, além de fotos HEIC do iPhone, e salva em JPG, PNG, WebP ou AVIF. Fotos JPG e HEIC vêm com WebP como padrão e as outras imagens com PNG, mas você pode escolher qualquer uma das quatro saídas.",
    seoTitle: "Conversor de imagens: JPG, PNG, WebP, AVIF, HEIC",
    seoDescription:
      "Conversor de imagens grátis no navegador. Converta HEIC, PNG, JPG, WebP, GIF, BMP ou SVG para JPG, PNG, WebP ou AVIF com qualidade ajustável.",
    keywords: [
      "converter imagem",
      "conversor de imagens",
      "converter imagem para jpg",
      "converter heic para jpg",
      "converter imagem para webp",
      "converter imagem para avif",
      "converter gif para png",
      "converter bmp para jpg",
    ],
    howToSteps: [
      {
        title: "Abra sua imagem",
        description: "Arraste, escolha ou cole uma imagem em qualquer formato que seu navegador abra, ou uma foto HEIC do iPhone.",
      },
      {
        title: "Escolha o formato de saída",
        description: "Em Salvar como, selecione JPG, PNG, WebP ou AVIF.",
      },
      {
        title: "Ajuste a qualidade e o fundo",
        description:
          "Para JPG, WebP e AVIF, defina a qualidade. Se a imagem tiver áreas transparentes e você escolheu JPG, escolha a cor que vai preenchê-las.",
      },
      {
        title: "Baixe o arquivo convertido",
        description: "Clique em Baixar. O AVIF pode levar alguns segundos em fotos grandes, porque é codificado no seu navegador.",
      },
    ],
    features: [
      {
        title: "Vários formatos de entrada",
        description: "Abre JPG, PNG, WebP, AVIF, GIF, BMP, SVG e outros formatos que seu navegador aceita, além de HEIC e HEIF.",
      },
      {
        title: "Quatro saídas modernas",
        description: "Salve em JPG, PNG, WebP ou AVIF. O AVIF é codificado no seu dispositivo com um codificador WebAssembly.",
      },
      {
        title: "Transparência tratada corretamente",
        description: "PNG, WebP e AVIF mantêm as áreas transparentes. No JPG, você escolhe a cor que vai substituí-las.",
      },
      {
        title: "Controle de qualidade",
        description: "Defina a qualidade de 10% a 100% nos formatos com perdas para equilibrar tamanho e detalhes.",
      },
    ],
    faqs: [
      {
        question: "Como converter HEIC para JPG?",
        answer:
          "Abra a foto HEIC, selecione JPG em Salvar como e clique em Baixar. A conversão acontece no seu navegador, então a foto não é enviada para lugar nenhum.",
      },
      {
        question: "Qual formato devo escolher?",
        answer:
          "JPG para fotos que precisam abrir em qualquer lugar, PNG para capturas de tela, logos e artes com bordas nítidas ou transparência, WebP para imagens menores na web e AVIF para os menores arquivos em navegadores modernos.",
      },
      {
        question: "Posso converter para GIF, BMP ou SVG?",
        answer:
          "Não. Esses formatos podem ser abertos, mas a saída é sempre JPG, PNG, WebP ou AVIF. Um GIF animado vira uma única imagem estática.",
      },
      {
        question: "Meu fundo transparente vai ser mantido?",
        answer:
          "Sim, se você salvar em PNG, WebP ou AVIF. O JPG não guarda transparência, então as áreas transparentes são preenchidas com a cor que você escolher.",
      },
      {
        question: "A conversão é sem perdas?",
        answer:
          "Salvar em PNG é sem perdas. JPG, WebP e AVIF são formatos com perdas: uma qualidade maior mantém mais detalhes, mas gera um arquivo maior.",
      },
    ],
  },
  "jpg-to-png": {
    name: "JPG para PNG",
    shortName: "JPG → PNG",
    tagline: "Transforme uma foto JPG em um arquivo PNG que não perde mais qualidade quando você edita e salva de novo.",
    intro:
      "JPG para PNG converte uma imagem JPEG para o formato PNG. O PNG usa compressão sem perdas, então a imagem não perde mais qualidade a cada vez que você edita e salva, o que é útil para capturas de tela, artes e arquivos que você vai editar depois. O PNG tem exatamente os mesmos pixels e dimensões do seu JPG, mas o arquivo costuma ser maior.",
    seoTitle: "Converter JPG para PNG grátis, no navegador",
    seoDescription:
      "Converter JPG para PNG online grátis. Gere um PNG sem perdas com os mesmos pixels e dimensões do seu JPEG, criado no seu navegador, sem enviar o arquivo.",
    keywords: [
      "jpg para png",
      "converter jpg para png",
      "jpeg para png",
      "conversor jpg para png",
      "transformar jpg em png",
      "salvar jpg como png",
    ],
    howToSteps: [
      {
        title: "Abra um JPG",
        description: "Arraste um arquivo JPG ou JPEG para a área de envio, clique para escolher um ou cole com Ctrl+V.",
      },
      {
        title: "Confira a prévia",
        description: "A saída é sempre PNG, então não há opções para mudar. As dimensões continuam as mesmas.",
      },
      {
        title: "Baixe o PNG",
        description: "Clique em Baixar PNG, ou envie a imagem para outra ferramenta, como Redimensionar, pelos botões de próximo passo.",
      },
    ],
    features: [
      {
        title: "Cópia exata dos pixels",
        description: "Cada pixel do JPG é guardado no PNG sem nova perda por compressão.",
      },
      {
        title: "Seguro para editar várias vezes",
        description: "O PNG pode ser editado e salvo muitas vezes sem novos artefatos de compressão.",
      },
      {
        title: "Mesmas dimensões",
        description: "O PNG tem a mesma largura e altura do JPG original.",
      },
      {
        title: "Sem upload",
        description: "O arquivo é convertido dentro da aba do navegador e fica no seu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "Converter JPG para PNG melhora a qualidade?",
        answer:
          "Não. O PNG mantém a imagem exatamente como está agora, mas não recupera detalhes que a compressão JPEG já removeu.",
      },
      {
        question: "Converter para PNG deixa o fundo transparente?",
        answer:
          "Não. Um JPG não tem transparência, então o PNG mantém o mesmo fundo sólido. Para tirar o fundo, use a ferramenta Remover fundo.",
      },
      {
        question: "Por que o arquivo PNG é maior que o JPG?",
        answer:
          "O PNG guarda cada pixel sem compressão com perdas, enquanto o JPG descarta detalhes finos para economizar espaço. Fotos salvas em PNG costumam ficar várias vezes maiores.",
      },
      {
        question: "Posso converter vários JPGs para PNG de uma vez?",
        answer:
          "Sim. Escolha ou arraste até 50 JPGs: eles são convertidos um após o outro, e você pode baixar cada PNG ou todos juntos em um ZIP.",
      },
      {
        question: "Os dados EXIF do JPG são mantidos?",
        answer:
          "Não. O PNG é criado só a partir dos pixels, então os dados da câmera e a localização GPS não são copiados.",
      },
    ],
  },
  "png-to-jpg": {
    name: "PNG para JPG",
    shortName: "PNG → JPG",
    tagline: "Converta um PNG em um arquivo JPG menor e escolha a cor que substitui as áreas transparentes.",
    intro:
      "PNG para JPG transforma uma imagem PNG em JPEG, que costuma ser bem menor para fotos e é aceito por quase todos os sites e apps. O JPEG não guarda transparência, então você escolhe branco, preto ou qualquer cor personalizada para preencher as áreas transparentes. Você também pode definir a qualidade do JPG de 10% a 100%.",
    seoTitle: "Converter PNG para JPG com a cor de fundo",
    seoDescription:
      "Converter PNG para JPG online grátis. Escolha fundo branco, preto ou outra cor para as áreas transparentes e defina a qualidade do JPG. Sem upload.",
    keywords: [
      "png para jpg",
      "converter png para jpg",
      "png para jpeg",
      "png para jpg com fundo branco",
      "conversor png para jpg",
      "reduzir tamanho de png",
    ],
    howToSteps: [
      {
        title: "Abra um PNG",
        description: "Arraste um arquivo PNG para a área de envio, clique para escolher um ou cole com Ctrl+V.",
      },
      {
        title: "Escolha a cor de fundo",
        description: "Escolha Branco, Preto ou qualquer cor no seletor de cores. Ela preenche todas as áreas transparentes.",
      },
      {
        title: "Defina a qualidade",
        description: "85% é um bom padrão. Use um valor maior para imagens com texto ou linhas finas.",
      },
      {
        title: "Baixe o JPG",
        description: "Clique em Baixar JPG para salvar o arquivo convertido.",
      },
    ],
    features: [
      {
        title: "Cor de fundo à sua escolha",
        description: "Pixels transparentes e semitransparentes são mesclados sobre branco, preto ou uma cor personalizada.",
      },
      {
        title: "Qualidade ajustável",
        description: "Escolha de 10% a 100% para equilibrar o tamanho do arquivo e os detalhes.",
      },
      {
        title: "Arquivos menores para fotos",
        description: "Fotos e capturas de tela detalhadas costumam ficar bem menores em JPG do que em PNG.",
      },
      {
        title: "Mesmas dimensões",
        description: "O JPG mantém exatamente a largura e a altura do PNG.",
      },
    ],
    faqs: [
      {
        question: "O que acontece com o fundo transparente?",
        answer:
          "O JPG não tem transparência, então os pixels transparentes e semitransparentes são mesclados sobre a cor de fundo que você escolher. O branco vem selecionado por padrão.",
      },
      {
        question: "O JPG vai ficar menor que o PNG?",
        answer:
          "Para fotos e imagens com muitas cores, normalmente sim, muitas vezes bem menor. Para artes simples com poucas cores, o PNG pode já ser pequeno, e o JPG pode até ficar maior.",
      },
      {
        question: "Qual qualidade devo usar?",
        answer:
          "85%, o padrão, funciona bem para a maioria das fotos. Use de 90% a 100% para imagens com texto ou detalhes finos, e valores menores quando o tamanho do arquivo importa mais que os detalhes.",
      },
      {
        question: "Por que o texto fica borrado no meu JPG?",
        answer:
          "A compressão JPEG pode criar bordas suaves e pequenas manchas em volta de textos e linhas nítidas. Use uma qualidade maior, ou mantenha logos e capturas de tela em PNG ou WebP.",
      },
    ],
  },
  "jpg-to-webp": {
    name: "JPG para WebP",
    shortName: "JPG → WebP",
    tagline: "Converta fotos JPG para WebP e tenha arquivos de imagem menores, que deixam as páginas da web mais rápidas.",
    intro:
      "JPG para WebP converte fotos JPEG para o formato WebP, que todos os principais navegadores atuais exibem. Com qualidade visual parecida, um arquivo WebP costuma ser menor que a mesma imagem em JPG, então as páginas que o usam carregam mais rápido. Você define a qualidade com um controle de 10% a 100%, e a imagem mantém as dimensões originais.",
    seoTitle: "Converter JPG para WebP: imagens menores",
    seoDescription:
      "Converter JPG para WebP online grátis. Tenha imagens menores para sites mais rápidos, ajuste a qualidade de 10% a 100% e mantenha o tamanho. Sem upload.",
    keywords: [
      "jpg para webp",
      "converter jpg para webp",
      "jpeg para webp",
      "conversor jpg para webp",
      "converter fotos para webp para site",
      "conversor de imagem webp",
    ],
    howToSteps: [
      {
        title: "Abra um JPG",
        description: "Arraste uma foto JPG ou JPEG para a área de envio, clique para escolher uma ou cole com Ctrl+V.",
      },
      {
        title: "Defina a qualidade",
        description: "Comece com cerca de 80%. Valores maiores mantêm mais detalhes; valores menores geram arquivos menores.",
      },
      {
        title: "Baixe o WebP",
        description: "Clique em Baixar WebP e compare o novo tamanho do arquivo com o original.",
      },
    ],
    features: [
      {
        title: "Arquivos menores com qualidade parecida",
        description: "O WebP normalmente precisa de menos bytes que o JPG para uma foto com a mesma aparência.",
      },
      {
        title: "Controle de qualidade",
        description: "Escolha qualquer qualidade de 10% a 100% conforme a velocidade da página e os detalhes que a imagem precisa.",
      },
      {
        title: "Dimensões originais",
        description: "A foto é convertida sem mudar a largura nem a altura.",
      },
      {
        title: "Convertido no seu dispositivo",
        description: "Sua foto é processada no navegador e não é enviada.",
      },
    ],
    faqs: [
      {
        question: "WebP é melhor que JPG?",
        answer:
          "Para sites, o WebP costuma gerar arquivos menores com a mesma qualidade visual e também pode guardar transparência. O JPG ainda é aceito por mais programas antigos, impressoras e formulários de envio.",
      },
      {
        question: "Todos os navegadores aceitam WebP?",
        answer:
          "As versões atuais do Chrome, Edge, Firefox e Safari exibem imagens WebP. Alguns apps e sistemas operacionais antigos não conseguem abri-las.",
      },
      {
        question: "Por que recebi um PNG em vez de um WebP?",
        answer:
          "Alguns navegadores, incluindo algumas versões do Safari, exibem WebP mas não conseguem criá-lo. Nesse caso, a ferramenta avisa e salva um PNG; use Chrome, Edge ou Firefox para ter um arquivo WebP.",
      },
      {
        question: "Como ver o tamanho do arquivo antes de baixar?",
        answer:
          "Este conversor não mostra estimativa de tamanho. O Comprimir imagem com WebP selecionado mostra o tamanho previsto e a porcentagem economizada enquanto você ajusta a qualidade.",
      },
    ],
  },
  "png-to-webp": {
    name: "PNG para WebP",
    shortName: "PNG → WebP",
    tagline: "Converta imagens PNG para WebP mantendo o fundo transparente, normalmente com um arquivo bem menor.",
    intro:
      "PNG para WebP converte arquivos PNG, como capturas de tela, logos e artes, para o formato WebP. O WebP aceita transparência, então as áreas transparentes continuam transparentes depois da conversão. O resultado costuma ser bem menor que o PNG, e um controle de qualidade permite manter textos e linhas finas nítidos.",
    seoTitle: "Converter PNG para WebP com transparência",
    seoDescription:
      "Converter PNG para WebP online grátis. O fundo transparente é mantido, os arquivos costumam ficar bem menores e você define a qualidade. Tudo no navegador.",
    keywords: [
      "png para webp",
      "converter png para webp",
      "png para webp transparente",
      "conversor png para webp",
      "reduzir tamanho de png para site",
      "webp transparente",
    ],
    howToSteps: [
      {
        title: "Abra um PNG",
        description: "Arraste um arquivo PNG para a área de envio, clique para escolher um ou cole uma captura de tela com Ctrl+V.",
      },
      {
        title: "Defina a qualidade",
        description: "Use 90% ou mais para logos, textos e capturas de tela; de 75% a 85% costuma bastar para fotos.",
      },
      {
        title: "Baixe o WebP",
        description: "Clique em Baixar WebP. As áreas transparentes continuam transparentes no novo arquivo.",
      },
    ],
    features: [
      {
        title: "Transparência mantida",
        description: "O canal alfa do seu PNG é guardado no WebP, então logos e ícones mantêm o fundo transparente.",
      },
      {
        title: "Arquivos bem menores",
        description: "A compressão WebP costuma reduzir capturas de tela e artes em PNG a uma fração do tamanho.",
      },
      {
        title: "Controle de qualidade",
        description: "Defina a qualidade de 10% a 100% conforme os detalhes que a imagem precisa.",
      },
      {
        title: "Mesmas dimensões",
        description: "O WebP mantém exatamente a largura e a altura do PNG.",
      },
    ],
    faqs: [
      {
        question: "PNG para WebP mantém o fundo transparente?",
        answer: "Sim. O WebP aceita transparência, então os pixels transparentes e semitransparentes são mantidos.",
      },
      {
        question: "Por que o WebP fica tão menor que o PNG?",
        answer:
          "O PNG é sem perdas e guarda cada pixel exatamente. O WebP aqui usa compressão com perdas, que remove detalhes difíceis de perceber e economiza muito espaço.",
      },
      {
        question: "Qual qualidade usar para logos e capturas de tela?",
        answer:
          "Use de 90% a 100% para que textos, ícones e linhas finas continuem nítidos. Para fotos, de 75% a 85% costuma bastar.",
      },
      {
        question: "Posso usar imagens WebP no meu site?",
        answer:
          "Sim. Todos os principais navegadores atuais exibem WebP. Se você também atende navegadores ou apps muito antigos, guarde o PNG original como alternativa.",
      },
    ],
  },
  "webp-to-jpg": {
    name: "WebP para JPG",
    shortName: "WebP → JPG",
    tagline: "Converta imagens WebP para JPG para que elas abram em qualquer app, visualizador de fotos ou formulário de envio.",
    intro:
      "WebP para JPG converte arquivos WebP, comuns em sites, em imagens JPEG padrão. O JPG é a opção mais segura quando um programa antigo, um formulário de envio ou um serviço de impressão não aceita WebP. Se o WebP tiver áreas transparentes, você escolhe a cor que vai preenchê-las, porque o JPG não guarda transparência.",
    seoTitle: "Converter WebP para JPG grátis, sem upload",
    seoDescription:
      "Converter WebP para JPG online grátis. Faça imagens WebP abrirem em qualquer app ou formulário, escolha a cor das áreas transparentes e defina a qualidade.",
    keywords: [
      "webp para jpg",
      "converter webp para jpg",
      "webp para jpeg",
      "salvar webp como jpg",
      "conversor webp para jpg",
      "como abrir arquivo webp",
    ],
    howToSteps: [
      {
        title: "Abra um arquivo WebP",
        description: "Arraste uma imagem WebP para a área de envio, clique para escolher uma ou cole com Ctrl+V.",
      },
      {
        title: "Defina a qualidade e a cor de preenchimento",
        description:
          "Escolha uma qualidade entre 10% e 100%. Se a imagem tiver partes transparentes, escolha a cor que vai substituí-las.",
      },
      {
        title: "Baixe o JPG",
        description: "Clique em Baixar JPG para salvar um arquivo que abre em quase qualquer lugar.",
      },
    ],
    features: [
      {
        title: "Máxima compatibilidade",
        description: "O JPG abre em quase todo programa, dispositivo, impressora e formulário de envio de sites.",
      },
      {
        title: "Cor de preenchimento para a transparência",
        description: "As áreas transparentes do WebP são preenchidas de branco ou de qualquer cor que você escolher.",
      },
      {
        title: "Qualidade ajustável",
        description: "Use o controle de qualidade para equilibrar o tamanho do arquivo e os detalhes.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é decodificada e salva em JPG no seu navegador; nada é enviado.",
      },
    ],
    faqs: [
      {
        question: "Por que imagens de sites são salvas como WebP?",
        answer:
          "Muitos sites entregam imagens em WebP porque os arquivos são menores. Quando você salva uma, recebe o arquivo WebP, que alguns programas antigos não conseguem abrir.",
      },
      {
        question: "O que acontece com as partes transparentes de um WebP?",
        answer:
          "O JPG não guarda transparência, então essas áreas são preenchidas com uma cor sólida. O branco é usado por padrão, e você pode escolher outra cor.",
      },
      {
        question: "Posso converter um WebP animado?",
        answer: "Só um quadro estático é convertido, porque o JPG não guarda animação.",
      },
      {
        question: "O JPG vai perder qualidade?",
        answer:
          "O WebP é decodificado e salvo de novo em JPG, que é um formato com perdas. Use 90% ou mais para manter o resultado bem próximo do original.",
      },
    ],
  },
  "webp-to-png": {
    name: "WebP para PNG",
    shortName: "WebP → PNG",
    tagline: "Converta imagens WebP em arquivos PNG sem perdas, que mantêm a transparência e cada pixel.",
    intro:
      "WebP para PNG converte imagens WebP em PNG, um formato sem perdas que quase todo editor e visualizador aceita. As áreas transparentes continuam transparentes, e os pixels decodificados são salvos exatamente, então a imagem não perde qualidade quando você edita e salva de novo. Use quando um app não abre WebP ou quando você precisa de um arquivo para continuar editando.",
    seoTitle: "Converter WebP para PNG sem perdas",
    seoDescription:
      "Converter WebP para PNG online grátis. Mantenha o fundo transparente e tenha um PNG sem perdas que abre em qualquer editor. Convertido no seu navegador.",
    keywords: [
      "webp para png",
      "converter webp para png",
      "webp para png transparente",
      "conversor webp para png",
      "webp para png sem perder qualidade",
      "salvar webp como png",
    ],
    howToSteps: [
      {
        title: "Abra um arquivo WebP",
        description: "Arraste uma imagem WebP para a área de envio, clique para escolher uma ou cole com Ctrl+V.",
      },
      {
        title: "Confira a prévia",
        description: "A saída é sempre um PNG sem perdas no mesmo tamanho, então não há opção de qualidade.",
      },
      {
        title: "Baixe o PNG",
        description: "Clique em Baixar PNG para salvar o arquivo convertido.",
      },
    ],
    features: [
      {
        title: "Transparência preservada",
        description: "As áreas transparentes e semitransparentes do WebP continuam transparentes no PNG.",
      },
      {
        title: "Saída sem perdas",
        description: "Os pixels decodificados são guardados exatamente, sem nova perda por compressão.",
      },
      {
        title: "Abre em qualquer lugar",
        description: "O PNG é aceito por praticamente todos os editores de imagem, visualizadores e programas de escritório.",
      },
      {
        title: "Sem upload",
        description: "A conversão acontece no seu navegador, então o arquivo fica no seu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "WebP para PNG mantém o fundo transparente?",
        answer: "Sim. O PNG aceita transparência por completo, então o fundo continua transparente.",
      },
      {
        question: "Por que o PNG é maior que o WebP?",
        answer:
          "A maioria das imagens WebP usa compressão com perdas, enquanto o PNG guarda cada pixel sem perdas. Por isso a mesma imagem costuma precisar de mais bytes em PNG.",
      },
      {
        question: "Converter para PNG melhora a qualidade da imagem?",
        answer:
          "Não. O PNG mantém a imagem exatamente como ela está agora, mas não recupera detalhes que a compressão WebP já removeu.",
      },
      {
        question: "Posso converter um WebP animado para PNG?",
        answer:
          "A ferramenta salva uma imagem estática. A saída em PNG aqui não inclui os quadros da animação.",
      },
    ],
  },
  "bulk-image-resizer": {
    name: "Redimensionar imagens em lote",
    shortName: "Redimensionar em lote",
    tagline: "Redimensione até 50 imagens de uma vez por porcentagem, largura exata ou uma caixa máxima, e baixe tudo em um ZIP.",
    intro:
      "Redimensionar imagens em lote aplica a mesma regra de tamanho a várias imagens de uma vez. Você pode mudar a escala de cada arquivo por porcentagem, definir uma largura exata ou encaixar cada imagem em uma caixa, como 1200 × 800, para que nenhum lado passe da caixa. Cada arquivo pode manter o formato original, e todos os resultados são baixados juntos em um ZIP.",
    seoTitle: "Redimensionar imagens em lote, várias de uma vez",
    seoDescription:
      "Redimensionar várias imagens de uma vez, grátis. Ajuste até 50 JPG, PNG ou WebP por %, largura exata ou caixa máxima e baixe tudo em um ZIP.",
    keywords: [
      "redimensionar imagens em lote",
      "redimensionar várias imagens de uma vez",
      "redimensionar fotos em massa",
      "redimensionar imagens em lote online",
      "diminuir várias fotos de uma vez",
      "redimensionar imagens e baixar zip",
    ],
    howToSteps: [
      {
        title: "Adicione suas imagens",
        description: "Arraste até 50 arquivos JPG, PNG ou WebP (até 50 MB cada) para a área de envio, ou clique para escolhê-los.",
      },
      {
        title: "Escolha um modo",
        description:
          "Porcentagem redimensiona cada imagem de 10% a 200%. Pixels exatos define a largura, e também a altura se você destravar a proporção. Encaixar na caixa reduz cada imagem para caber na largura e na altura que você digitar.",
      },
      {
        title: "Escolha o formato de saída",
        description:
          "Mantenha Original ou converta tudo para PNG, JPG ou WebP. A opção de não ampliar vem ativada por padrão, para que imagens menores não sejam aumentadas.",
      },
      {
        title: "Redimensione e baixe",
        description: "Clique em Redimensionar todas e depois em Baixar ZIP, ou salve arquivos individuais pela lista.",
      },
    ],
    features: [
      {
        title: "Três modos de redimensionar",
        description: "Mude a escala por porcentagem, defina uma largura exata ou encaixe em uma largura e altura máximas.",
      },
      {
        title: "Mantém o formato de cada arquivo",
        description: "Com Original, JPGs continuam JPG, PNGs continuam PNG e arquivos WebP continuam WebP.",
      },
      {
        title: "Sem ampliação",
        description:
          "Nos modos Pixels exatos e Encaixar na caixa, imagens que já são menores que o alvo mantêm o tamanho.",
      },
      {
        title: "Um único download em ZIP",
        description: "Os arquivos redimensionados mantêm os nomes originais com -resized no final e são baixados juntos em um só arquivo.",
      },
    ],
    faqs: [
      {
        question: "Quantas imagens posso redimensionar de uma vez?",
        answer:
          "Até 50 imagens por lote, cada uma com até 50 MB. Fotos muito grandes usam muita memória, então no celular pode ajudar trabalhar em lotes menores.",
      },
      {
        question: "Minhas imagens vão ficar esticadas?",
        answer:
          "Não nos modos Porcentagem e Encaixar na caixa, que sempre mantêm as proporções. No modo Pixels exatos, se você destravar a proporção e definir os dois lados, imagens com outro formato vão ficar esticadas.",
      },
      {
        question: "Quais formatos de arquivo são aceitos?",
        answer:
          "JPG, PNG e WebP. Arquivos HEIC do iPhone não são aceitos aqui; converta-os antes com o Conversor de imagens.",
      },
      {
        question: "Qual qualidade é usada para arquivos JPG e WebP?",
        answer:
          "Os arquivos JPG e WebP redimensionados são salvos com 90% de qualidade. Quando você converte imagens transparentes para JPG, as áreas transparentes ficam brancas.",
      },
      {
        question: "Meus arquivos são enviados para algum lugar?",
        answer: "Não. Todas as imagens são redimensionadas nesta aba do navegador e o arquivo ZIP é criado no seu dispositivo.",
      },
    ],
  },
  "bulk-image-compressor": {
    name: "Comprimir imagens em lote",
    shortName: "Comprimir em lote",
    tagline: "Comprima até 50 imagens de uma vez em WebP, AVIF, JPG ou PNG e baixe tudo em um ZIP.",
    intro:
      "Comprimir imagens em lote reduz o tamanho de várias imagens de uma só vez. Você escolhe um formato de saída e uma qualidade para todos os arquivos, inicia a compressão e vê o tamanho original, o novo tamanho e a porcentagem economizada de cada imagem. É útil para preparar uma pasta de fotos para um site, uma loja virtual ou um e-mail.",
    seoTitle: "Comprimir imagens em lote, várias de uma vez",
    seoDescription:
      "Comprima até 50 imagens de uma vez, grátis. Converta JPG, PNG e WebP para WebP, AVIF, JPG ou PNG, veja a economia de cada arquivo e baixe tudo em um ZIP.",
    keywords: [
      "comprimir imagens em lote",
      "comprimir várias imagens",
      "comprimir várias fotos de uma vez",
      "comprimir imagens em massa online",
      "converter imagens para webp em lote",
      "comprimir fotos e baixar zip",
    ],
    howToSteps: [
      {
        title: "Adicione suas imagens",
        description: "Arraste até 50 arquivos JPG, PNG ou WebP (até 50 MB cada), ou clique para escolhê-los.",
      },
      {
        title: "Escolha o formato e a qualidade",
        description:
          "WebP com 80% vem selecionado por padrão. Escolha AVIF para os menores arquivos, JPG para compatibilidade ou PNG para uma saída sem perdas.",
      },
      {
        title: "Comprima todos os arquivos",
        description: "Clique em Comprimir todas e veja o novo tamanho e a porcentagem economizada de cada arquivo aparecerem na lista.",
      },
      {
        title: "Baixe os resultados",
        description: "Clique em Baixar ZIP para salvar todos os arquivos comprimidos de uma vez, ou baixe arquivos individuais pela lista.",
      },
    ],
    features: [
      {
        title: "Resultado de cada arquivo",
        description:
          "Veja o tamanho antes e depois e a porcentagem economizada de cada imagem, com um aviso claro quando um arquivo ficou maior.",
      },
      {
        title: "Quatro formatos de saída",
        description: "AVIF, WebP, JPG ou PNG, com uma única qualidade de 10% a 100% para o lote inteiro.",
      },
      {
        title: "ZIP com os nomes originais",
        description: "Cada arquivo mantém o nome com -compressed no final, e nomes repetidos são numerados automaticamente.",
      },
      {
        title: "Funciona no seu dispositivo",
        description: "Todos os arquivos são comprimidos no seu navegador e nunca saem do seu computador ou celular.",
      },
    ],
    faqs: [
      {
        question: "Quantas imagens posso comprimir em um lote?",
        answer: "Você pode adicionar até 50 imagens, cada uma com até 50 MB.",
      },
      {
        question: "Qual formato de saída devo escolher?",
        answer:
          "O WebP é um bom equilíbrio entre tamanho, qualidade e compatibilidade. O AVIF costuma ser menor, mas codifica mais devagar, o que se nota com muitas fotos grandes. O JPG abre em qualquer lugar, e o PNG é sem perdas, mas é o que menos reduz o tamanho.",
      },
      {
        question: "Por que um dos meus arquivos ficou maior?",
        answer:
          "Algumas imagens já estão bem comprimidas, e salvá-las de novo não ajuda. A lista marca esses arquivos, para que você mantenha o original deles.",
      },
      {
        question: "A compressão em lote muda as dimensões das imagens?",
        answer:
          "Não, a largura e a altura continuam as mesmas. Para reduzir também as dimensões, passe os arquivos antes pelo Redimensionar imagens em lote.",
      },
      {
        question: "O que acontece com PNGs transparentes quando escolho JPG?",
        answer: "O JPG não guarda transparência, então as áreas transparentes são preenchidas de branco.",
      },
    ],
  },
  "remove-image-metadata": {
    name: "Remover metadados da imagem",
    shortName: "Remover EXIF",
    tagline: "Remova dados EXIF, como localização GPS, modelo da câmera e data, de uma foto antes de compartilhá-la.",
    intro:
      "Remover metadados da imagem cria uma cópia limpa da sua foto sem as informações EXIF ocultas. Fotos de celulares e câmeras costumam registrar a localização GPS onde foram tiradas, o modelo do aparelho e a data e hora. Em JPG, PNG e WebP, só essas informações são retiradas do arquivo: a imagem não é salva de novo, então a qualidade e as cores ficam exatamente iguais. O novo tamanho do arquivo aparece antes do download.",
    seoTitle: "Remover dados EXIF de fotos: GPS e metadados",
    seoDescription:
      "Remover metadados EXIF de fotos grátis. Apague a localização GPS, o modelo da câmera e a data antes de compartilhar. Processado no navegador, sem envio.",
    keywords: [
      "remover dados exif",
      "remover metadados de foto",
      "remover localização da foto",
      "removedor de exif",
      "apagar metadados de imagem",
      "tirar localização gps da foto",
      "remover metadados de foto do iphone",
    ],
    howToSteps: [
      {
        title: "Abra a foto",
        description: "Arraste, escolha ou cole uma foto JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Confira a cópia limpa",
        description: "A prévia mostra a imagem que vai ser salva, junto com o novo tamanho do arquivo.",
      },
      {
        title: "Mantenha o formato",
        description:
          "Mantendo o formato original, só os metadados são removidos, sem mudança de qualidade. Se você trocar de formato, a imagem é salva de novo: para JPG e WebP use qualidade de 90% a 100%, ou escolha PNG.",
      },
      {
        title: "Baixe e compartilhe o novo arquivo",
        description: "Clique em Baixar e compartilhe esta cópia no lugar da foto original.",
      },
    ],
    features: [
      {
        title: "Remove dados de localização e da câmera",
        description:
          "Coordenadas GPS, marca e modelo da câmera, lente, data da captura e outros campos EXIF e IPTC não são gravados no novo arquivo.",
      },
      {
        title: "Sem perda de qualidade",
        description: "JPG, PNG e WebP mantêm seus pixels exatos e o perfil de cor; só os dados ocultos são retirados.",
      },
      {
        title: "Tamanho do arquivo",
        description: "Veja o tamanho do arquivo limpo antes de baixá-lo.",
      },
      {
        title: "Feito no seu dispositivo",
        description: "Sua foto nunca é enviada, então a localização dela não é compartilhada com ninguém durante o processo.",
      },
    ],
    faqs: [
      {
        question: "Quais metadados são removidos?",
        answer:
          "Dados EXIF (câmera, configurações, data e GPS), campos IPTC e XMP como autor ou direitos autorais, comentários e texto de PNG. O perfil de cor é mantido para que as cores não mudem, e um JPG mantém a orientação para não aparecer de lado.",
      },
      {
        question: "Remover metadados muda a qualidade da imagem?",
        answer:
          "Não, se você mantiver o formato: arquivos JPG, PNG e WebP não são salvos de novo, então cada pixel continua igual. Se você converter para outro formato, ou começar com uma foto HEIC do iPhone, a imagem é salva de novo, então escolha uma qualidade alta.",
      },
      {
        question: "Como confirmar que a localização foi removida?",
        answer:
          "Abra o arquivo baixado no Analisador de imagem. Ele lê os dados EXIF no seu dispositivo e mostra um aviso quando há localização GPS.",
      },
      {
        question: "Apps e sites removem os dados EXIF por mim?",
        answer:
          "Algumas grandes plataformas removem parte dos metadados no envio, mas e-mail, apps de mensagens e compartilhamento de arquivos costumam enviar o arquivo original sem mudanças. Remover você mesmo é a opção segura.",
      },
      {
        question: "Posso remover metadados de fotos HEIC do iPhone?",
        answer:
          "Sim. A foto HEIC é convertida no seu navegador e a cópia limpa é salva em JPG por padrão.",
      },
    ],
  },
  "image-analyzer": {
    name: "Analisador de imagem",
    shortName: "Analisador",
    tagline: "Veja as dimensões, o tamanho do arquivo, a proporção, o tamanho de impressão e os dados EXIF da câmera, com aviso de localização GPS.",
    intro:
      "O Analisador de imagem mostra os detalhes técnicos de um arquivo de imagem sem alterá-lo. Ele informa o tamanho do arquivo, o formato, as dimensões em pixels, a proporção, os megapixels e se a imagem tem transparência. Em fotos, ele também lê os dados EXIF da câmera, como modelo, lente, exposição, ISO, data da foto e localização GPS, e avisa quando uma foto revela onde foi tirada.",
    seoTitle: "Ver dados EXIF, tamanho e dimensões da imagem",
    seoDescription:
      "Veja dados EXIF e detalhes da imagem grátis: dimensões, tamanho do arquivo, proporção e tamanho de impressão, com aviso de localização GPS.",
    keywords: [
      "ver dados exif online",
      "visualizar metadados de imagem",
      "ver dimensões da imagem",
      "ver exif da foto",
      "saber onde a foto foi tirada",
      "ver resolução da imagem",
      "informações da imagem online",
    ],
    howToSteps: [
      {
        title: "Abra uma imagem",
        description: "Arraste, escolha ou cole qualquer imagem que seu navegador abra, incluindo fotos HEIC do iPhone.",
      },
      {
        title: "Leia as especificações",
        description:
          "Veja o tamanho do arquivo, o formato, as dimensões, a proporção, os megapixels, a transparência e o tamanho de impressão a 300 DPI.",
      },
      {
        title: "Confira os dados da câmera",
        description:
          "A seção EXIF lista câmera, lente, exposição e data. Se a foto tiver localização GPS, aparece um aviso com um botão para remover os metadados.",
      },
      {
        title: "Copie o relatório",
        description: "Clique em Copiar relatório para copiar todos os valores como texto simples.",
      },
    ],
    features: [
      {
        title: "Especificações técnicas",
        description:
          "Tamanho do arquivo, formato, tipo MIME, dimensões, proporção, megapixels, profundidade de cor, transparência e uso estimado de memória.",
      },
      {
        title: "Leitor de EXIF da câmera",
        description:
          "Mostra câmera, lente, data da foto, tempo de exposição, abertura, ISO, distância focal, flash, orientação e software de edição, quando existirem.",
      },
      {
        title: "Aviso de localização GPS",
        description:
          "Mostra as coordenadas quando a foto as contém e oferece um jeito de criar uma cópia sem metadados com um clique.",
      },
      {
        title: "Estimativa do tamanho de impressão",
        description: "Mostra o tamanho da impressão a 300 DPI, em polegadas e centímetros.",
      },
      {
        title: "Somente leitura e local",
        description: "O arquivo não é alterado, e todos os dados são lidos no seu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "Como ver os dados EXIF de uma foto?",
        answer:
          "Abra a foto aqui e veja a seção de dados da câmera e EXIF. Se ela disser que não há dados EXIF, o arquivo foi salvo sem eles, o que é comum em capturas de tela e imagens baixadas de redes sociais.",
      },
      {
        question: "Como saber se uma foto mostra onde foi tirada?",
        answer:
          "Se a foto tiver coordenadas GPS, o analisador as mostra e exibe um aviso. Clique em Remover metadados para criar uma cópia sem a localização.",
      },
      {
        question: "Quais arquivos têm dados EXIF?",
        answer:
          "Fotos de celulares e câmeras em JPG e HEIC normalmente têm. Arquivos WebP e AVIF também podem ter, enquanto capturas de tela e muitas imagens exportadas ou editadas têm poucos ou nenhum.",
      },
      {
        question: "O que significa o tamanho de impressão a 300 DPI?",
        answer:
          "É o tamanho de uma impressão a 300 pontos por polegada, uma qualidade comum para fotos impressas. Por exemplo, uma imagem de 3000 × 2000 pixels é impressa com cerca de 10 × 6,7 polegadas.",
      },
      {
        question: "O valor da profundidade de cor é exato?",
        answer:
          "Ele se baseia no formato e em se a imagem tem transparência (RGB de 24 bits ou RGBA de 32 bits). Ele não detecta imagens de 16 bits ou HDR.",
      },
    ],
  },
  "image-color-picker": {
    name: "Seletor de cores da imagem",
    shortName: "Seletor de cores",
    tagline: "Clique em qualquer ponto de uma imagem para ver a cor exata em HEX, RGB, HSL, HSV e CMYK.",
    intro:
      "O Seletor de cores da imagem encontra a cor exata de qualquer pixel de uma foto. Passe o ponteiro sobre a imagem para ver uma lupa com os pixels embaixo dele, depois clique para escolher uma cor e copiar o código em HEX, RGB, HSL, HSV ou CMYK. As cores são lidas da imagem em resolução total, e não da prévia reduzida.",
    seoTitle: "Pegar cor de imagem: código HEX e RGB online",
    seoDescription:
      "Pegue cores de qualquer imagem online grátis. Clique em um pixel para ver o código HEX, RGB, HSL, HSV e CMYK, use a lupa para precisão e copie com um clique.",
    keywords: [
      "pegar cor de imagem",
      "descobrir cor de uma imagem",
      "código hex de imagem",
      "seletor de cores de imagem",
      "conta-gotas online",
      "cor rgb de imagem",
      "identificar cor de foto",
    ],
    howToSteps: [
      {
        title: "Abra uma imagem",
        description: "Arraste, escolha ou cole uma imagem. Uma captura de tela colada com Ctrl+V funciona bem.",
      },
      {
        title: "Mire com a lupa",
        description: "Passe o mouse sobre a prévia; uma lupa redonda mostra ampliados os pixels embaixo do ponteiro.",
      },
      {
        title: "Clique para escolher a cor",
        description: "Clique ou toque no ponto que você quer. A cor aparece com os valores HEX, RGB, HSL, HSV e CMYK.",
      },
      {
        title: "Copie o código",
        description: "Clique em copiar ao lado do formato que você precisa. As cores recentes ficam salvas abaixo para reutilizar rápido.",
      },
    ],
    features: [
      {
        title: "Lupa de aumento",
        description: "Uma visão ampliada de 7 × 7 pixels ajuda a acertar detalhes pequenos, como uma linha fina ou uma única letra.",
      },
      {
        title: "Cinco formatos de cor",
        description: "Copie os valores HEX, RGB, HSL, HSV ou CMYK com um clique em cada um.",
      },
      {
        title: "Histórico de cores",
        description: "As últimas 12 cores escolhidas ficam guardadas como amostras, e clicar em uma a seleciona de novo.",
      },
      {
        title: "Leitura em resolução total",
        description: "Cada cor é lida dos pixels da imagem original, então o valor não é afetado pelo tamanho da prévia.",
      },
    ],
    faqs: [
      {
        question: "Como pegar o código HEX de uma cor em uma imagem?",
        answer:
          "Abra a imagem, clique na cor que você quer e toque em copiar ao lado do valor HEX. Você pode colar em qualquer programa de design ou arquivo CSS.",
      },
      {
        question: "Posso pegar uma cor de uma captura de tela?",
        answer:
          "Sim. Tire uma captura de tela, pressione Ctrl+V nesta página para colá-la e clique na cor que você precisa.",
      },
      {
        question: "O seletor de cores funciona no celular?",
        answer:
          "Sim. Toque na imagem para escolher uma cor. A lupa só aparece com o ponteiro do mouse, então amplie a página se precisar acertar uma área muito pequena.",
      },
      {
        question: "Por que pixels vizinhos em uma foto têm cores um pouco diferentes?",
        answer:
          "Fotos têm ruído, degradês e efeitos de compressão, então pixels vizinhos raramente são idênticos. Escolha alguns pontos e fique com o que parecer certo.",
      },
      {
        question: "Por que o valor CMYK é diferente do meu programa de impressão?",
        answer:
          "Os valores CMYK aqui são uma conversão matemática simples a partir do RGB. Programas de impressão usam perfis de cor para tintas e papéis específicos, então os números podem ser diferentes.",
      },
    ],
  },
  "image-palette-generator": {
    name: "Gerador de paleta de cores",
    shortName: "Paleta",
    tagline: "Extraia as cores principais de uma imagem como uma paleta e copie em códigos HEX, variáveis CSS ou JSON.",
    intro:
      "O Gerador de paleta de cores encontra as cores dominantes de uma foto ou design e as mostra como amostras. Você pode escolher 3, 4, 5, 6 ou 8 cores; elas são ordenadas a partir da cor que ocupa a maior área, e tons muito parecidos são unidos para que cada amostra seja diferente. Copie a paleta como variáveis CSS ou uma lista JSON, ou baixe uma folha de amostras em PNG.",
    seoTitle: "Paleta de cores de imagem: extraia códigos HEX",
    seoDescription:
      "Paleta de cores de qualquer imagem, grátis. Extraia de 3 a 8 cores dominantes, copie códigos HEX, variáveis CSS ou JSON e baixe uma folha de amostras em PNG.",
    keywords: [
      "paleta de cores de imagem",
      "extrair cores de imagem",
      "gerador de paleta de cores",
      "paleta de cores a partir de foto",
      "cores dominantes da imagem",
      "extrair códigos hex de imagem",
    ],
    howToSteps: [
      {
        title: "Abra uma imagem",
        description: "Arraste, escolha ou cole uma foto, ilustração, logo ou captura de tela.",
      },
      {
        title: "Escolha o número de cores",
        description: "Clique em 3, 4, 5, 6 ou 8. As amostras mudam na hora.",
      },
      {
        title: "Copie cores individuais",
        description: "Clique no ícone de copiar de uma amostra para copiar o código HEX.",
      },
      {
        title: "Exporte a paleta",
        description: "Use Copiar variáveis CSS ou Copiar JSON, ou baixe a paleta como uma folha de amostras em PNG.",
      },
    ],
    features: [
      {
        title: "Ordenada por área",
        description: "A primeira amostra é a cor que ocupa a maior parte da imagem.",
      },
      {
        title: "Tons distintos",
        description: "Cores quase idênticas são unidas, então a paleta não repete o mesmo tom.",
      },
      {
        title: "Pronta para desenvolvedores",
        description: "Exporte como propriedades personalizadas de CSS (--color-1, --color-2 e assim por diante) ou como uma lista JSON de códigos HEX.",
      },
      {
        title: "Folha de amostras em PNG",
        description: "Baixe uma imagem da paleta com o código HEX de cada cor escrito embaixo da amostra.",
      },
    ],
    faqs: [
      {
        question: "Como as cores da paleta são escolhidas?",
        answer:
          "A imagem é analisada em tamanho pequeno, cores parecidas são agrupadas e os grupos que ocupam a maior área aparecem primeiro. Pixels transparentes são ignorados.",
      },
      {
        question: "Por que recebi menos cores do que escolhi?",
        answer:
          "Tons muito próximos são unidos para que cada amostra seja claramente diferente. Uma imagem com poucas cores distintas pode gerar menos amostras.",
      },
      {
        question: "Como usar a paleta no CSS?",
        answer:
          "Clique em Copiar variáveis CSS para receber um bloco :root com variáveis chamadas --color-1, --color-2 e assim por diante, e cole na sua folha de estilos.",
      },
      {
        question: "Por que uma pequena cor de destaque não aparece?",
        answer:
          "A paleta favorece cores que ocupam uma área maior, então um detalhe pequeno, como um logo pequeno, pode não aparecer. Use o Seletor de cores da imagem para pegar o valor exato de um ponto específico.",
      },
    ],
  },
  "add-text-to-image": {
    name: "Adicionar texto à imagem",
    shortName: "Adicionar texto",
    tagline: "Escreva legendas ou títulos em uma foto escolhendo fonte, tamanho, cor, contorno e caixa de fundo.",
    intro:
      "Adicionar texto à imagem coloca uma ou mais linhas de texto sobre uma foto. Arraste o texto para qualquer ponto da prévia, ou coloque-o em cima, no centro ou embaixo, e estilize com sete fontes, negrito ou itálico, alinhamento, opacidade, sombra, contorno e uma caixa de fundo colorida. O texto é desenhado na imagem em resolução total quando você baixa. Você pode adicionar até 10 textos separados, cada um com seu estilo, e girar qualquer um deles.",
    seoTitle: "Escrever em foto online: adicionar texto à imagem",
    seoDescription:
      "Escrever em foto online grátis. Arraste o texto para onde quiser, escolha fonte, tamanho, cor, contorno, sombra e fundo e salve em JPG, PNG, WebP ou AVIF.",
    keywords: [
      "escrever em foto",
      "adicionar texto em imagem",
      "colocar texto em foto online",
      "escrever em imagem online",
      "colocar legenda em foto",
      "editor de texto em imagem",
    ],
    howToSteps: [
      {
        title: "Abra sua imagem",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Digite seu texto",
        description: "Escreva o texto na caixa. Pressione Enter para começar uma nova linha.",
      },
      {
        title: "Estilize e posicione",
        description:
          "Escolha a fonte, o tamanho (de 12 a 240 px), a cor, a opacidade e o alinhamento. Arraste o texto na prévia, ou escolha Em cima, Centro, Embaixo ou Personalizado.",
      },
      {
        title: "Baixe",
        description: "Mantenha o formato original ou escolha JPG, PNG, WebP ou AVIF e clique em Baixar.",
      },
    ],
    features: [
      {
        title: "Arraste para posicionar",
        description: "Mova o texto direto na prévia para colocá-lo exatamente onde você quer.",
      },
      {
        title: "Sete fontes",
        description: "Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New e Impact, com opções de negrito e itálico.",
      },
      {
        title: "Legível em qualquer foto",
        description: "Adicione sombra, um contorno de 1 a 20 px ou uma caixa de fundo com cor e opacidade próprias.",
      },
      {
        title: "Texto em várias linhas",
        description: "Escreva várias linhas e alinhe à esquerda, ao centro ou à direita.",
      },
    ],
    faqs: [
      {
        question: "Como deixar o texto legível em uma foto cheia de detalhes?",
        answer:
          "Ative Contorno e escolha uma cor que contraste com o texto, ou ative Caixa de fundo para colocar uma caixa sólida ou semitransparente atrás dele. Uma sombra também ajuda em áreas claras.",
      },
      {
        question: "Posso adicionar mais de um bloco de texto?",
        answer:
          "Sim. Clique em Adicionar texto para cada novo texto, até 10. Cada um tem fonte, tamanho, cor, posição e rotação próprios; escolha-o na lista ou arraste-o na prévia para editar.",
      },
      {
        question: "Quais fontes posso usar?",
        answer:
          "Você pode escolher entre sete fontes. A maioria é do sistema, então se uma não estiver instalada no seu dispositivo, o navegador usa uma fonte parecida.",
      },
      {
        question: "O texto vai ficar nítido na imagem baixada?",
        answer:
          "Sim. O texto é desenhado na resolução total da sua imagem. Se você salvar em JPG, use uma qualidade alta para manter as bordas das letras limpas.",
      },
    ],
  },
  "watermark-image": {
    name: "Marca d'água em imagem",
    shortName: "Marca d'água",
    tagline: "Proteja suas fotos com uma marca d'água de texto ou logo, em um ponto só ou repetida pela imagem inteira.",
    intro:
      "Marca d'água em imagem adiciona um aviso de direitos autorais, o nome de um site ou um logo sobre uma foto. Coloque uma marca d'água de texto ou logo em uma de nove posições e defina o tamanho e a opacidade, ou repita o texto pela imagem inteira, o que é muito mais difícil de remover cortando. Os logos podem ser arquivos PNG, WebP, JPG ou SVG; um logo com fundo transparente fica melhor. Adicione mais fotos para colocar a mesma marca d’água em todas e baixá-las juntas em um ZIP.",
    seoTitle: "Colocar marca d'água em foto: texto ou logo",
    seoDescription:
      "Colocar marca d'água em fotos online grátis. Use texto ou seu logo, escolha entre nove posições, ajuste opacidade e rotação, ou repita o texto pela imagem toda.",
    keywords: [
      "marca d'água em foto",
      "colocar marca d'água em foto",
      "colocar logo na foto",
      "marca d'água online grátis",
      "marca d'água de direitos autorais",
      "marca d'água repetida",
      "marca d'água transparente",
    ],
    howToSteps: [
      {
        title: "Abra sua foto",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Escolha texto ou logo",
        description:
          "Selecione Texto e digite seu texto, ou selecione Logo e escolha um arquivo PNG, WebP, JPG ou SVG.",
      },
      {
        title: "Posicione e estilize",
        description:
          "Clique em uma posição na grade 3 × 3 e defina a opacidade e o tamanho. No texto, você também pode definir a cor e a rotação, ou ativar Repetir pela imagem.",
      },
      {
        title: "Baixe",
        description: "Mantenha o formato original ou escolha outro e clique em Baixar. Para mais fotos, adicione-as em Mais fotos e baixe todas em um ZIP.",
      },
    ],
    features: [
      {
        title: "Texto ou logo",
        description: "Use uma linha de direitos autorais ou o endereço de um site, ou envie a imagem do seu logo.",
      },
      {
        title: "Nove posições",
        description: "Cantos, bordas ou centro, com uma margem que se adapta ao tamanho da imagem.",
      },
      {
        title: "Texto repetido em padrão",
        description: "Repita seu texto pela foto inteira no ângulo que você escolher.",
      },
      {
        title: "Opacidade, tamanho e rotação",
        description: "Opacidade de 10% a 100%, texto de 14 a 140 px, logo de 5% a 60% da largura da imagem e rotação do texto de -90° a 90°.",
      },
    ],
    faqs: [
      {
        question: "Como adicionar meu logo como marca d'água?",
        answer:
          "Escolha Logo, clique em Escolher logo e selecione seu arquivo. Defina o tamanho do logo como porcentagem da largura da imagem, escolha uma posição e diminua a opacidade para a foto continuar visível.",
      },
      {
        question: "Qual opacidade uma marca d'água deve ter?",
        answer:
          "Cerca de 30% a 50% fica visível sem esconder a foto. Use um valor maior se a marca d'água precisar ser fácil de ler.",
      },
      {
        question: "O que é uma marca d'água repetida?",
        answer:
          "Repetir pela imagem coloca seu texto várias vezes sobre a foto inteira. É muito mais difícil de remover cortando do que uma única marca no canto. Está disponível para marcas d'água de texto.",
      },
      {
        question: "Por que meu logo tem uma caixa branca em volta?",
        answer:
          "O arquivo do logo tem um fundo sólido. Use um PNG, WebP ou SVG com fundo transparente, ou remova o fundo antes com Remover fundo.",
      },
      {
        question: "Uma marca d'água impede que copiem minha foto?",
        answer:
          "Uma marca d'água torna a cópia menos atraente e mostra quem é o dono da imagem, mas não impede totalmente a cópia. Marcas grandes, centrais ou repetidas são mais difíceis de remover do que uma marca pequena no canto.",
      },
    ],
  },
  "add-border-to-image": {
    name: "Adicionar borda à imagem",
    shortName: "Adicionar borda",
    tagline: "Adicione uma borda ou moldura de cor sólida em volta de uma foto, por fora da imagem ou sobre as bordas dela.",
    intro:
      "Adicionar borda à imagem desenha uma moldura colorida em volta de uma foto. No modo Por fora, a tela aumenta, então a foto inteira continua visível dentro da borda; no modo Por dentro, a borda é desenhada sobre as beiradas e a imagem mantém o tamanho original. Você pode definir a largura de 1 a 100 pixels, qualquer cor e um nível de opacidade.",
    seoTitle: "Colocar borda em foto online: moldura grátis",
    seoDescription:
      "Colocar borda em imagem online grátis. Escolha uma cor, uma largura de 1 a 100 px e a opacidade, por fora da foto ou sobre as beiradas. Sem upload.",
    keywords: [
      "colocar borda em foto",
      "adicionar borda em imagem",
      "moldura para foto online",
      "borda branca para instagram",
      "colocar moldura na foto",
      "contorno em foto",
    ],
    howToSteps: [
      {
        title: "Abra sua imagem",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Escolha o modo da borda",
        description: "Por fora (aumenta o tamanho) coloca a borda em volta da foto. Por dentro (mantém o tamanho) a desenha sobre as beiradas.",
      },
      {
        title: "Defina largura, cor e opacidade",
        description: "Arraste o controle de largura de 1 a 100 px, escolha qualquer cor e diminua a opacidade para uma moldura mais suave.",
      },
      {
        title: "Baixe",
        description: "Mantenha o formato original ou escolha JPG, PNG, WebP ou AVIF e clique em Baixar.",
      },
    ],
    features: [
      {
        title: "Por fora ou por dentro",
        description: "Adicione espaço em volta da foto, ou mantenha exatamente as dimensões originais.",
      },
      {
        title: "Qualquer largura e cor",
        description: "De uma linha fina de 1 px a uma moldura larga de 100 px, em qualquer cor.",
      },
      {
        title: "Opacidade ajustável",
        description: "Deixe a borda semitransparente para um efeito mais leve.",
      },
      {
        title: "Mantém seu formato",
        description: "A imagem com borda é salva no mesmo formato do original, a menos que você escolha outro.",
      },
    ],
    faqs: [
      {
        question: "Adicionar uma borda muda o tamanho da imagem?",
        answer:
          "No modo Por fora, a largura da borda é somada a cada lado, então uma imagem de 1000 × 800 com borda de 20 px vira 1040 × 840. O modo Por dentro mantém o tamanho e cobre a beirada da foto.",
      },
      {
        question: "Como colocar uma borda branca para o Instagram?",
        answer:
          "Corte a foto em 1:1 primeiro e depois adicione uma borda branca no modo Por fora. O resultado continua quadrado, porque a mesma largura é somada a cada lado.",
      },
      {
        question: "Posso fazer uma borda com cantos arredondados?",
        answer:
          "A borda em si é retangular. Para um visual arredondado, adicione a borda primeiro e depois abra o resultado em Arredondar cantos da imagem.",
      },
      {
        question: "O que a opacidade da borda faz?",
        answer:
          "Uma opacidade menor deixa a borda translúcida. No modo Por dentro, a foto aparece através dela; no modo Por fora, a área da borda fica parcialmente transparente em PNG, WebP e AVIF, e se mistura com branco em JPG.",
      },
    ],
  },
  "round-image": {
    name: "Arredondar cantos da imagem",
    shortName: "Cantos arredondados",
    tagline: "Arredonde os cantos de uma imagem ou corte em círculo, com fundo transparente em PNG.",
    intro:
      "Arredondar cantos da imagem deixa os cantos de uma foto suaves e arredondados, ou a transforma em um círculo para foto de perfil ou ícone de app. Escolha a opção Pequeno, Médio ou Grande, defina um raio exato com o controle deslizante ou clique em Fazer círculo. O resultado é salvo em PNG por padrão, então os cantos recortados ficam transparentes.",
    seoTitle: "Arredondar cantos de imagem e foto redonda",
    seoDescription:
      "Arredondar cantos de imagem online grátis ou cortar a foto em círculo. Defina o raio, mantenha o fundo transparente em PNG ou escolha uma cor para JPG.",
    keywords: [
      "arredondar cantos de imagem",
      "imagem com cantos arredondados",
      "deixar foto redonda",
      "foto de perfil redonda",
      "cortar foto em círculo",
      "png com cantos arredondados",
    ],
    howToSteps: [
      {
        title: "Abra sua imagem",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Escolha o formato do recorte",
        description: "Clique em Fazer círculo, escolha cantos Pequeno, Médio ou Grande, ou arraste o controle de raio.",
      },
      {
        title: "Escolha o formato do arquivo",
        description:
          "O PNG vem selecionado por padrão. Se você escolher JPG, escolha branco, preto ou uma cor personalizada para os cantos.",
      },
      {
        title: "Baixe",
        description: "Clique em Baixar para salvar a imagem arredondada, ou copie para a área de transferência.",
      },
    ],
    features: [
      {
        title: "Opções prontas e raio exato",
        description: "Opções Pequeno, Médio e Grande, ou qualquer raio de 0 até metade do lado menor.",
      },
      {
        title: "Avatar em círculo",
        description: "Transforma a imagem em um círculo com um clique, pronta para foto de perfil.",
      },
      {
        title: "Cantos transparentes",
        description: "PNG, WebP e AVIF mantêm transparente a área fora da curva.",
      },
      {
        title: "Cor de preenchimento para JPG",
        description: "Quando você salva em JPG, os cantos são preenchidos de branco, preto ou uma cor que você escolher.",
      },
    ],
    faqs: [
      {
        question: "Como fazer uma foto de perfil redonda?",
        answer:
          "Clique em Fazer círculo. O círculo usa o lado menor da imagem e fica centralizado, então, em uma foto que não é quadrada, corte em 1:1 primeiro para centralizar o rosto e evitar espaço vazio nas laterais.",
      },
      {
        question: "Por que meus cantos ficaram brancos ou pretos em vez de transparentes?",
        answer: "O JPG não guarda transparência. Escolha PNG, WebP ou AVIF para manter os cantos transparentes.",
      },
      {
        question: "O que significam as opções Pequeno, Médio e Grande?",
        answer:
          "O maior raio possível é metade do lado menor da imagem. Pequeno, Médio e Grande usam 10%, 25% e 50% desse máximo.",
      },
      {
        question: "Por que o arquivo da minha imagem arredondada é tão grande?",
        answer:
          "O PNG é sem perdas, então uma foto de câmera em tamanho total pode gerar um arquivo grande. Redimensione a foto antes, ou salve em WebP, que também mantém a transparência e é bem menor.",
      },
    ],
  },
  "favicon-generator": {
    name: "Gerador de favicon",
    shortName: "Favicon",
    tagline: "Crie favicon.ico, ícone Apple touch, ícones para Android e um web manifest a partir de uma imagem, em um único ZIP.",
    intro:
      "O Gerador de favicon transforma um logo ou imagem no conjunto de arquivos de ícone que um site precisa. Ele corta a imagem em um quadrado centralizado e cria o favicon.ico (com tamanhos de 16, 32 e 48 pixels), ícones PNG de 16 a 512 pixels, um apple-touch-icon.png de 180 × 180 e um arquivo site.webmanifest, tudo em um ZIP. A página também mostra as tags HTML de link para colar na seção head do seu site.",
    seoTitle: "Gerador de favicon: ICO, PNG e Apple touch icon",
    seoDescription:
      "Gerador de favicon grátis. Envie um logo PNG, JPG ou SVG e receba favicon.ico, ícones PNG de 16 a 512 px, ícone Apple touch e web manifest em um único ZIP.",
    keywords: [
      "gerador de favicon",
      "criar favicon",
      "criar favicon ico",
      "png para ico",
      "gerador de apple touch icon",
      "favicon a partir de imagem",
      "ícone para site",
    ],
    howToSteps: [
      {
        title: "Envie seu logo",
        description:
          "Arraste ou escolha uma imagem PNG, JPG, SVG ou HEIC. Uma imagem quadrada de pelo menos 512 × 512 pixels dá o melhor resultado.",
      },
      {
        title: "Confira se está centralizado",
        description:
          "Os ícones são cortados do centro da imagem. Se o seu logo estiver fora do centro ou a imagem não for quadrada, corte em 1:1 primeiro com Cortar imagem.",
      },
      {
        title: "Baixe o pacote de favicon",
        description: "Clique em Baixar pacote de favicon (ZIP) para receber todos os arquivos de ícone e o manifest.",
      },
      {
        title: "Adicione ao seu site",
        description:
          "Envie os arquivos para a pasta raiz do seu site, depois clique em Copiar código e cole as tags HTML na seção head das suas páginas.",
      },
    ],
    features: [
      {
        title: "favicon.ico com vários tamanhos",
        description: "Um arquivo ICO com ícones de 16 × 16, 32 × 32 e 48 × 48 para abas do navegador e favoritos.",
      },
      {
        title: "Ícones PNG para todos os dispositivos",
        description: "Arquivos PNG de 16, 32, 48, 64, 128, 192 e 512 pixels, além de um apple-touch-icon.png de 180 × 180.",
      },
      {
        title: "Web app manifest",
        description: "Um arquivo site.webmanifest que aponta para os ícones de 192 e 512 pixels, para Android e web apps instaláveis.",
      },
      {
        title: "Tamanhos pequenos nítidos",
        description: "Os ícones são reduzidos em várias etapas a partir da imagem completa, o que deixa as versões de 16 e 32 pixels mais limpas.",
      },
      {
        title: "HTML pronto para colar",
        description: "Copie as tags de link dos ícones e do manifest com um clique.",
      },
    ],
    faqs: [
      {
        question: "De que tamanho deve ser a imagem do favicon?",
        answer:
          "Use uma imagem quadrada de pelo menos 512 × 512 pixels para o maior ícone continuar nítido. Formas simples e cores fortes continuam reconhecíveis em 16 × 16.",
      },
      {
        question: "Quais arquivos vêm no ZIP?",
        answer:
          "favicon.ico, de favicon-16x16.png a favicon-512x512.png (16, 32, 48, 64, 128, 192 e 512), apple-touch-icon.png em 180 × 180 e site.webmanifest.",
      },
      {
        question: "Onde coloco os arquivos do favicon?",
        answer:
          "Envie para a pasta raiz do seu site, o mesmo lugar da página inicial. Depois cole as tags HTML mostradas nesta página na seção head de todas as páginas.",
      },
      {
        question: "Por que parte do meu logo foi cortada?",
        answer:
          "A ferramenta pega o maior quadrado centralizado da sua imagem. Se o logo for largo ou não estiver centralizado, corte em um quadrado com um pouco de espaço em volta antes de gerar os ícones.",
      },
      {
        question: "Posso usar um logo em SVG?",
        answer:
          "Sim. O SVG é desenhado como imagem e salvo em arquivos PNG e ICO. O ZIP não inclui um favicon em SVG.",
      },
      {
        question: "Preciso editar o arquivo manifest?",
        answer:
          "Sim. O site.webmanifest usa o nome provisório App e cores de tema escuro. Abra em um editor de texto e mude name, short_name e as cores para combinar com o seu site.",
      },
    ],
  },
  "image-to-base64": {
    name: "Imagem para Base64",
    shortName: "Imagem → Base64",
    tagline: "Converta um arquivo de imagem em uma string Base64 para copiar, com trechos prontos de HTML e CSS.",
    intro:
      "Imagem para Base64 codifica um arquivo de imagem como texto Base64, para que ele possa ser guardado ou enviado como texto simples, por exemplo dentro de um JSON, de uma página HTML ou de um arquivo CSS. A string é criada a partir dos bytes originais do arquivo, então a imagem não é comprimida de novo nem alterada. A ferramenta mostra o número de caracteres e também entrega uma tag img em HTML e uma regra CSS background-image com a imagem completa.",
    seoTitle: "Converter imagem para Base64: copie a string",
    seoDescription:
      "Converter imagem para Base64 grátis. Codifique os bytes originais de JPG, PNG, WebP, GIF ou SVG e copie a string, uma tag img ou uma regra CSS.",
    keywords: [
      "imagem para base64",
      "converter imagem para base64",
      "codificar imagem em base64",
      "png para base64",
      "jpg para base64",
      "svg para base64",
      "string base64 de imagem",
    ],
    howToSteps: [
      {
        title: "Abra uma imagem",
        description: "Arraste, escolha ou cole qualquer arquivo de imagem. Imagens pequenas, como ícones, funcionam melhor.",
      },
      {
        title: "Receba a string Base64",
        description: "A string aparece na hora, com o comprimento em caracteres e o tamanho aproximado.",
      },
      {
        title: "Copie o que precisar",
        description: "Clique em Copiar Base64 para a string pura, ou use Copiar HTML ou Copiar CSS para um trecho pronto.",
      },
      {
        title: "Cole no seu código",
        description: "Cole a string no seu JSON, HTML, CSS ou script.",
      },
    ],
    features: [
      {
        title: "Codificação byte a byte",
        description: "O arquivo original é codificado como está, sem nova compressão nem mudança de qualidade.",
      },
      {
        title: "Informação de tamanho",
        description: "Veja o número de caracteres e o tamanho aproximado da string antes de usá-la.",
      },
      {
        title: "Trechos de HTML e CSS",
        description: "Copie uma tag img ou uma regra background-image com o data URI completo incluído.",
      },
      {
        title: "Codificado localmente",
        description: "O arquivo é lido e codificado no seu navegador e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Para que serve o Base64 em imagens?",
        answer:
          "O Base64 transforma os dados binários da imagem em caracteres de texto simples. Desenvolvedores usam para colocar imagens pequenas direto em HTML, CSS, JSON ou modelos de e-mail, sem precisar carregar um arquivo de imagem separado.",
      },
      {
        question: "Por que a string Base64 é maior que o arquivo de imagem?",
        answer:
          "O Base64 usa 4 caracteres de texto para cada 3 bytes, então o resultado fica cerca de 33% maior. Uma imagem de 30 KB vira aproximadamente 40 KB de texto.",
      },
      {
        question: "Qual a diferença entre Base64 e data URI?",
        answer:
          "Base64 é só o texto codificado. Um data URI adiciona um prefixo como data:image/png;base64, para que os navegadores saibam o tipo do arquivo. Esta ferramenta entrega a string pura; o Imagem para Data URI entrega a versão completa.",
      },
      {
        question: "Devo converter imagens grandes para Base64?",
        answer:
          "Normalmente não. O Base64 funciona melhor para imagens pequenas, como ícones. Fotos grandes deixam seu HTML ou CSS bem mais pesado, e o navegador não consegue guardar a imagem em cache como um arquivo separado.",
      },
      {
        question: "Minha imagem é alterada durante a codificação?",
        answer:
          "Não, os bytes originais são codificados. A única exceção são as fotos HEIC do iPhone, que são convertidas para PNG antes, porque a maioria dos navegadores não exibe HEIC.",
      },
    ],
  },
  "image-to-data-uri": {
    name: "Imagem para Data URI",
    shortName: "Data URI",
    tagline: "Transforme uma imagem em um data URI completo, pronto para colar em um atributo src do HTML ou em um url() do CSS.",
    intro:
      "Imagem para Data URI converte um arquivo de imagem em um data URI: uma linha de texto que contém o tipo do arquivo e a imagem codificada em Base64. Você pode colar direto em um atributo src de uma tag img ou em um valor url() do CSS, e a imagem aparece sem um arquivo separado. O tipo MIME do prefixo vem do seu arquivo, e os bytes da imagem não são alterados.",
    seoTitle: "Converter imagem para Data URI: HTML e CSS",
    seoDescription:
      "Converter imagem para data URI online grátis. Receba uma string data:image em Base64 com o tipo MIME correto e copie como tag img HTML ou fundo em CSS.",
    keywords: [
      "imagem para data uri",
      "gerador de data uri",
      "converter imagem para data url",
      "data uri base64",
      "imagem embutida no css",
      "incorporar imagem no html",
      "imagem data url",
    ],
    howToSteps: [
      {
        title: "Abra uma imagem",
        description: "Arraste, escolha ou cole qualquer arquivo de imagem, como um ícone, logo ou arte pequena.",
      },
      {
        title: "Receba o data URI",
        description: "O data URI completo, começando com data:image/, aparece com o comprimento e o tamanho aproximado.",
      },
      {
        title: "Copie",
        description: "Clique em Copiar data URI, ou use Copiar HTML ou Copiar CSS para um trecho pronto.",
      },
      {
        title: "Cole na sua página",
        description: "Use em qualquer lugar onde uma URL de imagem normal funciona, como uma tag img ou um fundo no CSS.",
      },
    ],
    features: [
      {
        title: "Tipo MIME correto",
        description: "O prefixo corresponde ao seu arquivo, por exemplo image/png, image/jpeg ou image/svg+xml.",
      },
      {
        title: "Bytes originais",
        description: "O arquivo é codificado como está, então a qualidade e o tamanho não mudam por nova compressão.",
      },
      {
        title: "Trechos prontos para copiar",
        description: "Receba uma tag img completa ou uma regra background-image com o data URI já dentro.",
      },
      {
        title: "Privado",
        description: "O data URI é criado no seu navegador, então a imagem não é enviada.",
      },
    ],
    faqs: [
      {
        question: "O que é um data URI?",
        answer:
          "Um data URI é um link que contém o próprio arquivo em vez de apontar para ele. Em imagens, ele começa com data:image/png;base64, ou um prefixo parecido, e os navegadores o exibem como uma URL de imagem normal.",
      },
      {
        question: "Como usar um data URI no CSS?",
        answer:
          "Clique em Copiar CSS para receber uma regra background-image com o URI completo dentro de url(), e cole na sua folha de estilos.",
      },
      {
        question: "Quando devo evitar data URIs?",
        answer:
          "Evite em imagens grandes e em imagens usadas em muitas páginas. O texto codificado é cerca de um terço maior que o arquivo, e o navegador não consegue guardá-lo em cache separadamente.",
      },
      {
        question: "Imagens em data URI funcionam em e-mails?",
        answer:
          "O suporte varia. Muitos programas de e-mail, incluindo alguns serviços de webmail, não mostram imagens em data URI, então teste seu e-mail ou use uma imagem hospedada online.",
      },
      {
        question: "Quais tipos de imagem são aceitos?",
        answer:
          "Qualquer imagem que seu navegador abra, como JPG, PNG, GIF, WebP, AVIF e SVG. As fotos HEIC do iPhone são convertidas para PNG antes, então o data URI delas usa image/png.",
      },
    ],
  },
  "base64-to-image": {
    name: "Base64 para imagem",
    shortName: "Base64 → Imagem",
    tagline: "Cole uma string Base64 ou um data URI para ver a imagem e baixar em PNG, JPG ou WebP.",
    intro:
      "Base64 para imagem decodifica um texto Base64 de volta em uma imagem que você pode ver e salvar. Você pode colar uma string Base64 pura, um data URI completo ou um trecho CSS url() ou HTML src que contenha um; Base64 seguro para URL e quebras de linha são tratados automaticamente. A ferramenta detecta se os dados são PNG, JPEG, GIF, WebP, SVG, BMP ou AVIF e mostra a imagem decodificada com as dimensões.",
    seoTitle: "Converter Base64 para imagem: veja e baixe",
    seoDescription:
      "Converter Base64 para imagem online grátis. Cole uma string Base64, um data URI ou um trecho CSS ou HTML, veja a imagem e baixe em PNG, JPG ou WebP.",
    keywords: [
      "base64 para imagem",
      "decodificar imagem base64",
      "base64 para png",
      "base64 para jpg",
      "data uri para imagem",
      "converter string base64 em imagem",
      "visualizar imagem base64",
    ],
    howToSteps: [
      {
        title: "Cole os dados em Base64",
        description: "Cole na caixa de texto, clique em Colar ou carregue um arquivo .txt que contenha a string.",
      },
      {
        title: "Confira a prévia",
        description: "A imagem é decodificada automaticamente e aparece com a largura e a altura. Uma mensagem de erro aparece se o texto não for válido.",
      },
      {
        title: "Escolha um formato de exportação",
        description: "Selecione PNG, JPG ou WebP.",
      },
      {
        title: "Baixe a imagem",
        description: "Clique em Baixar para salvar a imagem decodificada no seu dispositivo.",
      },
    ],
    features: [
      {
        title: "Aceita vários tipos de entrada",
        description:
          "Base64 puro, data URIs, trechos CSS url() e HTML src, Base64 seguro para URL e texto quebrado em várias linhas.",
      },
      {
        title: "Detecção automática do formato",
        description: "Reconhece PNG, JPEG, GIF, WebP, SVG, BMP e AVIF pelos próprios dados, mesmo se o prefixo estiver faltando ou errado.",
      },
      {
        title: "Prévia instantânea",
        description: "Veja a imagem decodificada e as dimensões assim que você colar.",
      },
      {
        title: "Três formatos de exportação",
        description: "Salve o resultado em PNG, JPG ou WebP.",
      },
    ],
    faqs: [
      {
        question: "Que tipo de texto Base64 posso colar?",
        answer:
          "Uma string Base64 pura, um data URI como data:image/png;base64,... ou um trecho CSS ou HTML que contenha um. Espaços, quebras de linha e caracteres seguros para URL são limpos automaticamente.",
      },
      {
        question: "Por que aparece um erro?",
        answer:
          "O texto muitas vezes é cortado ao ser copiado. Confira se você copiou a string inteira, incluindo o final, que pode ter sinais de =.",
      },
      {
        question: "O arquivo baixado é idêntico ao original?",
        answer:
          "A imagem é decodificada e salva de novo no formato que você escolher. O PNG mantém cada pixel, enquanto JPG e WebP são comprimidos de novo. GIFs animados viram uma única imagem estática, e artes em SVG são salvas como imagens de pixels.",
      },
      {
        question: "Como a ferramenta sabe qual é o tipo da imagem?",
        answer:
          "Cada formato começa com uma assinatura conhecida, por exemplo iVBORw0KGgo para PNG ou /9j/ para JPEG. A ferramenta lê esses primeiros caracteres para decodificar a imagem corretamente.",
      },
      {
        question: "Meus dados Base64 são enviados para um servidor?",
        answer: "Não. O texto é decodificado no seu navegador e a imagem é criada no seu dispositivo.",
      },
    ],
  },
  "svg-to-png": {
    name: "SVG para PNG",
    shortName: "SVG → PNG",
    tagline: "Converta arquivos vetoriais SVG em imagens PNG nítidas em 1x, 2x, 4x ou 8x, mantendo a transparência.",
    intro:
      "SVG para PNG transforma uma arte vetorial, como um logo ou ícone, em uma imagem PNG para lugares que não aceitam arquivos SVG. Escolha 1x, 2x, 4x ou 8x o tamanho original do SVG; como o vetor é desenhado de novo nesse tamanho, uma escala maior gera uma imagem mais nítida, e não borrada. Fundos transparentes continuam transparentes no PNG.",
    seoTitle: "Converter SVG para PNG em alta resolução",
    seoDescription:
      "Converter SVG para PNG online grátis. Exporte em 1x, 2x, 4x ou 8x para imagens nítidas em alta resolução com fundo transparente. Convertido no seu navegador.",
    keywords: [
      "svg para png",
      "converter svg para png",
      "svg para png alta resolução",
      "svg para png transparente",
      "exportar svg como png",
      "conversor svg",
    ],
    howToSteps: [
      {
        title: "Abra um arquivo SVG",
        description: "Arraste um arquivo .svg para a área de envio ou clique para escolher um.",
      },
      {
        title: "Escolha a escala",
        description: "Selecione 1x, 2x, 4x ou 8x. A largura e a altura de saída em pixels aparecem abaixo dos botões.",
      },
      {
        title: "Baixe o PNG",
        description: "Clique em Baixar PNG para salvar a imagem, ou copie para a área de transferência.",
      },
    ],
    features: [
      {
        title: "Nítido em qualquer escala",
        description: "O vetor é desenhado de novo no tamanho escolhido, então linhas e textos continuam nítidos.",
      },
      {
        title: "Fundo transparente",
        description: "As áreas sem preenchimento no SVG continuam transparentes no PNG.",
      },
      {
        title: "Prévia do tamanho de saída",
        description: "Veja as dimensões exatas em pixels de cada escala antes de baixar.",
      },
      {
        title: "PNG sem perdas",
        description: "A imagem gerada é salva em PNG sem perda por compressão.",
      },
    ],
    faqs: [
      {
        question: "Como obter um PNG em alta resolução a partir de um SVG?",
        answer:
          "Escolha 4x ou 8x. Um SVG de 256 × 256 vira 1024 × 1024 em 4x ou 2048 × 2048 em 8x, e continua nítido porque é desenhado de novo nesse tamanho.",
      },
      {
        question: "Por que o tamanho de saída não é o que eu esperava?",
        answer:
          "O tamanho 1x vem da largura e da altura definidas no arquivo SVG. Se o SVG tiver só um viewBox, sem width ou height, o navegador pode usar um tamanho padrão; adicione os atributos width e height para controlar isso.",
      },
      {
        question: "Por que faltam fontes ou imagens no meu PNG?",
        answer:
          "Quando um SVG é desenhado como imagem, os navegadores não carregam arquivos externos ligados a ele, como fontes da web ou imagens vinculadas. Converta os textos em contornos e incorpore as imagens no SVG antes de converter.",
      },
      {
        question: "O PNG vai manter o fundo transparente?",
        answer: "Sim. Qualquer área do SVG sem preenchimento ou fundo continua transparente.",
      },
      {
        question: "Posso converter SVG para JPG?",
        answer:
          "Esta ferramenta salva só em PNG. Para ter um JPG, converta para PNG primeiro e depois abra o PNG em PNG para JPG, onde você também pode escolher uma cor de fundo.",
      },
    ],
  },
  "svg-to-jpg": {
    name: "SVG para JPG",
    shortName: "SVG → JPG",
    tagline: "Transforme gráficos SVG em imagens JPG em qualquer escala, com a cor de fundo que você escolher. A conversão acontece no seu dispositivo.",
    intro: "Gráficos SVG ficam nítidos em qualquer tamanho, mas muitos apps, redes sociais e formulários de upload só aceitam imagens comuns. SVG para JPG redesenha o SVG na escala que você escolher, de 1x a 8x, e salva como JPG. O JPG não tem transparência, então as áreas transparentes são preenchidas com branco ou com uma cor que você escolher. A conversão acontece no seu navegador, então o arquivo nunca sai do seu dispositivo.",
    seoTitle: "Converter SVG para JPG – Qualquer tamanho, grátis",
    seoDescription: "Converta gráficos SVG em JPG no navegador, em escala de 1x a 8x, com a cor de fundo que você quiser. Grátis e nada é enviado.",
    keywords: [
      "svg para jpg",
      "converter svg para jpg",
      "svg para jpeg",
      "conversor svg para jpg",
      "svg para imagem",
    ],
    howToSteps: [
      {
        title: "Adicione seu SVG",
        description: "Arraste, escolha ou cole um arquivo .svg.",
      },
      {
        title: "Escolha escala e fundo",
        description: "Escolha 1x, 2x, 4x ou 8x e a cor que preenche as áreas transparentes.",
      },
      {
        title: "Baixe o JPG",
        description: "Salve o JPG e use onde quiser.",
      },
    ],
    features: [
      {
        title: "Nítido em qualquer tamanho",
        description: "O SVG é redesenhado na escala escolhida, então as bordas continuam definidas.",
      },
      {
        title: "Cor de fundo à sua escolha",
        description: "As áreas transparentes são preenchidas com branco ou qualquer cor.",
      },
      {
        title: "Abre em qualquer lugar",
        description: "JPG funciona em qualquer app, rede social e formulário de upload.",
      },
      {
        title: "Conversão privada",
        description: "O arquivo é convertido no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "SVG para JPG ou SVG para PNG?",
        answer: "Escolha PNG para logos e ícones, para manter a transparência e cores perfeitamente chapadas. Escolha JPG quando um site ou formulário pedir JPG, ou para ilustrações com degradês.",
      },
      {
        question: "Qual escala devo usar?",
        answer: "2x serve para a maioria das telas. Use 4x ou 8x para impressão ou telas grandes.",
      },
      {
        question: "Por que meu SVG ficou diferente?",
        answer: "SVGs que carregam fontes ou imagens da web podem não desenhar essas partes. Antes, converta os textos em contornos na sua ferramenta de design.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer: "Não. Seu navegador desenha o SVG no seu dispositivo.",
      },
    ],
  },
  "svg-to-webp": {
    name: "SVG para WebP",
    shortName: "SVG → WebP",
    tagline: "Transforme gráficos SVG em imagens WebP leves em qualquer escala, com transparência. A conversão acontece no seu dispositivo.",
    intro: "Às vezes um site, app ou editor de e-mail precisa de uma imagem comum em vez de um SVG. SVG para WebP redesenha o SVG na escala que você escolher, de 1x a 8x, e salva como WebP, um formato leve que todos os navegadores atuais exibem e que mantém a transparência. A conversão acontece no seu navegador, então o arquivo nunca sai do seu dispositivo.",
    seoTitle: "Converter SVG para WebP – Arquivos leves e transparência",
    seoDescription: "Converta gráficos SVG em WebP no navegador, em escala de 1x a 8x, mantendo a transparência. Grátis e nada é enviado.",
    keywords: [
      "svg para webp",
      "converter svg para webp",
      "conversor svg para webp",
      "svg para imagem",
      "webp transparente",
    ],
    howToSteps: [
      {
        title: "Adicione seu SVG",
        description: "Arraste, escolha ou cole um arquivo .svg.",
      },
      {
        title: "Escolha escala e qualidade",
        description: "Escolha 1x, 2x, 4x ou 8x e a qualidade do WebP.",
      },
      {
        title: "Baixe o WebP",
        description: "Salve o WebP e use no seu site ou app.",
      },
    ],
    features: [
      {
        title: "Nítido em qualquer tamanho",
        description: "O SVG é redesenhado na escala escolhida, então as bordas continuam definidas.",
      },
      {
        title: "Transparência mantida",
        description: "As áreas transparentes continuam transparentes no WebP.",
      },
      {
        title: "Arquivos leves",
        description: "O WebP costuma ser bem menor que o PNG para a mesma imagem.",
      },
      {
        title: "Conversão privada",
        description: "O arquivo é convertido no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Por que não usar o próprio SVG?",
        answer: "Use o SVG onde ele for aceito. Use WebP onde só imagens comuns são permitidas, como alguns apps, editores de e-mail e uploads de imagem.",
      },
      {
        question: "Qual escala devo usar?",
        answer: "2x serve para a maioria das telas. Use 4x ou 8x para telas grandes.",
      },
      {
        question: "Por que meu SVG ficou diferente?",
        answer: "SVGs que carregam fontes ou imagens da web podem não desenhar essas partes. Antes, converta os textos em contornos na sua ferramenta de design.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer: "Não. Seu navegador desenha o SVG no seu dispositivo.",
      },
    ],
  },
  "photo-filters": {
    name: "Filtros e efeitos para fotos",
    shortName: "Filtros",
    tagline: "Aplique estilos prontos como Vintage, Noir ou Cinematográfico e ajuste brilho, contraste, cor e vinheta.",
    intro:
      "Filtros e efeitos para fotos muda o visual e o clima de uma foto. Comece com um dos oito estilos prontos, como Cinematográfico, Vintage anos 70, Noir sombrio ou Pôr do sol, e depois ajuste brilho, contraste, saturação, sépia, preto e branco, matiz, nitidez, vinheta e desfoque suave com os controles. Uma visão dividida permite comparar a foto editada com a original antes de baixar em PNG, JPG ou WebP. Temperatura e Matiz corrigem um tom amarelado, azulado ou esverdeado, e um controle de intensidade suaviza qualquer filtro.",
    seoTitle: "Filtros para fotos online: efeitos grátis",
    seoDescription:
      "Aplique filtros em fotos online grátis. Teste Vintage, Noir, Cinematográfico e outros, ajuste brilho, contraste, saturação e vinheta e compare o antes e depois.",
    keywords: [
      "filtros para fotos online",
      "colocar filtro em foto",
      "deixar foto preto e branco",
      "filtro vintage para foto",
      "filtro sépia online",
      "ajustar brilho e contraste online",
      "efeito vinheta",
    ],
    howToSteps: [
      {
        title: "Envie uma foto",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG ou WebP.",
      },
      {
        title: "Escolha um estilo",
        description:
          "Teste Cinematográfico, Vintage anos 70, Cyberpunk, Noir sombrio, Pôr do sol, Frio desbotado, HDR dramático ou Negativo. Original remove todos os efeitos. Diminua a intensidade do filtro para um efeito mais sutil.",
      },
      {
        title: "Ajuste com os controles",
        description:
          "Ajuste brilho, contraste, saturação, sépia, preto e branco, matiz, nitidez, vinheta e foco suave até a foto ficar do jeito certo. Temperatura e Matiz corrigem um tom de cor indesejado.",
      },
      {
        title: "Compare e baixe",
        description: "Use a comparação com o original para conferir o antes e depois, depois baixe em PNG, WebP ou JPG, ou copie a imagem.",
      },
    ],
    features: [
      {
        title: "Oito estilos com um clique",
        description: "Visuais prontos, de tons vintage quentes a preto e branco de alto contraste.",
      },
      {
        title: "Onze controles de ajuste",
        description: "Brilho, contraste e saturação até 200%, além de temperatura, matiz, sépia, monocromático, tom, nitidez, vinheta e desfoque.",
      },
      {
        title: "Visão de antes e depois",
        description: "Arraste a linha divisória sobre a foto para comparar a original com a versão editada, no computador ou em telas de toque.",
      },
      {
        title: "Exportação em resolução total",
        description: "Os efeitos são aplicados na foto em tamanho total quando você baixa.",
      },
    ],
    faqs: [
      {
        question: "Como deixar uma foto em preto e branco?",
        answer:
          "Clique no estilo Noir sombrio para um visual de alto contraste, ou coloque o controle Preto e branco em 100% e ajuste o brilho e o contraste você mesmo.",
      },
      {
        question: "Posso desfazer um filtro?",
        answer:
          "Sim. Clique em Redefinir para voltar ao visual original a qualquer momento. Seu arquivo original nunca é alterado.",
      },
      {
        question: "Aplicar um filtro diminui a resolução?",
        answer:
          "Não. O download tem a mesma largura e altura da sua foto original.",
      },
      {
        question: "Qual formato de download devo escolher?",
        answer:
          "JPG e WebP são salvos com 95% de qualidade e são bem menores para fotos. O PNG mantém cada pixel, mas gera arquivos grandes para fotos.",
      },
      {
        question: "Posso usar filtros em fotos HEIC do iPhone?",
        answer:
          "Esta ferramenta não abre arquivos HEIC. Converta a foto para JPG antes com o Conversor de imagens e depois abra o JPG aqui.",
      },
    ],
  },
  "meme-generator": {
    name: "Gerador de memes",
    shortName: "Criar meme",
    tagline: "Faça um meme com sua própria foto ou um modelo inicial, com legendas em destaque em cima, no meio e embaixo.",
    intro:
      "O Gerador de memes adiciona legendas clássicas de meme a uma imagem. Envie sua própria imagem ou comece com um dos oito modelos simples incluídos, depois digite as legendas de cima, do meio e de baixo; linhas longas quebram automaticamente para caber na largura. Escolha a fonte (Impact por padrão), o tamanho, as cores do texto e do contorno, o alinhamento e as letras maiúsculas, e baixe o meme em PNG, JPG ou WebP sem marca d'água.",
    seoTitle: "Gerador de memes: legendas em qualquer imagem",
    seoDescription:
      "Faça memes online grátis. Adicione legendas em cima, no meio e embaixo da sua foto ou de um modelo, escolha fonte, tamanho e contorno e baixe sem marca d'água.",
    keywords: [
      "gerador de memes",
      "criar meme",
      "fazer meme online",
      "colocar texto de meme em imagem",
      "meme com fonte impact",
      "gerador de memes sem marca d'água",
      "fazer meme com foto",
    ],
    howToSteps: [
      {
        title: "Escolha uma imagem",
        description: "Envie ou cole uma imagem JPG, PNG ou WebP, ou clique em um dos modelos rápidos.",
      },
      {
        title: "Escreva as legendas",
        description: "Digite as legendas de cima e de baixo, e adicione uma legenda no meio se precisar.",
      },
      {
        title: "Estilize o texto",
        description: "Escolha a fonte, o tamanho, a cor do texto, a cor e a largura do contorno, o alinhamento e se quer usar maiúsculas.",
      },
      {
        title: "Baixe ou copie",
        description: "Baixe o meme em PNG, WebP ou JPG, ou copie para a área de transferência e cole em uma conversa.",
      },
    ],
    features: [
      {
        title: "Três áreas de legenda",
        description: "Legendas em cima, no meio e embaixo, com quebra de linha automática para textos longos.",
      },
      {
        title: "Estilo clássico de meme",
        description: "Texto branco em Impact com contorno preto por padrão, além das fontes Arial, Comic Sans, Montserrat e Times.",
      },
      {
        title: "O texto acompanha a imagem",
        description: "O tamanho da fonte é relativo à altura da imagem, então as legendas ficam iguais em imagens pequenas e grandes.",
      },
      {
        title: "Sem marca d'água",
        description: "Seu meme é salvo exatamente como você vê, sem nenhum logo adicionado.",
      },
    ],
    faqs: [
      {
        question: "O meme tem marca d'água?",
        answer: "Não. A imagem baixada contém só a sua imagem e as suas legendas.",
      },
      {
        question: "Qual fonte os memes costumam usar?",
        answer:
          "O estilo clássico de meme é a Impact em branco com contorno preto, que é o padrão aqui. Se uma fonte não estiver instalada no seu dispositivo, o navegador usa uma parecida.",
      },
      {
        question: "Posso usar minha própria imagem?",
        answer: "Sim. Envie uma imagem JPG, PNG ou WebP, ou cole uma da área de transferência com Ctrl+V.",
      },
      {
        question: "Minha legenda cobre demais a imagem. O que fazer?",
        answer:
          "Diminua o tamanho da fonte, ou passe parte do texto para a legenda do meio ou de baixo. Legendas longas quebram em várias linhas automaticamente.",
      },
      {
        question: "Posso fazer memes no celular?",
        answer:
          "Sim. O gerador de memes funciona em navegadores de celular; digite suas legendas e use o botão de download para salvar a imagem.",
      },
    ],
  },
  "split-image": {
    name: "Dividir imagem em grade",
    shortName: "Dividir em grade",
    tagline: "Corte uma imagem em uma grade de partes, como uma grade 3×3 do Instagram ou um carrossel panorâmico, e baixe um ZIP.",
    intro:
      "Dividir imagem em grade separa uma imagem em linhas e colunas de arquivos individuais. Use a opção 3×3 do Instagram para uma grade no perfil, Panorama 3×1 ou Carrossel 2×1 para posts de deslizar, 2×2 para quatro partes iguais, ou defina sua própria grade de até 12 linhas e 12 colunas. Todas as partes são baixadas juntas como arquivos PNG numerados em um ZIP, ou você pode clicar em uma parte para salvar só ela.",
    seoTitle: "Dividir imagem em grade: Instagram 3×3 e panorama",
    seoDescription:
      "Dividir imagem em grade online grátis. Faça uma grade 3x3 do Instagram, um carrossel panorâmico ou uma grade de até 12x12 e baixe tudo em um ZIP.",
    keywords: [
      "dividir imagem em partes",
      "dividir foto para instagram",
      "grid instagram 3x3",
      "dividir panorama para carrossel do instagram",
      "cortar imagem em pedaços",
      "foto em grade 3x3",
      "dividir imagem em grade",
    ],
    howToSteps: [
      {
        title: "Envie sua imagem",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG ou WebP.",
      },
      {
        title: "Escolha a grade",
        description:
          "Escolha Grade 3×3 do Instagram, Panorama 3×1, Carrossel 2×1 ou Quatro quadrados (2×2), ou digite seu próprio número de linhas e colunas.",
      },
      {
        title: "Confira a prévia",
        description: "A prévia mostra onde a imagem vai ser cortada e o número de cada parte.",
      },
      {
        title: "Baixe as partes",
        description: "Clique em baixar todas as partes (ZIP), ou clique em uma parte na prévia para baixar só ela.",
      },
    ],
    features: [
      {
        title: "Opções para redes sociais",
        description: "Um clique para uma grade 3×3 no perfil, um carrossel panorâmico de 3 ou 2 slides ou uma divisão 2×2.",
      },
      {
        title: "Grades personalizadas",
        description: "Qualquer combinação de 1 a 12 linhas e de 1 a 12 colunas, até 144 partes.",
      },
      {
        title: "Partes numeradas",
        description: "Os arquivos se chamam tile_01, tile_02 e assim por diante, da esquerda para a direita e de cima para baixo.",
      },
      {
        title: "Sem perda de qualidade",
        description: "As partes são cortadas da imagem em resolução total e salvas como arquivos PNG sem perdas.",
      },
    ],
    faqs: [
      {
        question: "Em que ordem devo postar as partes no Instagram?",
        answer:
          "As partes são numeradas da esquerda para a direita e de cima para baixo, começando por tile_01. O Instagram mostra o post mais recente primeiro, então envie a última parte primeiro (tile_09 em uma grade 3×3) e termine com tile_01.",
      },
      {
        question: "Que imagem devo usar para uma grade 3×3?",
        answer:
          "Para partes quadradas, comece com uma imagem quadrada; corte em 1:1 antes, se precisar. O Instagram pode mostrar as miniaturas do perfil com outro corte, então confira o resultado depois de postar.",
      },
      {
        question: "Como dividir um panorama para um post em carrossel?",
        answer:
          "Escolha Panorama 3×1 para três slides ou Carrossel 2×1 para dois. Para slides quadrados, a imagem deve ser três vezes (ou duas vezes) mais larga do que alta.",
      },
      {
        question: "Todas as partes têm exatamente o mesmo tamanho?",
        answer:
          "Se a largura ou a altura não puder ser dividida por igual, a última coluna ou linha recebe os pixels extras, então ela pode ter um ou dois pixels a mais.",
      },
      {
        question: "Dividir a imagem reduz a qualidade?",
        answer: "Não. Cada parte é cortada dos pixels originais e salva em PNG, que é sem perdas.",
      },
    ],
  },
  "censor-image": {
    name: "Desfocar e pixelizar imagem",
    shortName: "Censurar foto",
    tagline: "Esconda rostos, placas de carro, nomes ou números em uma foto com tarja preta, pixelização ou desfoque.",
    intro:
      "Desfocar e pixelizar imagem esconde detalhes privados de uma foto antes de você compartilhá-la. Desenhe retângulos ou ovais sobre rostos, placas de carro, endereços ou números de conta e escolha tarja preta, pixelização ou desfoque para cada área. As áreas desfocadas ficam sobre uma camada pixelizada grossa, então os detalhes originais não aparecem nas bordas.",
    seoTitle: "Desfocar ou pixelizar imagem: rostos e textos",
    seoDescription:
      "Censurar imagem online grátis. Desfoque, pixelize ou cubra com tarja preta rostos, placas de carro e textos privados usando retângulos ou ovais. Nada é enviado.",
    keywords: [
      "desfocar imagem online",
      "pixelizar imagem",
      "censurar foto",
      "desfocar rosto na foto",
      "borrar parte da foto",
      "tarja preta em print",
      "desfocar placa de carro",
    ],
    howToSteps: [
      {
        title: "Envie a imagem",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG ou WebP, como uma foto ou uma captura de tela.",
      },
      {
        title: "Escolha o formato e o método",
        description:
          "Selecione Retângulo ou Oval, depois Pixelizar, Desfocar ou Tarja preta. Para pixelizar e desfocar, defina a intensidade de 4 a 45.",
      },
      {
        title: "Desenhe sobre os detalhes privados",
        description: "Arraste sobre cada área que você quer esconder. Use Desfazer para remover a última área ou Remover todas para começar de novo.",
      },
      {
        title: "Baixe a imagem censurada",
        description: "Baixe em PNG, WebP ou JPG, ou copie para a área de transferência.",
      },
    ],
    features: [
      {
        title: "Três formas de esconder",
        description: "Caixas pretas sólidas, pixelização em mosaico ou desfoque sobre uma base pixelizada.",
      },
      {
        title: "Retângulos e ovais",
        description: "Use ovais para rostos e retângulos para textos, placas e números.",
      },
      {
        title: "Misture métodos na mesma imagem",
        description: "Cada área mantém o método e a intensidade com que foi desenhada, então você pode cobrir um nome com tarja e desfocar um rosto.",
      },
      {
        title: "Igual em fotos grandes",
        description: "A intensidade acompanha a resolução da imagem, então fotos em alta resolução ficam escondidas da mesma forma.",
      },
      {
        title: "Desfazer e limpar",
        description: "Remova a última área ou todas as áreas sem recarregar a foto.",
      },
    ],
    faqs: [
      {
        question: "Qual método é mais seguro para esconder texto?",
        answer:
          "A tarja preta substitui os pixels por completo e é a opção mais segura para senhas, números de conta e documentos. Pixelização ou desfoque fortes também funcionam, mas textos pequenos com ajustes fracos às vezes podem ser adivinhados.",
      },
      {
        question: "Alguém pode desfazer o desfoque no arquivo baixado?",
        answer:
          "Os pixels de cada área são substituídos na imagem baixada, e não escondidos em uma camada separada. Sua foto original no dispositivo não é alterada, então compartilhe só a cópia censurada.",
      },
      {
        question: "Os dados EXIF também são removidos?",
        answer:
          "Sim. O download é criado a partir dos pixels da tela, então os dados da câmera e a localização GPS do original não são incluídos.",
      },
      {
        question: "Posso usar efeitos diferentes na mesma imagem?",
        answer:
          "Sim. Mude o método ou a intensidade antes de desenhar a próxima área. As áreas que você já desenhou mantêm as próprias configurações.",
      },
      {
        question: "Funciona no celular?",
        answer: "Sim. Arraste o dedo sobre a área que você quer esconder para desenhar uma caixa ou um oval.",
      },
    ],
  },
  "remove-background": {
    name: "Remover fundo",
    shortName: "Remover fundo",
    tagline: "Remova o fundo de uma foto com IA que roda no seu dispositivo e salve um PNG transparente.",
    intro:
      "Remover fundo recorta o assunto principal de uma foto e remove tudo o que está atrás dele, usando um modelo de IA que roda no seu navegador, então suas imagens nunca saem do seu dispositivo. Escolha Rápido, um modelo menor que é ágil e melhor para fotos de pessoas, ou Melhor qualidade, um modelo maior com resultados melhores em qualquer assunto, incluindo produtos, animais de estimação e objetos. Salve o resultado como PNG transparente ou coloque-o sobre uma cor sólida. Se a IA deixar escapar uma mecha de cabelo ou sobrar um pedaço do fundo, corrija com o pincel de apagar e restaurar.",
    seoTitle: "Remover fundo de imagem grátis, no seu aparelho",
    seoDescription:
      "Remover fundo de imagem grátis com IA que roda no navegador. Use um modelo rápido ou a melhor qualidade e salve um PNG transparente. As fotos ficam no aparelho.",
    keywords: [
      "remover fundo de imagem",
      "removedor de fundo",
      "remover fundo de foto grátis",
      "deixar fundo transparente",
      "fundo transparente png",
      "tirar fundo da foto",
      "remover fundo online",
    ],
    howToSteps: [
      {
        title: "Envie uma foto",
        description: "Arraste, escolha ou cole uma imagem JPG, PNG ou WebP.",
      },
      {
        title: "Escolha um modelo",
        description:
          "Rápido vem selecionado por padrão e funciona bem para fotos de pessoas. Escolha Melhor qualidade para produtos, animais de estimação, objetos ou sempre que quiser as bordas mais limpas.",
      },
      {
        title: "Baixe o modelo uma vez",
        description:
          "Na primeira vez que você usa um modelo, seu navegador o baixa: cerca de 16 MB para o Rápido e cerca de 100 MB para o Melhor qualidade, que pergunta antes de começar. Depois disso, ele fica guardado no seu navegador.",
      },
      {
        title: "Escolha o fundo e baixe",
        description: "Mantenha transparente e salve em PNG, ou escolha uma cor sólida e salve em PNG ou JPG.",
      },
    ],
    features: [
      {
        title: "IA que roda no seu dispositivo",
        description: "O modelo roda dentro do seu navegador, então suas fotos nunca são enviadas para um servidor.",
      },
      {
        title: "Dois modelos à escolha",
        description: "O Rápido é ágil e melhor para pessoas. O Melhor qualidade é maior e mais lento, mas dá resultados melhores em qualquer assunto.",
      },
      {
        title: "Baixado uma vez",
        description: "Cada modelo fica guardado no seu navegador depois do primeiro uso, e a ferramenta mostra quais já foram baixados.",
      },
      {
        title: "Fundo transparente ou colorido",
        description: "Salve um PNG transparente, ou coloque o assunto sobre uma cor sólida à sua escolha.",
      },
    ],
    faqs: [
      {
        question: "Minhas fotos são enviadas para um servidor?",
        answer:
          "Não. Só o modelo de IA é baixado para o seu navegador. Suas fotos são processadas no seu dispositivo e não são enviadas para lugar nenhum.",
      },
      {
        question: "Qual é a diferença entre Rápido e Melhor qualidade?",
        answer:
          "O Rápido usa um modelo menor (cerca de 16 MB) e leva cerca de 5 segundos por foto; funciona bem para pessoas, mas pode deixar passar partes de objetos. O Melhor qualidade usa um modelo maior (cerca de 100 MB) e leva cerca de 15–30 segundos, com resultados melhores em produtos, animais de estimação, objetos e pessoas.",
      },
      {
        question: "Por que o primeiro uso demora mais?",
        answer:
          "O modelo precisa ser baixado primeiro. O Melhor qualidade pergunta antes de baixar o seu modelo de 100 MB. Depois do primeiro uso, seu navegador guarda o modelo, então as próximas fotos começam bem mais rápido.",
      },
      {
        question: "Funciona em celulares iPhone e Android?",
        answer:
          "Sim. O Rápido é a melhor escolha no celular. O Melhor qualidade também roda no celular, mas o download maior e o processamento mais demorado são mais perceptíveis nele, principalmente nos dados móveis.",
      },
      {
        question: "Posso colocar uma nova cor de fundo atrás do assunto?",
        answer:
          "Sim. Escolha uma cor sólida e salve em PNG ou JPG. Para um fundo transparente, salve em PNG.",
      },
      {
        question: "Por que algumas bordas não ficam perfeitas?",
        answer:
          "Cabelos finos, pelos, vidro e assuntos com cores parecidas com as do fundo são difíceis para qualquer modelo. Experimente o Melhor qualidade, ou use uma foto com contraste claro entre o assunto e o fundo. Você também pode corrigi-las à mão: escolha “Apagar ou restaurar com um pincel” para tirar restos do fundo ou trazer de volta da foto cabelos e bordas que faltaram, com opção de desfazer.",
      },
    ],
  },
  "compress-image-to-kb": {
    name: "Comprimir imagem para KB",
    shortName: "Comprimir para KB",
    tagline: "Deixe uma foto menor que um tamanho exato, como 20 KB, 50 KB ou 100 KB, para formulários online. Tudo roda no seu dispositivo.",
    intro:
      "Muitos formulários de inscrição e de envio só aceitam fotos abaixo de um tamanho fixo, como 20 KB ou 50 KB, e uma foto comum de celular é muitas vezes maior. O Comprimir imagem para KB deixa o arquivo menor que o limite que você escolher. Ele testa níveis de qualidade até encontrar o melhor que cabe, e só reduz as dimensões da foto quando mesmo a qualidade mais baixa ainda deixaria o arquivo grande demais. Você também pode definir dimensões exatas, como uma foto de passaporte de 35 × 45 mm, e a foto é cortada a partir do centro para preenchê-las. Tudo acontece no seu navegador, então fotos suas e dos seus documentos nunca são enviadas.",
    seoTitle: "Comprimir imagem para 20 KB, 50 KB ou 100 KB – Grátis",
    seoDescription:
      "Comprimir imagem para 20 KB, 50 KB, 100 KB ou qualquer tamanho para formulários online, com a melhor qualidade que cabe. Grátis, privado, sem upload.",
    keywords: [
      "comprimir imagem para 20kb",
      "comprimir imagem para 50kb",
      "comprimir foto para 100kb",
      "reduzir tamanho de foto em kb",
      "diminuir kb de foto",
      "comprimir jpg para 200kb",
      "tamanho de foto para passaporte em kb",
    ],
    howToSteps: [
      {
        title: "Adicione sua foto",
        description: "Arraste, escolha ou cole uma foto JPG, PNG, WebP ou HEIC do iPhone.",
      },
      {
        title: "Escolha o limite de tamanho",
        description: "Selecione de 10 KB a 1 MB, ou digite o limite exato que o formulário pede.",
      },
      {
        title: "Defina as dimensões, se precisar",
        description:
          "Mantenha o tamanho original ou escolha foto de passaporte, um quadrado de 2 × 2 polegadas ou largura e altura personalizadas.",
      },
      {
        title: "Baixe",
        description: "Confira se o resultado diz que está abaixo do limite e baixe o JPG ou WebP.",
      },
    ],
    features: [
      {
        title: "Sempre abaixo do limite",
        description:
          "A ferramenta mede o arquivo real que cria, então o download fica menor que o tamanho escolhido, e não apenas perto dele.",
      },
      {
        title: "A melhor qualidade que cabe",
        description: "Mantém a qualidade mais alta que cabe no limite e reduz as dimensões só quando é preciso.",
      },
      {
        title: "Passaporte e tamanhos personalizados",
        description:
          "Predefinições para fotos de passaporte de 35 × 45 mm e fotos de 2 × 2 polegadas, ou qualquer largura e altura de que você precisar.",
      },
      {
        title: "Privado por natureza",
        description:
          "Sua foto é processada no seu navegador e nunca é enviada, o que é importante para fotos de documentos e de inscrições.",
      },
    ],
    faqs: [
      {
        question: "O arquivo vai mesmo ficar abaixo do limite?",
        answer:
          "Sim. A ferramenta confere o tamanho do arquivo real que cria e só mostra uma mensagem de sucesso quando ele está abaixo do seu limite. Ela conta 1 KB como 1.024 bytes, como fazem o Windows e a maioria dos formulários, então o arquivo também fica abaixo do limite se um formulário contar 1 KB como 1.000 bytes.",
      },
      {
        question: "Por que as dimensões da minha foto mudaram?",
        answer:
          "Com Manter tamanho selecionado, a ferramenta primeiro reduz a qualidade. Se o arquivo ainda ficar grande demais na qualidade mais baixa, ela reduz a largura e a altura passo a passo até caber. A mensagem do resultado avisa quando isso acontece e mostra o novo tamanho.",
      },
      {
        question: "Por que a ferramenta não chega ao meu limite?",
        answer:
          "Quando você define dimensões exatas, a ferramenta não pode diminuir a foto, então um limite muito baixo com dimensões grandes pode ser impossível de atingir. Aumente o limite, escolha dimensões menores ou selecione Manter tamanho.",
      },
      {
        question: "De que tamanho e formato meu formulário precisa?",
        answer:
          "Cada formulário define as próprias regras. Leia as instruções dele para saber o tamanho máximo do arquivo, a largura e a altura em pixels ou milímetros e o formato, e defina os mesmos valores aqui. O JPG é aceito em quase todo lugar.",
      },
      {
        question: "Comprimir vai reduzir a qualidade?",
        answer:
          "Sempre se perde alguma qualidade quando uma foto fica muito menor, mas a ferramenta mantém o máximo que o limite permite. Para rostos, um limite de 30 KB ou mais costuma ficar limpo nas dimensões de foto de passaporte.",
      },
      {
        question: "Minha foto é enviada?",
        answer:
          "Não. A foto é comprimida pelo seu navegador, no seu dispositivo. Nada é enviado a um servidor, então é seguro usar com fotos de documentos de identidade e outros documentos.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC para JPG",
    shortName: "HEIC → JPG",
    tagline: "Converta fotos HEIC do iPhone para JPG para que abram em qualquer computador, celular ou site. A conversão roda no seu dispositivo.",
    intro:
      "iPhones e muitos celulares recentes salvam fotos em HEIC, um formato que mantém boa qualidade em arquivos menores. Mas muitos computadores com Windows, apps mais antigos e formulários de envio não conseguem abri-lo. O HEIC para JPG converte a foto em um JPG padrão, que funciona em quase todo lugar. A foto é decodificada e convertida dentro do seu navegador, então nunca sai do seu dispositivo, e o JPG convertido não inclui os dados de localização, câmera e data guardados no original.",
    seoTitle: "Converter HEIC para JPG – Grátis, sem upload",
    seoDescription:
      "Converter HEIC para JPG no navegador: transforme fotos do iPhone em JPG no Windows, Mac, Android e iPhone. Grátis, privado e nada é enviado.",
    keywords: [
      "heic para jpg",
      "converter heic para jpg",
      "foto do iphone para jpg",
      "conversor heic",
      "heic para jpeg",
      "abrir heic no windows",
    ],
    howToSteps: [
      {
        title: "Adicione sua foto HEIC",
        description: "Arraste, escolha ou cole um arquivo .heic ou .heif do seu iPhone ou computador.",
      },
      {
        title: "Aguarde a prévia",
        description: "Seu navegador decodifica a foto. Fotos grandes podem levar alguns segundos.",
      },
      {
        title: "Baixe o JPG",
        description: "Salve a foto convertida. Ela abre em qualquer visualizador de fotos, navegador ou formulário de envio.",
      },
    ],
    features: [
      {
        title: "Funciona em todo lugar",
        description: "O JPG abre no Windows, no Mac, no Android, em qualquer navegador e em quase todos os sites.",
      },
      {
        title: "Conversão privada",
        description: "A foto é convertida no seu dispositivo e nunca é enviada.",
      },
      {
        title: "Sem dados de localização",
        description: "A localização GPS, os detalhes da câmera e as datas do original não são copiados para o JPG.",
      },
      {
        title: "Continue editando",
        description: "Envie a foto convertida direto para cortar, redimensionar ou comprimir.",
      },
    ],
    faqs: [
      {
        question: "O que é um arquivo HEIC?",
        answer:
          "HEIC (High Efficiency Image Container) é o formato de foto que o iPhone usa por padrão desde o iOS 11. Ele guarda fotos em cerca de metade do espaço de um JPG com qualidade parecida, mas muitos computadores e sites ainda não conseguem abri-lo.",
      },
      {
        question: "O JPG vai ficar igual?",
        answer:
          "Sim, para visualização normal. O JPG é salvo em alta qualidade. Arquivos JPG costumam ser maiores que o HEIC original, porque a compressão do JPG é menos eficiente.",
      },
      {
        question: "Posso converter várias fotos HEIC de uma vez?",
        answer:
          "Sim. Escolha até 50 fotos e elas são convertidas juntas, prontas para baixar uma a uma ou em um ZIP. Se um arquivo HEIC tiver várias imagens, como uma sequência, a primeira é convertida.",
      },
      {
        question: "Como faço meu iPhone tirar fotos em JPG?",
        answer:
          "No iPhone, abra Ajustes, depois Câmera, depois Formatos, e escolha Mais Compatível. As novas fotos passam a ser salvas em JPG. As fotos que você já tirou continuam em HEIC.",
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. O decodificador de HEIC roda no seu navegador, então a foto fica no seu dispositivo.",
      },
    ],
  },
  "heic-to-png": {
    name: "HEIC para PNG",
    shortName: "HEIC → PNG",
    tagline: "Converta fotos HEIC do iPhone para PNG sem perdas, para edição e design. A conversão roda no seu dispositivo.",
    intro:
      "HEIC é o formato de foto que o iPhone usa por padrão, e muitas ferramentas de design, apps mais antigos e sites não conseguem abri-lo. O HEIC para PNG converte a foto em PNG, um formato sem perdas, então nenhum detalhe a mais se perde quando você edita e salva de novo. Isso faz dele uma boa escolha para fotos que você vai retocar, colocar em um design ou recortar. A conversão acontece dentro do seu navegador, então a foto nunca sai do seu dispositivo. Para compartilhar ou enviar, o HEIC para JPG gera arquivos bem menores.",
    seoTitle: "Converter HEIC para PNG – Grátis, sem perdas",
    seoDescription:
      "Converter HEIC para PNG sem perdas no navegador: fotos do iPhone prontas para edição e design. Grátis, privado e nada é enviado.",
    keywords: [
      "heic para png",
      "converter heic para png",
      "foto do iphone para png",
      "conversor heic para png",
      "heif para png",
    ],
    howToSteps: [
      {
        title: "Adicione sua foto HEIC",
        description: "Arraste, escolha ou cole um arquivo .heic ou .heif.",
      },
      {
        title: "Aguarde a prévia",
        description: "Seu navegador decodifica a foto no seu dispositivo.",
      },
      {
        title: "Baixe o PNG",
        description: "Salve o PNG sem perdas e abra-o em qualquer editor ou ferramenta de design.",
      },
    ],
    features: [
      {
        title: "Saída sem perdas",
        description:
          "O PNG mantém cada pixel da foto decodificada, então edições repetidas não acrescentam artefatos de compressão.",
      },
      {
        title: "Abre em qualquer editor",
        description: "O PNG funciona no Photoshop, GIMP, Figma, Canva, Office e em todos os navegadores.",
      },
      {
        title: "Conversão privada",
        description: "A foto é convertida no seu dispositivo e nunca é enviada.",
      },
      {
        title: "Sem dados de localização",
        description: "A localização GPS e os detalhes da câmera do original não são copiados para o PNG.",
      },
    ],
    faqs: [
      {
        question: "PNG ou JPG: qual escolher?",
        answer:
          "Escolha PNG quando for editar a foto depois ou precisar dos pixels exatos. Escolha JPG para compartilhar, mandar por e-mail e usar em formulários de envio, porque arquivos PNG de fotos são várias vezes maiores.",
      },
      {
        question: "Por que o PNG fica tão maior que o HEIC?",
        answer:
          "O HEIC usa uma compressão com perdas muito eficiente. O PNG é sem perdas, então guarda muito mais dados. Uma foto de 2 MB do iPhone pode virar um PNG de 10 MB ou mais.",
      },
      {
        question: "O PNG tem fundo transparente?",
        answer:
          "Não. Fotos não têm transparência, então o PNG é totalmente opaco. Para remover o fundo, abra o resultado no Remover fundo.",
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. O decodificador de HEIC roda no seu navegador, então a foto fica no seu dispositivo.",
      },
    ],
  },
  "heic-to-webp": {
    name: "HEIC para WebP",
    shortName: "HEIC → WebP",
    tagline: "Converta fotos HEIC e HEIF do iPhone em WebP, um formato leve para a web que abre em qualquer navegador. A conversão acontece no seu dispositivo.",
    intro: "HEIC (também chamado HEIF) é o formato de foto que o iPhone e muitos celulares Android usam por padrão, mas a maioria dos sites, sistemas de gerenciamento de conteúdo e apps do Windows não consegue exibi-lo. HEIC para WebP converte a foto em WebP, um formato moderno compatível com todos os navegadores atuais e que mantém os arquivos pequenos, muitas vezes menores que um JPG com a mesma qualidade. Por isso é uma boa escolha para fotos que você vai publicar em um site, blog ou loja virtual. A conversão acontece no seu navegador, então a foto nunca sai do seu dispositivo.",
    seoTitle: "Converter HEIC para WebP – Grátis, privado, HEIF também",
    seoDescription: "Converta fotos HEIC e HEIF do iPhone em WebP no navegador. Arquivos leves para sites, qualidade ajustável e nada é enviado.",
    keywords: [
      "heic para webp",
      "heif para webp",
      "converter heic para webp",
      "foto do iphone para webp",
      "conversor heic para webp",
    ],
    howToSteps: [
      {
        title: "Adicione sua foto HEIC",
        description: "Arraste, escolha ou cole um arquivo .heic ou .heif.",
      },
      {
        title: "Escolha a qualidade",
        description: "85% serve para a maioria das fotos. Diminua para arquivos menores ou aumente para mais detalhes.",
      },
      {
        title: "Baixe o WebP",
        description: "Salve o arquivo WebP e envie para o seu site ou compartilhe.",
      },
    ],
    features: [
      {
        title: "Arquivos leves",
        description: "Com a mesma qualidade visual, um WebP costuma ser menor que um JPG, então as páginas carregam mais rápido.",
      },
      {
        title: "Funciona em qualquer navegador",
        description: "Chrome, Safari, Firefox e Edge exibem WebP, assim como WordPress, Shopify e a maioria dos criadores de sites.",
      },
      {
        title: "Conversão privada",
        description: "A foto é convertida no seu dispositivo e nunca é enviada.",
      },
      {
        title: "Sem dados de localização",
        description: "A localização GPS e os dados da câmera do original não são copiados para o WebP.",
      },
    ],
    faqs: [
      {
        question: "HEIF é o mesmo que HEIC?",
        answer: "Para fotos, sim. HEIF é o formato de arquivo, e HEIC é o nome e a extensão que a Apple usa para as fotos salvas nele. Arquivos .heic e .heif funcionam aqui.",
      },
      {
        question: "WebP ou JPG: qual escolher?",
        answer: "Escolha WebP para sites e lojas virtuais, onde arquivos leves carregam mais rápido. Escolha JPG quando a foto for por e-mail, para uma gráfica, ou para apps e formulários antigos que não aceitam WebP.",
      },
      {
        question: "Qual qualidade devo usar?",
        answer: "Com 85%, a maioria das fotos fica igual ao original. Use 90% ou mais para fotos com muitos detalhes, ou de 70% a 80% quando o tamanho do arquivo for o mais importante.",
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. O decodificador HEIC roda no seu navegador, então a foto fica no seu dispositivo.",
      },
    ],
  },
  "avif-to-jpg": {
    name: "AVIF para JPG",
    shortName: "AVIF → JPG",
    tagline: "Converta imagens AVIF em JPG para abrir em qualquer app, editor ou formulário de upload. A conversão acontece no seu dispositivo.",
    intro: "AVIF é um formato de imagem moderno que muitos sites usam hoje porque os arquivos são bem pequenos. Mas quando você salva uma dessas imagens, visualizadores de fotos antigos, o Office, muitos editores e vários formulários de upload não conseguem abri-la. AVIF para JPG converte a imagem em JPG, o formato que funciona em qualquer lugar. Escolha a qualidade, confira a prévia e baixe. A conversão acontece no seu navegador, então a imagem nunca sai do seu dispositivo.",
    seoTitle: "Converter AVIF para JPG – Grátis, rápido e privado",
    seoDescription: "Converta imagens AVIF em JPG no navegador. Funciona em qualquer app e formulário de upload, qualidade ajustável e nada é enviado.",
    keywords: [
      "avif para jpg",
      "converter avif para jpg",
      "avif para jpeg",
      "conversor avif",
      "abrir arquivo avif",
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem AVIF",
        description: "Arraste, escolha ou cole um arquivo .avif.",
      },
      {
        title: "Escolha a qualidade",
        description: "85% serve para a maioria das imagens. Aumente para mais detalhes ou diminua para um arquivo menor.",
      },
      {
        title: "Baixe o JPG",
        description: "Salve o JPG e abra, edite ou envie onde quiser.",
      },
    ],
    features: [
      {
        title: "Abre em qualquer lugar",
        description: "JPG funciona em qualquer visualizador de fotos, editor, celular, app de e-mail e formulário de upload.",
      },
      {
        title: "Qualidade ajustável",
        description: "Escolha o equilíbrio entre tamanho do arquivo e detalhes antes de baixar.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é convertida no seu dispositivo e nunca é enviada.",
      },
      {
        title: "Transparência resolvida",
        description: "JPG não tem transparência, então as áreas transparentes são preenchidas com uma cor que você escolhe.",
      },
    ],
    faqs: [
      {
        question: "O que é um arquivo AVIF?",
        answer: "AVIF é um formato de imagem baseado no codec de vídeo AV1. Ele gera arquivos bem menores que o JPG com a mesma qualidade, por isso muitos sites o usam, mas programas antigos não conseguem abri-lo.",
      },
      {
        question: "O JPG vai ficar maior que o AVIF?",
        answer: "Normalmente, sim. O AVIF comprime de forma muito eficiente, então a mesma imagem em JPG costuma ficar duas ou três vezes maior. É o preço de ter um arquivo que qualquer programa abre.",
      },
      {
        question: "Por que meu navegador não abre o AVIF?",
        answer: "Navegadores muito antigos não conseguem decodificar AVIF. As versões atuais do Chrome, Edge, Firefox e Safari (versão 16 ou mais recente) conseguem. Se o arquivo ainda assim não abrir, ele pode estar corrompido.",
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Seu navegador decodifica e converte a imagem no seu dispositivo.",
      },
    ],
  },
  "avif-to-png": {
    name: "AVIF para PNG",
    shortName: "AVIF → PNG",
    tagline: "Converta imagens AVIF em PNG sem perdas, mantendo a transparência, para edição e design. A conversão acontece no seu dispositivo.",
    intro: "Imagens AVIF são leves e nítidas, mas muitos editores, ferramentas de design e apps antigos não conseguem abri-las. AVIF para PNG converte a imagem em PNG, um formato sem perdas que mantém as áreas transparentes, por isso é uma boa escolha para logos, gráficos e tudo o que você ainda vai editar. A conversão acontece no seu navegador, então a imagem nunca sai do seu dispositivo. Para fotos que você quer compartilhar, AVIF para JPG gera arquivos menores.",
    seoTitle: "Converter AVIF para PNG – Grátis e sem perdas",
    seoDescription: "Converta imagens AVIF em PNG sem perdas no navegador, mantendo a transparência. Grátis, privado e nada é enviado.",
    keywords: [
      "avif para png",
      "converter avif para png",
      "conversor avif para png",
      "avif para png transparente",
      "abrir arquivo avif",
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem AVIF",
        description: "Arraste, escolha ou cole um arquivo .avif.",
      },
      {
        title: "Confira a prévia",
        description: "Seu navegador decodifica a imagem no seu dispositivo.",
      },
      {
        title: "Baixe o PNG",
        description: "Salve o PNG sem perdas e abra em qualquer editor ou ferramenta de design.",
      },
    ],
    features: [
      {
        title: "Resultado sem perdas",
        description: "O PNG guarda cada pixel da imagem decodificada, então editar e salvar de novo não adiciona artefatos.",
      },
      {
        title: "Transparência mantida",
        description: "As áreas transparentes do AVIF continuam transparentes no PNG.",
      },
      {
        title: "Abre em qualquer editor",
        description: "PNG funciona no Photoshop, GIMP, Figma, Canva, Office e em qualquer navegador.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é convertida no seu dispositivo e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "Por que o PNG é tão maior que o AVIF?",
        answer: "O AVIF usa uma compressão com perdas muito eficiente, enquanto o PNG é sem perdas e guarda muito mais dados. Um PNG pode facilmente ter dez vezes o tamanho do AVIF.",
      },
      {
        question: "O PNG mantém a transparência?",
        answer: "Sim. Se o AVIF tiver áreas transparentes, elas continuam transparentes no PNG.",
      },
      {
        question: "PNG ou JPG: qual escolher?",
        answer: "Escolha PNG para gráficos, transparência ou para continuar editando. Escolha JPG para fotos que você vai compartilhar ou enviar, porque os arquivos são bem menores.",
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. A conversão roda no seu navegador, então a imagem fica no seu dispositivo.",
      },
    ],
  },
  "jpg-to-avif": {
    name: "JPG para AVIF",
    shortName: "JPG → AVIF",
    tagline: "Converta fotos JPG em AVIF, o formato moderno para a web com os menores arquivos. A conversão acontece no seu dispositivo.",
    intro: "O AVIF gera arquivos bem menores que o JPG com a mesma qualidade visual, muitas vezes com metade do tamanho, então as páginas carregam mais rápido e gastam menos dados. Todos os navegadores atuais conseguem exibi-lo. JPG para AVIF converte sua foto em AVIF com a qualidade que você escolher, o que é útil para sites, lojas virtuais e blogs em que cada kilobyte conta. A codificação acontece no seu navegador, então a foto nunca sai do seu dispositivo. Fotos grandes podem levar alguns segundos.",
    seoTitle: "Converter JPG para AVIF – Imagens menores, grátis",
    seoDescription: "Converta fotos JPG em AVIF no navegador e tenha imagens bem menores para a web. Qualidade ajustável, grátis e nada é enviado.",
    keywords: [
      "jpg para avif",
      "converter jpg para avif",
      "jpeg para avif",
      "conversor avif",
      "imagem para avif",
    ],
    howToSteps: [
      {
        title: "Adicione sua foto JPG",
        description: "Arraste, escolha ou cole um arquivo .jpg ou .jpeg.",
      },
      {
        title: "Escolha a qualidade",
        description: "Comece com 85%. O AVIF continua nítido em configurações mais baixas que o JPG, então teste valores menores para ter arquivos menores.",
      },
      {
        title: "Baixe o AVIF",
        description: "Salve o arquivo AVIF e envie para o seu site.",
      },
    ],
    features: [
      {
        title: "Arquivos bem menores",
        description: "Um AVIF costuma ter cerca de metade do tamanho de um JPG com a mesma aparência.",
      },
      {
        title: "Exibido por todos os navegadores atuais",
        description: "Chrome, Edge, Firefox e Safari 16 ou mais recente exibem AVIF.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é convertida no seu dispositivo e nunca é enviada.",
      },
      {
        title: "Sem dados de localização",
        description: "A localização GPS e os dados da câmera do JPG não são copiados para o AVIF.",
      },
    ],
    faqs: [
      {
        question: "AVIF ou WebP: qual é melhor?",
        answer: "O AVIF costuma gerar arquivos menores com a mesma qualidade, enquanto o WebP codifica mais rápido e funciona em alguns apps antigos. Os dois são exibidos por todos os navegadores atuais.",
      },
      {
        question: "Qualquer app abre AVIF?",
        answer: "Não. Os navegadores abrem, mas alguns visualizadores de fotos, editores e formulários de upload antigos não. Guarde o JPG original para esses casos e use AVIF na web.",
      },
      {
        question: "Por que a conversão leva alguns segundos?",
        answer: "A codificação AVIF faz muito trabalho para encontrar o menor arquivo possível. Ela roda no seu dispositivo, então fotos grandes demoram mais em celulares mais lentos.",
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. O codificador AVIF roda no seu navegador, então a foto fica no seu dispositivo.",
      },
    ],
  },
  "png-to-avif": {
    name: "PNG para AVIF",
    shortName: "PNG → AVIF",
    tagline: "Converta imagens PNG em AVIF para ter arquivos bem menores na web, com transparência. A conversão acontece no seu dispositivo.",
    intro: "Arquivos PNG costumam ser grandes, principalmente capturas de tela, fotos e gráficos detalhados. O AVIF guarda a mesma imagem em uma fração do espaço e mantém a transparência, então serve bem para logos, imagens de produtos e ilustrações na web. PNG para AVIF converte sua imagem com a qualidade que você escolher, e todos os navegadores atuais conseguem exibir o resultado. A codificação acontece no seu navegador, então a imagem nunca sai do seu dispositivo.",
    seoTitle: "Converter PNG para AVIF – Arquivos leves e transparência",
    seoDescription: "Converta imagens PNG em AVIF no navegador. Imagens bem menores para a web, com transparência mantida, qualidade ajustável e nada é enviado.",
    keywords: [
      "png para avif",
      "converter png para avif",
      "conversor png para avif",
      "avif transparente",
      "imagem para avif",
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem PNG",
        description: "Arraste, escolha ou cole um arquivo .png.",
      },
      {
        title: "Escolha a qualidade",
        description: "85% serve para a maioria das imagens. Use um valor maior para textos nítidos e linhas finas.",
      },
      {
        title: "Baixe o AVIF",
        description: "Salve o arquivo AVIF e envie para o seu site.",
      },
    ],
    features: [
      {
        title: "Uma fração do tamanho",
        description: "Um AVIF costuma ser muitas vezes menor que o PNG de origem.",
      },
      {
        title: "Transparência mantida",
        description: "Fundos transparentes continuam transparentes no AVIF.",
      },
      {
        title: "Exibido por todos os navegadores atuais",
        description: "Chrome, Edge, Firefox e Safari 16 ou mais recente exibem AVIF.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é convertida no seu dispositivo e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "O AVIF é sem perdas como o PNG?",
        answer: "Aqui, não. O AVIF é comprimido com a qualidade que você escolher, então detalhes muito pequenos podem mudar. Com 85% ou mais, a maioria das imagens fica igual ao PNG.",
      },
      {
        question: "O AVIF mantém a transparência?",
        answer: "Sim. As áreas transparentes do PNG continuam transparentes no AVIF.",
      },
      {
        question: "Quando devo manter o PNG?",
        answer: "Mantenha o PNG para editar, imprimir e usar em apps que não abrem AVIF. Use o AVIF em sites.",
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. O codificador AVIF roda no seu navegador, então a imagem fica no seu dispositivo.",
      },
    ],
  },
  "gif-to-png": {
    name: "GIF para PNG",
    shortName: "GIF → PNG",
    tagline: "Salve um GIF como imagem estática PNG sem perdas, mantendo a transparência. A conversão acontece no seu dispositivo.",
    intro: "GIF é um formato antigo que tem no máximo 256 cores, e muitos editores e formulários de upload lidam mal com ele. GIF para PNG salva a imagem como PNG, um formato sem perdas que qualquer editor e ferramenta de design abre, e mantém as áreas transparentes. Se o GIF for animado, o PNG é uma imagem estática do primeiro quadro. A conversão acontece no seu navegador, então a imagem nunca sai do seu dispositivo.",
    seoTitle: "Converter GIF para PNG – Grátis, com transparência",
    seoDescription: "Converta um GIF em imagem estática PNG sem perdas no navegador, mantendo a transparência. Grátis, privado e nada é enviado.",
    keywords: [
      "gif para png",
      "converter gif para png",
      "conversor gif para png",
      "gif para png transparente",
      "primeiro quadro do gif em png",
    ],
    howToSteps: [
      {
        title: "Adicione seu GIF",
        description: "Arraste, escolha ou cole um arquivo .gif.",
      },
      {
        title: "Confira a prévia",
        description: "GIFs animados mostram o primeiro quadro.",
      },
      {
        title: "Baixe o PNG",
        description: "Salve o PNG e abra em qualquer editor.",
      },
    ],
    features: [
      {
        title: "Sem perdas",
        description: "Cada pixel do quadro do GIF é mantido exatamente.",
      },
      {
        title: "Transparência mantida",
        description: "As áreas transparentes do GIF continuam transparentes no PNG.",
      },
      {
        title: "Abre em qualquer editor",
        description: "PNG funciona no Photoshop, GIMP, Figma, Canva, Office e em qualquer navegador.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é convertida no seu dispositivo e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "O que acontece com um GIF animado?",
        answer: "O PNG é uma imagem estática do primeiro quadro. Os PNGs gerados aqui não são animados.",
      },
      {
        question: "As cores vão mudar?",
        answer: "Não. Um GIF tem no máximo 256 cores, e o PNG guarda todas exatamente.",
      },
      {
        question: "Posso redimensionar a imagem ao converter?",
        answer: "Sim. Defina uma nova largura ou altura nos campos de tamanho antes de baixar.",
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. A conversão roda no seu navegador, então a imagem fica no seu dispositivo.",
      },
    ],
  },
  "gif-to-jpg": {
    name: "GIF para JPG",
    shortName: "GIF → JPG",
    tagline: "Salve um GIF como imagem estática JPG que abre em qualquer lugar. A conversão acontece no seu dispositivo.",
    intro: "Alguns formulários de upload, serviços de impressão e apps só aceitam JPG. GIF para JPG salva um GIF como imagem estática JPG com a qualidade que você escolher. Como o JPG não tem transparência, as áreas transparentes são preenchidas com uma cor de fundo que você escolhe. Se o GIF for animado, o JPG mostra o primeiro quadro. A conversão acontece no seu navegador, então a imagem nunca sai do seu dispositivo.",
    seoTitle: "Converter GIF para JPG – Grátis e privado",
    seoDescription: "Converta um GIF em imagem estática JPG no navegador. Escolha a qualidade e a cor de fundo. Grátis e nada é enviado.",
    keywords: [
      "gif para jpg",
      "converter gif para jpg",
      "gif para jpeg",
      "conversor gif para jpg",
      "primeiro quadro do gif em jpg",
    ],
    howToSteps: [
      {
        title: "Adicione seu GIF",
        description: "Arraste, escolha ou cole um arquivo .gif.",
      },
      {
        title: "Escolha qualidade e fundo",
        description: "Escolha a qualidade do JPG e, se o GIF tiver transparência, a cor que vai preenchê-la.",
      },
      {
        title: "Baixe o JPG",
        description: "Salve o JPG e use onde quiser.",
      },
    ],
    features: [
      {
        title: "Abre em qualquer lugar",
        description: "JPG funciona em qualquer visualizador, editor, celular, serviço de impressão e formulário de upload.",
      },
      {
        title: "Cor de fundo à sua escolha",
        description: "As áreas transparentes são preenchidas com branco ou qualquer cor que você escolher.",
      },
      {
        title: "Qualidade ajustável",
        description: "Defina o equilíbrio entre tamanho do arquivo e detalhes.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é convertida no seu dispositivo e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "O que acontece com um GIF animado?",
        answer: "O JPG é uma imagem estática do primeiro quadro. JPG não tem animação.",
      },
      {
        question: "Por que existe uma cor de fundo?",
        answer: "JPG não tem transparência, então as áreas transparentes do GIF precisam de uma cor sólida. É usado branco, a menos que você escolha outra.",
      },
      {
        question: "Devo escolher PNG?",
        answer: "Escolha PNG para logos, textos e gráficos com cores chapadas, ou para manter a transparência. Escolha JPG quando um formulário ou serviço pedir.",
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. A conversão roda no seu navegador, então a imagem fica no seu dispositivo.",
      },
    ],
  },
  "bmp-to-jpg": {
    name: "BMP para JPG",
    shortName: "BMP → JPG",
    tagline: "Converta imagens BMP do Windows, que são pesadas, em arquivos JPG leves. A conversão acontece no seu dispositivo.",
    intro: "BMP é um formato antigo do Windows que guarda as imagens sem compressão, então os arquivos são enormes e muitos sites e apps não os aceitam. BMP para JPG converte a imagem em JPG, que normalmente tem uma fração do tamanho original, com a qualidade que você escolher. É a solução rápida para digitalizações, capturas de tela de programas antigos e imagens exportadas de softwares legados. A conversão acontece no seu navegador, então a imagem nunca sai do seu dispositivo.",
    seoTitle: "Converter BMP para JPG – Grátis, arquivos menores",
    seoDescription: "Converta imagens BMP em JPG no navegador. Arquivos bem menores que abrem em qualquer lugar, qualidade ajustável e nada é enviado.",
    keywords: [
      "bmp para jpg",
      "converter bmp para jpg",
      "bmp para jpeg",
      "conversor bmp",
      "bitmap para jpg",
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem BMP",
        description: "Arraste, escolha ou cole um arquivo .bmp.",
      },
      {
        title: "Escolha a qualidade",
        description: "85% serve para a maioria das imagens. Aumente para capturas de tela com texto pequeno.",
      },
      {
        title: "Baixe o JPG",
        description: "Salve o JPG, bem menor que o original.",
      },
    ],
    features: [
      {
        title: "Arquivos bem menores",
        description: "Um JPG costuma ter um décimo do tamanho do BMP, ou menos.",
      },
      {
        title: "Abre em qualquer lugar",
        description: "JPG funciona em qualquer visualizador, editor, celular e formulário de upload.",
      },
      {
        title: "Qualidade ajustável",
        description: "Defina o equilíbrio entre tamanho do arquivo e detalhes.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é convertida no seu dispositivo e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "Por que arquivos BMP são tão grandes?",
        answer: "A maioria dos arquivos BMP guarda cada pixel sem compressão. O JPG comprime a imagem, por isso o arquivo convertido fica tão menor.",
      },
      {
        question: "JPG é a escolha certa para capturas de tela?",
        answer: "Para capturas com texto pequeno ou linhas nítidas, o BMP para PNG mantém tudo bem definido. JPG é melhor para fotos e digitalizações.",
      },
      {
        question: "Quais arquivos BMP podem ser abertos?",
        answer: "Os tipos comuns de bitmap do Windows que os navegadores suportam. Algumas variantes incomuns, como certos BMPs comprimidos ou muito antigos, podem não abrir.",
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. A conversão roda no seu navegador, então a imagem fica no seu dispositivo.",
      },
    ],
  },
  "bmp-to-png": {
    name: "BMP para PNG",
    shortName: "BMP → PNG",
    tagline: "Converta imagens BMP do Windows em PNG sem perdas, com uma fração do tamanho. A conversão acontece no seu dispositivo.",
    intro: "Arquivos BMP não têm compressão e são grandes, mas convertê-los em JPG pode borrar textos e linhas nítidas. BMP para PNG converte a imagem em PNG, que a comprime sem perder um único pixel, então capturas de tela, diagramas e gráficos ficam exatamente como eram, em um arquivo bem menor. A conversão acontece no seu navegador, então a imagem nunca sai do seu dispositivo.",
    seoTitle: "Converter BMP para PNG – Grátis e sem perdas",
    seoDescription: "Converta imagens BMP em PNG sem perdas no navegador. Arquivos menores com cada pixel mantido. Grátis, privado e nada é enviado.",
    keywords: [
      "bmp para png",
      "converter bmp para png",
      "conversor bmp para png",
      "bitmap para png",
      "conversor bmp",
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem BMP",
        description: "Arraste, escolha ou cole um arquivo .bmp.",
      },
      {
        title: "Confira a prévia",
        description: "Seu navegador abre a imagem no seu dispositivo.",
      },
      {
        title: "Baixe o PNG",
        description: "Salve o PNG sem perdas.",
      },
    ],
    features: [
      {
        title: "Sem perdas",
        description: "Cada pixel do BMP é mantido exatamente.",
      },
      {
        title: "Arquivos menores",
        description: "O PNG comprime a imagem sem perdas, muitas vezes para uma fração do tamanho do BMP.",
      },
      {
        title: "Ideal para capturas de tela",
        description: "Textos, linhas e cores chapadas continuam nítidos.",
      },
      {
        title: "Conversão privada",
        description: "A imagem é convertida no seu dispositivo e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "Quanto menor fica o PNG?",
        answer: "Depende da imagem. Capturas de tela e gráficos costumam cair para um décimo do tamanho do BMP, enquanto fotos detalhadas diminuem menos.",
      },
      {
        question: "BMP para PNG ou BMP para JPG?",
        answer: "Escolha PNG para capturas de tela, diagramas e gráficos, ou quando precisar de pixels exatos. Escolha JPG para fotos, em que ele gera um arquivo bem menor.",
      },
      {
        question: "Quais arquivos BMP podem ser abertos?",
        answer: "Os tipos comuns de bitmap do Windows que os navegadores suportam. Algumas variantes incomuns podem não abrir.",
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. A conversão roda no seu navegador, então a imagem fica no seu dispositivo.",
      },
    ],
  },
  "tiff-to-jpg": {
    name: "TIFF para JPG",
    shortName: "TIFF → JPG",
    tagline: "Converta digitalizações e imagens TIFF em arquivos JPG leves que abrem em qualquer lugar. A conversão acontece no seu dispositivo.",
    intro: "TIFF é o formato gerado por muitos scanners, programas de fax, câmeras e fluxos de impressão. Os arquivos costumam ser grandes, e o Chrome, o Edge, o Firefox e a maioria dos sites não conseguem exibi-los. TIFF para JPG converte a imagem em JPG, que normalmente tem uma fração do tamanho, com a qualidade que você escolher. TIFFs comprimidos também funcionam, incluindo arquivos de fax em preto e branco. Se o arquivo tiver várias páginas, a primeira é convertida; TIFF para PDF mantém todas as páginas. A conversão acontece no seu navegador, então o arquivo nunca sai do seu dispositivo.",
    seoTitle: "Converter TIFF para JPG – Grátis, rápido e privado",
    seoDescription: "Converta digitalizações e imagens TIFF em JPG no navegador. Arquivos menores que abrem em qualquer lugar, qualidade ajustável e nada é enviado.",
    keywords: [
      "tiff para jpg",
      "tif para jpg",
      "converter tiff para jpg",
      "tiff para jpeg",
      "conversor tiff",
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem TIFF",
        description: "Arraste, escolha ou cole um arquivo .tif ou .tiff.",
      },
      {
        title: "Escolha a qualidade",
        description: "85% serve para fotos. Use um valor maior para digitalizações com texto pequeno.",
      },
      {
        title: "Baixe o JPG",
        description: "Salve o JPG e compartilhe ou faça upload dele.",
      },
    ],
    features: [
      {
        title: "Arquivos bem menores",
        description: "Um JPG costuma ter uma fração do tamanho do TIFF.",
      },
      {
        title: "Abre em qualquer lugar",
        description: "JPG funciona em qualquer visualizador, editor, celular e formulário de upload.",
      },
      {
        title: "A maioria dos tipos de TIFF",
        description: "TIFFs sem compressão, LZW, Deflate, PackBits, JPEG e de fax em preto e branco abrem normalmente.",
      },
      {
        title: "Conversão privada",
        description: "O arquivo é convertido no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Por que meu navegador não abre arquivos TIFF?",
        answer: "Entre os principais navegadores, só o Safari exibe TIFF. Chrome, Edge e Firefox não exibem, então esta ferramenta decodifica o arquivo por conta própria, no seu dispositivo.",
      },
      {
        question: "O que acontece com um TIFF de várias páginas?",
        answer: "A primeira página é convertida. Para manter todas as páginas, use TIFF para PDF, que cria uma página de PDF para cada página do TIFF.",
      },
      {
        question: "Uma digitalização muito grande é redimensionada?",
        answer: "Páginas com mais de cerca de 16 megapixels, como 4.000 × 4.000 pixels, são reduzidas a esse tamanho para que qualquer navegador, inclusive no iPhone, consiga processá-las. Digitalizações e fotos normais não são redimensionadas.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer: "Não. O TIFF é decodificado e convertido no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "tiff-to-png": {
    name: "TIFF para PNG",
    shortName: "TIFF → PNG",
    tagline: "Converta imagens TIFF em PNG sem perdas, que qualquer navegador e editor abre. A conversão acontece no seu dispositivo.",
    intro: "Arquivos TIFF de scanners, câmeras e programas de design não aparecem no Chrome, no Edge, no Firefox nem na maioria dos sites. TIFF para PNG converte a imagem em PNG, que é sem perdas como o TIFF, então cada pixel é mantido, e a transparência também. Isso faz dele uma boa escolha para documentos digitalizados, desenhos de traço e gráficos que você ainda vai editar. Se o arquivo tiver várias páginas, a primeira é convertida; TIFF para PDF mantém todas as páginas. A conversão acontece no seu navegador, então o arquivo nunca sai do seu dispositivo.",
    seoTitle: "Converter TIFF para PNG – Grátis e sem perdas",
    seoDescription: "Converta imagens TIFF em PNG sem perdas no navegador, mantendo cada pixel e a transparência. Grátis, privado e nada é enviado.",
    keywords: [
      "tiff para png",
      "tif para png",
      "converter tiff para png",
      "conversor tiff para png",
      "tiff para png sem perdas",
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem TIFF",
        description: "Arraste, escolha ou cole um arquivo .tif ou .tiff.",
      },
      {
        title: "Confira a prévia",
        description: "Seu navegador decodifica a imagem no seu dispositivo.",
      },
      {
        title: "Baixe o PNG",
        description: "Salve o PNG sem perdas e abra em qualquer editor.",
      },
    ],
    features: [
      {
        title: "Sem perdas",
        description: "Cada pixel da página TIFF é mantido exatamente.",
      },
      {
        title: "Transparência mantida",
        description: "Áreas transparentes do TIFF continuam transparentes no PNG.",
      },
      {
        title: "A maioria dos tipos de TIFF",
        description: "TIFFs sem compressão, LZW, Deflate, PackBits, JPEG e de fax em preto e branco abrem normalmente.",
      },
      {
        title: "Conversão privada",
        description: "O arquivo é convertido no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "O PNG vai ficar menor que o TIFF?",
        answer: "Muitas vezes, principalmente com TIFFs sem compressão e digitalizações em preto e branco. Um TIFF que já estava comprimido pode gerar um PNG de tamanho parecido.",
      },
      {
        question: "O que acontece com um TIFF de várias páginas?",
        answer: "A primeira página é convertida. Para manter todas as páginas, use TIFF para PDF, que cria uma página de PDF para cada página do TIFF.",
      },
      {
        question: "Uma digitalização muito grande é redimensionada?",
        answer: "Páginas com mais de cerca de 16 megapixels, como 4.000 × 4.000 pixels, são reduzidas a esse tamanho para que qualquer navegador, inclusive no iPhone, consiga processá-las. Digitalizações e fotos normais não são redimensionadas.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer: "Não. O TIFF é decodificado e convertido no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "jpg-to-pdf": {
    name: "JPG para PDF",
    shortName: "JPG → PDF",
    tagline: "Transforme uma ou mais fotos em um único PDF, na ordem que você escolher, com páginas A4 ou Carta. Nada é enviado.",
    intro:
      "O JPG para PDF coloca suas fotos em um único arquivo PDF, uma foto por página. É o jeito rápido de mandar páginas digitalizadas, recibos, anotações ou fotos de documentos como um só documento. Adicione imagens JPG, PNG, WebP ou HEIC do iPhone, coloque-as em ordem e escolha o tamanho da página, a orientação e as margens. As fotos JPG entram no PDF sem ser recomprimidas, então mantêm a qualidade original. O PDF é criado pelo seu navegador, então seus documentos nunca são enviados a um servidor.",
    seoTitle: "JPG para PDF – Juntar fotos em um PDF grátis",
    seoDescription:
      "JPG para PDF no navegador: converta fotos JPG, PNG e do iPhone em um único PDF. Reordene as páginas, escolha A4 ou Carta. Grátis, sem upload e sem marca d’água.",
    keywords: [
      "jpg para pdf",
      "imagem para pdf",
      "converter foto em pdf",
      "png para pdf",
      "juntar imagens em pdf",
      "conversor jpg para pdf",
    ],
    howToSteps: [
      {
        title: "Adicione suas imagens",
        description:
          "Arraste ou escolha uma ou mais imagens JPG, PNG, WebP ou HEIC. Você pode adicionar mais a qualquer momento.",
      },
      {
        title: "Coloque-as em ordem",
        description: "Use os botões para cima e para baixo para organizar as páginas e remova as que não precisar.",
      },
      {
        title: "Escolha o layout da página",
        description: "Selecione A4, Carta ou uma página do tamanho de cada imagem, a orientação e a margem.",
      },
      {
        title: "Crie o PDF",
        description: "Baixe um único PDF com cada imagem em sua própria página.",
      },
    ],
    features: [
      {
        title: "Várias imagens, um PDF",
        description: "Junte em um único documento quantas fotos o seu dispositivo aguentar.",
      },
      {
        title: "Qualidade original do JPG",
        description: "As fotos JPG são incorporadas como estão, sem outra rodada de compressão.",
      },
      {
        title: "A4, Carta ou ajustado à imagem",
        description:
          "Tamanhos de papel padrão com orientação automática, ou páginas do tamanho exato de cada imagem.",
      },
      {
        title: "Privado e sem marca d’água",
        description: "O PDF é montado no seu dispositivo, não tem marca d’água e nada é enviado.",
      },
    ],
    faqs: [
      {
        question: "Quantas imagens posso adicionar?",
        answer:
          "Não há um limite fixo. Dezenas de fotos de celular funcionam na maioria dos dispositivos; lotes muito grandes podem esgotar a memória de celulares mais antigos.",
      },
      {
        question: "As fotos vão perder qualidade?",
        answer:
          "As fotos JPG entram no PDF sem recompressão, então mantêm a qualidade original. Imagens PNG continuam sem perdas. Imagens WebP e HEIC são convertidas antes para JPG de alta qualidade, porque o PDF não consegue guardá-las diretamente.",
      },
      {
        question: "Por que meu PDF ficou tão grande?",
        answer:
          "O PDF contém suas fotos em resolução total. Para deixá-lo menor, reduza as fotos antes com o Comprimir imagem ou o Redimensionar imagem e depois adicione-as aqui.",
      },
      {
        question: "Fotos de celular tiradas de lado vão ficar na posição certa?",
        answer:
          "Sim. As fotos são colocadas do jeito que aparecem no seu celular, usando a orientação guardada no arquivo.",
      },
      {
        question: "Meu documento é enviado?",
        answer:
          "Não. O PDF é criado pelo seu navegador no seu dispositivo, então recibos, documentos de identidade e documentos privados nunca saem dele.",
      },
    ],
  },
  "png-to-pdf": {
    name: "PNG para PDF",
    shortName: "PNG → PDF",
    tagline: "Transforme imagens PNG e capturas de tela em um único PDF, na ordem que você escolher. A conversão acontece no seu dispositivo.",
    intro: "PNG para PDF junta uma ou mais imagens PNG, como capturas de tela, digitalizações ou diagramas, em um único PDF fácil de mandar por e-mail, imprimir ou enviar. Coloque as páginas na ordem que quiser, escolha A4, Carta ou uma página do tamanho de cada imagem, e defina a orientação e as margens. As imagens mantêm a resolução total. Tudo acontece no seu navegador, então suas imagens nunca são enviadas. Fotos JPG, WebP e HEIC do iPhone podem entrar no mesmo PDF.",
    seoTitle: "Converter PNG para PDF – Juntar imagens, grátis",
    seoDescription: "Converta imagens PNG e capturas de tela em um único PDF no navegador. Reordene as páginas, escolha A4 ou Carta. Grátis, privado e sem upload.",
    keywords: [
      "png para pdf",
      "converter png para pdf",
      "conversor png para pdf",
      "print para pdf",
      "juntar png em pdf",
    ],
    howToSteps: [
      {
        title: "Adicione suas imagens PNG",
        description: "Arraste ou escolha uma ou mais imagens. Você pode adicionar mais depois.",
      },
      {
        title: "Organize as páginas",
        description: "Arraste ou use os botões de seta para definir a ordem e depois escolha o tamanho da página, a orientação e a margem.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve um único PDF com uma página para cada imagem.",
      },
    ],
    features: [
      {
        title: "Várias imagens, um PDF",
        description: "Junte capturas de tela ou digitalizações em um único documento.",
      },
      {
        title: "Sua ordem de páginas",
        description: "Reordene as páginas antes de criar o PDF.",
      },
      {
        title: "Opções de tamanho de página",
        description: "A4, Carta ou cada página do tamanho da sua imagem.",
      },
      {
        title: "Conversão privada",
        description: "O PDF é criado no seu dispositivo e nada é enviado.",
      },
    ],
    faqs: [
      {
        question: "As imagens perdem qualidade?",
        answer: "Não. Cada imagem entra no PDF em resolução total.",
      },
      {
        question: "Posso misturar PNG com outros formatos?",
        answer: "Sim. Imagens JPG, WebP e HEIC do iPhone podem entrar no mesmo PDF.",
      },
      {
        question: "O que faz a opção Ajustar à imagem?",
        answer: "Cada página fica com o tamanho e o formato da sua imagem, sem borda branca, o que funciona bem para capturas de tela e slides.",
      },
      {
        question: "Minhas imagens são enviadas?",
        answer: "Não. O PDF é montado no seu navegador, então as imagens ficam no seu dispositivo.",
      },
    ],
  },
  "heic-to-pdf": {
    name: "HEIC para PDF",
    shortName: "HEIC → PDF",
    tagline: "Transforme fotos HEIC do iPhone, como recibos e documentos, em um único PDF. A conversão acontece no seu dispositivo.",
    intro: "O iPhone salva as fotos em HEIC, mas formulários de reembolso, escolas, bancos e escritórios costumam pedir um PDF. HEIC para PDF transforma uma ou mais fotos HEIC, como recibos, documentos de identidade, formulários ou páginas escritas à mão, em um único PDF para fazer upload ou mandar por e-mail. Coloque as páginas em ordem e escolha A4, Carta ou páginas do tamanho de cada foto. Tudo acontece no seu navegador, então suas fotos nunca são enviadas.",
    seoTitle: "Converter HEIC para PDF – Fotos do iPhone em PDF, grátis",
    seoDescription: "Converta fotos HEIC do iPhone em um único PDF no navegador. Reordene as páginas, escolha A4 ou Carta. Grátis, privado e nada é enviado.",
    keywords: [
      "heic para pdf",
      "converter heic para pdf",
      "foto do iphone para pdf",
      "heif para pdf",
      "conversor heic para pdf",
    ],
    howToSteps: [
      {
        title: "Adicione suas fotos HEIC",
        description: "Arraste ou escolha um ou mais arquivos .heic ou .heif.",
      },
      {
        title: "Organize as páginas",
        description: "Defina a ordem e depois escolha o tamanho da página, a orientação e a margem.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve um único PDF com uma página para cada foto.",
      },
    ],
    features: [
      {
        title: "Várias fotos, um PDF",
        description: "Junte recibos ou páginas de documentos em um único arquivo.",
      },
      {
        title: "Sua ordem de páginas",
        description: "Reordene as páginas antes de criar o PDF.",
      },
      {
        title: "Opções de tamanho de página",
        description: "A4, Carta ou cada página do tamanho da sua foto.",
      },
      {
        title: "Conversão privada",
        description: "Suas fotos são convertidas no seu dispositivo e nunca são enviadas.",
      },
    ],
    faqs: [
      {
        question: "HEIF é o mesmo que HEIC?",
        answer: "Para fotos, sim. Arquivos .heic e .heif funcionam aqui.",
      },
      {
        question: "Posso adicionar imagens JPG ou PNG também?",
        answer: "Sim. Imagens JPG, PNG e WebP podem entrar no mesmo PDF.",
      },
      {
        question: "O PDF vai ficar legível para documentos?",
        answer: "Sim. As fotos entram em resolução total. Para o resultado mais nítido, fotografe os documentos bem planos e com boa luz.",
      },
      {
        question: "Minhas fotos são enviadas?",
        answer: "Não. O decodificador HEIC e o gerador de PDF rodam no seu navegador, então suas fotos ficam no seu dispositivo.",
      },
    ],
  },
  "tiff-to-pdf": {
    name: "TIFF para PDF",
    shortName: "TIFF → PDF",
    tagline: "Transforme digitalizações e faxes TIFF em PDF, com todas as páginas de um TIFF de várias páginas mantidas em ordem. A conversão acontece no seu dispositivo.",
    intro: "Scanners e programas de fax costumam salvar documentos como arquivos TIFF de várias páginas, mas a maioria das pessoas espera um PDF. TIFF para PDF transforma cada página de cada TIFF em uma página de PDF, em ordem, para que um contrato digitalizado ou um fax vire um único documento que você pode abrir, mandar por e-mail e enviar em qualquer lugar. Adicione vários arquivos, reorganize as páginas e escolha A4, Carta ou páginas do tamanho de cada imagem. Tudo acontece no seu navegador, então seus documentos nunca são enviados.",
    seoTitle: "Converter TIFF para PDF – Várias páginas, grátis",
    seoDescription: "Converta digitalizações e faxes TIFF em PDF no navegador. Todas as páginas de um TIFF de várias páginas, em ordem. Grátis, privado e nada é enviado.",
    keywords: [
      "tiff para pdf",
      "tif para pdf",
      "converter tiff para pdf",
      "tiff com várias páginas para pdf",
      "fax tiff para pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seus arquivos TIFF",
        description: "Arraste ou escolha um ou mais arquivos .tif ou .tiff. Cada página aparece na lista.",
      },
      {
        title: "Organize as páginas",
        description: "Defina a ordem e depois escolha o tamanho da página, a orientação e a margem.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve um único PDF com todas as páginas.",
      },
    ],
    features: [
      {
        title: "Todas as páginas mantidas",
        description: "Cada página de um TIFF de várias páginas vira uma página de PDF, em ordem.",
      },
      {
        title: "Formatos de fax e digitalização",
        description: "TIFFs de fax em preto e branco e com compressão LZW, Deflate, PackBits e JPEG abrem normalmente.",
      },
      {
        title: "Sua ordem de páginas",
        description: "Reordene ou remova páginas antes de criar o PDF.",
      },
      {
        title: "Conversão privada",
        description: "Seus documentos são convertidos no seu dispositivo e nunca são enviados.",
      },
    ],
    faqs: [
      {
        question: "Quantas páginas um TIFF pode ter?",
        answer: "Até 200 páginas por arquivo. As páginas depois da 200ª ficam de fora, então divida documentos muito longos em TIFFs menores antes.",
      },
      {
        question: "Posso misturar TIFF com outras imagens?",
        answer: "Sim. Imagens JPG, PNG, WebP e HEIC do iPhone podem entrar no mesmo PDF.",
      },
      {
        question: "O texto do PDF é pesquisável?",
        answer: "Não. Cada página entra como imagem, do jeito que estava no TIFF. Para copiar o texto, abra uma página no Imagem para texto.",
      },
      {
        question: "Meus documentos são enviados?",
        answer: "Não. O TIFF é decodificado e o PDF é gerado no seu navegador, então seus documentos ficam no seu dispositivo.",
      },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF para JPG",
    shortName: "PDF → JPG",
    tagline: "Salve cada página de um PDF como imagem JPG ou PNG, uma página por vez ou todas juntas em um ZIP. Nada é enviado.",
    intro:
      "O PDF para JPG transforma as páginas de um PDF em imagens que você pode postar, compartilhar em um chat, inserir em um slide ou enviar a um formulário que só aceita imagens. Escolha JPG para arquivos pequenos ou PNG para textos nítidos, e defina a resolução: 72 dpi para telas, 150 dpi para a maioria dos usos ou 300 dpi para impressão. Baixe uma única página ou todas de uma vez em um arquivo ZIP. O PDF é aberto pelo seu navegador no seu dispositivo, então documentos privados nunca são enviados.",
    seoTitle: "Converter PDF para JPG – Todas as páginas, grátis",
    seoDescription:
      "Converta páginas PDF em imagens JPG ou PNG no navegador. Escolha de 72 a 600 dpi e baixe uma página, as escolhidas ou todas em ZIP. Grátis, sem upload.",
    keywords: [
      "pdf para jpg",
      "pdf para imagem",
      "converter pdf em jpg",
      "pdf para png",
      "página de pdf para imagem",
      "salvar pdf como jpg",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um arquivo PDF. As páginas aparecem como prévias.",
      },
      {
        title: "Escolha o formato e a resolução",
        description: "Escolha JPG ou PNG, e 72, 150, 300 ou 600 dpi.",
      },
      {
        title: "Baixe",
        description: "Salve uma única página ou baixe todas as páginas juntas em um arquivo ZIP.",
      },
    ],
    features: [
      {
        title: "Todas as páginas ou só uma",
        description: "Baixe a página que precisa, páginas digitadas como 2-5, ou todas de uma vez em ZIP.",
      },
      {
        title: "Resolução para impressão",
        description: "Até 600 dpi para texto nítido, impressão e OCR.",
      },
      {
        title: "JPG ou PNG",
        description: "JPG para arquivos pequenos, PNG para textos e diagramas nítidos.",
      },
      {
        title: "Documentos privados continuam privados",
        description: "O PDF é aberto no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Qual resolução devo escolher?",
        answer:
          "150 dpi serve para quase tudo, de compartilhar a slides. Escolha 300 dpi para imprimir, 600 dpi para letras miúdas ou OCR, e 72 dpi para os menores arquivos. Resoluções maiores demoram mais e geram arquivos maiores; no celular, páginas muito grandes podem sair um pouco menores.",
      },
      {
        question: "JPG ou PNG?",
        answer:
          "O JPG gera arquivos bem menores e é melhor para páginas com fotos. O PNG mantém textos e desenhos de linhas perfeitamente nítidos, mas os arquivos são maiores.",
      },
      {
        question: "Posso converter um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem proteção e tente com essa cópia.",
      },
      {
        question: "O texto continua selecionável?",
        answer:
          "Não. Cada página vira uma imagem, então o texto não pode ser selecionado nem pesquisado. Guarde o PDF original se precisar do texto.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é lido e renderizado pelo seu navegador, então contratos, extratos e outros documentos privados nunca saem do seu dispositivo.",
      },
    ],
  },
  "pdf-to-png": {
    name: "PDF para PNG",
    shortName: "PDF → PNG",
    tagline: "Salve cada página de um PDF como imagem PNG nítida e sem perdas, uma por vez ou todas em um ZIP. A conversão acontece no seu dispositivo.",
    intro: "PDF para PNG transforma cada página de um PDF em uma imagem PNG. O PNG é sem perdas, então textos, linhas e diagramas ficam perfeitamente nítidos, o que faz dele a escolha certa para slides, documentos e gráficos que você quer colocar em uma apresentação, um design ou uma página web. Escolha a resolução e baixe páginas avulsas ou todas juntas em um ZIP. O PDF é aberto no seu navegador e nunca é enviado.",
    seoTitle: "Converter PDF para PNG – Páginas nítidas, grátis",
    seoDescription: "Converta páginas PDF em imagens PNG nítidas no navegador. De 72 a 600 DPI; baixe uma página, as escolhidas ou todas. Grátis e privado.",
    keywords: [
      "pdf para png",
      "converter pdf para png",
      "conversor pdf para png",
      "página de pdf para imagem",
      "pdf para png alta resolução",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um arquivo PDF. As páginas aparecem como miniaturas.",
      },
      {
        title: "Escolha a resolução",
        description: "150 DPI serve para telas. Use 300 DPI para imprimir e 600 DPI para detalhes finos.",
      },
      {
        title: "Baixe as páginas",
        description: "Salve uma página como PNG ou todas juntas em um ZIP.",
      },
    ],
    features: [
      {
        title: "Textos e linhas nítidos",
        description: "O PNG é sem perdas, então textos pequenos e linhas finas continuam definidos.",
      },
      {
        title: "Resolução à escolha",
        description: "72, 150, 300 ou 600 DPI, de prévias para a web a letras miúdas.",
      },
      {
        title: "Todas as páginas de uma vez",
        description: "Baixe todas as páginas em um único ZIP, com nomes na ordem das páginas.",
      },
      {
        title: "Conversão privada",
        description: "O PDF é aberto no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "PNG ou JPG para páginas de PDF?",
        answer: "O PNG mantém textos e diagramas perfeitamente nítidos. O JPG gera arquivos menores e serve para páginas que são quase só fotos. Você pode mudar para JPG na mesma ferramenta.",
      },
      {
        question: "Qual resolução devo escolher?",
        answer: "150 DPI fica bom na tela. 300 DPI é para imprimir, e 600 DPI para detalhes finos ou OCR; valores mais altos geram arquivos bem maiores.",
      },
      {
        question: "Posso converter um PDF protegido por senha?",
        answer: "Não, se ele pedir senha para abrir. Abra-o em um leitor de PDF, salve uma cópia sem a senha e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é lido e desenhado pelo seu navegador, então fica no seu dispositivo.",
      },
    ],
  },
  "merge-images": {
    name: "Juntar imagens",
    shortName: "Juntar",
    tagline: "Junte fotos lado a lado, empilhadas ou em grade, com espaçamento e cor de fundo, e salve uma única imagem.",
    intro:
      "O Juntar imagens combina várias imagens em uma só: lado a lado para comparações de antes e depois, empilhadas para capturas de tela longas e guias passo a passo, ou em grade para uma colagem simples. Coloque as imagens em ordem, escolha o espaço entre elas e a cor de fundo, e deixe a ferramenta igualar as alturas ou as larguras para que as bordas fiquem alinhadas. Salve o resultado em JPG, PNG ou WebP. Tudo acontece no seu navegador, então suas fotos nunca são enviadas.",
    seoTitle: "Juntar imagens online – Combinar fotos grátis",
    seoDescription:
      "Juntar fotos lado a lado, na vertical ou em grade no navegador. Adicione espaçamento e uma cor de fundo. Grátis, privado e sem upload.",
    keywords: [
      "juntar imagens",
      "juntar fotos",
      "combinar imagens",
      "colocar duas fotos lado a lado",
      "montagem de fotos",
      "juntar imagens na vertical",
    ],
    howToSteps: [
      {
        title: "Adicione suas imagens",
        description: "Arraste ou escolha duas ou mais imagens JPG, PNG, WebP ou HEIC.",
      },
      {
        title: "Organize-as",
        description: "Use os botões para cima e para baixo para definir a ordem e remova as que não precisar.",
      },
      {
        title: "Escolha o layout",
        description:
          "Lado a lado, empilhadas ou em grade com o número de colunas que quiser, além do espaçamento e do fundo.",
      },
      {
        title: "Baixe",
        description: "Salve a imagem combinada em JPG, PNG ou WebP.",
      },
    ],
    features: [
      {
        title: "Três layouts",
        description: "Horizontal para comparações, vertical para capturas de tela e guias, e grade para colagens.",
      },
      {
        title: "Bordas alinhadas",
        description: "Iguale alturas ou larguras automaticamente, ou mantenha cada imagem no tamanho original.",
      },
      {
        title: "Espaçamento e fundo",
        description:
          "Defina o espaço entre as imagens e preencha-o com qualquer cor, ou deixe-o transparente em PNG e WebP.",
      },
      {
        title: "Privado",
        description: "As imagens são combinadas no seu dispositivo e nunca são enviadas.",
      },
    ],
    faqs: [
      {
        question: "Quantas imagens posso juntar?",
        answer:
          "Quantas quiser, dentro da memória do seu dispositivo. Resultados muito grandes são reduzidos automaticamente para ficar dentro do tamanho que os navegadores conseguem salvar.",
      },
      {
        question: "O que o Igualar tamanhos faz?",
        answer:
          "Em uma linha, cada imagem é ajustada para a mesma altura; em uma coluna, para a mesma largura; em uma grade, cada imagem preenche uma célula do mesmo tamanho. Desative para manter cada imagem no tamanho original.",
      },
      {
        question: "O fundo pode ser transparente?",
        answer:
          "Sim. Escolha Transparente e salve em PNG ou WebP. O JPG não consegue guardar transparência, então usa a cor de fundo no lugar.",
      },
      {
        question: "Como faço uma imagem de antes e depois?",
        answer:
          "Adicione as duas fotos, escolha Lado a lado, deixe Igualar tamanhos ativado e adicione um pequeno espaço. As duas imagens vão ficar com a mesma altura.",
      },
      {
        question: "Minhas imagens são enviadas?",
        answer: "Não. As imagens são combinadas pelo seu navegador no seu dispositivo.",
      },
    ],
  },
  "merge-pdf": {
    name: "Juntar PDF",
    shortName: "Juntar PDF",
    tagline: "Combine vários arquivos PDF em um só, na ordem que você escolher. Os arquivos são juntados no seu dispositivo.",
    intro:
      "O Juntar PDF une dois ou mais arquivos PDF em um único documento. Adicione os arquivos, coloque-os em ordem com os botões de mover, confira a primeira página de cada um e baixe um único PDF com todas as páginas em sequência. É o jeito rápido de enviar um relatório com os anexos, várias páginas digitalizadas ou um conjunto de notas fiscais como um só arquivo. A junção acontece no seu navegador, então seus documentos nunca são enviados a um servidor. Mude para Páginas para ver todas as páginas de todos os arquivos em uma grade e mover, girar ou excluir páginas antes de juntar.",
    seoTitle: "Juntar PDF online – Grátis e sem upload",
    seoDescription:
      "Juntar PDF no navegador: combine vários arquivos em um só, na ordem que quiser, e baixe um único PDF. Grátis, privado, sem upload e sem marca d’água.",
    keywords: [
      "juntar pdf",
      "juntar arquivos pdf",
      "unir pdf",
      "juntar pdf online grátis",
      "combinar pdf",
      "juntar vários pdf em um",
    ],
    howToSteps: [
      {
        title: "Adicione seus PDFs",
        description: "Arraste ou escolha dois ou mais arquivos PDF. Você pode adicionar mais a qualquer momento.",
      },
      {
        title: "Coloque-os em ordem",
        description: "Use os botões para cima e para baixo para organizar os arquivos e remova os que não precisar.",
      },
      {
        title: "Baixe",
        description: "Salve um único PDF com todas as páginas, um arquivo depois do outro.",
      },
    ],
    features: [
      {
        title: "Quantos arquivos quiser",
        description: "Junte quantos PDFs o seu dispositivo aguentar, com o total de páginas exibido.",
      },
      {
        title: "Na sua ordem",
        description: "Organize os arquivos com botões que também funcionam pelo teclado e com leitores de tela.",
      },
      {
        title: "Páginas inalteradas",
        description:
          "As páginas são copiadas como estão, sem recompressão, então o texto continua nítido e pesquisável.",
      },
      {
        title: "Privado e grátis",
        description: "Os arquivos são juntados no seu dispositivo, sem upload, sem cadastro e sem marca d’água.",
      },
    ],
    faqs: [
      {
        question: "Há um limite de arquivos que posso juntar?",
        answer:
          "Não há um limite fixo. Dezenas de PDFs comuns funcionam na maioria dos dispositivos; arquivos muito grandes podem ficar lentos em celulares mais antigos.",
      },
      {
        question: "Os links e os marcadores continuam funcionando?",
        answer:
          "Sim. Os links das páginas e a lista de marcadores de cada arquivo (o sumário no painel lateral do leitor de PDF) são mantidos e apontam para o arquivo unido. Se você tirar uma página, os links e marcadores dela saem junto.",
      },
      {
        question: "Juntar reduz a qualidade?",
        answer:
          "Não. As páginas são copiadas como estão, então textos, imagens e gráficos vetoriais ficam exatamente iguais.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "split-pdf": {
    name: "Dividir PDF",
    shortName: "Dividir PDF",
    tagline: "Divida um PDF por intervalos de páginas, a cada tantas páginas ou em páginas avulsas. Funciona no seu dispositivo.",
    intro:
      "O Dividir PDF separa um PDF em vários arquivos menores. Digite intervalos de páginas como 1-3, 5, 8- para obter um arquivo para cada intervalo, divida a cada tantas páginas para cortar uma digitalização longa em partes iguais, ou salve cada página como um PDF separado. A ferramenta lista os arquivos que você vai receber antes do download, e vários arquivos chegam juntos em um único ZIP. A divisão acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Dividir PDF online – Por páginas ou intervalos, grátis",
    seoDescription:
      "Dividir PDF no navegador: separe em arquivos por intervalos de páginas, a cada N páginas ou página por página. Grátis, privado e nada é enviado.",
    keywords: [
      "dividir pdf",
      "separar páginas de pdf",
      "dividir pdf online grátis",
      "separar pdf",
      "dividir pdf em partes",
      "dividir páginas pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um PDF. As páginas aparecem como prévias.",
      },
      {
        title: "Escolha como dividir",
        description: "Digite intervalos de páginas, escolha um número de páginas por arquivo ou divida página por página.",
      },
      {
        title: "Confira a lista",
        description: "O painel mostra cada arquivo que você vai receber e as páginas dele.",
      },
      {
        title: "Baixe",
        description: "Salve um PDF, ou um ZIP quando houver vários arquivos.",
      },
    ],
    features: [
      {
        title: "Três formas de dividir",
        description: "Intervalos personalizados, grupos iguais de páginas ou uma página por arquivo.",
      },
      {
        title: "Veja antes de salvar",
        description: "Cada arquivo resultante e os números das páginas dele são listados antes.",
      },
      {
        title: "Um único download em ZIP",
        description: "Vários arquivos chegam juntos, nomeados pelas suas páginas.",
      },
      {
        title: "Privado",
        description: "O PDF é dividido no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Como escrevo os intervalos de páginas?",
        answer:
          "Separe os intervalos com vírgulas. 1-3 significa as páginas 1 a 3, 5 significa só a página 5 e 8- significa da página 8 até o final. Cada intervalo vira um PDF separado.",
      },
      {
        question: "Posso obter um PDF com só algumas páginas?",
        answer:
          "Sim. Digite um único intervalo, como 2-4, para baixar só essas páginas. O Extrair páginas de PDF também permite escolher as páginas clicando nelas.",
      },
      {
        question: "Dividir altera as páginas?",
        answer: "Não. As páginas são copiadas como estão, então o texto continua nítido e pesquisável.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "extract-pdf-pages": {
    name: "Extrair páginas de PDF",
    shortName: "Extrair páginas",
    tagline: "Escolha as páginas de que precisa em um PDF e salve-as como um novo PDF. Funciona no seu dispositivo.",
    intro:
      "O Extrair páginas de PDF permite escolher páginas de um PDF pelas prévias e salvar só essas páginas como um novo documento. É útil para enviar um capítulo de um relatório longo, a página assinada de um contrato ou um único extrato de um conjunto. Marque as páginas que quiser, ou use Selecionar tudo e desmarque as poucas que não quiser, e depois baixe. O arquivo original não é alterado, e tudo acontece no seu navegador.",
    seoTitle: "Extrair páginas de PDF – Grátis e sem upload",
    seoDescription:
      "Extrair páginas de PDF no navegador: escolha as páginas pelas prévias e salve-as como um novo PDF. Grátis, privado e nada é enviado.",
    keywords: [
      "extrair páginas de pdf",
      "extrair página pdf",
      "separar páginas de pdf",
      "salvar páginas de um pdf",
      "selecionar páginas de pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um PDF para ver todas as páginas.",
      },
      {
        title: "Marque as páginas que quiser",
        description:
          "Use a caixa abaixo de cada página ou digite números de página como 1-3, 5.",
      },
      {
        title: "Baixe",
        description: "Salve um novo PDF com essas páginas na ordem original, ou um PDF por página em um ZIP.",
      },
    ],
    features: [
      {
        title: "Escolha pela prévia",
        description: "Veja cada página antes de escolher.",
      },
      {
        title: "Acessível pelo teclado",
        description: "Cada página tem uma caixa de seleção com rótulo, então não é preciso usar o mouse.",
      },
      {
        title: "Páginas inalteradas",
        description: "As páginas escolhidas são copiadas como estão, com texto nítido e pesquisável.",
      },
      {
        title: "Privado",
        description: "As páginas são extraídas no seu dispositivo e nunca são enviadas.",
      },
    ],
    faqs: [
      {
        question: "Meu PDF original é alterado?",
        answer:
          "Não. Um novo PDF é criado com as páginas que você escolheu; o arquivo original continua como estava.",
      },
      {
        question: "Posso mudar a ordem das páginas?",
        answer:
          "As páginas extraídas mantêm a ordem original. Para reordenar, girar ou excluir páginas, use o Organizar PDF.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "organize-pdf": {
    name: "Organizar PDF",
    shortName: "Organizar PDF",
    tagline: "Reordene, gire e exclua páginas de PDF, adicione páginas em branco ou de outro PDF e salve. Funciona no seu dispositivo.",
    intro:
      "O Organizar PDF mostra todas as páginas de um PDF para você colocar tudo em ordem: mova páginas para antes ou para depois, endireite digitalizações que ficaram de lado e exclua páginas em branco ou indesejadas. Cada página tem seus próprios botões, que também funcionam pelo teclado, e com o mouse você pode arrastar as páginas para o lugar. Desfazer todas as alterações deixa tudo como era. Quando estiver certo, baixe o novo PDF. Tudo isso acontece no seu navegador, então o documento nunca é enviado. Você também pode inserir páginas em branco, ou as páginas de outro PDF, depois de qualquer página.",
    seoTitle: "Organizar páginas de PDF – Reordenar, girar, excluir",
    seoDescription:
      "Organizar PDF no navegador: reordene, gire e exclua páginas com prévias e baixe o novo PDF. Grátis, privado e nada é enviado.",
    keywords: [
      "organizar pdf",
      "reordenar páginas pdf",
      "mudar ordem das páginas pdf",
      "excluir páginas de pdf",
      "remover páginas de pdf",
      "organizar páginas de pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um PDF para ver todas as páginas.",
      },
      {
        title: "Organize as páginas",
        description:
          "Use os botões abaixo de cada página para movê-la, girá-la ou excluí-la, ou arraste as páginas para o lugar.",
      },
      {
        title: "Baixe",
        description: "Salve o PDF reorganizado. Desfazer todas as alterações recomeça a partir do original.",
      },
    ],
    features: [
      {
        title: "Mover, girar, excluir",
        description: "Todas as operações de página em uma só tela, com prévias que se atualizam enquanto você trabalha.",
      },
      {
        title: "Arraste ou use os botões",
        description: "Arraste com o mouse ou use os botões, que também funcionam com teclado e leitores de tela.",
      },
      {
        title: "Sem perdas",
        description:
          "As páginas são reorganizadas, não renderizadas de novo, então o texto continua nítido e pesquisável.",
      },
      {
        title: "Privado",
        description: "O PDF é reorganizado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Girar uma página reduz a qualidade?",
        answer:
          "Não. A rotação é guardada como uma configuração da página, então nada é redesenhado nem comprimido.",
      },
      {
        question: "Posso desfazer uma alteração?",
        answer:
          "Sim. Desfazer todas as alterações devolve cada página à posição e à rotação originais. Seu arquivo original nunca é alterado.",
      },
      {
        question: "Posso adicionar páginas de outro PDF?",
        answer: "Sim. Defina onde elas entram em Inserir novas páginas após a página e escolha Adicionar páginas de outro PDF. As páginas entram ali, e você pode movê-las, girá-las ou excluí-las como as outras.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "rotate-pdf": {
    name: "Girar PDF",
    shortName: "Girar PDF",
    tagline: "Gire todas as páginas, as que você escolher ou cada uma do seu jeito. Funciona no seu dispositivo.",
    intro:
      "O Girar PDF corrige páginas que abrem de lado ou de cabeça para baixo, um problema comum em documentos digitalizados e fotos salvas como PDF. Escolha 90 graus à direita, 180 graus ou 90 graus à esquerda e aplique a todas as páginas ou só às páginas que você marcar. As prévias mostram o resultado antes do download. A rotação é guardada como uma configuração da página, então textos e imagens mantêm a qualidade total, e nada sai do seu navegador.",
    seoTitle: "Girar PDF online – Grátis e permanente",
    seoDescription:
      "Girar PDF no navegador: gire todas as páginas ou só as selecionadas em 90 ou 180 graus e salve de forma permanente. Grátis, privado e sem upload.",
    keywords: [
      "girar pdf",
      "girar páginas pdf",
      "rotacionar pdf",
      "girar pdf e salvar",
      "girar pdf online grátis",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um PDF para ver as páginas.",
      },
      {
        title: "Escolha a rotação",
        description: "Escolha 90° à direita, 180° ou 90° à esquerda para todas ou as marcadas, ou escolha Uma a uma e gire cada página.",
      },
      {
        title: "Baixe",
        description: "Salve o PDF com as páginas giradas de vez.",
      },
    ],
    features: [
      {
        title: "Todas, algumas ou uma a uma",
        description: "Corrija uma digitalização de lado sem mexer no resto, ou gire cada página do seu jeito.",
      },
      {
        title: "Prévia ao vivo",
        description: "As prévias das páginas giram conforme você escolhe, antes de qualquer coisa ser salva.",
      },
      {
        title: "Sem perda de qualidade",
        description: "A rotação é uma configuração da página, então nada é redesenhado.",
      },
      {
        title: "Privado",
        description: "O PDF é girado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "A rotação é salva de forma permanente?",
        answer: "Sim. O PDF baixado abre com as páginas giradas em qualquer leitor de PDF.",
      },
      {
        question: "Posso girar páginas em ângulos diferentes?",
        answer: "Sim. Escolha Uma a uma e toque no botão de girar abaixo de cada página até ela ficar na posição certa; depois baixe.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "add-page-numbers-pdf": {
    name: "Adicionar números de página ao PDF",
    shortName: "Numerar páginas",
    tagline: "Numere as páginas de um PDF com a posição, o formato e o número inicial que você escolher. Funciona no seu dispositivo.",
    intro:
      "O Adicionar números de página coloca um número em cada página de um PDF, algo de que relatórios, teses e apostilas impressas muitas vezes precisam. Escolha uma de seis posições, no topo ou no rodapé, um formato (1, 1 / N ou – 1 –), o número inicial, o tamanho do texto e a distância da borda. Você também pode deixar a primeira página, como uma capa, sem número. Uma prévia mostra como o número vai ficar. Os números são adicionados no seu navegador, então o documento nunca é enviado. Você também pode escrever seu próprio texto, como “Página 1 de 10”, e numerar só algumas páginas.",
    seoTitle: "Numerar páginas de PDF – Grátis e sem upload",
    seoDescription:
      "Numerar páginas de PDF no navegador: escolha a posição, o formato e o número inicial, e pule a capa. Grátis, privado e sem upload.",
    keywords: [
      "numerar páginas pdf",
      "adicionar número de página pdf",
      "colocar número de página em pdf",
      "paginar pdf",
      "inserir numeração de páginas pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF a numerar.",
      },
      {
        title: "Escolha o estilo",
        description: "Defina a posição, o formato, o número inicial, o tamanho e a distância da borda.",
      },
      {
        title: "Pule a capa se precisar",
        description: "Marque a opção para deixar a primeira página sem número.",
      },
      {
        title: "Baixe",
        description: "Salve o PDF numerado.",
      },
    ],
    features: [
      {
        title: "Seis posições",
        description: "No topo ou no rodapé, à esquerda, no centro ou à direita.",
      },
      {
        title: "Três formatos",
        description: "Números simples, no estilo “1 / 12” ou “– 1 –”.",
      },
      {
        title: "Qualquer número inicial",
        description: "Continue a numeração de outro documento e pule a capa.",
      },
      {
        title: "Privado",
        description: "Os números são adicionados no seu dispositivo; nada é enviado.",
      },
    ],
    faqs: [
      {
        question: "Posso começar de um número diferente de 1?",
        answer: "Sim. Defina Começar em com qualquer número, por exemplo para continuar de um capítulo anterior.",
      },
      {
        question: "Os números vão cobrir meu conteúdo?",
        answer:
          "Eles são colocados na margem da página. Se as suas páginas têm margens muito pequenas, escolha uma distância da borda menor ou um tamanho de texto menor.",
      },
      {
        question: "Por que os números aparecem de lado em algumas páginas?",
        answer:
          "Alguns PDFs guardam as páginas giradas. O número segue a orientação guardada da página, então nessas páginas ele pode aparecer virado. Corrija a rotação antes com o Girar PDF ou o Organizar PDF.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "watermark-pdf": {
    name: "Marca d'água em PDF",
    shortName: "Marca d'água PDF",
    tagline: "Aplique um texto ou um logo nas páginas de um PDF e arraste para o lugar. Funciona no seu dispositivo.",
    intro:
      "O Marca d'água em PDF adiciona um carimbo como CONFIDENCIAL, RASCUNHO, seu nome ou seu logo às páginas de um PDF. Digite o texto em qualquer idioma ou escolha uma imagem de logo, depois defina o tamanho, a opacidade e o ângulo e arraste a marca para onde quiser na prévia da página, ou use os controles deslizantes de posição. Aplique a todas as páginas ou a um intervalo de páginas. A marca d’água é adicionada no seu navegador, então o documento nunca é enviado. Repita a marca pela página inteira ou coloque-a atrás do texto para que ele continue totalmente legível.",
    seoTitle: "Marca d'água em PDF online – Texto ou logo, grátis",
    seoDescription:
      "Colocar marca d’água em PDF no navegador: texto ou logo, com tamanho, opacidade e ângulo, arrastando para o lugar. Grátis, privado e sem upload.",
    keywords: [
      "marca d'água pdf",
      "colocar marca d'água em pdf",
      "adicionar marca d'água pdf",
      "carimbo em pdf",
      "colocar logo em pdf",
      "marca d'água confidencial pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF a marcar.",
      },
      {
        title: "Crie a marca d’água",
        description: "Digite o texto e escolha a cor, ou escolha uma imagem de logo.",
      },
      {
        title: "Posicione",
        description:
          "Defina o tamanho, a opacidade e o ângulo, depois arraste na prévia ou use os controles deslizantes. Marque Repetir pela página inteira para um padrão na página toda.",
      },
      {
        title: "Baixe",
        description: "Escolha todas as páginas ou um intervalo e salve o PDF com marca d’água.",
      },
    ],
    features: [
      {
        title: "Texto em qualquer idioma",
        description: "O texto é desenhado como imagem, então qualquer alfabeto e acento aparece corretamente.",
      },
      {
        title: "Marcas d’água com logo",
        description: "Use um logo PNG, JPG, WebP ou SVG.",
      },
      {
        title: "Arraste para o lugar",
        description:
          "Mova a marca d’água na prévia da página ou use controles deslizantes que também funcionam pelo teclado.",
      },
      {
        title: "Privado",
        description: "A marca d’água é adicionada no seu dispositivo; nada é enviado.",
      },
    ],
    faqs: [
      {
        question: "A marca d’água pode ser removida depois?",
        answer:
          "Ela é adicionada como imagem na página, por cima ou atrás do texto. Alguém com um editor de PDF ainda poderia removê-la, então a marca d’água desencoraja a cópia, mas não a impede.",
      },
      {
        question: "Posso aplicar a marca d’água só em algumas páginas?",
        answer: "Sim. Escolha Páginas e digite um intervalo como 1-3, 5.",
      },
      {
        question: "A marca d’água cobre o texto?",
        answer:
          "Não, se você marcar Atrás do texto e das imagens: o texto fica por cima. Por cima da página, diminua a opacidade para manter a leitura; 15–30% é o comum em marcas diagonais. Uma página digitalizada é uma só imagem, então para digitalizações use a opção por cima.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "sign-pdf": {
    name: "Assinar PDF",
    shortName: "Assinar PDF",
    tagline: "Desenhe ou digite sua assinatura, ou use uma imagem dela, e coloque-a em qualquer página de um PDF. Funciona no seu dispositivo.",
    intro:
      "O Assinar PDF coloca sua assinatura manuscrita em um documento sem precisar imprimir e digitalizar. Desenhe a assinatura com o mouse, o dedo ou uma caneta stylus, digite seu nome ou use uma foto da sua assinatura, cujo fundo branco pode ficar transparente. Depois escolha a página, defina o tamanho e arraste a assinatura para o lugar ou use os controles deslizantes de posição. A assinatura é adicionada no seu navegador, então o documento e a sua assinatura nunca são enviados. Também dá para adicionar iniciais, a data ou outro texto, em quantas páginas precisar.",
    seoTitle: "Assinar PDF online – Grátis e sem upload",
    seoDescription:
      "Assinar PDF no navegador: desenhe ou digite sua assinatura, ou use uma imagem dela, e coloque-a em qualquer página. Grátis, privado e nada é enviado.",
    keywords: [
      "assinar pdf",
      "assinar pdf online grátis",
      "colocar assinatura em pdf",
      "assinatura eletrônica pdf",
      "inserir assinatura no pdf",
      "assinar documento pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o documento a assinar.",
      },
      {
        title: "Crie sua assinatura",
        description: "Desenhe, digite seu nome ou escolha uma foto da sua assinatura.",
      },
      {
        title: "Posicione",
        description:
          "Escolha a página, defina o tamanho e arraste a assinatura para o lugar certo, ou use os controles deslizantes.",
      },
      {
        title: "Baixe",
        description: "Salve o PDF assinado.",
      },
    ],
    features: [
      {
        title: "Três formas de assinar",
        description: "Desenhe, digite ou use uma imagem, com tinta azul ou preta.",
      },
      {
        title: "Assinaturas limpas a partir de fotos",
        description: "O fundo de papel de uma foto da assinatura pode ficar transparente.",
      },
      {
        title: "Posicionamento preciso",
        description: "Arraste na prévia ou use controles deslizantes que também funcionam pelo teclado.",
      },
      {
        title: "Privado",
        description: "Seu documento e sua assinatura ficam no seu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "É uma assinatura digital com validade jurídica?",
        answer:
          "Ela adiciona uma imagem da sua assinatura, como assinar no papel. Não é uma assinatura digital certificada, com certificado. Muitos formulários do dia a dia a aceitam, mas contratos que exigem uma assinatura eletrônica certificada precisam de um serviço de assinatura específico.",
      },
      {
        question: "Posso assinar mais de uma página?",
        answer:
          "Sim. Adicione sua assinatura, iniciais, a data ou uma linha de texto quantas vezes precisar, em qualquer página; “Copiar em todas as páginas” coloca as iniciais em cada página de uma vez. Tudo é salvo em um só download.",
      },
      {
        question: "Minha assinatura fica salva em algum lugar?",
        answer:
          "Não. Ela existe só no seu navegador enquanto a página está aberta e dentro do PDF que você baixa.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "fill-pdf-form": {
    name: "Preencher formulário PDF",
    shortName: "Preencher formulário",
    tagline: "Preencha os campos de um formulário PDF e salve, com a opção de bloqueá-lo. Funciona no seu dispositivo.",
    intro:
      "O Preencher formulário PDF encontra os campos preenchíveis de um formulário PDF, como caixas de texto, caixas de seleção e listas suspensas, e mostra cada um com o seu nome para você completá-los rapidamente. Baixe o PDF preenchido, ou nivele-o para que as respostas passem a fazer parte da página e não possam mais ser alteradas. É prático para fichas de inscrição, formulários de impostos e documentos de cadastro. O formulário é preenchido no seu navegador, então seus dados pessoais nunca são enviados.",
    seoTitle: "Preencher formulário PDF online – Grátis e privado",
    seoDescription:
      "Preencher PDF no navegador: campos de texto, caixas de seleção e listas de formulários preenchíveis. Nivele para bloquear as respostas. Grátis e sem upload.",
    keywords: [
      "preencher pdf",
      "preencher formulário pdf",
      "preencher pdf online",
      "pdf preenchível",
      "completar formulário pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu formulário PDF",
        description: "Arraste ou escolha um PDF que tenha campos preenchíveis.",
      },
      {
        title: "Preencha os campos",
        description: "Digite nos campos de texto, marque as caixas de seleção e escolha nas listas.",
      },
      {
        title: "Bloqueie se precisar",
        description: "Marque Nivelar para tornar as respostas parte da página.",
      },
      {
        title: "Baixe",
        description: "Salve o formulário preenchido.",
      },
    ],
    features: [
      {
        title: "Todos os campos comuns",
        description: "Caixas de texto, texto de várias linhas, caixas de seleção, botões de opção e listas suspensas.",
      },
      {
        title: "Opção de nivelar",
        description: "Bloqueie as respostas para que o formulário não possa ser editado depois.",
      },
      {
        title: "Campos acessíveis",
        description: "Cada campo é um campo de entrada comum, com rótulo, que funciona com teclado e leitores de tela.",
      },
      {
        title: "Privado",
        description: "Suas respostas ficam no seu dispositivo; nada é enviado.",
      },
    ],
    faqs: [
      {
        question: "Por que aparece que meu PDF não tem campos preenchíveis?",
        answer:
          "Alguns formulários são só páginas impressas sem campos de formulário de verdade, e alguns usam um formato mais antigo (XFA) que esta ferramenta não consegue ler. Para formulários sem campos, adicione uma assinatura com o Assinar PDF ou imprima e preencha à mão.",
      },
      {
        question: "O que o Nivelar faz?",
        answer:
          "Ele transforma as respostas em conteúdo comum da página. O formulário fica com a mesma aparência, mas ninguém pode alterar as respostas nem os campos.",
      },
      {
        question: "Campos de assinatura são suportados?",
        answer: "Campos de assinatura e de botão são ignorados. Use o Assinar PDF para colocar sua assinatura na página.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "remove-pdf-metadata": {
    name: "Remover metadados do PDF",
    shortName: "Metadados do PDF",
    tagline: "Veja e remova o autor, o título, o software e as datas escondidos em um PDF. Funciona no seu dispositivo.",
    intro:
      "Arquivos PDF costumam carregar detalhes ocultos: o nome do autor, o título do documento, o software que o criou e quando ele foi criado e modificado. O Remover metadados do PDF mostra o que está guardado no seu arquivo e baixa uma cópia sem essas informações, o que é útil antes de compartilhar um documento publicamente ou enviar um currículo. As páginas em si não são alteradas. Tudo acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Remover metadados de PDF – Ver e apagar, grátis",
    seoDescription:
      "Remover metadados de PDF no navegador: veja o autor, o título, o software e as datas escondidos no arquivo e apague-os. Grátis, privado e nada é enviado.",
    keywords: [
      "remover metadados pdf",
      "apagar metadados pdf",
      "remover autor do pdf",
      "limpar metadados pdf",
      "ver metadados pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um PDF para ver as informações guardadas nele.",
      },
      {
        title: "Confira o que foi encontrado",
        description: "A lista mostra o título, o autor, o software, as datas e os metadados XMP.",
      },
      {
        title: "Baixe a cópia limpa",
        description: "Salve uma cópia sem essas informações.",
      },
    ],
    features: [
      {
        title: "Veja antes de remover",
        description: "Cada detalhe guardado é listado com o seu valor.",
      },
      {
        title: "Informações do documento e XMP",
        description: "Os dois lugares em que os PDFs guardam metadados são limpos.",
      },
      {
        title: "Páginas intactas",
        description: "Textos, imagens e layout ficam exatamente iguais.",
      },
      {
        title: "Privado",
        description: "O PDF é limpo no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "O que exatamente é removido?",
        answer:
          "As informações do documento (título, autor, assunto, palavras-chave, software de criação, produtor e datas) e o fluxo de metadados XMP.",
      },
      {
        question: "Ele remove tudo o que é pessoal do PDF?",
        answer:
          "Não. O texto nas páginas, os comentários e os detalhes dentro de imagens incorporadas (como os dados EXIF de fotos) não são alterados. Confira o próprio conteúdo antes de compartilhar.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "crop-pdf": {
    name: "Cortar PDF",
    shortName: "Cortar PDF",
    tagline: "Corte as margens de todas as páginas de um PDF, ou só das que você escolher. Funciona no seu dispositivo.",
    intro:
      "O Cortar PDF apara as bordas de todas as páginas, removendo margens brancas largas, bordas do scanner ou marcas de impressão para que o conteúdo ocupe a tela ao ler no celular. Defina quanto aparar no topo, à direita, embaixo e à esquerda, e a prévia mostra qual parte da página fica. O corte é guardado como uma configuração da página, então o texto mantém a qualidade total. Tudo acontece no seu navegador, então o documento nunca é enviado.",
    seoTitle: "Cortar PDF online – Aparar margens, grátis",
    seoDescription:
      "Cortar PDF no navegador: apare as margens das páginas com prévia ao vivo e remova bordas brancas e do scanner. Grátis, privado e nada é enviado.",
    keywords: [
      "cortar pdf",
      "cortar páginas pdf",
      "recortar pdf",
      "remover margens pdf",
      "aparar margens pdf",
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF a cortar.",
      },
      {
        title: "Defina as margens",
        description: "Use os controles deslizantes de cada lado; a prévia mostra o que fica.",
      },
      {
        title: "Baixe",
        description: "Escolha todas as páginas, a da prévia ou números de página e salve o PDF.",
      },
    ],
    features: [
      {
        title: "Controle dos quatro lados",
        description: "Apare o topo, a direita, a parte de baixo e a esquerda separadamente.",
      },
      {
        title: "Prévia ao vivo",
        description: "A área aparada aparece sombreada na primeira página.",
      },
      {
        title: "Sem perda de qualidade",
        description: "As páginas não são redesenhadas, então o texto continua nítido e pesquisável.",
      },
      {
        title: "Privado",
        description: "O PDF é cortado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Cortar deixa o arquivo menor?",
        answer:
          "Não. A área aparada fica oculta, não é apagada, então o tamanho do arquivo continua praticamente o mesmo. Um editor de PDF ainda consegue mostrar a área oculta.",
      },
      {
        question: "Posso cortar as páginas de formas diferentes?",
        answer:
          "Sim. Em Aplicar a, escolha Esta página, ou Páginas e digite números como 1-3, 5. Para dar outras margens a outras páginas, corte de novo o PDF baixado.",
      },
      {
        question: "Posso usar um PDF protegido por senha?",
        answer:
          "Ainda não. Se um PDF precisar de senha para abrir, a ferramenta vai avisar. Abra-o em um leitor de PDF com a senha, salve uma cópia sem ela e use essa cópia.",
      },
      {
        question: "Meu PDF é enviado?",
        answer:
          "Não. O PDF é aberto e modificado pelo seu navegador no seu dispositivo, então contratos, extratos e outros documentos privados nunca saem dele.",
      },
    ],
  },
  "edit-pdf": {
    name: "Editar PDF",
    shortName: "Editar PDF",
    tagline: "Adicione texto, imagens, destaques, desenhos, formas e links a um PDF, ou cubra e tarje partes dele. É grátis e funciona no seu dispositivo.",
    intro:
      "O Editar PDF abre seu documento página por página e permite acrescentar o que você precisa: digite texto em qualquer tamanho e cor, coloque um logo ou carimbo, destaque ou sublinhe linhas, desenhe à mão livre, adicione caixas, círculos e setas e faça áreas abrirem um site. O Corretivo cobre o que você não quer mostrar, e o Tarjar remove dados privados do arquivo de vez. Mova, redimensione e exclua o que você adicionou, desfaça qualquer etapa e depois baixe o PDF editado. Tudo acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Editar PDF online – Editor de PDF grátis, sem upload",
    seoDescription:
      "Edite PDFs no navegador: adicione texto, imagens, destaques, desenhos, formas e links, use corretivo ou tarjas. Grátis, sem cadastro e nada é enviado.",
    keywords: [
      "editar pdf",
      "editor de pdf",
      "editar pdf online grátis",
      "escrever em pdf",
      "adicionar texto em pdf",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF. As páginas abrem no editor.",
      },
      {
        title: "Adicione o que precisar",
        description:
          "Escolha uma ferramenta e toque ou arraste na página. Mova, redimensione ou exclua o que você adicionou.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve a cópia editada. O arquivo original não é alterado.",
      },
    ],
    features: [
      {
        title: "Tudo em um só editor",
        description:
          "Texto, imagens, destaques, desenhos, formas, links, corretivo e tarjas estão no mesmo editor, então você pode combiná-los.",
      },
      {
        title: "Desfazer e refazer",
        description: "Mova, redimensione ou exclua o que você adicionou e desfaça uma etapa se mudar de ideia.",
      },
      {
        title: "Tarja de verdade",
        description: "As áreas tarjadas são removidas do arquivo, não apenas cobertas.",
      },
      {
        title: "Edição privada",
        description: "O PDF é editado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Posso alterar o texto que já está no PDF?",
        answer:
          "Não diretamente. Cubra-o com o Corretivo e digite o novo texto por cima. O texto antigo continua no arquivo por baixo, então use o Tarjar para qualquer coisa privada.",
      },
      {
        question: "O texto que eu adiciono pode ser pesquisado?",
        answer:
          "Sim. O texto digitado é texto real de PDF, então pode ser selecionado, pesquisado e copiado, exceto nas páginas que você tarjar.",
      },
      {
        question: "Funciona no celular?",
        answer: "Sim. Toque e arraste com o dedo; o desenho funciona com o dedo ou com uma caneta stylus.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "add-text-to-pdf": {
    name: "Adicionar texto ao PDF",
    shortName: "Adicionar texto",
    tagline: "Digite texto em qualquer lugar de uma página PDF, com a fonte, o tamanho e a cor que você escolher. É grátis e funciona no seu dispositivo.",
    intro:
      "O Adicionar texto ao PDF permite escrever em um documento sem imprimi-lo: preencha um formulário que não tem campos, acrescente uma observação, uma data ou um endereço, ou identifique partes de um desenho. Toque onde o texto deve começar, digite-o e escolha a fonte, o tamanho, a cor e o negrito. Arraste o texto para ajustar a posição e adicione quantos textos precisar, em quantas páginas quiser. O texto adicionado é texto real de PDF, então continua nítido e pode ser pesquisado. Tudo acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Adicionar texto ao PDF – Escreva em qualquer PDF, grátis",
    seoDescription:
      "Digite texto em qualquer lugar de um PDF no navegador. Escolha fonte, tamanho e cor, posicione com precisão e baixe. Grátis e privado, nada é enviado.",
    keywords: [
      "escrever em pdf",
      "adicionar texto em pdf",
      "digitar em pdf",
      "inserir texto no pdf",
      "preencher pdf online",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF.",
      },
      {
        title: "Toque onde o texto vai ficar",
        description: "Digite-o na caixa e escolha a fonte, o tamanho e a cor. Arraste-o para o lugar.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve a cópia com o texto adicionado.",
      },
    ],
    features: [
      {
        title: "Sua fonte, tamanho e cor",
        description:
          "Sem serifa, com serifa ou monoespaçada estilo máquina de escrever, de 6 a 72 pt, em negrito ou normal, em qualquer cor.",
      },
      {
        title: "Vários idiomas",
        description: "Dá para escrever em alfabeto latino, grego e cirílico, além de japonês e coreano.",
      },
      {
        title: "Texto nítido e pesquisável",
        description: "O texto é texto real de PDF, não uma imagem dele.",
      },
      {
        title: "Edição privada",
        description: "O PDF é editado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Posso preencher um formulário que não tem campos?",
        answer:
          "Sim. Toque em cada linha em branco e digite. Para PDFs com campos de formulário de verdade, o Preencher formulário PDF é mais rápido.",
      },
      {
        question: "Posso alterar o texto que já está no PDF?",
        answer:
          "Não diretamente. Cubra-o com o Corretivo e digite o novo texto por cima. O texto antigo continua no arquivo por baixo, então use o Tarjar para qualquer coisa privada.",
      },
      {
        question: "Posso escrever em várias páginas?",
        answer: "Sim. Troque de página com as setas acima da página; o que você adicionou em cada uma é mantido.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "add-image-to-pdf": {
    name: "Adicionar imagem ao PDF",
    shortName: "Adicionar imagem",
    tagline: "Coloque um logo, uma foto ou a imagem de um carimbo em qualquer página de um PDF e ajuste o tamanho. É grátis e funciona no seu dispositivo.",
    intro:
      "O Adicionar imagem ao PDF coloca uma imagem em uma página do seu documento: o logo da empresa em uma carta, um carimbo ou selo em um certificado, uma foto em um formulário ou uma assinatura digitalizada. Toque onde a imagem deve ficar e escolha-a no seu dispositivo. Arraste-a para o lugar e puxe o canto para redimensionar; as proporções são mantidas. Funcionam imagens JPG, PNG com transparência, WebP, GIF, TIFF e HEIC do iPhone. Tudo acontece no seu navegador, então nem o PDF nem a imagem são enviados.",
    seoTitle: "Adicionar imagem ao PDF – Insira logo ou foto, grátis",
    seoDescription:
      "Insira um logo, uma foto ou um carimbo em um PDF no navegador. Arraste para posicionar, redimensione e baixe. JPG, PNG, HEIC. Grátis, nada é enviado.",
    keywords: [
      "adicionar imagem ao pdf",
      "inserir imagem em pdf",
      "colocar logo no pdf",
      "colocar foto no pdf",
      "inserir carimbo em pdf",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF e vá até a página que você quer.",
      },
      {
        title: "Adicione a imagem",
        description: "Toque na página onde ela deve ficar e escolha uma imagem. Arraste-a e redimensione pelo canto.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve a cópia com a imagem adicionada.",
      },
    ],
    features: [
      {
        title: "Transparência mantida",
        description: "Um logo PNG com fundo transparente continua transparente na página.",
      },
      {
        title: "Qualquer formato de imagem",
        description: "Dá para colocar imagens JPG, PNG, WebP, GIF, TIFF e HEIC do iPhone.",
      },
      {
        title: "Proporções mantidas",
        description: "Ao redimensionar, o formato da imagem é mantido, então ela nunca fica esticada.",
      },
      {
        title: "Edição privada",
        description: "O PDF é editado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "A imagem vai ficar nítida?",
        answer:
          "As imagens são colocadas com até 2.000 pixels de largura, o que fica nítido quando impresso em tamanhos normais.",
      },
      {
        question: "Posso colocar o mesmo logo em todas as páginas?",
        answer:
          "Para repetir um logo em todas as páginas, o Marca d’água em PDF faz isso em uma etapa. Aqui você coloca as imagens uma por uma.",
      },
      {
        question: "Funciona no celular?",
        answer: "Sim. Toque e arraste com o dedo; o desenho funciona com o dedo ou com uma caneta stylus.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "highlight-pdf": {
    name: "Destacar PDF",
    shortName: "Destacar",
    tagline: "Destaque, sublinhe ou risque texto em um PDF. É grátis e funciona no seu dispositivo.",
    intro:
      "O Destacar PDF permite marcar um documento como você faria com uma caneta: arraste sobre uma linha para destacá-la em amarelo, verde, rosa ou azul, sublinhá-la ou riscá-la. É útil para estudar, revisar um contrato ou mostrar a alguém exatamente qual parte importa. As marcações podem ser movidas, redimensionadas e excluídas, e você pode desfazer qualquer etapa. O destaque é translúcido, então o texto embaixo continua legível. Tudo acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Destacar PDF online – Marca-texto de PDF grátis",
    seoDescription:
      "Destaque, sublinhe ou risque texto em um PDF no navegador. Quatro cores de marca-texto, desfazer e sem cadastro. Nada é enviado.",
    keywords: [
      "grifar pdf",
      "destacar texto em pdf",
      "marca texto pdf",
      "sublinhar pdf",
      "riscar texto pdf",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF.",
      },
      {
        title: "Arraste sobre o texto",
        description: "Escolha destaque, sublinhado ou tachado e uma cor, depois arraste sobre a linha.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve a cópia marcada.",
      },
    ],
    features: [
      {
        title: "Cores de marca-texto",
        description: "Amarelo, verde, rosa e azul, ou qualquer cor que você escolher.",
      },
      {
        title: "Sublinhado e tachado",
        description: "Marque alterações ou correções, além dos pontos principais.",
      },
      {
        title: "Texto continua legível",
        description: "Os destaques são translúcidos, como um marca-texto de verdade.",
      },
      {
        title: "Edição privada",
        description: "O PDF é editado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "O destaque se encaixa sozinho no texto?",
        answer:
          "Não. Ele cobre a área sobre a qual você arrasta, então arraste ao longo da linha que quer marcar. Depois você pode redimensioná-lo pelo canto.",
      },
      {
        question: "Posso remover um destaque?",
        answer: "Sim. Selecione-o e toque em Excluir, ou use Desfazer.",
      },
      {
        question: "Funciona no celular?",
        answer: "Sim. Toque e arraste com o dedo; o desenho funciona com o dedo ou com uma caneta stylus.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "draw-on-pdf": {
    name: "Desenhar no PDF",
    shortName: "Desenhar no PDF",
    tagline: "Desenhe à mão livre nas páginas de um PDF com o dedo, o mouse ou uma caneta. É grátis e funciona no seu dispositivo.",
    intro:
      "O Desenhar no PDF transforma a página em uma folha onde você pode escrever. Circule um detalhe em uma planta, rabisque uma ideia, marque caixas, adicione anotações à mão ou rubricas. Escolha uma cor e uma espessura e desenhe com o dedo no celular ou tablet, com uma caneta stylus ou com o mouse. Cada traço pode ser movido ou excluído, e você pode desfazer quantas etapas precisar. O desenho é salvo como linhas nítidas, não como uma imagem borrada. Tudo acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Desenhar no PDF – Anotações à mão livre, grátis",
    seoDescription:
      "Desenhe nas páginas de um PDF no navegador com o dedo, o mouse ou uma caneta stylus. Escolha cor e espessura, desfaça e baixe. Grátis, nada é enviado.",
    keywords: [
      "desenhar no pdf",
      "escrever à mão em pdf",
      "rabiscar pdf",
      "anotar pdf",
      "caneta para pdf",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF.",
      },
      {
        title: "Desenhe na página",
        description: "Escolha uma cor e uma espessura e desenhe com o dedo, a caneta ou o mouse.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve a cópia com o seu desenho.",
      },
    ],
    features: [
      {
        title: "Dedo, caneta stylus ou mouse",
        description: "O desenho acompanha toque, caneta e mouse.",
      },
      {
        title: "Linhas nítidas",
        description: "Os traços são salvos como linhas vetoriais que continuam nítidas quando você amplia.",
      },
      {
        title: "Desfazer e refazer",
        description: "Mova, redimensione ou exclua o que você adicionou e desfaça uma etapa se mudar de ideia.",
      },
      {
        title: "Edição privada",
        description: "O PDF é editado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Posso assinar com isso?",
        answer:
          "Pode, mas o Assinar PDF faz uma assinatura mais caprichada, que você pode digitar, desenhar ou enviar como imagem e posicionar com precisão.",
      },
      {
        question: "Posso apagar parte de um traço?",
        answer: "Cada traço é uma peça só: selecione-o e exclua-o, ou desfaça-o, e depois desenhe de novo.",
      },
      {
        question: "Funciona no celular?",
        answer: "Sim. Toque e arraste com o dedo; o desenho funciona com o dedo ou com uma caneta stylus.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "add-shapes-to-pdf": {
    name: "Adicionar formas ao PDF",
    shortName: "Adicionar formas",
    tagline: "Adicione retângulos, círculos, linhas e setas a um PDF para chamar a atenção para algo. É grátis e funciona no seu dispositivo.",
    intro:
      "O Adicionar formas ao PDF ajuda você a marcar plantas, capturas de tela, formulários e relatórios: desenhe uma caixa em volta de um total, circule um erro ou adicione uma seta apontando para a parte que precisa de atenção. Escolha retângulo, elipse, linha ou seta, uma cor e uma espessura de linha e arraste na página. Retângulos e elipses podem ter só contorno ou ser preenchidos. As formas podem ser movidas, redimensionadas e excluídas a qualquer momento. Tudo acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Adicionar formas ao PDF – Caixas, círculos e setas",
    seoDescription:
      "Adicione retângulos, círculos, linhas e setas a um PDF no navegador. Escolha cor e espessura, mova e redimensione. Grátis, nada é enviado.",
    keywords: [
      "adicionar formas ao pdf",
      "desenhar seta no pdf",
      "desenhar retângulo no pdf",
      "circular texto no pdf",
      "marcar pdf",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF.",
      },
      {
        title: "Desenhe a forma",
        description: "Escolha retângulo, elipse, linha ou seta e arraste na página.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve a cópia marcada.",
      },
    ],
    features: [
      {
        title: "Quatro formas",
        description: "Retângulos, elipses, linhas e setas.",
      },
      {
        title: "Contorno ou preenchimento",
        description: "Desenhe só o contorno de uma caixa ou preencha-a com uma cor sólida.",
      },
      {
        title: "Nítidas em qualquer tamanho",
        description: "As formas são salvas como gráficos vetoriais.",
      },
      {
        title: "Edição privada",
        description: "O PDF é editado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Posso alterar uma forma depois de desenhá-la?",
        answer: "Sim. Selecione-a para movê-la, redimensioná-la pelo canto ou mudar a cor e a espessura.",
      },
      {
        question: "Posso cobrir texto com uma forma?",
        answer:
          "Um retângulo preenchido cobre o que está embaixo, mas o conteúdo continua no arquivo. Use o Tarjar para remover informações privadas.",
      },
      {
        question: "Funciona no celular?",
        answer: "Sim. Toque e arraste com o dedo; o desenho funciona com o dedo ou com uma caneta stylus.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "add-links-to-pdf": {
    name: "Adicionar links ao PDF",
    shortName: "Adicionar links",
    tagline: "Faça qualquer área de uma página PDF abrir um site ou um e-mail. É grátis e funciona no seu dispositivo.",
    intro:
      "O Adicionar links ao PDF torna seu documento clicável: transforme um endereço impresso em um folheto em um link de verdade, ligue um logo ao seu site ou faça um endereço de e-mail abrir uma nova mensagem. Arraste sobre o texto ou a área que deve ser clicável e digite o endereço. Os links funcionam em qualquer leitor de PDF, no computador e no celular. A página em si continua igual; o contorno tracejado que você vê durante a edição não é salvo. Tudo acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Adicionar links ao PDF – Texto clicável no PDF, grátis",
    seoDescription:
      "Adicione links clicáveis de sites e e-mails a qualquer área de um PDF no navegador. Funciona em qualquer leitor de PDF. Grátis, privado e nada é enviado.",
    keywords: [
      "adicionar link no pdf",
      "colocar link em pdf",
      "inserir hiperlink no pdf",
      "link clicável pdf",
      "hyperlink pdf",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF.",
      },
      {
        title: "Arraste sobre a área clicável",
        description: "Depois digite o endereço do site, como example.com, ou um endereço de e-mail.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve a cópia com links que funcionam.",
      },
    ],
    features: [
      {
        title: "Links de site e de e-mail",
        description: "Os links abrem um site ou um novo e-mail para o endereço que você digitar.",
      },
      {
        title: "Invisíveis na página",
        description: "A página continua igual; só a área passa a ser clicável.",
      },
      {
        title: "Funciona em qualquer leitor",
        description:
          "Links padrão de PDF abrem no Acrobat, em navegadores, no Pré-Visualização do Mac e em apps de celular.",
      },
      {
        title: "Edição privada",
        description: "O PDF é editado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "Preciso digitar https://?",
        answer: "Não. Digite example.com e o https:// é adicionado. Um endereço de e-mail vira um link mailto.",
      },
      {
        question: "Um link pode levar para outra página do PDF?",
        answer: "Ainda não. Aqui os links abrem sites e endereços de e-mail.",
      },
      {
        question: "Por que o link não funciona no meu visualizador?",
        answer:
          "Alguns visualizadores de imagem e prévias de apps de mensagem não abrem links de PDF. Abra o arquivo em um leitor de PDF ou em um navegador.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "whiteout-pdf": {
    name: "Corretivo em PDF",
    shortName: "Corretivo",
    tagline: "Cubra partes de uma página PDF com caixas brancas e, se quiser, digite por cima. É grátis e funciona no seu dispositivo.",
    intro:
      "O Corretivo em PDF funciona como uma fita corretiva: arraste sobre uma data errada, um preço antigo ou uma linha que você não quer mostrar, e uma caixa branca a cobre. Adicione um texto novo por cima com a ferramenta Texto para fazer uma correção. Se a página não for branca, escolha uma cor igual à dela. O Corretivo só cobre o conteúdo; o texto original continua no arquivo e ainda pode ser copiado ou encontrado em uma pesquisa. Para remover informações privadas de vez, use o Tarjar PDF. Tudo acontece no seu navegador, então o documento nunca sai do seu dispositivo.",
    seoTitle: "Corretivo em PDF – Fita corretiva para PDF, grátis",
    seoDescription:
      "Cubra partes de um PDF com caixas brancas e digite correções por cima, no seu navegador. Grátis, sem cadastro e nada é enviado.",
    keywords: [
      "corretivo pdf",
      "apagar texto do pdf",
      "cobrir texto no pdf",
      "tapar texto pdf",
      "corrigir texto em pdf",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF.",
      },
      {
        title: "Arraste sobre o que quer cobrir",
        description:
          "Uma caixa branca cobre essa parte. Se precisar, adicione um texto novo por cima com a ferramenta Texto.",
      },
      {
        title: "Baixe o PDF",
        description: "Salve a cópia corrigida.",
      },
    ],
    features: [
      {
        title: "Digite por cima",
        description: "Combine o corretivo com texto para corrigir uma data, um nome ou um número.",
      },
      {
        title: "Combine com o fundo",
        description: "Escolha qualquer cor para páginas que não são brancas.",
      },
      {
        title: "Mova e redimensione",
        description: "Ajuste cada caixa até ela cobrir exatamente o que você quer.",
      },
      {
        title: "Edição privada",
        description: "O PDF é editado no seu dispositivo e nunca é enviado.",
      },
    ],
    faqs: [
      {
        question: "O texto coberto some de verdade?",
        answer:
          "Não. O Corretivo o esconde, mas ele continua no arquivo, onde pode ser copiado ou encontrado em uma pesquisa. Use o Tarjar PDF para removê-lo.",
      },
      {
        question: "Posso trocar uma palavra no PDF?",
        answer: "Cubra a palavra com o corretivo e digite a nova por cima com a ferramenta Texto.",
      },
      {
        question: "Funciona no celular?",
        answer: "Sim. Toque e arraste com o dedo; o desenho funciona com o dedo ou com uma caneta stylus.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "redact-pdf": {
    name: "Tarjar PDF",
    shortName: "Tarjar PDF",
    tagline: "Cubra informações privadas de um PDF com tarjas pretas e remova-as do arquivo de vez. É grátis e funciona no seu dispositivo.",
    intro:
      "O Tarjar PDF esconde nomes, números de conta, endereços e outros dados privados antes de você compartilhar um documento, e de fato os remove. Arraste tarjas pretas sobre o que deve sair. Ao baixar, cada página com tarja é transformada em uma imagem com as tarjas gravadas, então o texto embaixo some do arquivo: ele não pode ser copiado, pesquisado nem recuperado ao tirar a tarja. Valores de formulário e comentários dessas páginas também são removidos. As páginas sem tarjas continuam como estavam. Tudo acontece no seu navegador, então o documento nunca é enviado. Você também pode buscar palavras, e-mails, telefones, números de cartão ou de documento e marcar todos os resultados de uma vez; confira cada página antes de baixar.",
    seoTitle: "Tarjar PDF – Remova dados privados de vez, grátis",
    seoDescription:
      "Cubra com tarja preta e remova de vez informações privadas de um PDF, no navegador. Tarja de verdade, não só uma cobertura. Grátis, nada é enviado.",
    keywords: [
      "tarjar pdf",
      "tarja preta pdf",
      "ocultar dados em pdf",
      "censurar pdf",
      "remover informações sensíveis do pdf",
    ],
    howToSteps: [
      {
        title: "Abra seu PDF",
        description: "Arraste ou escolha um PDF.",
      },
      {
        title: "Arraste sobre as informações privadas",
        description: "Cubra com uma tarja preta cada nome, número ou linha que precisa sair.",
      },
      {
        title: "Baixe o PDF tarjado",
        description: "Confira o resultado e compartilhe a cópia tarjada, não o original.",
      },
    ],
    features: [
      {
        title: "Removido de verdade",
        description: "O texto coberto é apagado do arquivo, não escondido sob uma caixa.",
      },
      {
        title: "Formulários e comentários também",
        description: "Campos preenchidos e comentários das páginas tarjadas também são removidos.",
      },
      {
        title: "As outras páginas ficam intactas",
        description: "Só as páginas com tarjas são transformadas em imagens.",
      },
      {
        title: "Nada é enviado",
        description: "Documentos privados são tarjados no seu dispositivo; ninguém mais os vê.",
      },
    ],
    faqs: [
      {
        question: "Por que não consigo mais selecionar texto na página tarjada?",
        answer:
          "Para remover de vez o texto escondido, a página inteira é salva como imagem. O texto das outras páginas continua selecionável.",
      },
      {
        question: "Um retângulo preto em um editor de PDF comum faz o mesmo?",
        answer:
          "Não. Uma caixa simples só cobre o texto, que ainda pode ser copiado ou encontrado em uma pesquisa. Esta ferramenta o remove.",
      },
      {
        question: "Mais alguma coisa é removida?",
        answer:
          "Nas páginas tarjadas, campos de formulário, comentários e links também são removidos, e as tags de acessibilidade do documento são descartadas, porque podem repetir o texto da página. O título e o autor são mantidos; o Remover metadados do PDF apaga essas informações.",
      },
      {
        question: "Meu PDF é enviado?",
        answer: "Não. O PDF é aberto e salvo no seu navegador, então ele fica no seu dispositivo.",
      },
    ],
  },
  "passport-photo-maker": {
    name: "Foto para passaporte",
    shortName: "Foto para passaporte",
    tagline: "Crie uma foto para passaporte ou visto no tamanho certo, com fundo liso opcional, e imprima várias em uma folha.",
    intro:
      "O Foto para passaporte transforma uma foto comum em uma foto para passaporte, visto ou documento no tamanho exato de que você precisa: 35 × 45 mm, 2 × 2 polegadas, 33 × 48 mm ou um tamanho personalizado. Mova e aproxime a foto até o topo da cabeça e o queixo ficarem nas linhas-guia, troque o fundo por branco, cinza-claro ou azul-claro liso se precisar e baixe uma foto a 300 DPI ou uma folha de impressão para papel fotográfico 4 × 6 polegadas ou A4, com linhas para cortar. Tudo acontece no seu navegador, então sua foto nunca é enviada. Escolha seu país para ter o tamanho de foto e o fundo exigidos.",
    seoTitle: "Foto para passaporte online – 35×45 mm, 2×2 in, grátis",
    seoDescription:
      "Foto para passaporte e visto online: 35×45 mm, 2×2 in ou tamanho personalizado, fundo branco e folha 4×6 ou A4 para imprimir. Grátis e privado.",
    keywords: [
      "foto para passaporte",
      "foto para passaporte online",
      "foto 35x45",
      "foto 2x2 para visto",
      "foto para visto online",
      "folha de fotos para imprimir",
    ],
    howToSteps: [
      {
        title: "Adicione uma foto",
        description: "Escolha uma foto nítida, de frente, com luz uniforme e expressão neutra.",
      },
      {
        title: "Escolha o tamanho",
        description: "Escolha 35 × 45 mm, 2 × 2 in, 33 × 48 mm ou informe um tamanho personalizado.",
      },
      {
        title: "Alinhe a foto",
        description: "Arraste ou use os controles deslizantes para que o topo da cabeça e o queixo fiquem nas linhas tracejadas.",
      },
      {
        title: "Defina o fundo",
        description: "Escolha Manter ou troque o fundo por Branco, Cinza-claro ou Azul-claro.",
      },
      {
        title: "Baixe",
        description: "Salve Uma foto ou uma Folha de impressão para papel 4 × 6 in ou A4, em JPG ou PDF.",
      },
    ],
    features: [
      {
        title: "Tamanhos comuns incluídos",
        description: "35 × 45 mm, 2 × 2 in e 33 × 48 mm, além de qualquer tamanho personalizado em milímetros.",
      },
      {
        title: "Guias para a cabeça",
        description: "Linhas tracejadas e um oval mostram onde a cabeça deve ficar.",
      },
      {
        title: "Fundos lisos",
        description: "Um modelo de IA no seu dispositivo troca o fundo por branco, cinza-claro ou azul-claro.",
      },
      {
        title: "Folhas de impressão",
        description: "Preencha papel fotográfico 4 × 6 in ou A4 com cópias e linhas de corte, a 300 DPI.",
      },
    ],
    faqs: [
      {
        question: "Minha foto será aceita?",
        answer:
          "Isso depende do órgão onde você faz o pedido. Cada país define regras de tamanho, posição da cabeça, fundo, expressão e óculos. Esta ferramenta acerta o tamanho e o layout; confira as regras oficiais antes de imprimir.",
      },
      {
        question: "Como imprimo a folha no tamanho certo?",
        answer:
          "Imprima em 100% (tamanho real), não em “ajustar à página”. A opção PDF usa o tamanho exato do papel, então as fotos saem no tamanho real em qualquer impressora.",
      },
      {
        question: "Qual é a resolução das fotos?",
        answer:
          "300 DPI, o padrão para impressão de fotos. Uma foto de 35 × 45 mm tem 413 × 531 pixels.",
      },
      {
        question: "Como funciona a troca de fundo?",
        answer:
          "Um modelo de IA é baixado uma vez (cerca de 16 MB) e roda no seu navegador para separar você do fundo. Confira as bordas ao redor do cabelo antes de imprimir. Se uma borda, como o cabelo, não ficar limpa, escolha “Apagar ou restaurar com um pincel” para corrigi-la à mão.",
      },
      {
        question: "Minha foto é enviada?",
        answer:
          "Não. A foto é processada no seu navegador, no seu dispositivo, e nada é enviado a um servidor.",
      },
    ],
  },
  "signature-extractor": {
    name: "Extrator de assinatura",
    shortName: "Assinatura PNG",
    tagline: "Transforme a foto da sua assinatura em um PNG limpo com fundo transparente.",
    intro:
      "O Extrator de assinatura pega uma foto ou digitalização da sua assinatura no papel e a transforma em uma imagem limpa, só com a tinta, sobre um fundo transparente. Ele ignora sombras e luz irregular de fotos de celular, apara o espaço vazio ao redor da assinatura e pode recolorir a tinta de preto ou azul. Use o PNG no Assinar PDF, no Word ou em qualquer formulário que peça uma imagem da assinatura. A foto é processada no seu navegador, então sua assinatura nunca é enviada.",
    seoTitle: "Extrair assinatura – PNG com fundo transparente",
    seoDescription:
      "Assinatura transparente: transforme a foto da sua assinatura em um PNG sem fundo no navegador. Remove papel e sombras, corta e recolore. Grátis e privado.",
    keywords: [
      "remover fundo da assinatura",
      "assinatura transparente",
      "assinatura png",
      "extrair assinatura de imagem",
      "assinatura digital a partir de foto",
    ],
    howToSteps: [
      {
        title: "Assine em papel branco",
        description: "Use uma caneta escura e tire uma foto com boa luz, ou digitalize a página.",
      },
      {
        title: "Adicione a foto",
        description: "Arraste ou escolha a foto. A assinatura é extraída na hora.",
      },
      {
        title: "Ajuste",
        description: "Ajuste a sensibilidade e escolha a tinta original, preta ou azul.",
      },
      {
        title: "Baixe",
        description: "Salve o PNG transparente.",
      },
    ],
    features: [
      {
        title: "Lida com sombras",
        description: "Cada ponto é comparado com o papel ao redor, então a luz irregular não deixa manchas cinza.",
      },
      {
        title: "Bordas suaves",
        description: "As bordas dos traços se esmaecem suavemente em vez de ficarem serrilhadas.",
      },
      {
        title: "Corte automático",
        description: "O papel vazio ao redor da assinatura é aparado.",
      },
      {
        title: "Privado",
        description: "Sua assinatura fica no seu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "Como consigo o melhor resultado?",
        answer:
          "Assine com uma caneta escura em papel branco liso e tire a foto de frente, com luz do dia, sem a sua sombra sobre a página.",
      },
      {
        question: "Por que partes da minha assinatura somem?",
        answer:
          "Traços fracos ou finos podem sumir. Aumente a sensibilidade; se a textura do papel começar a aparecer, diminua um pouco.",
      },
      {
        question: "Posso usar para assinar um PDF?",
        answer:
          "Sim. No Assinar PDF, escolha Imagem e selecione o PNG que você baixou.",
      },
      {
        question: "Minha assinatura é enviada?",
        answer:
          "Não. Ela é processada no seu navegador e nunca é enviada a lugar nenhum.",
      },
    ],
  },
  "change-image-dpi": {
    name: "Alterar DPI da imagem",
    shortName: "Alterar DPI",
    tagline: "Defina o DPI de um JPG ou PNG, como 300 DPI para impressão ou formulários, sem alterar os pixels.",
    intro:
      "O Alterar DPI da imagem define o valor de resolução guardado em um arquivo JPG ou PNG, como 300 DPI para impressão ou o valor que um formulário de inscrição pede. Os pixels não são tocados, então a qualidade e o tamanho do arquivo continuam os mesmos: só o tamanho de impressão muda, e a ferramenta o mostra em centímetros e polegadas. Ela atualiza os dois lugares onde um JPG pode guardar o DPI, para que o Windows, o Mac e os apps de fotos leiam o novo valor. Tudo roda no seu navegador, então a imagem nunca é enviada.",
    seoTitle: "Alterar DPI da imagem para 300 online – grátis",
    seoDescription:
      "Alterar DPI de JPG ou PNG para 300, 200, 72 ou qualquer valor no navegador. Os pixels não mudam; veja o tamanho de impressão. Grátis e privado.",
    keywords: [
      "alterar dpi da imagem",
      "converter imagem para 300 dpi",
      "mudar dpi da foto",
      "aumentar dpi da imagem",
      "definir dpi",
      "conversor de dpi",
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem",
        description: "Solte ou escolha um JPG ou PNG. WebP, TIFF e HEIC são convertidos antes: TIFF e imagens transparentes para PNG, fotos para JPG.",
      },
      {
        title: "Escolha o DPI",
        description: "Escolha 72, 96, 150, 200, 300 ou 600, ou digite qualquer valor.",
      },
      {
        title: "Confira o tamanho de impressão",
        description: "Veja o tamanho com que a imagem será impressa nesse DPI.",
      },
      {
        title: "Baixe",
        description: "Salve a imagem com o novo DPI.",
      },
    ],
    features: [
      {
        title: "Sem perda de qualidade",
        description: "Só o valor de DPI muda; os dados da imagem não são tocados.",
      },
      {
        title: "Lido em todo lugar",
        description: "As resoluções JFIF e EXIF de um JPG são atualizadas, então todos os apps mostram o mesmo DPI.",
      },
      {
        title: "Tamanho de impressão à vista",
        description: "Veja o tamanho de impressão em centímetros e polegadas antes de baixar.",
      },
      {
        title: "Privado",
        description: "A imagem é alterada no seu navegador e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "Alterar o DPI melhora a qualidade?",
        answer:
          "Não. O DPI é só um rótulo que diz às impressoras em que tamanho imprimir. Para ter mais detalhes, você precisa de mais pixels, e nenhuma ferramenta consegue criá-los de verdade.",
      },
      {
        question: "Um formulário pede 200 DPI e um tamanho em centímetros. O que eu faço?",
        answer:
          "Defina o DPI aqui e depois confira o tamanho de impressão. Se não bater, redimensione a imagem para o tamanho em pixels que o formulário pede: centímetros ÷ 2,54 × DPI. Por exemplo, 3,5 cm a 200 DPI dá 276 pixels.",
      },
      {
        question: "Por que minha imagem mostra “Não definido”?",
        answer:
          "Muitas fotos de celular e capturas de tela não guardam um DPI. A maioria dos apps então assume 72 ou 96. Definir um valor aqui resolve isso.",
      },
      {
        question: "Minha imagem é enviada?",
        answer:
          "Não. A alteração acontece no seu navegador, no seu dispositivo.",
      },
    ],
  },
  "blur-background": {
    name: "Desfocar fundo",
    shortName: "Desfocar fundo",
    tagline: "Desfoque o fundo de uma foto como no modo retrato da câmera, mantendo a pessoa nítida. Roda no seu dispositivo.",
    intro:
      "O Desfocar fundo dá a qualquer foto o fundo suave e fora de foco do modo retrato de uma câmera. Um modelo de IA encontra a pessoa no seu dispositivo e, então, o fundo é desfocado enquanto o assunto continua nítido, sem halo borrado em volta das bordas. Um controle deslizante define a intensidade do desfoque, e você salva o resultado como JPG ou PNG. Nada é enviado: a foto e o modelo ficam no seu navegador. Se a IA deixar escapar uma mecha de cabelo ou sobrar um pedaço do fundo, corrija com o pincel de apagar e restaurar.",
    seoTitle: "Desfocar fundo de foto online – efeito retrato grátis",
    seoDescription:
      "Desfocar fundo de foto online e manter a pessoa nítida, como no modo retrato. Intensidade ajustável, roda no seu navegador, grátis e privado.",
    keywords: [
      "desfocar fundo",
      "desfocar fundo de foto",
      "modo retrato online",
      "desfocar fundo de imagem",
      "efeito bokeh online",
      "fundo desfocado",
    ],
    howToSteps: [
      {
        title: "Adicione uma foto",
        description: "Arraste, escolha ou cole a foto de uma pessoa. Fotos HEIC do iPhone também funcionam.",
      },
      {
        title: "Aguarde a detecção",
        description: "O modelo de IA encontra a pessoa no seu dispositivo. Na primeira vez, ele baixa cerca de 16 MB.",
      },
      {
        title: "Ajuste o desfoque",
        description: "Mova o controle deslizante até o fundo ficar do jeito certo.",
      },
      {
        title: "Baixe",
        description: "Salve a foto como JPG, ou PNG para a melhor qualidade.",
      },
    ],
    features: [
      {
        title: "Visual de modo retrato",
        description: "O fundo fica suave enquanto a pessoa continua nítida.",
      },
      {
        title: "Sem halo",
        description: "O desfoque preenche a área atrás do assunto com o fundo ao redor, então as bordas ficam limpas.",
      },
      {
        title: "Ajustável",
        description: "Escolha de uma leve suavização até um desfoque forte.",
      },
      {
        title: "Privado",
        description: "A foto é processada no seu navegador e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "Funciona em fotos sem pessoas?",
        answer:
          "Rápido foi feito para fotos de pessoas. Para pets e objetos, escolha Melhor qualidade nas configurações, que funciona com qualquer assunto; confira as bordas antes de salvar.",
      },
      {
        question: "Por que a primeira foto é mais lenta?",
        answer:
          "O modelo Rápido é baixado uma vez (cerca de 16 MB) e fica no seu navegador; depois disso, as fotos levam alguns segundos. Melhor qualidade é um download único de cerca de 100 MB e leva 15 a 30 segundos por foto.",
      },
      {
        question: "Minha foto vai perder qualidade?",
        answer:
          "A pessoa mantém a resolução total. Fotos muito grandes (acima de cerca de 16 megapixels) são reduzidas antes, para funcionar em celulares; a página avisa quando isso acontece.",
      },
      {
        question: "Minha foto é enviada?",
        answer:
          "Não. A detecção do assunto e o desfoque acontecem no seu dispositivo.",
      },
    ],
  },
  "change-background": {
    name: "Trocar fundo",
    shortName: "Trocar fundo",
    tagline: "Substitua o fundo de uma foto por uma cor ou outra imagem. O assunto é recortado no seu dispositivo.",
    intro:
      "O Trocar fundo substitui o fundo de uma foto por uma cor sólida ou uma imagem à sua escolha. Um modelo de IA recorta a pessoa no seu dispositivo e a coloca sobre o novo fundo, ajustado para preencher o quadro. Escolha branco para um visual limpo de produto ou de perfil, qualquer cor do seletor, ou use sua própria imagem de fundo, e baixe como JPG ou PNG. A foto nunca é enviada. Se a IA deixar escapar uma mecha de cabelo ou sobrar um pedaço do fundo, corrija com o pincel de apagar e restaurar.",
    seoTitle: "Trocar fundo de foto online – cor ou imagem, grátis",
    seoDescription:
      "Trocar fundo de foto para branco, qualquer cor ou uma imagem sua. O assunto é recortado no seu navegador. Grátis, privado e sem cadastro.",
    keywords: [
      "trocar fundo de foto",
      "mudar fundo da foto",
      "substituir fundo de imagem",
      "foto com fundo branco",
      "colocar fundo na foto",
      "trocar fundo de imagem",
    ],
    howToSteps: [
      {
        title: "Adicione uma foto",
        description: "Arraste, escolha ou cole uma foto. Fotos HEIC do iPhone também funcionam.",
      },
      {
        title: "Aguarde o recorte",
        description: "O modelo de IA separa o assunto no seu dispositivo. Na primeira vez, ele baixa cerca de 16 MB.",
      },
      {
        title: "Escolha o fundo",
        description: "Escolha uma cor ou use uma imagem como novo fundo.",
      },
      {
        title: "Baixe",
        description: "Salve a foto como JPG ou PNG.",
      },
    ],
    features: [
      {
        title: "Cor ou imagem",
        description: "Cores prontas, um seletor de cores ou qualquer imagem sua.",
      },
      {
        title: "Preenche o quadro",
        description: "Uma imagem de fundo é redimensionada e centralizada para cobrir a foto inteira.",
      },
      {
        title: "Resolução total",
        description: "O resultado mantém o tamanho da sua foto.",
      },
      {
        title: "Privado",
        description: "Tudo acontece no seu navegador; nada é enviado.",
      },
    ],
    faqs: [
      {
        question: "Posso ter um fundo transparente em vez disso?",
        answer:
          "Sim: use o Remover fundo, que salva um PNG sem nenhum fundo.",
      },
      {
        question: "Funciona com produtos e animais de estimação?",
        answer:
          "Rápido funciona melhor com pessoas. Para produtos, pets e objetos, escolha Melhor qualidade nas configurações para bordas mais limpas.",
      },
      {
        question: "Por que a primeira foto é mais lenta?",
        answer:
          "O modelo Rápido é baixado uma vez (cerca de 16 MB) e fica no seu navegador, então as próximas fotos levam só alguns segundos. Melhor qualidade é um download único de cerca de 100 MB.",
      },
      {
        question: "Minha foto é enviada?",
        answer:
          "Não. O recorte e o novo fundo são feitos no seu dispositivo.",
      },
    ],
  },
  "image-to-text": {
    name: "Imagem para texto",
    shortName: "Imagem para texto",
    tagline: "Copie o texto de uma foto, captura de tela ou digitalização (OCR) em 19 idiomas. A imagem é lida no seu dispositivo.",
    intro:
      "O Imagem para texto lê as palavras de uma foto, captura de tela ou página digitalizada e as entrega como texto que você pode copiar, editar ou salvar como arquivo TXT. Ele usa o Tesseract OCR rodando no seu navegador, com inglês, espanhol, francês, alemão, português, italiano, japonês, coreano, indonésio, turco, russo, ucraniano, hindi, holandês, polonês, vietnamita, chinês (simplificado e tradicional) e tailandês. Uma barra de progresso mostra quanto já foi feito e, se a imagem estiver borrada demais para um resultado confiável, a página avisa. A imagem nunca é enviada.",
    seoTitle: "Imagem para texto – OCR online grátis",
    seoDescription:
      "Imagem para texto: extraia o texto de imagens, capturas de tela e digitalizações com OCR grátis em 19 idiomas. Copie ou baixe. Nada é enviado.",
    keywords: [
      "imagem para texto",
      "extrair texto de imagem",
      "ocr online",
      "converter foto em texto",
      "copiar texto de imagem",
      "print para texto",
    ],
    howToSteps: [
      {
        title: "Adicione uma imagem",
        description: "Arraste, escolha ou cole uma foto, captura de tela ou digitalização com texto.",
      },
      {
        title: "Confira o idioma",
        description: "O idioma da página já vem escolhido; troque-o se o texto estiver em outro.",
      },
      {
        title: "Aguarde o texto",
        description: "O texto aparece assim que é lido. Você pode corrigi-lo direto na caixa.",
      },
      {
        title: "Copie ou baixe",
        description: "Copie o texto ou salve-o como arquivo TXT.",
      },
    ],
    features: [
      {
        title: "19 idiomas",
        description: "Incluindo chinês, japonês, coreano, tailandês, hindi e russo. Cada idioma baixa de 0,5 a 6 MB uma única vez.",
      },
      {
        title: "Resultado editável",
        description: "Corrija qualquer palavra na caixa antes de copiar ou salvar.",
      },
      {
        title: "Honesto sobre a qualidade",
        description: "Um aviso aparece quando a imagem está borrada ou pequena demais para uma leitura confiável.",
      },
      {
        title: "Privado",
        description: "A imagem é lida no seu navegador e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "Ele lê letra de mão?",
        answer:
          "Não com confiabilidade. Ele é feito para texto impresso, como documentos, capturas de tela, placas e etiquetas. Letra de mão caprichada às vezes funciona, mas espere erros.",
      },
      {
        question: "Como consigo o melhor resultado?",
        answer:
          "Use uma foto nítida e bem iluminada, tirada de frente, com o texto grande no quadro. Capturas de tela são lidas quase perfeitamente.",
      },
      {
        question: "Ele lê PDF?",
        answer:
          "Converta a página em imagem primeiro com o PDF para JPG e depois adicione essa imagem aqui.",
      },
      {
        question: "Minha imagem é enviada?",
        answer:
          "Não. O texto é lido no seu dispositivo; a imagem e o texto nunca saem do seu navegador.",
      },
    ],
  },
  "qr-code-generator": {
    name: "Gerador de QR Code",
    shortName: "Gerador de QR",
    tagline: "Crie um QR Code para link, texto, rede Wi-Fi, e-mail, telefone ou contato, com suas cores e seu logo, em PNG ou SVG.",
    intro:
      "O Gerador de QR Code cria um QR Code para um link, texto simples, login de Wi-Fi, e-mail, número de telefone ou cartão de contato. Escolha as cores, o tamanho e a correção de erros, adicione seu logo no meio e baixe como imagem PNG ou arquivo SVG, que fica nítido em qualquer tamanho. Cada código é conferido com uma leitura de volta, então você sabe que ele funciona antes de imprimir. Os códigos são criados no seu navegador, grátis, sem cadastro e sem prazo de validade. Adicione uma linha de texto abaixo do código, como “Escaneie para ver o cardápio”, e para o Wi-Fi baixe um cartão para imprimir com o nome da rede e a senha.",
    seoTitle: "Gerador de QR Code grátis – logo, cores, PNG e SVG",
    seoDescription:
      "Gerador de QR Code grátis para links, Wi-Fi, e-mail, telefone ou contatos, com suas cores e logo. Baixe em PNG ou SVG. Sem cadastro; nunca expira.",
    keywords: [
      "gerador de qr code",
      "criar qr code",
      "gerador de qr code grátis",
      "qr code com logo",
      "qr code wifi",
      "qr code svg",
    ],
    howToSteps: [
      {
        title: "Escolha o conteúdo",
        description: "Escolha link, texto, Wi-Fi, e-mail, telefone ou contato.",
      },
      {
        title: "Preencha os dados",
        description: "O QR Code é atualizado enquanto você digita.",
      },
      {
        title: "Personalize",
        description: "Defina as cores e o tamanho e, se quiser, adicione um logo.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG, ou em SVG para impressão e tamanhos grandes.",
      },
    ],
    features: [
      {
        title: "Conferido antes de salvar",
        description: "O código é lido de volta automaticamente, e você é avisado se ele puder não ser lido.",
      },
      {
        title: "Logo e cores",
        description: "Adicione seu logo; a correção de erros mais forte é usada para manter o código legível.",
      },
      {
        title: "PNG e SVG",
        description: "O SVG fica nítido em qualquer tamanho, ideal para impressão.",
      },
      {
        title: "Nunca expira",
        description: "As informações ficam guardadas no próprio código, não em um servidor, então ele funciona para sempre.",
      },
    ],
    faqs: [
      {
        question: "Esses QR Codes expiram?",
        answer:
          "Não. São códigos estáticos: tudo fica guardado no próprio padrão, sem redirecionamento pelo nosso servidor, então eles continuam funcionando para sempre.",
      },
      {
        question: "Posso rastrear as leituras ou mudar o link depois?",
        answer:
          "Não. Isso exige um código dinâmico, que passa cada leitura por um servidor, e esta ferramenta não faz isso. A vantagem é que ninguém vê quem lê o seu código.",
      },
      {
        question: "Como funciona o código de Wi-Fi?",
        answer:
          "Os celulares que o leem oferecem entrar na rede com o nome e a senha que você digitou. A senha fica guardada no código, então compartilhe-o só com quem você daria a senha.",
      },
      {
        question: "Qual correção de erros devo escolher?",
        answer:
          "M serve para a maioria dos usos. H resiste a mais danos e é usada automaticamente com um logo; L gera o menor código para textos longos.",
      },
      {
        question: "O que eu digito é enviado para algum lugar?",
        answer:
          "Não. O código é criado no seu navegador.",
      },
    ],
  },
  "qr-code-reader": {
    name: "Leitor de QR Code",
    shortName: "Leitor de QR",
    tagline: "Leia um QR Code de uma imagem ou da câmera e veja o link, a senha do Wi-Fi ou o contato que ele contém antes de abrir.",
    intro:
      "O Leitor de QR Code decodifica QR Codes de uma foto, de uma captura de tela ou da sua câmera. Ele mostra o que o código contém antes que qualquer coisa aconteça: o endereço completo do site, uma rede Wi-Fi e a senha, um e-mail, um número de telefone ou um cartão de contato que você pode salvar. Os links nunca abrem sozinhos, então você pode conferi-los antes, um hábito útil porque QR Codes são muito usados para levar pessoas a sites falsos. Imagens e quadros da câmera são lidos no seu dispositivo. Ative “Continuar escaneando” para ler muitos códigos seguidos numa lista que você pode copiar ou salvar como CSV.",
    seoTitle: "Leitor de QR Code online – leia por imagem ou câmera",
    seoDescription:
      "Leitor de QR Code online: leia um código de imagem, captura de tela ou câmera no navegador. Veja o link, a senha do Wi-Fi ou o contato antes de abrir.",
    keywords: [
      "leitor de qr code",
      "ler qr code de imagem",
      "leitor de qr code online",
      "ler qr code pela foto",
      "scanner de qr code",
      "decodificar qr code",
    ],
    howToSteps: [
      {
        title: "Adicione o código",
        description: "Arraste ou escolha uma imagem com um QR Code, ou leia-o com a câmera.",
      },
      {
        title: "Veja o que ele contém",
        description: "Links, dados de Wi-Fi, e-mails, telefones e contatos aparecem com clareza.",
      },
      {
        title: "Confira antes de abrir",
        description: "Leia o endereço completo antes de abrir um link.",
      },
      {
        title: "Use",
        description: "Copie o texto, abra o link, ligue, escreva um e-mail ou salve o contato.",
      },
    ],
    features: [
      {
        title: "Imagem ou câmera",
        description: "Leia códigos em capturas de tela e fotos, ou aponte a câmera para um.",
      },
      {
        title: "Seguro por padrão",
        description: "Os links nunca abrem automaticamente; você vê o endereço completo antes.",
      },
      {
        title: "Wi-Fi e contatos",
        description: "Mostra senhas de rede e permite salvar cartões de contato.",
      },
      {
        title: "Privado",
        description: "Imagens e quadros da câmera são processados no seu navegador e nunca são enviados.",
      },
    ],
    faqs: [
      {
        question: "Como leio um QR Code que está na minha própria tela?",
        answer:
          "Faça uma captura de tela e adicione-a aqui; você não precisa de um segundo aparelho.",
      },
      {
        question: "Por que devo conferir os links antes?",
        answer:
          "QR Codes em cartazes, parquímetros e e-mails às vezes são trocados por outros que levam a sites falsos. Confirme que o endereço é o que você espera antes de abri-lo ou de digitar qualquer dado.",
      },
      {
        question: "A câmera não liga. O que posso fazer?",
        answer:
          "Permita o acesso à câmera para este site nas configurações do navegador, ou tire uma foto do código e adicione a imagem.",
      },
      {
        question: "Minhas imagens ou a câmera são enviadas para algum lugar?",
        answer:
          "Não. Tudo é lido no seu dispositivo.",
      },
    ],
  },
  "barcode-generator": {
    name: "Gerador de código de barras",
    shortName: "Código de barras",
    tagline: "Crie códigos de barras Code 128, EAN, UPC, ISBN, Code 39, ITF-14, GS1-128, Data Matrix, PDF417 e Aztec em PNG ou SVG. Grátis e roda no seu dispositivo.",
    intro:
      "O Gerador de código de barras cria os códigos de barras que as pessoas realmente imprimem: Code 128 para etiquetas de envio e de estoque, EAN e UPC para produtos, ISBN para livros, Code 39 para peças e crachás, ITF-14 para caixas de papelão, GS1-128 para logística e os códigos 2D Data Matrix, PDF417 e Aztec. Digite o número ou o texto e o código de barras aparece na hora. Os dígitos verificadores são adicionados para você e os erros são apontados enquanto você digita. Cada código de barras é lido de volta por um mecanismo de leitura antes de você baixá-lo em PNG ou SVG. Tudo acontece no seu navegador.",
    seoTitle: "Gerador de código de barras grátis – PNG e SVG, sem cadastro",
    seoDescription:
      "Crie códigos de barras Code 128, EAN-13, UPC, ISBN, Code 39, Data Matrix e PDF417 no navegador. Dígito verificador incluído, leitura testada, PNG ou SVG.",
    keywords: [
      "gerador de código de barras",
      "gerar código de barras",
      "gerador de código de barras grátis",
      "gerador de code 128",
      "criar código de barras online",
    ],
    howToSteps: [
      {
        title: "Escolha o tipo de código de barras",
        description: "O Code 128 serve para a maioria das etiquetas; escolha EAN ou UPC para produtos e ISBN para livros.",
      },
      {
        title: "Digite o número ou o texto",
        description: "O código de barras aparece enquanto você digita. Problemas, como um dígito verificador errado, são explicados.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG ou em SVG para impressão.",
      },
    ],
    features: [
      {
        title: "Conferido enquanto você digita",
        description: "Comprimentos errados, letras em códigos só de números e dígitos verificadores errados são apontados antes de você baixar.",
      },
      {
        title: "Leitura testada",
        description: "Cada código de barras é lido de volta por um mecanismo de leitura, então você sabe que ele funciona antes de imprimir.",
      },
      {
        title: "PNG ou SVG",
        description: "PNG para documentos e etiquetas, SVG para impressão e programas de design em qualquer tamanho.",
      },
      {
        title: "Criado no seu dispositivo",
        description: "Os códigos são desenhados no seu navegador; nada do que você digita é enviado.",
      },
    ],
    faqs: [
      {
        question: "Qual tipo de código de barras devo usar?",
        answer:
          "Para suas próprias etiquetas, estoque ou envios, o Code 128: ele aceita letras e dígitos e todo leitor o lê. Para produtos vendidos em lojas, o EAN-13 (ou o UPC-A na América do Norte). Para livros, o ISBN.",
      },
      {
        question: "Preciso registrar o número?",
        answer:
          "Para vender um produto em lojas, sim: os números EAN e UPC vêm da GS1, a organização que administra o sistema. Para seu próprio estoque, prateleiras ou uso interno, qualquer número serve.",
      },
      {
        question: "Em que tamanho devo imprimir?",
        answer:
          "Mantenha as barras nítidas e com espaço ao redor: imprima em 100% (sem esticar), deixe uma margem branca em volta do código e use barras escuras sobre fundo claro.",
      },
      {
        question: "Algo é enviado?",
        answer:
          "Não. O código é criado no seu navegador, e o que você digita fica no seu dispositivo.",
      },
    ],
  },
  "ean-barcode-generator": {
    name: "Gerador de código de barras EAN",
    shortName: "Código EAN",
    tagline: "Crie códigos de barras de produto EAN-13 e EAN-8 com o dígito verificador adicionado para você. Grátis e roda no seu dispositivo.",
    intro:
      "O EAN-13 é o código de barras dos produtos nas lojas do mundo todo, e o EAN-8 é sua versão curta para embalagens pequenas. Digite os 12 primeiros dígitos (ou 7 para EAN-8) e o dígito verificador é calculado e adicionado; se você digitar os 13, a ferramenta confirma que o último dígito está certo. O código de barras é desenhado conforme o padrão, com os dígitos embaixo, e lido de volta por um mecanismo de leitura antes de você salvá-lo em PNG ou SVG. Nada é enviado. Um complemento de 2 ou 5 dígitos, como o número de uma revista, pode ir à direita.",
    seoTitle: "Gerador de código de barras EAN-13 grátis e online",
    seoDescription:
      "Crie códigos de barras EAN-13 e EAN-8 no navegador. Dígito verificador calculado para você, leitura testada, PNG ou SVG para impressão. Grátis, nada é enviado.",
    keywords: [
      "gerador de código de barras ean",
      "gerador ean-13",
      "código de barras ean 13",
      "código de barras ean-8",
      "gerar código de barras de produto",
    ],
    howToSteps: [
      {
        title: "Digite o número EAN",
        description: "12 dígitos para EAN-13 ou 7 para EAN-8; o dígito verificador é adicionado. Troque o tipo na lista.",
      },
      {
        title: "Ajuste o tamanho",
        description: "Defina a largura e a altura das barras para a sua etiqueta.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG, ou em SVG para a arte da embalagem.",
      },
    ],
    features: [
      {
        title: "Dígito verificador calculado",
        description: "Deixe o último dígito de fora e ele é calculado; digite-o e ele é conferido.",
      },
      {
        title: "Leitura testada",
        description: "Cada código de barras é lido de volta por um mecanismo de leitura, então você sabe que ele funciona antes de imprimir.",
      },
      {
        title: "PNG ou SVG",
        description: "PNG para documentos e etiquetas, SVG para impressão e programas de design em qualquer tamanho.",
      },
      {
        title: "Criado no seu dispositivo",
        description: "Os códigos são desenhados no seu navegador; nada do que você digita é enviado.",
      },
    ],
    faqs: [
      {
        question: "Preciso registrar o número?",
        answer:
          "Para vender um produto em lojas, sim: os números EAN e UPC vêm da GS1, a organização que administra o sistema. Para seu próprio estoque, prateleiras ou uso interno, qualquer número serve.",
      },
      {
        question: "Qual é a diferença entre EAN-13 e UPC-A?",
        answer:
          "São o mesmo sistema: um número UPC-A é um EAN-13 com um 0 na frente. Lojas do mundo todo leem os dois. Use o UPC-A se o seu varejista pedir; caso contrário, o EAN-13.",
      },
      {
        question: "Em que tamanho devo imprimir?",
        answer:
          "Mantenha as barras nítidas e com espaço ao redor: imprima em 100% (sem esticar), deixe uma margem branca em volta do código e use barras escuras sobre fundo claro.",
      },
      {
        question: "Algo é enviado?",
        answer:
          "Não. O código é criado no seu navegador, e o que você digita fica no seu dispositivo.",
      },
    ],
  },
  "upc-barcode-generator": {
    name: "Gerador de código de barras UPC",
    shortName: "Código UPC",
    tagline: "Crie códigos de barras de produto UPC-A e UPC-E para os EUA e o Canadá, com o dígito verificador adicionado. Grátis e roda no seu dispositivo.",
    intro:
      "O UPC-A é o código de barras de 12 dígitos dos produtos vendidos nos EUA e no Canadá, e o UPC-E é sua forma compactada para itens pequenos, como latas e cosméticos. Digite os 11 primeiros dígitos de um UPC-A e o dígito verificador é adicionado; digite os 12 e ele é conferido. O UPC-E aceita 6 dígitos, ou 7 a 8 começando com 0 ou 1. Cada código de barras é desenhado conforme o padrão, lido de volta por um mecanismo de leitura e salvo em PNG ou SVG. Tudo acontece no seu navegador. Um complemento de 2 ou 5 dígitos, como o número de uma revista, pode ir à direita.",
    seoTitle: "Gerador de código de barras UPC – UPC-A e UPC-E grátis",
    seoDescription:
      "Crie códigos de barras UPC-A e UPC-E no navegador com o dígito verificador adicionado. Leitura testada, PNG ou SVG para embalagens. Grátis, nada é enviado.",
    keywords: [
      "gerador de código de barras upc",
      "gerador upc-a",
      "gerar código upc",
      "código de barras upc-e",
      "código de barras upc grátis",
    ],
    howToSteps: [
      {
        title: "Digite o número UPC",
        description: "11 dígitos para UPC-A, ou um número UPC-E; escolha o tipo na lista.",
      },
      {
        title: "Ajuste o tamanho",
        description: "Defina a largura e a altura das barras para caber na sua embalagem.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG, ou em SVG para impressão.",
      },
    ],
    features: [
      {
        title: "Dígito verificador calculado",
        description: "O último dígito é calculado ou confirmado para você.",
      },
      {
        title: "UPC-E para itens pequenos",
        description: "Crie a versão curta UPC-E para latas, tubos e caixinhas.",
      },
      {
        title: "Leitura testada",
        description: "Cada código de barras é lido de volta por um mecanismo de leitura, então você sabe que ele funciona antes de imprimir.",
      },
      {
        title: "PNG ou SVG",
        description: "PNG para documentos e etiquetas, SVG para impressão e programas de design em qualquer tamanho.",
      },
    ],
    faqs: [
      {
        question: "Preciso registrar o número?",
        answer:
          "Para vender um produto em lojas, sim: os números EAN e UPC vêm da GS1, a organização que administra o sistema. Para seu próprio estoque, prateleiras ou uso interno, qualquer número serve.",
      },
      {
        question: "Quando devo usar o UPC-E?",
        answer:
          "Só quando a embalagem for pequena demais para o UPC-A e o seu número puder ser compactado; números UPC-E começam com 0 ou 1.",
      },
      {
        question: "Em que tamanho devo imprimir?",
        answer:
          "Mantenha as barras nítidas e com espaço ao redor: imprima em 100% (sem esticar), deixe uma margem branca em volta do código e use barras escuras sobre fundo claro.",
      },
      {
        question: "Algo é enviado?",
        answer:
          "Não. O código é criado no seu navegador, e o que você digita fica no seu dispositivo.",
      },
    ],
  },
  "isbn-barcode-generator": {
    name: "Gerador de código de barras ISBN",
    shortName: "Código ISBN",
    tagline: "Crie o código de barras da contracapa de um livro a partir do ISBN-13 ou ISBN-10. Grátis e roda no seu dispositivo.",
    intro:
      "O código de barras na contracapa de um livro é o ISBN do livro escrito como um EAN-13. Digite seu ISBN-13, ou um ISBN-10 mais antigo, que é convertido para você, e o código de barras aparece com o dígito verificador conferido. Digite o ISBN com os hifens, como aparece na página de créditos, e a linha do ISBN é impressa acima das barras do jeito que editoras e livrarias esperam. Baixe em SVG para quem faz a capa, ou em PNG. Tudo acontece no seu navegador. Adicione o complemento de preço de 5 dígitos para livrarias dos EUA, se precisar.",
    seoTitle: "Gerador de código de barras ISBN grátis para livros – SVG",
    seoDescription:
      "Crie o código de barras ISBN da capa do seu livro no navegador. ISBN-13 ou ISBN-10, dígito verificador conferido, SVG para impressão. Grátis, nada é enviado.",
    keywords: [
      "gerador de código de barras isbn",
      "código de barras para livro",
      "código de barras isbn",
      "isbn para código de barras",
      "código de barras isbn grátis",
    ],
    howToSteps: [
      {
        title: "Digite o ISBN",
        description: "Use os hifens da página de créditos para imprimir a linha do ISBN acima das barras.",
      },
      {
        title: "Confira a prévia",
        description: "O dígito verificador é conferido e a leitura do código de barras é testada.",
      },
      {
        title: "Baixe",
        description: "Salve em SVG para quem faz a capa, ou em PNG.",
      },
    ],
    features: [
      {
        title: "ISBN-10 convertido",
        description: "Um ISBN-10 mais antigo é transformado no ISBN-13 de que o código de barras precisa.",
      },
      {
        title: "Linha do ISBN acima das barras",
        description: "Com hifens, o ISBN legível é impresso acima do código de barras.",
      },
      {
        title: "Leitura testada",
        description: "Cada código de barras é lido de volta por um mecanismo de leitura, então você sabe que ele funciona antes de imprimir.",
      },
      {
        title: "PNG ou SVG",
        description: "PNG para documentos e etiquetas, SVG para impressão e programas de design em qualquer tamanho.",
      },
    ],
    faqs: [
      {
        question: "Onde consigo um ISBN?",
        answer:
          "Na agência de ISBN do seu país, ou pela sua editora ou plataforma de autopublicação. Esta ferramenta desenha o código de barras de um ISBN que você já tem.",
      },
      {
        question: "Posso adicionar o preço (o pequeno código de barras à direita)?",
        answer:
          "Sim. Digite 5 dígitos em Complemento: 5 seguido do preço nos EUA (51299 para US$ 12,99), ou 90000 sem preço. Ele aparece à direita do código ISBN, como as livrarias dos EUA esperam.",
      },
      {
        question: "Em que tamanho devo imprimir?",
        answer:
          "Mantenha as barras nítidas e com espaço ao redor: imprima em 100% (sem esticar), deixe uma margem branca em volta do código e use barras escuras sobre fundo claro.",
      },
      {
        question: "Algo é enviado?",
        answer:
          "Não. O código é criado no seu navegador, e o que você digita fica no seu dispositivo.",
      },
    ],
  },
  "data-matrix-generator": {
    name: "Gerador de Data Matrix",
    shortName: "Data Matrix",
    tagline: "Crie códigos Data Matrix para peças, etiquetas e embalagens a partir de texto ou de um link. Grátis e roda no seu dispositivo.",
    intro:
      "O Data Matrix é um pequeno código 2D quadrado que guarda muita informação em pouquíssimo espaço, por isso é usado em componentes eletrônicos, embalagens de medicamentos, amostras de laboratório e etiquetas de envio. Digite o texto, um número de série ou um link e o código aparece na hora, no tamanho definido pela largura do módulo que você escolher. Câmeras de celular e leitores industriais o leem, e cada código é lido de volta antes de você baixá-lo em PNG ou SVG. Tudo acontece no seu navegador.",
    seoTitle: "Gerador de Data Matrix grátis – código 2D em PNG e SVG",
    seoDescription:
      "Crie códigos Data Matrix a partir de texto, números de série ou links no navegador. Leitura testada, PNG ou SVG, em qualquer tamanho. Grátis, nada é enviado.",
    keywords: [
      "gerador de data matrix",
      "gerar código data matrix",
      "código data matrix",
      "gerador de código 2d",
      "data matrix online",
    ],
    howToSteps: [
      {
        title: "Digite o conteúdo",
        description: "Texto, um número de série ou um link.",
      },
      {
        title: "Escolha o tamanho",
        description: "Defina a largura do módulo; o Data Matrix continua legível mesmo impresso bem pequeno.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG ou SVG.",
      },
    ],
    features: [
      {
        title: "Cabe em espaços pequenos",
        description: "Guarda muito mais que um código de barras 1D em um quadradinho.",
      },
      {
        title: "Qualquer idioma",
        description: "Textos em qualquer idioma são guardados de forma que os leitores os leiam corretamente.",
      },
      {
        title: "Leitura testada",
        description: "Cada código de barras é lido de volta por um mecanismo de leitura, então você sabe que ele funciona antes de imprimir.",
      },
      {
        title: "PNG ou SVG",
        description: "PNG para documentos e etiquetas, SVG para impressão e programas de design em qualquer tamanho.",
      },
    ],
    faqs: [
      {
        question: "Data Matrix ou QR Code?",
        answer:
          "Os dois são códigos quadrados. O Data Matrix continua legível em tamanhos menores e é o padrão em peças e medicamentos; o QR Code é o que a maioria dos celulares espera para links.",
      },
      {
        question: "Celulares leem Data Matrix?",
        answer:
          "Muitos apps de leitura de códigos leem, e o Google Lens também. O app de câmera nativo de alguns celulares lê apenas QR Codes.",
      },
      {
        question: "Em que tamanho devo imprimir?",
        answer:
          "Mantenha as barras nítidas e com espaço ao redor: imprima em 100% (sem esticar), deixe uma margem branca em volta do código e use barras escuras sobre fundo claro.",
      },
      {
        question: "Algo é enviado?",
        answer:
          "Não. O código é criado no seu navegador, e o que você digita fica no seu dispositivo.",
      },
    ],
  },
  "pdf417-generator": {
    name: "Gerador de código de barras PDF417",
    shortName: "PDF417",
    tagline: "Crie códigos de barras PDF417, o código empilhado usado em passagens, documentos de identidade e documentos de envio. Grátis e roda no seu dispositivo.",
    intro:
      "O PDF417 é o código de barras largo e empilhado que você vê em cartões de embarque, carteiras de motorista e documentos de envio. Ele guarda centenas de caracteres, e os leitores ainda conseguem lê-lo quando parte dele está danificada. Digite ou cole o texto e o código de barras aparece; escolha a largura do módulo para caber no seu layout e baixe em PNG ou SVG depois que ele for lido de volta por um mecanismo de leitura. Tudo acontece no seu navegador, então os dados nunca saem do seu dispositivo.",
    seoTitle: "Gerador de código de barras PDF417 grátis – PNG e SVG",
    seoDescription:
      "Crie códigos de barras PDF417 no navegador para passagens, crachás e documentos. Guarda textos longos, leitura testada, PNG ou SVG. Grátis, nada é enviado.",
    keywords: [
      "gerador pdf417",
      "gerador de código de barras pdf417",
      "código de barras pdf 417",
      "código de barras empilhado",
      "código de barras do cartão de embarque",
    ],
    howToSteps: [
      {
        title: "Digite ou cole o texto",
        description: "O PDF417 guarda textos longos, como vários campos de um formulário.",
      },
      {
        title: "Escolha o tamanho",
        description: "Defina a largura do módulo para a sua passagem ou documento.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG ou SVG.",
      },
    ],
    features: [
      {
        title: "Guarda textos longos",
        description: "Centenas de caracteres em um só código de barras.",
      },
      {
        title: "Resistente a danos",
        description: "A correção de erros embutida o mantém legível mesmo quando arranhado.",
      },
      {
        title: "Leitura testada",
        description: "Cada código de barras é lido de volta por um mecanismo de leitura, então você sabe que ele funciona antes de imprimir.",
      },
      {
        title: "PNG ou SVG",
        description: "PNG para documentos e etiquetas, SVG para impressão e programas de design em qualquer tamanho.",
      },
    ],
    faqs: [
      {
        question: "Posso criar o código de barras de uma carteira de motorista?",
        answer:
          "O PDF417 é o tipo de código de barras usado, mas documentos de identidade oficiais seguem formatos rígidos e são emitidos pelas autoridades. Use esta ferramenta para seus próprios ingressos, etiquetas e documentos.",
      },
      {
        question: "Quais leitores leem PDF417?",
        answer:
          "A maioria dos leitores 2D e muitos apps de leitura para celular.",
      },
      {
        question: "Em que tamanho devo imprimir?",
        answer:
          "Mantenha as barras nítidas e com espaço ao redor: imprima em 100% (sem esticar), deixe uma margem branca em volta do código e use barras escuras sobre fundo claro.",
      },
      {
        question: "Algo é enviado?",
        answer:
          "Não. O código é criado no seu navegador, e o que você digita fica no seu dispositivo.",
      },
    ],
  },
  "barcode-scanner": {
    name: "Leitor de código de barras",
    shortName: "Leitor de código de barras",
    tagline: "Leia EAN, UPC, Code 128, Code 39, Data Matrix, PDF417, QR Code e outros a partir de uma foto ou da câmera. Grátis e roda no seu dispositivo.",
    intro:
      "O Leitor de código de barras lê códigos de barras de uma foto, de uma captura de tela ou da sua câmera: códigos de produto (EAN e UPC), ISBNs de livros, etiquetas Code 128 e Code 39, caixas com ITF, GS1 DataBar e códigos 2D como Data Matrix, PDF417, Aztec e QR Codes. Ele encontra vários códigos em uma mesma imagem e mostra cada um com seu tipo, pronto para copiar. A imagem da câmera e as fotos são processadas no seu navegador e nunca são enviadas. Ative “Continuar escaneando” para ler muitos códigos seguidos numa lista que você pode copiar ou salvar como CSV. A lista conta cada código, com − e + para corrigir, então também serve para inventário; o CSV tem uma coluna de quantidade.",
    seoTitle: "Leitor de código de barras online – por foto ou câmera",
    seoDescription:
      "Leia códigos EAN, UPC, Code 128, Data Matrix, PDF417 e QR Codes de uma foto ou da câmera, no navegador. Grátis, privado, nada é enviado.",
    keywords: [
      "leitor de código de barras online",
      "ler código de barras pela foto",
      "leitor de código de barras",
      "ler código de barras de imagem",
      "scanner de código de barras",
    ],
    howToSteps: [
      {
        title: "Adicione uma foto ou use a câmera",
        description: "Arraste uma imagem, cole uma captura de tela ou aponte a câmera para o código de barras.",
      },
      {
        title: "Veja o resultado",
        description: "Cada código de barras encontrado aparece com seu tipo, como EAN-13 ou Data Matrix.",
      },
      {
        title: "Copie",
        description: "Copie o número ou o texto, ou abra um link que ele contenha.",
      },
    ],
    features: [
      {
        title: "Dezenas de tipos",
        description: "Códigos de barras 1D, códigos 2D e QR Codes em um só leitor.",
      },
      {
        title: "Vários de uma vez",
        description: "Encontra mais de um código de barras em uma imagem.",
      },
      {
        title: "Câmera ou foto",
        description: "Leia ao vivo com a câmera ou a partir de qualquer imagem salva.",
      },
      {
        title: "Privado",
        description: "Imagens e quadros da câmera são lidos no seu dispositivo e nunca são enviados.",
      },
    ],
    faqs: [
      {
        question: "Por que meu código de barras não é encontrado?",
        answer:
          "Verifique se ele está em foco, bem iluminado e ocupando boa parte da imagem, sem reflexos fortes. Códigos de barras muito pequenos ou borrados não podem ser lidos.",
      },
      {
        question: "Ele consegue buscar o produto?",
        answer:
          "Não. Ele lê o número do código de barras; não pesquisa em bancos de dados de produtos, então nada do que você lê é enviado para lugar nenhum.",
      },
      {
        question: "A câmera precisa de permissão?",
        answer:
          "Sim, o navegador pede uma vez. O vídeo fica no seu dispositivo e para assim que um código é encontrado.",
      },
      {
        question: "Algo é enviado?",
        answer:
          "Não. As imagens são lidas no seu navegador e ficam no seu dispositivo.",
      },
    ],
  },
  "wifi-qr-code-generator": {
    name: "Gerador de QR Code de Wi-Fi",
    shortName: "QR Code de Wi-Fi",
    tagline: "Crie um QR Code que as visitas leem para entrar no seu Wi-Fi sem digitar a senha. Grátis e roda no seu dispositivo.",
    intro:
      "Um QR Code de Wi-Fi permite que visitas, clientes e familiares entrem na sua rede apontando a câmera do celular para ele, sem precisar soletrar uma senha longa. Digite o nome da rede e a senha, escolha o tipo de segurança e o código aparece na hora. iPhones e celulares Android o entendem com a câmera nativa. Imprima para a geladeira, a mesa de um café ou uma sala de reunião. Sua senha é colocada no código no seu navegador e nunca é enviada. Ou baixe um cartão para imprimir com o código, o nome da rede e a senha.",
    seoTitle: "Gerador de QR Code de Wi-Fi – compartilhe sem digitar senha",
    seoDescription:
      "Crie um QR Code de Wi-Fi no navegador para as visitas entrarem na rede lendo o código. Funciona com a câmera do iPhone e do Android. Grátis, nada é enviado.",
    keywords: [
      "qr code wifi",
      "gerador de qr code wifi",
      "qr code para senha do wifi",
      "compartilhar wifi por qr code",
      "criar qr code wi-fi",
    ],
    howToSteps: [
      {
        title: "Digite os dados da rede",
        description: "Nome da rede (SSID), senha e tipo de segurança.",
      },
      {
        title: "Personalize",
        description: "Escolha as cores ou adicione um logo, se quiser.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG ou SVG e imprima ou adicione ao seu design.",
      },
    ],
    features: [
      {
        title: "Funciona com a câmera do celular",
        description: "As câmeras do iPhone e do Android oferecem entrar na rede quando o leem.",
      },
      {
        title: "Conferido antes de salvar",
        description: "O QR Code é lido de volta assim que é criado, então você sabe que ele funciona.",
      },
      {
        title: "Suas cores e seu logo",
        description: "Escolha as cores e adicione um logo no meio; a correção de erros é aumentada para que ele continue sendo lido.",
      },
      {
        title: "Privado",
        description: "O código é criado no seu navegador. Seus dados não são enviados nem armazenados.",
      },
    ],
    faqs: [
      {
        question: "É seguro imprimir a senha do meu Wi-Fi?",
        answer:
          "Qualquer pessoa que ler o código pode entrar na rede, como se você tivesse dito a senha. Em locais públicos, use uma rede para visitantes.",
      },
      {
        question: "Qual tipo de segurança devo escolher?",
        answer:
          "WPA/WPA2/WPA3 para quase todos os roteadores modernos. WEP só para os muito antigos; Nenhuma para redes sem senha.",
      },
      {
        question: "O QR Code expira?",
        answer:
          "Não. As informações ficam dentro do próprio código, não em um servidor, então ele funciona enquanto os dados continuarem corretos.",
      },
      {
        question: "Minhas informações ficam armazenadas?",
        answer:
          "Não. O QR Code é criado no seu navegador e nada do que você digita sai do seu dispositivo.",
      },
    ],
  },
  "whatsapp-qr-code-generator": {
    name: "Gerador de QR Code do WhatsApp",
    shortName: "QR Code do WhatsApp",
    tagline: "Crie um QR Code que abre uma conversa no WhatsApp com o seu número, com uma mensagem pronta para enviar. Grátis e roda no seu dispositivo.",
    intro:
      "Um QR Code do WhatsApp permite que clientes iniciem uma conversa com você sem salvar seu número antes. Digite seu número de telefone com o código do país e, se quiser, uma mensagem que já aparece digitada para eles, como “Olá, quero reservar uma mesa”. Ler o código abre o WhatsApp nessa conversa. Coloque-o na vitrine da loja, no cardápio, em um panfleto ou no cartão de visita. O código é criado no seu navegador e nada é enviado.",
    seoTitle: "Gerador de QR Code do WhatsApp grátis – link para conversa",
    seoDescription:
      "Crie um QR Code que abre uma conversa no WhatsApp com o seu número e uma mensagem pronta. Para lojas, cardápios e cartões. Grátis, nada é enviado.",
    keywords: [
      "qr code whatsapp",
      "gerador de qr code whatsapp",
      "qr code para whatsapp",
      "qr code link do whatsapp",
      "qr code wa.me",
    ],
    howToSteps: [
      {
        title: "Digite seu número",
        description: "Com o código do país, como +44 7700 900123.",
      },
      {
        title: "Adicione uma mensagem",
        description: "Opcional: um texto que já aparece digitado para quem ler o código.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG ou SVG e imprima ou adicione ao seu design.",
      },
    ],
    features: [
      {
        title: "Sem salvar o número",
        description: "As pessoas conversam com você sem precisar adicionar você aos contatos antes.",
      },
      {
        title: "Mensagem pronta",
        description: "Comece a conversa com suas próprias palavras.",
      },
      {
        title: "Conferido antes de salvar",
        description: "O QR Code é lido de volta assim que é criado, então você sabe que ele funciona.",
      },
      {
        title: "Suas cores e seu logo",
        description: "Escolha as cores e adicione um logo no meio; a correção de erros é aumentada para que ele continue sendo lido.",
      },
    ],
    faqs: [
      {
        question: "Funciona com o WhatsApp Business?",
        answer:
          "Sim. Ele abre uma conversa com a conta do WhatsApp que usa esse número, seja ela qual for.",
      },
      {
        question: "Por que preciso do código do país?",
        answer:
          "Os links do WhatsApp usam o número internacional completo, então o código funciona em qualquer país.",
      },
      {
        question: "O QR Code expira?",
        answer:
          "Não. As informações ficam dentro do próprio código, não em um servidor, então ele funciona enquanto os dados continuarem corretos.",
      },
      {
        question: "Minhas informações ficam armazenadas?",
        answer:
          "Não. O QR Code é criado no seu navegador e nada do que você digita sai do seu dispositivo.",
      },
    ],
  },
  "vcard-qr-code-generator": {
    name: "Gerador de QR Code vCard",
    shortName: "QR Code vCard",
    tagline: "Crie um QR Code que salva seu nome, telefone, e-mail e site nos contatos de um celular. Grátis e roda no seu dispositivo.",
    intro:
      "Um QR Code vCard transforma um cartão de visita em uma única leitura: as pessoas apontam a câmera para ele e o celular oferece salvar você como contato, com nome, telefone, e-mail, empresa e site já preenchidos. Digite seus dados, personalize o código com suas cores ou seu logo e baixe para o seu cartão de visita, assinatura de e-mail, crachá ou estande. Os dados vão para o código no seu navegador e não ficam armazenados em lugar nenhum. Nome e sobrenome são salvos separadamente, e você pode adicionar cargo, telefone comercial, endereço e uma observação.",
    seoTitle: "Gerador de QR Code vCard grátis – cartão de visita",
    seoDescription:
      "Crie um QR Code vCard que salva seus dados de contato com uma leitura. Para cartões de visita e crachás. Cores e logo, grátis, nada é enviado.",
    keywords: [
      "qr code vcard",
      "qr code para cartão de visita",
      "qr code de contato",
      "gerador de qr code vcard",
      "qr code com dados de contato",
    ],
    howToSteps: [
      {
        title: "Digite seus dados",
        description: "Nome, telefone, e-mail, empresa e site.",
      },
      {
        title: "Personalize",
        description: "Escolha as cores ou adicione seu logo.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG ou SVG e imprima ou adicione ao seu design.",
      },
    ],
    features: [
      {
        title: "Salva com uma leitura",
        description: "Os celulares oferecem adicionar o contato com todos os campos preenchidos.",
      },
      {
        title: "Conferido antes de salvar",
        description: "O QR Code é lido de volta assim que é criado, então você sabe que ele funciona.",
      },
      {
        title: "Suas cores e seu logo",
        description: "Escolha as cores e adicione um logo no meio; a correção de erros é aumentada para que ele continue sendo lido.",
      },
      {
        title: "Privado",
        description: "O código é criado no seu navegador. Seus dados não são enviados nem armazenados.",
      },
    ],
    faqs: [
      {
        question: "As pessoas precisam de um app?",
        answer:
          "Não. A câmera nativa dos iPhones e da maioria dos celulares Android reconhece QR Codes de contato.",
      },
      {
        question: "Posso mudar meus dados depois?",
        answer:
          "Os dados ficam dentro do código, então crie um novo código quando eles mudarem.",
      },
      {
        question: "O QR Code expira?",
        answer:
          "Não. As informações ficam dentro do próprio código, não em um servidor, então ele funciona enquanto os dados continuarem corretos.",
      },
      {
        question: "Minhas informações ficam armazenadas?",
        answer:
          "Não. O QR Code é criado no seu navegador e nada do que você digita sai do seu dispositivo.",
      },
    ],
  },
  "payment-qr-code-generator": {
    name: "Gerador de QR Code de pagamento",
    shortName: "QR Code de pagamento",
    tagline: "Crie um QR Code para pagamentos UPI na Índia ou transferências bancárias SEPA na Europa. Grátis e roda no seu dispositivo.",
    intro:
      "Um QR Code de pagamento permite que as pessoas paguem você lendo o código em vez de digitar os dados da conta. Escolha UPI, o sistema por trás do Google Pay, PhonePe, Paytm e BHIM na Índia, ou uma transferência SEPA, o QR Code EPC que muitos apps de banco na Europa leem. Digite sua conta e, se quiser, um valor fixo e uma observação; os dados são conferidos (formato do ID UPI, dígitos verificadores do IBAN) antes de o código ser criado. Nada é enviado, e nenhum dinheiro passa por este site.",
    seoTitle: "Gerador de QR Code de pagamento – UPI e SEPA grátis",
    seoDescription:
      "Crie um QR Code de pagamento UPI ou um QR Code de transferência bancária SEPA (EPC) no navegador. Dados da conta conferidos. Grátis, nada é enviado.",
    keywords: [
      "gerador de qr code de pagamento",
      "qr code upi",
      "qr code sepa",
      "qr code epc",
      "qr code para transferência bancária",
    ],
    howToSteps: [
      {
        title: "Escolha UPI ou SEPA",
        description: "UPI para a Índia; transferência SEPA para contas bancárias em euro na Europa.",
      },
      {
        title: "Digite a conta",
        description: "Seu ID UPI ou IBAN e nome, mais um valor e uma observação opcionais.",
      },
      {
        title: "Baixe",
        description: "Salve em PNG ou SVG e imprima ou adicione ao seu design.",
      },
    ],
    features: [
      {
        title: "Dados da conta conferidos",
        description: "O formato dos IDs UPI e os dígitos verificadores dos IBANs são conferidos.",
      },
      {
        title: "Valor fixo opcional",
        description: "Deixe em branco para que quem paga digite o valor.",
      },
      {
        title: "Conferido antes de salvar",
        description: "O QR Code é lido de volta assim que é criado, então você sabe que ele funciona.",
      },
      {
        title: "Privado",
        description: "O código é criado no seu navegador. Seus dados não são enviados nem armazenados.",
      },
    ],
    faqs: [
      {
        question: "Quais apps leem o código?",
        answer:
          "Códigos UPI abrem em apps UPI como Google Pay, PhonePe, Paytm e BHIM. Códigos SEPA (EPC) são lidos por muitos apps de banco na Alemanha, Áustria, Holanda, Bélgica, Finlândia e outros países SEPA; nem todo banco é compatível.",
      },
      {
        question: "É seguro?",
        answer:
          "O código só preenche os dados do pagamento; quem paga ainda confirma o pagamento no próprio app. Confira os dados com cuidado antes de imprimir o código.",
      },
      {
        question: "O QR Code expira?",
        answer:
          "Não. As informações ficam dentro do próprio código, não em um servidor, então ele funciona enquanto os dados continuarem corretos.",
      },
      {
        question: "Minhas informações ficam armazenadas?",
        answer:
          "Não. O QR Code é criado no seu navegador e nada do que você digita sai do seu dispositivo.",
      },
    ],
  },
  "bulk-qr-code-generator": {
    name: "Gerador de QR Code em massa",
    shortName: "QR Codes em massa",
    tagline: "Crie centenas de QR Codes de uma vez a partir de uma lista ou CSV e baixe todos em um ZIP. Grátis e roda no seu dispositivo.",
    intro:
      "O Gerador de QR Code em massa transforma uma lista em QR Codes: links para cada página de produto, códigos para cada mesa, etiquetas de patrimônio para um almoxarifado inteiro. Cole um link ou texto por linha, ou carregue um arquivo CSV e, se quiser, coloque um nome de arquivo antes de cada um para identificar os arquivos com facilidade. Escolha PNG ou SVG e um tamanho e baixe todos em um ZIP. Até 1.000 códigos são criados no seu navegador; sua lista nunca é enviada. Ou coloque todos numa folha A4 ou Carta para imprimir, com cada nome abaixo do código, prontos para recortar.",
    seoTitle: "Gerador de QR Code em massa grátis – de CSV para ZIP",
    seoDescription:
      "Crie até 1.000 QR Codes de uma vez a partir de uma lista ou CSV no navegador. Seus próprios nomes de arquivo, PNG ou SVG, um só ZIP. Grátis, nada é enviado.",
    keywords: [
      "gerador de qr code em massa",
      "gerar vários qr codes",
      "gerar qr code a partir de csv",
      "criar qr codes em lote",
      "gerador de qr code em lote",
    ],
    howToSteps: [
      {
        title: "Cole sua lista",
        description: "Um link ou texto por linha, ou carregue um arquivo CSV ou de texto.",
      },
      {
        title: "Dê nome aos arquivos",
        description: "Se quiser, comece cada linha com um nome de arquivo e uma vírgula.",
      },
      {
        title: "Baixe o ZIP",
        description: "Escolha PNG ou SVG e um tamanho e salve todos os códigos de uma vez.",
      },
    ],
    features: [
      {
        title: "Até 1.000 códigos",
        description: "Crie um lote inteiro de uma só vez.",
      },
      {
        title: "Seus nomes de arquivo",
        description: "Dê a cada arquivo um nome que corresponda ao produto, à mesa ou ao item de patrimônio.",
      },
      {
        title: "PNG ou SVG",
        description: "Imagens para documentos, ou vetores para impressão.",
      },
      {
        title: "Privado",
        description: "Sua lista é processada no seu navegador e nunca é enviada.",
      },
    ],
    faqs: [
      {
        question: "Como adiciono nomes de arquivo?",
        answer:
          "Marque a opção e escreva cada linha como nome, conteúdo (por exemplo: mesa-4, https://example.com/menu). Sem nomes, os arquivos são numerados.",
      },
      {
        question: "Posso criar códigos de Wi-Fi ou de contato em massa?",
        answer:
          "Sim, se cada linha tiver o conteúdo completo do código, como WIFI:T:WPA;S:Nome;P:senha;;. Para códigos avulsos, o Gerador de QR Code preenche isso para você.",
      },
      {
        question: "Existe um limite?",
        answer:
          "1.000 códigos por lote. Para mais, faça vários lotes.",
      },
      {
        question: "Minhas informações ficam armazenadas?",
        answer:
          "Não. O QR Code é criado no seu navegador e nada do que você digita sai do seu dispositivo.",
      },
    ],
  },
  "bulk-barcode-generator": {
    name: "Gerador de código de barras em massa",
    shortName: "Códigos de barras em massa",
    tagline: "Crie centenas de códigos de barras de uma vez a partir de uma lista ou CSV, conferidos e salvos em um ZIP. Grátis e roda no seu dispositivo.",
    intro:
      "O Gerador de código de barras em massa cria um código de barras para cada linha de uma lista: códigos de produto para um catálogo, etiquetas Code 128 para um depósito, ISBNs para uma coleção de livros. Escolha o tipo de código de barras, cole os números ou carregue um CSV, e cada linha é conferida enquanto você digita: comprimentos errados, letras em códigos só de números e dígitos verificadores errados são listados por linha, e os dígitos verificadores que faltam são adicionados. Baixe os válidos em PNG ou SVG em um ZIP. Até 1.000 códigos de barras são criados no seu navegador e nada é enviado. Ou coloque todos numa folha A4 ou Carta para imprimir, com cada nome abaixo do código, prontos para recortar.",
    seoTitle: "Gerador de código de barras em massa – CSV para ZIP, grátis",
    seoDescription:
      "Crie até 1.000 códigos de barras de uma vez a partir de uma lista ou CSV: Code 128, EAN, UPC, ISBN, Data Matrix e mais. Conferidos, ZIP em PNG ou SVG.",
    keywords: [
      "gerador de código de barras em massa",
      "gerar vários códigos de barras",
      "código de barras a partir de csv",
      "criar códigos de barras em lote",
      "gerador de código de barras em lote",
    ],
    howToSteps: [
      {
        title: "Escolha o tipo de código de barras",
        description: "Code 128, EAN-13, UPC-A, ISBN, Data Matrix e mais.",
      },
      {
        title: "Cole sua lista",
        description: "Um número ou texto por linha, opcionalmente com um nome de arquivo antes; os problemas são listados por linha.",
      },
      {
        title: "Baixe o ZIP",
        description: "Escolha PNG ou SVG e salve todos os códigos de barras válidos de uma vez.",
      },
    ],
    features: [
      {
        title: "Conferido enquanto você digita",
        description: "Comprimentos errados, letras em códigos só de números e dígitos verificadores errados são apontados antes de você baixar.",
      },
      {
        title: "Dígitos verificadores adicionados",
        description: "Números EAN, UPC, ITF-14 e ISBN recebem o dígito verificador quando ele fica de fora.",
      },
      {
        title: "Seus nomes de arquivo",
        description: "Dê a cada arquivo o nome do produto ou item.",
      },
      {
        title: "PNG ou SVG",
        description: "PNG para documentos e etiquetas, SVG para impressão e programas de design em qualquer tamanho.",
      },
    ],
    faqs: [
      {
        question: "O que acontece com as linhas com problemas?",
        answer:
          "Elas são listadas com o motivo e ficam fora do ZIP; as demais são criadas.",
      },
      {
        question: "Preciso registrar o número?",
        answer:
          "Para vender um produto em lojas, sim: os números EAN e UPC vêm da GS1, a organização que administra o sistema. Para seu próprio estoque, prateleiras ou uso interno, qualquer número serve.",
      },
      {
        question: "Existe um limite?",
        answer:
          "1.000 códigos de barras por lote. Para mais, faça vários lotes.",
      },
      {
        question: "Algo é enviado?",
        answer:
          "Não. O código é criado no seu navegador, e o que você digita fica no seu dispositivo.",
      },
    ],
  },
  "word-to-pdf": {
    name: "Word para PDF",
    shortName: "Word → PDF",
    tagline: "Converta documentos do Word em PDF mantendo o layout, as fontes e as imagens. Grátis, sem cadastro e sem marca d’água.",
    intro:
      "O Word para PDF transforma documentos do Word em um PDF que fica igual em qualquer dispositivo e está pronto para mandar por e-mail, imprimir ou carregar em um portal. Aceita DOC, DOCX, ODT, RTF ou TXT. Cabeçalhos, rodapés, números de página, tabelas e imagens são mantidos. A conversão usa o LibreOffice no nosso servidor: seu arquivo é enviado por uma conexão criptografada e apagado assim que o PDF volta.",
    seoTitle: "Converter Word para PDF – Grátis e sem cadastro",
    seoDescription:
      "Converter Word para PDF online e grátis: mantém o layout, as fontes e as imagens. Sem cadastro e sem marca d’água; os arquivos são apagados logo depois.",
    keywords: [
      "converter word para pdf",
      "word para pdf",
      "docx para pdf",
      "doc para pdf",
      "conversor de word para pdf grátis",
      "salvar word em pdf",
    ],
    howToSteps: [
      {
        title: "Escolha seu arquivo",
        description: "Arraste ou escolha um arquivo DOC, DOCX, ODT, RTF ou TXT de até 30 MB.",
      },
      {
        title: "Converta",
        description: "Clique em Converter para PDF. O arquivo é convertido no nosso servidor, normalmente em poucos segundos.",
      },
      {
        title: "Baixe o PDF",
        description: "O PDF é baixado automaticamente; você pode baixá-lo de novo pelo botão.",
      },
    ],
    features: [
      {
        title: "Layout mantido",
        description: "Textos, tabelas, imagens e quebras de página ficam onde estavam.",
      },
      {
        title: "Fontes comuns incluídas",
        description: "Fontes com métricas compatíveis com Calibri, Cambria, Arial e Times, além das fontes Noto para a maioria dos idiomas.",
      },
      {
        title: "Arquivos apagados na hora",
        description: "Nada fica armazenado depois da conversão.",
      },
      {
        title: "Grátis",
        description: "Sem cadastro, sem marca d’água e sem limite diário.",
      },
    ],
    faqs: [
      {
        question: "Meu PDF vai ficar exatamente igual ao original?",
        answer:
          "Na maioria dos documentos, sim. Fontes raras que não estão instaladas no servidor são substituídas por outras parecidas, e alguns layouts muito complexos podem se deslocar um pouco. Confira o PDF antes de enviá-lo.",
      },
      {
        question: "As alterações controladas e os comentários aparecem no PDF?",
        answer:
          "O documento é convertido do jeito que aparece ao ser aberto, então aceite ou rejeite as alterações controladas antes se não quiser que elas fiquem visíveis.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "excel-to-pdf": {
    name: "Excel para PDF",
    shortName: "Excel → PDF",
    tagline: "Converta planilhas do Excel em PDF mantendo o layout, as fontes e as imagens. Grátis, sem cadastro e sem marca d’água.",
    intro:
      "O Excel para PDF transforma planilhas do Excel em um PDF que fica igual em qualquer dispositivo e está pronto para mandar por e-mail, imprimir ou carregar em um portal. Aceita XLS, XLSX, ODS ou CSV. Cada planilha com conteúdo entra no PDF, usando a configuração de página salva no arquivo. A conversão usa o LibreOffice no nosso servidor: seu arquivo é enviado por uma conexão criptografada e apagado assim que o PDF volta.",
    seoTitle: "Converter Excel para PDF – Grátis e sem cadastro",
    seoDescription:
      "Converter Excel para PDF online e grátis: mantém o layout, as fontes e as imagens. Sem cadastro e sem marca d’água; os arquivos são apagados logo depois.",
    keywords: [
      "converter excel para pdf",
      "excel para pdf",
      "xlsx para pdf",
      "xls para pdf",
      "planilha para pdf",
      "csv para pdf",
    ],
    howToSteps: [
      {
        title: "Escolha seu arquivo",
        description: "Arraste ou escolha um arquivo XLS, XLSX, ODS ou CSV de até 30 MB.",
      },
      {
        title: "Converta",
        description: "Clique em Converter para PDF. O arquivo é convertido no nosso servidor, normalmente em poucos segundos.",
      },
      {
        title: "Baixe o PDF",
        description: "O PDF é baixado automaticamente; você pode baixá-lo de novo pelo botão.",
      },
    ],
    features: [
      {
        title: "Layout mantido",
        description: "Textos, tabelas, imagens e quebras de página ficam onde estavam.",
      },
      {
        title: "Fontes comuns incluídas",
        description: "Fontes com métricas compatíveis com Calibri, Cambria, Arial e Times, além das fontes Noto para a maioria dos idiomas.",
      },
      {
        title: "Arquivos apagados na hora",
        description: "Nada fica armazenado depois da conversão.",
      },
      {
        title: "Grátis",
        description: "Sem cadastro, sem marca d’água e sem limite diário.",
      },
    ],
    faqs: [
      {
        question: "Meu PDF vai ficar exatamente igual ao original?",
        answer:
          "Na maioria dos documentos, sim. Fontes raras que não estão instaladas no servidor são substituídas por outras parecidas, e alguns layouts muito complexos podem se deslocar um pouco. Confira o PDF antes de enviá-lo.",
      },
      {
        question: "Por que minha planilha foi dividida em várias páginas?",
        answer:
          "O PDF segue as configurações de impressão salvas na planilha. Para ter cada planilha em uma página, marque “Cada planilha em uma página” antes de converter: a página cresce até caber a planilha, então planilhas grandes saem pequenas na impressão.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "powerpoint-to-pdf": {
    name: "PowerPoint para PDF",
    shortName: "PPT → PDF",
    tagline: "Converta apresentações do PowerPoint em PDF mantendo o layout, as fontes e as imagens. Grátis, sem cadastro e sem marca d’água.",
    intro:
      "O PowerPoint para PDF transforma apresentações do PowerPoint em um PDF que fica igual em qualquer dispositivo e está pronto para mandar por e-mail, imprimir ou carregar em um portal. Aceita PPT, PPTX ou ODP. Cada slide vira uma página do PDF. A conversão usa o LibreOffice no nosso servidor: seu arquivo é enviado por uma conexão criptografada e apagado assim que o PDF volta.",
    seoTitle: "Converter PowerPoint para PDF – Grátis e sem cadastro",
    seoDescription:
      "Converter PowerPoint para PDF online e grátis: mantém o layout, as fontes e as imagens. Sem cadastro e sem marca d’água; os arquivos são apagados logo depois.",
    keywords: [
      "converter powerpoint para pdf",
      "powerpoint para pdf",
      "ppt para pdf",
      "pptx para pdf",
      "slides para pdf",
    ],
    howToSteps: [
      {
        title: "Escolha seu arquivo",
        description: "Arraste ou escolha um arquivo PPT, PPTX ou ODP de até 30 MB.",
      },
      {
        title: "Converta",
        description: "Clique em Converter para PDF. O arquivo é convertido no nosso servidor, normalmente em poucos segundos.",
      },
      {
        title: "Baixe o PDF",
        description: "O PDF é baixado automaticamente; você pode baixá-lo de novo pelo botão.",
      },
    ],
    features: [
      {
        title: "Layout mantido",
        description: "Textos, tabelas, imagens e quebras de página ficam onde estavam.",
      },
      {
        title: "Fontes comuns incluídas",
        description: "Fontes com métricas compatíveis com Calibri, Cambria, Arial e Times, além das fontes Noto para a maioria dos idiomas.",
      },
      {
        title: "Arquivos apagados na hora",
        description: "Nada fica armazenado depois da conversão.",
      },
      {
        title: "Grátis",
        description: "Sem cadastro, sem marca d’água e sem limite diário.",
      },
    ],
    faqs: [
      {
        question: "Meu PDF vai ficar exatamente igual ao original?",
        answer:
          "Na maioria dos documentos, sim. Fontes raras que não estão instaladas no servidor são substituídas por outras parecidas, e alguns layouts muito complexos podem se deslocar um pouco. Confira o PDF antes de enviá-lo.",
      },
      {
        question: "As animações e os vídeos são mantidos?",
        answer:
          "Não. Um PDF mostra cada slide como uma página estática, então animações, transições e vídeos incorporados ficam de fora.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "pdf-to-word": {
    name: "PDF para Word",
    shortName: "PDF → Word",
    tagline: "Transforme um PDF em um documento do Word (DOCX) editável. Grátis e sem cadastro.",
    intro:
      "O PDF para Word converte um PDF em um arquivo DOCX que você pode editar no Word, no Google Docs ou no LibreOffice. Funciona melhor com PDFs criados a partir de um documento de texto, como relatórios exportados, cartas e formulários; textos, parágrafos e imagens viram conteúdo editável. Layouts complexos, como revistas, colunas e formulários, podem precisar de alguns ajustes depois. PDFs digitalizados são apenas imagens de texto, então passe-os primeiro pelo OCR PDF. A conversão usa o pdf2docx e LibreOffice no nosso servidor, e o arquivo é apagado logo depois. Nas páginas digitalizadas que passaram por OCR, o arquivo do Word traz o texto; as imagens dessas páginas ficam de fora.",
    seoTitle: "PDF para Word – DOCX editável, grátis",
    seoDescription:
      "PDF para Word online e grátis: converta PDF em um arquivo DOCX editável. Funciona melhor com PDFs de texto; os arquivos são apagados logo depois. Sem cadastro.",
    keywords: [
      "pdf para word",
      "converter pdf para word",
      "pdf para docx",
      "pdf para word editável",
      "pdf para doc grátis",
      "transformar pdf em word",
    ],
    howToSteps: [
      {
        title: "Escolha seu PDF",
        description: "Arraste ou escolha um PDF de até 30 MB.",
      },
      {
        title: "Converta",
        description: "Clique em Converter para Word. O PDF é convertido no nosso servidor.",
      },
      {
        title: "Edite o documento",
        description: "Abra o DOCX baixado no Word, no Google Docs ou no LibreOffice.",
      },
    ],
    features: [
      {
        title: "Texto editável",
        description: "Parágrafos e títulos viram texto normal e editável.",
      },
      {
        title: "Imagens mantidas",
        description: "As imagens do PDF são colocadas no documento.",
      },
      {
        title: "Funciona com Word e Docs",
        description: "O DOCX abre no Microsoft Word, no Google Docs e no LibreOffice.",
      },
      {
        title: "Arquivos apagados na hora",
        description: "Nada é guardado depois da conversão.",
      },
    ],
    faqs: [
      {
        question: "Por que meu documento está diferente do PDF?",
        answer:
          "Os PDFs guardam posições exatas, enquanto nos documentos do Word o texto flui. Documentos simples são bem convertidos; colunas, caixas de texto e formulários complexos podem precisar de ajustes depois da conversão.",
      },
      {
        question: "Dá para converter um PDF digitalizado?",
        answer:
          "Um PDF digitalizado contém imagens de texto, não texto. Passe-o primeiro pelo OCR PDF e depois converta o PDF pesquisável para Word. Fotos e gráficos das páginas digitalizadas são mantidos como imagens; um logotipo pequeno ao lado do texto e assinaturas à mão ficam de fora.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "compress-pdf": {
    name: "Comprimir PDF",
    shortName: "Comprimir PDF",
    tagline: "Deixe um PDF menor para e-mail e formulários de envio, com três níveis de qualidade. Grátis e sem cadastro.",
    intro:
      "O Comprimir PDF reduz o tamanho de um PDF para que ele caiba em anexos de e-mail e nos limites de tamanho dos portais de envio. Funciona melhor com PDFs que têm fotos e digitalizações, cujas imagens são recomprimidas e reduzidas; escolha Menor para telas e e-mail, Equilibrado para a maioria dos usos ou Alta qualidade para manter os detalhes na impressão. O resultado mostra quanto o arquivo diminuiu e, se um PDF já for compacto, você recebe o original de volta em vez de um arquivo maior. A compressão usa o Ghostscript no nosso servidor, e o arquivo é apagado logo depois. PDFs com formulários preenchíveis mantêm os campos, mas diminuem menos.",
    seoTitle: "Comprimir PDF – Reduza o tamanho do PDF, grátis",
    seoDescription:
      "Comprimir PDF online e grátis: reduza o tamanho do arquivo com três níveis de qualidade e veja a economia. Os arquivos são apagados logo depois. Sem cadastro.",
    keywords: [
      "comprimir pdf",
      "reduzir tamanho de pdf",
      "compressor de pdf",
      "diminuir pdf",
      "comprimir pdf para 1mb",
      "deixar pdf mais leve",
    ],
    howToSteps: [
      {
        title: "Escolha seu PDF",
        description: "Arraste ou escolha um PDF de até 30 MB.",
      },
      {
        title: "Escolha um nível",
        description: "Menor, Equilibrado ou Alta qualidade.",
      },
      {
        title: "Comprima e baixe",
        description: "Veja o tamanho antes e depois e salve o PDF menor.",
      },
    ],
    features: [
      {
        title: "Três níveis de qualidade",
        description: "De arquivos no tamanho certo para e-mail a documentos com qualidade de impressão.",
      },
      {
        title: "Nunca maior",
        description: "Se não for possível diminuir um PDF, você recebe o original de volta.",
      },
      {
        title: "Compressão de verdade",
        description: "As imagens são recomprimidas e o conteúdo duplicado é unificado, algo que ferramentas no navegador não conseguem fazer.",
      },
      {
        title: "Arquivos apagados na hora",
        description: "Nada é guardado depois da compressão.",
      },
    ],
    faqs: [
      {
        question: "Quanto meu PDF vai diminuir?",
        answer:
          "Depende do conteúdo. Digitalizações e PDFs com muitas fotos costumam diminuir de 50 a 90%. PDFs só com texto já são pequenos e podem mudar muito pouco.",
      },
      {
        question: "O texto continua nítido?",
        answer: "Sim. Textos e gráficos vetoriais são mantidos como estão; só as imagens são recomprimidas.",
      },
      {
        question: "Meu PDF precisa ficar abaixo de um tamanho específico. O que eu faço?",
        answer:
          "Tente primeiro o Menor. Se ainda estiver grande demais, divida o PDF em partes com o Dividir PDF e comprima cada parte.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "protect-pdf": {
    name: "Proteger PDF",
    shortName: "Proteger PDF",
    tagline: "Adicione uma senha a um PDF com criptografia AES-256. Grátis e sem cadastro.",
    intro:
      "O Proteger PDF tranca um PDF com uma senha, para que ele não possa ser aberto sem ela. Use antes de mandar por e-mail extratos bancários, holerites, documentos de identidade ou contratos. O PDF é criptografado com AES-256, a criptografia mais forte que os leitores de PDF suportam, e abre normalmente no Acrobat, em navegadores e em apps de celular depois que a senha é digitada. Escolha uma senha de pelo menos seis caracteres e guarde-a bem: ninguém consegue recuperá-la. A criptografia é feita com o qpdf no nosso servidor; o arquivo e a senha são apagados logo depois. Você também pode impedir que ele seja impresso, copiado ou alterado.",
    seoTitle: "Proteger PDF com senha – AES-256, grátis",
    seoDescription:
      "Proteger PDF com senha online e grátis: adicione criptografia AES-256 ao arquivo. O arquivo e a senha são apagados logo depois. Sem cadastro.",
    keywords: [
      "proteger pdf com senha",
      "colocar senha em pdf",
      "criptografar pdf",
      "bloquear pdf",
      "proteger pdf",
    ],
    howToSteps: [
      {
        title: "Escolha seu PDF",
        description: "Arraste ou escolha um PDF de até 30 MB.",
      },
      {
        title: "Defina uma senha",
        description: "Digite-a duas vezes; use pelo menos seis caracteres.",
      },
      {
        title: "Proteja e baixe",
        description: "Salve o PDF bloqueado e guarde a senha em um lugar seguro.",
      },
    ],
    features: [
      {
        title: "Criptografia AES-256",
        description: "A criptografia de PDF mais forte, compatível com todos os leitores modernos.",
      },
      {
        title: "Abre em qualquer lugar",
        description: "Acrobat, navegadores e apps de celular pedem a senha.",
      },
      {
        title: "Senha nunca armazenada",
        description: "Ela é usada uma vez para criptografar o arquivo e depois descartada.",
      },
      {
        title: "Grátis",
        description: "Sem cadastro e sem marca d’água.",
      },
    ],
    faqs: [
      {
        question: "E se eu esquecer a senha?",
        answer:
          "Ela não pode ser recuperada, nem por nós nem por ninguém. Guarde uma cópia do original sem proteção ou anote a senha em um lugar seguro.",
      },
      {
        question: "Posso remover a senha depois?",
        answer: "Sim. Use o Desbloquear PDF com a senha correta.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "unlock-pdf": {
    name: "Desbloquear PDF",
    shortName: "Desbloquear PDF",
    tagline: "Remova a senha de um PDF que você consegue abrir, para que ele não peça mais a senha. Grátis e sem cadastro.",
    intro:
      "O Desbloquear PDF remove a senha de um PDF quando você a conhece, para que o arquivo abra sem pedir a senha toda vez e possa ser editado, juntado ou assinado com as outras ferramentas deste site. Ele também remove as restrições de impressão e cópia que alguns PDFs têm. Você precisa digitar a senha correta: esta ferramenta não adivinha nem quebra senhas. O desbloqueio é feito com o qpdf no nosso servidor; o arquivo e a senha são apagados logo depois.",
    seoTitle: "Desbloquear PDF – Remova a senha do PDF, grátis",
    seoDescription:
      "Desbloquear PDF online e grátis: remova a senha de um PDF que você consegue abrir. O arquivo e a senha são apagados logo depois. Sem cadastro.",
    keywords: [
      "desbloquear pdf",
      "remover senha de pdf",
      "tirar senha de pdf",
      "desproteger pdf",
      "desbloquear pdf protegido",
    ],
    howToSteps: [
      {
        title: "Escolha seu PDF",
        description: "Arraste ou escolha o PDF protegido.",
      },
      {
        title: "Digite a senha",
        description: "Digite a senha que abre o PDF.",
      },
      {
        title: "Desbloqueie e baixe",
        description: "Salve uma cópia sem a senha.",
      },
    ],
    features: [
      {
        title: "Chega de pedidos de senha",
        description: "A cópia desbloqueada abre direto.",
      },
      {
        title: "Edite aqui",
        description: "Junte, assine ou organize o PDF desbloqueado com as outras ferramentas.",
      },
      {
        title: "Restrições removidas",
        description: "Os limites de impressão e cópia também são retirados.",
      },
      {
        title: "Senha nunca armazenada",
        description: "Ela é usada uma vez e depois descartada junto com o arquivo.",
      },
    ],
    faqs: [
      {
        question: "Dá para desbloquear um PDF se eu não souber a senha?",
        answer: "Não. Você precisa da senha que abre o arquivo. Esta ferramenta não adivinha nem quebra senhas. Se o PDF abre sem senha e só bloqueia impressão ou cópia, deixe a senha vazia: essas restrições são removidas.",
      },
      {
        question: "Por que aparece que a senha está errada?",
        answer:
          "Confira as letras maiúsculas e os espaços. Extratos bancários costumam usar uma combinação, como parte do seu nome e a data de nascimento; quem envia normalmente explica o formato.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "ocr-pdf": {
    name: "OCR PDF",
    shortName: "OCR PDF",
    tagline: "Torne um PDF digitalizado pesquisável e selecionável reconhecendo o texto. Grátis e sem cadastro.",
    intro:
      "O OCR PDF reconhece o texto de um PDF digitalizado e o adiciona como uma camada invisível, para que você possa pesquisar, selecionar e copiar o texto enquanto as páginas continuam exatamente iguais. É útil para contratos digitalizados, recibos, livros e documentos antigos. Escolha o idioma do documento para ter os melhores resultados; páginas que já contêm texto ficam como estão. O reconhecimento usa o Tesseract e o OCRmyPDF no nosso servidor, e o arquivo é apagado logo depois.",
    seoTitle: "OCR PDF – Torne PDFs digitalizados pesquisáveis, grátis",
    seoDescription:
      "OCR PDF online e grátis: torne PDFs digitalizados pesquisáveis e com texto copiável. 19 idiomas; os arquivos são apagados logo depois.",
    keywords: [
      "ocr pdf",
      "pdf pesquisável",
      "pdf digitalizado para texto",
      "ocr pdf online",
      "tornar pdf pesquisável",
      "reconhecer texto em pdf",
    ],
    howToSteps: [
      {
        title: "Escolha seu PDF digitalizado",
        description: "Arraste ou escolha um PDF de até 30 MB.",
      },
      {
        title: "Escolha o idioma",
        description: "Escolha o idioma em que o documento está escrito, ou dois se ele os misturar.",
      },
      {
        title: "Torne-o pesquisável",
        description: "Baixe o PDF com texto selecionável e pesquisável.",
      },
    ],
    features: [
      {
        title: "Aparência igual",
        description: "A camada de texto é invisível; a digitalização não muda.",
      },
      {
        title: "19 idiomas",
        description: "Inglês, alemão, espanhol, francês, português, italiano, holandês, polonês, russo, ucraniano, japonês, coreano, chinês (simplificado e tradicional), tailandês, hindi, vietnamita, indonésio e turco. Dois ao mesmo tempo para páginas que os misturam.",
      },
      {
        title: "Pula páginas com texto",
        description: "Páginas que já têm texto não são processadas de novo.",
      },
      {
        title: "Arquivos apagados na hora",
        description: "Nada é guardado depois do reconhecimento.",
      },
    ],
    faqs: [
      {
        question: "Qual é a precisão?",
        answer:
          "Digitalizações limpas e retas em 300 dpi dão resultados muito bons. Letra à mão, fotos de baixa resolução e fontes incomuns são reconhecidas com menos confiabilidade.",
      },
      {
        question: "Posso converter o resultado para Word?",
        answer:
          "Sim. Depois que o PDF fica pesquisável, o PDF para Word pode transformar o texto em um documento editável.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "pdf-to-pdfa": {
    name: "PDF para PDF/A",
    shortName: "PDF → PDF/A",
    tagline: "Converta um PDF para PDF/A para arquivamento de longo prazo e portais oficiais. Grátis e sem cadastro.",
    intro:
      "O PDF para PDF/A converte um PDF em PDF/A-2b, a versão de arquivamento do PDF que incorpora as fontes e as informações de cor para que o documento continue com a mesma aparência daqui a décadas. Alguns tribunais, portais fiscais, universidades e sites do governo só aceitam envios em PDF/A. A conversão usa o OCRmyPDF e o Ghostscript no nosso servidor, e o arquivo é apagado logo depois. Os links e a maioria dos campos preenchíveis são mantidos; os que não podem atender ao padrão, como campos ocultos ou assinaturas, viram conteúdo fixo da página. Você também pode escolher PDF/A-1b ou PDF/A-3b.",
    seoTitle: "Converter PDF para PDF/A – PDF/A-2b, grátis",
    seoDescription:
      "Converter PDF para PDF/A-2b online e grátis, para arquivamento e portais oficiais. Os arquivos são apagados logo depois. Sem cadastro.",
    keywords: [
      "pdf para pdf/a",
      "converter pdf para pdf/a",
      "conversor pdf/a",
      "pdf/a-2b",
      "arquivar pdf",
    ],
    howToSteps: [
      {
        title: "Escolha seu PDF",
        description: "Arraste ou escolha um PDF de até 30 MB.",
      },
      {
        title: "Converta",
        description: "Clique em Converter para PDF/A.",
      },
      {
        title: "Baixe",
        description: "Envie o arquivo PDF/A onde ele for exigido.",
      },
    ],
    features: [
      {
        title: "PDF/A-2b",
        description: "O padrão de arquivamento amplamente aceito.",
      },
      {
        title: "Fontes incorporadas",
        description: "O texto fica igual em qualquer computador.",
      },
      {
        title: "Aparência inalterada",
        description: "As páginas mantêm o conteúdo e o layout.",
      },
      {
        title: "Arquivos apagados na hora",
        description: "Nada é guardado depois da conversão.",
      },
    ],
    faqs: [
      {
        question: "Qual versão de PDF/A eu recebo?",
        answer:
          "PDF/A-2b por padrão, aceito pela maioria dos portais. Se um portal ou arquivo pedir PDF/A-1b ou PDF/A-3b, escolha esse nível antes de converter.",
      },
      {
        question: "Por que o arquivo PDF/A é maior?",
        answer:
          "O PDF/A precisa incorporar todas as fontes e perfis de cor para que o documento continue legível por conta própria, o que aumenta o tamanho.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  "repair-pdf": {
    name: "Reparar PDF",
    shortName: "Reparar PDF",
    tagline: "Conserte um PDF danificado que não abre ou mostra erros. Grátis e sem cadastro.",
    intro:
      "O Reparar PDF reconstrói a estrutura interna de um PDF danificado, daqueles que não abrem, mostram um erro ou abrem com páginas faltando depois de um download interrompido ou de uma exportação com falha. Ele reescreve o arquivo para que os leitores de PDF consigam lê-lo de novo e recupera o que for possível recuperar. Arquivos muito corrompidos nem sempre podem ser salvos. O reparo é feito no nosso servidor com o qpdf, e com o MuPDF para os arquivos que o qpdf não consegue ler, e o arquivo é apagado logo depois.",
    seoTitle: "Reparar PDF – Conserte arquivos PDF danificados, grátis",
    seoDescription:
      "Reparar PDF online e grátis: conserte arquivos PDF danificados ou corrompidos que não abrem. Os arquivos são apagados logo depois. Sem cadastro.",
    keywords: [
      "reparar pdf",
      "consertar pdf corrompido",
      "recuperar pdf danificado",
      "reparar pdf online",
      "pdf não abre",
    ],
    howToSteps: [
      {
        title: "Escolha o PDF danificado",
        description: "Arraste ou escolha o PDF que não abre direito.",
      },
      {
        title: "Repare",
        description: "Clique em Reparar PDF para reconstruir a estrutura.",
      },
      {
        title: "Baixe",
        description: "Abra a cópia reparada no seu leitor de PDF.",
      },
    ],
    features: [
      {
        title: "Reconstrói a estrutura",
        description: "Corrige tabelas de referência cruzada e estruturas de arquivo quebradas.",
      },
      {
        title: "Mantém o que dá",
        description: "Páginas e conteúdos legíveis são mantidos.",
      },
      {
        title: "Rápido",
        description: "A maioria dos arquivos é reparada em segundos.",
      },
      {
        title: "Arquivos apagados na hora",
        description: "Nada é guardado depois do reparo.",
      },
    ],
    faqs: [
      {
        question: "Todo PDF pode ser reparado?",
        answer:
          "Não. Se partes do arquivo estiverem faltando ou tiverem sido sobrescritas, elas não podem ser recuperadas. Se puder, tente baixar ou exportar o original de novo.",
      },
      {
        question: "Por que aparece que o arquivo não é um PDF?",
        answer:
          "O arquivo nem começa como um PDF, então pode ser outro tipo de arquivo ou estar danificado demais para ser reparado.",
      },
      {
        question: "Meu arquivo é enviado?",
        answer:
          "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador.",
      },
      {
        question: "Há um limite de tamanho?",
        answer: "Os arquivos podem ter até 30 MB. Arquivos muito grandes ou complexos podem levar um ou dois minutos.",
      },
    ],
  },
  // PDF utilities
"pdf-to-text": {
    "name": "PDF para Texto",
    "shortName": "PDF para Texto",
    "tagline": "Tire o texto de um PDF como um arquivo .txt simples, página por página, pronto para copiar ou editar. É grátis e funciona no seu dispositivo.",
    "intro": "O PDF para Texto extrai o texto de um PDF para você copiar, pesquisar, editar ou colar em outro lugar, sem copiar página por página. Linhas e parágrafos são mantidos, e cada página pode ser marcada para você saber de onde veio o texto. Escolha todas as páginas ou só algumas, depois copie o texto ou baixe-o como arquivo .txt. Funciona com PDFs que contêm texto de verdade, como documentos salvos do Word ou de um site; para páginas digitalizadas, use o OCR PDF. Tudo acontece no seu navegador.",
    "seoTitle": "Converter PDF para Texto – Grátis, copie ou salve em TXT",
    "seoDescription": "Extraia o texto de um PDF no navegador e salve como arquivo .txt ou copie. Escolha as páginas e mantenha os parágrafos. Grátis, nada é enviado.",
    "keywords": [
      "pdf para texto",
      "pdf para txt",
      "extrair texto de pdf",
      "copiar texto de pdf",
      "extrator de texto pdf"
    ],
    "howToSteps": [
      {
        "title": "Abra seu PDF",
        "description": "Arraste ou escolha um PDF; o texto é lido na hora."
      },
      {
        "title": "Escolha as páginas",
        "description": "Todas as páginas ou um intervalo como 1-3, 5. Se quiser, marque onde cada página começa."
      },
      {
        "title": "Copie ou baixe",
        "description": "Copie o texto ou salve-o como arquivo .txt."
      }
    ],
    "features": [
      {
        "title": "Parágrafos mantidos",
        "description": "As quebras de linha e os espaços entre parágrafos seguem a página."
      },
      {
        "title": "Página por página",
        "description": "Marque onde cada página começa ou escolha só algumas páginas."
      },
      {
        "title": "Qualquer idioma",
        "description": "O texto em qualquer alfabeto que o PDF contenha sai do jeito que está."
      },
      {
        "title": "Privado",
        "description": "O PDF é processado no seu navegador e nunca é enviado."
      }
    ],
    "faqs": [
      {
        "question": "Por que nenhum texto foi encontrado?",
        "answer": "O PDF provavelmente é uma digitalização: imagens das páginas, sem texto dentro. O OCR PDF lê o texto das imagens."
      },
      {
        "question": "O layout é mantido?",
        "answer": "As palavras e a ordem delas, sim; o visual, não. Os PDFs guardam o texto por posição, então colunas lado a lado podem ser lidas de uma ponta à outra e tabelas saem como linhas de texto."
      },
      {
        "question": "Posso obter Markdown?",
        "answer": "Sim. Mude o formato para Markdown ou use o PDF para Markdown, que também reconhece títulos e listas."
      },
      {
        "question": "Meu PDF é enviado?",
        "answer": "Não. Tudo acontece no seu navegador, então o documento fica no seu dispositivo."
      }
    ]
  },
  "pdf-to-markdown": {
    "name": "PDF para Markdown",
    "shortName": "PDF para Markdown",
    "tagline": "Transforme um PDF em Markdown com títulos e listas, para notas, wikis e ferramentas de IA. É grátis e funciona no seu dispositivo.",
    "intro": "O PDF para Markdown transforma o texto de um PDF em Markdown: o texto maior vira título, linhas com marcadores ou números viram listas, e linhas quebradas são reunidas de novo em parágrafos, com as palavras separadas por hífen juntadas outra vez. O resultado está pronto para apps de notas como Obsidian e Notion, para wikis e documentação, ou para colar em um assistente de IA. Escolha as páginas, copie o Markdown ou baixe-o como arquivo .md. Tudo acontece no seu navegador.",
    "seoTitle": "Converter PDF para Markdown – Grátis, com títulos e listas",
    "seoDescription": "Converta PDF para Markdown no navegador: títulos a partir do texto maior, listas e parágrafos reunidos. Para notas, wikis e IA. Grátis, nada é enviado.",
    "keywords": [
      "pdf para markdown",
      "converter pdf para markdown",
      "pdf para md",
      "conversor de pdf para markdown",
      "pdf para obsidian"
    ],
    "howToSteps": [
      {
        "title": "Abra seu PDF",
        "description": "Arraste ou escolha um PDF que contenha texto."
      },
      {
        "title": "Confira o Markdown",
        "description": "Títulos e listas são reconhecidos; escolha as páginas de que precisa."
      },
      {
        "title": "Copie ou baixe",
        "description": "Copie o Markdown ou salve-o como arquivo .md."
      }
    ],
    "features": [
      {
        "title": "Títulos reconhecidos",
        "description": "O texto maior que o corpo vira títulos # do nível certo."
      },
      {
        "title": "Listas e parágrafos",
        "description": "Marcadores viram listas, e linhas quebradas viram parágrafos inteiros."
      },
      {
        "title": "Bom para ferramentas de IA",
        "description": "Um Markdown limpo é fácil de ler para assistentes e apps de notas."
      },
      {
        "title": "Privado",
        "description": "O PDF é processado no seu navegador e nunca é enviado."
      }
    ],
    "faqs": [
      {
        "question": "As tabelas são convertidas?",
        "answer": "Não. As células das tabelas saem como linhas de texto; organize-as à mão se precisar de uma tabela em Markdown."
      },
      {
        "question": "Por que nenhum texto foi encontrado?",
        "answer": "O PDF provavelmente é uma digitalização: imagens das páginas, sem texto dentro. O OCR PDF lê o texto das imagens."
      },
      {
        "question": "O layout é mantido?",
        "answer": "As palavras e a ordem delas, sim; o visual, não. Os PDFs guardam o texto por posição, então colunas lado a lado podem ser lidas de uma ponta à outra e tabelas saem como linhas de texto."
      },
      {
        "question": "Meu PDF é enviado?",
        "answer": "Não. Tudo acontece no seu navegador, então o documento fica no seu dispositivo."
      }
    ]
  },
  "text-to-pdf": {
    "name": "Texto para PDF",
    "shortName": "Texto para PDF",
    "tagline": "Transforme texto simples ou um arquivo .txt em um PDF limpo, com a fonte, o tamanho e as margens que você quiser. É grátis e funciona no seu dispositivo.",
    "intro": "O Texto para PDF transforma anotações, logs, listas ou qualquer texto simples em um PDF organizado, que fica igual em qualquer dispositivo. Digite ou cole o texto, ou abra um arquivo .txt, e escolha A4 ou Carta, uma fonte sem serifa, com serifa ou de máquina de escrever, o tamanho do texto e as margens. Linhas longas quebram de forma organizada, as quebras de linha são mantidas e as páginas podem ser numeradas. A prévia mostra o PDF exatamente como será salvo, e o texto nele continua pesquisável. Tudo acontece no seu navegador.",
    "seoTitle": "Converter Texto para PDF – TXT para PDF, grátis",
    "seoDescription": "Converta texto ou um arquivo .txt para PDF no navegador. Escolha fonte, tamanho, margens e números de página, com prévia ao vivo. Grátis, nada é enviado.",
    "keywords": [
      "texto para pdf",
      "txt para pdf",
      "converter texto em pdf",
      "bloco de notas para pdf",
      "converter txt em pdf"
    ],
    "howToSteps": [
      {
        "title": "Adicione seu texto",
        "description": "Digite, cole ou abra um arquivo .txt."
      },
      {
        "title": "Escolha a aparência",
        "description": "Tamanho da página, fonte, tamanho do texto, margens e números de página."
      },
      {
        "title": "Baixe o PDF",
        "description": "Confira a prévia e salve."
      }
    ],
    "features": [
      {
        "title": "Prévia ao vivo",
        "description": "Veja cada página como será salva antes de baixar."
      },
      {
        "title": "Texto pesquisável",
        "description": "O PDF contém texto de verdade, não uma imagem dele."
      },
      {
        "title": "Vários idiomas",
        "description": "Textos nos alfabetos latino, grego e cirílico, em japonês e em coreano são escritos com fontes que incluem esses caracteres."
      },
      {
        "title": "Privado",
        "description": "O PDF é processado no seu navegador e nunca é enviado."
      }
    ],
    "faqs": [
      {
        "question": "Tabulações e espaços são mantidos?",
        "answer": "As quebras de linha e os espaços no início das linhas são mantidos; as tabulações viram quatro espaços."
      },
      {
        "question": "Posso formatar o texto?",
        "answer": "Para títulos, negrito e listas, use o Markdown para PDF."
      },
      {
        "question": "Existe um limite de tamanho?",
        "answer": "Não há um limite fixo; textos muito longos só demoram alguns segundos a mais."
      },
      {
        "question": "Meu PDF é enviado?",
        "answer": "Não. Tudo acontece no seu navegador, então o documento fica no seu dispositivo."
      }
    ]
  },
  "markdown-to-pdf": {
    "name": "Markdown para PDF",
    "shortName": "Markdown para PDF",
    "tagline": "Transforme Markdown em um PDF formatado, com títulos, listas, código e links que funcionam. É grátis e funciona no seu dispositivo.",
    "intro": "O Markdown para PDF transforma arquivos README, notas e documentação escritos em Markdown em um PDF bem formatado para compartilhar ou imprimir. Títulos, negrito e itálico, código em linha, listas, citações, blocos de código, linhas horizontais e links são diagramados, e os links continuam clicáveis no PDF. Cole seu Markdown ou abra um arquivo .md, escolha o tamanho da página, a fonte e as margens, e confira a prévia ao vivo antes de baixar. Tudo acontece no seu navegador.",
    "seoTitle": "Converter Markdown para PDF – Grátis, com prévia ao vivo",
    "seoDescription": "Converta Markdown para PDF no navegador: títulos, listas, blocos de código e links clicáveis, com prévia ao vivo. Grátis, nada é enviado.",
    "keywords": [
      "markdown para pdf",
      "md para pdf",
      "converter markdown em pdf",
      "readme para pdf",
      "conversor markdown pdf"
    ],
    "howToSteps": [
      {
        "title": "Adicione seu Markdown",
        "description": "Cole o texto ou abra um arquivo .md."
      },
      {
        "title": "Escolha a aparência",
        "description": "Tamanho da página, fonte, tamanho do texto, margens e números de página."
      },
      {
        "title": "Baixe o PDF",
        "description": "Confira a prévia e salve."
      }
    ],
    "features": [
      {
        "title": "Formatação mantida",
        "description": "Títulos, negrito, itálico, código, listas, citações e linhas."
      },
      {
        "title": "Links clicáveis",
        "description": "Os links do seu Markdown funcionam no PDF."
      },
      {
        "title": "Prévia ao vivo",
        "description": "Veja as páginas antes de baixar."
      },
      {
        "title": "Privado",
        "description": "O PDF é processado no seu navegador e nunca é enviado."
      }
    ],
    "faqs": [
      {
        "question": "Tabelas e imagens são compatíveis?",
        "answer": "Ainda não. Tabelas e imagens no Markdown aparecem como texto; títulos, listas, código e links são diagramados."
      },
      {
        "question": "Qual Markdown ele segue?",
        "answer": "A sintaxe comum usada pelo GitHub e pela maioria dos editores: # títulos, **negrito**, *itálico*, `código`, listas, > citações, ``` blocos de código e [links](…)."
      },
      {
        "question": "O texto é pesquisável?",
        "answer": "Sim. O PDF contém texto de verdade, então ele pode ser selecionado, pesquisado e copiado."
      },
      {
        "question": "Meu PDF é enviado?",
        "answer": "Não. Tudo acontece no seu navegador, então o documento fica no seu dispositivo."
      }
    ]
  },
  "extract-images-from-pdf": {
    "name": "Extrair imagens do PDF",
    "shortName": "Extrair imagens",
    "tagline": "Salve todas as imagens de um PDF na resolução original, em PNG ou JPG, em um único ZIP. É grátis e funciona no seu dispositivo.",
    "intro": "O Extrair imagens do PDF encontra as fotos, logos e ilustrações incorporadas em um PDF e as salva na resolução em que estão guardadas, em vez de uma captura de tela da página. Cada imagem aparece com o tamanho e as páginas em que é usada; uma imagem repetida em várias páginas, como um logo, aparece uma única vez. Veja-as em tamanho real, desmarque as que não quer e baixe-as em PNG sem perdas ou em JPG menores, todas juntas em um ZIP. Tudo acontece no seu navegador.",
    "seoTitle": "Extrair imagens do PDF – Grátis, na resolução original",
    "seoDescription": "Salve as imagens de um PDF na resolução original, no navegador. Veja, escolha e baixe em PNG ou JPG em um único ZIP. Grátis, nada é enviado.",
    "keywords": [
      "extrair imagens de pdf",
      "extrator de imagens pdf",
      "salvar imagens de pdf",
      "tirar fotos de pdf",
      "baixar imagens de pdf"
    ],
    "howToSteps": [
      {
        "title": "Abra seu PDF",
        "description": "As páginas são vasculhadas em busca de imagens."
      },
      {
        "title": "Escolha as imagens",
        "description": "Veja-as em tamanho real e desmarque as que não quer."
      },
      {
        "title": "Baixe as imagens",
        "description": "Salve arquivos PNG ou JPG, todos juntos em um ZIP."
      }
    ],
    "features": [
      {
        "title": "Resolução original",
        "description": "As imagens saem no tamanho guardado no PDF, não como captura de tela."
      },
      {
        "title": "Cada imagem uma vez",
        "description": "Um logo repetido em todas as páginas aparece uma vez, com as páginas em que é usado."
      },
      {
        "title": "Sem bagunça",
        "description": "Imagens minúsculas, como ícones e linhas, podem ficar de fora."
      },
      {
        "title": "Privado",
        "description": "O PDF é processado no seu navegador e nunca é enviado."
      }
    ],
    "faqs": [
      {
        "question": "Por que falta uma imagem?",
        "answer": "Alguns PDFs desenham gráficos com linhas e formas em vez de imagens, e esses gráficos não podem ser extraídos como imagens. Para salvar a aparência de uma página, use o PDF para JPG."
      },
      {
        "question": "PNG ou JPG?",
        "answer": "O PNG mantém cada pixel exatamente igual; o JPG gera arquivos bem menores para fotos."
      },
      {
        "question": "Recebo os arquivos originais de volta?",
        "answer": "Você recebe os dados de imagem guardados no PDF, decodificados na resolução deles. O formato e o nome do arquivo original não ficam guardados em um PDF."
      },
      {
        "question": "Meu PDF é enviado?",
        "answer": "Não. Tudo acontece no seu navegador, então o documento fica no seu dispositivo."
      }
    ]
  },
  "delete-blank-pages-pdf": {
    "name": "Excluir páginas em branco do PDF",
    "shortName": "Excluir páginas em branco",
    "tagline": "Encontre as páginas vazias de um PDF digitalizado e remova-as depois de uma conferida rápida. É grátis e funciona no seu dispositivo.",
    "intro": "A digitalização frente e verso deixa versos em branco nos seus PDFs. O Excluir páginas em branco analisa cada página, marca as que estão vazias e deixa você conferir antes de remover qualquer coisa: veja qualquer página em tamanho real, desmarque uma página que quer manter ou marque uma você mesmo. Páginas em branco digitalizadas quase nunca são brancas de verdade, então um controle de sensibilidade decide quanto de textura do papel, transparência do verso ou um número de página solitário ainda conta como em branco. Depois, baixe o PDF sem essas páginas. Tudo acontece no seu navegador.",
    "seoTitle": "Excluir páginas em branco do PDF – Grátis, automático",
    "seoDescription": "Encontre e remova páginas em branco de PDFs digitalizados no navegador. Detecção automática, sensibilidade ajustável e conferência antes de excluir. Grátis.",
    "keywords": [
      "remover páginas em branco pdf",
      "excluir páginas em branco pdf",
      "apagar páginas em branco do pdf",
      "remover páginas vazias pdf",
      "tirar páginas brancas do pdf"
    ],
    "howToSteps": [
      {
        "title": "Abra seu PDF",
        "description": "Cada página é verificada em busca de conteúdo."
      },
      {
        "title": "Confira as páginas marcadas",
        "description": "As páginas em branco vêm marcadas; ajuste a sensibilidade ou marque e desmarque páginas."
      },
      {
        "title": "Baixe",
        "description": "Salve o PDF sem as páginas marcadas."
      }
    ],
    "features": [
      {
        "title": "Detecção automática",
        "description": "As páginas vazias são encontradas e marcadas para você."
      },
      {
        "title": "Sensibilidade ajustável",
        "description": "Decida se páginas quase vazias contam como em branco."
      },
      {
        "title": "Confira antes de excluir",
        "description": "Abra qualquer página em tamanho real antes de ela ser removida."
      },
      {
        "title": "Privado",
        "description": "O PDF é processado no seu navegador e nunca é enviado."
      }
    ],
    "faqs": [
      {
        "question": "Ele exclui páginas com um pouco de texto?",
        "answer": "Na configuração padrão, páginas com uma linha de texto são mantidas. Aumente a sensibilidade para remover também páginas com apenas um número de página ou marcas leves."
      },
      {
        "question": "Por que uma página em branco não foi marcada?",
        "answer": "Ruído do scanner, uma borda escura ou a transparência do verso podem parecer conteúdo. Aumente a sensibilidade ou marque a página você mesmo."
      },
      {
        "question": "O resto do PDF é alterado?",
        "answer": "Não. As outras páginas são copiadas do jeito que estão."
      },
      {
        "question": "Meu PDF é enviado?",
        "answer": "Não. Tudo acontece no seu navegador, então o documento fica no seu dispositivo."
      }
    ]
  },
  "compare-pdf": {
    "name": "Comparar PDFs",
    "shortName": "Comparar PDFs",
    "tagline": "Veja o que mudou entre duas versões de um PDF: o texto palavra por palavra e cada página pixel por pixel. É grátis e funciona no seu dispositivo.",
    "intro": "O Comparar PDFs mostra as diferenças entre duas versões de um documento, como um contrato antes e depois de alterações ou dois rascunhos de um relatório. A visão de texto lista cada palavra removida e adicionada, com apenas os trechos alterados se você preferir, e uma contagem das mudanças. A visão visual coloca as páginas lado a lado e destaca cada diferença em magenta, para você notar também mudanças em imagens, layout e assinaturas. Baixe as mudanças como um relatório de texto. Tudo acontece no seu navegador.",
    "seoTitle": "Comparar PDFs online – Encontre as diferenças, grátis",
    "seoDescription": "Compare dois PDFs no navegador: palavras alteradas destacadas e páginas comparadas pixel por pixel. Grátis, privado, nada é enviado.",
    "keywords": [
      "comparar pdf",
      "comparar dois arquivos pdf",
      "diferenças entre pdf",
      "encontrar diferenças entre pdfs",
      "comparar pdf online"
    ],
    "howToSteps": [
      {
        "title": "Adicione os dois PDFs",
        "description": "Primeiro o original, depois a versão alterada."
      },
      {
        "title": "Veja as mudanças",
        "description": "Leia as mudanças no texto ou passe para a comparação visual, página por página."
      },
      {
        "title": "Salve um relatório",
        "description": "Baixe as mudanças no texto como um relatório .txt."
      }
    ],
    "features": [
      {
        "title": "Palavra por palavra",
        "description": "Palavras removidas em vermelho, adicionadas em verde, com um total."
      },
      {
        "title": "Pixel por pixel",
        "description": "Cada diferença visual na página destacada em magenta."
      },
      {
        "title": "Só as mudanças",
        "description": "Oculte o texto que não mudou para focar no que é diferente."
      },
      {
        "title": "Confidencial",
        "description": "Os dois documentos ficam no seu dispositivo."
      }
    ],
    "faqs": [
      {
        "question": "Os PDFs precisam ter o mesmo número de páginas?",
        "answer": "Não. O texto é comparado como um todo, então páginas adicionadas ou removidas aparecem como texto adicionado ou removido. A visão visual compara as páginas de mesmo número."
      },
      {
        "question": "Por que a visão visual mostra mudanças que a visão de texto não mostra?",
        "answer": "Imagens, layout, cores e assinaturas não são texto; a visão visual detecta essas mudanças."
      },
      {
        "question": "Dá para comparar PDFs digitalizados?",
        "answer": "A visão visual, sim. Para a visão de texto, passe os dois pelo OCR PDF primeiro."
      },
      {
        "question": "Meu PDF é enviado?",
        "answer": "Não. Tudo acontece no seu navegador, então o documento fica no seu dispositivo."
      }
    ]
  },
  "overlay-pdf": {
    "name": "Sobrepor PDF",
    "shortName": "Sobrepor PDF",
    "tagline": "Coloque um papel timbrado, um fundo ou um carimbo de um PDF por cima ou por baixo das páginas de outro. É grátis e funciona no seu dispositivo.",
    "intro": "O Sobrepor PDF combina dois PDFs página sobre página: coloque o papel timbrado da sua empresa atrás de uma carta, um fundo decorativo sob um relatório ou uma folha de “Rascunho” ou “Aprovado” por cima de cada página. Escolha se a sobreposição fica por cima ou por baixo, qual página da sobreposição vai em qual página (a primeira em todas as páginas, ou página por página), quais páginas cobrir e com que intensidade. A prévia mostra cada página como será salva. Tudo acontece no seu navegador.",
    "seoTitle": "Sobrepor PDF – Adicione papel timbrado ou fundo, grátis",
    "seoDescription": "Coloque um papel timbrado, fundo ou carimbo em PDF por cima ou por baixo das páginas de outro PDF, no navegador. Prévia ao vivo. Grátis, nada é enviado.",
    "keywords": [
      "sobrepor pdf",
      "adicionar papel timbrado ao pdf",
      "fundo em pdf",
      "sobrepor um pdf em outro",
      "papel timbrado pdf"
    ],
    "howToSteps": [
      {
        "title": "Abra seu PDF",
        "description": "O documento que vai receber a sobreposição."
      },
      {
        "title": "Escolha o PDF de sobreposição",
        "description": "Um papel timbrado, fundo ou folha de carimbo; defina por cima ou por baixo, as páginas e a opacidade."
      },
      {
        "title": "Baixe o PDF",
        "description": "Confira a prévia e salve."
      }
    ],
    "features": [
      {
        "title": "Por cima ou por baixo",
        "description": "Um carimbo sobre o texto ou um papel timbrado atrás dele."
      },
      {
        "title": "Correspondência de páginas",
        "description": "Use a primeira página da sobreposição em todas, ou combine as páginas uma a uma."
      },
      {
        "title": "Continua nítido",
        "description": "A sobreposição é inserida como conteúdo vetorial, não como uma imagem."
      },
      {
        "title": "Privado",
        "description": "O PDF é processado no seu navegador e nunca é enviado."
      }
    ],
    "faqs": [
      {
        "question": "Por que não vejo a sobreposição por baixo?",
        "answer": "Alguns PDFs pintam um fundo branco em cada página, o que esconde tudo o que está por baixo. Coloque a sobreposição por cima, com uma opacidade menor."
      },
      {
        "question": "E se as páginas tiverem tamanhos diferentes?",
        "answer": "A sobreposição é redimensionada para caber em cada página, mantendo as proporções, e centralizada."
      },
      {
        "question": "Posso usar uma imagem como sobreposição?",
        "answer": "Use o JPG para PDF para transformar a imagem em PDF primeiro, ou o Marca d'água em PDF para inserir uma imagem diretamente."
      },
      {
        "question": "Meu PDF é enviado?",
        "answer": "Não. Tudo acontece no seu navegador, então o documento fica no seu dispositivo."
      }
    ]
  },
  // Social media sizes, print calculators, color blindness simulator
"social-media-image-resizer": {
    "name": "Redimensionar imagem para redes sociais",
    "shortName": "Redes sociais",
    "tagline": "Redimensione uma imagem para Instagram, YouTube, Facebook, LinkedIn, Pinterest, X e TikTok. Grátis e roda no seu dispositivo.",
    "intro": "O Redimensionar imagem para redes sociais deixa uma imagem no tamanho exato que cada rede pede. Escolha um tamanho na lista, arraste a imagem até a parte certa ficar no quadro e baixe. Se a imagem não combinar com o formato, mostre tudo sobre uma cópia desfocada dela mesma ou sobre uma cor à sua escolha. Sua imagem fica no seu dispositivo. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Redimensionar imagem para redes sociais – Grátis",
    "seoDescription": "Redimensione imagens para Instagram, YouTube, Facebook, LinkedIn, Pinterest, X e TikTok. Arraste para posicionar e baixe. Grátis, sem cadastro e sem upload.",
    "keywords": ["redimensionar imagem para redes sociais", "tamanho de imagem para redes sociais", "tamanhos de imagens redes sociais", "tamanho de imagem instagram facebook", "ajustar foto para redes sociais"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha um JPG, PNG, WebP, HEIC ou TIFF." },
      { "title": "Escolha o tamanho e posicione", "description": "Escolha a rede e o formato, depois arraste a imagem ou use os controles deslizantes." },
      { "title": "Baixe", "description": "Salve em JPG, PNG ou WebP exatamente nesse tamanho." }
    ],
    "features": [
      { "title": "16 tamanhos prontos", "description": "Posts, stories, miniaturas, banners e capas para as principais redes." },
      { "title": "Preencher ou mostrar tudo", "description": "Corte para preencher o quadro ou mantenha a imagem inteira sobre um fundo desfocado ou colorido." },
      { "title": "Privado", "description": "Tudo acontece no seu navegador. Sua imagem nunca é enviada." }
    ],
    "faqs": [
      { "question": "Estes são os tamanhos atuais?", "answer": "São os tamanhos que as redes publicam, até onde sabemos. As redes os alteram de tempos em tempos, então, se um envio ficar estranho, confira as páginas de ajuda da rede." },
      { "question": "Minha imagem vai perder qualidade?", "answer": "Reduzir mantém a nitidez. Se a imagem for menor que o tamanho escolhido, ela precisa ser ampliada e pode perder nitidez; a ferramenta avisa quando isso acontece." },
      { "question": "O que faz a opção “Mostrar tudo”?", "answer": "Ela encaixa a imagem inteira no quadro e preenche o espaço em volta com uma cópia desfocada da imagem ou com uma cor à sua escolha, então nada é cortado." },
      { "question": "Minha imagem é enviada?", "answer": "Não. Ela é processada no seu dispositivo e continua lá." }
    ]
  },
"instagram-post-resizer": {
    "name": "Redimensionar post do Instagram",
    "shortName": "Post do Instagram",
    "tagline": "Ajuste uma imagem ao tamanho de post quadrado, vertical, alto ou horizontal do Instagram. Grátis e roda no seu dispositivo.",
    "intro": "O Redimensionar post do Instagram deixa a imagem no formato certo antes de você postar, para que o Instagram não a corte por você. Escolha quadrado (1080 × 1080), vertical (1080 × 1350), alto (1080 × 1440) ou horizontal (1080 × 566) e arraste a imagem até a parte que importa ficar no quadro. Para postar uma foto larga sem cortar, mostre tudo sobre um fundo desfocado. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Redimensionar post do Instagram – Quadrado, vertical, 3:4",
    "seoDescription": "Redimensione fotos para posts do Instagram: quadrado 1080×1080, vertical 1080×1350, alto 3:4 ou horizontal. Arraste e evite surpresas. Grátis, sem upload.",
    "keywords": ["tamanho de post do instagram", "redimensionar imagem para instagram", "ajustar foto para instagram", "instagram 1080x1350", "tamanho 3:4 instagram"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha a foto que você quer postar." },
      { "title": "Escolha o formato", "description": "Escolha quadrado, vertical, alto ou horizontal e arraste a foto para o lugar." },
      { "title": "Baixe e poste", "description": "Salve e envie para o Instagram como de costume." }
    ],
    "features": [
      { "title": "Todos os formatos de post", "description": "Quadrado, vertical 4:5, alto 3:4 e horizontal, com 1080 pixels de largura." },
      { "title": "Sem corte forçado", "description": "Mostre a foto inteira sobre um fundo desfocado ou colorido se não quiser perder nenhuma parte." },
      { "title": "Privado", "description": "Sua foto é processada no seu dispositivo e nunca é enviada." }
    ],
    "faqs": [
      { "question": "Qual deve ser o tamanho de um post do Instagram?", "answer": "1080 pixels de largura. O Instagram não corta fotos entre um formato largo de 1,91:1 (1080 × 566) e um alto de 3:4 (1080 × 1440). O quadrado é 1080 × 1080, e 1080 × 1350 é um tamanho vertical popular." },
      { "question": "Como postar uma foto inteira sem cortar?", "answer": "Escolha “Mostrar tudo”. A foto inteira fica dentro do quadro, sobre uma cópia desfocada dela mesma ou sobre uma cor à sua escolha." },
      { "question": "Em qual formato devo salvar?", "answer": "JPG é bom para fotos. PNG é bom para artes com texto, embora o arquivo fique maior." }
    ]
  },
  "instagram-story-resizer": {
    "name": "Redimensionar Story do Instagram",
    "shortName": "Story do Instagram",
    "tagline": "Deixe uma imagem em 1080 × 1920 para Stories, Reels e TikTok. Grátis e roda no seu dispositivo.",
    "intro": "O Redimensionar Story do Instagram transforma qualquer imagem no formato alto de 1080 × 1920 usado em Stories, Reels e TikTok. Uma guia tracejada mostra onde ficam os botões e a legenda do próprio app, para você manter rostos e textos longe deles. Fotos largas podem ficar inteiras sobre uma cópia desfocada delas mesmas, em vez de serem cortadas. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Tamanho de Story do Instagram – 1080×1920, grátis",
    "seoDescription": "Redimensione qualquer imagem para 1080×1920 para Stories, Reels e TikTok, com guia de área segura. Grátis, sem cadastro e sua imagem não é enviada.",
    "keywords": ["tamanho de story do instagram", "redimensionar imagem para story", "imagem 1080x1920", "tamanho de capa de reels", "tamanho de imagem tiktok"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha uma foto ou arte." },
      { "title": "Posicione", "description": "Arraste para o lugar, mantendo o que importa dentro da área segura tracejada." },
      { "title": "Baixe", "description": "Salve em 1080 × 1920, pronto para adicionar ao seu story." }
    ],
    "features": [
      { "title": "Guia de área segura", "description": "Mostra o que os botões e a legenda do app cobrem. A guia não é salva na imagem." },
      { "title": "Fundo desfocado", "description": "Uma foto larga cabe inteira, com uma cópia desfocada dela mesma preenchendo o resto." },
      { "title": "Privado", "description": "Sua imagem fica no seu dispositivo." }
    ],
    "faqs": [
      { "question": "Qual é o tamanho de um Story do Instagram?", "answer": "1080 × 1920 pixels, no formato 9:16. Reels e TikTok usam o mesmo formato." },
      { "question": "O que é a área segura?", "answer": "O meio do quadro. Cerca de 250 pixels em cima e cerca de 340 embaixo podem ser cobertos pelo nome do perfil, pelos botões e pela legenda, então evite colocar texto ali." },
      { "question": "A caixa tracejada aparece na minha imagem?", "answer": "Não. Ela só aparece na prévia e nunca é salva." }
    ]
  },
  "youtube-thumbnail-maker": {
    "name": "Criador de miniatura do YouTube",
    "shortName": "Miniatura do YouTube",
    "tagline": "Transforme uma imagem em uma miniatura do YouTube em 16:9 que fica dentro dos limites de envio do YouTube. Grátis e roda no seu dispositivo.",
    "intro": "O Criador de miniatura do YouTube enquadra a imagem no formato 16:9 que o YouTube pede. Escolha 1280 × 720, que fica abaixo do limite de 2 MB para enviar pelo celular, ou 3840 × 2160, o tamanho grande que o YouTube recomenda, para enviar pelo computador. Arraste a imagem para enquadrar, dê zoom no que importa e baixe. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Criar miniatura do YouTube – 16:9, até 4K, grátis",
    "seoDescription": "Crie uma miniatura do YouTube em 16:9 com qualquer imagem: 1280×720 abaixo de 2 MB para celular, ou 4K. Arraste, dê zoom e baixe. Grátis, sem upload.",
    "keywords": ["criar miniatura do youtube", "tamanho de miniatura do youtube", "thumbnail 1280x720", "redimensionar imagem para thumbnail do youtube", "thumbnail do youtube 2mb"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha uma captura de tela ou foto." },
      { "title": "Escolha um tamanho e enquadre", "description": "Escolha 1280 × 720 ou 4K, depois arraste e dê zoom até o assunto preencher o quadro." },
      { "title": "Baixe", "description": "Salve o arquivo e envie no YouTube Studio." }
    ],
    "features": [
      { "title": "Dois tamanhos", "description": "1280 × 720 para um arquivo pequeno, ou 3840 × 2160, o tamanho que o YouTube recomenda." },
      { "title": "Dentro dos limites de envio", "description": "Arquivos JPG e WebP ficam abaixo de 2 MB em 1280 × 720 e abaixo de 50 MB em 4K." },
      { "title": "Privado", "description": "Sua imagem é processada no seu dispositivo e nunca é enviada." }
    ],
    "faqs": [
      { "question": "Qual é o tamanho de uma miniatura do YouTube?", "answer": "O YouTube pede uma imagem em 16:9 o maior possível: ele recomenda 3840 × 2160 pixels, com largura mínima de 640 pixels." },
      { "question": "Qual é o limite de tamanho do arquivo?", "answer": "2 MB ao enviar pelo celular e 50 MB pelo computador." },
      { "question": "Qual tamanho devo escolher?", "answer": "1280 × 720 funciona em qualquer lugar e é suficiente para a maioria das imagens. Escolha 4K se a sua imagem for pelo menos desse tamanho; ampliar uma imagem menor não acrescenta detalhes." },
      { "question": "Posso adicionar texto à miniatura?", "answer": "Sim. Ative “Colocar texto na imagem” para escrever um título: escolha a fonte, o tamanho, a cor, um contorno ou uma caixa atrás, e arraste-o para o lugar. Você pode adicionar vários textos. O canto sombreado mostra onde o YouTube coloca a duração do vídeo." }
    ]
  },
  "youtube-banner-maker": {
    "name": "Criador de banner do YouTube",
    "shortName": "Banner do YouTube",
    "tagline": "Crie um banner de canal do YouTube de 2560 × 1440, com uma guia do que cada dispositivo mostra. Grátis e roda no seu dispositivo.",
    "intro": "O Criador de banner do YouTube ajusta a imagem aos 2560 × 1440 que o YouTube recomenda para a arte do canal. Celulares e computadores mostram só uma faixa no meio, enquanto as TVs mostram tudo, então uma guia tracejada marca a faixa sempre visível. Mantenha seu nome e seu logo dentro dela. O arquivo fica abaixo do limite de 6 MB do YouTube. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Criar banner do YouTube – 2560×1440, área segura, grátis",
    "seoDescription": "Crie um banner de canal do YouTube de 2560×1440 com guia de área segura que mostra o que aparece em celulares e computadores. Grátis, sem cadastro e sem upload.",
    "keywords": ["criar banner do youtube", "tamanho de banner do youtube", "tamanho da arte do canal do youtube", "banner 2560x1440", "área segura banner youtube"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Escolha uma imagem larga e de alta resolução." },
      { "title": "Posicione", "description": "Arraste para que a parte importante fique dentro da faixa tracejada." },
      { "title": "Baixe", "description": "Salve e envie em Personalização, no YouTube Studio." }
    ],
    "features": [
      { "title": "Guia de área segura", "description": "Marca a faixa de 1546 × 423 que todos os dispositivos mostram. Ela não é salva na imagem." },
      { "title": "Abaixo do limite de envio", "description": "Arquivos JPG e WebP ficam abaixo de 6 MB automaticamente." },
      { "title": "Privado", "description": "Sua imagem fica no seu dispositivo." }
    ],
    "faqs": [
      { "question": "Qual é o tamanho de um banner do YouTube?", "answer": "O YouTube recomenda 2560 × 1440 pixels. A área segura em todos os dispositivos são os 1546 × 423 pixels do meio." },
      { "question": "Por que meu banner aparece cortado no celular?", "answer": "Cada dispositivo mostra uma parte diferente. Celulares e computadores mostram só a faixa do meio, então mantenha textos e logos ali." },
      { "question": "Minha imagem parece sem nitidez. Por quê?", "answer": "2560 pixels de largura é bastante, e imagens menores precisam ser ampliadas. Comece com a imagem de maior resolução que você tiver." }
    ]
  },
  "facebook-cover-maker": {
    "name": "Criador de capa do Facebook",
    "shortName": "Capa do Facebook",
    "tagline": "Deixe uma imagem no tamanho certo para capa ou post do Facebook. Grátis e roda no seu dispositivo.",
    "intro": "O Criador de capa do Facebook ajusta a imagem ao tamanho de 851 × 315 que o Facebook recomenda para capas. O Facebook mostra as capas em formatos diferentes no computador e no celular, então mantenha rostos e textos perto do meio. Também há o tamanho comum de 1200 × 630 para posts com link e imagem. Arraste a imagem até ela ficar boa e baixe. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Criar capa do Facebook – 851×315, grátis",
    "seoDescription": "Redimensione uma imagem para capa (851×315) ou post (1200×630) do Facebook. Arraste para posicionar e baixe. Grátis, sem cadastro e sem upload.",
    "keywords": ["tamanho de capa do facebook", "criar capa do facebook", "redimensionar imagem para capa do facebook", "851x315", "tamanho de imagem para post do facebook"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha uma imagem larga." },
      { "title": "Escolha e posicione", "description": "Escolha capa ou post e arraste a imagem para o lugar." },
      { "title": "Baixe", "description": "Salve e envie para o seu perfil ou página." }
    ],
    "features": [
      { "title": "O tamanho recomendado pelo Facebook", "description": "851 × 315 pixels para capas." },
      { "title": "Tamanhos de capa e post", "description": "851 × 315 para capas e 1200 × 630 para posts." },
      { "title": "Privado", "description": "Sua imagem nunca é enviada." }
    ],
    "faqs": [
      { "question": "Qual é o tamanho da foto de capa do Facebook?", "answer": "O Facebook diz que 851 × 315 pixels é o que carrega mais rápido, como JPG sRGB abaixo de 100 KB. O mínimo é 400 × 150 pixels." },
      { "question": "Por que minha capa fica diferente no celular?", "answer": "O Facebook mostra as capas em outro formato nos celulares (2,4:1), e sua foto de perfil sobrepõe um pouco a capa. Mantenha rostos e textos perto do meio e confira nos dois depois de enviar." },
      { "question": "Como deixar abaixo de 100 KB?", "answer": "Salve como JPG e reduza a qualidade até o tamanho mostrado ficar abaixo de 100 KB. Abaixo de 100 KB é a orientação do Facebook para carregar rápido, não um limite." }
    ]
  },
  "linkedin-banner-maker": {
    "name": "Criador de banner do LinkedIn",
    "shortName": "Banner do LinkedIn",
    "tagline": "Crie um banner de perfil do LinkedIn de 1584 × 396 com qualquer imagem. Grátis e roda no seu dispositivo.",
    "intro": "O Criador de banner do LinkedIn corta a imagem no formato bem largo de 1584 × 396 do banner de perfil do LinkedIn. Arraste a imagem para cima e para baixo para escolher a faixa que você quer e dê zoom se precisar. Também há o tamanho de 1200 × 627 para posts com link e imagem. Sua foto de perfil cobre parte do canto inferior esquerdo do banner, então deixe os detalhes importantes longe dali. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Criar banner do LinkedIn – 1584×396, grátis",
    "seoDescription": "Crie um banner de perfil do LinkedIn de 1584×396 ou uma imagem de post de 1200×627 com qualquer imagem. Arraste para posicionar. Grátis e sem upload.",
    "keywords": ["tamanho de banner do linkedin", "tamanho da foto de fundo do linkedin", "criar banner do linkedin", "1584x396", "imagem de capa do linkedin"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha uma imagem." },
      { "title": "Escolha a faixa", "description": "Arraste para cima e para baixo até a parte desejada ficar no quadro." },
      { "title": "Baixe", "description": "Salve e adicione ao seu perfil do LinkedIn." }
    ],
    "features": [
      { "title": "Tamanhos de banner e post", "description": "1584 × 396 para banners de perfil e 1200 × 627 para posts." },
      { "title": "Arraste ou use os controles", "description": "Posicione a imagem com mouse, toque ou teclado." },
      { "title": "Privado", "description": "Sua imagem fica no seu dispositivo." }
    ],
    "faqs": [
      { "question": "Qual é o tamanho de um banner do LinkedIn?", "answer": "1584 × 396 pixels para um perfil pessoal, no formato 4:1." },
      { "question": "O que minha foto de perfil cobre?", "answer": "Ela se sobrepõe ao canto inferior esquerdo do banner, então evite colocar textos ou rostos ali." },
      { "question": "Isso funciona para páginas de empresa?", "answer": "As páginas de empresa usam outro formato, então este banner seria cortado nelas." }
    ]
  },
  "pinterest-pin-resizer": {
    "name": "Redimensionar pin do Pinterest",
    "shortName": "Pin do Pinterest",
    "tagline": "Redimensione uma imagem para o formato alto de 1000 × 1500 dos pins do Pinterest. Grátis e roda no seu dispositivo.",
    "intro": "O Redimensionar pin do Pinterest deixa a imagem em 1000 × 1500, o formato alto 2:3 que o Pinterest recomenda para pins. Corte para preencher o quadro e arraste para escolher o que aparece, ou mantenha uma foto larga inteira sobre um fundo desfocado ou colorido. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Tamanho de pin do Pinterest – 1000×1500, grátis",
    "seoDescription": "Redimensione imagens para 1000×1500 para pins do Pinterest. Corte para preencher ou mantenha a imagem inteira sobre um fundo. Grátis, sem cadastro e sem upload.",
    "keywords": ["tamanho de pin do pinterest", "tamanho de imagem do pinterest", "redimensionar imagem para pinterest", "1000x1500", "criar pin do pinterest"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha uma foto ou arte." },
      { "title": "Ajuste", "description": "Preencha o quadro e arraste, ou mostre a imagem inteira sobre um fundo." },
      { "title": "Baixe", "description": "Salve o arquivo de 1000 × 1500 e crie o pin." }
    ],
    "features": [
      { "title": "O formato recomendado", "description": "1000 × 1500 pixels, no formato 2:3." },
      { "title": "Fotos largas inteiras", "description": "Mostre tudo sobre uma cópia desfocada da própria foto ou sobre uma cor." },
      { "title": "Privado", "description": "Sua imagem é processada no seu dispositivo." }
    ],
    "faqs": [
      { "question": "Qual deve ser o tamanho de um pin do Pinterest?", "answer": "O Pinterest recomenda o formato 2:3, como 1000 × 1500 pixels." },
      { "question": "Posso usar uma foto horizontal?", "answer": "Sim. Escolha “Mostrar tudo” para manter a foto inteira, ou preencha o quadro e escolha a parte que quer manter." },
      { "question": "Minha imagem é enviada?", "answer": "Não. Ela fica no seu dispositivo." }
    ]
  },
  "open-graph-image-maker": {
    "name": "Criador de imagem Open Graph",
    "shortName": "Imagem Open Graph",
    "tagline": "Crie a imagem de 1200 × 630 que aparece quando um link é compartilhado. Grátis e roda no seu dispositivo.",
    "intro": "O Criador de imagem Open Graph prepara a imagem que aparece quando alguém compartilha sua página nas redes sociais ou em um app de mensagens. Ele ajusta qualquer imagem ao tamanho bastante usado de 1200 × 630. Depois de colocá-la no seu site, aponte a tag og:image da página para ela. Você também pode adicionar texto, como um título ou um nome, com a fonte, a cor e o contorno que escolher.",
    "seoTitle": "Criar imagem Open Graph – 1200×630 og:image, grátis",
    "seoDescription": "Crie uma imagem Open Graph de 1200×630 para prévias de link em redes sociais e apps de mensagens. Arraste para posicionar e baixe. Grátis e sem upload.",
    "keywords": ["tamanho de imagem open graph", "gerador de imagem og", "tamanho og:image", "1200x630", "imagem de prévia de link"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha uma imagem ou arte." },
      { "title": "Posicione", "description": "Arraste e dê zoom até ficar bom." },
      { "title": "Baixe e vincule", "description": "Envie o arquivo para o seu site e defina-o como og:image da página." }
    ],
    "features": [
      { "title": "O tamanho usual de prévia", "description": "1200 × 630 pixels, usado pelas principais redes e apps de mensagens." },
      { "title": "Arquivos pequenos", "description": "Salvos com codificadores eficientes, para que as prévias carreguem rápido." },
      { "title": "Privado", "description": "Sua imagem nunca é enviada." }
    ],
    "faqs": [
      { "question": "O que é uma imagem Open Graph?", "answer": "A imagem mostrada no cartão de prévia quando um link da sua página é compartilhado. Você a define com uma tag og:image no HTML da página." },
      { "question": "Qual deve ser o tamanho?", "answer": "1200 × 630 pixels é a escolha comum, um formato de cerca de 1,91:1." },
      { "question": "Como uso o arquivo?", "answer": "Envie-o para o seu site e adicione <meta property=\"og:image\" content=\"the full URL of the image\"> à sua página." }
    ]
  },
  "pixels-to-inches": {
    "name": "Pixels para polegadas",
    "shortName": "Pixels → polegadas",
    "tagline": "Converta pixels em polegadas em qualquer DPI. Grátis e sem instalar nada.",
    "intro": "O Pixels para polegadas mostra quanto uma quantidade de pixels mede em polegadas. Um pixel não tem tamanho fixo, então a resposta depende do DPI, o número de pixels por polegada: divida os pixels pelo DPI. Digite um valor em qualquer campo e os outros acompanham, incluindo centímetros e milímetros.",
    "seoTitle": "Converter pixels para polegadas – Qualquer DPI, grátis",
    "seoDescription": "Converta pixels para polegadas em 72, 96, 150, 300 ou qualquer DPI, também com centímetros e milímetros. Grátis, instantâneo e sem cadastro.",
    "keywords": ["pixels para polegadas", "px para polegadas", "converter pixels em polegadas", "quantas polegadas são 1000 pixels", "pixels para polegadas 300 dpi"],
    "howToSteps": [
      { "title": "Digite os pixels", "description": "Digite o número de pixels." },
      { "title": "Escolha um DPI", "description": "Escolha um valor comum ou digite o seu." },
      { "title": "Veja o resultado", "description": "Veja polegadas, centímetros e milímetros na hora." }
    ],
    "features": [
      { "title": "Funciona em todas as direções", "description": "Digite em qualquer campo e os outros são atualizados." },
      { "title": "Qualquer DPI", "description": "Valores comuns a um toque, ou digite o seu." },
      { "title": "Tabela prática", "description": "Valores comuns no DPI escolhido." }
    ],
    "faqs": [
      { "question": "Como converter pixels em polegadas?", "answer": "Divida os pixels pelo DPI. Por exemplo, 3000 pixels a 300 DPI são 3000 ÷ 300 = 10 polegadas." },
      { "question": "Quantos pixels há em uma polegada?", "answer": "Tantos quanto o DPI: 96 a 96 DPI, 300 a 300 DPI. Um pixel não tem tamanho físico fixo." },
      { "question": "Qual DPI devo usar?", "answer": "Use 300 para impressões de qualidade e 150 para impressões do dia a dia. Para telas, 96 é o valor usual na web, e 72 é uma convenção mais antiga." }
    ]
  },
  "inches-to-pixels": {
    "name": "Polegadas para pixels",
    "shortName": "Polegadas → pixels",
    "tagline": "Descubra quantos pixels um tamanho impresso precisa em qualquer DPI. Grátis e sem instalar nada.",
    "intro": "O Polegadas para pixels mostra quantos pixels você precisa para preencher um tamanho em polegadas. Multiplique as polegadas pelo DPI: uma impressão de 6 polegadas a 300 DPI precisa de 1800 pixels. É útil para conferir se uma foto é grande o bastante para imprimir e para configurar um documento no tamanho certo.",
    "seoTitle": "Converter polegadas para pixels – Qualquer DPI, grátis",
    "seoDescription": "Converta polegadas para pixels em 72, 96, 150, 300 ou qualquer DPI e veja quantos pixels uma impressão precisa. Grátis, instantâneo e sem cadastro.",
    "keywords": ["polegadas para pixels", "polegada para px", "converter polegadas em pixels", "quantos pixels são 8 polegadas", "polegadas para pixels 300 dpi"],
    "howToSteps": [
      { "title": "Digite as polegadas", "description": "Digite o tamanho em polegadas." },
      { "title": "Escolha um DPI", "description": "300 para impressões de qualidade; ou digite o seu." },
      { "title": "Veja os pixels", "description": "Veja os pixels necessários, além de centímetros e milímetros." }
    ],
    "features": [
      { "title": "Planejamento de impressão", "description": "Veja na hora quantos pixels uma impressão precisa." },
      { "title": "Funciona em todas as direções", "description": "Digite em qualquer campo e os outros são atualizados." },
      { "title": "Tabela prática", "description": "Tamanhos comuns no DPI escolhido." }
    ],
    "faqs": [
      { "question": "Como converter polegadas em pixels?", "answer": "Multiplique as polegadas pelo DPI. Por exemplo, 8 polegadas a 300 DPI são 8 × 300 = 2400 pixels." },
      { "question": "Quantos pixels preciso para uma foto 4 × 6?", "answer": "A 300 DPI, 1200 × 1800 pixels." },
      { "question": "E se minha foto tiver menos pixels?", "answer": "Ela ainda pode ser impressa, mas com DPI menor, então pode ficar menos nítida. Abaixo de cerca de 150 DPI, a falta de nitidez costuma ser visível de perto." }
    ]
  },
  "pixels-to-cm": {
    "name": "Pixels para cm",
    "shortName": "Pixels → cm",
    "tagline": "Converta pixels em centímetros em qualquer DPI. Grátis e sem instalar nada.",
    "intro": "O Pixels para cm mostra quanto uma quantidade de pixels mede em centímetros. Divida os pixels pelo DPI e multiplique por 2,54, já que uma polegada tem 2,54 cm. Digite um valor em qualquer campo e as polegadas e os milímetros também são atualizados.",
    "seoTitle": "Converter pixels para cm – Qualquer DPI, grátis",
    "seoDescription": "Converta pixels para centímetros em 72, 96, 150, 300 ou qualquer DPI, também com polegadas e milímetros. Grátis, instantâneo e sem cadastro.",
    "keywords": ["pixels para cm", "px para cm", "converter pixels em centímetros", "pixels para cm 300 dpi", "quantos cm são 1000 pixels"],
    "howToSteps": [
      { "title": "Digite os pixels", "description": "Digite o número de pixels." },
      { "title": "Escolha um DPI", "description": "Escolha um valor comum ou digite o seu." },
      { "title": "Veja o resultado", "description": "Veja centímetros, polegadas e milímetros na hora." }
    ],
    "features": [
      { "title": "Funciona em todas as direções", "description": "Digite em qualquer campo e os outros são atualizados." },
      { "title": "Qualquer DPI", "description": "Valores comuns a um toque, ou digite o seu." },
      { "title": "Tabela prática", "description": "Valores comuns no DPI escolhido." }
    ],
    "faqs": [
      { "question": "Como converter pixels em centímetros?", "answer": "Centímetros = pixels ÷ DPI × 2,54. Por exemplo, 1000 pixels a 300 DPI são cerca de 8,47 cm." },
      { "question": "Quantos pixels há em um centímetro?", "answer": "DPI ÷ 2,54. São cerca de 118 pixels por cm a 300 DPI e cerca de 38 a 96 DPI." },
      { "question": "Por que preciso de um DPI?", "answer": "Um pixel não tem tamanho fixo. O DPI diz quantos cabem em cada polegada ao imprimir ou exibir." }
    ]
  },
  "cm-to-pixels": {
    "name": "Cm para pixels",
    "shortName": "Cm → pixels",
    "tagline": "Descubra quantos pixels um tamanho em centímetros precisa em qualquer DPI. Grátis e sem instalar nada.",
    "intro": "O Cm para pixels mostra quantos pixels preenchem um tamanho em centímetros. Divida por 2,54 para obter polegadas e multiplique pelo DPI: 10 cm a 300 DPI são cerca de 1181 pixels. É útil quando um formulário ou uma gráfica informa os tamanhos em centímetros.",
    "seoTitle": "Converter cm para pixels – Qualquer DPI, grátis",
    "seoDescription": "Converta centímetros para pixels em 72, 96, 150, 300 ou qualquer DPI e veja quantos pixels uma impressão precisa. Grátis, instantâneo e sem cadastro.",
    "keywords": ["cm para pixels", "cm para px", "converter centímetros em pixels", "cm para pixels 300 dpi", "quantos pixels são 10 cm"],
    "howToSteps": [
      { "title": "Digite os centímetros", "description": "Digite o tamanho em centímetros." },
      { "title": "Escolha um DPI", "description": "300 para impressões de qualidade; ou digite o seu." },
      { "title": "Veja os pixels", "description": "Veja os pixels necessários, além de polegadas e milímetros." }
    ],
    "features": [
      { "title": "Planejamento de impressão", "description": "Veja na hora quantos pixels um tamanho precisa." },
      { "title": "Funciona em todas as direções", "description": "Digite em qualquer campo e os outros são atualizados." },
      { "title": "Tabela prática", "description": "Tamanhos comuns no DPI escolhido, incluindo larguras A4." }
    ],
    "faqs": [
      { "question": "Como converter centímetros em pixels?", "answer": "Pixels = cm ÷ 2,54 × DPI. Por exemplo, 21 cm a 300 DPI são cerca de 2480 pixels." },
      { "question": "Quantos pixels tem o A4 a 300 DPI?", "answer": "O A4 tem 21 × 29,7 cm, o que dá cerca de 2480 × 3508 pixels a 300 DPI." },
      { "question": "E um formulário que pede 3,5 × 4,5 cm?", "answer": "A 300 DPI, são cerca de 413 × 531 pixels. O Foto para passaporte pode criá-la para você." }
    ]
  },
  "resolution-calculator": {
    "name": "Calculadora de resolução",
    "shortName": "Resolução",
    "tagline": "Veja o tamanho de impressão de uma imagem em cada DPI, além dos megapixels e da proporção. Grátis e sem instalar nada.",
    "intro": "A Calculadora de resolução responde à pergunta “em que tamanho posso imprimir isto?”. Digite a largura e a altura da imagem em pixels para ver o tamanho de impressão em cada DPI comum, além dos megapixels e da proporção. Como referência, 300 DPI fica nítido na mão, enquanto pôsteres grandes vistos de longe podem usar menos.",
    "seoTitle": "Calculadora de resolução – Tamanho de impressão e DPI",
    "seoDescription": "Digite o tamanho em pixels de uma imagem para ver o tamanho de impressão em cada DPI, os megapixels e a proporção. Grátis, instantâneo e sem cadastro.",
    "keywords": ["calculadora de resolução de imagem", "calculadora de tamanho de impressão", "calculadora de dpi", "em que tamanho posso imprimir", "megapixels para tamanho de impressão"],
    "howToSteps": [
      { "title": "Digite o tamanho em pixels", "description": "Digite a largura e a altura da imagem em pixels." },
      { "title": "Escolha um DPI", "description": "Escolha a qualidade de impressão que você busca." },
      { "title": "Veja os resultados", "description": "Veja o tamanho de impressão em polegadas e centímetros, os megapixels e a proporção." }
    ],
    "features": [
      { "title": "Tamanho de impressão em cada DPI", "description": "Uma tabela de 72 a 600 DPI, em polegadas e centímetros." },
      { "title": "Megapixels e formato", "description": "Veja a contagem de megapixels e a proporção, como 4:3 ou 16:9." },
      { "title": "Nada para enviar", "description": "A ferramenta só precisa dos números." }
    ],
    "faqs": [
      { "question": "Em que tamanho posso imprimir uma foto de 12 megapixels?", "answer": "Uma foto de 4000 × 3000 é impressa em cerca de 13,3 × 10 polegadas (34 × 25 cm) a 300 DPI." },
      { "question": "De quanto DPI preciso para imprimir?", "answer": "300 DPI é a meta usual para fotos vistas de perto. 150 DPI serve para muitas impressões do dia a dia, e pôsteres grandes vistos de longe podem usar menos." },
      { "question": "Onde encontro o tamanho em pixels da minha imagem?", "answer": "Nas propriedades do arquivo no computador, ou use o Analisador de imagem neste site." }
    ]
  },
  "color-blindness-simulator": {
    "name": "Simulador de daltonismo",
    "shortName": "Daltonismo",
    "tagline": "Veja como uma imagem, um gráfico ou um design aparece em cada tipo de daltonismo. Grátis e roda no seu dispositivo.",
    "intro": "O Simulador de daltonismo mostra como uma imagem pode parecer para pessoas com deficiência na visão de cores, que afeta cerca de 1 em cada 12 homens e 1 em cada 200 mulheres. Use para conferir se gráficos, mapas, botões e designs continuam fazendo sentido quando é difícil distinguir vermelho e verde, ou azul e amarelo. Ele cobre sete tipos, com base em um modelo científico publicado.",
    "seoTitle": "Simulador de daltonismo – Teste suas imagens, grátis",
    "seoDescription": "Veja como uma imagem aparece com deuteranopia, protanopia, tritanopia e outros tipos de daltonismo. Grátis, sem cadastro e sua imagem não é enviada.",
    "keywords": ["simulador de daltonismo", "imagem teste daltonismo", "simulador de deuteranopia", "simulador de protanopia", "verificar design para daltonismo"],
    "howToSteps": [
      { "title": "Adicione sua imagem", "description": "Arraste ou escolha um gráfico, captura de tela, design ou foto." },
      { "title": "Escolha um tipo", "description": "Alterne entre os tipos e volte ao original para comparar." },
      { "title": "Baixe, se quiser", "description": "Salve a imagem simulada em PNG para compartilhar com sua equipe." }
    ],
    "features": [
      { "title": "Sete tipos", "description": "Fraqueza e ausência de vermelho, verde e azul, além da ausência total de cor." },
      { "title": "Baseado em pesquisa", "description": "Usa o modelo de Machado, Oliveira e Fernandes (2009)." },
      { "title": "Privado", "description": "Sua imagem é processada no seu dispositivo e nunca é enviada." }
    ],
    "faqs": [
      { "question": "Qual é o tipo mais comum?", "answer": "A deuteranomalia, uma sensibilidade reduzida ao verde, é de longe a mais comum." },
      { "question": "É exatamente isso que uma pessoa daltônica vê?", "answer": "É uma estimativa próxima. A visão de cores e a intensidade variam de pessoa para pessoa, então use como guia e teste com usuários reais quando for importante." },
      { "question": "Isto é um teste de daltonismo?", "answer": "Não. Mostra como as imagens podem aparecer, mas não diagnostica nada. Um oftalmologista pode avaliar sua visão de cores." },
      { "question": "Como faço meu design funcionar para todos?", "answer": "Não dependa só da cor. Adicione rótulos, padrões ou ícones e escolha cores que diferem em luminosidade e também em matiz." }
    ]
  },
  "morse-code-translator": {
    name: "Tradutor de código Morse",
    shortName: "Código Morse",
    tagline: "Traduza texto para código Morse e Morse de volta para texto, ouça e salve como áudio ou imagem. Grátis, no seu dispositivo.",
    intro: "O Tradutor de código Morse transforma texto em código Morse internacional e Morse de volta em texto enquanto você digita. Toque como som na velocidade e no tom que escolher e baixe como arquivo de áudio WAV ou como imagem dos pontos e traços para um cartão, pôster ou quebra-cabeça. Ele segue o padrão internacional (ITU) para letras, números e pontuação.",
    seoTitle: "Tradutor de código Morse – Texto, áudio e imagem",
    seoDescription: "Traduza texto para código Morse e vice-versa, ouça o som e baixe o áudio em WAV ou uma imagem PNG. Grátis, sem cadastro e funciona no navegador.",
    keywords: [
      "tradutor de código morse",
      "código morse tradutor",
      "texto para código morse",
      "código morse para texto",
      "código morse áudio"
    ],
    howToSteps: [
      {
        title: "Digite ou cole",
        description: "Digite o texto na caixa de cima ou cole código Morse em qualquer uma das caixas; a outra é atualizada."
      },
      {
        title: "Ouça",
        description: "Toque em Tocar som e ajuste a velocidade e o tom como preferir."
      },
      {
        title: "Baixe",
        description: "Salve o Morse como arquivo de áudio WAV ou como imagem PNG dos pontos e traços."
      }
    ],
    features: [
      {
        title: "Nos dois sentidos",
        description: "De texto para Morse e de Morse para texto, atualizado enquanto você digita."
      },
      {
        title: "Padrão internacional",
        description: "Letras, números e pontuação conforme definidos pela ITU."
      },
      {
        title: "Som e imagem",
        description: "Toque o código, baixe um arquivo WAV ou salve um PNG."
      }
    ],
    faqs: [
      {
        question: "Como escrevo código Morse aqui?",
        answer: "Use pontos (.) e traços (-). Coloque um espaço entre as letras e uma barra (/) entre as palavras, por exemplo ... --- ... para SOS."
      },
      {
        question: "Que velocidade devo usar?",
        answer: "Cerca de 5 a 10 palavras por minuto é bom para iniciantes; operadores experientes costumam transmitir a 20 ou mais. A velocidade segue o padrão internacional PARIS."
      },
      {
        question: "Quais caracteres existem no Morse?",
        answer: "Letras de A a Z, números de 0 a 9 e a pontuação mais comum. Letras com acento são escritas sem o acento, e os caracteres sem código Morse são listados e deixados de fora."
      },
      {
        question: "Meu texto é enviado para algum lugar?",
        answer: "Não. A tradução, o som e os downloads acontecem no seu dispositivo."
      }
    ]
  },
  "hide-text-in-image": {
    name: "Esconder texto em imagem",
    shortName: "Esconder texto",
    tagline: "Esconda uma mensagem secreta dentro de uma imagem, com senha opcional, e leia depois. Grátis, no seu dispositivo.",
    intro: "O Esconder texto em imagem grava uma mensagem nos pixels de uma imagem (esteganografia). A imagem continua igual, porque cada valor de cor muda no máximo 1, mas a mensagem pode ser lida aqui com a mesma ferramenta. Adicione uma senha para criptografá-la com AES-256. O resultado é um PNG, porque só um arquivo sem perdas preserva a mensagem: uma cópia em JPG, um redimensionamento ou um app de mensagens que recomprime as imagens a apaga.",
    seoTitle: "Esconder texto em imagem – Esteganografia online grátis",
    seoDescription: "Esconda uma mensagem secreta em uma imagem e leia depois, com criptografia por senha opcional. Grátis, sem cadastro e sua imagem não é enviada.",
    keywords: [
      "esconder texto em imagem",
      "esteganografia online",
      "esconder mensagem em foto",
      "mensagem secreta em imagem",
      "ler mensagem escondida em imagem"
    ],
    howToSteps: [
      {
        title: "Adicione uma imagem",
        description: "Escolha Esconder uma mensagem e arraste ou escolha uma foto."
      },
      {
        title: "Escreva a mensagem",
        description: "Digite sua mensagem e, se quiser, uma senha."
      },
      {
        title: "Baixe e compartilhe o PNG",
        description: "Envie o PNG como arquivo. Para ler, abra-o aqui e escolha Ler uma mensagem."
      }
    ],
    features: [
      {
        title: "Aparência igual",
        description: "Cada valor de cor muda no máximo 1, o que o olho não percebe."
      },
      {
        title: "Senha opcional",
        description: "Criptografia AES-256; sem a senha, a mensagem não pode ser lida."
      },
      {
        title: "Verificado antes do download",
        description: "O PNG salvo é lido de novo para garantir que a mensagem foi preservada."
      }
    ],
    faqs: [
      {
        question: "Por que minha mensagem sumiu?",
        answer: "A imagem foi alterada depois de salva: convertida para JPG, redimensionada ou recomprimida por um app de mensagens ou rede social. Compartilhe o PNG como arquivo, ou em um zip, para que chegue sem alterações."
      },
      {
        question: "Qual o tamanho máximo da mensagem?",
        answer: "Cerca de 3 bytes a cada 8 pixels: uma foto de 12 megapixels comporta vários megabytes, muito mais do que qualquer texto. A ferramenta mostra quanto espaço ainda resta."
      },
      {
        question: "É seguro?",
        answer: "Com senha, a mensagem é criptografada com AES-256, então só quem tem a senha consegue lê-la. Sem senha, qualquer pessoa que use uma ferramenta de esteganografia como esta pode encontrá-la. Esconder uma mensagem não é o mesmo que um sigilo forte, então use uma senha para tudo o que for privado."
      },
      {
        question: "Minha imagem é enviada para algum lugar?",
        answer: "Não. Esconder, criptografar e ler acontecem no seu dispositivo."
      }
    ]
  },
  "halftone-dither-effect": {
    name: "Efeito meio-tom e dithering",
    shortName: "Meio-tom e dithering",
    tagline: "Transforme uma foto em pontos de meio-tom estilo jornal ou em uma imagem retrô com dithering. Grátis e roda no seu dispositivo.",
    intro: "O Efeito meio-tom e dithering dá a uma foto a aparência de material impresso ou dos primeiros computadores. O meio-tom redesenha a imagem como pontos que crescem conforme a área fica mais escura, em preto ou nas quatro tintas de impressão (CMYK) com seus ângulos de retícula clássicos. O dithering reduz a imagem a poucas cores e distribui os tons com Floyd–Steinberg, Atkinson ou um padrão Bayer ordenado, com paletas que vão do preto e branco ao verde do Game Boy. Ajuste o detalhe, o brilho e o contraste e baixe um PNG em tamanho real.",
    seoTitle: "Efeito meio-tom e dithering – Foto em pontos, grátis",
    seoDescription: "Transforme uma foto em pontos de meio-tom ou em imagem com dithering: Floyd–Steinberg, Atkinson, Bayer e paletas Game Boy e CGA. Grátis, sem upload.",
    keywords: [
      "efeito halftone",
      "efeito meio-tom foto",
      "dithering online",
      "floyd steinberg dithering",
      "filtro game boy"
    ],
    howToSteps: [
      {
        title: "Adicione sua foto",
        description: "Arraste ou escolha um JPG, PNG, WebP, HEIC ou TIFF."
      },
      {
        title: "Escolha o visual",
        description: "Escolha Pontos de meio-tom ou Dithering e depois as cores, o detalhe e o contraste."
      },
      {
        title: "Baixe",
        description: "Salve o resultado em tamanho real como PNG."
      }
    ],
    features: [
      {
        title: "Retículas de impressão reais",
        description: "Pontos CMYK nos ângulos de 15°, 75°, 0° e 45° usados nas gráficas."
      },
      {
        title: "Dithering clássico",
        description: "Floyd–Steinberg, Atkinson e Bayer ordenado, com paletas retrô."
      },
      {
        title: "Resolução total",
        description: "A prévia é rápida; o download é gerado em tamanho real."
      }
    ],
    faqs: [
      {
        question: "Qual é a diferença entre meio-tom e dithering?",
        answer: "O meio-tom imprime os tons como pontos de tamanhos diferentes em uma grade regular, como num jornal. O dithering usa pixels de poucas cores fixas e os distribui para que o olho os misture em tons intermediários."
      },
      {
        question: "Qual método de dithering devo escolher?",
        answer: "O Floyd–Steinberg dá os tons mais suaves. O Atkinson, usado nos primeiros Macs, tem luzes e sombras mais nítidas. O ordenado (Bayer) cria um padrão regular de hachuras cruzadas."
      },
      {
        question: "Por que o resultado parece diferente de longe?",
        answer: "Os pontos e os padrões de dithering se misturam à distância; é assim que eles mostram os tons. Menos pontos na largura, ou um pixel maior, mantêm o padrão visível."
      },
      {
        question: "Minha foto é enviada para algum lugar?",
        answer: "Não. O efeito é criado no seu dispositivo."
      }
    ]
  },
  "contact-sheet-maker": {
    name: "Criador de folha de contato",
    shortName: "Folha de contato",
    tagline: "Organize muitas fotos como miniaturas com nome em páginas para imprimir, em PDF ou imagens. Grátis e roda no seu dispositivo.",
    intro: "O Criador de folha de contato coloca um conjunto de fotos em uma página, ou em quantas forem necessárias, como miniaturas com os nomes dos arquivos, como a folha de provas de um fotógrafo. Use para revisar um ensaio, escolher as favoritas com um cliente, catalogar produtos ou imprimir uma visão geral. Escolha A4 ou Carta, retrato ou paisagem e quantas fotos por linha; as páginas são criadas a 300 DPI para impressão. Baixe um PDF com várias páginas ou imagens PNG ou JPG.",
    seoTitle: "Criador de folha de contato – Miniaturas em PDF, grátis",
    seoDescription: "Crie uma folha de contato com muitas fotos e seus nomes, em páginas A4 ou Carta a 300 DPI, em PDF ou imagens. Grátis, sem cadastro e sem upload.",
    keywords: [
      "folha de contato",
      "folha de contato fotos",
      "criar folha de contato",
      "imprimir fotos em miniatura",
      "várias fotos em uma folha"
    ],
    howToSteps: [
      {
        title: "Adicione suas fotos",
        description: "Arraste ou escolha quantas fotos quiser e arraste para mudar a ordem."
      },
      {
        title: "Configure a página",
        description: "Escolha o papel, a orientação, as fotos por linha, os nomes dos arquivos e um título opcional."
      },
      {
        title: "Baixe",
        description: "Salve um PDF com todas as páginas ou imagens PNG ou JPG de cada página."
      }
    ],
    features: [
      {
        title: "Pronto para imprimir",
        description: "Páginas A4 ou Carta a 300 DPI, com margens para qualquer impressora."
      },
      {
        title: "Com legendas",
        description: "Nome do arquivo sob cada foto, números de página e um título opcional."
      },
      {
        title: "Sem cortes",
        description: "Cada foto aparece inteira, ajustada ao seu quadro."
      }
    ],
    faqs: [
      {
        question: "Quantas fotos posso adicionar?",
        answer: "Quantas o seu dispositivo conseguir abrir; as páginas são adicionadas conforme necessário. Conjuntos muito grandes de fotos grandes demoram mais e usam mais memória."
      },
      {
        question: "As fotos são cortadas?",
        answer: "Não. Cada foto é ajustada dentro do seu quadro, então fotos em retrato e em paisagem aparecem inteiras."
      },
      {
        question: "Qual é a resolução das páginas?",
        answer: "300 DPI, a qualidade usual para impressão. Uma página A4 tem 2480 × 3508 pixels."
      },
      {
        question: "Minhas fotos são enviadas para algum lugar?",
        answer: "Não. A folha é criada no seu dispositivo."
      }
    ]
  },
  "booklet-maker": {
    name: "Criador de livretos",
    shortName: "Livreto",
    tagline: "Reorganize um PDF na ordem de livreto para imprimir em frente e verso, dobrar e grampear. Grátis e no seu dispositivo.",
    intro: "O Criador de livretos coloca as páginas de um PDF na ordem necessária para um livreto dobrado (acabamento canoa, grampeado na dobra). Cada lado da folha recebe duas páginas, então, ao imprimir em frente e verso, dobrar a pilha ao meio e grampear ao longo da dobra, as páginas ficam na ordem certa. Páginas em branco são adicionadas no final quando o número de páginas não é múltiplo de 4. Escolha papel A4, Letter, A3 ou Tabloid, ou mantenha as páginas no tamanho original, e encadernação à direita para japonês ou árabe. As páginas continuam nítidas, como conteúdo vetorial.",
    seoTitle: "Criar livreto em PDF – Imprimir como livreto, grátis",
    seoDescription: "Transforme um PDF em livreto para imprimir: páginas organizadas para frente e verso, dobra e grampo. A4, Letter, A3. Grátis e sem upload.",
    keywords: [
      "criar livreto pdf",
      "imprimir pdf como livreto",
      "pdf para livreto",
      "imprimir livreto frente e verso",
      "livreto grampeado canoa"
    ],
    howToSteps: [
      {
        title: "Adicione o PDF",
        description: "Arraste ou escolha o PDF que você quer transformar em livreto."
      },
      {
        title: "Escolha o papel",
        description: "Selecione o papel em que vai imprimir e o lado da encadernação, e confira as folhas na prévia."
      },
      {
        title: "Imprima e dobre",
        description: "Baixe o PDF, imprima em frente e verso virando na borda curta, depois dobre e grampeie."
      }
    ],
    features: [
      {
        title: "Ordem certa das páginas",
        description: "As páginas são organizadas para que o livreto dobrado fique 1, 2, 3…, com páginas em branco no final."
      },
      {
        title: "Páginas nítidas",
        description: "As páginas entram como conteúdo vetorial, então o texto não vira imagem."
      },
      {
        title: "Encadernação à esquerda ou à direita",
        description: "Encadernação à direita para idiomas lidos da direita para a esquerda."
      }
    ],
    faqs: [
      {
        question: "Como imprimo o livreto?",
        answer: "Imprima o PDF baixado em frente e verso com “Virar na borda curta”, em tamanho real. Mantenha as folhas em ordem, dobre a pilha ao meio e grampeie ao longo da dobra."
      },
      {
        question: "Por que foram adicionadas páginas em branco?",
        answer: "Cada folha comporta 4 páginas (2 de cada lado), então o número de páginas é arredondado para um múltiplo de 4. As páginas em branco ficam no final."
      },
      {
        question: "Minhas páginas vão ficar menores?",
        answer: "No mesmo tamanho de papel, sim: duas páginas dividem um lado, então páginas A4 são impressas em tamanho A5. Escolha “Manter o tamanho da página” ou um papel maior, como A3, para mantê-las no tamanho original."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. O livreto é criado no seu dispositivo."
      }
    ]
  },
  "n-up-pdf": {
    name: "Várias páginas por folha em PDF",
    shortName: "N-up PDF",
    tagline: "Coloque 2, 4, 6, 8, 9 ou 16 páginas de PDF em cada folha para economizar papel ou fazer apostilas. Grátis e roda no seu dispositivo.",
    intro: "Esta ferramenta coloca várias páginas de um PDF em cada folha (impressão N-up), no maior tamanho possível: 2 slides lado a lado, 4 páginas em grade, até 16 por folha. Use para imprimir slides de aula como apostila, revisar um documento em menos folhas ou economizar papel. A folha gira conforme as páginas, a ordem pode seguir na horizontal ou para baixo, e você pode adicionar espaço e bordas finas entre as páginas. As páginas continuam nítidas, como conteúdo vetorial.",
    seoTitle: "Várias páginas por folha em PDF (N-up) – Grátis",
    seoDescription: "Imprima várias páginas de PDF em uma folha: 2, 4, 6, 8, 9 ou 16 por página, em A4, Letter ou A3. Grátis, sem cadastro e sem enviar o arquivo.",
    keywords: [
      "várias páginas por folha pdf",
      "2 páginas por folha pdf",
      "4 páginas por folha",
      "imprimir slides em uma folha",
      "n-up pdf"
    ],
    howToSteps: [
      {
        title: "Adicione o PDF",
        description: "Arraste ou escolha o PDF."
      },
      {
        title: "Escolha o layout",
        description: "Selecione as páginas por folha, o papel, a ordem e o espaçamento, e confira a prévia."
      },
      {
        title: "Baixe",
        description: "Salve o novo PDF e imprima em tamanho real."
      }
    ],
    features: [
      {
        title: "De 2 a 16 por folha",
        description: "A folha gira para a posição que mostra as páginas no maior tamanho."
      },
      {
        title: "Páginas nítidas",
        description: "As páginas entram como conteúdo vetorial, não como imagens."
      },
      {
        title: "Layout do seu jeito",
        description: "Ordem na horizontal ou para baixo, espaçamento e bordas opcionais."
      }
    ],
    faqs: [
      {
        question: "Qual layout devo usar para slides?",
        answer: "2 por folha mantém os slides legíveis; 4 ou 6 por folha servem bem para apostilas. A ferramenta gira a folha para encaixar melhor os slides largos."
      },
      {
        question: "Posso manter o tamanho original da página?",
        answer: "Sim. Escolha “Igual às páginas” para usar o tamanho da primeira página como tamanho da folha."
      },
      {
        question: "Funciona com páginas de tamanhos diferentes?",
        answer: "Sim. Cada página é encaixada no seu espaço sem ser cortada nem esticada."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. O novo PDF é criado no seu dispositivo."
      }
    ]
  },
  "poster-splitter": {
    name: "Divisor de pôster",
    shortName: "Divisor de pôster",
    tagline: "Divida uma imagem em várias páginas e imprima numa impressora comum para montar um pôster grande. Grátis e no seu dispositivo.",
    intro: "O Divisor de pôster amplia uma imagem em várias páginas A4, Letter ou A3, para você imprimir um pôster grande numa impressora comum e montá-lo. Escolha quantas páginas na largura; o número de fileiras depende do formato da imagem. As páginas se sobrepõem na medida que você escolher para poder colá-las, e cada página tem marcas de corte e um rótulo, como A1 ou B2, que mostra onde ela vai. A ferramenta mostra o tamanho final do pôster e avisa quando a imagem vai ficar pouco nítida nesse tamanho.",
    seoTitle: "Dividir imagem em folhas A4 – Imprimir pôster grande",
    seoDescription: "Divida uma imagem em várias páginas A4, Letter ou A3 para imprimir um pôster grande, com sobreposição, marcas de corte e rótulos. Grátis, sem upload.",
    keywords: [
      "dividir imagem em várias folhas",
      "imprimir pôster em várias folhas a4",
      "imprimir imagem grande em várias folhas",
      "pôster em folhas a4",
      "dividir imagem para imprimir"
    ],
    howToSteps: [
      {
        title: "Adicione a imagem",
        description: "Arraste ou escolha um JPG, PNG, WebP, HEIC ou TIFF."
      },
      {
        title: "Escolha o tamanho",
        description: "Defina as páginas na largura, o papel e a sobreposição; a prévia mostra como a imagem é dividida."
      },
      {
        title: "Imprima e monte",
        description: "Imprima o PDF em tamanho real, apare as bordas que se sobrepõem e cole as páginas em ordem."
      }
    ],
    features: [
      {
        title: "Até 10 páginas na largura",
        description: "O tamanho do pôster aparece em centímetros e polegadas."
      },
      {
        title: "Sobreposição, marcas e rótulos",
        description: "Sobreposição para colar, marcas de corte e rótulos como A1, B2."
      },
      {
        title: "Qualidade original",
        description: "Imagens JPG e PNG entram no PDF sem alterações."
      }
    ],
    faqs: [
      {
        question: "Como monto o pôster?",
        answer: "Imprima em tamanho real. Apare a borda branca nos lados que se sobrepõem à página vizinha, alinhe a sobreposição e cole ou prenda as páginas com fita: A1, A2… na fileira de cima, B1, B2… logo abaixo."
      },
      {
        question: "Qual é o tamanho máximo do pôster?",
        answer: "Até 10 páginas na largura; a altura depende da imagem. Para um resultado nítido, procure ter pelo menos 100 pixels por polegada no tamanho final. A ferramenta avisa quando fica abaixo disso."
      },
      {
        question: "Por que há uma borda branca?",
        answer: "A maioria das impressoras não imprime até a beira do papel. A borda mantém a imagem dentro da área imprimível e abriga as marcas de corte e os rótulos."
      },
      {
        question: "Minha imagem é enviada para algum lugar?",
        answer: "Não. O PDF é criado no seu dispositivo."
      }
    ]
  },
  "graph-paper-maker": {
    name: "Gerador de papel quadriculado para imprimir",
    shortName: "Papel quadriculado",
    tagline: "Crie papel quadriculado para imprimir em mm ou polegadas: quadrados, pontos, isométrico, hexágonos ou pautado. Grátis, em PDF ou PNG.",
    intro: "O Gerador de papel quadriculado cria uma página de papel com grade para imprimir: quadriculado com linhas mais grossas opcionais, pontilhado para bullet journal, isométrico para desenho em 3D, hexagonal para jogos e química, ou pautado. Defina o espaçamento em milímetros ou polegadas, a cor e a espessura das linhas, o tamanho do papel e a margem. O PDF é desenhado com linhas vetoriais, então a grade fica exata e nítida quando impressa em tamanho real.",
    seoTitle: "Papel quadriculado para imprimir – Pontilhado, isométrico",
    seoDescription: "Crie papel para imprimir: quadriculado, pontilhado, isométrico, hexagonal ou pautado, em mm ou polegadas, em A4, Letter, A3 ou A5. PDF ou PNG grátis.",
    keywords: [
      "papel quadriculado para imprimir",
      "papel milimetrado pdf",
      "papel pontilhado para imprimir",
      "papel isométrico para imprimir",
      "papel hexagonal"
    ],
    howToSteps: [
      {
        title: "Escolha o tipo de papel",
        description: "Quadrados, pontos, isométrico, hexágonos ou linhas."
      },
      {
        title: "Configure",
        description: "Selecione o espaçamento, a cor e a espessura das linhas, o tamanho do papel e a margem."
      },
      {
        title: "Baixe e imprima",
        description: "Salve o PDF ou PNG e imprima em tamanho real (100%)."
      }
    ],
    features: [
      {
        title: "Cinco tipos de papel",
        description: "Quadriculado, pontilhado, isométrico, hexagonal e pautado."
      },
      {
        title: "Espaçamento exato",
        description: "Milímetros ou medidas comuns em polegadas, com quadrados inteiros centralizados na página."
      },
      {
        title: "PDF vetorial",
        description: "Linhas nítidas em qualquer resolução de impressora, ou um PNG de 300 dpi."
      }
    ],
    faqs: [
      {
        question: "Por que os quadrados saem com o tamanho errado na impressão?",
        answer: "A impressora está redimensionando a página. Imprima em 100% ou “Tamanho real”, e não em “Ajustar à página”."
      },
      {
        question: "Que espaçamento devo usar?",
        answer: "5 mm ou 1/4 de polegada é o papel quadriculado mais comum; 1 mm com uma linha mais grossa a cada 10 serve para engenharia; 7 mm ou 9/32 de polegada é o padrão do papel pautado."
      },
      {
        question: "Para que serve o papel isométrico?",
        answer: "As linhas se cruzam a 60°, o que facilita desenhar objetos em 3D, como prédios, móveis ou blocos de pixel art."
      },
      {
        question: "Preciso me cadastrar?",
        answer: "Não. O papel é criado no seu navegador e o uso é gratuito."
      }
    ]
  },
  "flatten-pdf": {
    name: "Nivelar PDF",
    shortName: "Nivelar PDF",
    tagline: "Torne campos de formulário e comentários parte da página para que o PDF não seja editado por engano. Grátis e funciona no seu dispositivo.",
    intro: "O Nivelar PDF transforma campos de formulário preenchidos, comentários, destaques e carimbos em conteúdo comum da página, desenhado exatamente como aparece agora. Depois disso, ninguém consegue mudar as respostas nem apagar os comentários, e o PDF é impresso e exibido do mesmo jeito em qualquer leitor. Escolha nivelar os campos de formulário, os comentários ou ambos. Os links continuam funcionando, e campos sem aparência salva ficam como estão e são contados.",
    seoTitle: "Nivelar PDF online – Bloquear formulário e comentários",
    seoDescription: "Nivele um PDF online: campos preenchidos, comentários e carimbos passam a fazer parte da página e não podem ser editados. Grátis, sem cadastro e sem upload.",
    keywords: [
      "nivelar pdf",
      "achatar pdf",
      "nivelar formulário pdf",
      "bloquear campos pdf",
      "tornar pdf não editável"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um PDF com campos de formulário preenchidos ou comentários."
      },
      {
        title: "Escolha o que nivelar",
        description: "Campos de formulário, comentários e carimbos, ou ambos."
      },
      {
        title: "Baixe",
        description: "Salve o PDF nivelado."
      }
    ],
    features: [
      {
        title: "Exatamente como aparece",
        description: "Cada campo e comentário é desenhado a partir da aparência salva."
      },
      {
        title: "Links continuam funcionando",
        description: "Só os campos e comentários são nivelados."
      },
      {
        title: "O texto continua texto",
        description: "As respostas digitadas continuam pesquisáveis e selecionáveis."
      }
    ],
    faqs: [
      {
        question: "Por que nivelar um PDF?",
        answer: "Para que as respostas preenchidas e os comentários não possam ser alterados nem removidos, e o arquivo fique igual em qualquer leitor de PDF e na impressão."
      },
      {
        question: "Dá para desfazer o nivelamento?",
        answer: "Não no arquivo nivelado. Guarde o original se você puder precisar editar o formulário de novo."
      },
      {
        question: "E um PDF com assinatura digital?",
        answer: "Qualquer alteração em um arquivo assinado faz a assinatura deixar de ser válida. Nivele antes de assinar, não depois."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. Ele é processado no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "add-header-footer-pdf": {
    name: "Adicionar cabeçalho e rodapé ao PDF",
    shortName: "Cabeçalho e rodapé",
    tagline: "Adicione texto, números de página, datas e o nome do arquivo no topo e no pé de cada página do PDF. Grátis e funciona no seu dispositivo.",
    intro: "O Adicionar cabeçalho e rodapé coloca texto em seis lugares de cada página: à esquerda, no centro e à direita do cabeçalho e do rodapé. Use {page} e {pages} para “Página 3 de 12”, {date} para a data de hoje e {file} para o nome do arquivo, junto com suas próprias palavras, como um título, o nome da empresa ou “Confidencial”. Escolha o tamanho do texto, a cor e a distância da borda, pule a capa e veja todas as páginas na prévia antes de baixar. Textos em japonês, coreano, grego e cirílico são compatíveis.",
    seoTitle: "Cabeçalho e rodapé em PDF – Números de página, grátis",
    seoDescription: "Adicione cabeçalho e rodapé a um PDF: números de página, datas, o nome do arquivo e seu próprio texto, à esquerda, no centro ou à direita. Grátis e sem upload.",
    keywords: [
      "adicionar cabeçalho e rodapé pdf",
      "cabeçalho e rodapé pdf",
      "inserir rodapé em pdf",
      "página x de y pdf",
      "adicionar data no pdf"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF."
      },
      {
        title: "Escreva o cabeçalho e o rodapé",
        description: "Digite o texto em qualquer um dos seis lugares, usando {page}, {pages}, {date} e {file}."
      },
      {
        title: "Baixe",
        description: "Confira as páginas na prévia e salve o PDF."
      }
    ],
    features: [
      {
        title: "Seis posições",
        description: "Esquerda, centro e direita, no topo e no pé da página."
      },
      {
        title: "Página x de y",
        description: "Números de página, a data e o nome do arquivo são preenchidos automaticamente."
      },
      {
        title: "Vários alfabetos",
        description: "Latino, grego, cirílico, japonês e coreano."
      }
    ],
    faqs: [
      {
        question: "Como escrevo “Página 1 de 10”?",
        answer: "Digite Página {page} de {pages}. {page} vira o número de cada página e {pages}, o da última."
      },
      {
        question: "Posso deixar a capa de fora?",
        answer: "Sim. Em Páginas com cabeçalho e rodapé, comece na página 2. Você também pode parar antes das últimas páginas; {page} na primeira página incluída mostra o número de “Começar em”."
      },
      {
        question: "O texto vai cobrir meu conteúdo?",
        answer: "O texto fica na margem, na distância que você escolher. Escolha uma distância maior ou um texto menor se o conteúdo de alguma página chegar até a borda."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. Ele é processado no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "resize-pdf-pages": {
    name: "Redimensionar páginas do PDF",
    shortName: "Redimensionar PDF",
    tagline: "Mude as páginas do PDF para A4, Letter, A3, A5, Legal ou Tabloid, ajustando o conteúdo ao novo tamanho. Grátis e funciona no seu dispositivo.",
    intro: "O Redimensionar páginas do PDF muda o tamanho do papel de todas as páginas, por exemplo de um documento em Letter americano para A4, para imprimir na Europa, ou de A4 para A5, para um folheto menor. O conteúdo é redimensionado para caber e centralizado, ou mantido em 100% com margens adicionadas. Links, campos de formulário e comentários se movem e mudam de escala junto com o conteúdo, e o texto continua nítido, porque as páginas são alteradas diretamente em vez de virarem imagens.",
    seoTitle: "Mudar tamanho de página do PDF – Letter para A4, grátis",
    seoDescription: "Mude o tamanho das páginas do PDF para A4, Letter, A3, A5, Legal ou Tabloid, ajustando o conteúdo. Links e formulários mantidos. Grátis e sem upload.",
    keywords: [
      "redimensionar pdf",
      "mudar tamanho da página pdf",
      "converter pdf para a4",
      "letter para a4 pdf",
      "ajustar pdf para a4"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF."
      },
      {
        title: "Escolha o tamanho",
        description: "Escolha o tamanho do papel, a orientação e se o conteúdo deve ser redimensionado."
      },
      {
        title: "Baixe",
        description: "Confira a prévia e salve o PDF."
      }
    ],
    features: [
      {
        title: "Tamanhos de papel comuns",
        description: "A4, A3, A5, Letter, Legal e Tabloid."
      },
      {
        title: "Nada se perde",
        description: "Links, campos de formulário e comentários acompanham o conteúdo."
      },
      {
        title: "Nítido",
        description: "As páginas são alteradas diretamente, sem virar imagens."
      }
    ],
    faqs: [
      {
        question: "O conteúdo vai ficar esticado?",
        answer: "Não. Ele é redimensionado por igual para manter a proporção e depois centralizado; qualquer diferença de formato vira uma margem branca."
      },
      {
        question: "O que faz “Manter em 100%”?",
        answer: "Mantém o conteúdo no tamanho original e só muda a página: uma página maior ganha margens brancas, uma página menor corta as bordas."
      },
      {
        question: "Posso converter Letter para A4?",
        answer: "Sim. Escolha A4: as páginas Letter são ajustadas um pouco para caber no A4 e centralizadas."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. Ele é processado no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "add-background-to-pdf": {
    name: "Adicionar fundo ao PDF",
    shortName: "Fundo do PDF",
    tagline: "Dê uma cor de fundo às páginas do PDF, atrás do conteúdo como papel colorido ou como um tom. Grátis e funciona no seu dispositivo.",
    intro: "O Adicionar fundo ao PDF colore as páginas de um PDF. “Atrás do conteúdo” funciona como papel colorido: o texto e as imagens ficam por cima, sem alteração. Muitos PDFs, incluindo digitalizações, pintam a própria página de branco, o que esconde a cor que está por trás; para esses, “Tingir a página” colore todas as áreas brancas, e o texto preto continua preto. Escolha uma cor suave ou qualquer cor que quiser, para todas as páginas ou só algumas, e confira o resultado na prévia.",
    seoTitle: "Cor de fundo em PDF – Adicionar fundo online, grátis",
    seoDescription: "Adicione uma cor de fundo às páginas do PDF, atrás do conteúdo ou como um tom que funciona até em digitalizações. Todas ou algumas páginas. Grátis e sem upload.",
    keywords: [
      "adicionar fundo pdf",
      "cor de fundo pdf",
      "mudar cor de fundo pdf",
      "pdf com fundo colorido",
      "colocar fundo em pdf"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF."
      },
      {
        title: "Escolha a cor",
        description: "Escolha uma cor e se ela fica atrás do conteúdo ou tinge a página."
      },
      {
        title: "Baixe",
        description: "Confira a prévia e salve o PDF."
      }
    ],
    features: [
      {
        title: "Atrás ou tingido",
        description: "Atrás do conteúdo como papel, ou um tom que também funciona em digitalizações."
      },
      {
        title: "Qualquer cor",
        description: "Tons suaves de papel ou a sua própria cor."
      },
      {
        title: "Todas ou algumas páginas",
        description: "Colore todas as páginas ou uma lista como 1-3, 5."
      }
    ],
    faqs: [
      {
        question: "Por que a cor não aparece?",
        answer: "A página pinta o próprio fundo branco por cima dela. Escolha “Tingir a página”."
      },
      {
        question: "A cor sai na impressão?",
        answer: "Sim, ela faz parte da página. A maioria das impressoras deixa uma borda branca fina nas margens."
      },
      {
        question: "Posso remover o fundo depois?",
        answer: "Não no novo arquivo. Guarde o original se você puder querê-lo sem a cor."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. Ele é processado no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "edit-pdf-metadata": {
    name: "Editar metadados do PDF",
    shortName: "Editar metadados",
    tagline: "Mude o título, o autor, o assunto e as palavras-chave de um PDF, como aparecem nos leitores e nos resultados de busca. Grátis, no seu dispositivo.",
    intro: "O Editar metadados do PDF muda as propriedades do documento guardadas dentro de um PDF: o título mostrado nas abas do navegador e nos resultados de busca, o autor, o assunto, as palavras-chave e os nomes dos programas que o criaram. Os dois lugares onde os leitores de PDF procuram essas informações (as informações do documento e os metadados XMP) são atualizados juntos, e o restante do XMP, como a identificação PDF/A, é mantido. Deixe um campo vazio para removê-lo.",
    seoTitle: "Editar metadados de PDF – Título, autor e palavras-chave",
    seoDescription: "Edite o título, o autor, o assunto, as palavras-chave e o produtor de um PDF online. Os dois registros de metadados são atualizados juntos. Grátis e sem upload.",
    keywords: [
      "editar metadados pdf",
      "alterar título do pdf",
      "mudar autor do pdf",
      "editar propriedades do pdf",
      "palavras-chave pdf"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF; as propriedades atuais já vêm preenchidas."
      },
      {
        title: "Edite as propriedades",
        description: "Mude o título, o autor, o assunto, as palavras-chave e os nomes dos programas."
      },
      {
        title: "Baixe",
        description: "Salve o PDF com as novas propriedades."
      }
    ],
    features: [
      {
        title: "Aparece onde importa",
        description: "O título aparece nas abas do navegador, nos leitores e nos resultados de busca."
      },
      {
        title: "Sempre em sincronia",
        description: "As informações do documento e os metadados XMP são atualizados."
      },
      {
        title: "PDF/A mantido",
        description: "Os outros dados XMP, incluindo a identificação PDF/A, continuam lá."
      }
    ],
    faqs: [
      {
        question: "Por que meu PDF mostra o título errado?",
        answer: "Os leitores mostram o título guardado no arquivo, não o nome do arquivo. Defina-o aqui."
      },
      {
        question: "Como removo uma propriedade?",
        answer: "Apague o campo. Para remover todas as propriedades e os metadados ocultos de uma vez, use Remover metadados do PDF."
      },
      {
        question: "O conteúdo do PDF é alterado?",
        answer: "Não. Só as propriedades e a data de modificação mudam."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. Ele é processado no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "add-bookmarks-to-pdf": {
    name: "Adicionar marcadores ao PDF",
    shortName: "Marcadores do PDF",
    tagline: "Adicione, renomeie, aninhe e remova marcadores do PDF para que o leitor pule direto para cada seção. Grátis e funciona no seu dispositivo.",
    intro: "O Adicionar marcadores ao PDF edita a estrutura que os leitores de PDF mostram no painel de marcadores. Os marcadores existentes aparecem em uma lista para você renomear, reordenar, aninhar ou excluir; adicione novos para a página da prévia, ou um para cada página com um clique. Escolha a página que cada marcador abre, crie submarcadores para seções dentro dos capítulos e faça o painel abrir automaticamente quando o PDF for aberto.",
    seoTitle: "Criar marcadores em PDF – Editar e aninhar, grátis",
    seoDescription: "Adicione, renomeie, aninhe e remova marcadores de PDF online e abra o painel de marcadores automaticamente. Grátis, sem cadastro e sem upload.",
    keywords: [
      "adicionar marcadores pdf",
      "editar marcadores pdf",
      "criar marcadores em pdf",
      "criar sumário pdf",
      "índice clicável pdf"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF; os marcadores que ele já tem aparecem na lista."
      },
      {
        title: "Edite os marcadores",
        description: "Adicione, renomeie, escolha as páginas, aninhe e reordene."
      },
      {
        title: "Baixe",
        description: "Salve o PDF com os novos marcadores."
      }
    ],
    features: [
      {
        title: "Edite o que já existe",
        description: "Os marcadores existentes são carregados, prontos para mudar."
      },
      {
        title: "Seções aninhadas",
        description: "Submarcadores para seções dentro dos capítulos."
      },
      {
        title: "Abre pronto",
        description: "Se quiser, mostre o painel de marcadores quando o PDF abrir."
      }
    ],
    faqs: [
      {
        question: "O que são marcadores de PDF?",
        answer: "Uma estrutura clicável no painel lateral do leitor que leva às seções, como um sumário."
      },
      {
        question: "Por que alguns marcadores foram removidos?",
        answer: "Marcadores que levam a um site ou executam um script, e não a uma página deste arquivo, não podem ser mantidos por este editor. Escolha uma página para mantê-los como marcadores de página."
      },
      {
        question: "Os marcadores alteram as páginas?",
        answer: "Não. Só a estrutura de marcadores muda."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. Ele é processado no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "pdf-attachments": {
    name: "Anexos do PDF",
    shortName: "Anexos do PDF",
    tagline: "Veja, salve, adicione e remova arquivos anexados dentro de um PDF. Grátis e funciona no seu dispositivo.",
    intro: "O Anexos do PDF lista os arquivos que um PDF carrega dentro dele, tanto os da lista de anexos do documento quanto os presos a uma página como comentário com clipe. Salve qualquer um deles, anexe novos arquivos, como planilhas, dados de origem ou imagens, ou remova anexos antes de compartilhar o PDF. Os arquivos anexados ficam dentro do PDF, e a maioria dos leitores os mostra em um painel de anexos.",
    seoTitle: "Anexos de PDF – Extrair, adicionar ou remover, grátis",
    seoDescription: "Veja, extraia, adicione e remova arquivos anexados a um PDF, incluindo anexos com clipe nas páginas. Grátis, sem cadastro e sem enviar o arquivo.",
    keywords: [
      "anexos pdf",
      "extrair anexos de pdf",
      "anexar arquivo ao pdf",
      "remover anexos do pdf",
      "arquivos incorporados pdf"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF; os arquivos anexados aparecem na lista."
      },
      {
        title: "Salve, adicione ou remova",
        description: "Salve qualquer arquivo anexado, anexe novos ou marque os que serão removidos."
      },
      {
        title: "Baixe",
        description: "Salve o PDF com as alterações."
      }
    ],
    features: [
      {
        title: "Encontre arquivos ocultos",
        description: "Tanto anexos do documento quanto comentários com clipe nas páginas."
      },
      {
        title: "Salve qualquer um",
        description: "Cada arquivo anexado pode ser salvo separadamente."
      },
      {
        title: "Limpe antes de compartilhar",
        description: "Remova os anexos que você não quer enviar."
      }
    ],
    faqs: [
      {
        question: "Onde ficam os anexos em um leitor de PDF?",
        answer: "Geralmente em um painel lateral de anexos ou com o ícone de clipe. Os visualizadores integrados de alguns navegadores não os mostram."
      },
      {
        question: "Qualquer arquivo pode ser anexado?",
        answer: "Sim, de qualquer tipo. Cuidado ao abrir arquivos anexados enviados por pessoas que você não conhece."
      },
      {
        question: "Remover anexos diminui o arquivo?",
        answer: "Sim. Os arquivos removidos são tirados do PDF, não apenas escondidos."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. Ele é processado no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "sanitize-pdf": {
    name: "Sanitizar PDF",
    shortName: "Sanitizar PDF",
    tagline: "Remova scripts, ações arriscadas, arquivos anexados e metadados de um PDF antes de compartilhar ou abrir. Grátis, no seu dispositivo.",
    intro: "O Sanitizar PDF retira as partes de um PDF que podem executar código, abrir outros programas, enviar dados ou esconder informações. Primeiro ele lista o que encontra: scripts, ações que abrem arquivos ou enviam dados, mídia incorporada, dados de formulário XFA, arquivos anexados, links para sites, comentários e propriedades do documento. Scripts, ações arriscadas e mídia são sempre removidos; escolha se também quer remover anexos, links, comentários e metadados. O texto e as imagens das páginas não são alterados.",
    seoTitle: "Sanitizar PDF – Remover JavaScript e dados ocultos",
    seoDescription: "Remova JavaScript, ações de execução, anexos, links e metadados de um PDF e veja o que havia nele. Grátis, sem cadastro e sem enviar o arquivo.",
    keywords: [
      "sanitizar pdf",
      "remover javascript de pdf",
      "limpar pdf",
      "remover dados ocultos do pdf",
      "pdf seguro"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha o PDF; o que ele contém aparece na lista."
      },
      {
        title: "Escolha o que mais remover",
        description: "Anexos, links para sites, comentários e propriedades do documento."
      },
      {
        title: "Baixe",
        description: "Salve o PDF sanitizado."
      }
    ],
    features: [
      {
        title: "Veja o que tem dentro",
        description: "Scripts, ações, mídia, anexos e mais são contados primeiro."
      },
      {
        title: "Scripts sempre saem",
        description: "JavaScript e ações que executam ou enviam algo são removidos."
      },
      {
        title: "Páginas intactas",
        description: "Texto, imagens e layout continuam como estavam."
      }
    ],
    faqs: [
      {
        question: "Um PDF sanitizado é seguro para abrir?",
        answer: "Ele não tem mais scripts, ações de execução nem mídia incorporada, o que elimina formas comuns de um PDF se comportar mal. Não é um antivírus: mantenha também seu leitor de PDF atualizado."
      },
      {
        question: "Um formulário preenchível continua funcionando?",
        answer: "Os campos de formulário comuns ficam e podem ser preenchidos, mas os scripts que calculavam ou conferiam as respostas são removidos. Um formulário feito só em XFA pode mostrar uma página em branco."
      },
      {
        question: "Por que remover links e metadados?",
        answer: "Links podem levar a sites indesejados, e as propriedades do documento podem revelar nomes, softwares e datas que você não pretendia compartilhar."
      },
      {
        question: "Meu PDF é enviado para algum lugar?",
        answer: "Não. Ele é processado no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "compare-images": {
    name: "Comparador de imagens",
    shortName: "Comparar imagens",
    tagline: "Compare duas imagens com um controle deslizante de antes e depois, lado a lado ou com um mapa que marca cada diferença. Grátis, no seu dispositivo.",
    intro: "O Comparador de imagens mostra duas versões de uma imagem juntas para você ver o que mudou: arraste um controle deslizante sobre elas, veja-as lado a lado ou troque para um mapa de diferenças que marca em rosa forte cada pixel alterado. Ele também mede quanto mudou, a maior diferença e o PSNR, uma medida padrão de qualidade. Use para conferir uma edição, comparar duas exportações ou configurações de compressão, ou descobrir o que há de diferente entre duas capturas de tela.",
    seoTitle: "Comparar imagens online – Antes e depois e diferenças",
    seoDescription: "Compare duas imagens online com controle de antes e depois, lado a lado ou mapa de diferenças, além de PSNR e pixels alterados. Grátis, sem upload.",
    keywords: [
      "comparar imagens",
      "comparar duas imagens",
      "antes e depois imagem",
      "diferença entre imagens",
      "encontrar diferenças entre duas imagens"
    ],
    howToSteps: [
      {
        title: "Adicione as duas imagens",
        description: "Arraste ou escolha a primeira e a segunda imagem."
      },
      {
        title: "Escolha uma visualização",
        description: "Controle deslizante, lado a lado ou mapa de diferenças."
      },
      {
        title: "Veja o resultado",
        description: "Confira quanto mudou e baixe o mapa de diferenças."
      }
    ],
    features: [
      {
        title: "Três visualizações",
        description: "Controle deslizante de antes e depois, lado a lado e mapa de diferenças."
      },
      {
        title: "Com medições",
        description: "Pixels alterados, maior diferença e PSNR."
      },
      {
        title: "Ajustável",
        description: "Ignore diferenças mínimas, como o ruído da compressão."
      }
    ],
    faqs: [
      {
        question: "O que significa PSNR?",
        answer: "Relação sinal-ruído de pico: quanto maior, mais parecidas. Acima de cerca de 40 dB as diferenças são muito difíceis de ver; imagens idênticas não têm PSNR."
      },
      {
        question: "Posso comparar imagens de tamanhos diferentes?",
        answer: "Sim. A segunda é redimensionada para o tamanho da primeira, o que por si só conta como uma pequena diferença."
      },
      {
        question: "Por que alguns pixels que parecem iguais aparecem marcados?",
        answer: "Formatos com perdas, como JPG, alteram levemente os pixels. Aumente “Ignorar diferenças de até” para escondê-los."
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "add-drop-shadow": {
    name: "Adicionar sombra à imagem",
    shortName: "Sombra projetada",
    tagline: "Adicione uma sombra suave a uma foto, logo ou PNG transparente, com direção, suavidade e cantos arredondados ajustáveis. Grátis.",
    intro: "Adicionar sombra à imagem coloca uma sombra suave atrás de uma imagem para destacá-la da página. Com um PNG transparente, como um logo ou um produto recortado, a sombra segue o formato dele; com uma foto, segue o retângulo, que você pode arredondar. Defina a distância, a direção, a suavidade, a intensidade e a cor, e mantenha o fundo transparente ou preencha com uma cor. A área da imagem aumenta para que a sombra nunca seja cortada, e o download sai em tamanho real.",
    seoTitle: "Adicionar sombra a imagem ou PNG online, grátis",
    seoDescription: "Adicione sombra a uma foto, logo ou PNG transparente: distância, ângulo, desfoque, cor e cantos arredondados. PNG transparente ou JPG. Grátis.",
    keywords: [
      "adicionar sombra na imagem",
      "sombra em png",
      "sombra projetada online",
      "colocar sombra em logo",
      "efeito sombra foto"
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem",
        description: "Arraste ou escolha uma foto ou um PNG transparente."
      },
      {
        title: "Ajuste a sombra",
        description: "Defina a distância, a direção, a suavidade, a intensidade e a cor."
      },
      {
        title: "Baixe",
        description: "Salve como PNG transparente ou como JPG sobre uma cor."
      }
    ],
    features: [
      {
        title: "Segue o formato",
        description: "PNGs transparentes projetam uma sombra com o próprio contorno."
      },
      {
        title: "Nunca cortada",
        description: "A área da imagem aumenta para caber a sombra."
      },
      {
        title: "Cantos arredondados",
        description: "Transforme uma foto em um cartão com cantos suaves."
      }
    ],
    faqs: [
      {
        question: "Por que a sombra fica quadrada em volta do meu logo?",
        answer: "O logo tem um fundo sólido. Deixe-o transparente antes com o Criador de PNG transparente ou o Remover fundo."
      },
      {
        question: "Por que a imagem fica maior que a original?",
        answer: "A sombra precisa de espaço ao redor da imagem; a imagem em si continua do mesmo tamanho."
      },
      {
        question: "Qual formato devo baixar?",
        answer: "Um PNG transparente para colocar em um site ou documento; um JPG sobre uma cor quando precisar de um arquivo pequeno."
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "image-histogram": {
    name: "Histograma de imagem",
    shortName: "Histograma",
    tagline: "Veja o histograma RGB e de brilho de uma imagem e se as sombras ou os realces estão cortados. Grátis e funciona no seu dispositivo.",
    intro: "O Histograma de imagem mostra como os tons de uma imagem se distribuem do preto ao branco, para o brilho e para os canais vermelho, verde e azul. Basta uma olhada para saber se uma foto está subexposta ou superexposta, e a ferramenta informa quanto dela é preto puro ou branco puro, onde os detalhes se perdem. Uma tabela mostra a média, a mediana, a dispersão e o intervalo de cada canal, e você pode baixar o gráfico ou as contagens em CSV.",
    seoTitle: "Histograma de imagem online – Verificar exposição RGB",
    seoDescription: "Veja o histograma RGB e de brilho de uma imagem online, com áreas cortadas, média e dispersão de cada canal. Baixe em PNG ou CSV. Grátis.",
    keywords: [
      "histograma de imagem",
      "histograma rgb online",
      "histograma de foto",
      "verificar exposição da foto",
      "distribuição de cores da imagem"
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem",
        description: "Arraste ou escolha uma foto ou imagem."
      },
      {
        title: "Leia o gráfico",
        description: "Alterne entre RGB, brilho e cada cor."
      },
      {
        title: "Baixe",
        description: "Salve o gráfico em PNG ou os números em CSV."
      }
    ],
    features: [
      {
        title: "Exposição num relance",
        description: "Tons das sombras, à esquerda, até os realces, à direita."
      },
      {
        title: "Verificação de cortes",
        description: "Quanto da imagem é preto puro ou branco puro."
      },
      {
        title: "Por canal",
        description: "Média, mediana, dispersão e intervalo de cada cor."
      }
    ],
    faqs: [
      {
        question: "Como ler um histograma?",
        answer: "A esquerda é escuro, a direita é claro, e a altura indica quantos pixels têm aquele tom. Um acúmulo em qualquer das pontas significa detalhes perdidos."
      },
      {
        question: "O que é corte (clipping)?",
        answer: "Pixels em preto puro ou branco puro. Pequenas quantidades são normais; áreas grandes significam que as sombras ou os realces não têm mais detalhes."
      },
      {
        question: "Os pixels transparentes são contados?",
        answer: "Não. Pixels totalmente transparentes ficam de fora."
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "exif-viewer": {
    name: "Visualizador de EXIF",
    shortName: "Ver EXIF",
    tagline: "Veja os metadados ocultos de uma foto: câmera, lente, configurações, data e localização GPS. Grátis, e o arquivo fica no seu dispositivo.",
    intro: "O Visualizador de EXIF mostra as informações que câmeras e celulares guardam dentro de uma foto. Um resumo traz a câmera e a lente, as configurações de exposição (abertura, velocidade do obturador, ISO e distância focal), quando a foto foi tirada e com qual software, e a localização GPS, se houver, com um link para vê-la no mapa. Todos os campos são listados por seção: EXIF, GPS, legendas e direitos IPTC, XMP e o perfil de cor. Baixe tudo em JSON ou remova com o Remover metadados da imagem.",
    seoTitle: "Ver EXIF online – Metadados e localização da foto",
    seoDescription: "Veja os metadados EXIF de uma foto online: câmera, lente, configurações, data e localização GPS, além de IPTC e XMP. Grátis, sua foto não é enviada.",
    keywords: [
      "ver exif",
      "visualizador exif online",
      "ver metadados da foto",
      "ver localização da foto",
      "metadados de imagem"
    ],
    howToSteps: [
      {
        title: "Adicione sua foto",
        description: "Arraste ou escolha um JPG, HEIC, TIFF, PNG, WebP ou AVIF."
      },
      {
        title: "Veja os detalhes",
        description: "Confira o resumo e cada campo de metadados."
      },
      {
        title: "Salve ou remova",
        description: "Baixe os metadados em JSON ou remova-os antes de compartilhar."
      }
    ],
    features: [
      {
        title: "Câmera e configurações",
        description: "Câmera, lente, abertura, velocidade do obturador, ISO e distância focal."
      },
      {
        title: "Verificação de localização",
        description: "Mostra a posição GPS que a foto revela."
      },
      {
        title: "Todos os campos",
        description: "EXIF, GPS, IPTC, XMP e o perfil de cor."
      }
    ],
    faqs: [
      {
        question: "Por que não há metadados?",
        answer: "Muitos apps e sites os removem ao salvar ou compartilhar, e capturas de tela geralmente não têm nenhum."
      },
      {
        question: "Outras pessoas podem ver onde minha foto foi tirada?",
        answer: "Se ela tiver dados de GPS, sim, a partir do arquivo original. Remova-os com o Remover metadados da imagem antes de compartilhar."
      },
      {
        question: "Minha localização é enviada para algum lugar?",
        answer: "Não. O link do mapa só abre o OpenStreetMap se você clicar nele."
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "transparent-png-maker": {
    name: "Criador de PNG transparente",
    shortName: "PNG transparente",
    tagline: "Deixe uma cor de fundo transparente, como o branco atrás de um logo, e salve como PNG. Grátis e funciona no seu dispositivo.",
    intro: "O Criador de PNG transparente remove uma cor de fundo lisa e salva a imagem como PNG com transparência, pronta para colocar em qualquer site, slide ou design. A cor de fundo é detectada para você, ou escolha qualquer cor da imagem. A tolerância define o quanto uma cor precisa ser parecida, a suavidade da borda suaviza o contorno, e “Só o fundo” mantém intacta a mesma cor dentro do seu logo. Os pixels da borda perdem o tom do fundo antigo, então não sobra nenhuma franja branca.",
    seoTitle: "Criar PNG transparente – Remover cor de fundo online",
    seoDescription: "Deixe uma cor de fundo transparente online: remova o branco atrás de um logo, com bordas suaves e sem franja. Salve em PNG. Grátis, sem upload.",
    keywords: [
      "png transparente",
      "deixar fundo transparente",
      "remover fundo branco",
      "deixar logo transparente",
      "fundo transparente png"
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem",
        description: "Arraste ou escolha um logo, ícone ou gráfico sobre fundo liso."
      },
      {
        title: "Escolha a cor",
        description: "Mantenha o fundo detectado ou escolha uma cor, e ajuste a tolerância."
      },
      {
        title: "Baixe",
        description: "Salve o PNG transparente."
      }
    ],
    features: [
      {
        title: "Detecta o fundo",
        description: "A cor ao redor da borda é escolhida para você."
      },
      {
        title: "Só o fundo",
        description: "A mesma cor dentro do objeto é mantida."
      },
      {
        title: "Bordas limpas",
        description: "Bordas suaves sem sobra de franja."
      }
    ],
    faqs: [
      {
        question: "Quais imagens funcionam melhor?",
        answer: "Logos, ícones, assinaturas e gráficos sobre uma única cor lisa. Para fotos de pessoas ou objetos, use o Remover fundo."
      },
      {
        question: "Por que partes do meu logo sumiram?",
        answer: "Elas têm a mesma cor do fundo. Marque “Só o fundo” ou diminua a tolerância."
      },
      {
        question: "Por que salvar em PNG?",
        answer: "O PNG mantém a transparência; o JPG não."
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "image-color-replacer": {
    name: "Substituir cor da imagem",
    shortName: "Trocar cor",
    tagline: "Substitua uma cor de uma imagem por outra, mantendo o sombreamento e a textura. Grátis e funciona no seu dispositivo.",
    intro: "Substituir cor da imagem troca por uma nova cor todas as partes da imagem que têm a cor escolhida: mude a cor de um produto, de um logo, de um botão numa captura de tela ou de uma parede numa foto. Clique na cor na imagem, escolha a nova e defina o quanto as cores precisam ser parecidas. “Manter sombreamento e textura” desloca os tons claros e escuros juntos para que o resultado continue natural; desative para ter cores lisas e exatas em gráficos. O download mantém o formato original e o tamanho real.",
    seoTitle: "Trocar cor de imagem online – Substituir uma cor",
    seoDescription: "Substitua uma cor em uma imagem online: clique na cor, escolha uma nova e mantenha o sombreamento. Para fotos, logos e gráficos. Grátis, sem upload.",
    keywords: [
      "trocar cor de imagem",
      "mudar cor da imagem",
      "substituir cor na imagem",
      "alterar cor de foto online",
      "mudar cor do logo"
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem",
        description: "Arraste ou escolha uma foto, logo ou gráfico."
      },
      {
        title: "Escolha as cores",
        description: "Clique na cor a substituir e escolha a nova."
      },
      {
        title: "Baixe",
        description: "Ajuste a tolerância e salve a imagem."
      }
    ],
    features: [
      {
        title: "Resultado natural",
        description: "Sombreamento e textura acompanham a cor."
      },
      {
        title: "Exato para gráficos",
        description: "Cores lisas para logos e ícones."
      },
      {
        title: "Tamanho real",
        description: "O formato e a resolução originais."
      }
    ],
    faqs: [
      {
        question: "Por que nem toda a cor mudou?",
        answer: "Tons muito distantes do que você clicou ficam como estão. Aumente a tolerância."
      },
      {
        question: "Por que outras partes também mudaram?",
        answer: "Elas são parecidas com a cor escolhida. Diminua a tolerância ou a suavidade."
      },
      {
        question: "Posso deixar uma cor transparente?",
        answer: "Sim, com o Criador de PNG transparente."
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "app-icon-generator": {
    name: "Gerador de ícones de app",
    shortName: "Ícones de app",
    tagline: "Crie todos os tamanhos de ícone de app para iOS, Android e apps web a partir de uma imagem, prontos para o seu projeto. Grátis, em ZIP.",
    intro: "O Gerador de ícones de app transforma uma imagem em todos os arquivos de ícone de que um app precisa. Para iOS, cria o AppIcon.appiconset do Xcode com todos os tamanhos de iPhone, iPad e App Store e o Contents.json; para Android, os ícones de launcher para cada densidade de tela, os ícones redondos, as camadas de ícone adaptável com o XML e o ícone da Play Store; para apps web, os ícones de 192 e 512 px, um ícone maskable e o manifesto. A arte é redimensionada com reamostragem de alta qualidade e mantida dentro da área segura de cada plataforma.",
    seoTitle: "Gerador de ícones de app – iOS, Android e PWA grátis",
    seoDescription: "Gere ícones de app para iOS (AppIcon.appiconset), Android (mipmap, adaptável) e PWA (maskable) a partir de uma imagem. ZIP grátis, sem upload.",
    keywords: [
      "gerador de ícones de app",
      "gerar ícone de app ios",
      "gerador de ícone android",
      "gerador appiconset",
      "gerador de ícone pwa"
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem",
        description: "Arraste ou escolha uma imagem quadrada de 1024 × 1024 px ou maior."
      },
      {
        title: "Escolha as plataformas",
        description: "iOS, Android e web, o fundo e o espaçamento."
      },
      {
        title: "Baixe o ZIP",
        description: "Copie cada pasta para o projeto do seu app."
      }
    ],
    features: [
      {
        title: "Todos os tamanhos",
        description: "iPhone, iPad, App Store, densidades do Android e PWA."
      },
      {
        title: "Pronto para usar",
        description: "Inclui Contents.json, XML adaptável e um manifesto web."
      },
      {
        title: "Áreas seguras",
        description: "A arte fica longe das máscaras arredondadas e circulares."
      }
    ],
    faqs: [
      {
        question: "Qual tamanho minha imagem deve ter?",
        answer: "Pelo menos 1024 × 1024 px, quadrada, para um ícone nítido na App Store."
      },
      {
        question: "Por que os ícones de iOS têm fundo?",
        answer: "A Apple não aceita ícones de app transparentes, então a transparência é preenchida com a cor de fundo."
      },
      {
        question: "O que são ícones adaptáveis e maskable?",
        answer: "Ícones cujo formato é definido pelo celular ou pelo navegador (círculo, squircle). A arte fica no centro para que nada seja cortado."
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "image-annotator": {
    name: "Anotador de imagens",
    shortName: "Anotar imagem",
    tagline: "Adicione setas, caixas, círculos, texto, destaques e passos numerados a uma captura de tela ou foto. Grátis e funciona no seu dispositivo.",
    intro: "O Anotador de imagens permite marcar uma captura de tela ou foto para explicar algo: aponte com setas, destaque áreas com retângulos ou elipses, desenhe à mão livre, realce texto, adicione rótulos e passos numerados para instruções. Escolha a cor e a espessura, mova ou exclua qualquer marcação, e desfaça ou refaça. As marcações se ajustam ao tamanho da imagem, e o download sai em resolução total, em PNG ou JPG. Desfoque ou pixelize o que for privado, como nomes, rostos ou placas de carro.",
    seoTitle: "Anotar imagem online – Setas e texto em capturas",
    seoDescription: "Faça anotações em imagens online: setas, caixas, círculos, texto, destaques e passos numerados em capturas ou fotos. PNG ou JPG em tamanho real. Grátis.",
    keywords: [
      "anotar imagem",
      "anotar captura de tela",
      "colocar seta na imagem",
      "marcar imagem online",
      "escrever em foto online"
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem",
        description: "Arraste ou escolha uma captura de tela ou foto."
      },
      {
        title: "Faça as marcações",
        description: "Escolha uma ferramenta e uma cor e desenhe na imagem."
      },
      {
        title: "Baixe",
        description: "Salve a imagem anotada em PNG ou JPG. Ou copie para colar direto em um chat, e-mail ou documento."
      }
    ],
    features: [
      {
        title: "Todas as marcações comuns",
        description: "Setas, caixas, elipses, linhas, caneta, marca-texto, texto e passos numerados."
      },
      {
        title: "Fácil de corrigir",
        description: "Selecione, mova, exclua, desfaça e refaça."
      },
      {
        title: "Resolução total",
        description: "As marcações são desenhadas na imagem em tamanho real."
      }
    ],
    faqs: [
      {
        question: "Como adiciono texto?",
        answer: "Escolha Texto, digite na caixa e clique onde ele deve ficar."
      },
      {
        question: "Como movo ou excluo uma marcação?",
        answer: "Escolha Selecionar e mover, clique na marcação e arraste-a ou pressione Excluir."
      },
      {
        question: "Posso esconder informações privadas?",
        answer: "Sim. Escolha Desfocar ou Pixelizar e arraste sobre a área. O efeito é feito a partir da própria imagem, então o detalhe escondido some do download em vez de ficar coberto por uma camada que poderia ser removida."
      },
      {
        question: "Minha imagem é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "color-converter": {
    name: "Conversor de cores",
    shortName: "Conversor de cores",
    tagline: "Converta qualquer cor entre HEX, RGB, HSL, HSV, CMYK, Lab e OKLCH e copie com um clique. Grátis, no seu dispositivo.",
    intro: "O Conversor de cores transforma uma cor escrita em um formato em todos os outros: HEX para a web, RGB, HSL e HSV para apps de design, CMYK para impressão, e CIE Lab e OKLCH para CSS moderno e trabalho com cores. Digite ou cole qualquer um deles, ou um nome CSS como tomato, ou use o seletor de cores. Cada valor tem um botão de copiar, e o nome de cor CSS mais próximo também aparece.",
    seoTitle: "Conversor de cores – HEX, RGB, HSL, CMYK, OKLCH grátis",
    seoDescription: "Converta cores entre HEX, RGB, HSL, HSV, CMYK, Lab e OKLCH na hora, com botões de copiar e o nome CSS mais próximo. Grátis, funciona no navegador.",
    keywords: [
      "conversor de cores",
      "hex para rgb",
      "rgb para hex",
      "hex para cmyk",
      "converter cor hex"
    ],
    howToSteps: [
      {
        title: "Digite uma cor",
        description: "Digite ou cole em qualquer formato, ou escolha no seletor de cores."
      },
      {
        title: "Veja os resultados",
        description: "Veja a cor em todos os formatos, com o nome CSS mais próximo."
      },
      {
        title: "Copie o que precisar",
        description: "Copie qualquer valor com um clique."
      }
    ],
    features: [
      {
        title: "Todos os formatos comuns",
        description: "HEX, RGB, HSL, HSV, CMYK, CIE Lab e OKLCH."
      },
      {
        title: "Entende o que você cola",
        description: "Com ou sem #, vírgulas ou espaços, e nomes CSS."
      },
      {
        title: "Transparência mantida",
        description: "Os valores alfa passam de um formato para outro."
      }
    ],
    faqs: [
      {
        question: "Como converter HEX para RGB?",
        answer: "Cole o código HEX, como #3366CC, e leia a linha RGB: rgb(51 102 204). Todos os outros formatos aparecem ao mesmo tempo."
      },
      {
        question: "O valor CMYK é exato para impressão?",
        answer: "É uma conversão padrão sem perfil de impressora, então é um bom ponto de partida. Uma gráfica pode indicar valores um pouco diferentes para a máquina dela."
      },
      {
        question: "O que é OKLCH?",
        answer: "Uma forma mais nova de escrever cores em CSS, baseada em quão clara e colorida uma cor parece para as pessoas. É útil para criar escalas de cores uniformes."
      },
      {
        question: "Precisa de conexão com a internet?",
        answer: "Só para abrir a página. Tudo é calculado no seu dispositivo, e nada do que você digita é enviado."
      }
    ]
  },
  "color-contrast-checker": {
    name: "Verificador de contraste de cores",
    shortName: "Verificar contraste",
    tagline: "Verifique se as cores do texto e do fundo são legíveis o bastante para o WCAG AA e AAA, e receba a cor mais próxima que é aprovada.",
    intro: "O Verificador de contraste de cores mede a taxa de contraste entre a cor de um texto e o fundo com a fórmula do WCAG 2.2 e mostra se ela passa nos níveis AA e AAA para texto normal, texto grande e ícones e bordas. Uma prévia ao vivo mostra texto real sobre o fundo. Quando um par é reprovado, a ferramenta sugere a cor de texto mais próxima que passa, mantendo o tom, para você mudar o mínimo possível no seu design.",
    seoTitle: "Verificar contraste de cores – WCAG AA e AAA grátis",
    seoDescription: "Verifique o contraste de cores para WCAG 2.2 AA e AAA, veja o texto sobre o fundo e receba a cor aprovada mais próxima. Grátis, funciona no navegador.",
    keywords: [
      "verificador de contraste",
      "contraste de cores wcag",
      "calcular taxa de contraste",
      "cores acessíveis",
      "contraste texto e fundo"
    ],
    howToSteps: [
      {
        title: "Escolha duas cores",
        description: "Digite a cor do texto e a do fundo, ou escolha-as."
      },
      {
        title: "Veja o resultado",
        description: "Confira a taxa e se ela passa no AA e no AAA."
      },
      {
        title: "Corrija se precisar",
        description: "Use a cor sugerida que é aprovada."
      }
    ],
    features: [
      {
        title: "Níveis do WCAG 2.2",
        description: "AA e AAA para texto normal e grande, além de ícones e bordas."
      },
      {
        title: "Prévia ao vivo",
        description: "Veja títulos, texto corrido e um botão sobre o fundo."
      },
      {
        title: "Correção mais próxima",
        description: "A cor aprovada mais próxima, com o mesmo tom."
      }
    ],
    faqs: [
      {
        question: "Qual taxa de contraste eu preciso?",
        answer: "O WCAG AA pede 4,5:1 para texto normal e 3:1 para texto grande, ícones e bordas. O AAA pede 7:1 para texto normal e 4,5:1 para texto grande."
      },
      {
        question: "O que conta como texto grande?",
        answer: "24 px ou mais, ou texto em negrito a partir de cerca de 18,5 px (14 pt)."
      },
      {
        question: "Funciona com cores translúcidas?",
        answer: "Sim. Uma cor de texto transparente é medida como aparece sobre o fundo."
      },
      {
        question: "Precisa de conexão com a internet?",
        answer: "Só para abrir a página. Tudo é calculado no seu dispositivo, e nada do que você digita é enviado."
      }
    ]
  },
  "paper-size-converter": {
    name: "Conversor de tamanhos de papel",
    shortName: "Tamanhos de papel",
    tagline: "Veja todos os tamanhos de papel padrão, A4, Letter, A3 e outros, em mm, polegadas, pontos e pixels em qualquer DPI. Grátis.",
    intro: "O Conversor de tamanhos de papel lista os tamanhos de papel padrão, ISO A, B e C, tamanhos dos EUA como Letter, Legal e Tabloid, impressões de fotos, envelopes e tamanhos JIS japoneses, em milímetros, centímetros, polegadas, pontos ou pixels. Defina o DPI para ver quantos pixels uma página precisa para impressão, por exemplo 2480 × 3508 para A4 a 300 DPI. Digite qualquer largura e altura para converter e encontrar o tamanho padrão mais próximo.",
    seoTitle: "Tamanhos de papel – A4 e Letter em mm, polegadas e pixels",
    seoDescription: "Todos os tamanhos de papel padrão, A0–A10, Letter, Legal, fotos e envelopes, em mm, polegadas, pontos e pixels em qualquer DPI. Tabela grátis.",
    keywords: [
      "tamanho de papel",
      "tamanho a4 em pixels",
      "tamanho a4 em cm",
      "tamanho carta em mm",
      "tabela de tamanhos de papel"
    ],
    howToSteps: [
      {
        title: "Escolha um grupo",
        description: "Tamanhos A, EUA, B, C, foto, envelope ou JIS."
      },
      {
        title: "Escolha a unidade",
        description: "mm, cm, polegadas, pontos ou pixels, com o seu DPI."
      },
      {
        title: "Converta qualquer tamanho",
        description: "Digite uma largura e uma altura para converter e encontrar o tamanho padrão mais próximo."
      }
    ],
    features: [
      {
        title: "Todos os tamanhos comuns",
        description: "ISO A, B e C, EUA, foto, envelope e JIS."
      },
      {
        title: "Pixels para impressão",
        description: "Tamanhos em pixels no DPI que você escolher."
      },
      {
        title: "Padrão mais próximo",
        description: "Descubra de qual papel um tamanho está mais perto."
      }
    ],
    faqs: [
      {
        question: "Quantos pixels tem o A4?",
        answer: "A 300 DPI, o A4 tem 2480 × 3508 pixels; a 150 DPI, 1240 × 1754."
      },
      {
        question: "Qual é a diferença entre A4 e Letter?",
        answer: "O A4 (210 × 297 mm) é usado na maior parte do mundo; o Letter (8,5 × 11 pol., 216 × 279 mm), nos EUA e no Canadá. O A4 é mais estreito e mais alto."
      },
      {
        question: "Por que os tamanhos ISO são arredondados?",
        answer: "A norma os define em milímetros inteiros, cada um com metade do tamanho anterior."
      },
      {
        question: "Precisa de conexão com a internet?",
        answer: "Só para abrir a página. Tudo é calculado no seu dispositivo, e nada do que você digita é enviado."
      }
    ]
  },
  "aspect-ratio-calculator": {
    name: "Calculadora de proporção",
    shortName: "Proporção",
    tagline: "Descubra a proporção de qualquer largura e altura e calcule o tamanho que mantém uma proporção como 16:9. Grátis.",
    intro: "A Calculadora de proporção simplifica qualquer largura e altura para a sua proporção, como 1920 × 1080 para 16:9, e indica a proporção comum correspondente: vídeo, celular, impressão de foto ou redes sociais. Para redimensionar mantendo uma proporção, digite a proporção e um dos lados para obter o outro. Uma lista de proporções comuns, de 1:1 a 21:9 e 9:16 para Stories, preenche os campos com um clique.",
    seoTitle: "Calculadora de proporção – 16:9, 4:3, 9:16 e mais",
    seoDescription: "Calcule a proporção de qualquer tamanho e a largura ou altura que a mantém: 16:9, 4:3, 3:2, 1:1, 9:16 e mais. Grátis, funciona no navegador.",
    keywords: [
      "calculadora de proporção",
      "calculadora 16:9",
      "calcular proporção de imagem",
      "redimensionar mantendo proporção",
      "proporção de tela"
    ],
    howToSteps: [
      {
        title: "Digite um tamanho",
        description: "Digite a largura e a altura para obter a proporção."
      },
      {
        title: "Ou mantenha uma proporção",
        description: "Digite uma proporção e um lado para obter o outro."
      },
      {
        title: "Use uma proporção comum",
        description: "Escolha 16:9, 4:5, 9:16 e outras na lista."
      }
    ],
    features: [
      {
        title: "Proporção mais simples",
        description: "1920 × 1080 vira 16:9, com o valor decimal."
      },
      {
        title: "Proporções com nome",
        description: "Associa a tamanhos de vídeo, celular, impressão e redes sociais."
      },
      {
        title: "Lado que falta",
        description: "Calcula a largura ou a altura que mantém a proporção."
      }
    ],
    faqs: [
      {
        question: "Quanto é 16:9 em pixels?",
        answer: "Tamanhos 16:9 comuns são 1280 × 720, 1920 × 1080 e 3840 × 2160. Digite qualquer largura para obter a altura em 16:9."
      },
      {
        question: "Qual proporção usar no Instagram?",
        answer: "1:1 para posts quadrados, 4:5 para posts em retrato e 9:16 para Stories e Reels."
      },
      {
        question: "Por que minha tela não é exatamente 16:9?",
        answer: "Alguns tamanhos são próximos, mas não exatos, como 1366 × 768. A ferramenta mostra a proporção comum mais próxima e a marca como aproximada."
      },
      {
        question: "Precisa de conexão com a internet?",
        answer: "Só para abrir a página. Tudo é calculado no seu dispositivo, e nada do que você digita é enviado."
      }
    ]
  },
  "svg-optimizer": {
    name: "Otimizador de SVG",
    shortName: "Otimizar SVG",
    tagline: "Deixe arquivos SVG menores sem mudar a aparência, com configurações que os mantêm escaláveis. Grátis, no seu dispositivo.",
    intro: "O Otimizador de SVG limpa arquivos SVG exportados de apps de design, que costumam trazer dados do editor, comentários, decimais longos e definições não usadas. Ele usa o SVGO, o otimizador padrão, com configurações seguras: o viewBox é mantido para o desenho continuar escalável, os títulos ficam para leitores de tela e os IDs não são renomeados, a não ser que você peça. Veja a versão original e a otimizada lado a lado com o tamanho economizado, e depois baixe o arquivo ou copie o código.",
    seoTitle: "Otimizar SVG online – Deixe arquivos SVG menores grátis",
    seoDescription: "Otimize arquivos SVG online com o SVGO: remova dados do editor, arredonde decimais e reduza o arquivo sem mudar o desenho. Grátis, sem upload.",
    keywords: [
      "otimizar svg",
      "comprimir svg",
      "reduzir tamanho svg",
      "minificar svg",
      "svgo online"
    ],
    howToSteps: [
      {
        title: "Adicione o seu SVG",
        description: "Arraste um arquivo ou cole o código."
      },
      {
        title: "Ajuste as configurações",
        description: "Escolha as casas decimais e o que manter ou remover."
      },
      {
        title: "Baixe ou copie",
        description: "Salve o SVG otimizado ou copie o código."
      }
    ],
    features: [
      {
        title: "Com SVGO",
        description: "O otimizador de SVG padrão, rodando no seu navegador."
      },
      {
        title: "Seguro por padrão",
        description: "Mantém o viewBox, os títulos e os IDs, a não ser que você escolha outra coisa."
      },
      {
        title: "Lado a lado",
        description: "Compare antes e depois, com o tamanho economizado."
      }
    ],
    faqs: [
      {
        question: "O SVG otimizado vai ficar diferente?",
        answer: "Não com as configurações padrão. Usar 0 casas decimais pode deslocar pequenos detalhes; compare as duas prévias."
      },
      {
        question: "Por que manter os IDs?",
        answer: "Sites e animações costumam acessar partes de um SVG pelo ID. Encurte-os só quando nada fora do arquivo os usa."
      },
      {
        question: "Quanto menor ele vai ficar?",
        answer: "Arquivos de apps de design costumam diminuir 30–70%; arquivos escritos à mão ou já otimizados diminuem menos."
      },
      {
        question: "Meu arquivo é enviado?",
        answer: "Não. Ele é otimizado no seu dispositivo."
      }
    ]
  },
  "svg-to-pdf": {
    name: "SVG para PDF",
    shortName: "SVG para PDF",
    tagline: "Converta um desenho, logotipo ou gráfico em SVG para um PDF que fica nítido em qualquer zoom. Grátis e funciona no seu dispositivo.",
    intro: "O SVG para PDF converte um SVG em um PDF vetorial, para que linhas e textos fiquem nítidos na impressão ou no zoom em vez de virarem pixels. Deixe a página do tamanho do desenho ou centralize-o em uma página A4 ou Letter com margem, e confira o resultado na prévia antes de baixar. Alguns efeitos de SVG, como filtros de desfoque e conteúdo web incorporado, não podem ser desenhados em um PDF; a página explica o que muda.",
    seoTitle: "Converter SVG em PDF – PDF vetorial nítido, grátis",
    seoDescription: "Converta SVG em PDF vetorial online: linhas e textos nítidos, página do tamanho do desenho ou A4/Letter. Grátis, sem cadastro e sem upload.",
    keywords: [
      "svg para pdf",
      "converter svg em pdf",
      "svg para pdf vetorial",
      "logo svg para pdf",
      "conversor svg pdf"
    ],
    howToSteps: [
      {
        title: "Adicione o seu SVG",
        description: "Arraste um arquivo ou cole o código."
      },
      {
        title: "Escolha a página",
        description: "Tamanho do desenho, A4 ou Letter, e a margem."
      },
      {
        title: "Baixe",
        description: "Confira a prévia e salve o PDF."
      }
    ],
    features: [
      {
        title: "Saída vetorial",
        description: "Fica nítido em qualquer zoom e tamanho de impressão."
      },
      {
        title: "Página do seu jeito",
        description: "Tamanho do desenho, A4 ou Letter, com margens."
      },
      {
        title: "Prévia real",
        description: "A prévia é o próprio PDF que você baixa."
      }
    ],
    faqs: [
      {
        question: "O PDF vai ficar nítido na impressão?",
        answer: "Sim. Formas e textos continuam vetoriais, então são impressos com nitidez em qualquer tamanho."
      },
      {
        question: "Por que parte do meu desenho ficou diferente?",
        answer: "O PDF não consegue desenhar alguns efeitos de SVG, como filtros de desfoque e sombra ou HTML incorporado. Formas simples, degradês e textos são convertidos bem."
      },
      {
        question: "E as fontes?",
        answer: "Fontes comuns funcionam; as incomuns são trocadas por uma fonte padrão. Para um resultado exato, converta o texto em contornos no seu app de design."
      },
      {
        question: "Meu arquivo é enviado?",
        answer: "Não. O PDF é criado no seu dispositivo."
      }
    ]
  },
  "webp-to-pdf": {
    name: "WebP para PDF",
    shortName: "WebP para PDF",
    tagline: "Transforme uma ou mais imagens WebP em um único PDF, na ordem que você escolher. Grátis e funciona no seu dispositivo.",
    intro: "O WebP para PDF junta imagens WebP, o formato que muitos sites e celulares salvam, em um único PDF, com uma imagem por página na ordem que você escolher. As páginas podem ser A4, Letter ou do tamanho de cada imagem, com margens opcionais. Imagens WebP sem perdas e transparentes são inseridas sem perdas, mantendo a transparência; fotos são adicionadas em alta qualidade. Nada é enviado.",
    seoTitle: "Converter WebP em PDF – Junte imagens WebP em um PDF",
    seoDescription: "Converta imagens WebP em PDF online: uma ou várias imagens, na sua ordem, em páginas A4, Letter ou do tamanho da imagem. Grátis, sem cadastro e sem upload.",
    keywords: [
      "webp para pdf",
      "converter webp em pdf",
      "imagens webp para pdf",
      "juntar webp em pdf",
      "conversor webp pdf"
    ],
    howToSteps: [
      {
        title: "Adicione as imagens WebP",
        description: "Arraste ou escolha um ou mais arquivos WebP."
      },
      {
        title: "Organize as páginas",
        description: "Arraste para ordenar e escolha o tamanho da página."
      },
      {
        title: "Baixe",
        description: "Salve o PDF."
      }
    ],
    features: [
      {
        title: "Várias imagens, um PDF",
        description: "Uma imagem por página, na ordem que você definir."
      },
      {
        title: "Qualidade mantida",
        description: "WebP sem perdas e transparentes inseridos sem perdas."
      },
      {
        title: "Tamanhos de página",
        description: "A4, Letter ou o tamanho de cada imagem."
      }
    ],
    faqs: [
      {
        question: "Posso misturar WebP com outros formatos?",
        answer: "Sim. Imagens JPG, PNG, HEIC e TIFF podem ir no mesmo PDF."
      },
      {
        question: "A transparência é mantida?",
        answer: "Sim, nas imagens WebP com transparência."
      },
      {
        question: "Há um limite de imagens?",
        answer: "Só a memória do seu dispositivo; dezenas de imagens funcionam bem na maioria dos computadores e celulares."
      },
      {
        question: "Minhas imagens são enviadas?",
        answer: "Não. O PDF é criado no seu dispositivo."
      }
    ]
  },
  "pdf-link-checker": {
    name: "Verificador de links em PDF",
    shortName: "Verificar links",
    tagline: "Encontre todos os links de um PDF e veja quais links web estão quebrados, redirecionados ou inacessíveis. Grátis.",
    intro: "O Verificador de links em PDF lista todos os links de um PDF: links web e de e-mail clicáveis, links para páginas dentro do documento e endereços web escritos no texto. Ele verifica cada link web e mostra quais funcionam, quais estão quebrados (como o erro 404), quais foram redirecionados e para onde, e quais não podem ser acessados; links para páginas que não existem no PDF também são marcados. Filtre só os problemas e baixe um relatório CSV. Seu PDF fica no seu dispositivo; só os endereços web são enviados ao nosso servidor para a verificação.",
    seoTitle: "Verificar links em PDF – Encontre links quebrados grátis",
    seoDescription: "Verifique os links de um PDF: encontre links web quebrados, redirecionados ou inacessíveis e links para páginas inexistentes. Relatório CSV grátis, sem upload.",
    keywords: [
      "verificar links pdf",
      "links quebrados pdf",
      "verificador de links pdf",
      "testar links de um pdf",
      "checar hiperlinks pdf"
    ],
    howToSteps: [
      {
        title: "Adicione o seu PDF",
        description: "Arraste ou escolha o PDF; os links dele são listados."
      },
      {
        title: "Verifique os links web",
        description: "Veja quais funcionam, foram redirecionados, quebraram ou estão inacessíveis."
      },
      {
        title: "Corrija e gere o relatório",
        description: "Filtre os problemas e baixe um relatório CSV."
      }
    ],
    features: [
      {
        title: "Todos os links encontrados",
        description: "Links clicáveis, links para páginas e endereços escritos no texto."
      },
      {
        title: "Resultados claros",
        description: "Funciona, redirecionado, quebrado com o código de erro, ou inacessível."
      },
      {
        title: "Relatório CSV",
        description: "Compartilhe a lista ou corrija os links no documento original."
      }
    ],
    faqs: [
      {
        question: "Meu PDF é enviado?",
        answer: "Não. Os links são lidos no seu dispositivo. Só os endereços web são enviados ao nosso servidor, que acessa cada um uma vez para verificá-lo."
      },
      {
        question: "Por que um link que funciona aparece como inacessível?",
        answer: "Alguns sites bloqueiam verificações automáticas ou demoram para responder. Abra o link para conferir você mesmo."
      },
      {
        question: "O que significa “redirecionado”?",
        answer: "O endereço leva para outro. Ele ainda funciona, mas é melhor atualizá-lo para o novo endereço."
      },
      {
        question: "Os links de e-mail são verificados?",
        answer: "Não. Links de e-mail, telefone e arquivo são listados, mas não podem ser verificados automaticamente."
      }
    ]
  },
  "sharpen-image": {
    name: "Aumentar nitidez da imagem",
    shortName: "Nitidez",
    tagline: "Deixe uma foto suave mais nítida e confira o resultado em tamanho real antes de baixar. Grátis, no seu dispositivo.",
    intro: "Aumentar nitidez da imagem deixa bordas e detalhes finos mais definidos em fotos que parecem um pouco suaves, seja de uma câmera de celular, de uma imagem redimensionada ou de um foco levemente errado. Escolha a intensidade, o tamanho do detalhe a realçar e quanto as áreas lisas, como pele e céu, são protegidas. Uma visualização lado a lado em 100% mostra exatamente o que muda, já que a nitidez não dá para avaliar em uma prévia pequena. Só o brilho recebe nitidez, então não aparecem contornos coloridos, e a foto mantém o formato.",
    seoTitle: "Aumentar nitidez de foto online – Melhore fotos borradas",
    seoDescription: "Deixe uma foto mais nítida online: intensidade e tamanho do detalhe ajustáveis, antes e depois em tamanho real, sem contornos coloridos. Grátis, sem envio.",
    keywords: [
      "aumentar nitidez de foto",
      "melhorar nitidez de imagem online",
      "desembaçar foto",
      "deixar foto mais nítida",
      "tirar desfoque de foto"
    ],
    howToSteps: [
      {
        title: "Adicione sua foto",
        description: "Arraste ou escolha uma foto JPG, PNG, WebP, HEIC ou de outro formato."
      },
      {
        title: "Ajuste e confira",
        description: "Defina a intensidade e clique na foto para ver os detalhes em 100%."
      },
      {
        title: "Baixe",
        description: "Salve no mesmo formato do original."
      }
    ],
    features: [
      {
        title: "Prévia em tamanho real",
        description: "Antes e depois em 100%, onde a nitidez aparece."
      },
      {
        title: "Sem contornos coloridos",
        description: "Só o brilho recebe nitidez."
      },
      {
        title: "Áreas lisas protegidas",
        description: "Pele, céu e ruído podem ficar como estão."
      }
    ],
    faqs: [
      {
        question: "Dá para corrigir uma foto muito borrada?",
        answer: "Nenhuma ferramenta recupera detalhes que nunca foram captados. A nitidez ajuda fotos um pouco suaves; uma foto muito fora de foco ou tremida só vai ficar um pouco mais definida."
      },
      {
        question: "Quais configurações devo usar?",
        answer: "Comece com as padrão. Use um tamanho de detalhe pequeno para coisas finas, como cabelo e texto, e aumente “Proteger áreas lisas” se a pele ou o céu começarem a parecer granulados."
      },
      {
        question: "O arquivo vai ficar muito maior?",
        answer: "Um pouco: detalhes mais definidos ocupam um pouco mais de espaço em um JPG. A foto mantém o formato e o tamanho em pixels."
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "denoise-image": {
    name: "Reduzir ruído da imagem",
    shortName: "Reduzir ruído",
    tagline: "Remova a granulação e as manchas coloridas de fotos noturnas e de celular sem perder a nitidez das bordas. Grátis, no seu dispositivo.",
    intro: "Reduzir ruído da imagem limpa a granulação e as manchas coloridas que aparecem em fotos tiradas com pouca luz ou com ISO alto. A ferramenta mede o quanto de ruído sua foto tem e sugere configurações adequadas, então fotos limpas quase não são alteradas. Granulação e manchas coloridas têm controles separados, e as bordas continuam nítidas enquanto as áreas lisas são suavizadas. Uma visualização lado a lado em 100% mostra o resultado onde o ruído realmente aparece.",
    seoTitle: "Reduzir ruído de foto online – Remova granulação, grátis",
    seoDescription: "Remova ruído e granulação de fotos online: configurações automáticas, controles separados de granulação e cor, bordas nítidas, prévia em 100%. Grátis.",
    keywords: [
      "reduzir ruído de foto",
      "remover ruído de imagem",
      "tirar granulação de foto",
      "redução de ruído online",
      "ruído em foto noturna"
    ],
    howToSteps: [
      {
        title: "Adicione sua foto",
        description: "O nível de ruído é medido e as configurações são sugeridas."
      },
      {
        title: "Confira em tamanho real",
        description: "Clique na foto para comparar os detalhes em 100%."
      },
      {
        title: "Baixe",
        description: "Salve no mesmo formato do original."
      }
    ],
    features: [
      {
        title: "Configurações automáticas",
        description: "Sugeridas a partir do nível de ruído medido."
      },
      {
        title: "Granulação e cor separadas",
        description: "As manchas coloridas podem ser removidas sem suavizar os detalhes."
      },
      {
        title: "Bordas nítidas",
        description: "As áreas lisas são suavizadas, as bordas não."
      }
    ],
    faqs: [
      {
        question: "Minha foto vai ficar com aspecto de plástico?",
        answer: "Não com as configurações sugeridas: elas foram ajustadas para que a foto fique mais próxima de um original limpo, não mais lisa que ele. Configurações muito fortes podem suavizar texturas finas, como grama ou tecido, e a visualização em 100% mostra isso."
      },
      {
        question: "O que causa o ruído?",
        answer: "Pouca luz. Sensores pequenos de celular e ISO alto adicionam granulação e manchas coloridas, principalmente nas sombras."
      },
      {
        question: "Por que há dois controles de ruído?",
        answer: "As manchas coloridas podem ser removidas com força sem perder detalhes, enquanto a granulação de brilho precisa de um toque mais leve para manter a textura."
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "fix-white-balance": {
    name: "Corrigir balanço de branco",
    shortName: "Balanço de branco",
    tagline: "Remova tons amarelados, azulados ou esverdeados de fotos automaticamente ou escolhendo um ponto cinza. Grátis, no seu dispositivo.",
    intro: "Corrigir balanço de branco ajusta fotos com cores estranhas: amareladas sob luz de interiores, azuladas na sombra, esverdeadas sob algumas lâmpadas. Clique em Automático para uma correção rápida, ou clique em algo na foto que deveria ser cinza ou branco, como uma parede, um papel ou uma nuvem, para um resultado exato. Controles de temperatura, tonalidade e saturação fazem o ajuste fino, e você pode segurar um botão para comparar com a original. As correções são feitas em luz linear, como as câmeras fazem, então as áreas claras não ficam coloridas.",
    seoTitle: "Corrigir balanço de branco online – Ajuste as cores, grátis",
    seoDescription: "Corrija o balanço de branco online: correção automática ou escolha de um ponto cinza, além de temperatura, tonalidade e saturação. Grátis, sem envio.",
    keywords: [
      "corrigir balanço de branco",
      "correção de cor online",
      "tirar tom amarelado da foto",
      "balanço de branco foto",
      "foto azulada corrigir"
    ],
    howToSteps: [
      {
        title: "Adicione sua foto",
        description: "Arraste ou escolha a foto com a cor alterada."
      },
      {
        title: "Corrija",
        description: "Clique em Automático ou escolha algo que deveria ser cinza."
      },
      {
        title: "Ajuste e baixe",
        description: "Ajuste temperatura, tonalidade e saturação e salve."
      }
    ],
    features: [
      {
        title: "Escolha um ponto cinza",
        description: "A forma mais precisa de definir as cores neutras."
      },
      {
        title: "Correção automática",
        description: "Uma solução rápida para cenas do dia a dia."
      },
      {
        title: "Resultado natural",
        description: "Corrigido em luz linear; as áreas claras ficam limpas."
      }
    ],
    faqs: [
      {
        question: "Por que o automático às vezes erra?",
        answer: "O balanço de branco automático estima a luz a partir das cores da foto. Quando uma cor domina a cena, como um pôr do sol, um campo verde ou uma parede vermelha, a estimativa falha. Escolher um ponto cinza ou branco é sempre preciso."
      },
      {
        question: "Onde devo clicar com Escolher um cinza?",
        answer: "Em qualquer coisa que deveria ser neutra: papel branco, uma parede cinza, uma camisa branca ou uma nuvem. Evite pontos muito claros que estão totalmente brancos na foto."
      },
      {
        question: "O formato do arquivo muda?",
        answer: "Não. Um JPG continua JPG em alta qualidade, e um PNG continua um PNG sem perdas."
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "perspective-correction": {
    name: "Corrigir perspectiva",
    shortName: "Perspectiva",
    tagline: "Endireite a foto de um documento, quadro branco ou placa tirada de lado arrastando os quatro cantos. Grátis.",
    intro: "Corrigir perspectiva deixa plano qualquer coisa fotografada de lado, como um documento na mesa, um quadro branco, um cartaz, uma pintura ou a placa de um prédio. Arraste os quatro cantos até os cantos do objeto e a ferramenta o transforma em um retângulo certinho, mantendo todos os detalhes que a foto tem. Mantenha o formato como selecionado ou use A4, Carta ou quadrado. A prévia é atualizada enquanto você move os cantos.",
    seoTitle: "Corrigir perspectiva de foto online – Endireite, grátis",
    seoDescription: "Corrija a perspectiva de fotos online: arraste quatro cantos para endireitar um documento, quadro branco ou placa em um retângulo, A4 ou Carta. Grátis.",
    keywords: [
      "corrigir perspectiva de foto",
      "endireitar foto de documento",
      "correção de perspectiva online",
      "desentortar foto",
      "endireitar imagem inclinada"
    ],
    howToSteps: [
      {
        title: "Adicione sua foto",
        description: "Uma foto tirada de lado."
      },
      {
        title: "Arraste os cantos",
        description: "Coloque as quatro alças nos cantos do objeto."
      },
      {
        title: "Baixe",
        description: "Escolha o formato e salve a imagem endireitada."
      }
    ],
    features: [
      {
        title: "Controle pelos quatro cantos",
        description: "Arraste com o mouse ou o dedo, ou mova com as setas do teclado."
      },
      {
        title: "Detalhes mantidos",
        description: "O resultado é tão grande quanto a área selecionada permite."
      },
      {
        title: "Formatos de papel",
        description: "Mantenha o formato ou use A4, Carta ou quadrado."
      }
    ],
    faqs: [
      {
        question: "Dá para transformar a página endireitada em PDF?",
        answer: "Baixe a imagem endireitada e use JPG para PDF para criar um PDF com uma ou mais páginas."
      },
      {
        question: "Por que o resultado parece esticado?",
        answer: "Escolha o formato certo: “Como selecionado” estima o formato pelos cantos, mas uma página fotografada muito de lado fica melhor em A4 ou Carta."
      },
      {
        question: "Vai ficar tão nítido quanto o original?",
        answer: "As partes que estavam longe da câmera têm menos pixels, então ficam um pouco mais suaves. Tirar a foto o mais reta possível dá o melhor resultado."
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "photo-collage-maker": {
    name: "Criar colagem de fotos",
    shortName: "Colagem",
    tagline: "Junte de 2 a 9 fotos em uma colagem com layouts prontos, espaçamento e cantos arredondados. Grátis, sem cadastro.",
    intro: "Criar colagem de fotos organiza de 2 a 9 fotos em uma colagem. Escolha um layout, um formato para Instagram, Stories, um post widescreen ou uma impressão A4, e defina o espaço entre as fotos, a borda, os cantos arredondados e a cor de fundo. Clique em qualquer foto da colagem para dar zoom ou escolher a parte que aparece. A colagem tem 2400 pixels no lado maior, nítida o bastante para imprimir, e é feita inteiramente no seu dispositivo.",
    seoTitle: "Fazer colagem de fotos online – Grátis e sem cadastro",
    seoDescription: "Faça uma colagem de fotos online: de 2 a 9 fotos, layouts prontos, formatos quadrado, 4:5, 9:16 e A4, espaçamento e cantos arredondados. Grátis, sem envio.",
    keywords: [
      "fazer colagem de fotos",
      "montagem de fotos online",
      "colagem de fotos online grátis",
      "juntar fotos em uma só",
      "colagem para instagram"
    ],
    howToSteps: [
      {
        title: "Adicione suas fotos",
        description: "De 2 a 9 fotos, na ordem que você quiser."
      },
      {
        title: "Escolha um layout",
        description: "Escolha o layout, o formato, o espaçamento e as cores."
      },
      {
        title: "Enquadre e baixe",
        description: "Clique em uma foto para ajustar o enquadramento e salve."
      }
    ],
    features: [
      {
        title: "Layouts prontos",
        description: "Grades e layouts com foto em destaque para 2 a 9 fotos."
      },
      {
        title: "Formatos para redes e impressão",
        description: "1:1, 4:5, 9:16, 16:9 e A4."
      },
      {
        title: "Enquadramento por foto",
        description: "Dê zoom e mova cada foto dentro do seu espaço."
      }
    ],
    faqs: [
      {
        question: "Qual é o tamanho da colagem?",
        answer: "2400 pixels no lado maior, por exemplo 2400 × 2400 para uma colagem quadrada, o suficiente para uma impressão de 20 cm a 300 DPI."
      },
      {
        question: "Posso usar um fundo transparente?",
        answer: "Sim: escolha PNG e marque Transparente."
      },
      {
        question: "Posso mudar a ordem?",
        answer: "Sim. Mova as fotos para cima ou para baixo na lista; a primeira foto vai no primeiro espaço do layout."
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "duplicate-photo-finder": {
    name: "Localizador de fotos duplicadas",
    shortName: "Duplicadas",
    tagline: "Encontre fotos duplicadas e quase iguais, incluindo cópias redimensionadas e recomprimidas. Grátis, e nada é enviado.",
    intro: "O Localizador de fotos duplicadas compara um conjunto de fotos e agrupa as que são cópias umas das outras: arquivos idênticos, cópias salvas de novo e versões redimensionadas ou recomprimidas, como fotos enviadas por um app de mensagens. A opção Parecidas também encontra fotos quase idênticas, como sequências. Em cada grupo, a cópia maior e menos comprimida fica por padrão, e você pode mudar quais manter. Baixe as fotos sem duplicadas em um ZIP, ou uma lista para apagá-las você mesmo. As fotos são comparadas no seu dispositivo e nunca são enviadas.",
    seoTitle: "Encontrar fotos duplicadas online – Imagens parecidas grátis",
    seoDescription: "Encontre fotos duplicadas online: cópias exatas, versões redimensionadas e recomprimidas e fotos parecidas. Mantenha a melhor cópia e baixe um ZIP. Grátis.",
    keywords: [
      "encontrar fotos duplicadas",
      "localizar imagens duplicadas",
      "fotos repetidas",
      "remover fotos duplicadas",
      "encontrar imagens parecidas"
    ],
    howToSteps: [
      {
        title: "Adicione suas fotos",
        description: "Arraste as fotos de uma pasta inteira de uma vez."
      },
      {
        title: "Revise os grupos",
        description: "Confira cada grupo e escolha quais cópias manter."
      },
      {
        title: "Baixe",
        description: "Receba as fotos sem duplicadas em ZIP, ou a lista."
      }
    ],
    features: [
      {
        title: "Encontra cópias reais",
        description: "Reconhece fotos redimensionadas, recomprimidas e salvas de novo, não só arquivos idênticos."
      },
      {
        title: "A melhor cópia fica",
        description: "A cópia maior e menos comprimida é escolhida por padrão."
      },
      {
        title: "Privado",
        description: "As fotos são comparadas no seu dispositivo."
      }
    ],
    faqs: [
      {
        question: "Ele pode apagar minhas duplicadas?",
        answer: "Um site não pode apagar arquivos do seu dispositivo. Baixe as fotos sem duplicadas em um ZIP, ou use a lista para apagar as cópias extras você mesmo."
      },
      {
        question: "Como ele sabe que duas fotos são iguais?",
        answer: "Ele cria uma pequena impressão digital da aparência de cada foto, então uma cópia redimensionada ou recomprimida ainda é reconhecida. Arquivos idênticos são comparados de forma exata."
      },
      {
        question: "Quantas fotos posso verificar?",
        answer: "Centenas de uma vez na maioria dos computadores. Cada foto é reduzida a uma impressão digital minúscula logo depois de ser lida, então o uso de memória fica baixo."
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "pixel-art-converter": {
    name: "Conversor de pixel art",
    shortName: "Pixel art",
    tagline: "Transforme uma foto ou desenho em pixel art escolhendo o tamanho da grade, a paleta de cores e o sombreamento. Grátis, no seu dispositivo.",
    intro: "O Conversor de pixel art transforma qualquer imagem em pixel art. Escolha quantos pixels de largura ela deve ter, de um ícone minúsculo de 8 pixels a uma cena detalhada de 256 pixels, e quantas cores: uma paleta ajustada à sua imagem, preto e branco, cinza ou quatro verdes retrô. O sombreamento chapado, suave ou com padrão muda o visual. Baixe com pixels quadrados ampliados e nítidos e linhas de grade opcionais, ou com 1 pixel cada para jogos e editores de pixel.",
    seoTitle: "Conversor de pixel art – Transforme foto em pixel art grátis",
    seoDescription: "Converta uma foto em pixel art online: escolha o tamanho da grade, as cores e o sombreamento e baixe um PNG nítido ou o original de 1 pixel. Grátis, sem envio.",
    keywords: [
      "conversor de pixel art",
      "foto em pixel art",
      "transformar imagem em pixel art",
      "pixelizar imagem",
      "imagem 8 bits online"
    ],
    howToSteps: [
      {
        title: "Adicione sua imagem",
        description: "Uma foto, desenho ou logo."
      },
      {
        title: "Escolha tamanho e cores",
        description: "Defina a largura em pixels, a paleta e o sombreamento."
      },
      {
        title: "Baixe",
        description: "Salve em PNG, ampliado ou com 1 pixel cada."
      }
    ],
    features: [
      {
        title: "Paletas ajustadas",
        description: "De 4 a 32 cores escolhidas da sua imagem."
      },
      {
        title: "Sombreamento retrô",
        description: "Pontilhado chapado, suave ou com padrão."
      },
      {
        title: "Resultado nítido",
        description: "Pixels quadrados sem desfoque, com linhas de grade opcionais."
      }
    ],
    faqs: [
      {
        question: "Qual largura devo escolher?",
        answer: "De 16 a 32 para ícones e sprites, 64 para retratos reconhecíveis, 128 ou mais para cenas detalhadas."
      },
      {
        question: "O que é a opção de sombreamento?",
        answer: "Suave e Padrão misturam as cores da paleta em pontinhos para sugerir mais tons, como faziam os jogos antigos. Chapado usa cada cor como ela é."
      },
      {
        question: "Posso usar em um jogo?",
        answer: "Sim. “1 pixel cada” baixa a imagem no tamanho real em pixels, pronta para motores de jogo e editores de pixel."
      },
      {
        question: "Minha foto é enviada?",
        answer: "Não. Ela é processada no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "pdf-to-grayscale": {
    name: "PDF para escala de cinza",
    shortName: "PDF → Cinza",
    tagline: "Converta um PDF colorido em preto e branco para imprimir, com o texto nítido e selecionável. Grátis.",
    intro: "PDF para escala de cinza transforma todas as cores de um PDF em tons de cinza: textos, formas, gráficos e fotos. É útil para ver como um documento sai em uma impressora preto e branco, para economizar tinta colorida ou quando um portal pede um arquivo em escala de cinza. O texto continua sendo texto real e selecionável e as formas continuam nítidas, porque só as cores mudam, não o conteúdo. As fotos são convertidas na resolução original, com alta qualidade.",
    seoTitle: "PDF em escala de cinza – Converta PDF para preto e branco",
    seoDescription: "Converta um PDF colorido em escala de cinza online: o texto continua nítido e selecionável e as fotos mantêm a resolução. Ideal para imprimir e poupar tinta.",
    keywords: [
      "pdf para escala de cinza",
      "converter pdf para preto e branco",
      "pdf em escala de cinza",
      "pdf preto e branco online",
      "tirar cor do pdf"
    ],
    howToSteps: [
      {
        title: "Adicione seu PDF",
        description: "Arraste ou escolha um PDF de até 30 MB."
      },
      {
        title: "Converta",
        description: "Cada cor vira um tom de cinza."
      },
      {
        title: "Baixe",
        description: "Salve o PDF em escala de cinza."
      }
    ],
    features: [
      {
        title: "O texto continua texto",
        description: "Selecionável e pesquisável, não vira imagem."
      },
      {
        title: "Fotos em resolução original",
        description: "As imagens são convertidas sem ser reduzidas."
      },
      {
        title: "Pronto para imprimir",
        description: "Veja e imprima exatamente o que uma impressora preto e branco faria."
      }
    ],
    faqs: [
      {
        question: "O texto continua selecionável?",
        answer: "Sim. Só as cores mudam, então o texto, os links e o layout das páginas ficam como estavam. Os campos preenchíveis de formulários são achatados: o que estiver digitado neles continua na página, mas eles não podem mais ser preenchidos."
      },
      {
        question: "Meu PDF vai ficar maior?",
        answer: "Depende. PDFs com fotos ou digitalizações costumam ficar menores, porque imagens em cinza precisam de menos dados; um PDF quase só de texto pode ficar um pouco maior."
      },
      {
        question: "Posso converter um PDF protegido por senha?",
        answer: "Remova a senha primeiro com Desbloquear PDF e depois converta."
      },
      {
        question: "Meu arquivo é enviado?",
        answer: "Sim. Esta ferramenta precisa do nosso servidor, então o arquivo é enviado por uma conexão criptografada, processado e apagado assim que o resultado é devolvido. Ele nunca é armazenado, compartilhado nem visualizado. A maioria das outras ferramentas deste site funciona inteiramente no seu navegador."
      }
    ]
  },
  "scan-to-pdf": {
    name: "Escanear para PDF",
    shortName: "Escanear para PDF",
    tagline: "Transforme fotos de páginas tiradas com o celular em um PDF limpo e reto. As bordas são encontradas para você. Grátis, e nada é enviado.",
    intro: "Escanear para PDF transforma fotos de documentos, recibos, cartas ou anotações em um PDF com cara de digitalizado. Ele encontra as bordas de cada página, endireita páginas fotografadas de lado e uniformiza sombras e luz irregular para o papel ficar branco. Escolha colorida, escala de cinza ou preto e branco, A4, Carta ou o formato da própria página, coloque as páginas em ordem e baixe um único PDF. Se uma borda não for encontrada, arraste os cantos para o lugar. Tudo acontece no seu dispositivo.",
    seoTitle: "Escanear documento para PDF pelo celular, grátis",
    seoDescription: "Transforme fotos de documentos em um PDF limpo online: bordas encontradas, páginas endireitadas, sombras removidas, A4 ou Carta. Grátis, sem upload e sem app.",
    keywords: [
      "escanear documento",
      "digitalizar documento pelo celular",
      "foto para pdf",
      "scanner de documentos online",
      "transformar foto de documento em pdf"
    ],
    howToSteps: [
      {
        title: "Adicione fotos das páginas",
        description: "Tire com o celular ou escolha fotos que você já tem."
      },
      {
        title: "Confira cada página",
        description: "As bordas são encontradas para você; arraste um canto se precisar."
      },
      {
        title: "Baixe o PDF",
        description: "Escolha a aparência e o tamanho da página e salve um único PDF."
      }
    ],
    features: [
      {
        title: "Bordas encontradas automaticamente",
        description: "As páginas são encontradas e endireitadas, mesmo de lado."
      },
      {
        title: "Sombras removidas",
        description: "A luz irregular é uniformizada e o papel fica branco."
      },
      {
        title: "Privado",
        description: "As páginas nunca saem do seu dispositivo."
      }
    ],
    faqs: [
      {
        question: "Preciso de um aplicativo?",
        answer: "Não. Abra esta página no celular, adicione fotos das páginas e baixe o PDF."
      },
      {
        question: "Posso pesquisar ou copiar o texto do PDF?",
        answer: "Não de imediato: as páginas são imagens. Passe o PDF pelo OCR PDF para adicionar uma camada de texto que você pode pesquisar e copiar."
      },
      {
        question: "Qual aparência devo escolher?",
        answer: "Colorida mantém carimbos, assinaturas e marcações. Escala de cinza serve para a maioria dos textos. Preto e branco gera os menores arquivos, mas pode perder texto fraco ou muito pequeno."
      },
      {
        question: "E se a página não for encontrada?",
        answer: "A foto inteira é usada e nada é cortado. Arraste os quatro cantos até os cantos da página ou toque em Encontrar as bordas de novo."
      }
    ]
  },
  "scan-cleaner": {
    name: "Limpar digitalização",
    shortName: "Limpar digitalização",
    tagline: "Limpe uma digitalização ou a foto de uma página: sombras uniformizadas, papel branco, texto nítido. Grátis, no seu dispositivo.",
    intro: "Limpar digitalização deixa uma página digitalizada ou a foto de um documento mais fácil de ler e imprimir. Ele uniformiza sombras, cantos escuros e luz irregular, deixa branco o papel cinza ou amarelado e escurece o texto, em colorido, escala de cinza ou preto e branco. Fotos tiradas de lado também podem ser endireitadas. Segure o botão para comparar com a original e confira o resultado em tamanho real antes de baixar.",
    seoTitle: "Limpar documento escaneado online – Papel branco, grátis",
    seoDescription: "Limpe documentos escaneados online: remova sombras, deixe branco o papel cinza ou amarelo, escureça o texto, endireite fotos. Colorido, cinza ou P&B. Grátis.",
    keywords: [
      "melhorar documento escaneado",
      "clarear documento escaneado",
      "tirar sombra de foto de documento",
      "deixar fundo do documento branco",
      "melhorar qualidade de digitalização"
    ],
    howToSteps: [
      {
        title: "Adicione sua digitalização ou foto",
        description: "Uma digitalização ou uma foto de uma página."
      },
      {
        title: "Escolha a aparência",
        description: "Colorida, escala de cinza ou preto e branco, e a intensidade."
      },
      {
        title: "Baixe",
        description: "Salve a página limpa em JPG, ou em PNG para preto e branco."
      }
    ],
    features: [
      {
        title: "Sombras removidas",
        description: "Luz irregular e cantos escuros são uniformizados."
      },
      {
        title: "Papel branco",
        description: "Papel cinza ou amarelado fica branco; o texto continua escuro."
      },
      {
        title: "Endireita também",
        description: "Fotos tiradas de lado podem ser endireitadas de uma vez."
      }
    ],
    faqs: [
      {
        question: "O texto vai ficar mais fácil de ler?",
        answer: "A página fica com aspecto mais limpo e sai melhor na impressão. Texto fraco, borrado ou muito pequeno não pode ser recuperado; para esses casos, use Escala de cinza em vez de Preto e branco."
      },
      {
        question: "Por que o papel da minha digitalização é cinza?",
        answer: "Scanners e câmeras raramente registram o papel como branco puro. A limpeza mede o brilho do próprio papel em toda a página e o deixa branco."
      },
      {
        question: "Posso limpar várias páginas de uma vez?",
        answer: "Limpar digitalização trabalha com uma página por vez. Para várias páginas em um só PDF, use Escanear para PDF, que limpa todas as páginas."
      },
      {
        question: "Meu arquivo é enviado?",
        answer: "Não. Ele é limpo no seu dispositivo e nunca sai dele."
      }
    ]
  },
  "ocr-multiple-images": {
    name: "OCR de várias imagens",
    shortName: "OCR de imagens",
    tagline: "Extraia texto de várias imagens de uma vez, em 19 idiomas, e baixe tudo em um único arquivo de texto ou em um arquivo por imagem. Grátis.",
    intro: "OCR de várias imagens lê o texto de um conjunto de imagens de uma só vez: fotos de documentos, capturas de tela, digitalizações ou recibos. Escolha o idioma e, para fotos de páginas de papel, faça cada página ser encontrada e endireitada antes, o que deixa a leitura muito mais precisa quando a foto foi tirada de lado. Copie cada texto ou baixe tudo em um único arquivo de texto ou em um ZIP com um arquivo de texto por imagem. A leitura acontece no seu dispositivo, então suas imagens não são enviadas.",
    seoTitle: "OCR de várias imagens – Extrair texto de muitas imagens",
    seoDescription: "Extraia texto de várias imagens de uma vez com OCR: 19 idiomas, fotos de páginas endireitadas antes, baixe em TXT ou ZIP. Grátis, sem upload.",
    keywords: [
      "ocr de várias imagens",
      "extrair texto de várias imagens",
      "ocr em lote",
      "imagem para texto",
      "converter imagens em texto"
    ],
    howToSteps: [
      {
        title: "Adicione suas imagens",
        description: "Fotos, capturas de tela ou digitalizações, quantas precisar."
      },
      {
        title: "Escolha o idioma",
        description: "E marque a caixa se forem fotos de páginas de papel."
      },
      {
        title: "Leia e baixe",
        description: "Copie cada texto ou baixe um TXT ou um ZIP."
      }
    ],
    features: [
      {
        title: "Várias de uma vez",
        description: "Cada imagem é lida por vez, com o progresso exibido."
      },
      {
        title: "19 idiomas",
        description: "Incluindo chinês, japonês, coreano, tailandês, hindi e russo."
      },
      {
        title: "Endireita fotos",
        description: "Páginas fotografadas de lado são encontradas e endireitadas antes da leitura."
      }
    ],
    faqs: [
      {
        question: "Qual é a precisão?",
        answer: "Texto impresso nítido é lido muito bem. Letra de mão, texto muito pequeno e fotos borradas são lidos mal; confira nomes, números e valores antes de usá-los."
      },
      {
        question: "Quando devo marcar “São fotos de páginas de papel”?",
        answer: "Quando as imagens são fotos de documentos tiradas com o celular, principalmente de lado. Deixe desmarcado para capturas de tela e digitalizações, que já são planas."
      },
      {
        question: "Posso obter um PDF pesquisável?",
        answer: "Sim: coloque as imagens em um PDF com Escanear para PDF ou JPG para PDF e depois use o OCR PDF."
      },
      {
        question: "Minhas imagens são enviadas?",
        answer: "Não. O texto é lido no seu dispositivo; só os dados do idioma são baixados, uma única vez."
      }
    ]
  },
};
