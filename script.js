$(document).ready(function(){

    const baseImagens = {
        
        Todas: ['Todas.jpg', 'Todas1.jpg', 'Todas2.jpg', 'Todas3.jpg'],
        Animais: ['Animal.jpg', 'Animal1.jpg', 'Animal2.jpg', 'Animal3.jpg'],
        Cidade: ['Cidade.jpg', 'Cidade1.jpg', 'Cidade2.jpg', 'Cidade3.jpg'],
        Natureza: ['Natureza.jpg', 'Natureza1.jpg', 'Natureza2.jpg', 'Natureza3.jpg'],


    }

       function carregarImagens(categoria){
        const imagens = baseImagens[categoria]; 
        const boxImagens = $('body').find('.box-imagens');

        imagens.forEach(img => {
            console.log(img); 
            boxImagens.append('<div> <img src ="imagens/'+img+'" /> </div>')
            

        });

         
       }

    $('.botao-categoria').on('click', function(){
        
       alert($(this).data('categoria'));

       $('body').find('.botao-categoria').removeClass('active'); 

       $(this).addClass('active'); 

       const categoria = $(this).data('categoria'); 
       carregarImagens(categoria); 
       });



});