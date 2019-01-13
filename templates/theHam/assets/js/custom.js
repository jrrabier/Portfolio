
$(document).ready(function() {
    $("#close").hide();
    $("#search_input").hide();

    $("#search").click(function(){
        $("#search_input").slideToggle("slow");
        $("#close").show("slow");
        $("#search").hide();
    });

    $("#close").click(function(){
        $("#search_input").slideToggle("slow");
        $("#close").hide();
        $("#search").show("slow");
    });
});
