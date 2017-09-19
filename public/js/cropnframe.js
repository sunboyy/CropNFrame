var app = angular.module("cropnframe", []);
app.controller('cropnframe', function($scope) {
    $scope.step = 1;
    $scope.next = function() {
        $scope.step++;
    }
    $scope.restart = function() {
        $scope.step = 1;
    }
});
$('#fileField').change(function() {
    // var imageb64 = $(this).val();
    // imageb64=imageb64.substr(imageb64.indexOf(',')+1,imageb64.length);
    $('#showSrcField').val(this.files[0].name);
});
