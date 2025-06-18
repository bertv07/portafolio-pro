// App State
const state = {
    currentPage: 'home',
    theme: 'light'
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
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
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
    window.history.pushState({ page }, '', `#${page}`);
    
    // Update current page in state
    state.currentPage = page;
    
    // Render new page
    renderPage(page);
}

// Render page content
function renderPage(page) {
    console.log('Rendering page:', page);
    
    if (!templates[page]) {
        console.error('Template not found for page:', page);
        return;
    }
    
    try {
        // Create a deep clone of the template content
        const templateContent = templates[page].cloneNode(true);
        const pageElement = templateContent.querySelector('.page');
        
        if (!pageElement) {
            console.error('Page element not found in template:', page);
            return;
        }
        
        console.log('Page element found:', pageElement);
        
        // Don't fade out for initial page load
        const isInitialLoad = app.children.length === 0;
        
        if (!isInitialLoad) {
            // Fade out current content
            app.style.opacity = 0;
        }
        
        const updateContent = () => {
            // Clear the app container
            app.innerHTML = '';
            
            // Add the new page content
            app.appendChild(templateContent);
            
            // Make sure the page is visible
            const newPageElement = document.querySelector('.page');
            if (newPageElement) {
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
                        newPageElement.style.opacity = '1';
                        app.style.opacity = '1';
                    }, 10);
                }
                
                console.log('Page content added to DOM');
            }
            
            // Scroll to top of page
            window.scrollTo(0, 0);
            
            // Initialize page-specific functionality
            initPage(page);
        };
        
        if (isInitialLoad) {
            updateContent();
        } else {
            setTimeout(updateContent, 200);
        }
    } catch (error) {
        console.error('Error rendering page:', error);
    }
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
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === activePage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
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
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    // Show success message immediately before form submission
    formStatus.textContent = 'Enviando mensaje...';
    formStatus.style.backgroundColor = '#e2f3fd';
    formStatus.style.color = '#0c5460';
    formStatus.style.display = 'block';
    
    // Store scroll position
    const scrollPosition = window.scrollY;
    
    // Submit the form after a short delay to allow the message to show
    setTimeout(() => {
        // Show success message
        formStatus.textContent = '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.';
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
    
    // Get the page from the URL hash
    const page = window.location.hash.replace('#', '') || 'home';
    
    // Only navigate if it's a different page
    if (page !== state.currentPage) {
        console.log('Navigating from popstate to:', page);
        
        // Update active nav link
        navLinks.forEach(link => {
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Update current page in state
        state.currentPage = page;
        
        // Render the page
        renderPage(page);
    }
});

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
    });
} else {
    init();
    initAnimations();
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
}