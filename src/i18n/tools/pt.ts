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
    tagline: "Remova o fundo de uma foto com IA que roda no seu dispositivo e salve um PNG transparente.",
    intro:
      "Remover fundo recorta o assunto principal de uma foto e remove tudo o que está atrás dele, usando um modelo de IA que roda no seu navegador, então suas imagens nunca saem do seu dispositivo. Escolha Rápido, um modelo menor que é ágil e melhor para fotos de pessoas, ou Melhor qualidade, um modelo maior com resultados melhores em qualquer assunto, incluindo produtos, animais de estimação e objetos. Salve o resultado como PNG transparente ou coloque-o sobre uma cor sólida.",
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
          "Cabelos finos, pelos, vidro e assuntos com cores parecidas com as do fundo são difíceis para qualquer modelo. Experimente o Melhor qualidade, ou use uma foto com contraste claro entre o assunto e o fundo.",
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
          "Esta ferramenta converte uma foto por vez. Se um único arquivo HEIC tiver várias imagens, como uma sequência em modo Burst, a primeira imagem é convertida.",
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
  "pdf-to-jpg": {
    name: "PDF para JPG",
    shortName: "PDF → JPG",
    tagline: "Salve cada página de um PDF como imagem JPG ou PNG, uma página por vez ou todas juntas em um ZIP. Nada é enviado.",
    intro:
      "O PDF para JPG transforma as páginas de um PDF em imagens que você pode postar, compartilhar em um chat, inserir em um slide ou enviar a um formulário que só aceita imagens. Escolha JPG para arquivos pequenos ou PNG para textos nítidos, e defina a resolução: 72 dpi para telas, 150 dpi para a maioria dos usos ou 300 dpi para impressão. Baixe uma única página ou todas de uma vez em um arquivo ZIP. O PDF é aberto pelo seu navegador no seu dispositivo, então documentos privados nunca são enviados.",
    seoTitle: "Converter PDF para JPG – Todas as páginas, grátis",
    seoDescription:
      "Converter PDF para JPG ou PNG no navegador. Escolha 72, 150 ou 300 dpi e baixe uma página ou todas em um ZIP. Grátis e sem upload.",
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
        description: "Selecione JPG ou PNG e 72, 150 ou 300 dpi.",
      },
      {
        title: "Baixe",
        description: "Salve uma única página ou baixe todas as páginas juntas em um arquivo ZIP.",
      },
    ],
    features: [
      {
        title: "Todas as páginas ou só uma",
        description: "Baixe a página de que precisa, ou todas de uma vez em um ZIP.",
      },
      {
        title: "Resolução para impressão",
        description: "Renderize em até 300 dpi para textos nítidos e impressão.",
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
          "150 dpi serve para a maioria dos usos, de compartilhar a slides. Escolha 300 dpi para imprimir ou dar zoom em textos pequenos, e 72 dpi para os menores arquivos. Resoluções maiores demoram mais e geram arquivos maiores.",
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
      "O Juntar PDF une dois ou mais arquivos PDF em um único documento. Adicione os arquivos, coloque-os em ordem com os botões de mover, confira a primeira página de cada um e baixe um único PDF com todas as páginas em sequência. É o jeito rápido de enviar um relatório com os anexos, várias páginas digitalizadas ou um conjunto de notas fiscais como um só arquivo. A junção acontece no seu navegador, então seus documentos nunca são enviados a um servidor.",
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
          "Os links nas páginas são mantidos. A lista de marcadores (o sumário no painel lateral do leitor de PDF) não é copiada para o arquivo combinado.",
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
          "Use a caixa de seleção abaixo de cada página, ou Selecionar tudo e desmarque as que não precisar.",
      },
      {
        title: "Baixe",
        description: "Salve um novo PDF só com essas páginas, na ordem original.",
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
    tagline: "Reordene, gire e exclua páginas de PDF e salve o novo PDF. Funciona no seu dispositivo.",
    intro:
      "O Organizar PDF mostra todas as páginas de um PDF para você colocar tudo em ordem: mova páginas para antes ou para depois, endireite digitalizações que ficaram de lado e exclua páginas em branco ou indesejadas. Cada página tem seus próprios botões, que também funcionam pelo teclado, e com o mouse você pode arrastar as páginas para o lugar. Desfazer todas as alterações deixa tudo como era. Quando estiver certo, baixe o novo PDF. Tudo isso acontece no seu navegador, então o documento nunca é enviado.",
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
        answer: "Junte os arquivos primeiro com o Juntar PDF e depois organize o arquivo combinado aqui.",
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
    tagline: "Gire todas as páginas, ou só as que você escolher, em 90 ou 180 graus. Funciona no seu dispositivo.",
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
        description: "Selecione 90° à direita, 180° ou 90° à esquerda, para todas as páginas ou para as que você marcar.",
      },
      {
        title: "Baixe",
        description: "Salve o PDF com as páginas giradas de vez.",
      },
    ],
    features: [
      {
        title: "Todas ou só as selecionadas",
        description: "Corrija uma digitalização de lado sem mexer no resto.",
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
        answer: "Use o Organizar PDF, em que cada página tem seu próprio botão de girar.",
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
      "O Adicionar números de página coloca um número em cada página de um PDF, algo de que relatórios, teses e apostilas impressas muitas vezes precisam. Escolha uma de seis posições, no topo ou no rodapé, um formato (1, 1 / N ou – 1 –), o número inicial, o tamanho do texto e a distância da borda. Você também pode deixar a primeira página, como uma capa, sem número. Uma prévia mostra como o número vai ficar. Os números são adicionados no seu navegador, então o documento nunca é enviado.",
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
      "O Marca d'água em PDF adiciona um carimbo como CONFIDENCIAL, RASCUNHO, seu nome ou seu logo às páginas de um PDF. Digite o texto em qualquer idioma ou escolha uma imagem de logo, depois defina o tamanho, a opacidade e o ângulo e arraste a marca para onde quiser na prévia da página, ou use os controles deslizantes de posição. Aplique a todas as páginas ou a um intervalo de páginas. A marca d’água é adicionada no seu navegador, então o documento nunca é enviado.",
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
          "Defina o tamanho, a opacidade e o ângulo, depois arraste na prévia ou use os controles deslizantes.",
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
          "Ela é adicionada como uma imagem sobre a página. Alguém com um editor de PDF ainda poderia removê-la, então a marca d’água desencoraja cópias em vez de impedi-las.",
      },
      {
        question: "Posso aplicar a marca d’água só em algumas páginas?",
        answer: "Sim. Escolha Páginas e digite um intervalo como 1-3, 5.",
      },
      {
        question: "A marca d’água cobre o texto?",
        answer:
          "Diminua a opacidade para manter a página legível. 15–30% é o comum para marcas d’água diagonais.",
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
      "O Assinar PDF coloca sua assinatura manuscrita em um documento sem precisar imprimir e digitalizar. Desenhe a assinatura com o mouse, o dedo ou uma caneta stylus, digite seu nome ou use uma foto da sua assinatura, cujo fundo branco pode ficar transparente. Depois escolha a página, defina o tamanho e arraste a assinatura para o lugar ou use os controles deslizantes de posição. A assinatura é adicionada no seu navegador, então o documento e a sua assinatura nunca são enviados.",
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
          "Assine uma página, baixe, depois abra o PDF assinado de novo e coloque a assinatura na próxima página.",
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
    tagline: "Apare as margens de todas as páginas de um PDF. Funciona no seu dispositivo.",
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
        description: "Salve o PDF com todas as páginas cortadas.",
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
          "As mesmas margens valem para todas as páginas. Para cortar páginas de formas diferentes, divida o PDF, corte cada parte e junte tudo de novo.",
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
  "passport-photo-maker": {
    name: "Foto para passaporte",
    shortName: "Foto para passaporte",
    tagline: "Crie uma foto para passaporte ou visto no tamanho certo, com fundo liso opcional, e imprima várias em uma folha.",
    intro:
      "O Foto para passaporte transforma uma foto comum em uma foto para passaporte, visto ou documento no tamanho exato de que você precisa: 35 × 45 mm, 2 × 2 polegadas, 33 × 48 mm ou um tamanho personalizado. Mova e aproxime a foto até o topo da cabeça e o queixo ficarem nas linhas-guia, troque o fundo por branco, cinza-claro ou azul-claro liso se precisar e baixe uma foto a 300 DPI ou uma folha de impressão para papel fotográfico 4 × 6 polegadas ou A4, com linhas para cortar. Tudo acontece no seu navegador, então sua foto nunca é enviada.",
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
          "Um modelo de IA é baixado uma vez (cerca de 16 MB) e roda no seu navegador para separar você do fundo. Confira as bordas ao redor do cabelo antes de imprimir.",
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
        description: "Arraste ou escolha um JPG ou PNG. WebP e HEIC são convertidos para JPG primeiro.",
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
      "O Desfocar fundo dá a qualquer foto o fundo suave e fora de foco do modo retrato de uma câmera. Um modelo de IA encontra a pessoa no seu dispositivo e, então, o fundo é desfocado enquanto o assunto continua nítido, sem halo borrado em volta das bordas. Um controle deslizante define a intensidade do desfoque, e você salva o resultado como JPG ou PNG. Nada é enviado: a foto e o modelo ficam no seu navegador.",
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
          "Ele é feito para fotos de pessoas. Animais de estimação e objetos muitas vezes funcionam, mas o modelo pode deixar passar partes deles; nesses casos, confira as bordas antes de salvar.",
      },
      {
        question: "Por que a primeira foto é mais lenta?",
        answer:
          "O modelo de IA é baixado uma vez (cerca de 16 MB) e fica no seu navegador. Depois disso, as fotos são processadas em poucos segundos.",
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
      "O Trocar fundo substitui o fundo de uma foto por uma cor sólida ou uma imagem à sua escolha. Um modelo de IA recorta a pessoa no seu dispositivo e a coloca sobre o novo fundo, ajustado para preencher o quadro. Escolha branco para um visual limpo de produto ou de perfil, qualquer cor do seletor, ou use sua própria imagem de fundo, e baixe como JPG ou PNG. A foto nunca é enviada.",
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
          "Funciona melhor com pessoas. Para produtos, animais de estimação e objetos, o modelo Melhor qualidade do Remover fundo dá bordas mais limpas; depois, você pode adicionar um fundo em qualquer editor.",
      },
      {
        question: "Por que a primeira foto é mais lenta?",
        answer:
          "O modelo de IA é baixado uma vez (cerca de 16 MB) e fica no seu navegador, então as próximas fotos levam só alguns segundos.",
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
    tagline: "Copie o texto de uma foto, captura de tela ou digitalização (OCR) em 10 idiomas. A imagem é lida no seu dispositivo.",
    intro:
      "O Imagem para texto lê as palavras de uma foto, captura de tela ou página digitalizada e as entrega como texto que você pode copiar, editar ou salvar como arquivo TXT. Ele usa o Tesseract OCR rodando no seu navegador, com inglês, espanhol, francês, alemão, português, italiano, japonês, coreano, indonésio e turco. Uma barra de progresso mostra quanto já foi feito e, se a imagem estiver borrada demais para um resultado confiável, a página avisa. A imagem nunca é enviada.",
    seoTitle: "Imagem para texto – OCR online grátis",
    seoDescription:
      "Imagem para texto: extraia o texto de imagens, capturas de tela e digitalizações com OCR grátis em 10 idiomas. Copie ou baixe. Nada é enviado.",
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
        title: "10 idiomas",
        description: "Incluindo japonês e coreano. Cada idioma baixa de 1 a 4 MB uma única vez.",
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
      "O Gerador de QR Code cria um QR Code para um link, texto simples, login de Wi-Fi, e-mail, número de telefone ou cartão de contato. Escolha as cores, o tamanho e a correção de erros, adicione seu logo no meio e baixe como imagem PNG ou arquivo SVG, que fica nítido em qualquer tamanho. Cada código é conferido com uma leitura de volta, então você sabe que ele funciona antes de imprimir. Os códigos são criados no seu navegador, grátis, sem cadastro e sem prazo de validade.",
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
      "O Leitor de QR Code decodifica QR Codes de uma foto, de uma captura de tela ou da sua câmera. Ele mostra o que o código contém antes que qualquer coisa aconteça: o endereço completo do site, uma rede Wi-Fi e a senha, um e-mail, um número de telefone ou um cartão de contato que você pode salvar. Os links nunca abrem sozinhos, então você pode conferi-los antes, um hábito útil porque QR Codes são muito usados para levar pessoas a sites falsos. Imagens e quadros da câmera são lidos no seu dispositivo.",
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
};
