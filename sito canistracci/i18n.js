// Simple client-side i18n for EN/IT
(function () {
  const translations = {
    en: {
      'hero.title': 'Welcome to the Jack Project',
      'intro.lead': 'Jack Project is more than a language — it’s a journey into scalable, distributed computing. Behind the clean syntax lies a world of powerful infrastructure possibilities, designed to bring your applications to life across modern platforms and cloud environments.',

      'sections.runAnywhere': 'Run Jack Anywhere',
      'sections.runAnywhere.desc': 'Whether you prefer the simplicity of managed cloud services or the control of on-prem clusters, Jack adapts seamlessly. Here’s how you can bring your code into production across different ecosystems:',

      'cloud.googleRun': 'Google Cloud Run',
      'cloud.googleRun.desc': 'Deploy your Jack-based microservices effortlessly on Google Cloud Run. Built for simplicity and scalability, Cloud Run automatically handles traffic spikes, keeps your services containerized and stateless, and integrates natively with Cloud Build, Artifact Registry, and Cloud Monitoring. Just push your Docker image — Google does the rest.',

      'cloud.proxmox': 'Proxmox VE',
      'cloud.proxmox.desc': 'Prefer on-premise virtualization? Proxmox Virtual Environment gives you full control. Create high-availability clusters, run virtual machines or LXC containers, and experiment with hybrid setups that combine local compute power with cloud flexibility. Perfect for labs, testing, or private cloud deployments.',

      'cloud.dockerHub': 'Docker Hub',
      'cloud.dockerHub.desc': 'Distribute your builds with Docker Hub — the global registry for containers. Push your Jack Project image, version your releases, and share them publicly or privately. Combined with CI/CD pipelines, Docker Hub becomes your foundation for automated deployments and reproducible builds.',

      'cloud.aws': 'AWS (Amazon Web Services)',
      'cloud.aws.desc': 'For enterprise-grade scalability, AWS offers a full ecosystem to run Jack at any scale. From Elastic Container Service (ECS) and Fargate for serverless containers, to EC2 clusters for raw performance and Elastic Load Balancing for redundancy — AWS is the ideal home for mission-critical deployments. Integrate monitoring via CloudWatch and automate recovery through Auto Scaling Groups.',

      'highlight.box': 'From a single node to a global cluster — Jack runs where you need it to run.',

      'sections.chooseArchitecture': 'Choose Your Architecture',
      'sections.chooseArchitecture.desc': 'Whether you deploy through Docker images, orchestrate via Kubernetes, or spin up your own Proxmox nodes, Jack adapts to your workflow. Its modular design allows you to focus on development, while your chosen infrastructure takes care of the scale, resilience, and performance.',

      'card.example': 'Some example text.',
      'card.seeProfile': 'See Profile',
      'team.title': 'Our Team',
      // home.html specific
      'navbar.brand': 'Jack Project',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.showcase': 'Showcase',
      // contact.html
      'contact.title': 'Contact Us',
      'contact.subtitle': 'Have a question? Send us a message and we’ll reply soon.',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.consent': 'I consent to my data being processed for a reply.',
      'contact.form.submit': 'Send Message',
      'contact.alert.success': 'Thanks! Your message has been sent.',
      'home.hero.title': 'Welcome to My Web Server!',
      'home.hero.subtitle': 'A clean, modern home for your project content.',
      'home.client.title': 'Client Presentation: Jack Project',
      'home.intro.p1': 'The Jack Project is an innovative solution designed to streamline and enhance various aspects of client interaction and data management. Our goal is to provide a robust, scalable, and user-friendly platform that meets the evolving needs of modern businesses.',
      'home.intro.p2': 'This presentation outlines the key features, benefits, and technical architecture of the Jack Project, demonstrating how it can drive efficiency and improve decision-making for our clients.',
      'home.quicklinks.title': 'Quick Links',
      'home.quicklinks.index': 'Project Overview',
      'home.quicklinks.features': 'Key Features',
      'home.quicklinks.arch': 'Technical Architecture',
      'home.features.title': 'Key Features',
      'home.features.ui': 'Intuitive User Interface — Easy-to-navigate design for optimal user experience.',
      'home.features.analytics': 'Real-time Data Analytics — Immediate insights with up-to-the-minute data processing.',
      'home.features.security': 'Secure Data Management — Advanced encryption and access controls.',
      'home.features.workflows': 'Customizable Workflows — Adapt the system to your processes.',
      'home.features.scalable': 'Scalable Architecture — Designed to grow with your needs.',
      'home.gallery.title': 'Project Gallery',
      'home.arch.title': 'Technical Architecture',
      'home.arch.p': 'The Jack Project is built on a modern tech stack that ensures reliability, performance, and scalability. Key components include:',
      'home.arch.frontend': 'Frontend — React.js for dynamic interfaces.',
      'home.arch.backend': 'Backend — Node.js with Express.',
      'home.arch.database': 'Database — MongoDB for flexible storage.',
      'home.arch.cloud': 'Cloud — AWS for secure infrastructure.',
      'home.footer.backToTop': 'Back to top',
      'home.footer.copyright': '© 2025 My Web Server'
    },
    it: {
      'hero.title': 'Benvenuti nel Jack Project',
      'intro.lead': 'Jack Project è più di un linguaggio — è un viaggio nel computing scalabile e distribuito. Dietro la sintassi pulita c’è un mondo di potenti possibilità infrastrutturali, pensate per dare vita alle tue applicazioni su piattaforme moderne e ambienti cloud.',

      'sections.runAnywhere': 'Esegui Jack ovunque',
      'sections.runAnywhere.desc': 'Che tu preferisca la semplicità dei servizi cloud gestiti o il controllo di cluster on‑premise, Jack si adatta senza problemi. Ecco come portare il tuo codice in produzione in diversi ecosistemi:',

      'cloud.googleRun': 'Google Cloud Run',
      'cloud.googleRun.desc': 'Distribuisci i tuoi microservizi basati su Jack in modo semplice con Google Cloud Run. Progettato per semplicità e scalabilità, Cloud Run gestisce automaticamente i picchi di traffico, mantiene i servizi containerizzati e stateless e si integra nativamente con Cloud Build, Artifact Registry e Cloud Monitoring. Ti basta pubblicare l’immagine Docker — Google fa il resto.',

      'cloud.proxmox': 'Proxmox VE',
      'cloud.proxmox.desc': 'Preferisci la virtualizzazione on‑premise? Proxmox Virtual Environment ti dà il pieno controllo. Crea cluster ad alta disponibilità, esegui macchine virtuali o container LXC e sperimenta setup ibridi che combinano potenza locale e flessibilità cloud. Perfetto per laboratori, test o deployment privati.',

      'cloud.dockerHub': 'Docker Hub',
      'cloud.dockerHub.desc': 'Distribuisci i tuoi build con Docker Hub — il registro globale dei container. Pubblica l’immagine del tuo Jack Project, versiona i rilasci e condividili in pubblico o in privato. Insieme a pipeline CI/CD, Docker Hub diventa la base per deploy automatizzati e build riproducibili.',

      'cloud.aws': 'AWS (Amazon Web Services)',
      'cloud.aws.desc': 'Per la scalabilità a livello enterprise, AWS offre un ecosistema completo per eseguire Jack a qualsiasi scala. Da Elastic Container Service (ECS) e Fargate per container serverless, ai cluster EC2 per prestazioni pure e a Elastic Load Balancing per la ridondanza — AWS è la casa ideale per i deployment mission‑critical. Integra il monitoraggio con CloudWatch e automatizza il ripristino con Auto Scaling Groups.',

      'highlight.box': 'Da un singolo nodo a un cluster globale — Jack funziona dove ti serve.',

      'sections.chooseArchitecture': 'Scegli la tua architettura',
      'sections.chooseArchitecture.desc': 'Che tu distribuisca tramite immagini Docker, orchestrando con Kubernetes, o attivando nodi Proxmox, Jack si adatta al tuo flusso di lavoro. Il design modulare ti consente di concentrarti sullo sviluppo, mentre l’infrastruttura scelta si occupa di scala, resilienza e prestazioni.',

      'card.example': 'Testo di esempio.',
      'card.seeProfile': 'Vedi profilo',
      'team.title': 'Il nostro team',
      // home.html specific
      'navbar.brand': 'Jack Project',
      'nav.home': 'Home',
      'nav.about': 'Informazioni',
      'nav.services': 'Servizi',
      'nav.contact': 'Contatti',
      'nav.showcase': 'Vetrina',
      // contact.html
      'contact.title': 'Contattaci',
      'contact.subtitle': 'Hai domande? Inviaci un messaggio e ti risponderemo al più presto.',
      'contact.form.name': 'Nome',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Oggetto',
      'contact.form.message': 'Messaggio',
      'contact.form.consent': 'Acconsento al trattamento dei dati per essere ricontattato.',
      'contact.form.submit': 'Invia messaggio',
      'contact.alert.success': 'Grazie! Il tuo messaggio è stato inviato.',
      'home.hero.title': 'Benvenuto nel mio Web Server!',
      'home.hero.subtitle': 'Una home moderna e pulita per i tuoi contenuti.',
      'home.client.title': 'Presentazione Clienti: Jack Project',
      'home.intro.p1': 'Jack Project è una soluzione innovativa progettata per semplificare e migliorare vari aspetti dell’interazione con i clienti e della gestione dei dati. Il nostro obiettivo è offrire una piattaforma robusta, scalabile e facile da usare che soddisfi le esigenze in evoluzione delle aziende moderne.',
      'home.intro.p2': 'Questa presentazione illustra le funzionalità principali, i benefici e l’architettura tecnica di Jack Project, mostrando come possa aumentare l’efficienza e migliorare il processo decisionale dei nostri clienti.',
      'home.quicklinks.title': 'Collegamenti rapidi',
      'home.quicklinks.index': 'Panoramica del progetto',
      'home.quicklinks.features': 'Funzionalità chiave',
      'home.quicklinks.arch': 'Architettura tecnica',
      'home.features.title': 'Funzionalità chiave',
      'home.features.ui': 'Interfaccia utente intuitiva — Design facile da navigare per un’esperienza ottimale.',
      'home.features.analytics': 'Analisi dati in tempo reale — Insight immediati con elaborazione aggiornata al minuto.',
      'home.features.security': 'Gestione sicura dei dati — Crittografia avanzata e controlli di accesso.',
      'home.features.workflows': 'Workflow personalizzabili — Adatta il sistema ai tuoi processi.',
      'home.features.scalable': 'Architettura scalabile — Progettata per crescere con le tue esigenze.',
      'home.gallery.title': 'Galleria progetto',
      'home.arch.title': 'Architettura tecnica',
      'home.arch.p': 'Jack Project è costruito su uno stack moderno che garantisce affidabilità, prestazioni e scalabilità. I componenti principali includono:',
      'home.arch.frontend': 'Frontend — React.js per interfacce dinamiche.',
      'home.arch.backend': 'Backend — Node.js con Express.',
      'home.arch.database': 'Database — MongoDB per archiviazione flessibile.',
      'home.arch.cloud': 'Cloud — AWS per infrastruttura sicura.',
      'home.footer.backToTop': 'Torna su',
      'home.footer.copyright': '© 2025 Il mio Web Server'
    }
  };

  const KEY_ATTR = 'data-i18n';

  function translateElement(el, lang) {
    const key = el.getAttribute(KEY_ATTR);
    if (!key) return;
    const dict = translations[lang] || translations.en;
    const text = dict[key];
    if (!text) return;
    if (el.matches('.highlight-box')) {
      // Special case: inner <p><em>...</em></p>
      const inner = el.querySelector('p');
      if (inner) inner.textContent = text;
      else el.textContent = text;
    } else {
      el.textContent = text;
    }
  }

  function applyTranslations(lang) {
    document.querySelectorAll('[' + KEY_ATTR + ']').forEach((el) => translateElement(el, lang));
  }

  function setLanguage(lang) {
    const supported = Object.keys(translations);
    const next = supported.includes(lang) ? lang : 'en';
    localStorage.setItem('i18n_lang', next);
    document.documentElement.setAttribute('lang', next);
    applyTranslations(next);
    // Toggle active style on buttons if present
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      if (btn.getAttribute('data-lang') === next) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Setup click handlers for language buttons
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    const saved = localStorage.getItem('i18n_lang');
    const browserDefault = (navigator.language || 'en').toLowerCase().startsWith('it') ? 'it' : 'en';
    setLanguage(saved || browserDefault);
  });
})();
