window.onload = function () {
	'use strict';
	
	const secondHand = document.querySelector('.second-hand'),/*==selecting the seconds hand==*/
		  minsHand = document.querySelector('.min-hand'), /*==selecting the minute hand==*/
		  hoursHand = document.querySelector('.hour-hand');
	
	
	/*==Function that gets the current seconds and converts the seconds to degrees... ==*/
    function setDate() {
		/*==part of function that handles the seconds tick==*/
		const now = new Date(),//getting current date 
			  seconds = now.getSeconds(),//getting the current seconds..
			  mins = now.getMinutes(),//getting the current mins..
			  hours = now.getHours(), //getting the current hour...
			  secondsDegrees = ((seconds / 60) * 360) + 90,//converting the seconds to degrees and offsetting the 90degs we gave it in the css;
			  minsDegrees = ((mins / 60) * 360) + 90,//converting the mins to degress and offsetting the 90degs we gave it in the css;
			  hoursDegrees = ((hours / 12) * 360) + 90;//converting the hours to degrees;
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;//giving the seconds hand transform a rotate deg of the current seconds..
		minsHand.style.transform = `rotate(${minsDegrees}deg)`;//giving the mins hand transform a rotate deg of the current mins..
		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;//giving the hours hand transform a rotate deg of the current hour..
	};
	/*==Function that gets the current seconds and converts the seconds to degrees etc...==*/
	
	setInterval(setDate, 1000);//setting the interval at which the function gets called
};