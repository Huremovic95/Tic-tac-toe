
<h1> Tic Tac Toe </h1>

Tic Tac Toe is a javascript game built to allow two users to play a tic tac toe game against each other by passing the mouse.

<a href="https://huremovic95.github.io/Tic-tac-toe/" target="_blank">Tic Tac Toe live link </a>

<h3> Techsini Multi Mockup </h3>

<img src="assets/images/multi-mock-up.png">

<br>

<h1> Features </h1>

<h2> Favicon </h2>
<ul>
<li>A site wide favicon will be implemented with a grid of the Tic Tac Toe game</li>
<li>This will provide an image in the the tabs header to allow the user to easily identify the website if they have multiple tabs open.</li>
</ul>

<img src="assets/images/favicon-readme.png">

<br>

<h2> 404 Page </h2>
<ul>
<li>A 404 page will be implemented and will display if a user navigates to a broken link.</li>
<li>The 404 page will allow the user to easily navigate back to the main website if they direct to a broken link / missing page, without the need of the browsers back button.</li>
</ul>

<img src="assets/images/404-readme.png">

<br>

<h2> Main Page </h2>

<ul>
<li>There is a game information section explaining the instruction and win condition.</li>
<li>Also there is a section about the game's history</li>
</ul>

<img src="assets/images/mainpage-readme.png">

<ul>
<li>A Start Game Button will be on the home page that when clicked will direct the user to the main game.</li>
</ul>

<img src="assets/images/start-btn-readme.png">

<br>

<h2> Game Page </h2>

<ul>
<li> The game grid has 9 cells that are responsive to the user when clicked. Depending if it's x or o's turn the cell will show the symbol of the current player. When a cell is already occupied and the user clicks on it nothing will happen.</li>
<img src="assets/images/game-grid-readme.png">
<li>The Players Turn section shows which players turn it is and changes after every play and at the beginning of the game the player that starts also changes.</li>
<li>The Player Score section shows the score(win's) of the X and of the O player. After a win the user gets one added to his or her score.</li>
<img src="assets/images/turn-score-readme.png">
<li>At the end of the game when a player wins or when the game is a draw, a section pops up with information who won (or draw) and gives the users the option to play again or go back to the Home page.</li>
<img src="assets/images/endgame-readme.png">
</ul>

<br>

<h2> Features left to implement </h2>

<ul>
<li>Add a form where the users can put in their names and it shows in game. Instead of X turn and X score {player} name and {player} turn.</li>
</ul>

<br>

<h1> Testing </h1>

<h2> Responsiveness </h2>

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html" target="_blank">WCAG 2.1 Reflow criteria for responsive design</a> on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

<ol>
<li>Open browser and navigate to <a href="https://huremovic95.github.io/Tic-tac-toe/game.html">Tic tac toe</a></li>
<li>Open the developer tools (right click and inspect)</li>
<li>Set to responsive and decrease width to 320px</li>
<li>Set the zoom to 50%</li>
<li>Click and drag the responsive window to maximum width</li>
</ol>

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.

Actual:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were seen:

<ul>
<li>Iphone 12</li>
<li>Ipad air</li>
</ul>

<br>

<h2> Accessibility </h2>

Wave Accessibility tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

The website has no errors when passing through the official <a href="https://wave.webaim.org/aim/" target="_blank">Wave Accessiblility.</a>

<br>

<h2> Validator Testing </h2>

<ul>
<li>HTML</li>
<ul><li>No errors were returned when passing through the official <a href="https://validator.w3.org/" target="_blank">W3C validator</a></li></ul>
</ul>

<img src="assets/images/w3index-readme.png">

<br>

<img src="assets/images/w3game-readme.png">

<br>

<img src="assets/images/w3-404-readme.png">

<br>

<ul>
<li>CSS</li>
<ul><li>No errors were returned when passing through the official <a href="https://jigsaw.w3.org/css-validator/" target="_blank">(Jigsaw) validator</a></li></ul>
</ul>

<img src="assets/images/cssW3-readme.png">

<br>

<ul>
<li>Javascript</li>
<ul><li>No errors were returned when passing through the official <a href="https://jshint.com/" target="_blank">JShint validator</a></li>
<li>32 warnings appeared all of them are saying the same that: 
'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).</li></ul>
</ul>

<img src="assets/images/jshint-readme.png">