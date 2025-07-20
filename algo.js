document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const display = document.querySelector('.calculadora__visor');
        const value = button.textContent;

        if (value === 'C') {
            display.textContent = '0';
        }else if (value === '=') {
            display.textContent = eval(display.textContent);}
            else{
                if(display.textContent === '0') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
            }
            });
        });
