function moreAuctions(){   
	$.ajax({
		url: 'js/demo.json',
		timeout: 1000,		
		error: function(){			
			$('#more-auctions').html('Error');
		},
		success: function(result){		
            $("#more-auctions").append('<script type="text/javascript" src="js/hover-effect.js"></script>');
			$.each(result.thumbnailsList,function(index,d){
				if(d.auctionUrl=="/"){d.auctionUrl="#"}
                $('#more-auctions').append('<div class="card"><a href="' + d.auctionUrl + '"><div class="images"><img src="' + d.celebrityPicture + '"/><img src="' + d.productPicture + '"/><div class="icone"></div></div></a><div class="info"><span class="celeb-name">' + d.celebrityName + '</span><p class="celeb-job">' + d.celebrityActivity + '</p><p class="product-name">' + d.productName + '</p></div></div>');
		    });
            removeButton();
	    }	 
    })
}

function removeButton() {
  $('#more-auctions button').remove();
}

