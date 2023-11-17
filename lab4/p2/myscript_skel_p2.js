const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');

const body = document.body;

/**
 * Initial states of the icons
 */
iconMoon.style.display = 'block';
iconSun.style.display = 'none';

const btnMode = document.querySelector('.btn');
btnMode.addEventListener('click', () => {
    /**
     * TODO - Add/Remove the 'active' class depending on
     *        the Day/Night Mode
     * 
     *   -> the 'active' class is used to change the background
     *      when switching to Day Mode (see body.active in .css)
     * 
     * ++ - try using only one command
     */
    // Toggle the 'active' class on the body
	body.classList.toggle('active');
   
    /**
     * TODO - Create a function to change the text
     *        and call it (e.g. from 'Night Mode' to 'Day Mode')
     * 
     *   - you can pass any parameters to the function
     */

	function changeText() {
		let x = document.querySelector(".text-mode");
		if (body.classList.contains('active')) {
			x.innerHTML = "Day Mode";
			x.style.color = getComputedStyle(document.querySelector('.day')).color;
		} else {
			x.innerHTML = "Night Mode";
			x.style.color = getComputedStyle(document.querySelector('.night')).color;
		}
	}
	
    /**
     * TODO - Create a function to switch the icon
     * 
     * > Hint - which attribute can you change?
     */
	function changeIcon() {
		if (body.classList.contains('active')) {
			iconMoon.style.display = 'none';
			iconSun.style.display = 'block';
		} else {
			iconMoon.style.display = 'block';
			iconSun.style.display = 'none';
		}
	}
	   
	changeText();
	changeIcon();
});
