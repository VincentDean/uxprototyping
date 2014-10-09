/*Sticky Navigation*/
(function stickynav($){
    
        //The sticky nav element
    var $stickynav = $('[data-target="stickynav"]'),

        //the point at which the nav will "stick"
        stickPosition;

    //Function to check wether scroll position 
    function checkIfStuck(){

        //If scroll has passed nav position add the stick class to fix its position
        if($(window).scrollTop() > stickPosition) {
            $stickynav.addClass("stick");
        
        //If scroll is above nav position remove stick class
        }else{
            $stickynav.removeClass("stick");
        }

    }

    //If there is a sticky nav on the page, run sticky code
    if($stickynav.length > 0){

        //Get "sticky" point, by finding the navigation's distance from the top of the page
        stickPosition = $stickynav.offset().top;

        //Check the initial scroll position against the target, in case user starts scrolled down the page
        checkIfStuck();

        //When the page is scrolled, compare scroll against stick position
        $(document).scroll(function(){
            checkIfStuck();
        });

    }

}(jQuery));