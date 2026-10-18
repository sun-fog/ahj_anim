export default class Collapse {
  constructor(element) {
    this.element = element;
    this.trigger = element.querySelector('.collapse-trigger');
    this.content = element.querySelector('.collapse-content');

    if (!this.trigger || !this.content) {
      console.error('Не найдены элементы виджета');
      return;
    }

    this.init();
  }

  init() {
    this.trigger.addEventListener('click', () => this.toggle());
  }

  toggle() {
    const isActive = this.element.classList.toggle('active');
    this.trigger.setAttribute('aria-expanded', isActive);
  }
}
