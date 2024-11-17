const url= 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasMundo = (dados.total_pessoas_mundo / 1e9)
    const pessoasComAcessoAEducacao = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio_dia_estudando - horas) * 60)
    const pessoasComEducacaoSuperior = (dados.total_pessoas_com_educacao_superior / 1e9)
    const percentual = ((pessoasComAcessoAEducacao/pessoasMundo)*100).toFixed(2)

   
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o total de pessoas no mundo é de <span>${pessoasMundo}</span> de pessoas e que o total de pessoas com acesso à educação é de <span>${pessoasComAcessoAEducacao}.</span> O tempo médio gasto por dia estudando é de <span>${horas}</span> horas e <span>${minutos} minutos</span> conectadas.O total de pessoas com educação superior é de <span>${pessoasComEducacaoSuperior}.</span> Isso significa que aproximadamente <span>${percentual}%</span> de pessoas tem acesso à Educação.Será que esses dados apontam para uma realidade de um mundo esclarecido e com facilidade de acesso à Educação?.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}
vizualizarInformacoesGlobais() 



