const btn = document.querySelector('.botao-menu-fechado');
const menuAberto = document.querySelector('.menu-fechado');
btn.addEventListener('click', () => {
    menuAberto.classList.toggle('menu__aberto');
});