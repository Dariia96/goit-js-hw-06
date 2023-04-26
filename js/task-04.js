let counterValue = 0;

const btnCounterPlus = document.querySelector('[data-action="increment"]');

btnCounterPlus.addEventListener('click', () => {
    counterValue++;
    document.querySelector('#value').textContent = counterValue;
    
})

const btnCounterMinus = document.querySelector('[data-action="decrement"]');
btnCounterMinus.addEventListener('click', () => {
    counterValue--;
    document.querySelector('#value').textContent = counterValue;
})





