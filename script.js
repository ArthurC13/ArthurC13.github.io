let currentLang = 'en';
let translations = {};

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

// Update all content on the page
function updateContent() {
  // Header
  document.getElementById('name').textContent = translations.name;
  document.getElementById('tagline').textContent = translations.tagline;
  
  // About section
  document.getElementById('about_title').textContent = translations.about_title;
  document.getElementById('about_text').textContent = translations.about_text;
  
  // Philosophy section
  document.getElementById('philosophy_title').textContent = translations.philosophy_title;
  document.getElementById('philosophy_text').textContent = translations.philosophy_text;
  
  // Languages section
  document.getElementById('languages_title').textContent = translations.languages_title;
  document.getElementById('languages_subtitle').textContent = translations.languages_subtitle;
  document.getElementById('languages_intro').textContent = translations.languages_intro;
  document.getElementById('language_native').textContent = translations.language_native;
  document.getElementById('language_fluent').textContent = translations.language_fluent;
  document.getElementById('language_learning').textContent = translations.language_learning;
  document.getElementById('languages_value').textContent = translations.languages_value;
  
  // Creative projects section
  document.getElementById('creative_title').textContent = translations.creative_title;
  document.getElementById('game_projects_subtitle').textContent = translations.game_projects_subtitle;
  document.getElementById('project1_title').textContent = translations.project1_title;
  document.getElementById('project1_desc').textContent = translations.project1_desc;
  document.getElementById('project1_role').textContent = translations.project1_role;
  document.getElementById('project1_highlight').textContent = translations.project1_highlight;
  document.getElementById('art_projects_subtitle').textContent = translations.art_projects_subtitle;
  document.getElementById('art_note').textContent = translations.art_note;
  document.getElementById('view_github').textContent = translations.view_github;
  
  // UI Study section
  document.getElementById('ui_study_title').textContent = translations.ui_study_title;
  document.getElementById('ui_study_subtitle').textContent = translations.ui_study_subtitle;
  document.getElementById('ui_study_intro').textContent = translations.ui_study_intro;
  document.getElementById('ui_study1_title').textContent = translations.ui_study1_title;
  document.getElementById('ui_study1_desc').textContent = translations.ui_study1_desc;
  document.getElementById('ui_study2_title').textContent = translations.ui_study2_title;
  document.getElementById('ui_study2_desc').textContent = translations.ui_study2_desc;
  document.getElementById('view_design_1').textContent = translations.view_design;
  document.getElementById('view_design_2').textContent = translations.view_design;
  
  // Process section
  document.getElementById('process_title').textContent = translations.process_title;
  document.getElementById('process_step1').textContent = translations.process_step1;
  document.getElementById('process_step1_desc').textContent = translations.process_step1_desc;
  document.getElementById('process_step2').textContent = translations.process_step2;
  document.getElementById('process_step2_desc').textContent = translations.process_step2_desc;
  document.getElementById('process_step3').textContent = translations.process_step3;
  document.getElementById('process_step3_desc').textContent = translations.process_step3_desc;
  document.getElementById('process_step4').textContent = translations.process_step4;
  document.getElementById('process_step4_desc').textContent = translations.process_step4_desc;
  
  // Skills section
  document.getElementById('skills_title').textContent = translations.skills_title;
  document.getElementById('design_skills').textContent = translations.design_skills;
  document.getElementById('design_list').textContent = translations.design_list;
  document.getElementById('technical_skills').textContent = translations.technical_skills;
  document.getElementById('technical_list').textContent = translations.technical_list;
  document.getElementById('artistic_skills').textContent = translations.artistic_skills;
  document.getElementById('artistic_list').textContent = translations.artistic_list;
  
  // Inspiration section
  document.getElementById('inspiration_title').textContent = translations.inspiration_title;
  document.getElementById('inspiration_text').textContent = translations.inspiration_text;
  
  // Learning section
  document.getElementById('learning_title').textContent = translations.learning_title;
  document.getElementById('learning_text').textContent = translations.learning_text;
  
  // Resume section
  document.getElementById('resume_title').textContent = translations.resume_title;
  document.getElementById('resume_download').textContent = translations.resume_download;
  document.getElementById('resume_education').textContent = translations.resume_education;
  document.getElementById('resume_education_content').textContent = translations.resume_education_content;
  document.getElementById('resume_experience').textContent = translations.resume_experience;
  document.getElementById('resume_experience_content').textContent = translations.resume_experience_content;
  document.getElementById('resume_achievements').textContent = translations.resume_achievements;
  document.getElementById('resume_achievements_content').textContent = translations.resume_achievements_content;
  
  // Future section
  document.getElementById('future_title').textContent = translations.future_title;
  document.getElementById('future_text').textContent = translations.future_text;
  
  // Contact section
  document.getElementById('contact_title').textContent = translations.contact_title;
  document.getElementById('email_label').textContent = translations.email_label;
  document.getElementById('github_label').textContent = translations.github_label;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
});