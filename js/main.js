// App State
const state = {
    currentPage: 'home',
    theme: 'light',
    language: 'es', // 'es' para español, 'en' para inglés
    projects: [
        {
            id: 1,
            title: 'Pizza Palace',
            description: 'project2Desc1',
            image: 'images/250618_17h18m02s_screenshot.png',
            demoUrl: 'https://pizza-gamma-virid.vercel.app/',
            codeUrl: '#',
            tags: ['React', 'Next.js', 'E-commerce']
        },
        {
            id: 2,
            title: 'project2Title',
            description: 'project2Desc2',
            image: 'images/250615_16h36m43s_screenshot.png',
            demoUrl: 'https://caracas-flight-servicess.netlify.app/',
            codeUrl: 'https://github.com/bertv07/Caracas-Flight-Services',
            tags: ['React', 'Node.js', 'Sistema de Gestión']
        },
        {
            id: 3,
            title: 'project3Title',
            description: 'project3Desc3',
            image: 'images/250623_18h07m02s_screenshot.png',
            demoUrl: 'https://canserberooo.netlify.app/',
            codeUrl: 'https://github.com/gleybert/portfolio',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            id: 4,
            title: 'Demonias Boots',
            description: 'project4Desc',
            image: 'images/250710_13h59m25s_screenshot.png',
            demoUrl: 'https://demonias.netlify.app/',
            codeUrl: '#',
            tags: ['Three.js', '3D', 'WebGL', 'Animación']
        }
    ]
};

// Translations
const translations = {
    es: {
        // Navegación
        home: 'Inicio',
        about: 'Sobre Mí',
        services: 'Servicios',
        portfolio: 'Proyectos',
        contact: 'Contacto',
        // Hero
        heroTitle: 'Hola, soy <span class="highlight">Gleybert B. Martínez</span>',
        heroSubtitle: 'Full-stack Developer',
        heroDescription: 'Transformo ideas en experiencias digitales excepcionales con soluciones web modernas y eficientes.',
        contactMe: 'Contáctame',
        viewProjects: 'Ver Proyectos',
        // Featured Services
        howCanIHelp: '¿Cómo puedo ayudarte?',
        webDevelopment: 'Desarrollo Web',
        webDevDesc: 'Sitios web rápidos, seguros y optimizados para SEO.',
        responsiveDesign: 'Diseño Responsivo',
        responsiveDesc: 'Experiencias perfectas en todos los dispositivos.',
        optimization: 'Optimización',
        optimizationDesc: 'Mejora de rendimiento y velocidad de carga.',
        viewAllServices: 'Ver todos los servicios',
        // Featured Projects
        featuredProjects: 'Proyectos Destacados',
        recentWork: 'Algunos de mis trabajos más recientes',
        viewMore: 'Ver más',
        project1Title: 'Pizza Palace',
        project1Desc: 'Tienda en línea de pizzas con carrito de compras',
        project2Desc1: 'Tienda en línea de pizzas con carrito de compras desarrollada con React y Next.js. Incluye funcionalidades de selección de productos, personalización y pago.',
        project2Title: 'Sistema FBO',
        project2Desc2: 'Sistema web desarrollado con React y node.js para la gestión de servicios y pagina informativa para un FBO.',
        project2Desc: 'Plataforma de gestión para empresas de aviación',
        project3Title: 'Canserbero',
        project3Desc: 'Sitio web tributo al artista venezolano',
        project3Desc3: 'Sitio web tributo al artista venezolano Canserbero, desarrollado con HTML, CSS y JavaScript.',
        project4Title: 'Demonias Boots',
        project4Desc: 'Experiencia interactiva 3D con Three.js mostrando un modelo 3D de botas Demonias. Incluye controles para rotar, hacer zoom y panear la cámara.',
        // About
        aboutMe: 'Sobre Mí',
        aboutDescription: 'Desarrollador Full-stack con experiencia en la creación de soluciones web modernas y eficientes. Apasionado por el desarrollo de software y siempre en busca de nuevos desafíos.',
        nameLabel: 'Nombre:',
        nameValue: 'Gleybert B. Martínez',
        locationLabel: 'Ubicación:',
        locationValue: 'Venezuela, Caracas',
        phoneLabel: 'Teléfono:',
        phoneValue: '+58 412-047-4159',
        emailLabel: 'Email:',
        emailValue: 'gleybertmartinez0702@gmail.com',
        linkedinLabel: 'LinkedIn:',
        linkedinValue: 'linkedin.com/in/gleybert',
        githubLabel: 'GitHub:',
        githubValue: 'github.com/bertv07',
        // Skills
        skillsTitle: 'Habilidades Técnicas',
        languagesTab: 'Lenguajes',
        frameworksTab: 'Frameworks',
        toolsTab: 'Herramientas',
        // Services
        servicesTitle: 'Servicios',
        servicesDescription: 'Ofrezco soluciones web completas y personalizadas para potenciar tu presencia en línea.',
        fullstackTitle: 'Desarrollo Web Full-Stack',
        fullstackDesc: 'Creación de aplicaciones web completas, tanto en el front-end como en el back-end, adaptadas a las necesidades de tu proyecto.',
        responsiveTitle: 'Diseño Web Responsivo',
        responsiveDesc: 'Desarrollo de páginas que se adaptan a cualquier dispositivo, garantizando una experiencia óptima para los usuarios.',
        databaseTitle: 'Integración de Bases de Datos',
        databaseDesc: 'Configuración y optimización de bases de datos como MySQL, MongoDB o SQLite para un rendimiento eficiente.',
        optimizationTitle: 'Optimización y Mantenimiento',
        optimizationDesc: 'Mejora del rendimiento y mantenimiento continuo de sitios y aplicaciones web.',
        designTitle: 'Diseño y Animaciones Interactivas',
        designDesc: 'Implementación de interfaces modernas y animaciones 3D con React y Three.js.',
        // Portfolio
        portfolioTitle: 'Mi Portafolio',
        // Contact Form
        yourName: 'Tu Nombre:',
        yourEmail: 'Tu Email:',
        yourMessage: 'Tu Mensaje:',
        namePlaceholder: 'Tu Nombre',
        emailPlaceholder: 'tu@email.com',
        messagePlaceholder: '¿En qué puedo ayudarte?',
        sendButton: 'Enviar Mensaje',
        sendEmail: 'Enviar Email',
        connectWithMe: 'Conéctate conmigo',
        viewProfile: 'Ver Perfil',
        viewMyProjects: 'Mira mis proyectos',
        viewDemo: 'Ver Demo',
        viewCode: 'Código',
        // Contact
        contactMeTitle: 'Contáctame',
        contactSubtitle: '¿Tienes un proyecto en mente? Hablemos.'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About Me',
        services: 'Services',
        portfolio: 'Projects',
        contact: 'Contact',
        // Hero
        heroTitle: 'Hi, I\'m <span class="highlight">Gleybert B. Martínez</span>',
        heroSubtitle: 'Full-stack Developer',
        heroDescription: 'I turn ideas into exceptional digital experiences with modern and efficient web solutions.',
        contactMe: 'Contact Me',
        viewProjects: 'View Projects',
        // Featured Services
        howCanIHelp: 'How Can I Help You?',
        webDevelopment: 'Web Development',
        webDevDesc: 'Fast, secure, and SEO-optimized websites.',
        responsiveDesign: 'Responsive Design',
        responsiveDesc: 'Perfect experiences on all devices.',
        optimization: 'Optimization',
        optimizationDesc: 'Performance and loading speed improvement.',
        viewAllServices: 'View All Services',
        // Featured Projects
        featuredProjects: 'Featured Projects',
        recentWork: 'Some of my most recent work',
        viewMore: 'View More',
        project1Title: 'Pizza Palace',
        project1Desc: 'Online pizza store with shopping cart',
        project2Desc1: 'Online pizza store with shopping cart developed with React and Next.js. Includes product selection, customization, and payment features.',
        project2Title: 'FBO System',
        project2Desc: 'Management platform for aviation companies',
        project2Desc2: 'Web system developed with React and Node.js for service management and an informative website for an FBO.',
        project3Title: 'Canserbero',
        project3Desc: 'Tribute website to the Venezuelan artist',
        project3Desc3: 'Tribute website to the Venezuelan artist Canserbero, developed with HTML, CSS, and JavaScript.',
        project4Title: 'Demonias Boots',
        project4Desc: 'Interactive 3D experience with Three.js showcasing a 3D model of Demonias boots. Includes controls for rotating, zooming, and panning the camera.',
        // About
        aboutMe: 'About Me',
        aboutDescription: 'Full Stack Developer with experience in creating modern and efficient web solutions. Passionate about software development and always looking for new challenges.',
        nameLabel: 'Name:',
        nameValue: 'Gleybert B. Martínez',
        locationLabel: 'Location:',
        locationValue: 'Caracas, Venezuela',
        phoneLabel: 'Phone:',
        phoneValue: '+58 412-047-4159',
        emailLabel: 'Email:',
        emailValue: 'gleybertmartinez0702@gmail.com',
        linkedinLabel: 'LinkedIn:',
        linkedinValue: 'linkedin.com/in/gleybert',
        githubLabel: 'GitHub:',
        githubValue: 'github.com/bertv07',
        // Skills
        skillsTitle: 'Technical Skills',
        languagesTab: 'Languages',
        frameworksTab: 'Frameworks',
        toolsTab: 'Tools',
        // Services
        servicesTitle: 'Services',
        servicesDescription: 'I offer complete and customized web solutions to enhance your online presence.',
        fullstackTitle: 'Full-Stack Web Development',
        fullstackDesc: 'Creation of complete web applications, both front-end and back-end, tailored to your project needs.',
        responsiveTitle: 'Responsive Web Design',
        responsiveDesc: 'Development of pages that adapt to any device, ensuring an optimal user experience.',
        databaseTitle: 'Database Integration',
        databaseDesc: 'Setup and optimization of databases like MySQL, MongoDB, or SQLite for efficient performance.',
        optimizationTitle: 'Optimization and Maintenance',
        optimizationDesc: 'Performance improvement and continuous maintenance of websites and web applications.',
        designTitle: 'Interactive Design and Animations',
        designDesc: 'Implementation of modern interfaces and 3D animations with React and Three.js.',
        // Portfolio
        portfolioTitle: 'My Portfolio',
        // Contact Form
        yourName: 'Your Name:',
        yourEmail: 'Your Email:',
        yourMessage: 'Your Message:',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'your@email.com',
        messagePlaceholder: 'How can I help you?',
        sendButton: 'Send Message',
        sendEmail: 'Send Email',
        connectWithMe: 'Connect with me',
        viewProfile: 'View Profile',
        viewMyProjects: 'View My Projects',
        viewDemo: 'View Demo',
        viewCode: 'Code',
        // Contact
        contactMeTitle: 'Contact Me',
        contactSubtitle: 'Have a project in mind? Let\'s talk.'
    }
};

// DOM Elements
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Templates
const templates = {
    home: document.getElementById('home-page').content,
    about: document.getElementById('about-page').content,
    services: document.getElementById('services-page').content,
    portfolio: document.getElementById('portfolio-page').content,
    contact: document.getElementById('contact-page').content
};

// Initialize App
function init() {
    console.log('Initializing app...');
    
    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }
    
    // Set language
    if (savedLanguage) {
        state.language = savedLanguage;
        updateLanguageToggle(savedLanguage);
    }
    
    // Add event listeners
    setupEventListeners();
    
    // Set initial page
    let pageFromHash = window.location.hash.replace('#', '');
    
    // Redirigir de 'skills' a 'about' si es necesario
    if (pageFromHash === 'skills') {
        pageFromHash = 'about';
        window.history.replaceState(null, '', '#about');
    }
    
    // Render the initial page immediately
    const initialPage = (pageFromHash && templates[pageFromHash]) ? pageFromHash : 'home';
    console.log('Initial page:', initialPage);
    
    // Update state and render page
    state.currentPage = initialPage;
    renderPage(initialPage);
    
    // Update active nav link
    updateActiveNavLink(initialPage);
    
    // Translate the page
    translatePage(state.language);
}


// Set up event listeners
function setupEventListeners() {
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page && page !== state.currentPage) {
                navigateTo(page);
                // Close mobile menu if open
                if (navLinksContainer.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinksContainer.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu-btn')) {
            toggleMobileMenu();
        }
    });
    
    // Handle tab clicks in skills section
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            const tabId = e.target.getAttribute('data-tab');
            switchTab(tabId, e.target);
        }
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

// Navigate to page
function navigateTo(page) {
    console.log('Navigating to:', page);
    
    // Check if page exists
    if (!templates[page]) {
        console.error('Page not found:', page);
        return;
    }
    
    // Don't do anything if we're already on this page
    if (state.currentPage === page) {
        console.log('Already on page:', page);
        return;
    }
    
    console.log('Current page:', state.currentPage, 'New page:', page);
    
    // Update active nav link
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update URL with history state
    window.history.pushState({ page, language: state.language }, '', `#${page}`);
    
    // Update current page in state
    state.currentPage = page;
    
    // Render new page
    renderPage(page);
    
    // Ensure translations are applied
    translatePage(state.language);
}

// Render page content
function renderPage(page) {
    console.log('Rendering page:', page);
    
    if (!templates[page]) {
        console.error('Template not found for page:', page);
        return;
    }
    
    // Don't fade out for initial page load
    const isInitialLoad = app.children.length === 0;
    
    if (!isInitialLoad) {
        // Fade out current content
        app.style.opacity = '0';
    }
    
    // Small delay to allow CSS transitions to work
    const renderDelay = isInitialLoad ? 0 : 300;
    
    setTimeout(() => {
        try {
            // Clear the app container
            app.innerHTML = '';
            
            // Create a fresh clone of the template content
            const templateContent = templates[page].cloneNode(true);
            
            // Add the new page content
            app.appendChild(templateContent);
            
            // Make sure the page is visible
            const newPageElement = document.querySelector('.page');
            if (!newPageElement) {
                console.error('Page element not found after rendering:', page);
                return;
            }
            
            newPageElement.style.display = 'block';
            
            // Add active class to the new page
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            newPageElement.classList.add('active');
            
            // Set initial opacity
            if (isInitialLoad) {
                newPageElement.style.opacity = '1';
                app.style.opacity = '1';
            } else {
                newPageElement.style.opacity = '0';
                // Fade in
                setTimeout(() => {
                    newPageElement.style.transition = 'opacity 0.3s ease';
                    newPageElement.style.opacity = '1';
                    app.style.opacity = '1';
                }, 10);
            }
            
            // Apply translations to the new content
            setTimeout(() => {
                translatePage(state.language);
                
                // Initialize page-specific functionality
                initPage(page);
                
                // Force a reflow to ensure all elements are in the DOM
                void app.offsetHeight;
                
                // If we're on the home page, render featured projects
                if (page === 'home') {
                    // Small delay to ensure DOM is fully rendered
                    setTimeout(() => {
                        renderFeaturedProjects();
                    }, 100);
                }
                
                // Apply translations again to catch any dynamic content
                setTimeout(() => translatePage(state.language), 50);
            }, 10);
            
        } catch (error) {
            console.error('Error during page rendering:', error);
            app.style.opacity = '1';
        }
    }, renderDelay);
}

// Initialize page-specific functionality
function initPage(page) {
    switch (page) {
        case 'skills':
            // Initialize skills tabs
            const firstTab = document.querySelector('.tab-btn');
            if (firstTab) {
                switchTab(firstTab.getAttribute('data-tab'), firstTab);
            }
            break;
        case 'portfolio':
            // Initialize portfolio animations or other functionality
            break;
        // Add more page initializations as needed
    }
}

// Switch between tabs
function switchTab(tabId, button) {
    // Update active tab button
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Show corresponding tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        if (content.id === tabId) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    navLinksContainer.classList.toggle('active');
    mobileMenuBtn.setAttribute(
        'aria-expanded',
        mobileMenuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
}

// Toggle theme
function toggleTheme() {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Set theme
function setTheme(theme) {
    state.theme = theme;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

// Update theme icon
function updateThemeIcon(theme) {
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Update active navigation link
function updateActiveNavLink(activePage) {
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === activePage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Toggle language
function toggleLanguage() {
    try {
        const newLang = state.language === 'es' ? 'en' : 'es';
        console.log('Changing language to:', newLang);
        
        // Update state and storage
        state.language = newLang;
        localStorage.setItem('language', newLang);
        
        // Update URL with current page and new language
        const currentPage = state.currentPage || 'home';
        window.history.replaceState(
            { page: currentPage, language: newLang },
            '',
            `#${currentPage}`
        );
        
        // Update UI
        updateLanguageToggle(newLang);
        
        // Force page re-render with new language
        renderPage(currentPage);
        
        console.log('Language changed to:', newLang);
    } catch (error) {
        console.error('Error toggling language:', error);
    }
}

// Update language toggle button
function updateLanguageToggle(lang) {
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        const span = languageToggle.querySelector('span');
        if (span) {
            span.textContent = lang.toUpperCase();
        }
    }
}

// Translate page content
function translatePage(lang) {
    console.log('Translating to:', lang);
    const langData = translations[lang] || translations['es'];
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        try {
            const key = element.getAttribute('data-translate');
            if (key && langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.placeholder) element.placeholder = langData[key];
                    // No actualizamos el value para textarea
                    if (element.tagName === 'INPUT' && element.value) element.value = langData[key];
                } else {
                    // Simple innerHTML replacement for most elements
                    element.innerHTML = langData[key];
                }
            }
        } catch (error) {
            console.error('Error translating element:', element, error);
        }
    });
    
    // Update page title
    try {
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            pageTitle.textContent = lang === 'en' 
                ? 'Gleybert B. Martínez | Full-stack Developer' 
                : 'Gleybert B. Martínez | Desarrollador Full-stack';
        }
    } catch (error) {
        console.error('Error updating page title:', error);
    }
    
    // Update language toggle button
    try {
        updateLanguageToggle(lang);
    } catch (error) {
        console.error('Error updating language toggle:', error);
    }
    
    // Actualizar los botones de los proyectos destacados
    const viewDemoButtons = document.querySelectorAll('.project-links [data-translate="viewDemo"]');
    const viewCodeButtons = document.querySelectorAll('.project-links [data-translate="viewCode"]');
    
    viewDemoButtons.forEach(button => {
        button.textContent = lang === 'es' ? 'Ver Demo' : 'View Demo';
    });
    
    viewCodeButtons.forEach(button => {
        button.textContent = lang === 'es' ? 'Código' : 'Code';
    });
    
    // Actualizar los títulos y descripciones de los proyectos
    const projectElements = document.querySelectorAll('.project-details');
    projectElements.forEach(projectEl => {
        const titleEl = projectEl.querySelector('h3');
        const descEl = projectEl.querySelector('p');
        
        if (titleEl && descEl) {
            const titleKey = titleEl.getAttribute('data-translate');
            const descKey = descEl.getAttribute('data-translate');
            
            if (titleKey && translations[lang] && translations[lang][titleKey]) {
                titleEl.textContent = translations[lang][titleKey];
            }
            
            if (descKey && translations[lang] && translations[lang][descKey]) {
                descEl.textContent = translations[lang][descKey];
            }
        }
    });
    
    console.log('Translation complete');
}

// Handle contact form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formStatus = document.getElementById('form-status');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + 
        (state.language === 'es' ? 'Enviando...' : 'Sending...');
    
    // Show success message immediately before form submission
    formStatus.textContent = state.language === 'es' ? 'Enviando mensaje...' : 'Sending message...';
    formStatus.style.backgroundColor = '#e2f3fd';
    formStatus.style.color = '#0c5460';
    formStatus.style.display = 'block';
    
    // Store scroll position
    const scrollPosition = window.scrollY;
    
    // Submit the form after a short delay to allow the message to show
    setTimeout(() => {
        // Show success message
        formStatus.textContent = state.language === 'es' 
            ? '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
            : 'Message sent successfully! I will get back to you soon.';
        formStatus.style.backgroundColor = '#d4edda';
        formStatus.style.color = '#155724';
        
        // Reset form and button
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        
        // Submit the form (this will happen in the background)
        form.submit();
        
        // Restore scroll position after a short delay
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 100);
    }, 1000);
}


// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    console.log('popstate event:', event);
    
    const pageFromHash = window.location.hash.replace('#', '');
    const page = (pageFromHash && templates[pageFromHash]) ? pageFromHash : 'home';
    
    // Check if we need to update the language
    if (event.state && event.state.language && event.state.language !== state.language) {
        state.language = event.state.language;
        localStorage.setItem('language', state.language);
    }
    
    if (page !== state.currentPage) {
        state.currentPage = page;
        renderPage(page);
        updateActiveNavLink(page);
        // La traducción se aplicará en renderPage
    } else {
        // Si solo cambió el idiomo pero no la página
        translatePage(state.language);
    }
});

// Función para obtener proyectos aleatorios únicos
function getRandomProjects(count) {
    // Hacer una copia del array de proyectos
    const shuffled = [...state.projects];
    
    // Algoritmo Fisher-Yates para mezclar el array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Tomar los primeros 'count' elementos
    return shuffled.slice(0, count);
}

// Función para renderizar proyectos destacados
function renderFeaturedProjects() {
    const featuredContainer = document.querySelector('.projects-preview');
    if (!featuredContainer) return;
    
    // Obtener 3 proyectos aleatorios (o menos si no hay suficientes)
    const randomProjects = getRandomProjects(Math.min(3, state.projects.length));
    
    // Generar el HTML de los proyectos
    const projectsHTML = randomProjects.map(project => `
        <div class="project-preview">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-details">
                <h3 data-translate="${project.title}">${project.title}</h3>
                <p data-translate="${project.description}">${translations[state.language][project.description] || ''}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoUrl}" class="btn small" target="_blank" data-translate="viewDemo">
                        ${state.language === 'es' ? 'Ver Demo' : 'View Demo'}
                    </a>
                    ${project.codeUrl !== '#' ? 
                        `<a href="${project.codeUrl}" class="btn outline small" target="_blank" data-translate="viewCode">
                            ${state.language === 'es' ? 'Código' : 'Code'}
                        </a>` : 
                        ''
                    }
                </div>
            </div>
        </div>
    `).join('');
    
    // Actualizar el contenido
    featuredContainer.innerHTML = projectsHTML;
    
    // Asegurarse de que las traducciones se apliquen
    translatePage(state.language);
}

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}

// Set initial styles for animation
function initAnimations() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .info-item');
    elements.forEach(element => {
        element.classList.add('animate-on-scroll');
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Initial animation check
    animateOnScroll();
}

// Smooth scroll function
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para el header fijo
            behavior: 'smooth'
        });
    }
}

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    if (e.target.closest('.scroll-down-btn')) {
        e.preventDefault();
        const target = e.target.closest('.scroll-down-btn').getAttribute('href');
        smoothScroll(target);
    }
});

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        initAnimations();
        // Add scroll event listener for animations
        window.addEventListener('scroll', animateOnScroll);
        
        // Render featured projects after a short delay to ensure the DOM is ready
        setTimeout(() => {
            renderFeaturedProjects();
        }, 100);
        
        // Add form submit handler
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }
    });
} else {
    init();
    initAnimations();
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Render featured projects after a short delay to ensure the DOM is ready
    setTimeout(() => {
        renderFeaturedProjects();
    }, 100);
    
    // Add form submit handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}