# Skeleton Smasher

## Purpose of Skeleton Smasher
Clicker games or incremental games are a genre of game in which the player accumulates an increasing amount of score (initially recieved only by an action such as clicking a button with your mouse cursor). The player then uses that score to buy objects which automate the accumulation of score for the player (although some games in this genre incentivise the player to continue clicking). These objects usually come in different categories and the more expensive they are the more quickly they accumulate score for the player. Each consecutive purchase from a single category of objects becomes increasingly expensive as the player buys more of them. In the clicker game genre, the player is rewarded quickly in the beginning with small rewards but the length of time between purchases of objects increases as the playtime increases with the player's satisfaction usually coming from buying increasingly expensive and efficient objects to automate the process. 

Because the objects the player buys can automate the process in clicker games, the player can leave their game to play for itself, meaning that as a clicker game's playtime goes on, often the player will only return to buy objects before returning to do something else away from the game.

Although seemingly pointless, clicker games are enjoyable because they reward the player with the satisfaction of achieving something when they buy an object even though they have not necessarily done anything complex or requiring attention.

The Skeleton Smasher website is a website that allows the user to play a simple clicker game for their own enjoyment. The user comes to the landing page where they are told the fictional story behind the game and given the instructions to play the game.


//IMG HERE


The user is directed to the actual game page and has to click the button and eventually buy units of increasing expense and quality and upgrades for their clicking. The game tracks their score, total score among other statistics and the ver increasing numbers provide a sense of satisfaction to the user even if they are not actually doing anything strenous or challenging.

 //IMG HERE
## Features
The project consists of two webpages which I will refer to as 'Intro Page' and 'Main Game Page'.

### Features of Intro Page

* Title
    * The Title consists of a heading in a large gold font that reads 'Skeleton Smasher!'. This is purely for introductory purposes for the user.

//IMG HERE
* Story Section
    * The Story Section consists of a short paragraph of text in that attempts to give a story context to the clicker game. The paragraph has skull icons placed at the beginning and end of it. This paragraph is purely for setting the tone of the game and is meant to be similar to text introductions that would appear in retro games.

//IMG HERE
* How to Play Section
    * The How to Play Section consists of a heading with a wavy underline and four lines of text each with skull icons at the beginning and end of them. These lines of text inform the user of how to play the game and this along with the feedback from the highlighting of the buttons in the Main Game Page will allow the user to quickly understand how the game works.
    
//IMG HERE
* Link to Main Page Button
    * The Link to Main Page Button is a button with bold white text in a different font that reads: 'Play Skeleton Smasher!'. This is where the player's eye should be drawn to and this is because it is the most important part of the page (being the link between the Intro Page and the Main Game Page).
    * The background for the button highlights a lavender-like color when hovered over, providing the user with visual feedback that this element can be clicked on.

//IMG HERE
### Features of Main Game Page

The Main Game Page is split into four distinct sections: The Title, the Left, the Middle and the Right.
* Title
    * The Title is displayed along the top of the page. It consists of the underlined heading 'Skeleton Smasher!' but in a smaller font than the one in the Intro Page. This is purely to display the name of the game to the user.
//IMG HERE
* Left Section 
* The Left Section is the point of 'secondary interface' for the user. The user's eye should not be immediately drawn to this section because the text is smaller than the Middle Section and there aren't (initially) any visible images. From here the user can buy units and upgrades to automate the process of generating score in the clicker game.
    //IMG HERE
    * Unit/ Upgrade Buttons
        * The Unit/ Upgrade Buttons are four buttons that the user can click to either (in the case of the Buy Peasant, Buy Soldier or Buy Paladin buttons) automate the clicking process, or allow the amount of score they generate per click to increase (in the case of the Buy Sword Upgrade button).
        * Hovering over the buttons causes them to change background color from black to lavender to reveal the background images which correspond to the type of unit or upgrade available for purchase.
        * If the player has an amount of score equal to or greater than the price in the Price Text corresponding to that button, the corresponding statistic text in the Right Section will increase by 1, the amount of score the user bought the unit or upgrade with will be subtracted from the Score statistic, the Skeletons Smashed per second statistic will update after 1/60th of a second, the Price Text will update and a victory sound will play.
    //IMG OF EACH HIGHLIGHTED BUTTON
    * Description Texts
        * The Description Texts are italicised texts explaining a story purpose behind the unit and what amount of score they automate per second. As this information is useful but not critical to the functioning of the game, on smaller screen sizes such as mobile devices this text is removed by media query in order to make the website less cluttered.
    * Price Texts
        * The Price Texts display how much Score the user must spend in order to purchase a unit or an upgrade. The starting amount is different for each unit/ upgrade and the factor by which it increases with each subsequent purchase is also different. The Price Text updates after each purpose of that specific unit/ upgrade.
* Middle Section 
* The Middle Section is the area where the user's eye should be immediately drawn to because of the large text, responsive button, different colors and skull images.
    //IMG HERE
    * Main Button
        * The Main Button is the first point of interaction for the user and the game cannot be properly played unless this is first pressed. Pressing this button increases the Current Score and Total Score statistics in the Right Section by 1 multiplied by the user's current Sword Level statistic. 
        * This must be pushed first as without Current Score the user cannot purchase units or upgrades and units make the incrementation of Current Score possible in order to purchase further units/ upgrades (the purpose of a clicker game).
        * The Main Button consists of a button with a white border and large white text reading 'Click to Smash Skeletons!' which highlights a lavender color when hovered over.
        * Clicking the Main Button causes a sound to play which is intended to be indicative of a user smashing a skeleton.
    * Skull Images
        * There are two skull images below the button which follow the color scheme of the page but are mostly there for thematic purpose.
* Right Section
* The Right Section is the area where the user can be informed about the statistics of the game, such as the amount of units they have purchased etc. It also contains a button to go back to the Intro Page
    //IMG HERE
    * Current Score
        * The Current Score statistic displays the amount of score the user currently has to spend. It increases when the Main Button is clicked or when the score is incremented every second from purchased units. It decreases when spent on units or upgrades.
    * Total Score
        * The Total Score statistic displays the amount of score the user has accumulated throughout the entire game. It increases when the Main Button is clicked or when the score is incremented every second from purchased units. It never decreases, unlike the Current Score statistic.
    * Skeletons Smashed Per Second
        * The Skeletons Smashed Per Second statistic displays the amount of score that the user generates from purchased units. It is calculated from the statistics of Number of Peasants, Number of Soldiers and Number of Paladins. 
        * The Skeletons Smashed Per Second statistic is revised every 60th of a second, meaning to the user any changes from units they purchase will seem instantaneous.
    * Number of Peasants
        * This statistic represents the amount of Peasant units the user has purchased throughout the game. Each unit increases the Skeletons Smashed Per Second statistic by 1.
    * Number of Soldiers
        * This statistic represents the amount of Soldier units the user has purchased throughout the game. Each unit increases the Skeletons Smashed Per Second statistic by 10.
    * Number of Paladins
        * This statistic represents the amount of Paladin units the user has purchased throughout the game. Each unit increases the Skeletons Smashed Per Second statistic by 100.
    * Sword Level
        * This statistic represents the amount of Sword Upgrades the user has purchased throughout the game. Each upgrade increases the amount of score the player gets from clicking the Main Button by 1.
    * Back to Intro Button
        * This button sends the user back to the Intro Page. 
        * It highlights a lavender color when hovered over to let the user know that it can be interacted with.
        * As going back to the Intro Page will erase the user's progress on the Main Game Page, the text of the button is small so it is less likely the user will click the button.

## Future Features
There are a number of features that if more time was given I would like to add to the Skeleton Smasher game.
* More Unit Types
    * I had intended to add more unit types at the beginning (see the picture of my wireframe in the Wireframes and Prototypes section) however realised that it would go beyond the scope of this project. If I had more time I would like to add more types of units for the user to purchase that could maybe act slightly differently to the current unit types. For example, perhaps there would be a unit which would generate lots of score per second and the first one would be relatively cheap but the factor used on it when calculating its Price Text could be extortionate so the user would only be able to purchase such a unit very rarely and each one would feel like a major milestone.
* More Upgrade Types
    * I would have liked to add a few more upgrade types that would also do different things like perhaps increase the amount of score that each Peasant unit produces per second. This would make Peasant units more valuable as the Skeletons Smashed Per Second amount increases as right now they are heavily outshined by the Soldier and Paladin units except for right when the user starts the game.
* A Hidden Future Unit Type Feature
    * Many clicker games create a sense of curiosity in the player by not revealing all of their unit types at the beginning of the game. Some have icons of the units that are shadowed out until the player generates enought Current Score or Total Score to see them in which case they will become fully visible and the amount needed to purchase them becomes visible as well. I would have liked to do this but such a feature would require a lot of time all by itself and might even be larger than the current project in scope if enough units like this were introduced.
* Additional Gameplay Features
    * Many clicker games realise that eventually the player will get bored of mindlessly clicking or waiting to purchase their next unit or upgrade and will include minigames to keep the player entertained. As the sky is the limit for these sort of features I decided not to attempt this as it could easily have surpasses the scope of this project in complexity.

## Typography and Color Scheme

* Color Scheme 
    * The color scheme for Skeleton Smasher was designed to be dark and spooky in keeping with the themes of game. 
    * The hex values of the colors used in the two webpages are:
        * #000000 for the black color which mostly acts as a background color or to provide contrast to the text.
        * #585757 for the dark grey color which mostly acts as a background color or to provide contrast to the text.
        * #ffffff for the white color which is used as the font color for the main buttons of both webpages to draw the user's eye to them immediately whilst still providing contrast with the white background. It is also used for the link button on the main page but as that is in the corner and the font-size is smaller than the main button the user's eye is unlikely to be immediately drawn there. It is also used as a border color for the main button.
        * #ffd700 for the gold color which is used as a font color, for the icons on the intro page and for line breaks and borders on the main page to keep things separated visually.
        * #6e70a1 for the lavender color. This is used as a visual feedback to the user telling them that the element they have their mouse over or have touched is interactive and is used to highlight buttons across the two webpages. It provides contrast with the black backgrounds that the buttons have before being hovered over.

* Fonts
    * Even though the color scheme was designed to be dark and spooky; I still wanted the website itself to have a somewhat whimsical feel, like an retro game. For this reason I chose the 'Macondo' font to act as the main font across both pages because of its whimsical feel. For the main buttons on each page, however, I used the 'Koulen' font to draw the user's attention immediately.
    * These fonts were taken from [Google Fonts](https://fonts.google.com/).
## Wireframes and Prototypes

* Balsamiq Wireframes
    * Before beginning the project, I used Balsamiq Wireframes to produce a rough idea of what I wanted the main Skeleton Smasher page to look like. The actual webpage went through many changes and the wireframe looks very different from the actual product but the core features are still present in this image here:

    //IMG HERE

## Technology Used
* HTML
    * Used to build the structure of the website and for audio and some of the image elements.

* CSS 
    * Used to style the website and change the website depending on screen sizes with media queries. Also used to add background images to the unit/ upgrade buttons.

* Balsamiq Wireframes
    * Used for prototyping and making a rough outline of the main game webpage (the intro was not sufficiently complex enough to warrant a wireframe).

* Font Awesome
    * Scripts and Icons were used to add icons to the Skeleton Smasher Intro page. 

* Google Fonts
    * Used to style the fonts of the website.

* GitHub 
    * Used for the repository and deployment of the website.

* Gitpod 
    * Used for the development of the website.

## Testing
* HTML Validator
    * When passed through the W3C HTML validator no errors were found on index.html or skeleton-smasher.html files. There were warnings about not using headings for some sections however I have chosen to ignore these warnings as they would negatively affect the look of the website and would only clutter the screenspace on smaller device sizes.
* CSS Validator
    * When passed through the W3C CSS validator no errors were found on skeleton-smasher.css or intro.css.

* JSHint
    * When passed through JSHint no errors were found on script.js.

* Search Engines
    * The Skeleton Smasher Intro and Skeleton Smasher webpages are fully functional and work in the Google Chrome web browser.
    * The Skeleton Smasher Intro and Skeleton Smasher webpages are fully functional and work in the Brave web browser.
    * The Skeleton Smasher Intro and Skeleton Smasher webpages are fully functional and work in the Firefox web browser.

* Screen Sizes
    * The Skeleton Smasher Intro and Skeleton Smasher webpages are fully functional across a wide range of devices in DevTools with no obvious visual glitches.

* Text Contrast
    * The dark background of dark grey and black contrast well with the gold colored and white text to allow it to be easily read and made legible.

* Functionality
    * I confirmed that the external links between the two webpages are functional.
    * I confirmed that the buttons for adding score/ total score and buying units and upgrades are functional; the buttons produce the desired output on the right hand side of the screen in regards to numbers.
    * I confirmed that the automatic incremental functions for score, total score and Skeletons Smashed per second work as intended and display the correct values.
    * I confirmed that there are limits to the amount of score, total score, units and upgrades such that the numbers never rise to high to cause visual glitching on the webpage across a wide range of devices.

    //IMG HERE
* Lighthouse Check
    * I confirmed that the Skeleton Smasher Intro and Skeleton Smasher webpages passed the Lighthouse Check in DevTools across both mobile and desktop environments.

    //IMG HERE
    //IMG HERE
    //IMG HERE
    //IMG HERE

* Limit Testing
    * I changed the code before completion so that each click would increase the Current Score and Total Score up to 99999999. I then purchased up to 99 of each unit and maxed out the Price Text on each unit/ upgrade. This was to make sure my code prevented numbers rising above 99999999 for Current Score, Total Score or Price Texts and above 99 for units and upgrades. As Skeletons Smashed Per Second is dependent upon all these factors, its max limit is capped at 10989. I tested these limits because although it is unlikely anyone would reach them, should they surpass them enough they would cause visual glitches on the webpage when number texts would become larger than their containers (and other measures such as overflow hiding or scrolling would not look good or work well for the user).

//IMG HERE
## Test Cases
In this section, I discuss what output should be associated with what input when a user accesses either the Intro Page or the Main Game Page.
### Intro Page Test Cases
* Link to Main Page Button
    * Input: The user hovers over the Link to Main Page Button.
    * Output: The background of the Link to Main Page Button should change from black to a lavender color.
    * Input: The user clicks on the Link to Main Page Button.
    * Output: The user should be taken to the Main Game Page.
### Main Game Page Test Cases
* Main Button
    * Input: The user hovers over the Main Button.
    * Output: The background of the Main Button should change from black to a lavender color.
    * Input: The user clicks on the Main Button.
    * Output: The Current Score and the Total Score should increase by 1 multiplied by the Sword Level statistic.
    * Input: The user clicks on the Main Button and the amount of Current Score/ Total Score is 99999999 or the user's click would send the number over this amount.
    * Output: The Current Score or Total Score would become 99999999. This has been coded in to be the limit as it prevents the user eventually acquiring a score which would cause visual glitching of the webpage.
* Unit/ Upgrade Buttons
    * Buy Peasant Button
        * Input: The user hovers over the Buy Peasant Button.
        * Output: The background of the Buy Peasant Button changes from black to lavender and the background image of a peasant is revealed to the user.
        * Input: The user clicks the Buy Peasant Button and the Current Score statistic is greater than or equal to the Price Text for the Peasant unit.
        * Output: The Number of Peasants statistic is increased by 1. The Skeletons Smashed Per Second statistic is increased by 1. The Price Text for the Peasant unit is multiplied by 1.5. Audio of a victory sound will play.
        * Input: The user clicks the Buy Peasant Button and the Current Score statistic is greater than or equal to the Price Text for the Peasant unit but the Price Text is 99999999 or will be after being multiplied.
        * Output: The Number of Peasants statistic is increased by 1. The Skeletons Smashed Per Second statistic is increased by 1. The Price Text for the Peasant unit will change to the limit of 99999999. Audio of a victory sound will play.
        * Input: The user clicks the Buy Peasant Button and the Current Score statistic is greater than or equal to the Price Text for the Peasant unit but the Price Text is 99999999 or will be after being multiplied and the Number of Peasants statistic is 98 or 99.
        * Output: The Number of Peasants statistic is increased to 99. The Skeletons Smashed Per Second statistic is not increased. The Price Text for the Peasant unit will change to the limit of 99999999. Audio of a victory sound will play.
        * Input: The user clicks the Buy Peasant Button and the Current Score statistic is less than the Price Text for the Peasant unit.
        * Output: Nothing will change.
    * Buy Soldier Button
        * Input: The user hovers over the Buy Soldier Button.
        * Output: The background of the Buy Soldier Button changes from black to lavender and the background image of a soldier is revealed to the user.
        * Input: The user clicks the Buy Soldier Button and the Current Score statistic is greater than or equal to the Price Text for the Soldier unit.
        * Output: The Number of Soldiers statistic is increased by 1. The Skeletons Smashed Per Second statistic is increased by 10. The Price Text for the Soldier unit is multiplied by 1.8. Audio of a victory sound will play.
        * Input: The user clicks the Buy Soldier Button and the Current Score statistic is greater than or equal to the Price Text for the Soldier unit but the Price Text is 99999999 or will be after being multiplied.
        * Output: The Number of Soldiers statistic is increased by 1. The Skeletons Smashed Per Second statistic is increased by 10. The Price Text for the Soldier unit will change to the limit of 99999999. Audio of a victory sound will play.
        * Input: The user clicks the Buy Soldier Button and the Current Score statistic is greater than or equal to the Price Text for the Soldier unit but the Price Text is 99999999 or will be after being multiplied and the Number of Soldiers statistic is 98 or 99.
        * Output: The Number of Soldiers statistic is increased to 99. The Skeletons Smashed Per Second statistic is not increased. The Price Text for the Soldier unit will change to the limit of 99999999. Audio of a victory sound will play.
        * Input: The user clicks the Buy Soldier Button and the Current Score statistic is less than the Price Text for the Soldier unit.
        * Output: Nothing will change.
    * Buy Paladin Button
        * Input: The user hovers over the Buy Paladin Button.
        * Output: The background of the Buy Paladin Button changes from black to lavender and the background image of a paladin is revealed to the user.
        * Input: The user clicks the Buy Paladin Button and the Current Score statistic is greater than or equal to the Price Text for the Paladin unit.
        * Output: The Number of Paladins statistic is increased by 1. The Skeletons Smashed Per Second statistic is increased by 100. The Price Text for the Paladin unit is multiplied by 2.2. Audio of a victory sound will play.
        * Input: The user clicks the Buy Paladin Button and the Current Score statistic is greater than or equal to the Price Text for the Paladin unit but the Price Text is 99999999 or will be after being multiplied.
        * Output: The Number of Paladins statistic is increased by 1. The Skeletons Smashed Per Second statistic is increased by 100. The Price Text for the Paladin unit will change to the limit of 99999999. Audio of a victory sound will play.
        * Input: The user clicks the Buy Paladin Button and the Current Score statistic is greater than or equal to the Price Text for the Paladin unit but the Price Text is 99999999 or will be after being multiplied and the Number of Paladins statistic is 98 or 99.
        * Output: The Number of Paladins statistic is increased to 99. The Skeletons Smashed Per Second statistic is not increased. The Price Text for the Paladin unit will change to the limit of 99999999. Audio of a victory sound will play.
        * Input: The user clicks the Buy Paladin Button and the Current Score statistic is less than the Price Text for the Paladin unit.
        * Output: Nothing will change.
    * Buy Buy Sword Upgrade Button
        * Input: The user hovers over the Buy Sword Upgrade Button.
        * Output: The background of the Buy Sword Upgrade Button changes from black to lavender and the background image of a sword is revealed to the user.
        * Input: The user clicks the Buy Sword Upgrade Button and the Current Score statistic is greater than or equal to the Price Text for the Sword upgrade.
        * Output: The Sword Level statistic is increased by 1. The Price Text for the Sword upgrade is multiplied by 2. Audio of a victory sound will play.
        * Input: The user clicks the Buy Sword Upgrade Button and the Current Score statistic is greater than or equal to the Price Text for the Sword upgrade but the Price Text is 99999999 or will be after being multiplied.
        * Output: The Sword Level statistic is increased by 1. The Price Text for the Sword upgrade will change to the limit of 99999999. Audio of a victory sound will play.
        * Input: The user clicks the Buy Sword Upgrade Button and the Current Score statistic is greater than or equal to the Price Text for the Sword upgrade but the Price Text is 99999999 or will be after being multiplied and the Sword Level statistic is 98 or 99.
        * Output: The Sword Level statistic is increased to 99. The Price Text for the Sword upgrade will change to the limit of 99999999. Audio of a victory sound will play.
        * Input: The user clicks the Buy Sword Upgrade Button and the Current Score statistic is less than the Price Text for the Sword upgrade.
        * Output: Nothing will change.
* Back to Intro Button
    * Input: The user hovers over the Back to Intro Button.
    * Output: The background of the Back to Intro Button changes from black to lavender.
    * Input: The user clicks on the Back to Intro Button.
    * Output: The user is taken back to the Intro Page.
## Bugs
Here is a list of the more significant bugs I encountered when building Skeleton Smasher.
* <button> <a> Tag Incompatibility
    * Bug: The W3C validator informed me that it is bad practice to mix 'button; and 'a' elements inside one another which I had done up until the point of validation.
    * Fix: In order to correct this, I instead used a 'form' element containing a 'button' element inside it. The form had a method attribute of 'GET' and an action attribute of the intended destination.
* JSHint Undeclared Variables
    * Bug: When running script.js through JSHint the first time it was revelealed many of my variables were not defined due to me not using the 'let' keyword. As such the scopes they were in were causing weird glitches in the logic of my program (ie removing a variable from a function did not cause the logic to break because elsewhere there was a variable with the same name outside the function.)
    * Fix: Added the 'let' keyword to variables when not yet declared in a function.
* for Loop to forEach() function problems
    * Bug: I changed the for loop in script.js which iterated over the Unit/ Upgrade Buttons to give them event listeners to a forEach() function. At first this caused the logic of the program to not work as intended.
    * Fix: I realised that this was because the forEach() function would only iterate over an array not a HTMLCollection and added an Array.from() function before the document.getElementsFromClassName() function call which fixed the problem completely and the program began to work as expected.
* Font Causing Lighthouse Checks to Fail
    * Bug: Lighthouse Checks were failing on both webpages. Worse so on the mobile checks.
    * Fix: After significant trial and error, I found that decreasing the amount of the 'Koulen' font that was imported from Google Fonts seemed to have a positive effect on the Lighthouse Check performance metric. Whereas before most of the text on both webpages was in 'Koulen' it now only occurs on the main buttons on each page.
## Deployment

### Gitpod
This site was temporarily deployed for testing purposes in Gitpod Workspaces. Here are the steps I took to deploy the website:

* Firstly, I opened up Gitpod Workspaces.
* Secondly, I opened the skeleton-smasher workspace.
* Thirdly, I type 'python3 -m http.server' into the bash terminal.
* Finally, I opened the link that popped up to open up the Skeleton Smasher Intro webpage in a new tab.

### GitHub
This site was deployed on GitHub Pages. Here are the steps I took to deploy the website:
* Firstly, I went to my repository for skeleton-smasher on GitHub.
* Secondly, I clicked on Settings.
* Thirdly, I clicked on Pages in the sidebar.
* Then, I selected the main branch to publish.
* I then waited and a link to the intro page was provided.

The link to the published Skeleton Smasher Intro webpage is here: [Skeleton Smasher](https://carlg96.github.io/skeleton-smasher/)

## Credits