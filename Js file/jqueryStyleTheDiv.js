$("#btn1").click(function(){
    var bgcol = $("#bgcol").val();
    var ftcol = $("#ftcol").val();
    $("div").css("background-color",bgcol);
    $("div").css("color",ftcol);
});

$("#btn2").click(function(){
    $("div").css("background-color","transparent");
    $("div").css("color","black");
});