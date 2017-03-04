# Teste Programador FullStack ***"Redshirt"*** - Cadastro de contatos

## Parte I
O teste consiste em criar um cadastro simples de contatos / clientes, com edição e busca "offline", com navegação em apenas uma tela (entenda como navegação com javascript: display: none, innerHTML='', ajax, etc).

Para simplificar o escopo, as partes ~~riscadas~~ não estão dentro dos requisitos deste teste.

### Requisitos e considerações iniciais:
  - Não utilize o CSS pronto do Bootstrap ou outro boilerplate, crie algo seu, mesmo que mais simples;
  - ~~Criar um estilo para tabelas (thead / tbody / tfoot), formulários e botões, genéricos na medida do possível~~;
  - Para este teste, não utilizar frameworks *MV****** (React, BackboneJS, AngularJS). Parte do teste é justamente validar a assimilação da construção de frameworks como estes. É permitido utilizar bibliotecas utilitarias (jQuery, lodash);
  - ~~Utilizar LESS ou SASS para criar o CSS~~;
  - Nos formulários, faça alguma forma validação / sanitização, mesmo que simples dos dados.

#### Tela 1 - Listagem de clientes
  - Criar uma tabela com a listagem de clientes e um filtro offline pelo nome (buscando nome/sobrenome) exibindo a quantidade de registros retornados, com link para edição (*para o teste, não é necessário se preocupar com paginação dos dados*)
  - Fazer a navegação dos registros da tabela com o teclado, e a tecla enter abre a janela de edição (igual ao botão de editar) (Dica: table tabindex => :focus)

#### Tela 2 - Cadastro / atualização de clientes
  - Criar um formulário de cadastro / edição de clientes
  - Este tela deve ser carregada dentro de uma modal (criada por você ou de terceiros)
  - Pensar em uma boa navegação para o usuário final (máscaras e outros)
  - Criar uma validação básica para poder atualizar os dados

## Dicas:
  - Não é necessário persistir os dados. Você pode guardar os dados com os recursos do navegador (sessionStorage, localStorage, ou mesmo com os dados guardados em uma váriavel)
  - Você pode utilizar bibliotecas como jQuery, lodash, natural, e outras para facilitar o trabalho;
  - Pode guardar também os dados dos registros no elemento TR das tabelas (jQuery().data(), Element.setAttribute(), JSON.parse(), JSON.stringify())
  - Utilize THEAD TBODY TFOOT nas tabelas;
  - Utilize delegação de eventos (click, mouseenter, focus) ao invés de adicionar eventos para cada elemento¹;
  - Crie estilos genéricos! Deixe as exceções como exceções;

--------------------


## Parte II

### Desenvolvimento
  - Você tem 7 dias corridos para realizar o teste a partir data de envio
  - Quaisquer duvidas, envie um email para henrique.zucareli@tibi.com.br

### Considerações finais
  - Não se preocupe com o Internet Explorer. Utilize as inovações do HTML5 e CSS3 a vontade;
  - Não deixe de enviar o teste caso não tenha sido possível realizar todo no prazo. Avaliaremos a compreenssão da tarefa como um todo. Deixe anotações do que pretendia realizar;
  - Durante o teste, vale mais mostrar que tem conhecimentos no que está fazendo e deixar incompleto que deixar o layout bonito (...bonitinho, mas ordinário)

### Anexos

```js
// Exemplo fictício de dados para um cliente. Não é necessário seguir o modelo a risca, é apenas uma representação;
var clients = [
  {
    id: 1,
    name: {
      surname: 'Henrique',
      familyname: 'Santos',
      displayName: 'Henrique Santos', // @dica, gerar
    },
    code: {
      securityCode: '99999999999' // CPF
    },
    //address: {
    //  _id: 'fake_id_12341234',
    //  addressType: 'Rua',
    //  zip: '00000000',
    //  name: 'Rua dos bobos',
    //  number: '0',
    //  complement: '',
    //  neighborhood: 'Vila Nada',
    //  state: 'SP',
    //  city: 'São Paulo'
    //},
    email: 'henrique.zucareli@tibi.com.br',
    phones: [
      {
        kind: 'Residencial',
        rawNumber: '(11)9999-9999',
        areaCode: '11',
        number: '99999999'
      },
      {
        kind: 'Celular',
        rawNumber: '(11)9-8109-0638',
        areaCode: '11',
        number: '981090638'
      }
    ],  
    birth: new Date,
    meta: {
      created: new Date,
      modified: new Date
    }
  }
];

```

```js
// exemplo de função para pegar o parente mais próximo para dado seletor
function closest(elem, selector) {	
    var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
    while (elem) {
        if (matchesSelector.bind(elem)(selector)) {
            return elem;
        } else {
            elem = elem.parentElement;
        }
    }
    return false;
}
```

```js
// Exemplo de delegacação de eventos com jQuery
//table.on('click', '.edit', XXX.common.showClient);
//...
//<tr data-id="2">
//  <td>Nome</td>
//  ...
//  <td><button type="button" class="edit">Editar</button></td>
//</tr>
// ...
showClient: function(e) {
  e.preventDefault();
  var tr = $(this).closest('tr');
  var id = tr.data('id');
  var modal = dialog(['/clients', id].join('/'))
  modal.on('show', function() {
    // instancia validacoes do formulario
    var form = $(this).find('form.cliente');
    form.on('submit', function(e) {
      // serialize ou montado como objeto no JS (se não usar o servidor)
      var formData = $(this).serialize(); 
      $.ajax({
        type: isEdit ? 'put' : 'post',
        url: form.attr('action'),
        data: formData
      });
    });
  });
}
```
