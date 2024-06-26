/* exercitiu 1 */
// alert("Pentru a incepe jocul, apasa OK");

/* exercitiu 3 */
function button_click_change() {
    var backgroundElement = document.querySelector(".background");
    var firstButton = document.getElementById("first");
    var secondButton = document.getElementById("second");

    firstButton.addEventListener("click", changeBackground1);
    secondButton.addEventListener("click", changeBackground2);

    function changeBackground1() {
        backgroundElement.style.backgroundImage = "url('Resurse/backGround1.jpg')";
    }

    function changeBackground2() {
        backgroundElement.style.backgroundImage = "url('Resurse/backGround2.jpg')";
    }
}

/* exercitiu 4 */
var score = 0;
var scoreElement = document.getElementById("scoreValue");

function incrementScore() {
    score++;
    scoreElement.innerText = score;
}

// incrementez la fiecare secunda
var intervalId = setInterval(incrementScore, 1000);

function button_click() {
    console.log();
}


/* exercitiu 5-6 */
var sonicCharacter = document.querySelector(".sonic");

document.addEventListener("keydown", function(e) {
    if (e.code === 'Space') {
        jump();
    }
});

// functia de sarit
function jump() {
    
    sonicCharacter.style.transition = "0.2s ease-out";
    sonicCharacter.style.bottom = "30%"; // inaltimea sariturii
    changeSonicImage();
    // timp sa revina in starea  initiala
    setTimeout(resetJump, 200);
}

// functie pt starea initiala
function resetJump() {
    sonicCharacter.style.transition = "0.3s ease-in";
    sonicCharacter.style.bottom = "1%";
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        // Change Sonic's image when the Space key is pressed
        changeSonicImage();
    } 
});

function changeSonicImage() {
    var sonicElement = document.querySelector('.sonic');
    sonicElement.style.transition = 'background-image 0.1s ease-in-out';

    // schimb imaginea caracterului
    sonicElement.style.backgroundImage = "url('Resurse/sonicJumping.png')";

    setTimeout(function() {
        sonicElement.style.backgroundImage = "url('Resurse/sonicCharacter.jpg')";
    }, 300);
}  


// Generarea și mișcarea obstacolelor
function createObstacle() {
    var obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    document.querySelector('.background').appendChild(obstacle);
    moveObstacle(obstacle);
}

function moveObstacle(obstacle) {
    obstacle.style.animation = 'moveObstacle 10s linear infinite';
    
    setInterval(function() {
        var sonicRect = sonicCharacter.getBoundingClientRect();
        var obstacleRect = obstacle.getBoundingClientRect();
        
        if (
            sonicRect.right > obstacleRect.left &&
            sonicRect.left < obstacleRect.right &&
            sonicRect.bottom > obstacleRect.top &&
            sonicRect.top < obstacleRect.bottom
        ) {
            resetGame();
        }
    }, 300);
}

function resetGame() {
    score = 0;
    scoreElement.innerText = score;
    // alert('Ai pierdut! Scorul tău a fost resetat.');
}

// Creează un obstacol la fiecare 3 secunde
setInterval(createObstacle, 3000);