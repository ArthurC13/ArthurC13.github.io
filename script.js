let currentLanguage = "en";

async function loadLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  loadLanguage(lang);
}

// Load saved language or default
const savedLanguage = localStorage.getItem("language") || "en";
loadLanguage(savedLanguage);
