//  Set Loading Page

setTimeout(() => {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.holder').style.display = 'flex';
}, 3000);

// End Loading Page




// Set Active Classes
let lis = document.querySelectorAll('ul li');
let liActive = document.querySelector('.active')
let remove = document.querySelector('.remove')
let border = document.querySelector('.circle')
let allinputs = document.querySelectorAll('.setting input')
let pomoInput = allinputs[0]
let shortBreakInput = allinputs[1]
let longBreakInput = allinputs[2]
let button  = document.querySelector('.setting button')


lis.forEach((li) => {
    li.addEventListener('click',(li)=> {
        lis.forEach((li)=> {
            li.classList.remove('active')
        })
        li.currentTarget.classList.add('active')
        liActive = li.currentTarget;
        
    })
    li.addEventListener('click',function() {
        if (liActive.textContent === 'Pomodoro') {
            border.style.borderColor = '#fa6c69'
            document.querySelector('.min').textContent = time.pomodoro;
        }
        if (liActive.textContent === 'Short Break') {
            border.style.borderColor = '#00bcd4'
            document.querySelector('.min').textContent = time.shortBreak;
        }
        if (liActive.textContent === 'Long Break') {
            border.style.borderColor = '#673ab7'
            document.querySelector('.min').textContent = time.longBreak;
        }
        
        document.querySelector('.sec').textContent = '00'
    })
})
let startBtn  = document.querySelector('.start');

let time = {
    pomodoro : 25,
    shortBreak : 5,
    longBreak : 15,
    seconds : 59,
}
// Check  Local Storage
    
if (localStorage.getItem('PomoTime')) {
    time.pomodoro = localStorage.getItem('PomoTime')
    document.querySelector('.min').textContent = time.pomodoro
}
if (localStorage.getItem('ShortBreakTime')) {
    time.shortBreak = localStorage.getItem('ShortBreakTime')
}
if (localStorage.getItem('LongBreakTime')) {
    time.longBreak = localStorage.getItem('LongBreakTime')
}
// End Check

if (startBtn.textContent = 'Start') {
    startBtn.onclick = function () {
        startBtn.textContent = ''
        remove.style.opacity = '1' 
        let seconds = time.seconds
        if (liActive.textContent === 'Pomodoro') {
            border.style.borderColor = '#fa6c69'
            time.pomodoro--
            let counter = setInterval(() => {
            if (time.pomodoro < 1 && seconds <= 1) {
                clearInterval(counter);
                // let txt = 'You Are Amazing , Excellent'
                // let div = document.createElement('div');
                // div.append(txt);
                // div.style.cssText = 'position:absolute;bottom:30%;right:15%;color:#fff;letter-spacing:1px;font-weight:bold;'
                // document.body.appendChild(div)
                setTimeout(() => {
                    lis[1].click()
                }, 1000);
            }
            if(seconds <= 0) {
                time.pomodoro--
                seconds = time.seconds;
            }
            if (seconds !== 0) {
                seconds--
                document.querySelector('.sec').textContent = seconds < 10 ? `0${seconds}` : seconds;
            }
            document.querySelector('.min').textContent = time.pomodoro;
            remove.onclick = function() {
                clearInterval(counter)
                startBtn.textContent = 'Start'
            }
    
        }, 1000);
        } else if (liActive.textContent === 'Short Break') {
            border.style.borderColor = '#00bcd4'
            time.shortBreak--
            let counter = setInterval(() => {
            if (time.shortBreak < 1 && seconds <= 1) {
                clearInterval(counter);
                setTimeout(() => {
                    lis[0].click()
                }, 1000);
            }
    
            if(seconds <= 0) {
                time.shortBreak--
                seconds = time.seconds;
            }
            
            if (seconds !== 0) {
                seconds--
                document.querySelector('.sec').textContent = seconds < 10 ? `0${seconds}` : seconds;
            }
            document.querySelector('.min').textContent = time.shortBreak;
            if (startBtn.textContent === 'Pause') {
                startBtn.addEventListener('click',function() {
                    clearInterval(counter)
                })
                }
                remove.onclick = function() {
                    clearInterval(counter)
                    startBtn.textContent = 'Start'
                }
        }, 1000);
        } else if (liActive.textContent === 'Long Break') {
            border.style.borderColor = '#673ab7'
            time.longBreak--
            let counter = setInterval(() => {
            if (time.longBreak < 1 && seconds <= 1) {
                clearInterval(counter);
                let txt = 'You Are Amazing , Excellent'
                let div = document.createElement('div');
                div.append(txt);
                div.style.cssText = 'position:absolute;bottom:30%;right:15%;color:#fff;letter-spacing:1px;font-weight:bold;'
                document.body.appendChild(div)
                console.log('Finished')
            }
    
            if(seconds <= 0) {
                time.longBreak--
                seconds = time.seconds;
            }
            
            if (seconds !== 0) {
                seconds--
                document.querySelector('.sec').textContent = seconds < 10 ? `0${seconds}` : seconds;
            }
            document.querySelector('.min').textContent = time.longBreak;
    
            if (startBtn.textContent === 'Pause') {
            startBtn.addEventListener('click',function() {
                clearInterval(counter)
            })
            }
            remove.onclick = function() {
                clearInterval(counter)
                startBtn.textContent = 'Start'
            }
        }, 1000);
        }
    }
}



button.addEventListener('click',function() {
    let Checked = false;
     // Check If The Input Is Larger Than 100
    if (pomoInput.value > 100) {
        pomoInput.style.borderColor = '#f00'
    } else {
        pomoInput.style.borderColor = '#009688'
    }

    if (shortBreakInput.value > 100) {
        shortBreakInput.style.borderColor = '#f00'
    }else {
        shortBreakInput.style.borderColor = '#009688'
    }
    if (longBreakInput.value > 100) {
        longBreakInput.style.borderColor = '#f00'
    }else {
        longBreakInput.style.borderColor = '#009688'
    }

    // Check All Inputs 
    if (pomoInput.value <= 100 && shortBreakInput.value <= 100 && longBreakInput.value <= 100) {
        Checked = true;
    }
    if (Checked === true) {
        // Store Last Data
            let lastPomoTime = time.pomodoro;
            let lastShortTime = time.shortBreak;
            let lastLongTime = time.longBreak;
    
        //  Set It As Varibles
            let pomoTime = pomoInput.value;
            let shortBTime = shortBreakInput.value;
            let longBTime = longBreakInput.value;
        
        // Add It To Local Storage 
        localStorage.setItem('PomoTime',pomoTime);
        localStorage.setItem('ShortBreakTime',shortBTime);
        localStorage.setItem('LongBreakTime',longBTime);
    
        //  Set New Data
            time.pomodoro = pomoTime;
            time.shortBreak = shortBTime;
            time.longBreak = longBTime;
    
        // Check If The Input Is Empty
            if (pomoInput.value === '') {
                time.pomodoro = lastPomoTime;
            }
            if (shortBreakInput.value === '') {
                time.shortBreak = lastShortTime
            }
            if (longBreakInput.value === '') {
                time.longBreak = lastLongTime
            }
        // Set It In Document
        document.querySelector('.min').textContent = time.pomodoro;
        document.querySelector('.setting').classList.remove('active')
    }
})

// Add Setting  And Remove It 
let gear = document.querySelector('.gear i');
gear.addEventListener('click',function() {
    // Check  Local Storage
    
    if (localStorage.getItem('PomoTime')) {
        pomoInput.value = localStorage.getItem('PomoTime')
    }
    if (localStorage.getItem('ShortBreakTime')) {
        shortBreakInput.value = localStorage.getItem('ShortBreakTime')
    }
    if (localStorage.getItem('LongBreakTime')) {
        longBreakInput.value = localStorage.getItem('LongBreakTime')
    }
    // End Check
    document.querySelector('.setting').classList.toggle('active')
})

let clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', function() {
    localStorage.clear()
});