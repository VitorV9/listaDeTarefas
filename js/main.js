$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const nomeDaTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<li>${nomeDaTarefa}</li>`);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');
        
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });

});