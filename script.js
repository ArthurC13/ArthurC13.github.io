let currentLang = 'en';
let translations = {};

// Detect which page we're currently on
function getCurrentPage() {
  const path = window.location.pathname;

  // Check for application pages
  if (path.includes('/apply/')) return 'apply';

  // Check for main sections
  if (path.includes('/about/')) return 'about';
  if (path.includes('/projects/')) return 'projects';
  if (path.includes('/design-thinking/')) return 'design';

  return 'home';
}

// Load translation file
async function loadTranslations(lang) {
  try {
    // Use absolute path from root to work on all pages
    const response = await fetch(`/translations/${lang}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading translations:', error);
    return null;
  }
}

// Helper function to get translation value from key
function getTranslation(key) {
  return translations[key];
}

// Set language and update all text
async function setLanguage(lang) {
  currentLang = lang;

  // Save language preference
  localStorage.setItem('preferredLanguage', lang);

  // Update button states
  document.querySelectorAll('.lang-switch button, .lang-switch-top button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`btn-${lang}`).classList.add('active');

  // Load translations
  translations = await loadTranslations(lang);

  if (!translations) {
    console.error('Failed to load translations');
    return;
  }

  // Update all elements with data-i18n attributes
  updateContent();
}

// Update all content on the page using data-i18n attributes
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(key);

    if (translation) {
      element.textContent = translation;
    } else {
      console.warn(`Translation not found for key: ${key}`);
    }
  });
}

// Back to top button functionality
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');

  if (!backToTopButton) return; // Only run on pages with back-to-top button

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage');

  setLanguage(savedLang || 'en');

  // Initialize back to top button
  initBackToTop();
});
