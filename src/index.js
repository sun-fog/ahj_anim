import './css/style.css';
import Collapse from './js/Collapse.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.collapse').forEach(el => new Collapse(el));
});

