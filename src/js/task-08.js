const form = document.querySelector('.login-form');
const input = document.querySelector('input');
const allInputs = document.querySelectorAll('input');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!input.value) {
        window.alert('All fields must be filled!');
    }
    var result = Array.from(allInputs).reduce((r, ele) => {
        r[ele.name] = ele.value;
        return r;
        }, {});
    console.log(result);

    form.reset();
    })


