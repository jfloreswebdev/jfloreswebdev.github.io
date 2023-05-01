const desiredDate = new Date('June 3, 2026 23:19:00');

const datesTime = desiredDate.getTime();

const countdownInterval = setInterval(function()    {

    const currentTime = new Date().getTime();

    let timeDiff = datesTime -currentTime;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    timeDiff -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60 ));
    timeDiff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(timeDiff / (1000 * 60));
    timeDiff -= minutes * 1000 * 60;
    const seconds = Math.floor(timeDiff / 1000);

    let counter = document.getElementById('counter'); 
    counter.innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds` ;

    if (timeDiff < 0)  {
        clearInterval(countdownInterval);
        counter.innerHTML = 'Countdown\'s up!';
    }
}, 1000);


/*icon*/
function myFunction(){
    var x = document.getElementByid("heroSection");
    if (x.className === "hero-section") {
        x.className += " responsive";
    } else {
        x.className = "hero-section";
    }
}
