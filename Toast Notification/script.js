const successButton = document.querySelector('.success-btn');
const errorButton = document.querySelector('.error-btn');
const infoButton = document.querySelector('.info-btn');

function init() {

    successButton.addEventListener('click', () => {
        new ToastNotification(
            {
                type: 'success',
                message: 'Breaking News:',
                subMessage: 'Tier 4 in force'
            }
        ).create(null);
    });

    errorButton.addEventListener('click', () => {
        new ToastNotification({
            type: 'error',
            message: 'Breaking Error !!',
            subMessage: 'x is undefined'
        }).create();
    });

    infoButton.addEventListener('click', () => {
        new ToastNotification({
            message: 'Warning!',
            subMessage: 'There was an error in your code on line 12',
            type: 'info'
        }).create('This is an error message',);
    });
}

init();