const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function copy(){
    navigator.clipboard.writeText('CnfshwmvDqLrB1jSLF7bLJ3iZF5u354WRFGPBmGz4daw');
    var ca = document.getElementById('CA');

    const warning = document.getElementById('copiedWarning');
    warning.classList.add('show');

    setTimeout(() => {
        warning.classList.add('fadein');
    }, 0);

    setTimeout(() => {
        warning.classList.add('fadeout');
    }, 2000);

    setTimeout(() => {
        warning.classList.remove('show');
    }, 2500);
}
