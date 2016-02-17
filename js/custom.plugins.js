(function ($) {
    var source = "http://localhost/DIW/jquery-mobile-app-api/";
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
            url: source + "authenticate/",
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

    }
}(jQuery));