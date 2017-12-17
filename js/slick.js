$( window ).on( "load", function() { 

// $(document).ready(function(){
    $('.sl').slick({
    	// autoplay:true,
    	// autoplaySpeed:1000,
    	// speed:1000,
    	// centerMode:true,
    	// centerPadding:'80px',
    	// infinite: true,
    	dots:true,
    	// fade:true,
    	// slidesToShow:3, 
     //    slidesToScroll: 3
        // centerMode: true
        // variableWidth: true 

        // centerMode: true,
        // focusOnSelect: true,
          lazyLoad: 'ondemand',
          slidesToShow: 1,
    	  // slidesToScroll: 1,
    	  autoplay: true,
    	  autoplaySpeed: 1000,
    	  fade:true,
    	  responsive: [
        {
          breakpoint: 992,
          settings: {
          	 lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
           }

        }, 
       
        {
          breakpoint: 776,
          settings: {
          	  lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            fade:true
                 }
        }] 
    });

});