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
    privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: Maio de 2026",
      backToHome: "Voltar ao início",
      sections: [
        {
          title: "1. Coleta e Uso de Informações",
          content: `O Landel foi projetado como uma ferramenta de controle robótico, automação e monitoramento IoT (Internet das Coisas).

Dados Pessoais: O aplicativo não coleta, não armazena e não compartilha nenhum dado pessoal identificável do usuário (como nome, e-mail, CPF ou número de telefone) em servidores externos.

Dados de Sensores: Os dados exibidos no aplicativo (como umidade do solo, temperatura ou telemetria) são processados localmente em tempo real e pertencem exclusivamente ao usuário.`,
        },
        {
          title: "2. Permissões Requeridas e Justificativa",
          content: `Para funcionar corretamente, o Landel solicitará acesso a recursos específicos do seu smartphone. Cada permissão possui uma finalidade estritamente técnica:

Bluetooth e Bluetooth Low Energy (BLE): Necessário para localizar, parear e enviar comandos para as placas de desenvolvimento (Arduino, ESP32) e para a Ponte Landel. Sem isso, o controle dos robôs não é possível.

Localização (Apenas em versões aplicáveis do Android): O sistema operacional Android exige a permissão de localização aproximada para que o app possa escanear dispositivos Bluetooth ao redor. O Landel não rastreia e não armazena a sua posição geográfica.

Armazenamento / Mídia (Recurso de Compartilhamento): Utilizado exclusivamente quando o usuário aciona a função de compartilhar o Live Dashboard, permitindo que o app gere uma imagem temporária (.jpg) na memória do aparelho para ser enviada a outros aplicativos (como o WhatsApp).`,
        },
        {
          title: "3. Compras e Assinaturas (Versão Pro)",
          content: `O gerenciamento de assinaturas do plano Landel Pro é processado de forma segura através da plataforma RevenueCat e faturado diretamente pela Google Play Store.

O Landel não tem acesso aos seus dados de cartão de crédito ou informações de faturamento.

O RevenueCat utiliza apenas um identificador anônimo para validar se a sua conta ativa possui os benefícios do plano Pro.`,
        },
        {
          title: "4. Links para Terceiros",
          content: `Nosso site (landel.app.br) ou aplicativo pode conter links para plataformas externas de código aberto, documentação maker ou suporte. Não nos responsabilizamos pelas políticas de privacidade de sites de terceiros.`,
        },
        {
          title: "5. Alterações nesta Política",
          content: `Reservamo-nos o direito de atualizar esta política sempre que novas funcionalidades de hardware ou software forem implementadas. Recomendamos a revisão periódica desta página.`,
        },
        {
          title: "6. Contato",
          content: `Se você tiver qualquer dúvida sobre o funcionamento do app ou sobre esta política, entre em contato através do e-mail administrativo associado ao domínio em landel.app.br.`,
        },
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
        privacy: "Política de Privacidade",
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
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: May 2026",
      backToHome: "Back to home",
      sections: [
        {
          title: "1. Collection and Use of Information",
          content: `Landel was designed as a tool for robotic control, automation and IoT monitoring.

Personal Data: The application does not collect, store or share any personally identifiable user data (such as name, email, ID or phone number) on external servers.

Sensor Data: Data displayed in the app (such as soil moisture, temperature or telemetry) is processed locally in real time and belongs exclusively to the user.`,
        },
        {
          title: "2. Required Permissions and Justification",
          content: `To function correctly, Landel will request access to specific resources on your smartphone. Each permission has a strictly technical purpose:

Bluetooth and Bluetooth Low Energy (BLE): Required to locate, pair with and send commands to development boards (Arduino, ESP32) and to the Landel Bridge. Without this, robot control is not possible.

Location (Only on applicable Android versions): The Android operating system requires approximate location permission so the app can scan for Bluetooth devices nearby. Landel does not track or store your geographic position.

Storage / Media (Sharing Feature): Used exclusively when the user activates the Live Dashboard sharing function, allowing the app to generate a temporary image (.jpg) in the device's memory to be sent to other apps (such as WhatsApp).`,
        },
        {
          title: "3. Purchases and Subscriptions (Pro Version)",
          content: `Subscription management for the Landel Pro plan is processed securely through the RevenueCat platform and billed directly by the Google Play Store.

Landel does not have access to your credit card data or billing information.

RevenueCat uses only an anonymous identifier to validate whether your active account has the Pro plan benefits.`,
        },
        {
          title: "4. Links to Third Parties",
          content: `Our website (landel.app.br) or application may contain links to external open-source platforms, maker documentation or support. We are not responsible for the privacy policies of third-party sites.`,
        },
        {
          title: "5. Changes to this Policy",
          content: `We reserve the right to update this policy whenever new hardware or software features are implemented. We recommend periodic review of this page.`,
        },
        {
          title: "6. Contact",
          content: `If you have any questions about the app's operation or about this policy, please contact us through the administrative email associated with the domain at landel.app.br.`,
        },
      ],
    },
    footer: {
      tagline: "Connecting smartphones to the physical world since 2024.",
      product: "Product",
      company: "Company",
      links: { playstore: "Google Play", appstore: "App Store", docs: "Docs", about: "About", contact: "Contact", blog: "Blog", privacy: "Privacy Policy" },
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
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: Mayo de 2026",
      backToHome: "Volver al inicio",
      sections: [
        {
          title: "1. Recopilación y Uso de Información",
          content: `Landel fue diseñado como una herramienta de control robótico, automatización y monitoreo IoT (Internet de las Cosas).

Datos Personales: La aplicación no recopila, almacena ni comparte ningún dato personal identificable del usuario (como nombre, correo electrónico, CPF o número de teléfono) en servidores externos.

Datos de Sensores: Los datos mostrados en la aplicación (como humedad del suelo, temperatura o telemetría) se procesan localmente en tiempo real y pertenecen exclusivamente al usuario.`,
        },
        {
          title: "2. Permisos Requeridos y Justificación",
          content: `Para funcionar correctamente, Landel solicitará acceso a recursos específicos de tu smartphone. Cada permiso tiene una finalidad estrictamente técnica:

Bluetooth y Bluetooth Low Energy (BLE): Necesario para localizar, emparejar y enviar comandos a las placas de desarrollo (Arduino, ESP32) y a la Puente Landel. Sin esto, el control de los robots no es posible.

Ubicación (Solo en versiones aplicables de Android): El sistema operativo Android exige el permiso de ubicación aproximada para que la app pueda escanear dispositivos Bluetooth alrededor. Landel no rastrea ni almacena tu posición geográfica.

Almacenamiento / Medios (Función de Compartilhamento): Utilizado exclusivamente cuando el usuario activa la función de compartir el Live Dashboard, permitiendo que la app genere una imagen temporal (.jpg) en la memoria del dispositivo para ser enviada a otras aplicaciones (como WhatsApp).`,
        },
        {
          title: "3. Compras y Suscripciones (Versión Pro)",
          content: `La gestión de suscripciones del plan Landel Pro se procesa de forma segura a través de la plataforma RevenueCat y se factura directamente por la Google Play Store.

Landel no tiene acceso a tus datos de tarjeta de crédito ni información de facturación.

RevenueCat utiliza solo un identificador anónimo para validar si tu cuenta activa tiene los beneficios del plan Pro.`,
        },
        {
          title: "4. Enlaces a Terceros",
          content: `Nuestro sitio web (landel.app.br) o aplicación pueden contener enlaces a plataformas externas de código abierto, documentación maker o soporte. No nos hacemos responsables de las políticas de privacidad de sitios de terceros.`,
        },
        {
          title: "5. Cambios en esta Política",
          content: `Nos reservamos el derecho de actualizar esta política siempre que se implementen nuevas funcionalidades de hardware o software. Recomendamos la revisión periódica de esta página.`,
        },
        {
          title: "6. Contacto",
          content: `Si tienes cualquier duda sobre el funcionamiento de la app o sobre esta política, ponte en contacto a través del correo electrónico administrativo asociado al dominio en landel.app.br.`,
        },
      ],
    },
    footer: {
      tagline: "Conectando smartphones al mundo físico desde 2024.",
      product: "Producto",
      company: "Empresa",
      links: { playstore: "Google Play", appstore: "App Store", docs: "Documentación", about: "Acerca", contact: "Contacto", blog: "Blog", privacy: "Política de Privacidad" },
      rights: "Todos los derechos reservados.",
    },
  },
} as const;
