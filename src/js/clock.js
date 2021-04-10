import refs from './refs';
import addZero from './addZero';
const {
    minuteHand,
    hourHand,
    hourNumetalLeft,
    hourNumetalRight,
    minutesNumetalLeft,
    minutesNumetalRight
} = refs;
const state = {
    hourLeft: 2,
    hourRight: 3,
    minutesLeft: 5,
    minutesRight: 5,
    circleMinutes: 0,
    circleHour: 0
}
let interval = null;
const setDate = (hour = 18, minutes = 15) => {

    if (Number(hour) === 0 && Number(minutes) === 0) {
        state.circleHour += 1;
    }
    if (Number(minutes) === 0) {
        state.circleMinutes += 1;
    }
    const minutesDegrees = Math.floor(((minutes / 60) * 360) + 90);
    const hourDegrees = Math.floor(((hour / 12) * 360) + 90);
    console.log(hourDegrees)
    arrowDegrees(minutesDegrees, hourDegrees);
};
const handleTime = (event) => {
    state[event.currentTarget.id] = Number(event.currentTarget.value);
    console.log(state[event.currentTarget.id] = Number(event.currentTarget.value))
    interval = setInterval(createrState, 1000);
};
const createrTimer = ({ hourLeft, hourRight, minutesLeft, minutesRight }) => {
    const hour = addZero(Number(`${hourLeft}${hourRight}`));
    const minutes = addZero(Number(`${minutesLeft}${minutesRight}`));
    setDate(hour, minutes);
    addTimeNumeral(hour, minutes);
};
const addTimeNumeral = (hour, minutes) => {
    hourNumetalLeft.value = hour.toString().slice(0, 1);
    hourNumetalRight.value = hour.toString().slice(1, 2);
    minutesNumetalLeft.value = minutes.toString().slice(0, 1);
    minutesNumetalRight.value = minutes.toString().slice(1, 2);
};
const createrState = () => {
    if (state.minutesRight < 10) {
        state.minutesRight += 1;
        state.minutesAnalogTimer += 1;
    }
    if (state.minutesRight > 9) {
        state.minutesRight = 0;
        state.minutesLeft += 1;
    }
    if (state.minutesLeft > 5) {
        state.minutesRight = 0;
        state.minutesLeft = 0;
        state.hourRight += 1;
    }
    if (state.hourRight > 9) {
        state.minutesRight = 0;
        state.minutesLeft = 0;
        state.hourLeft += 1;
    }

    if (state.hourLeft >= 2 && state.hourRight > 3) {
        state.minutesRight = 0;
        state.minutesLeft = 0;
        state.hourLeft = 0;
        state.hourRight = 0;
    }
    createrTimer(state);
};


const arrowDegrees = (minutesDegrees, hourDegrees) => {
    if (state.circleMinutes >= 1) {
        minutesDegrees = Number(minutesDegrees) + 358 * state.circleMinutes;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }
    if (state.circleHour >= 1) {
        hourDegrees = Number(hourDegrees) + 720 * state.circleHour;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};
const clearTime = (event) => {
    clearInterval(interval);
    event.currentTarget.value = '';
};
window.addEventListener('load', handleTime);
hourNumetalLeft.addEventListener('focus', clearTime);
hourNumetalRight.addEventListener('focus', clearTime);
minutesNumetalLeft.addEventListener('focus', clearTime);
minutesNumetalRight.addEventListener('focus', clearTime);
hourNumetalLeft.addEventListener('blur', handleTime);
hourNumetalRight.addEventListener('blur', handleTime);
minutesNumetalLeft.addEventListener('blur', handleTime);
minutesNumetalRight.addEventListener('blur', handleTime);

export default setDate;
