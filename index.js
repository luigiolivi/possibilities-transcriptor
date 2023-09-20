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

    nomes[0].forEach((item) => {
        let itens = []

        let itensJ  = []
        
        let j = 0
        for(let i = 1; i < nomes.length; ) {
            
            for ( ; j < nomes[i].length; ) {
                itensJ = nomes[i][j]
            }

            if (i < nomes.length) i++
            else {
                itens.push(itensJ)
                itensJ = []
                i = 1
            }
            
            if (i == nomes.length && j == nomes[i].length) {

            }
            
        }
        
        
    })
        
}

console.log(possibilidades())