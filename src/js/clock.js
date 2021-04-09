
const refs = {
    minuteHand: document.querySelector('.minute-hand'),
    hourHand: document.querySelector('.hour-hand'),
    hourNumetalLeft: document.querySelector('#hourLeft'),
    hourNumetalRight: document.querySelector('#hourRight'),
    minutesNumetalLeft: document.querySelector('#minutesLeft'),
    minutesNumetalRight: document.querySelector('#minutesRight'),
}
const {
    minuteHand,
    hourHand,
    hourNumetalLeft,
    hourNumetalRight,
    minutesNumetalLeft,
    minutesNumetalRight
} = refs;

const state = {
    hourLeft: 0,
    hourRight: 0,
    minutesLeft: 0,
    minutesRight: 0,
}
function addZero(value) {
    return String(value).padStart(2, '0');
};

let interval = null;
const handleTime = (event) => {
    state[event.currentTarget.id] = Number(event.currentTarget.value);
    interval = setInterval(createrState, 1000);
};
const clearTime = (event) => {
    clearInterval(interval);
    event.currentTarget.value = '';

};
const createrTimer = ({ hourLeft, hourRight, minutesLeft, minutesRight }) => {
    const hour = addZero(Number(`${hourLeft}${hourRight}`));
    const minutes = addZero(Number(`${minutesLeft}${minutesRight}`));
    setDate(hour, minutes)
};
const createrState = () => {
    if (state.minutesRight < 10) {
        state.minutesRight += 1;
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
    if (state.hourLeft > 2 || state.hourRight > 4) {
        state.minutesRight = 0;
        state.minutesLeft = 0;
        state.hourLeft = 0;
        state.hourRight = 0;
    }
    createrTimer(state);
};

const setDate = (hour, minutes) => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    addTimeNumeral(hour, minutes);
};
const addTimeNumeral = (hour, minutes) => {
    hourNumetalLeft.value = hour.toString().slice(0, 1);
    hourNumetalRight.value = hour.toString().slice(1, 2);
    minutesNumetalLeft.value = minutes.toString().slice(0, 1);
    minutesNumetalRight.value = minutes.toString().slice(1, 2);
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