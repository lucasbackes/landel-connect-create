export type Lang = "pt" | "en" | "es";

export const translations = {
  pt: {
    nav: { features: "Recursos", gallery: "Galeria", bridge: "Ponte Landel", download: "Baixar" },
    hero: {
      badge: "Beta disponível • Android & iOS",
      title1: "Conecte seu celular",
      title2: "ao mundo real.",
      subtitle:
        "Landel é a ponte entre o seu smartphone e Arduino, robôs e IoT. Controle, monitore e ensine — sem código travado, sem complexidade.",
      ctaPrimary: "Baixar APK (Beta)",
      ctaSecondary: "Conhecer a Ponte Landel",
      statRobots: "Robôs controlados",
      statSchools: "Escolas piloto",
      statSensors: "Sensores ao vivo",
    },
    features: {
      eyebrow: "Casos de Uso",
      title: "Um app, infinitas possibilidades",
      subtitle: "Da sala de aula à horta inteligente, o Landel se adapta ao seu projeto.",
      items: [
        {
          title: "Controle de Robôs",
          desc: "Pilote robôs Arduino e plataformas móveis via Bluetooth/BLE com layouts customizáveis de botões e joysticks.",
        },
        {
          title: "Hortas & Agro IoT",
          desc: "Monitore umidade do solo, temperatura e acione irrigação automatizada. Converse com sua horta residencial.",
        },
        {
          title: "Automação Residencial",
          desc: "Controle relés para lâmpadas, monitore consumo de energia e gerencie sensores de presença em tempo real.",
        },
        {
          title: "Estações Meteorológicas",
          desc: "Telemetria ao vivo de chuva, vento e pressão atmosférica com gráficos de linha interativos.",
        },
        {
          title: "Ferramenta Pedagógica",
          desc: "Ecossistema ideal para escolas. Tarefas concorrentes (lógica Scoop) e conexões limpas via Ponte de hardware.",
        },
        {
          title: "Maker Avançado",
          desc: "APIs abertas, dashboards customizáveis e suporte a múltiplos protocolos para makers que querem ir além.",
        },
      ],
    },
    gallery: {
      eyebrow: "Galeria",
      title: "Landel na prática",
      subtitle: "Veja o Landel funcionando em diferentes contextos.",
      items: [
        { tag: "App", caption: "Modo Gamepad com layout customizável" },
        { tag: "Educação", caption: "Sala de aula controlando robôs em tempo real" },
        { tag: "Maker", caption: "Horta residencial inteligente com sensores" },
      ],
    },
    bridge: {
      eyebrow: "Hardware Exclusivo",
      title: "A Ponte Landel",
      subtitle:
        "Nosso hardware comercial recebe o sinal do seu celular (Android e iOS via BLE) e retransmite via rádio frequência nRF24L01 (2.4 GHz) para vários robôs simultaneamente — perfeito para salas de aula inteiras, sem interferência de frequência.",
      points: [
        { title: "Conexão dupla", desc: "BLE para celular + RF 2.4 GHz para até dezenas de robôs ao mesmo tempo." },
        { title: "Sem interferência", desc: "Canais isolados garantem comunicação limpa mesmo com muitos dispositivos." },
        { title: "Plug & play", desc: "Pareie em segundos. Compatível com Android e iOS nativamente." },
      ],
      cta: "Reservar minha Ponte",
    },
    footer: {
      tagline: "Conectando smartphones ao mundo físico desde 2024.",
      product: "Produto",
      company: "Empresa",
      social: "Redes",
      links: {
        download: "Download",
        bridge: "Ponte Landel",
        docs: "Documentação",
        about: "Sobre",
        contact: "Contato",
        blog: "Blog",
      },
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: { features: "Features", gallery: "Gallery", bridge: "Landel Bridge", download: "Download" },
    hero: {
      badge: "Beta available • Android & iOS",
      title1: "Connect your phone",
      title2: "to the real world.",
      subtitle:
        "Landel is the bridge between your smartphone and Arduino, robots and IoT. Control, monitor and teach — no locked code, no complexity.",
      ctaPrimary: "Download APK (Beta)",
      ctaSecondary: "Meet the Landel Bridge",
      statRobots: "Robots controlled",
      statSchools: "Pilot schools",
      statSensors: "Live sensors",
    },
    features: {
      eyebrow: "Use Cases",
      title: "One app, endless possibilities",
      subtitle: "From the classroom to the smart garden, Landel adapts to your project.",
      items: [
        { title: "Robot Control", desc: "Drive Arduino robots and mobile platforms over Bluetooth/BLE with custom button and joystick layouts." },
        { title: "Gardens & Agro IoT", desc: "Monitor soil moisture, temperature and trigger automated irrigation. Talk to your home garden." },
        { title: "Home Automation", desc: "Control relays for lights, monitor energy usage and manage presence sensors in real time." },
        { title: "Weather Stations", desc: "Live telemetry from rain, wind and pressure sensors with interactive line charts." },
        { title: "Teaching Tool", desc: "Perfect ecosystem for schools. Concurrent tasks (Scoop logic) and clean connections via our hardware Bridge." },
        { title: "Advanced Maker", desc: "Open APIs, customizable dashboards and multi-protocol support for makers who go further." },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Landel in action",
      subtitle: "See Landel running in different contexts.",
      items: [
        { tag: "App", caption: "Gamepad mode with customizable layout" },
        { tag: "Education", caption: "Classroom driving robots in real time" },
        { tag: "Maker", caption: "Smart home garden with live sensors" },
      ],
    },
    bridge: {
      eyebrow: "Exclusive Hardware",
      title: "The Landel Bridge",
      subtitle:
        "Our commercial hardware receives signal from your phone (Android and iOS via BLE) and rebroadcasts it via nRF24L01 radio (2.4 GHz) to many robots at once — perfect for entire classrooms, with zero frequency interference.",
      points: [
        { title: "Dual link", desc: "BLE to phone + 2.4 GHz RF to dozens of robots simultaneously." },
        { title: "Interference-free", desc: "Isolated channels keep communication clean even with many devices." },
        { title: "Plug & play", desc: "Pair in seconds. Native Android and iOS support." },
      ],
      cta: "Reserve my Bridge",
    },
    footer: {
      tagline: "Connecting smartphones to the physical world since 2024.",
      product: "Product",
      company: "Company",
      social: "Social",
      links: { download: "Download", bridge: "Landel Bridge", docs: "Docs", about: "About", contact: "Contact", blog: "Blog" },
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: { features: "Funciones", gallery: "Galería", bridge: "Puente Landel", download: "Descargar" },
    hero: {
      badge: "Beta disponible • Android & iOS",
      title1: "Conecta tu celular",
      title2: "al mundo real.",
      subtitle:
        "Landel es el puente entre tu smartphone y Arduino, robots e IoT. Controla, monitorea y enseña — sin código bloqueado, sin complejidad.",
      ctaPrimary: "Descargar APK (Beta)",
      ctaSecondary: "Conocer el Puente Landel",
      statRobots: "Robots controlados",
      statSchools: "Escuelas piloto",
      statSensors: "Sensores en vivo",
    },
    features: {
      eyebrow: "Casos de Uso",
      title: "Una app, infinitas posibilidades",
      subtitle: "Del aula al huerto inteligente, Landel se adapta a tu proyecto.",
      items: [
        { title: "Control de Robots", desc: "Pilota robots Arduino y plataformas móviles vía Bluetooth/BLE con layouts personalizables." },
        { title: "Huertos & Agro IoT", desc: "Monitorea humedad del suelo, temperatura y activa riego automatizado. Habla con tu huerto." },
        { title: "Domótica", desc: "Controla relés para luces, monitorea consumo energético y gestiona sensores de presencia." },
        { title: "Estaciones Meteorológicas", desc: "Telemetría en vivo de lluvia, viento y presión con gráficos interactivos." },
        { title: "Herramienta Pedagógica", desc: "Ecosistema ideal para escuelas. Tareas concurrentes (lógica Scoop) y conexiones limpias vía nuestro Puente." },
        { title: "Maker Avanzado", desc: "APIs abiertas, dashboards personalizables y soporte multi-protocolo." },
      ],
    },
    gallery: {
      eyebrow: "Galería",
      title: "Landel en acción",
      subtitle: "Ve Landel funcionando en distintos contextos.",
      items: [
        { tag: "App", caption: "Modo Gamepad con layout personalizable" },
        { tag: "Educación", caption: "Aula controlando robots en tiempo real" },
        { tag: "Maker", caption: "Huerto residencial inteligente" },
      ],
    },
    bridge: {
      eyebrow: "Hardware Exclusivo",
      title: "El Puente Landel",
      subtitle:
        "Nuestro hardware comercial recibe la señal de tu celular (Android e iOS vía BLE) y la retransmite por radio nRF24L01 (2.4 GHz) a varios robots a la vez — perfecto para aulas enteras, sin interferencia.",
      points: [
        { title: "Conexión doble", desc: "BLE al celular + RF 2.4 GHz a decenas de robots simultáneos." },
        { title: "Sin interferencia", desc: "Canales aislados garantizan comunicación limpia." },
        { title: "Plug & play", desc: "Empareja en segundos. Compatible con Android e iOS." },
      ],
      cta: "Reservar mi Puente",
    },
    footer: {
      tagline: "Conectando smartphones al mundo físico desde 2024.",
      product: "Producto",
      company: "Empresa",
      social: "Redes",
      links: { download: "Descargar", bridge: "Puente Landel", docs: "Documentación", about: "Acerca", contact: "Contacto", blog: "Blog" },
      rights: "Todos los derechos reservados.",
    },
  },
} as const;
