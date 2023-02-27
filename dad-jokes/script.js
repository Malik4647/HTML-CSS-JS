const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener("click", genrateJoke)

genrateJoke()

// USING ASYNC/AWAIT
async function genrateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json()

    jokeEl.innerHTML = data.joke


}

// USING .then()
// function genrateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }