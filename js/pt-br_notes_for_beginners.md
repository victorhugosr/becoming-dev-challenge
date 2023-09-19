## Anotações para iniciantes
> Primeira coisa que eu quero fazer é criar uma programa JS que pegue a data atual para que eu possa exibir na tela!

### Legal! Como exibir a data atual na tela?

Para isso precisaremos criar um Objeto ```Date``` e armazená-lo em uma variável:

__Para que ```Date``` seja um objeto precisamos chamá-lo com o operador 'new', caso contrário ele irá retornar como string__

```let currentDate = new Date();```

### Agora que criei a variável como crio a função para mostrar a data atual na frase??

```
function dataAtualizadaDesafio(){ 
    const dataFormatada = currentDate.toLocaleDateString();
    document.getElementById('idDoSeuElementoHTML').textContent = `${dataFormatada} - Day ${contadorDeDias} of the challenge;`
 }

```
>>```document.getElementById``` // Método JS usado para pegar uma referência do seu documento HTML
>>```toLocaleDateString();``` //Método JS usado para converter o objeto data para o formato de data localizada no navegador do usuário.
>>>```textContent``` é uma propriedade de elementos HTML que permite acessar e modificar o conteúdo de texto dentro desse elemento

[Clique aqui para ver mais sobre o Date]("https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date")