function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    icon.className = 'fa fa-sun-o';
    icon.title = 'Switch to light mode';
  } else {
    icon.className = 'fa fa-moon-o';
    icon.title = 'Switch to dark mode';
  }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
});
