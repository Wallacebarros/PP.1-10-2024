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
        const nameP = date.name
        const img = date.sprites.other['official-artwork'].front_default
        const type =  date.types[0].type.name
        const ability = date.abilities[0].ability.name
        const weight = date.weight
        const height = date.height
    })
    .catch(err => {
        nameP.textContent = "pokemon não encontrado"
        img.src = "./pokebola-vazia.jpg"
        weight.textContent = " "

        console.log(err)
    })
})