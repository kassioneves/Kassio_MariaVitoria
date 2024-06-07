const formsFilme = document.getElementById('formFilme');
formsFilme.onsubmit = function(event) {
    event.preventDefault();
}

//Função para fazer a lista dde filmes
function adicionarFilmes() {
    var titulo = document.getElementById('titulo').value;
    var diretor = document.getElementById('diretor').value;
    var ano = document.getElementById('ano').value;
    var lista = document.getElementById('lista');

    class FilmesCadastro {
        constructor(tituloFilme, diretorFilme, anoFilme) {
            this.tituloFilme = tituloFilme
            this.diretorFilme = diretorFilme
            this.anoFilme = anoFilme
        }

        informacoesFilme() {
            return `${this.tituloFilme} - ${this.diretorFilme} (${this.anoFilme})<br><br>`
        }
    }

    //Estrutura de condição para ver se os campos estão preenchidos com as informações. 
    if(titulo === "" || diretor === "" || isNaN(ano)) {
        alert('Preencha todos os Campos');
    } 
    
    else {
        let novoFilme = new FilmesCadastro(titulo, diretor, ano);
        let dadosDoFilme = novoFilme.informacoesFilme();
        lista.innerHTML = lista.innerHTML + dadosDoFilme;
    }

    //Parte para limpar os inputs.
    document.getElementById('diretor').value = '';
    document.getElementById('titulo').value = '';
    document.getElementById('ano').value = '';
}