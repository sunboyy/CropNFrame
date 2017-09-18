var app = angular.module("cropnframe", []);
app.controller('cropnframe', function($scope) {
    $scope.step = 1;
    $scope.file = {name: ""};
    $scope.filename = function() {
        return $scope.file.name;
    }
    $scope.changeImg = function(e) {
        console.log("Yay");
    }
    
});
// $('#fileField').change(function() {
//     // var imageb64 = $(this).val();
//     // imageb64=imageb64.substr(imageb64.indexOf(',')+1,imageb64.length);
//     $('#showSrcField').val(this.files[0].name);
// });
