function reset () {
    $("#toggleCSS").attr("href", "../css/alertify/alertify.default.css");
    alertify.set({
        labels : {
            ok     : "OK",
            cancel : "Cancel"
        },
        delay : 5000,
        buttonReverse : false,
        buttonFocus   : "ok"
    });
}

// $("#masa_msg").on( 'click', function () {
//     reset();
//     alertify.alert("沒有這天的檢討單");
//     return false;
// });
