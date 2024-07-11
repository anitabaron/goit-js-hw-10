// // Opisany w dokumentacji
// import flatpickr from 'flatpickr';
// // Dodatkowy import stylów
// import 'flatpickr/dist/flatpickr.min.css';
// // Opisany w dokumentacji
// import iziToast from 'izitoast';
// // Kolejny import stylów
// import 'izitoast/dist/css/iziToast.min.css';

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let userSelectedDate;

const flatpickr = (selector, options) => {
  window.alert(`Please choose a date in the future`);
};

iziToast.show({
  title: '',
  message: 'Please choose a date in the future',
});

const addLeadingZero = value => {
  [padStart()];
  // (< `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart` >)
};

const btn = document.querySelector();
