const message_alert = (content) => {
    Swal.fire({
        title: content[0],
        text: content[1],
        // icon: "question"
    });
}

$('#btnLoginModal').on('click', function () {
    inputUserName = $('#userName');
    inputPsw = $('#psw');

    if (inputUserName.val() === '') {
        message_alert(['Error de inserción', 'Favor de insertar el nombre de usuario'])
        return;
    }

    if (inputPsw.val() === '') {
        message_alert(['Error de inserción', 'Favor de insertar su contraseña'])
        return;
    }

    if (inputUserName.val() !== '' && inputPsw.val() !== '') {
        // selecciona el span del loggin para poder 'loggearse'
        $('#spanLogin')
            .removeClass('d-none')
            .addClass('d-block')
            .text(inputUserName.val());

        $('#btnLogin')
            .addClass('d-none')
            .removeClass('log');

        $('#spanLogout')
            .removeClass('d-none')
            .addClass('inline');

        $('#exampleModal').modal('hide');
        inputUserName.val('');
        inputPsw.val('');
    }
})

$('#spanLogout').on('click', function (e) {
    $('#spanLogin')
        .removeClass('d-block')
        .addClass('d-none')
        .text('');

    $('#btnLogin')
        .removeClass('d-none')
        .addClass('log');
    $('#spanLogout')
        .addClass('d-none')
        .removeClass('d-block');
})