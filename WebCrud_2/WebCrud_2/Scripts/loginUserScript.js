var app = angular.module("myAppUser", []);

app.controller("myCtrlUser", function ($scope, $http) {
    debugger;

    $scope.LogInUser = function() {
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

            $scope.inputUsername = "";
            $scope.inputPassword = "";

            //to test
            alert(response.data.username);

            //fix it 
            /*
            window.localStorage.set("UserSaved", JSON.stringify(response.data));

            // test
            var myObj = JSON.parse(window.localStorage.get("UserSaved"))
            console.log(myObj.username + "\n" + myObj.phone);

            //completar
            // $scope.ShowAllUsers();
            //
            */
        })
    }

    //todo
    $scope.ShowAllUsers = function () {

        $http({
            method: "post",
            url: "http://localhost:59871/User/Login",
            datatype: "json",
            data: JSON.stringify(user)
        }).then(function (response) {

            $scope.inputUsername = "";
            $scope.inputPassword = "";
          

         

        })

    }

})

    