
$("#buttonSend").click(function (e){

    let form = $("#login-form");

    if(!form[0].checkValidity()){
        e.preventDefault();
        e.stopPropagation();
    }

    form.addClass('was-validated');
});
