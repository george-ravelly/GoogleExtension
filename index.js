document.addEventListener("DOMContentLoaded", () => {
    let count = 0
    let pokemon = {}
    let pokemonName = ""
    let imagem = ""

    document.querySelector("#btn").addEventListener("click", () => {
        let text = document.querySelector("#nome")    
        text.hidden = false
        text.value = ""
        let responder = document.querySelector("#enviar")
        responder.hidden = false  
        let nome = document.querySelector("#btn")
        nome.innerHTML = "Girar";
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        quiz()
    })

    document.querySelector("#enviar").addEventListener("click", () => {
        let nome = document.getElementById("nome");
        let resultado = document.getElementById("resultado");
        let acertos = document.getElementById("acertos");
        if(nome.value !== ""){
            if(nome.value === pokemonName){
                document.getElementById('img').style = "-webkit-filter: grayscale(0%); filter: grayscale(0%); filter: gray;"
                resultado.innerHTML ="Resposta certa!";
                resultado.style = "color: #86FF33";
                document.getElementById("enviar").hidden = true
                acertos.hidden = false
                acertos.innerHTML = ++count
            }else{
                document.getElementById("enviar").hidden = true
                nome.value = " "
                resultado.innerHTML = "Resposta errada! O nome correto é: "+pokemonName;
                resultado.style = "color: #FF5733";
            }
        }else{
            resultado.innerHTML = "Digite o nome do pokemon!!!";
            resultado.style = "color:#FF5733";
        }
        
        
    })
    
    function getPokemon(){
        let random = (Math.random() * 151).toFixed(0)
        //console.log(random)
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
        imagem = pokemon.sprites.front_default;
        img.src = imagem
        img.style = "-webkit-filter: grayscale(100%); filter: grayscale(100%); filter: gray;"
        pokemonName = pokemon.name        
    }
})


