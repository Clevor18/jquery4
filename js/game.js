// JavaScript Document

$(document).ready(function(){
	"use strict";
	//hide show logo
	  $('#hide').click(function() {
		  $('#logo').toggle( 2000, 'easeInOutBack', function(){
			  if($('#logo').is(':visible')) {
				  $('#hide').text('Hide Logo');
				  $('#animate').show();
			  } else {
				  $('#hide').text("Show Logo");
				  $('#animate').hide();
			  }
		  });
	  });
	  //animate log
	  $('#unanimate').hide();
	  $('#animate').click(function(){
		 $('#logo').animate({
			 width: '50%',
			 height: '50%',
		}, 1500, function(){
		 	$('#animate').hide();
			$('#unanimate').show();

		 });
	  });
	  //unanimate logo
	  $('#unanimate').click(function() {
	  	$('#logo').animate({
			width: '192px',
			height: '192px'

		}, 1500, function() {
			$('#unanimate').hide();
			$('#animate').show();
		});
	  });
	  //mouse tracking
	  $(document).mousemove(function( event ) {
		  var msg = event.pageX;
		 $('#x').text(msg);
	  });
	  $(document).mousemove(function( event ) {
		  var msg = event.pageY;
		 $('#y').text(msg);
	  });
	  //window rezise
	$(window).resize(function() {
		var wide = $(window).width();
		var tall = $(window).height();
		$('#width').text(wide +"px");
		$('#height').text(tall + "px");
	});
	// mouse enter logo
	$('#logo').mouseenter(function() {
		$('#touch').text("Your touching my Logo");
		$('#touch').addClass('special');

	});
	//mouse leave
	$('#logo').mouseleave(function() {
		$('#touch').text("Why did you stop!!");
		$('#touch').removeClass('special');
	});
	$(document).keypress(function(event) {
		var x = event.keyCode;
		var y = String.fromCharCode(x);
		console.log(y, x);
			if( x=== 13 ) {
				$('#keypress').text(" You pressed the enter key");
			}else if (x === 32) {
				$('#keypress').text(" You pressed the space bar");
			} else if (y !== null)  {
			$('#keypress').text(" You pressed the " + y + " key");
			}else {
				$('#keypress').text("Aww. You stumped me");
			}
	});
	$('#hideM').click(function() {
		$('#mouse').fadeToggle(1000, 'easeInOutQuart', function() {
			console.log("hi");
			if($('#mouse').is(':visible')) {
				$('#hideM').text('Hide mouse tracking');
			}else {
				$('#hideM').text('Show mouse tracking');
			}
		});
	});
	$('#hideW').click(function() {
		$('#window').toggle(2000 , 'easeInOutCubic',function() {
			if($('#window').is(':visible')) {
				$('#hideW').text('Hide Window Size');
			}else {
				$('#hideW').text('Show Window Size');
			}
		});
	});
	$('#hideK').click(function() {
		$('#key').toggle(3000 ,'easeInOutBounce' ,function() {
			if($('#key').is(':visible')) {
				$('#hideK').text('Hide key press');
			}else {
				$('#hideK').text('Show key press');
			}
		});
	});
	$('#butto').hide();
	$('#hideB').click(function(){
		 $('#butt').toggle(1000,function() {
			 $('#butto').fadeIn();
		 });
	 });
	 $('#butto').click(function() {
		$('#butt').fadeIn(1000, function(){
			$('#butto').fadeOut(200);
		});
	 });
	$('#win').click(function() {
		alert("Heres your alert");
		$('#win').fadeOut(500);
	});
	$('#backWhite').hide();
$('#ranColor').dblclick( function(){
	var rand = Math.floor(Math.random() * (18 - 1 + 1)) + 1;
		switch(rand){
			case 1:  $('body').css({'background-color':'red', 'color' : 'blue'});
								$('button').css('background-color','black');
			break;
			case 2 : $('body').css({'background-color':'blue', 'color' : 'red'});
								$('button').css('background-color','pink');
			break;
			case 3 : $('body').css({'background-color':'black', 'color' : 'purple'});
								$('button').css('background-color','red');
			break;
			case 4 : $('body').css({'background-color':'purple', 'color' : 'yellow'});
								$('button').css('background-color','brown');
			break;
			case 5 : $('body').css({'background-color':'green', 'color' : 'orange'});
								$('button').css('background-color','blue');
			break;
			case 6 : $('body').css({'background-color':'orange', 'color' : 'brown'});
								$('button').css('background-color','green');
			break;
			case 7 : $('body').css({'background-color':'yellow', 'color' : 'black'});
								$('button').css('background-color','white');
			break;
			case 8 : $('body').css({'background-color':'brown', 'color' : 'white'});
								$('button').css('background-color','blue');
			break;
			case 9 : $('body').css({'background-color':'blue', 'color' : 'white'});
								$('button').css('background-color','red');
			break;
			case 10 : $('body').css({'background-color':'white', 'color' : 'purple'});
								$('button').css('background-color','yellow');
			break;
			case 11 : $('body').css({'background-color':'yellow', 'color' : 'purple'});
								$('button').css('background-color','white');
			break;
			case 12 : $('body').css({'background-color':'#37FF00', 'color' : '#6A00FF'});
								$('button').css('background-color','#FF6E00');
			break;
			case 13 : $('body').css({'background-color':'#7E5353', 'color' : '#128900'});
								$('button').css('background-color','#D612EC');
			break;
			case 14 : $('body').css({'background-color':'#115B47', 'color' : '#303025'});
								$('button').css('background-color','#6A6A6B');
			break;
			case 15 : $('body').css({'background-color':'#6A6A6B', 'color' : '#0024EE'});
								$('button').css('background-color','#00EE24');
			break;
			case 16 : $('body').css({'background-color':'#FA6F6F', 'color' : '#422727'});
								$('button').css('background-color','#D0FA6F');
			break;
			case 17 : $('body').css({'background-color':'#9A760C', 'color' : '#4560F7'});
								$('button').css('background-color','#24A910');
			break;
			case 18 : $('body').css({'background-color':'#0A3175', 'color' : '#FFE30A'});
								$('button').css('background-color','#C410CE');
			break;
		}
		$('#backWhite').fadeIn(5000);
});
	$('#backWhite').click(function(){
		$('body').css({'background-color':'white', 'color' : 'black'});
		$('button').css('background-color','white');
		$('#backWhite').fadeOut(200);
});



$('#blink').click(function(){
	function pulse() {
    $('#title').fadeIn(300);
    $('#title').fadeOut(500);
	}
	setInterval(pulse);
});
$('#butt').mouseenter(function() {
	$('#touch').text('Start pushing my buttons!');
	$('#touch').addClass('special');
});
$('#butt').mouseleave(function() {
	$('#touch').text('Or dont thats fine too!');
	$('#touch').removeClass('special');
});
$('#key').mouseenter(function() {
	$('#touch').text('I can guess your key presses!');
	$('#touch').addClass('special');//css('font-size','2em');
});
$('#key').mouseleave(function() {
	$('#touch').text('Thats write just run away!');
	$('#touch').removeClass('special');
});
$('#window').mouseenter(function() {
	$('#touch').text('Resize your window and I will tell you the Size!');
	$('#touch').addClass('special');
});
$('#window').mouseleave(function() {
	$('#touch').text('Thank you for leaving me alone!');
	$('#touch').removeClass('special');
});
$('#mouse').mouseenter(function() {
	$('#touch').text('Im tracking your mouse! Muahahahaha!');
	$('#touch').addClass('special');
});
$('#mouse').mouseleave(function() {
	$('#touch').text('You can run but you cant hide im tracking you!');
	$('#touch').removeClass('special');
});

// multipy
$('#math').hide();
$('#multiply').click(function() {
$('#math').show();
	var num = (prompt("pick any number"));
	if (isNaN(num)) {
		alert(num + " is not a number please try again");
		/*}else if (num === "") {
		alert("you did not enter a number");*/

}else{
	var multiply = num * 2;
	$('#timesTwo').text(' ' + multiply);
}
});
$('#divide').click(function() {
$('#math').show();
	var divi = (prompt("pick any number"));
	var divide = divi / 2;
	if (isNaN(divi)) {
		alert(divi + " is not a number please try again");
	}else if (divi === "") {
		alert("you did not enter a number");
	}else if (divi % 2 === 0){

	$('#bytwo').text(divi + " divided by two equals " + divide);

	}else{

	$('#bytwo').text( divi + " is not divisible by 2");
}
});
$('#square').click(function() {
	$('#math').show();
	var numb = (prompt("enter a number"));
	var square = Math.sqrt(numb);
	if (isNaN(numb)) {
	alert( numb + " is not a number please try again");
	}else if (numb === "") {
		alert("you did not enter a number");
	} else {
		$('#squareRoot').text( "the square root of " + numb + " is " + square);
	}

});
$('#srt').hide();
$('#sort').click(function() {
	var arr = [];
	var i = 0;
	do {
		arr.push(prompt("enter a name"));
		console.log(arr);
		i++;

	}
	while (i<4);
	var sort = arr.sort()
	$('#srt').show();
	$('#sorted').text(sort);

	});

	$("button").hover(function(){
         $(this).addClass("styleize");
         }, function(){
         $(this).removeClass('styleize');
     });

$('#timestamp').hide();
$('#time').click(function(event) {
	$('#timestamp').show();
		$('#stamp').text(event.timeStamp)
	$('#stamp').css('color' , 'red')

});
$('#time').click(function(){
	var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
console.log(time)
})

$('#sub').click(function(){
	var name = document.getElementByName("fname");
	alert(name);
});
$('#video').hide()
$('#tvideo').click(function(){
	$('#video').toggle()
})
$('#ctime').hide()
$('#current').click(function(){
$('#ctime').show()
	var dt = new Date();

var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
console.log(time);
	$('#printTime').text("It is " +time)
})
});
