function windowSizeCheck() {

    $('#c2,#c3').off('click'); 

    if($(window).width() < '768') {


    var degreesStr = $("#arrMob > img").attr("data-degrees");

    var degrees = 0;

    console.log("grados init"+degreesStr);

        $(".cortina").toggle('fast',"swing",function(){
            $(this).attr("data-status","no-vis");

        })


        $('#c2,#c3').on('click', function(e) {

            degreesStr = $(this).find("#arrMob > img").attr("data-degrees");

            console.log("grados click"+degreesStr);

            if(degreesStr == "0" || degreesStr == undefined || degreesStr == null || degreesStr == 0){
                degrees = -90;
                console.log("true");
            }else{
                degrees = 0;
                console.log("false");
            }

            console.log("grados click num"+degrees);


            $(this).find("#arrMob > img").css({
                'transform': 'rotate(' + degrees + 'deg)',
                '-ms-transform': 'rotate(' + degrees + 'deg)',
                '-moz-transform': 'rotate(' + degrees + 'deg)',
                '-webkit-transform': 'rotate(' + degrees + 'deg)',
                '-o-transform': 'rotate(' + degrees + 'deg)'
              });
              
              
            $(this).find("#arrMob > img").attr("data-degrees",degrees);

            degreesStr = $(this).find("#arrMob > img").attr("data-degrees");

            console.log("grados after click"+degreesStr);


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
