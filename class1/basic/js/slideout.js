/*Mobile Navigation Slideout*/
(function slideout($){
    
        //The slide out element
    var $slideout = $('[data-target="slideout"]'),

        //Elements that trigger the slideout
        $slideToggles = $('[data-toggle="slideout"]'),

        //The current slide state, starts out false
        out = false;

    //If there is a slideout element on the page, run slideout code
    if($slideout.length > 0){

        //When slide trigger is clicked toggle the state of the slideout tray
        $slideToggles.on('click', function(){
            //Toggle the state
            out = !out;

            //Animate the slide, choose direction based on state
            $slideout.animate({ 'left' : ( out ? '0' : '-100%') }, 'slow' );
        });

    }

}(jQuery));