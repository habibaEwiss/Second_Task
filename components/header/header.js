import './header.scss';

export class HeaderComponent {
  constructor(onToggleDarkMode) {
    this.onToggleDarkMode = onToggleDarkMode;

    this.container = document.createElement('div');
    this.container.className = 'header';

    this.container.innerHTML = `
      <h1 class="header__title">Where In The World?</h1>
      <div class="header__Mode">
        <i class="header__icon fa fa-moon-o" style="font-size:24px;"></i>
        <h3 class="header__title-mode">Dark Mode</h3>
      </div>
    `;

    const toggleBtn = this.container.querySelector('.header__Mode');
    toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
    });
  }

  getElement() {
    return this.container;
  }
}
