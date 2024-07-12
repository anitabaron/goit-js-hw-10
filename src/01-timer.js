import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

const startDate = Date.now();
console.log(startDate);

let userSelectedDate;
userSelectedDate = 1799801160638;
console.log(userSelectedDate);

const elapsedTime = userSelectedDate - startDate;
console.log(elapsedTime);
console.log(convertMs(elapsedTime));

iziToast.show({
  message: 'Please choose a date in the future',
  color: '#ef4040',
  messageColor: `white`,
  position: 'topRight',
  timeout: 8000,
});

flatpickr('#datetime-picker', {
  enableTime: false,
  dateFormat: 'Y-m-d H:i',
});

const checkDate =
  elapsedTime > 0 === true ? convertMs(elapsedTime) : iziToast.show;

console.log(checkDate);

// const addLeadingZero = value => {
//   [padStart()];
//   // (< `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart` >)
// };

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener(`click`, () => {
  // fpCalendar.open;
});

const inputField = document.querySelector(`.input-field`);
inputField.addEventListener('click', () => {
  // fpCalendar.open;
});
