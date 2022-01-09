const jokebutton = document.querySelector("#homer")
const jokelist = []
async function getDadJoke() {

    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            accept: "application/json"
        },
    });
    const data = await response.json();



    displayJoke(data.joke)
    playSoundAfterTime(drumSound, 1000)
    playSoundAfterTime(laughSound, 2000)
    jokelist.push(data.joke)

}

function jokeExists(joke) {
    return (jokelist.includes(joke))
}

function displayJoke(joke) {
    if (jokelist.includes(joke)) {
        console.log("exists")
        return
    } else {
        const jokeTxt = document.querySelector("#joke-text")
        jokeTxt.innerText = joke
    }

}

jokebutton.addEventListener("click", getDadJoke)








//Sounds

//Play drum sound when joke is displayed using timeout
//Play laugh sound after drum sound timeout
//Create 2 variables to store the sounds
//Create function for the timeout
//Call the .play() method on the audio files after timeout
//Call the timeout function when new joke is displayed

const drumSound = new Audio("sounds/drum.mp3");
const laughSound = new Audio("sounds/laugh.mp3");


function playSoundAfterTime(sound, timer) {

    setTimeout(function () {
        sound.play();
    }, timer)

}



/*

PLAN

Create a dad-joke generator

Create HTML boilerplate

Inside HTML file:
    Create a <button> element done
    Have somewhere to display the jokedone

When button is clicked, retrieve a new joke
    Inside app.js:
    Add event listener to button done
    grab button element with document.queryselctor done
    Run async/fetch get dadjoke function when clicked done
    get somewhere to store response from fetch- via api address link/end point. done
    Run .json (const data = await response .jsom) done
    Return joke to the dad joke done
    
    Display the joke to the page, replacing old joke
            Use querySelector to modify the innerText on page

        make function to display the joke in the <p></p>




Ideas:

Implement another API (Trivia/Dictionary/pokemon)
Use user input to generate queries for API
Add audio to page (laughter when a joke is generated/drumroll)



*/