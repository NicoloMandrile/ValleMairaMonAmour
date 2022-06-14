$(window).scroll(function() {
	manageScroll();
});

function manageScroll()
{
	 if ($(document).scrollTop() > 150) {
		
        $('.navbar').addClass('navbar-shrink');

    }
    else {
       $('.navbar').removeClass('navbar-shrink');
	   scroll1=false;
	   scroll2=false;
    }
	
	if (!scroll1 && $(document).scrollTop() > 1350 && $(document).scrollTop() <2500) 
	{
		//In base alla posizione del cursore faccio ripartire l'animazione delle progress bar
		animateProgressBar("progress1");
		animateProgressBar("progress2");
		animateProgressBar("progress3");
		scroll1=true;
		
		$('#myCarousel').carousel({
        interval: 3000
		});
  

	}
	
	
    if (!scroll2 && $(document).scrollTop() > 2000 ) 
	{
		//In base alla posizione del cursore faccio ripartire l'animazione delle progress bar
		animateProgressBar("progress4");
		animateProgressBar("progress5");
		animateProgressBar("progress6");
		scroll2=true;
		$('#myCarousel2').carousel({
        interval: 3000
		});

	}
		
}

//CAROUSEL 
//Stop carousel at last slide. Start cycling again if not last.
  $('#myCarousel').on('slid.bs.carousel', function (e) {
        if ($('#myCarousel').find('.carousel-inner .item:last').hasClass('active')) {
            $('#myCarousel').carousel('pause');
        }
        if ($('#myCarousel').find('.carousel-inner .item:not(:last)').hasClass('active')) {
			
            $('#myCarousel').carousel('cycle');
        }
    });
	
$('#myCarousel2').on('slid.bs.carousel', function (e) {
	if ($('#myCarousel2').find('.carousel-inner .item:last').hasClass('active')) {
		$('#myCarousel2').carousel('pause');
	}
	if ($('#myCarousel2').find('.carousel-inner .item:not(:last)').hasClass('active')) {
		$('#myCarousel2').carousel('cycle');
	}
});



//GESTIONE VIDEO IN CAROUSEL
 $('#video1').on('ended',function(){
	$('#video1').load();
	$('#myCarousel').carousel('cycle');  
  });
	
$('#video2').on('ended',function(){
	$('#video2').load();
	$('#myCarousel2').carousel('cycle');
});

//END CAROUSEL

//PROGRESS-BAR
var scroll1=false;
var scroll2=false;
function animateProgressBar(pb){

			var width = 1
			var to=$("#"+pb).find(".progress-bar").attr("aria-valuenow");
			var id = setInterval(frame, 15);
			var $that=$("#"+pb);
			function frame() {
			  if (width >= to) {
				clearInterval(id);
				i = 0;
			  } else {
				width++;
				$that.find(".progress-bar")[0].style.width =width+"%";
			  }
			}
		}
//END PROGRESS-BAR

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 100) {
  		$('#back-top').fadeIn();
  	} else {
  		$('#back-top').fadeOut();
  	}
  });

  // scroll body to 0px on click
  $('#back-top a').on("click", function(){
  	$('body,html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


//MODAL PER ZOOM IMMAGINI
function openInModal(elem){
		// Get the modal
		$("#myModal").modal('show');
		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = $(elem).find("img")
		var captionText = $(elem).find("h2");
		$('#myModal').modal('show');
		$("#modalImage").css('display:block');
		$("#modalImage").attr("src",img[0].src);
	//	$("#caption").html(captionText[0].textContent);
		$(".navbar").hide();
		$("#back-top").hide();
}
	
function dismissModal()
{
	$('#myModal').modal('hide');
	$(".navbar").show();
	$("#back-top").show();
}
//FINE MODAL PER ZOOM IMMAGINI

//MAP GOOGLE
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 44.517395780638324, lng: 7.1324468403472014 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}


