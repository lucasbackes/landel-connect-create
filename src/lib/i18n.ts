export type Lang = "pt" | "en" | "es";

export const translations = {
  pt: {
    nav: { features: "Recursos", gallery: "Galeria", download: "Baixar" },
    hero: {
      badge: "Beta disponível • Android & iOS",
      title1: "Conecte seu celular",
      title2: "ao mundo real.",
      subtitle:
        "Landel é a ponte entre o seu smartphone e Arduino, robôs e IoT. Conecte-se via Bluetooth Clássico e BLE para controlar, monitorar e ensinar — sem complexidade.",
      ctaPrimary: "Baixar no Google Play",
      ctaSecondary: "Baixar na App Store",
    },
    features: {
      eyebrow: "Casos de Uso",
      title: "Um app, infinitas possibilidades",
      subtitle: "Da sala de aula à horta inteligente, o Landel se adapta ao seu projeto.",
      items: [
        {
          title: "Controle de Robôs",
          desc: "Pilote robôs Arduino e plataformas móveis via Bluetooth Clássico e BLE, com layouts customizáveis de botões e joysticks.",
        },
        {
          title: "Hortas & Agro IoT",
          desc: "Monitore umidade do solo, temperatura e acione irrigação via Bluetooth Clássico e BLE. É necessário estar próximo do projeto. Para receber dados históricos armazenados (não ao vivo), o robô ou placa precisa ter essa capacidade.",
        },
        {
          title: "Automação Residencial",
          desc: "Controle relés para lâmpadas e monitore sensores via Bluetooth Clássico e BLE. É necessário estar próximo do projeto. Para receber dados históricos armazenados (não ao vivo), o robô ou placa precisa ter essa capacidade.",
        },
        {
          title: "Estações Meteorológicas",
          desc: "Acompanhe telemetria de chuva, vento e pressão via Bluetooth Clássico e BLE. É necessário estar próximo da estação. Para receber dados históricos armazenados (não ao vivo), o robô ou placa precisa ter essa capacidade.",
        },
        {
          title: "Ferramenta Pedagógica",
          desc: "Ecossistema ideal para escolas e iniciantes na robótica, com conexão Bluetooth simples entre celular e robôs.",
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
    footer: {
      tagline: "Conectando smartphones ao mundo físico desde 2024.",
      product: "Produto",
      company: "Empresa",
      links: {
        playstore: "Google Play",
        appstore: "App Store",
        docs: "Documentação",
        about: "Sobre",
        contact: "Contato",
        blog: "Blog",
      },
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: { features: "Features", gallery: "Gallery", download: "Download" },
    hero: {
      badge: "Beta available • Android & iOS",
      title1: "Connect your phone",
      title2: "to the real world.",
      subtitle:
        "Landel is the bridge between your smartphone and Arduino, robots and IoT. Connect via Classic Bluetooth and BLE to control, monitor and teach — no complexity.",
      ctaPrimary: "Get it on Google Play",
      ctaSecondary: "Download on the App Store",
    },
    features: {
      eyebrow: "Use Cases",
      title: "One app, endless possibilities",
      subtitle: "From the classroom to the smart garden, Landel adapts to your project.",
      items: [
        { title: "Robot Control", desc: "Drive Arduino robots and mobile platforms via Classic Bluetooth and BLE, with custom button and joystick layouts." },
        { title: "Gardens & Agro IoT", desc: "Monitor soil moisture, temperature and trigger automated irrigation via Classic Bluetooth and BLE. You need to be close to your project. To receive stored historical data (not live), your robot or board must support it." },
        { title: "Home Automation", desc: "Control relays for lights and monitor sensors via Classic Bluetooth and BLE. You need to be close to your project. To receive stored historical data (not live), your robot or board must support it." },
        { title: "Weather Stations", desc: "Track telemetry from rain, wind and atmospheric pressure via Classic Bluetooth and BLE. You need to be close to the station. To receive stored historical data (not live), your robot or board must support it." },
        { title: "Teaching Tool", desc: "Ideal ecosystem for schools and robotics beginners, with simple Bluetooth pairing between phone and robots." },
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
    footer: {
      tagline: "Connecting smartphones to the physical world since 2024.",
      product: "Product",
      company: "Company",
      links: { playstore: "Google Play", appstore: "App Store", docs: "Docs", about: "About", contact: "Contact", blog: "Blog" },
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: { features: "Funciones", gallery: "Galería", download: "Descargar" },
    hero: {
      badge: "Beta disponible • Android & iOS",
      title1: "Conecta tu celular",
      title2: "al mundo real.",
      subtitle:
        "Landel es el puente entre tu smartphone y Arduino, robots e IoT. Conéctate vía Bluetooth Clásico y BLE para controlar, monitorear y enseñar — sin complejidad.",
      ctaPrimary: "Disponible en Google Play",
      ctaSecondary: "Descargar en App Store",
    },
    features: {
      eyebrow: "Casos de Uso",
      title: "Una app, infinitas posibilidades",
      subtitle: "Del aula al huerto inteligente, Landel se adapta a tu proyecto.",
      items: [
        { title: "Control de Robots", desc: "Pilota robots Arduino y plataformas móviles vía Bluetooth Clásico y BLE, con layouts personalizables." },
        { title: "Huertos & Agro IoT", desc: "Monitorea humedad del suelo, temperatura y activa riego automatizado vía Bluetooth Clásico y BLE. Es necesario estar cerca del proyecto. Para recibir datos históricos almacenados (no en vivo), tu robot o placa debe tener esa capacidad." },
        { title: "Domótica", desc: "Controla relés para luces y monitorea sensores vía Bluetooth Clásico y BLE. Es necesario estar cerca del proyecto. Para recibir datos históricos almacenados (no en vivo), tu robot o placa debe tener esa capacidad." },
        { title: "Estaciones Meteorológicas", desc: "Sigue telemetría de lluvia, viento y presión atmosférica vía Bluetooth Clásico y BLE. Es necesario estar cerca de la estación. Para recibir datos históricos almacenados (no en vivo), tu robot o placa debe tener esa capacidad." },
        { title: "Herramienta Pedagógica", desc: "Ecosistema ideal para escuelas y principiantes en robótica, con conexión Bluetooth simple entre celular y robots." },
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
    footer: {
      tagline: "Conectando smartphones al mundo físico desde 2024.",
      product: "Producto",
      company: "Empresa",
      links: { playstore: "Google Play", appstore: "App Store", docs: "Documentación", about: "Acerca", contact: "Contacto", blog: "Blog" },
      rights: "Todos los derechos reservados.",
    },
  },
} as const;
