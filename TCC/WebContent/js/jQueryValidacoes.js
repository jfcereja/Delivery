$(document).ready( function() {
	    $("#form").validate({ 	
	    	onfocusout: function(element) {
	         $(element).valid();
	     },
	        rules:{
	            numero:{ required: true,number:true },
	            nome:{required: true},
	            cpf:{required: true,cpf:true,duplicateCPF:true},
	            dataNascimento:{required:true,dateBR:true},
	            email:{required:true,email:true,duplicateEmail:true},
	            usuario:{required:true,duplicateUsuario:true},
	            senha:{required:true},
	            descricao:{required:true},
	            idGrupoProduto:{required:true},
	            idUnidadeDeMedida:{required:true}
	        },
	        messages:{
	            numero:{required: "Campo Requerido",number:"Digite um valor v�lido"},
	            nome:{required: "Campo Requerido"},
	            cpf:{required: "Campo Requerido",cpf:"CPF Inv�lido",duplicateCPF:"CPF j� cadastrado"},
				dataNascimento:{required:"Campo Requerido",dateBR:"Digite uma data v�lida"},
				email:{required:"Campo Requerido",email:"Digite um email v�lido",duplicateEmail:"Email j� cadastrado"},
				usuario:{required:"Campo Requerido",duplicateUsuario:"Usu�rio j� cadastrado"},
				senha:{required:"Campo Requerido"},
				descricao:{required:"Campo Requerido"},
	            idGrupoProduto:{required:"Campo Requerido"},
	            idUnidadeDeMedida:{required:"Campo Requerido"}
	            
	        }
	    });
	});
$(document).ready( function() {
    $("#formAtualiza").validate({ 	
    	onfocusout: function(element) {
         $(element).valid();
     },
        rules:{
            numero:{ required: true,number:true },
            nome:{required: true},
            dataNascimento:{required:true,dateBR:true},
            senha:{required:true},
            descricao:{required:true},
            idGrupoProduto:{required:true},
            idUnidadeDeMedida:{required:true}
        },
        messages:{
            numero:{required: "Campo Requerido",number:"Digite um valor v�lido"},
            nome:{required: "Campo Requerido"},
			dataNascimento:{required:"Campo Requerido",dateBR:"Digite uma data v�lida"},
			senha:{required:"Campo Requerido"},
			descricao:{required:"Campo Requerido"},
            idGrupoProduto:{required:"Campo Requerido"},
            idUnidadeDeMedida:{required:"Campo Requerido"}
            
        }
    });
});