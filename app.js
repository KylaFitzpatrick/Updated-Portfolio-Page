$("#submit").on("click", function(){
    $("#first_name").val();
    $("#email").val();
    var body = $("#icon_prefix2").val();
    $(this).attr("href", "mailto:kfitzpatrick44@gmail.com?subject=Inquiry&body=" + body);
})
