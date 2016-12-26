(function () {
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', function ($scope) {
  $scope.FoodList="";
  $scope.Text="";
  $scope.CheckList = function() {
    var list=$scope.FoodList.split(",");
    console.log(list.toString());
    console.log(list.length);
    if(list.length==1&&list[0]=="")
    {
      $scope.Text = "Please enter data first";
    }
    else if(list.length<=3||(list.length==4&&list[3]=="")){
      $scope.Text = "Enjoy!"
    }
    else {
      $scope.Text = "Too much!"
    }
  }
});
})();
