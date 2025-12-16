PRD 3.0 – Adega Anita: O "Super App" de Delivery (Mobile Storefront)

Versão: 3.0.0 (Deep Research Edition)
Status: Pronto para Engenharia
Arquitetura: Single Source of Truth (SSoT) com Supabase
Stack UI: React Native Skia + Reanimated 3 + NativeWind v4
Objetivo: Transcender a entrega logística e criar uma experiência de "Design Espacial" (Apple-like) que maximize a retenção através de gamificação e excelência sensorial.

1. Visão Estratégica: O Novo Paradigma

O mercado de delivery evoluiu. A paridade funcional com iFood/Rappi é o mínimo; a vitória está na Experiência do Utilizador (UX) e na Retenção.
Este aplicativo não será um mero catálogo de vinhos. Será uma extensão digital premium da marca Adega Anita, utilizando conceitos de Design Espacial (profundidade, materiais translúcidos, física) para justificar o valor dos produtos e criar um vínculo emocional com o cliente.

2. Engenharia de Interface: O "Aceternity Native"

Para replicar a estética da web (Aceternity UI) no mobile sem sacrificar a performance, abandonamos as bibliotecas padrões em favor de renderização na GPU.

2.1. Stack Tecnológica Visual

Motor Gráfico: React Native Skia (@shopify/react-native-skia).

Uso: Renderização de Glassmorphism Real (BackdropFilter), Texturas de Noise (Ruído Procedural via Shaders) e Mesh Gradients fluidos.

Motor de Animação: React Native Reanimated 3.

Uso: Toda a animação deve ter física (Springs). Nada de curvas lineares. O toque deve ter resposta inercial.

Micro-interações: Rive (ou Lottie otimizado).

Uso: Substituir loaders estáticos por animações interativas e gamificação viva (ex: estafeta a avançar na barra de progresso).

Estilização: NativeWind v4.

Uso: Ponte entre TailwindCSS e estilos nativos, permitindo animar classes utilitárias.

Feedback Tátil: Expo Haptics (react-native-haptic-feedback).

Regra: Cada ação de sucesso (adicionar ao carrinho) ou erro deve ter uma resposta vibratória distinta ("Light Impact" vs "Notification Error").

2.2. Receita do Componente "Glass Card" (Padrão do App)

Não usaremos <View> simples. O cartão padrão do app será um Canvas Skia composto por:

BackdropBlur: Desfoque gaussiano do conteúdo traseiro.

Fill Layer: Cor sólida (ex: #000) com 5-10% de opacidade.

Noise Shader: Um shader SkSL (Skia Shading Language) injetado para criar granulação "viva".

Border Gradient: Borda interna simulando reflexo de luz (borda superior branca, inferior transparente).

3. Arquitetura de Dados & Backend (Supabase SSoT)

O App Mobile conecta-se diretamente ao Supabase do Admin, sem middleware (BFF).

3.1. Módulos de Dados

Busca Elástica (Search Engine): Implementar Full Text Search no Postgres (usando websearch_to_tsquery) para permitir buscas por facetas: "Vinho tinto seco < 50 reais".

Inventário Real-Time: O app apenas lê o saldo calculado. A "reserva" de stock ocorre na criação do pedido (Status: pending).

3.2. Schema Unificado (Novas Estruturas)

app_profiles: Dados estendidos (Gamificação, Nível de Fidelidade).

delivery_orders:

address_snapshot (JSONB): Endereço imutável.

delivery_proof (Text): Foto da entrega (futuro).

loyalty_missions (Gamificação):

mission_type (streak, frequency, value).

reward_config (JSONB).

4. Módulos Funcionais (Baseado em Benchmarks)

4.1. Descoberta Contextual (Home)

Feed Dinâmico: O layout muda conforme o horário.

Sexta 18h: Destaque para "Esquenta" e "Destilados".

Domingo 11h: Destaque para "Vinhos para Almoço" e "Espumantes".

Prova Social: Cards de produto exibem tags como "Elogiado pela embalagem" ou "Mais vendido no seu bairro" (Query geoespacial).

4.2. Logística & Rastreamento (O "Cérebro")

ETA Dinâmico: Exibir previsão de entrega baseada em carga da cozinha + tempo de deslocamento.

Wait States Interativos: A tela de rastreamento não é passiva. Use animações Rive onde o utilizador pode interagir enquanto espera (reduz a percepção de tempo).

Mapbox/Google Maps: Renderização da rota do estafeta em tempo real (via Subscription do Supabase na tabela de geolocalização do entregador).

4.3. Gamificação & Fidelidade (O Motor de Retenção)

Inspirado no iFood/Rappi, mas com visual premium.

Streaks (Ofensivas): "Peça 3 semanas seguidas para ganhar Frete Grátis vitalício".

Barra de Progresso Visual: Não use texto ("Faltam 2 pedidos"). Use um gráfico Skia de um copo a encher de vinho conforme o utilizador avança no nível de fidelidade.

4.4. Carrinho & Checkout

Upsell Inteligente: "Faltam R$ 15,00 para entrega grátis". Sugerir produtos (snacks/águas) que preencham exatamente essa lacuna (Lógica no Client-side).

Handshake Virtual: Validação final de stock milissegundos antes do pagamento.

5. Diretrizes de Implementação "Apple-Like"

5.1. Navegação

Usar Expo Router.

Transições de tela devem ser Shared Element Transitions sempre que possível (a foto do vinho na lista expande para ser o header da tela de detalhes).

5.2. Tipografia & Cores

Fonte: San Francisco (iOS) / Roboto (Android) ou uma fonte Grotesque moderna (Inter/Satoshi).

Paleta: Dark Mode profundo. Evite preto absoluto (#000). Use Cinza Carvão (#121212) para permitir que sombras e profundidade funcionem.

6. Roadmap de Desenvolvimento (Vibecoding)

Fase 1: A Fundação Gráfica (Dias 1-2)

Setup Expo + NativeWind v4.

Implementação do <SkiaGlassCard /> e do <NoiseBackground />.

Configuração do Tema e Tipografia.

Fase 2: Integração de Dados SSoT (Dias 3-4)

Conexão Supabase Client.

Feed de Produtos com imagens do Storage.

Busca Contextual (Search bar com Blur).

Fase 3: Core Loop & Gamificação (Dias 5-7)

Carrinho (Zustand).

Checkout com validação de stock.

Implementação visual das "Missões" (Barra de progresso Rive/Skia).

Fase 4: Polimento Sensorial (Dia 8+)

Adicionar Haptics em todas as interações.

Ajustar curvas de animação Reanimated (Springs).

Testes de performance em dispositivos reais (garantir 60fps).

Nota Técnica: Este projeto exige conhecimento avançado de shaders e animação declarativa. Não usaremos componentes prontos do shadcn para a UI principal, apenas a lógica headless (radix/reusables) envelopada em nossos componentes Skia customizados.