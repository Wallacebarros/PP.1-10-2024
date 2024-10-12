const nameP = document.querySelector("#nameP")
const img =  document.querySelector("#img")
const type = document.querySelector("#type")
const height = document.querySelector("#height")
const ability = document.querySelector("#ability")
const weight = document.querySelector("#weight")
const btn = document.querySelector("button")

nameP.textContent = " "
img.src = "./pokebola.png"
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
        
        this.nameP.textContent = nameP
        this.img.src = img
        this.type.textContent = type
        this.ability.textContent = ability
        this.weight.textContent = weight
        this.height.textContent = height

    })
    .catch(err => {
        nameP.textContent = "pokemon não encontrado"
        this.img.src = "./pokebola-vazia.png"
        weight.textContent = " "

        console.log(err)
    })
})