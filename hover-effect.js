jQuery(document).ready(function($){
    
    //if auctions previews are hovered
	$('.images').on({
        mouseenter: function(){
            $(this).css({background:'#c7c7c7'})
            $('img',this).css({opacity: '0.5',filter:'alpha(opacity=50)',"z-index":'1'})
            $('.icone',this).html('<img class="bg-icone" src="images/cercle-noir.png"/><img class="logo-icone" src="images/marteau.png"/><div></div>')
            $('.icone img.bg-icone',this).css({display:'block', 'margin':'auto', position:'absolute', "z-index":'2', opacity:'1','max-width':'79px','max-height':'79px',top: '50%', left: '50%',transform: 'translate(-50%, -50%)'})
            $('.icone img.logo-icone',this).css({display:'block', 'margin':'auto', position:'absolute', "z-index":'3', opacity:'1','max-width':'46px','max-height':'42px',top: '50%', left: '50%',transform: 'translate(-50%, -50%)'})

            $('.icone').on({
                mouseenter: function(){
                    $('img.logo-icone',this).hide()
                    $('div',this).html('<p>Voir cette enchère</p>')
                    $('div p',this).css({'margin':'auto', position:'absolute', "z-index":'4', 'text-align':'center', 'text-transform':'uppercase','font-family':'georgia','font-size':'12px',color:'white','max-width':'60px','max-height':'60px',top: '50%', left: '50%',transform: 'translate(-50%,-50%)'})
                },
                mouseleave: function(){
                    $('div p',this).remove()
                    $('img.logo-icone',this).show()
                }
            });
        },
        mouseleave: function(){
            $(this).css({background:'#F2F3F4'})
            $('img',this).css({opacity: '1',filter:'alpha(opacity=100)'})
            $('.icone img',this).remove()
            $('.icone div',this).remove()
        }
    });

    //if principal auction is hovered 
    $('.principal').on({
        mouseenter: function(){
            $(this).css({background:'#c7c7c7'})
            $('img',this).css({opacity: '0.5',filter:'alpha(opacity=50)',"z-index":'1'})
            $('.icone',this).append('<img class="bg-icone" src="images/cercle-noir.png"/><img class="logo-icone" src="images/marteau.png"/><div></div>')
            $('.icone img.bg-icone',this).css({position:'absolute', "z-index":'2', opacity:'1','max-width':'79px','max-height':'79px','margin-top':'25%',top: '50%', left: '50%',transform: 'translate(-50%, -50%)'})
            $('.icone img.logo-icone',this).css({position:'absolute', "z-index":'3', opacity:'1','max-width':'46px','max-height':'42px', 'margin-top':'25%', top: '50%', left: '50%',transform: 'translate(-50%, -50%)'})
            
            $('.icone').on({
                mouseenter: function(){
                    $('img.logo-icone',this).hide()
                    $('div',this).html('<p>Voir cette enchère</p>')
                    $('div p',this).css({'margin':'auto', position:'absolute', "z-index":'4', 'text-align':'center', 'text-transform':'uppercase','font-family':'georgia','font-size':'12px',color:'white','margin-top':'25%','max-width':'60px','max-height':'60px',top: '50%', left: '50%',transform: 'translate(-50%,-50%)'})
                },
                mouseleave: function(){
                    $('div p',this).remove()
                    $('img.logo-icone',this).show()
                }
            }); 
        },
        mouseleave: function(){
            $(this).css({background:'none'})
            $('img',this).css({opacity: '1',filter:'alpha(opacity=100)'})
            $('.icone img',this).remove()
            $('.icone div',this).remove()
        }
    });
});


 
