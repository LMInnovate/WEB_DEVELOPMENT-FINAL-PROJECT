const toggleButton = document.getElementById('themeToggle')

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    const current = localStorage.getItem('theme')
    if (current === 'dark') {
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
    }
  })

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme')
  }
}
