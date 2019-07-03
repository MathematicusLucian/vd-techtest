$( document ).ready(function() {

	$("#btn-product_color").click(function(e){
 
		e.preventDefault();

	    var colour = $("#select_product-colour").val();

	    if(colour != "0"){

		    $("#btn-product_color").css("background-color",colour);

			$("#select_product-colour option[value='0']").remove();

		}

	    return false;

	});

	$("#select_product-colour").on("change", function(e){

		var colour = $("#select_product-colour").val();

		if(colour != "0"){

			$("#product-add-dialog").html("");

		}

	});

	$("#btn-swap-elements").click(function(){
		
		var firstChild = $(".product-page > .row").children().eq(0);

		$(".product-page > .row").append(firstChild);

		return false;

	});

	$(".selectric-button").click(function(){

		$("#select_product-colour").trigger("click");

		return false;

	});


});