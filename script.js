let currentLang = 'en';
let translations = {};

// Detect which page we're currently on
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('hongkong.html')) return 'hongkong';
  if (path.includes('japan.html')) return 'japan';
  return 'home';
}

// Load translation file
async function loadTranslations(lang) {
  try {
    const response = await fetch(`translations/${lang}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading translations:', error);
    return null;
  }
}

// Set language and update all text
async function setLanguage(lang) {
  currentLang = lang;

  // Save language preference
  localStorage.setItem('preferredLanguage', lang);

  // Update button states
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`btn-${lang}`).classList.add('active');

  // Load translations
  translations = await loadTranslations(lang);

  if (!translations) {
    console.error('Failed to load translations');
    return;
  }

  // Update all elements with translations
  updateContent();
}

// Update all content on the page based on current page
function updateContent() {
  const currentPage = getCurrentPage();

  // Update shared content (available on all pages)
  updateSharedContent();

  // Update page-specific content
  if (currentPage === 'home') {
    updateHomeContent();
  } else if (currentPage === 'hongkong') {
    updateHongKongContent();
  } else if (currentPage === 'japan') {
    updateJapanContent();
  }
}

// Update shared elements (header name, footer)
function updateSharedContent() {
  const shared = translations.shared;

  // Update name if element exists
  const nameEl = document.getElementById('name');
  if (nameEl) nameEl.textContent = shared.name;

  // Update contact section if it exists
  const contactTitle = document.getElementById('contact_title');
  if (contactTitle) contactTitle.textContent = shared.contact_title;

  const emailLabel = document.getElementById('email_label');
  if (emailLabel) emailLabel.textContent = shared.email_label;

  const githubLabel = document.getElementById('github_label');
  if (githubLabel) githubLabel.textContent = shared.github_label;
}

// Update home page content (minimal)
function updateHomeContent() {
  const home = translations.home;

  document.getElementById('tagline').textContent = home.tagline;
  document.getElementById('home_intro').textContent = home.intro;
}

// Update Hong Kong page content
function updateHongKongContent() {
  const hk = translations.hongkong;

  // Header
  document.getElementById('tagline').textContent = hk.tagline;

  // About section
  document.getElementById('about_title').textContent = hk.about_title;
  document.getElementById('about_text').textContent = hk.about_text;

  // Philosophy section
  document.getElementById('philosophy_title').textContent = hk.philosophy_title;
  document.getElementById('philosophy_text').textContent = hk.philosophy_text;

  // Languages section
  document.getElementById('languages_title').textContent = hk.languages_title;
  document.getElementById('languages_subtitle').textContent = hk.languages_subtitle;
  document.getElementById('languages_intro').textContent = hk.languages_intro;
  document.getElementById('language_native').textContent = hk.language_native;
  document.getElementById('language_fluent').textContent = hk.language_fluent;
  document.getElementById('language_learning').textContent = hk.language_learning;
  document.getElementById('languages_value').textContent = hk.languages_value;

  // Creative projects section
  document.getElementById('creative_title').textContent = hk.creative_title;
  document.getElementById('game_projects_subtitle').textContent = hk.game_projects_subtitle;
  document.getElementById('project1_title').textContent = hk.project1_title;
  document.getElementById('project1_desc').textContent = hk.project1_desc;
  document.getElementById('project1_role').textContent = hk.project1_role;
  document.getElementById('project1_highlight').textContent = hk.project1_highlight;
  document.getElementById('art_projects_subtitle').textContent = hk.art_projects_subtitle;
  document.getElementById('art_note').textContent = hk.art_note;
  document.getElementById('view_github').textContent = hk.view_github;

  // UI Study section
  document.getElementById('ui_study_title').textContent = hk.ui_study_title;
  document.getElementById('ui_study_subtitle').textContent = hk.ui_study_subtitle;
  document.getElementById('ui_study_intro').textContent = hk.ui_study_intro;
  document.getElementById('ui_study1_title').textContent = hk.ui_study1_title;
  document.getElementById('ui_study1_desc').textContent = hk.ui_study1_desc;
  document.getElementById('ui_study2_title').textContent = hk.ui_study2_title;
  document.getElementById('ui_study2_desc').textContent = hk.ui_study2_desc;
  document.getElementById('view_design_1').textContent = hk.view_design;
  document.getElementById('view_design_2').textContent = hk.view_design;

  // Process section
  document.getElementById('process_title').textContent = hk.process_title;
  document.getElementById('process_step1').textContent = hk.process_step1;
  document.getElementById('process_step1_desc').textContent = hk.process_step1_desc;
  document.getElementById('process_step2').textContent = hk.process_step2;
  document.getElementById('process_step2_desc').textContent = hk.process_step2_desc;
  document.getElementById('process_step3').textContent = hk.process_step3;
  document.getElementById('process_step3_desc').textContent = hk.process_step3_desc;
  document.getElementById('process_step4').textContent = hk.process_step4;
  document.getElementById('process_step4_desc').textContent = hk.process_step4_desc;

  // Skills section
  document.getElementById('skills_title').textContent = hk.skills_title;
  document.getElementById('design_skills').textContent = hk.design_skills;
  document.getElementById('design_list').textContent = hk.design_list;
  document.getElementById('technical_skills').textContent = hk.technical_skills;
  document.getElementById('technical_list').textContent = hk.technical_list;
  document.getElementById('artistic_skills').textContent = hk.artistic_skills;
  document.getElementById('artistic_list').textContent = hk.artistic_list;

  // Inspiration section
  document.getElementById('inspiration_title').textContent = hk.inspiration_title;
  document.getElementById('inspiration_text').textContent = hk.inspiration_text;

  // Learning section
  document.getElementById('learning_title').textContent = hk.learning_title;
  document.getElementById('learning_text').textContent = hk.learning_text;

  // Resume section
  document.getElementById('resume_title').textContent = hk.resume_title;
  document.getElementById('resume_download').textContent = hk.resume_download;
  document.getElementById('resume_education').textContent = hk.resume_education;
  document.getElementById('resume_education_content').textContent = hk.resume_education_content;
  document.getElementById('resume_experience').textContent = hk.resume_experience;
  document.getElementById('resume_experience_content').textContent = hk.resume_experience_content;
  document.getElementById('resume_achievements').textContent = hk.resume_achievements;
  document.getElementById('resume_achievements_content').textContent = hk.resume_achievements_content;

  // Future section
  document.getElementById('future_title').textContent = hk.future_title;
  document.getElementById('future_text').textContent = hk.future_text;
}

// Update Japan page content
function updateJapanContent() {
  const jp = translations.japan;

  // Header
  document.getElementById('tagline').textContent = jp.tagline;

  // About section
  document.getElementById('about_title').textContent = jp.about_title;
  document.getElementById('about_text').textContent = jp.about_text;

  // Philosophy section
  document.getElementById('philosophy_title').textContent = jp.philosophy_title;
  document.getElementById('philosophy_text').textContent = jp.philosophy_text;

  // Languages section
  document.getElementById('languages_title').textContent = jp.languages_title;
  document.getElementById('languages_subtitle').textContent = jp.languages_subtitle;
  document.getElementById('languages_intro').textContent = jp.languages_intro;
  document.getElementById('language_native').textContent = jp.language_native;
  document.getElementById('language_fluent').textContent = jp.language_fluent;
  document.getElementById('language_learning').textContent = jp.language_learning;
  document.getElementById('languages_value').textContent = jp.languages_value;

  // Creative projects section
  document.getElementById('creative_title').textContent = jp.creative_title;
  document.getElementById('game_projects_subtitle').textContent = jp.game_projects_subtitle;
  document.getElementById('project1_title').textContent = jp.project1_title;
  document.getElementById('project1_desc').textContent = jp.project1_desc;
  document.getElementById('project1_role').textContent = jp.project1_role;
  document.getElementById('project1_highlight').textContent = jp.project1_highlight;
  document.getElementById('art_projects_subtitle').textContent = jp.art_projects_subtitle;
  document.getElementById('art_note').textContent = jp.art_note;
  document.getElementById('view_github').textContent = jp.view_github;

  // UI Study section
  document.getElementById('ui_study_title').textContent = jp.ui_study_title;
  document.getElementById('ui_study_subtitle').textContent = jp.ui_study_subtitle;
  document.getElementById('ui_study_intro').textContent = jp.ui_study_intro;
  document.getElementById('ui_study1_title').textContent = jp.ui_study1_title;
  document.getElementById('ui_study1_desc').textContent = jp.ui_study1_desc;
  document.getElementById('ui_study2_title').textContent = jp.ui_study2_title;
  document.getElementById('ui_study2_desc').textContent = jp.ui_study2_desc;
  document.getElementById('view_design_1').textContent = jp.view_design;
  document.getElementById('view_design_2').textContent = jp.view_design;

  // Process section
  document.getElementById('process_title').textContent = jp.process_title;
  document.getElementById('process_step1').textContent = jp.process_step1;
  document.getElementById('process_step1_desc').textContent = jp.process_step1_desc;
  document.getElementById('process_step2').textContent = jp.process_step2;
  document.getElementById('process_step2_desc').textContent = jp.process_step2_desc;
  document.getElementById('process_step3').textContent = jp.process_step3;
  document.getElementById('process_step3_desc').textContent = jp.process_step3_desc;
  document.getElementById('process_step4').textContent = jp.process_step4;
  document.getElementById('process_step4_desc').textContent = jp.process_step4_desc;

  // Skills section
  document.getElementById('skills_title').textContent = jp.skills_title;
  document.getElementById('design_skills').textContent = jp.design_skills;
  document.getElementById('design_list').textContent = jp.design_list;
  document.getElementById('technical_skills').textContent = jp.technical_skills;
  document.getElementById('technical_list').textContent = jp.technical_list;
  document.getElementById('artistic_skills').textContent = jp.artistic_skills;
  document.getElementById('artistic_list').textContent = jp.artistic_list;

  // Inspiration section
  document.getElementById('inspiration_title').textContent = jp.inspiration_title;
  document.getElementById('inspiration_text').textContent = jp.inspiration_text;

  // Learning section
  document.getElementById('learning_title').textContent = jp.learning_title;
  document.getElementById('learning_text').textContent = jp.learning_text;

  // Resume section
  document.getElementById('resume_title').textContent = jp.resume_title;
  document.getElementById('resume_download').textContent = jp.resume_download;
  document.getElementById('resume_education').textContent = jp.resume_education;
  document.getElementById('resume_education_content').textContent = jp.resume_education_content;
  document.getElementById('resume_experience').textContent = jp.resume_experience;
  document.getElementById('resume_experience_content').textContent = jp.resume_experience_content;
  document.getElementById('resume_achievements').textContent = jp.resume_achievements;
  document.getElementById('resume_achievements_content').textContent = jp.resume_achievements_content;

  // Future section
  document.getElementById('future_title').textContent = jp.future_title;
  document.getElementById('future_text').textContent = jp.future_text;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = getCurrentPage();
  let savedLang = localStorage.getItem('preferredLanguage');

  // If no saved preference and on Japan page, default to Japanese
  if (!savedLang && currentPage === 'japan') {
    savedLang = 'ja';
  }

  setLanguage(savedLang || 'en');
});
