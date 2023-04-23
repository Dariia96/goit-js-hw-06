
const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', () => {
    text.style.cssText = `
    font-size: 90px;`
})