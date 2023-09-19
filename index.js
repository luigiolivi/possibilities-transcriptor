const valores = [6, 2, 2]
const nomes = [[1, 2, 3, 4, 5, 6], ['cara', 'coroa'], ['cara', 'coroa']]

const possibilidades = () => {
    let resultados = []

    let possibilidades = 1
    for(let i = 0; i < valores.length; i++) {
        possibilidades *= valores[i]
    }
    resultados.push(possibilidades)

    return resultados
}

const transcricao = () => {
    let resultado = []
    for(let i = 0; i < nomes.length; i++) {
        for(let j = 0; j < nomes[i].length; j++) {
            
        }
    }    
}

console.log(possibilidades())