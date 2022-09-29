var puntos=0;
$(function(){
	$(".items").hover(function(){
		var tis = $(this);
		tis.find(".puntero").click(function(){			
			if(tis.hasClass("active")){
				tis.removeClass("active");
				puntos++;
				$("#puntos").html(puntos);
			} else{
				console.log(":(");
			}
		})
	})
})
var iterval = setInterval(function(){
	zombiealeatorio();
},1000);

zombiealeatorio = function(){
	var num = parseInt(Math.random() * 12);
	$(".items").removeClass("active");
	$(".items:nth-child("+num+")").addClass("active");
}
$( function() {
    $( "#contenedor1" ).draggable();
  } );
  
$( function() {
$( "#resizable" ).resizable();
} );

$( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
    $( "#tabs" ).tabs();
  } );


 
  $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );


  $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );