const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function copy(){
    navigator.clipboard.writeText('8nTnpJA6Lcg7dXHy78aEDrPUsVcUi97TNJEkVZJEpump');
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
