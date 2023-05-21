 function moveHands() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  const secondDeg = ((seconds / 60) * 360) - 90;
  const minuteDeg = ((minutes / 60) * 360) - 90;
  const hourDeg = ((hours / 12) * 360) - 90;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(moveHands, 1000);




/*
 setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30*htime + mtime/2;
  mrotation = 6*mtime;
  srotation = 6*stime;
  
  second.style.transform = 'rotate(${srotation}deg)';
  hours.style.transform = 'rotate(${hrotation}deg)';
  minutes.style.transform = 'rotate(${mrotation}deg)';
  
  
},1000
 )
 
  */
 
 
