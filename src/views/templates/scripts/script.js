document.addEventListener('DOMContentLoaded', function () {
    const countToDate = new Date('march 10, 2025 00:00:00');
    let previousTimeBetweenDates;
    let intervalClock = setInterval(() => {
        const currentDate = new Date();
        const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
        timeBetweenDates <= 0 ? clearInterval(intervalClock) : flipAllCards(timeBetweenDates);

        previousTimeBetweenDates = timeBetweenDates;
    }, 250);

    function flipAllCards(time) {
        const seconds = time % 60;
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor((time / 3600) % 24);
        const days = Math.floor(time / 3600 / 24);

        flip(document.querySelector('[data-days-hundreds]'), Math.floor(days / 100));
        flip(document.querySelector('[data-days-tens]'), Math.floor(days / 10) % 10);
        flip(document.querySelector('[data-days-ones]'), days % 10);
        flip(document.querySelector('[data-hours-tens]'), Math.floor(hours / 10));
        flip(document.querySelector('[data-hours-ones]'), hours % 10);
        flip(document.querySelector('[data-minutes-tens]'), Math.floor(minutes / 10));
        flip(document.querySelector('[data-minutes-ones]'), minutes % 10);
        flip(document.querySelector('[data-seconds-tens]'), Math.floor(seconds / 10));
        flip(document.querySelector('[data-seconds-ones]'), seconds % 10);
    }

    function flip(flipCard, newNumber) {
        const topHalf = flipCard.querySelector('.countdown-dft .top');
        const startNumber = parseInt(topHalf.textContent) || 0;
        if (newNumber === startNumber) return;

        const bottomHalf = flipCard.querySelector('.countdown-dft .bottom');
        const topFlip = document.createElement('div');
        topFlip.classList.add('top-flip');
        const bottomFlip = document.createElement('div');
        bottomFlip.classList.add('bottom-flip');

        top.textContent = startNumber;
        bottomHalf.textContent = startNumber;
        topFlip.textContent = startNumber;
        bottomFlip.textContent = newNumber;

        topFlip.addEventListener('animationstart', e => {
        topHalf.textContent = newNumber;
        });
        topFlip.addEventListener('animationend', e => {
        topFlip.remove();
        });
        bottomFlip.addEventListener('animationend', e => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
        });
        flipCard.append(topFlip, bottomFlip);
    }
});
