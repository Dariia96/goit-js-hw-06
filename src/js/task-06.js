

const input = document.querySelector('#validation-input')

const inputRuleSymbolLength = +input.dataset.length;

input.addEventListener('blur', onCheckSymbols);

function onCheckSymbols(event) {
    const symbolsEnteredLength = event.target.value.length;

    if (symbolsEnteredLength === inputRuleSymbolLength) {
        input.classList.add('valid');
        input.classList.remove('invalid')
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid')
    }
}