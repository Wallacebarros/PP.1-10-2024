const nameP = document.querySelector("#pokemon-name")
const img =  document.querySelector("#pokemon-img")
const weight = document.querySelector("#pokemon-weight")
const btn = document.querySelector("button")

nameP.textContent = " "
img.src = "./pokebola.webp"
weight.textContent = " "

btn.addEventListener('click', () => {
    const pokemon = document.querySelector("input")

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
    .then(response => {
        return response.json()
    })
    .then(date => {
        nameP.textContent = date.name
        img.src = date.sprites.front_shiny
        weight.textContent = date.weight + " kg"
    })
    .catch(err => {
        nameP.textContent = "pokemon não encontrado"
        img.src = "./pokebola-vazia"
        weight.textContent = ""
    })
})