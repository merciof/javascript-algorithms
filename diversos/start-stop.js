function startStop() {
  //variáveis acessíveis apenas dentro da função construtora
  let tempoInicial, tempoFinal, executando, duracao = 0;

  //método responsável por iniciar a contagem do tempo
  this.iniciar = function () {
    //verifica se a contagem está ativa
    if(executando){
      throw new Error('Já está executando.');
    }
    executando = true;
    tempoInicial = new Date();
  }

  //este método para a execução e contabiliza a duração da mesma
  this.parar = function() {
    if(!executando){
      throw new Error("Não foi iniciado.");
    }
    executando = false;
    tempoFinal = new Date();
    const segundos = (tempoFinal.getTime() - tempoInicial.getTime());
    duracao += segundos;
  }

  //reseta os parâmetros internos
  this.resetar = function() {
    tempoInicial = null;
    tempoFinal = null;
    executando = false;
    ducarao = 0;
  }

  Object.defineProperty(this,'duracao',{
    get: function() {
      return duracao;
    }
  });
}
