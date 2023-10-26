
// 4:
const secondHand = document.querySelector('.second-hand');
// 6:
const minsHand = document.querySelector('.minute-hand');
//7: hour wijzer toevoegen
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    //1: test function console.log('Hi');
    const now = new Date();
    //1
    // 2: secondewijzer secondes toevoegen 
    const seconds = now.getSeconds();
    //3: per seconde graden wijzer linken 0s = 0deg , 60s = 360deg, etc
    //5: bij test loopt secwijzer achter door transform:rotate(90deg) -> + 90deg
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // 4: secondewijzer als variabele toevoegen en stylen:
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // 6: minuutwijzer minuten toevoegen
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    // 8: minutenwijzer toevoegen aan transform hour
    //8: hourHand.style.transform = `rotate(${minsDegrees}deg)`;
    //9 hourhand veranderen in minshand
    minsHand.style.transform = `rotate(${minsDegrees}deg)`
    //9: uurwijzer toevoegen aan setDate();
    const hour = now.getMinutes();
    const hourDegress = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(seconds);
}

// 1:
setInterval(setDate, 1000);