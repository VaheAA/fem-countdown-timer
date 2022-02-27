const countDownDate = new Date('Dec 31, 2022 23:59:59').getTime();

const timerElements = document.querySelectorAll('.timer-count');
const title = document.querySelector('.main-title');

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  decrementTimer(days, hours, minutes, seconds);
}, 1000);

function decrementTimer(days, hours, minutes, seconds) {
  timerElements.forEach((el) => {
    switch (el.dataset.date) {
      case 'days':
        el.textContent = days;
        break;
      case 'hours':
        el.textContent = hours;
        break;
      case 'minutes':
        el.textContent = minutes;
        break;
      case 'seconds':
        el.textContent = seconds;
        break;
      default:
        title.textContent = `We are finally here!!!`;
    }
  });
}
