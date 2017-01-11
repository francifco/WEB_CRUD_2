var app = angular.module("myAppUser", []);

app.controller("myCtrlUser", function ($scope, $http) {
    debugger;

    $scope.LogInUser = function () {
        var user = {
            username: $scope.inputUsername,
            password: $scope.inputPassword
        }

        $http({
            method: "post",
            url: "http://localhost:59871/User/Login",
            datatype: "json",
            data: JSON.stringify(user)
        }).then(function (response) {

            alert(response.data);

        })
    }
})

    