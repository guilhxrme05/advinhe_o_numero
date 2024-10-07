
//declara variaveis
let numeroTentativas = 0
let numeroGerado 
let min, max

function Game(){


   //pega valores minimo e maximo dos inputs
    min = document.getElementById("inptMinimoID").value
    max = document.getElementById("inptMaximoID").value

    numeroTentativas = 0

    min = Number(min)
    max = Number(max)

    
//verificação básica dos inputs
    if (isNaN(min) || isNaN(max) || !Number.isInteger(min) || !Number.isInteger(max)){
        alert("Por favor, insira apenas números e que sejam inteiros.")
        return
    }

    if(min >= max){
        alert("O valor mínimo deve ser menor que o máximo.")
        return
    }
  

    console.log(min)
    console.log(max)


    //gera o numero aleatório 
   numeroGerado = Math.floor(Math.random() * (max - min + 1)) + min
   console.log(numeroGerado)

    alert("O jogo começou! digite um número e clique em confirma para dar um palpite.")
    
}
    
   
    
    function Confirma(){

        
//pega os valores dos inputs
        let elementoinputPalpite = Number(document.getElementById("inptPalpite").value)
        let elementoinputTentativas = document.getElementById("inptTentativas")
        let elementoinputDica = document.getElementById("inptDica")




        numeroTentativas++
        elementoinputTentativas.value = numeroTentativas


        //verificacao
        if (isNaN(elementoinputPalpite) || !Number.isInteger(elementoinputPalpite)){
            alert("Por favor, insira apenas números e que sejam inteiros.")
            return
        }

        if(elementoinputPalpite < min || elementoinputPalpite > max){
            alert("Seu palpite deve estar entre o número mínimo e máximo.")
            return
        }

        if(elementoinputPalpite == numeroGerado){
            alert("Parabéns! você acertou o número.")
            limpaCampos()
           
        }
        
        else if(elementoinputPalpite != numeroGerado){
            
            elementoinputTentativas.value = numeroTentativas
            if(elementoinputPalpite > numeroGerado){
                elementoinputDica.value = "Chutou alto"
            }
            else{
                elementoinputDica.value = "Chutou baixo"
            }
            
    
        }
    




    }

    //limpa os dados dos inputs ao chamar a funcao
    function limpaCampos(){
        document.getElementById("inptTentativas").value = "" 
        document.getElementById("inptDica").value = ""
        document.getElementById("inptPalpite").value = ""
        document.getElementById("inptMinimoID").value = ""
        document.getElementById("inptMaximoID").value = ""
    }
