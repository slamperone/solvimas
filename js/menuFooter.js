function windowSizeCheck() {

    $('#c2,#c3').off('click'); 

    var degrees = 0;

    if($(window).width() < '768') {


        $(".cortina").toggle('fast',"swing",function(){
            $(this).attr("data-status","no-vis");

        })



        $('#c2,#c3').on('click', function(e) {

            

            if(degrees == 0){
                degrees += -90;
            }else{
                degrees -= -90;
            }


            $(this).find("#arrMob > img").css({
                'transform': 'rotate(' + degrees + 'deg)',
                '-ms-transform': 'rotate(' + degrees + 'deg)',
                '-moz-transform': 'rotate(' + degrees + 'deg)',
                '-webkit-transform': 'rotate(' + degrees + 'deg)',
                '-o-transform': 'rotate(' + degrees + 'deg)'
              }); 


            $(this).find(".cortina").stop().fadeTo('fast', 0, function() {
                
                var status = $(this).attr("data-status");

             if (status == 'vis') {
                $(this).toggle('fast',"swing",function(){
                    $(this).attr("data-status","no-vis");

                })
                }else{
                    $(this).toggle('fast',"swing",function(){
                        $(this).attr("data-status","vis");
                        $(this).attr("style","opacity: 1; display: block;");

                    })

                }

                console.log(status);
            });
        });
    }
}

jQuery(document).ready(function($) {
windowSizeCheck();
$(window).resize(windowSizeCheck);
});
