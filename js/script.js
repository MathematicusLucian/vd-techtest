$( document ).ready(function() {

	$("#btn-product_color").click(function(e){
 
		e.preventDefault();

	    var colour = $("#select_product-colour").val(); 

		$("#btn-product_color").css("background-color",colour);

	    return false;

	});

});