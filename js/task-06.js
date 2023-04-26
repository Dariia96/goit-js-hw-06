

const input = document.querySelector('#validation-input')

const inputRuleSymbolLength = +input.dataset.length;

input.addEventListener('blur', onCheckSymbols);

function onCheckSymbols(event) {
    const symbolsEnteredLength = event.target.value.length;
    symbolsEnteredLength === inputRuleSymbolLength ? switchValidation('valid', 'invalid') : switchValidation('invalid', 'valid')
    
}


function switchValidation(arg1, arg2) {
    input.classList.add(arg1);
    input.classList.remove(arg2)
}




