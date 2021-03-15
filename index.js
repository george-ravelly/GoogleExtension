document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#btn").addEventListener("click", () => {
        let text = document.querySelector("#nome")
        text.hidden = false
        text.value = ""
        let responder = document.querySelector("#enviar")
        responder.hidden = false
        let nome = document.querySelector("#btn")
        nome.innerHTML = "Girar";
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = " ";
        quiz()
    })


    document.querySelector("#enviar").addEventListener("click", () => {
        let nome = document.getElementById("nome");
        let resultado = document.getElementById("resultado");
        if(nome.value === pokemonName){
            resultado.innerHTML ="Resposta certa!";
            resultado.style = "color: #86FF33"
        }else{
            resultado.innerHTML = "Resposta errada!\n O nome correto é: "+pokemonName;
            resultado.style = "color:#FF5733"
        }
    })

    let pokemon = {}
    let pokemonName = ""
    function getPokemon(){
        let random = (Math.random() * 50).toFixed(0)
        console.log(random)
        fetch("https://pokeapi.co/api/v2/pokemon/"+random)
            .then(response => response.json())
            .then(data => {
                pokemon = data
            }).catch(err => {
                console.log(err)
            })
    }

    function quiz(){
        
        getPokemon()

        let img = document.getElementById('img');
        img.src = pokemon.sprites.front_default;
        pokemonName = pokemon.name
    }
})


