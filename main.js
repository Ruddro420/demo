$(document).ready(function(){
    $('.counter').counterUp(
        {
            delay: 2,
            time: 1000
        }
    );

    var typed = new Typed('#typed',{
        strings:["SERVICES","BUSNESS","CARRIER"],
         backSpeed: 100,
         typeSpeed: 100,
         loop:true,
         cursorChar: '|',
         autoInsertCss: true
       
       });



       AOS.init({
        delay: 10, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
      });
    
   
    

  });


  