(function ($) {
    // Establece la ruta de la api de la aplicación
    $.source = "http://localhost/DIW/jquery-mobile-app-api/";
    /**
     * Autentica al usuario y establece la cookie de inicio de sesión
     * @param {string} user Nombre de usuario
     * @param {string} password Contraseña
     * @param {callback} successCallback Función que se ejecuta si el usuario se ha autenticado correctamente
     */
    $.authenticate = function (user, password, successCallback) {
        var data = {
            user: user,
            password: password,
        };
        $.ajax({
            url: $.source + "authenticate/",
            method: "get",
            data: data
        }).success(function (response) {
            successCallback(response)
        }).error(function () {
            console.log("[ERROR] USER AUTH");
        });
    };
    $.getCurrentDir = function () {
        var pathName = window.location.pathname;
        return pathName.substring(0, pathName.lastIndexOf('/')) + "/"

    };
    $.loadingScreen = function (status) {
        $.mobile.loading(status, {
            text: "Cargando",
            textVisible: true
        });
    },
            $.smiles = function () {
                $("em").append($("<i></i>").attr({
                    class: "fa fa-smile-o fa-3x",
                    "data-type": "smile"
                }));
                $("em").append($("<i></i>").attr({
                    class: "fa fa-meh-o fa-3x",
                    "data-type": "meh"
                }));
                $("em").append($("<i></i>").attr({
                    class: "fa fa-frown-o fa-3x",
                    "data-type": "sad"
                }));
                $("i").click(function () {
                    var cli = $(this).attr("data-type");
                    console.log(cli)
                    switch (cli) {
                        //verde
                        case "smile":
                            $(this).css("color", "lime") //lime
                            $(this).next().css("color", "white");
                            $(this).nextAll().eq(1).css("color", "white");
                            break;
                        case "meh":
                            $(this).css("color", "orange") //orange
                            $(this).prev().css("color", "white")
                            $(this).next().css("color", "white")
                            break;
                            //rojo
                        case "sad":
                            $(this).css("color", "red");
                            $(this).prevAll().eq(0).css("color", "white");
                            console.log($(this).prevAll().eq(0).attr("data-type") + "meh");
                            console.log($(this).prevAll().eq(1).attr("data-type") + "smile")
                            $(this).prevAll().eq(1).css("color", "white");
                            break;
                    }
                });
            };
}(jQuery));