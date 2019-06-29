$(document).ready(function(){
    $("box").on("click", function(){
        var classNames $(this).attr("class").split(" ");
        $("." + className[1]).css("background-color", "red");
    });
});
