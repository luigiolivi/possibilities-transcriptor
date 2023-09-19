const valores = [[6, 2]]

const possibilidades = () => {
    let resultados = []
    for(let i = 0; i < valores.length; i++) {
        for(let j = 0; j < valores[i].length; j++) {
            let possibilidades = 1
            possibilidades *= valores[i][j]
        }
        resultados.push(this.possibilidades)
    }

    return resultados
}

console.log(possibilidades())