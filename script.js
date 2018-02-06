$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
},
function() {
    $(this).hide();
    //$(this).css("display", "none");
});
    $("button").click(function() {
        alert("This is a pop-up");
    $("button").addClass('animated shake');
    })
});