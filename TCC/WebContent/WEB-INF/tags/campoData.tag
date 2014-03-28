<%@attribute name="id" required="true" %>

<input id="${id}" name="${id}" type="text" />
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js">
$(document).ready(function() {
		$("#${id}").datepicker({
			dayNames: ['Domingo','Segunda','Ter�a','Quarta','Quinta','Sexta','S�bado','Domingo'],
	        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
	        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S�b','Dom'],
	        monthNames: ['Janeiro','Fevereiro','Mar�o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
			yearRange: '1900:2013',
			changeMonth: true,
	    	changeYear: true,
	    	showButtonPanel:true,
			dateFormat: 'dd/mm/yy'});	
	});
</script>