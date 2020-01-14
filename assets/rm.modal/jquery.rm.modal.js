(function($){
	$.fn.Modal=function(options){
		 me=this;
		 var settings = $.extend({
		 			dataForm:[],
		 			title:"Edit data",
		 			ajax:{url:'https://github.com/RogerioMorais',
		 				  method:'POST',
		 				  extraData:[],
		 				  callbackBeforeSend:null,
		 				  callbackSuccess:null,
		 				  callbackError:null,
		 				  callbackComplete:null}
		 		},options);


			let DOMMODAL='';
			DOMMODAL+='<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id="modalExemplo">';
			DOMMODAL+='<div class=\"modal-dialog\" role=\"document\">';
		    DOMMODAL+='<div class=\"modal-content\">';
		    DOMMODAL+='<div class=\"modal-header\">';
		    DOMMODAL+='<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">';
		    DOMMODAL+='<span aria-hidden="true">&times;</span>';
		    DOMMODAL+='</button>';
		    DOMMODAL+='<h5 class=\"modal-title\">'+settings.title+'</h5>';
		    DOMMODAL+='</div>';
		    DOMMODAL+='<div class=\"modal-body\">';

		    if(settings.dataForm.length!=0){
		    	DOMMODAL+='<form>'
		    		$(settings.dataForm).each(function(idx,item){
		    			  DOMMODAL+='<div class=\"form-group\">';
		    			  DOMMODAL+='<label for=\"'+item.field+'\">'+item.title+'</label>';
		    			  DOMMODAL+='<input type=\"text\" class=\"form-control\" maxlength=\"'+item.size+'\" id=\"'+item.field+'\" name=\"'+item.field+'\" value=\"'+item.value+'\" placeholder=\" entre com o '+item.title+'\">';
		    			  DOMMODAL+='</div>';
		    		})

		    		if(settings.ajax.extraData.length!=0){
		    			$(settings.ajax.extraData).each(function(idx,item){
		    				  DOMMODAL+='<input type=\"hidden\" name=\"'+item.field+'\" value=\"'+item.value+'\">';
		    			})	
		    		}

				DOMMODAL+='</form>'
		    };

		    
		    DOMMODAL+='</div>';
		    DOMMODAL+='<div class=\"modal-footer\">';
		    DOMMODAL+='<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>';
		    DOMMODAL+='<button type=\"button\" class=\"btn btn-primary\">Salvar mudanças</button>';
		    DOMMODAL+='</div>';
		    DOMMODAL+='</div>';
		  	DOMMODAL+='</div>';
			DOMMODAL+='</div>';
			this.append(DOMMODAL);

			$('.btn-secondary').on('click',function(){me.close();});
            $('.close').on('click',function(){me.close();});
            $('.btn-primary').on('click',function(){me.sendData();});

            this.sendData=function(){
				$.ajax({
				    type:settings.ajax.method,
				    url:settings.ajax.url,
				    data:$('form').serialize(),
		            beforeSend:function(){
				    	if(settings.ajax.callbackBeforeSend){
				               settings.ajax.callbackBeforeSend();
				        }
				    },
				    success: function(data, textStatus, request) {
				    	if(settings.ajax.callbackSuccess){
				            settings.ajax.callbackSuccess(data, textStatus, request);
				        }
				    },
				    error:function(data){
				    	if(settings.ajax.callbackError){
				            settings.ajax.callbackError(data);
				        }
				    },
				    complete: function(xhr, textStatus){
				    	if(settings.ajax.callbackComplete){
				            settings.ajax.callbackComplete(xhr, textStatus);
				        }
				    }
				});
            }

			this.close=function(){
				$("#modalExemplo").toggle(false);
				$("#modalExemplo").remove();
			}
			this.open=function(){
				$("#modalExemplo").toggle(true);
			};
		return this;
  	}
}(jQuery));