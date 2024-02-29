$(document).ready(function(){

    const baseImagens = {
        
        todas: ['animal.jpg', 'cidade.jpg', 'imagem.jpg'],
        animais: ['animal.jpg', 'animal1.jpg', 'animal2.jpg', 'animal3.jpg'],
        cidade: ['cidade.jpg', 'cidade1.jpg', 'cidade2.jpg', 'cidade3.jpg'],
        natureza: ['imagem.jpg', 'imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg'],


    }

       function carregarImagens(categoria){
        const imagens = baseImagens[categoria]; 
        const boxImagens = $('body').find('.box-imagens');
        boxImagens.empty(); 

        imagens.forEach(img => {
            console.log(img); 
            boxImagens.append('<div class="imagem-item"> <img src="img/'+img+'" alt="'+img+'" /></div>')
            

        });

         
       }

    $('.botao-categoria').on('click', function(){
        
      

       $('body').find('.botao-categoria').removeClass('active'); 

       $(this).addClass('active'); 

       const categoria = $(this).data('categoria'); 
       carregarImagens(categoria); 
       });



    function sortImagens(sort){ 

        const imagens = $('.box-imagens .imagem-item');
        imagens.sort(function (a, b){
           const imagemA = $(a).find('img').attr('alt');
           const imagemB = $(b).find('img').attr('alt');           
           //console.log(imagemA);
           if(sort == 'asc'){
            return imagemA.localeCompare(imagemB)
           }
           else{
            return imagemB.localeCompare(imagemA); 
           }
           
        });

        $('body').find('.box-imagens').append(imagens);  


    }
    $('body').on('click', '.botao-ordenar', function () {
       const sort = $(this).data('sort');
       sortImagens(sort); 
    });


});