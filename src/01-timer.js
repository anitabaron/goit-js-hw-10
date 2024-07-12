import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('.start-btn');
const inputField = document.querySelector(`.input-field`);
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const actualDate = new Date();
console.log(actualDate);

const startDate = Date.now();
console.log(`Miliseconds UNIX date today`, { startDate });

let userSelectedDate;
let selectedDateTime;

userSelectedDate = flatpickr('#datetime-picker', {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  onChange: function (selectedDates, dateStr) {
    console.log({ selectedDates });

    selectedDateTime = new Date(dateStr).getTime();
    const deltaTime = selectedDateTime - startDate;
    console.log(`Miliseconds UNIX period of time`, { deltaTime });
    console.log(`Period of time`, convertMs(deltaTime));
  },
});

// // --------------- ALERT
// iziToast.show({
//   message: 'Please choose a date in the future',
//   color: '#ef4040',
//   messageColor: `white`,
//   position: 'topRight',
//   timeout: 8000,
// });

// const checkDate =
//   selectedTime > 0 === true ? convertMs(deltaTime) : iziToast.show;

// console.log(checkDate);

// const addLeadingZero = value => {
//   [padStart()];
//   // (< `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart` >)
// };

startBtn.addEventListener(`click`, () => {});

daysElement.textContent = 11; //actualDate.getDay();
hoursElement.textContent = 22; //actualDate.getHours();
minutesElement.textContent = 33; //actualDate.getMinutes();
secondsElement.textContent = 44; //actualDate.getSeconds();

inputField.addEventListener('click', () => {
  userSelectedDate.open;
  // selectedTime = userSelectedDate.value;
});
