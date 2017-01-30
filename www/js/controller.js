/**
 * Created by shashwath on 29/1/17.
 */

angular.module('starter.controller', [])

    .controller('mainCtrl', function ($scope, tech) {
        $scope.tech = tech;
        console.log($scope.tech)
    })
    .controller('headerCtrl', function ($scope) {
    })
    .controller('sideMenuCtrl',function($scope,$ionicSideMenuDelegate){
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
;