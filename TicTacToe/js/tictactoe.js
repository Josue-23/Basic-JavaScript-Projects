
//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditons.
let selectedSquares = [];

//This function is for placing an x or o in a sqaure.
function placeXOrO(squareNumber) {
    //This condition ensures a squre hasn't been selected already.
    //the .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html elemts id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is.
            if (activePlayer ==='x.png') {
                //If activeplayer is equal to 'X', the.png is placed in HTML
                select.style.backgroundImage = 'x.png';
                //Active player may only be 'X' or 'O' so, if not 'X' it must be 'o'
            } else {
                //if activeplayer is equal to 'o', the o.png is placed in html
                select.style.backgroundImage = 'o.png'
            }
            //sqaureNumber and activeplayer are concatenated togther and added to array.
            selectedSquares.push(squareNumber + activePlayer);
            //This calls a function to check for any win condtions.
            checkWinConditions();
            //This condition is for changing the active player.
            if (activePlayer === 'X') {
                //If active player is 'X' change it to 'o'
                activePlayer = 'O';
            //If active player is anything other than 'X'.
            } else {
                //change the activeplayer to 'X'
                activePlayer = 'X';
            }




            //This function plays placement sound.
            audio('./media/place.mp3');
            //This condition checks to see if it is computers turn.
            if(activePlayer === 'O') {
                //This function disables clicking for computer choice.
                disableClick();
                //This function waits 1 seccond before computer places image and enables click.
                setTimeout(function () { computersTurn(); }, 1000)
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results in a random sqaure being selected.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //this condition allowa our while loop to keep trying if a square is selected already
        while(!success){
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)){
                //this line calls the function.
                 placeXOrO(pickASquare);
                 //this changes our boolean and ends the loop.
                 success = true;
            };
        }
    }

}

//this function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is meet.
function checkWinConditions() {
    //X O, 1, 2 condition.
    if  (arrayIncludes('OX', '1x', '2X')) { drawWinLine(50, 100, 558, 100) }
    // x 3, 4 ,5 condition 
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508) }
    //X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine (100, 100, 520, 520) }
    // o 0, 1, 2 condition 
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304) }
    //O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }
    // o 1, 4, 7 condition 
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition 
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558) }
    //O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition,
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520) }
    //This condition checks for tie. If none of the above conditions register and 9
    //sqaures are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the rresetGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }


    //this function checks if an array includes 3 strings. it is used to check for
    //each win condition.
    function arrayIncludes(sqaureA, squareB, squareC) {
        // These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(sqaureA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 variables we pass are all included in our array true is 
        //returned and our else if condition executes the drawWinLine function
        if (a === true && b === true && c == true) { return true }
    }
}


//this function makes our body elements temporarilyunclickable.
function disableClick() {
    //this makes our body unclickable.
    body.style.pointerEvents = 'none';
    //this makes our body clickable again 1 second.
    setTimeout(function() {body.style.pointerEvents = 'auto' ;}, 1000);
}

//this function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();
}

//this function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
//this line accesses our html canvas element.
    const canvas = document.getElementById('win-lines')
    //this line gives us acces to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //this line indicates where the start of a line x axis is
    let x1 = coordX1,
        //this line indicates where the start of a lines y axis is.
        y1 = coordY1,
        // this line indicates where the 
        x2 = coordX2,
        //this line where the end of a lines x axis is.
        y2 = coordY2,
        //this variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //This variable stores temporary y axis data we update in our animation loops
        y = y1;

    //this function interacts with the canvas 
    function animateLineDrawing() {
        //this variale creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration.
        c.clearRect(0, 0, 608, 6080)
        //this method starts a new path
        c.beginPath();
        //this method moves us to a starting point for our line.
        c.moveTo(x1, y1)
        // this method indicates the end point in our line.
        c.lineTo(x, y)
        //thismethod sets the width of our line.
        c.lineWidth = 10;
        //this method sets the color of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this method draws everything we laid out above.
        c.stroke();
        //this conditionj checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous endx point.
            if (x < x2) { x += 10;}
            //this condition adds 10 to the previous end y point.
            if (y < y2) { y += 10;}
            //this condition cancels our animation loop
            //if we've reach the end points.
            if ( x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //this condition is similar to the one above
        //this is necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10; }
            if(y > y2) {y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop)}
        }
    }

    //this function clears our canvas after our win line is drawn.
    function clear() {
        //this line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //this line clears canvas
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds.
    audio('./media/winGame.mp3');
    //this line calls our main animation loop.
    animateLineDrawing();
    //this line waits 1 second. then clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

    //this function resets the game in the event for a tie or a win.
    function resetGame() {
        //this for loop iterates through each html square element
        for (let i = 0; i < 9; i++) {
            //this variable gets the htmlelemtent of 1
            let square = document.getElementById(String(i))
            //this removes our elements backgroundimage.
            square.style.backgroundImage = './'
        }
        //this removes our elements backgroundimage.
        selectedSquares = [];
}
