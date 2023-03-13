const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',

    
}


function whatDay() {
    let dayNumber = prompt('Enter day you want to show: ');

    if (dayNumber > 6 ) {
        console.log('Invalid day Number');
    }else {
        alert(`That is ${days[dayNumber]}`);
        console.log(days[dayNumber]);
    }
}

whatDay();
