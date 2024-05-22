(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');
    let operator = document.querySelectorAll('.btn-operator');
    let colon = document.querySelector('.btn-colon');
    let minus = document.querySelector('.btn-minus');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;


        })
    })

    minus.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
        minus.disabled = true;
        buttons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                minus.disabled = false;
            })
        })
        colon.addEventListener('click', function (e) {
            
        })

    })

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = '';
        } else {
            let result = eval(screen.value);
            screen.value = result;
        }
    })
    clear.addEventListener('click', function (e) {
        screen.value = '';
    })
    operator.forEach(function (button1) {
        button1.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
            button1.disabled = true;
            buttons.forEach(function (button) {
                button.addEventListener('click', function (e) {
                    button1.disabled = false;
                })
            })
        })
    })



})();