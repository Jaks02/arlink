const app = document.querySelector('#app');
const toggleInput = document.querySelector('#toggle-theme');

// Initial Theme
let currentTheme = 'light';

document.body.classList.add(currentTheme);
toggleInput.checked = currentTheme === 'dark';

toggleInput.addEventListener('change', () => {
  // Toggle theme
  currentTheme = toggleInput.checked ? 'dark' : 'light';

  // Update classes
  document.body.className = currentTheme;
});