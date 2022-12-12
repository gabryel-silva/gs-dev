const btn = document.querySelector('.botao-menu-fechado');
const menuAberto = document.querySelector('.menu__aberto');
btn.addEventListener('click', () => {
    menuAberto.classList.toggle('menu-fechado');
});