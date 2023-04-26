const form = document.querySelector('.login-form');
const input = document.querySelector('input');
const allInputs = document.querySelectorAll('input');



form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.elements.email.value || !form.elements.password.value) {
        alert('All fields must be filled!');
    }
    else {
        const result = Array.from(allInputs).reduce((r, ele) => {
            r[ele.name] = ele.value;
            return r;
        }, {});
        console.log(result);

        form.reset();
    }
    })


