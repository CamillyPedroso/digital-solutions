/* =========================================================
   MILLY PEDROSO DIGITAL SOLUTIONS — script.js
   Sistema de idiomas, scroll reveal, header e interações
   ========================================================= */

/* ── DICIONÁRIO DE TRADUÇÕES ─────────────────────────────── */
const TRANSLATIONS = {
  pt: {
    /* Header */
    "nav-solutions": "Soluções",
    "nav-services": "Serviços",
    "nav-process": "Processo",
    "nav-projects": "Projetos",
    "nav-contact": "Contato",

    /* Hero */
    "hero-badge": "Soluções digitais sob medida",
    "hero-title":
      "Soluções digitais para empresas que precisam vender, organizar e crescer online.",
    "hero-subtitle":
      "Desenvolvo landing pages, sites, sistemas simples, automações e soluções personalizadas para transformar problemas do dia a dia em ferramentas digitais funcionais.",
    "hero-btn-primary": "Solicitar orçamento",
    "hero-btn-secondary": "Conhecer soluções",
    "hero-note":
      "Projetos sob medida para pequenos negócios, prestadores de serviço e empresas que querem mais presença, organização e praticidade.",

    /* Pain section */
    "pain-label": "Diagnóstico",
    "pain-title": "Sua empresa ainda perde tempo com processos manuais?",
    "pain-1-title": "Informações espalhadas",
    "pain-1-desc":
      "Clientes, pedidos, serviços ou tarefas perdidos em conversas, papéis ou planilhas.",
    "pain-2-title": "Pouca presença online",
    "pain-2-desc":
      "A empresa existe, mas quase ninguém encontra, entende ou confia no serviço pela internet.",
    "pain-3-title": "Atendimento desorganizado",
    "pain-3-desc":
      "Falta de clareza no fluxo de pedidos, orçamentos, retornos ou agendamentos.",
    "pain-4-title": "Falta de ferramentas próprias",
    "pain-4-desc":
      "A empresa usa soluções improvisadas, mas precisa de algo mais simples, direto e feito para sua realidade.",

    /* Solutions */
    "solutions-label": "O que entrego",
    "solutions-title": "O que posso criar para sua empresa",
    "sol-1-title": "Landing Pages e Sites Profissionais",
    "sol-1-desc":
      "Páginas modernas para apresentar serviços, gerar confiança e transformar visitantes em clientes.",
    "sol-2-title": "Aplicações Web",
    "sol-2-desc":
      "Pequenos aplicativos acessíveis pelo navegador para facilitar rotinas da empresa.",
    "sol-3-title": "Sistemas Simples Sob Medida",
    "sol-3-desc":
      "Ferramentas digitais para organizar clientes, produtos, serviços, tarefas, pedidos ou processos internos.",
    "sol-4-title": "Automações de Processos",
    "sol-4-desc":
      "Soluções para reduzir tarefas repetitivas, economizar tempo e evitar erros manuais.",
    "sol-5-title": "Organização de Dados",
    "sol-5-desc":
      "Estruturação de informações para acompanhar melhor clientes, demandas, vendas e resultados.",
    "sol-6-title": "Presença Digital e Redes Sociais",
    "sol-6-desc":
      "Apoio para posicionar melhor a marca online, organizar a comunicação e aumentar a visibilidade.",

    /* Positioning */
    "pos-label": "Diferencial",
    "pos-title":
      "Mais do que criar páginas, eu crio soluções para problemas reais.",
    "pos-text":
      "Antes de desenvolver qualquer página, sistema ou automação, eu entendo o problema da empresa. A partir disso, crio uma solução digital prática, visual e funcional, sem complicar o que precisa ser simples.",
    "pos-stat-1-title": "Entendimento antes do código",
    "pos-stat-1-desc":
      "Cada projeto começa com uma conversa real sobre o problema.",
    "pos-stat-2-title": "Solução sob medida",
    "pos-stat-2-desc":
      "Nada de templates genéricos. Cada entrega é pensada para sua empresa.",
    "pos-stat-3-title": "Resultado funcional",
    "pos-stat-3-desc":
      "O que entrego precisa funcionar no dia a dia do negócio.",

    /* Process */
    "process-label": "Como funciona",
    "process-title": "Processo simples, resultado concreto",
    "step-1-title": "Entendimento do problema",
    "step-1-desc":
      "Conversamos sobre a empresa, o objetivo e o que precisa ser resolvido.",
    "step-2-title": "Planejamento da solução",
    "step-2-desc":
      "Defino a melhor estrutura: página, sistema, automação, organização de dados ou aplicação web.",
    "step-3-title": "Desenvolvimento",
    "step-3-desc":
      "Crio a solução com foco em visual profissional, praticidade e funcionamento real.",
    "step-4-title": "Entrega e ajustes",
    "step-4-desc":
      "Faço a entrega final, ajustes combinados e orientação básica de uso.",

    /* Formats */
    "formats-label": "Formas de trabalho",
    "formats-title": "Escolha o formato ideal para sua empresa",
    "fmt-1-title": "Projeto Único",
    "fmt-1-desc":
      "Para quem precisa de uma entrega específica, como site, landing page, sistema simples ou automação.",
    "fmt-2-title": "Projeto Personalizado",
    "fmt-2-desc":
      "Para empresas que precisam combinar várias soluções digitais em um projeto mais completo.",
    "fmt-3-title": "Acompanhamento Digital Mensal",
    "fmt-3-desc":
      "Suporte remoto mensal para ajustes, melhorias, atualizações e acompanhamento das soluções entregues.",
    "fmt-featured": "Popular",

    /* Projects */
    "projects-label": "Portfólio",
    "projects-title": "Projetos em destaque",
    "proj-1-title": "Real Estate Website",
    "proj-1-desc":
      "Site profissional para apresentação de imóveis, páginas individuais e contato direto com clientes.",
    "proj-1-tag": "Projeto real",
    "proj-2-title": "Business Web App",
    "proj-2-desc":
      "Aplicação web para organizar informações, processos ou demandas internas de uma empresa.",
    "proj-2-tag": "Projeto conceito",
    "proj-3-title": "Automation Dashboard",
    "proj-3-desc":
      "Painel e automação para acompanhar dados, indicadores e rotinas operacionais.",
    "proj-3-tag": "Projeto conceito",

    /* International */
    "intl-label": "Alcance",
    "intl-title": "Atendimento para empresas no Brasil e no exterior",
    "intl-text":
      "O site pode ser apresentado em português, inglês e espanhol, facilitando a comunicação com clientes de diferentes países.",
    "intl-pt-name": "Português",
    "intl-pt-desc": "Mercado nacional",
    "intl-en-name": "English",
    "intl-en-desc": "International market",
    "intl-es-name": "Español",
    "intl-es-desc": "Mercado latinoamericano",

    /* CTA */
    "cta-label": "Vamos começar",
    "cta-title":
      "Vamos transformar uma ideia ou problema em uma solução digital?",
    "cta-text":
      "Me envie o que sua empresa precisa resolver e eu te ajudo a encontrar o melhor caminho: landing page, site, sistema, automação, organização de dados ou presença digital.",
    "cta-btn": "Falar comigo",

    /* Footer */
    "footer-copy":
      "© 2025 Camilly Pedroso Digital Solutions. Todos os direitos reservados.",
  },

  en: {
    "nav-solutions": "Solutions",
    "nav-services": "Services",
    "nav-process": "Process",
    "nav-projects": "Projects",
    "nav-contact": "Contact",

    "hero-badge": "Custom digital solutions",
    "hero-title":
      "Digital solutions for businesses that need to sell, organize, and grow online.",
    "hero-subtitle":
      "I build landing pages, websites, web apps, automations, and custom solutions to turn everyday business problems into functional digital tools.",
    "hero-btn-primary": "Request a quote",
    "hero-btn-secondary": "Explore solutions",
    "hero-note":
      "Tailored projects for small businesses, service providers, and companies that want more presence, organization, and practicality.",

    "pain-label": "Diagnosis",
    "pain-title": "Is your business still losing time to manual processes?",
    "pain-1-title": "Scattered information",
    "pain-1-desc":
      "Clients, orders, services, or tasks lost in conversations, papers, or spreadsheets.",
    "pain-2-title": "Little online presence",
    "pain-2-desc":
      "The business exists, but almost no one finds, understands, or trusts it online.",
    "pain-3-title": "Disorganized service flow",
    "pain-3-desc":
      "Lack of clarity in order flow, quotes, follow-ups, or scheduling.",
    "pain-4-title": "Lack of proper tools",
    "pain-4-desc":
      "The business uses improvised solutions but needs something simpler, direct, and built for its reality.",

    "solutions-label": "What I deliver",
    "solutions-title": "What I can build for your business",
    "sol-1-title": "Landing Pages & Professional Websites",
    "sol-1-desc":
      "Modern pages to present services, build trust, and convert visitors into clients.",
    "sol-2-title": "Web Applications",
    "sol-2-desc":
      "Small browser-accessible apps to streamline company routines.",
    "sol-3-title": "Custom Simple Systems",
    "sol-3-desc":
      "Digital tools to organize clients, products, services, tasks, orders, or internal processes.",
    "sol-4-title": "Process Automations",
    "sol-4-desc":
      "Solutions to reduce repetitive tasks, save time, and avoid manual errors.",
    "sol-5-title": "Data Organization",
    "sol-5-desc":
      "Information structuring to better track clients, demands, sales, and results.",
    "sol-6-title": "Digital Presence & Social Media",
    "sol-6-desc":
      "Support to better position the brand online, organize communication, and increase visibility.",

    "pos-label": "Differentiator",
    "pos-title":
      "More than building pages — I create solutions for real problems.",
    "pos-text":
      "Before developing any page, system, or automation, I understand the company's problem. From there, I build a practical, visual, and functional digital solution without overcomplicating what should be simple.",
    "pos-stat-1-title": "Understanding before code",
    "pos-stat-1-desc":
      "Every project starts with a real conversation about the problem.",
    "pos-stat-2-title": "Tailored solution",
    "pos-stat-2-desc":
      "No generic templates. Every delivery is designed for your business.",
    "pos-stat-3-title": "Functional result",
    "pos-stat-3-desc":
      "What I deliver needs to work in the day-to-day of the business.",

    "process-label": "How it works",
    "process-title": "Simple process, concrete result",
    "step-1-title": "Understanding the problem",
    "step-1-desc":
      "We talk about the business, the goal, and what needs to be solved.",
    "step-2-title": "Solution planning",
    "step-2-desc":
      "I define the best structure: page, system, automation, data organization, or web app.",
    "step-3-title": "Development",
    "step-3-desc":
      "I build the solution focused on professional visuals, practicality, and real functionality.",
    "step-4-title": "Delivery & adjustments",
    "step-4-desc":
      "I deliver the final product, agreed revisions, and basic usage guidance.",

    "formats-label": "Work formats",
    "formats-title": "Choose the ideal format for your business",
    "fmt-1-title": "Single Project",
    "fmt-1-desc":
      "For those who need a specific delivery: website, landing page, simple system, or automation.",
    "fmt-2-title": "Custom Project",
    "fmt-2-desc":
      "For businesses that need to combine multiple digital solutions into a more complete project.",
    "fmt-3-title": "Monthly Digital Support",
    "fmt-3-desc":
      "Monthly remote support for adjustments, improvements, updates, and follow-up on delivered solutions.",
    "fmt-featured": "Popular",

    "projects-label": "Portfolio",
    "projects-title": "Featured projects",
    "proj-1-title": "Real Estate Website",
    "proj-1-desc":
      "Professional site for real estate listings, individual property pages, and direct client contact.",
    "proj-1-tag": "Real project",
    "proj-2-title": "Business Web App",
    "proj-2-desc":
      "Web application to organize information, processes, or internal demands of a company.",
    "proj-2-tag": "Concept project",
    "proj-3-title": "Automation Dashboard",
    "proj-3-desc":
      "Dashboard and automation to track data, indicators, and operational routines.",
    "proj-3-tag": "Concept project",

    "intl-label": "Reach",
    "intl-title": "Serving businesses in Brazil and abroad",
    "intl-text":
      "The site can be presented in Portuguese, English, and Spanish, making communication easier with clients from different countries.",
    "intl-pt-name": "Português",
    "intl-pt-desc": "National market",
    "intl-en-name": "English",
    "intl-en-desc": "International market",
    "intl-es-name": "Español",
    "intl-es-desc": "Latin American market",

    "cta-label": "Let's start",
    "cta-title": "Ready to turn an idea or problem into a digital solution?",
    "cta-text":
      "Tell me what your business needs to solve and I'll help you find the best path: landing page, website, system, automation, data organization, or digital presence.",
    "cta-btn": "Talk to me",

    "footer-copy":
      "© 2025 Camilly Pedroso Digital Solutions. All rights reserved.",
  },

  es: {
    "nav-solutions": "Soluciones",
    "nav-services": "Servicios",
    "nav-process": "Proceso",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",

    "hero-badge": "Soluciones digitales a medida",
    "hero-title":
      "Soluciones digitales para empresas que necesitan vender, organizarse y crecer en línea.",
    "hero-subtitle":
      "Desarrollo landing pages, sitios web, aplicaciones, automatizaciones y soluciones personalizadas para convertir problemas cotidianos en herramientas digitales funcionales.",
    "hero-btn-primary": "Solicitar presupuesto",
    "hero-btn-secondary": "Ver soluciones",
    "hero-note":
      "Proyectos a medida para pequeños negocios, prestadores de servicios y empresas que quieren más presencia, organización y practicidad.",

    "pain-label": "Diagnóstico",
    "pain-title": "¿Su empresa sigue perdiendo tiempo con procesos manuales?",
    "pain-1-title": "Información dispersa",
    "pain-1-desc":
      "Clientes, pedidos, servicios o tareas perdidos en conversaciones, papeles o planillas.",
    "pain-2-title": "Poca presencia en línea",
    "pain-2-desc":
      "La empresa existe, pero casi nadie la encuentra, entiende o confía en ella por internet.",
    "pain-3-title": "Atención desorganizada",
    "pain-3-desc":
      "Falta de claridad en el flujo de pedidos, presupuestos, seguimientos o agendamientos.",
    "pain-4-title": "Falta de herramientas propias",
    "pain-4-desc":
      "La empresa usa soluciones improvisadas, pero necesita algo más simple, directo y hecho para su realidad.",

    "solutions-label": "Lo que entrego",
    "solutions-title": "Lo que puedo crear para su empresa",
    "sol-1-title": "Landing Pages y Sitios Profesionales",
    "sol-1-desc":
      "Páginas modernas para presentar servicios, generar confianza y convertir visitantes en clientes.",
    "sol-2-title": "Aplicaciones Web",
    "sol-2-desc":
      "Pequeñas aplicaciones accesibles por navegador para facilitar las rutinas de la empresa.",
    "sol-3-title": "Sistemas Simples a Medida",
    "sol-3-desc":
      "Herramientas digitales para organizar clientes, productos, servicios, tareas, pedidos o procesos internos.",
    "sol-4-title": "Automatizaciones de Procesos",
    "sol-4-desc":
      "Soluciones para reducir tareas repetitivas, ahorrar tiempo y evitar errores manuales.",
    "sol-5-title": "Organización de Datos",
    "sol-5-desc":
      "Estructuración de información para seguir mejor clientes, demandas, ventas y resultados.",
    "sol-6-title": "Presencia Digital y Redes Sociales",
    "sol-6-desc":
      "Apoyo para posicionar mejor la marca en línea, organizar la comunicación y aumentar la visibilidad.",

    "pos-label": "Diferencial",
    "pos-title":
      "Más que crear páginas, creo soluciones para problemas reales.",
    "pos-text":
      "Antes de desarrollar cualquier página, sistema o automatización, entiendo el problema de la empresa. A partir de ahí, creo una solución digital práctica, visual y funcional, sin complicar lo que debe ser simple.",
    "pos-stat-1-title": "Comprensión antes del código",
    "pos-stat-1-desc":
      "Cada proyecto comienza con una conversación real sobre el problema.",
    "pos-stat-2-title": "Solución a medida",
    "pos-stat-2-desc":
      "Sin plantillas genéricas. Cada entrega está pensada para su empresa.",
    "pos-stat-3-title": "Resultado funcional",
    "pos-stat-3-desc":
      "Lo que entrego necesita funcionar en el día a día del negocio.",

    "process-label": "Cómo funciona",
    "process-title": "Proceso simple, resultado concreto",
    "step-1-title": "Comprensión del problema",
    "step-1-desc":
      "Conversamos sobre la empresa, el objetivo y lo que necesita resolverse.",
    "step-2-title": "Planificación de la solución",
    "step-2-desc":
      "Defino la mejor estructura: página, sistema, automatización, organización de datos o aplicación web.",
    "step-3-title": "Desarrollo",
    "step-3-desc":
      "Creo la solución con foco en visual profesional, practicidad y funcionamiento real.",
    "step-4-title": "Entrega y ajustes",
    "step-4-desc":
      "Realizo la entrega final, ajustes acordados y orientación básica de uso.",

    "formats-label": "Formatos de trabajo",
    "formats-title": "Elija el formato ideal para su empresa",
    "fmt-1-title": "Proyecto Único",
    "fmt-1-desc":
      "Para quienes necesitan una entrega específica: sitio, landing page, sistema simple o automatización.",
    "fmt-2-title": "Proyecto Personalizado",
    "fmt-2-desc":
      "Para empresas que necesitan combinar varias soluciones digitales en un proyecto más completo.",
    "fmt-3-title": "Acompañamiento Digital Mensual",
    "fmt-3-desc":
      "Soporte remoto mensual para ajustes, mejoras, actualizaciones y seguimiento de las soluciones entregadas.",
    "fmt-featured": "Popular",

    "projects-label": "Portafolio",
    "projects-title": "Proyectos destacados",
    "proj-1-title": "Real Estate Website",
    "proj-1-desc":
      "Sitio profesional para presentación de propiedades, páginas individuales y contacto directo con clientes.",
    "proj-1-tag": "Proyecto real",
    "proj-2-title": "Business Web App",
    "proj-2-desc":
      "Aplicación web para organizar información, procesos o demandas internas de una empresa.",
    "proj-2-tag": "Proyecto concepto",
    "proj-3-title": "Automation Dashboard",
    "proj-3-desc":
      "Panel y automatización para seguir datos, indicadores y rutinas operacionales.",
    "proj-3-tag": "Proyecto concepto",

    "intl-label": "Alcance",
    "intl-title": "Atención para empresas en Brasil y el exterior",
    "intl-text":
      "El sitio puede presentarse en portugués, inglés y español, facilitando la comunicación con clientes de distintos países.",
    "intl-pt-name": "Português",
    "intl-pt-desc": "Mercado nacional",
    "intl-en-name": "English",
    "intl-en-desc": "Mercado internacional",
    "intl-es-name": "Español",
    "intl-es-desc": "Mercado latinoamericano",

    "cta-label": "Empecemos",
    "cta-title": "¿Transformamos una idea o problema en una solución digital?",
    "cta-text":
      "Cuénteme qué necesita resolver su empresa y le ayudaré a encontrar el mejor camino: landing page, sitio, sistema, automatización, organización de datos o presencia digital.",
    "cta-btn": "Hablar conmigo",

    "footer-copy":
      "© 2025 Camilly Pedroso Digital Solutions. Todos los derechos reservados.",
  },
};

/* ── ESTADO GLOBAL ───────────────────────────────────────── */
let currentLang = "pt";

/* ── APLICAR IDIOMA ──────────────────────────────────────── */
function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;

  const dict = TRANSLATIONS[lang];

  // Atualizar todos elementos com data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Atualizar botões de idioma
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Atualizar html lang
  document.documentElement.lang = lang;
}

/* ── HEADER SCROLL ───────────────────────────────────────── */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 30);
    },
    { passive: true },
  );
}

/* ── MENU MOBILE ─────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");

    // Animação do hamburguer
    const spans = hamburger.querySelectorAll("span");
    if (hamburger.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });

  // Fechar ao clicar em link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      hamburger.classList.remove("open");
      const spans = hamburger.querySelectorAll("span");
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    });
  });
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

/* ── SMOOTH SCROLL PARA ÂNCORAS ──────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Idioma padrão
  applyLanguage("pt");

  // Botões de idioma
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Outros inits
  initHeaderScroll();
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
});
