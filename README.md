# rm.modal


	<script type="text/javascript">
    	    var bindForm=[{field:"datafield1",title:"Field 1",size:10,value:"Value field 1"},
    	    			{field:"datafield2",title:"Field 2",size:100,value:"Value field 2"},
    	    			{field:"datafield3",title:"Field 3",size:50,value:"Value field 3"},
    	    			{field:"datafield4",title:"Field 4",size:12,value:"Value field 4"}
    	    		   ]

  	        $(document).ready(function () {
  	  
  	        	$('input').on('click',function(){
                  m=$("#content").Modal({dataForm:bindForm,
                                         title:"Edit your data here",
                                         ajax:{url:'/YourURL',
                                               method:'POST',
                                               extraData:[{field:'_token',value:'some extra data if you need'}],
                                               callbackSuccess:function(data, textStatus, request){
                                                	alert("its OK!!"); 	
                                                  	m.close();
                                                  
                                               }
                                              }
                                         });
                  m.open();
  	        	})

  	        })
    	</script>