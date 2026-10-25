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
      "Comprimir imagem reduz o tamanho do arquivo de uma foto para ela carregar mais rápido em um site ou caber no limite de um e-mail ou envio. A imagem é salva de novo em WebP (o padrão), AVIF, JPG ou PNG na qualidade que você escolher, e o novo tamanho estimado e a porcentagem economizada aparecem enquanto você move o controle. O modo Tamanho do arquivo define a qualidade para você quando é preciso ficar abaixo de um limite como 100 KB.",
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
          "O WebP vem selecionado por padrão. O AVIF costuma gerar os menores arquivos, mas demora mais para codificar; o JPG abre em qualquer lugar; e o PNG é sem perdas, então é o que menos economiza espaço.",
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
      "Espelhar imagem online grátis. Inverta uma foto na horizontal ou na vertical, corrija selfies e textos ao contrário e salve em JPG, PNG, WebP ou AVIF. Sem upload.",
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
          "Esta página converte um arquivo por vez. O Redimensionar imagens em lote pode salvar até 50 imagens em PNG em um único ZIP se você definir a escala em 100%.",
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
      "Converter JPG para WebP online grátis. Tenha imagens menores para sites mais rápidos, ajuste a qualidade de 10% a 100% e mantenha o tamanho original. Sem upload.",
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
      "Converter WebP para JPG online grátis. Faça imagens WebP abrirem em qualquer app ou formulário, escolha uma cor para as áreas transparentes e defina a qualidade.",
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
      "Converter WebP para PNG online grátis. Mantenha o fundo transparente e tenha um PNG sem perdas que abre em qualquer editor de imagem. Convertido no seu navegador.",
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
      "Remover metadados da imagem cria uma cópia limpa da sua foto sem as informações EXIF ocultas. Fotos de celulares e câmeras costumam registrar a localização GPS onde foram tiradas, o modelo do aparelho e a data e hora. Esta ferramenta redesenha a imagem a partir dos pixels e salva um novo arquivo, então essas informações não são levadas junto, e mostra o novo tamanho do arquivo antes do download.",
    seoTitle: "Remover dados EXIF de fotos: GPS e metadados",
    seoDescription:
      "Remover metadados EXIF de fotos grátis. Apague a localização GPS, o modelo da câmera e a data antes de compartilhar uma foto. Processado no navegador, sem envio.",
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
        title: "Escolha o formato e a qualidade",
        description:
          "O formato original é mantido por padrão. Para JPG e WebP, use qualidade de 90% a 100% para ficar perto do original, ou escolha PNG para uma saída sem perdas.",
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
        title: "Cópia limpa a partir dos pixels",
        description: "A imagem é redesenhada a partir dos pixels, então nenhum dado oculto pode ser copiado por engano.",
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
          "Todos: dados EXIF (câmera, configurações, data e GPS), campos IPTC e XMP como autor ou direitos autorais, e o perfil de cor incorporado. Só a imagem visível é mantida.",
      },
      {
        question: "Remover metadados muda a qualidade da imagem?",
        answer:
          "A imagem é salva de novo. O PNG mantém cada pixel, enquanto JPG, WebP e AVIF são comprimidos de novo, então escolha uma qualidade alta. Fotos com perfil de cor amplo, como muitas fotos do iPhone, podem ficar um pouco menos vivas, porque o perfil não é mantido.",
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
      "Pegue cores de qualquer imagem online grátis. Clique em um pixel para ver o código HEX, RGB, HSL, HSV e CMYK, use a lupa para mais precisão e copie com um clique.",
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
      "Adicionar texto à imagem coloca uma ou mais linhas de texto sobre uma foto. Arraste o texto para qualquer ponto da prévia, ou coloque-o em cima, no centro ou embaixo, e estilize com sete fontes, negrito ou itálico, alinhamento, opacidade, sombra, contorno e uma caixa de fundo colorida. O texto é desenhado na imagem em resolução total quando você baixa.",
    seoTitle: "Escrever em foto online: adicionar texto à imagem",
    seoDescription:
      "Escrever em foto online grátis. Arraste o texto para onde quiser, escolha fonte, tamanho, cor, contorno, sombra e caixa de fundo e salve em JPG, PNG, WebP ou AVIF.",
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
          "A ferramenta adiciona um bloco de texto, que pode ter várias linhas. Para colocar texto em um segundo lugar, baixe o resultado, abra de novo e adicione o próximo texto.",
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
      "Marca d'água em imagem adiciona um aviso de direitos autorais, o nome de um site ou um logo sobre uma foto. Coloque uma marca d'água de texto ou logo em uma de nove posições e defina o tamanho e a opacidade, ou repita o texto pela imagem inteira, o que é muito mais difícil de remover cortando. Os logos podem ser arquivos PNG, WebP, JPG ou SVG; um logo com fundo transparente fica melhor.",
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
        description: "Mantenha o formato original ou escolha outro e clique em Baixar.",
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
      "Arredondar cantos de imagem online grátis ou cortar a foto em círculo. Defina o raio dos cantos, mantenha o fundo transparente em PNG ou escolha uma cor para JPG.",
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
      "Gerador de favicon grátis. Envie um logo PNG, JPG ou SVG e receba favicon.ico, ícones PNG de 16 a 512 px, um ícone Apple touch e um web manifest em um único ZIP.",
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
      "Converter imagem para data URI online grátis. Receba uma string data:image em Base64 com o tipo MIME correto e copie como tag img em HTML ou regra de fundo em CSS.",
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
  "photo-filters": {
    name: "Filtros e efeitos para fotos",
    shortName: "Filtros",
    tagline: "Aplique estilos prontos como Vintage, Noir ou Cinematográfico e ajuste brilho, contraste, cor e vinheta.",
    intro:
      "Filtros e efeitos para fotos muda o visual e o clima de uma foto. Comece com um dos oito estilos prontos, como Cinematográfico, Vintage anos 70, Noir sombrio ou Pôr do sol, e depois ajuste brilho, contraste, saturação, sépia, preto e branco, matiz, nitidez, vinheta e desfoque suave com os controles. Uma visão dividida permite comparar a foto editada com a original antes de baixar em PNG, JPG ou WebP.",
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
          "Teste Cinematográfico, Vintage anos 70, Cyberpunk, Noir sombrio, Pôr do sol, Frio desbotado, HDR dramático ou Negativo. Original remove todos os efeitos.",
      },
      {
        title: "Ajuste com os controles",
        description:
          "Ajuste brilho, contraste, saturação, sépia, preto e branco, matiz, nitidez, vinheta e foco suave até a foto ficar do jeito certo.",
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
        title: "Nove controles de ajuste",
        description: "Brilho, contraste e saturação até 200%, além de sépia, preto e branco, matiz, nitidez, vinheta e desfoque.",
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
    tagline: "Remova o fundo de uma foto com um modelo de IA que roda no seu dispositivo e salve um PNG transparente.",
    intro:
      "Remover fundo recorta o assunto principal de uma foto e remove tudo o que está atrás dele. Ele usa um modelo de IA que roda no seu navegador, então suas imagens nunca saem do seu dispositivo. O modo Pessoas usa um modelo pequeno e rápido que funciona bem no celular e é melhor para pessoas, enquanto o modo Objetos (HQ) usa um modelo maior para produtos, animais de estimação e outros objetos. Salve o resultado como PNG transparente, ou coloque sobre uma cor sólida e salve em PNG ou JPG.",
    seoTitle: "Remover fundo de imagem grátis, no seu aparelho",
    seoDescription:
      "Remover fundo de imagem grátis com IA que roda no seu navegador. Gere um PNG transparente ou um fundo de cor sólida. Suas fotos nunca saem do seu dispositivo.",
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
        title: "Escolha um modo",
        description:
          "Pessoas vem selecionado por padrão e é melhor para pessoas. Escolha Objetos (HQ) para produtos, animais de estimação e outros assuntos, de preferência em um navegador de computador.",
      },
      {
        title: "Aguarde o resultado",
        description:
          "Na primeira vez, o modelo é baixado para o seu navegador; depois disso, ele é carregado do cache do navegador. Então o fundo é removido no seu dispositivo.",
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
        title: "Dois modelos",
        description: "Um modelo Pessoas pequeno e rápido, e um modelo Objetos (HQ) maior para produtos, animais de estimação e objetos.",
      },
      {
        title: "Baixado uma vez",
        description: "Seu navegador guarda o modelo depois do primeiro uso, então as próximas imagens começam bem mais rápido.",
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
        question: "Por que o primeiro uso demora mais?",
        answer:
          "O modelo precisa ser baixado primeiro: cerca de 7 a 13 MB no modo Pessoas e cerca de 115 MB no modo Objetos (HQ). Seu navegador o guarda, então os próximos usos começam bem mais rápido.",
      },
      {
        question: "Qual modo devo usar?",
        answer:
          "Use Pessoas para fotos de pessoas; é rápido e funciona no celular. Use Objetos (HQ) para produtos, animais de estimação e outros assuntos, principalmente quando as bordas importam.",
      },
      {
        question: "Funciona em celulares iPhone e Android?",
        answer:
          "Sim, o modo Pessoas foi feito para rodar no celular. O modo Objetos (HQ) é bem maior e funciona melhor em um navegador de computador com suporte a WebGPU; no celular ele pode ficar lento ou ficar sem memória.",
      },
      {
        question: "Posso colocar uma nova cor de fundo atrás do assunto?",
        answer:
          "Sim. Escolha uma cor sólida e salve em PNG ou JPG. Para um fundo transparente, salve em PNG.",
      },
      {
        question: "Por que algumas bordas não ficam perfeitas?",
        answer:
          "Cabelos finos, pelos, vidro e assuntos com cores parecidas com as do fundo são difíceis para qualquer modelo. Tente o modo Objetos (HQ), ou use uma foto com contraste claro entre o assunto e o fundo.",
      },
    ],
  },
};
