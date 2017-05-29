jQuery(document).ready(function($){
    var detail = '<svg class="arrow" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 7.25"><polygon points="7 7.247 0 0.246 0.243 0.003 7 6.76 13.757 0.003 14 0.246 7 7.247"></polygon></svg> | ';
    var defaultValue = "français";
    $("#langue").html(detail+defaultValue);
    $("ul li .fr").hide();

    $(".fr").click(function(){
        $("#langue").html(detail+"français");
        $("ul li .fr").hide();
        $("ul li .en, ul li .it, ul li .de").show();
    });
    $(".en").click(function(){
        $("#langue").html(detail+"english");
        $("ul li .en").hide();
        $("ul li .fr, ul li .it, ul li .de").show();
    });
    $(".it").click(function(){
        $("#langue").html(detail+"italiano");
        $("ul li .it").hide();
        $("ul li .fr, ul li .en, ul li .de").show();
    });
    $(".de").click(function(){
        $("#langue").html(detail+"deutsch");
        $("ul li .de").hide();
        $("ul li .fr, ul li .en, ul li .it").show();
    });
});
