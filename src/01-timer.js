import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('.start-btn');
const inputField = document.querySelector(`#datetime-picker`);
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day); // Remaining days
  const hours = Math.floor((ms % day) / hour); // Remaining hours
  const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining minutes
  const seconds = Math.floor((((ms % day) % hour) % minute) / second); // Remaining seconds
  return { days, hours, minutes, seconds };
}

const actualDate = new Date(); // aktualna data dziś
const startDateMilis = Date.now(); // aktualna data dziś w milisekundach

let userSelectedDate;
let deltaTime;
let deltaTimeMilis;

startBtn.disabled = true;
startBtn.classList.remove('btn-active');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: 'Y-m-d H:i',
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log({ userSelectedDate });
    if (userSelectedDate <= actualDate) {
      iziToast.error({
        message: 'Please choose a date in the future',
        color: '#ef4040',
        messageColor: `white`,
        position: 'topRight',
        timeout: 5000,
      });
      startBtn.disabled = true;
      startBtn.classList.remove('btn-active');
      //defaults values
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
    } else {
      startBtn.disabled = false;
      startBtn.classList.add('btn-active');
      userSelectedDate = Date.parse(selectedDates[0]);
      deltaTimeMilis = userSelectedDate - startDateMilis;
      deltaTime = convertMs(deltaTimeMilis);
      console.log(deltaTime);
      const { days, hours, minutes, seconds } = deltaTime;
      const formatTime = time => String(time).padStart(2, '0');
      daysElement.textContent = formatTime(days);
      hoursElement.textContent = formatTime(hours);
      minutesElement.textContent = formatTime(minutes);
      secondsElement.textContent = formatTime(seconds);
      return deltaTime;
    }
  },
};

flatpickr(inputField, options);

// const timerInterval = setInterval(updateTimerValue, 1000);
// updateTimerValue();

function startTimer(deltaTime) {
  const { days, hours, minutes, seconds } = deltaTime;
  console.log(deltaTime); // dlaczego undef? Zrobiłam return w 73 linijce
  const formatTime = time => String(time).padStart(2, '0');
  daysElement.textContent = formatTime(days);
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
  updateTimerValue({ days, hours, minutes, seconds });
}

startBtn.addEventListener('click', startTimer);
