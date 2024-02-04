document.addEventListener('DOMContentLoaded', function () {

    var output = document.querySelector('.output');


    var buttons = document.querySelectorAll('.box');


    buttons.forEach(function (button) {
        button.addEventListener('click', function () {

            var buttonText = button.textContent;

            if (buttonText === 'AC') {

                output.textContent = '';
            } else if (buttonText === '=') {

                try {
                    output.textContent = eval(output.textContent);
                } catch (error) {
                    output.textContent = 'Error';
                }
            } else {

                output.textContent += buttonText;
            }
        });
    });
});
