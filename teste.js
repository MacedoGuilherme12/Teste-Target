// 1) 91


// 2)
function fibanacci(number){
    let a = 0
    let b = 1
    let nextTerm = a + b 

    while(nextTerm <= number){
        if(nextTerm == number){
            return "Numero informado faz parte do fibanacci"
        }
        a = b
        b = nextTerm
        nextTerm = a + b 
    }
    return "Numero informado não faz parte do fibanacci"
}
console.log(fibanacci(81))

// 4)
// Ligarei um lampada e desligaria ela logo em seguida, deixaria uma lampada acessa e iria ate a sala, a lampada acessa corresponde ao segundo interruptor, lampa mais quente representa o primeiro interruptor, e a desligada fria respresenta o ultimo interruptor

// 5)

function inverterString(string){
    let resultado = ''
    for(let i = string.length - 1; i > 0; i--){
        console.log(string[i])
        resultado += string[i]
    }
    return resultado
}

console.log(inverterString("Sou o Guilherme"))