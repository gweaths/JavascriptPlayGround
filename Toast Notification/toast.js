class ToastNotification {

    options = {};
    defaults = {
        toastContainer: document.getElementById('toast_container'),
        fadeInDuration: 1,
        stayDuration: 20,
        fadeOutDuration: 1,
        type: 'success'
    };
    messages = [

        'You are an idiot',
        'You forgot a message dumbass',
        'Why can\'t you do anything right',
        'You Suck !!',
    ];

    constructor(overrides) {
        this.options = { ...this.defaults, ...overrides };
        this.options.imageUrl = 'https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png';
    }

    create = () => {
        let message = this.options.message ?? this.messages[Math.floor(Math.random() * this.messages.length - 1)];
        //build up the animation styling from new overrides
        const timingInfo = getNotificationTimings(this.options);

        //create the toast notification
        const notification = document.createElement('div');

        //build image
        if (this.options.imageUrl) {

            let image = document.createElement('div');
            let imageContainer = document.createElement('div');
            image.classList.add('toast-img');
            imageContainer.classList.add('toast-image-container');

            imageContainer.appendChild(image);
            notification.appendChild(imageContainer);
        }

        //build content
        const content = document.createElement('div');
        content.classList.add('content');

        //build header
        const header = document.createElement('div');
        header.innerHTML = `<p>${this.options.message}</p>`;
        header.classList.add('header');
        content.appendChild(header);

        if (this.options.subMessage) {
            const subMessage = document.createElement('div');
            subMessage.innerHTML = `<p>${this.options.subMessage}</p>`;
            subMessage.classList.add('sub-notification');
            content.appendChild(subMessage);
        }

        notification.appendChild(content);
        notification.classList.add('toast');
        notification.classList.add(this.options.type);
        notification.style.animation = timingInfo.animationText;

        //append the toast notification to container
        this.options.toastContainer.appendChild(notification);

        //add a timeout to remove the notification from the dom when the animation has ended
        setTimeout(() => {
            notification.remove();
        }, timingInfo.totalDuration * 1000);
    };
}



const getNotificationTimings = (durationsObject) => {

    const fadeOutDelay = +(
        durationsObject.fadeInDuration +
        durationsObject.stayDuration).toFixed(1);

    const fadeIn = `fadein ${durationsObject.fadeInDuration}s`;
    const fadeOut = `fadeout ${durationsObject.fadeOutDuration}s ${fadeOutDelay}s`;

    const parts = [fadeIn, fadeOut];
    let animationText = parts.reduce((string1, string2) => {
        return `${string1}, ${string2}`;
    });

    const totalDuration = fadeOutDelay + durationsObject.fadeOutDuration;
    return { animationText, totalDuration };

};

