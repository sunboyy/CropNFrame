let page = 1;
function changePage() {
    $croppie.croppie('result', {
        type: 'base64',
        size: {
            width: 300,
            height: 300
        }
    }).then(function (resp) {
        $('#croppedImg').attr('src', resp)
    })

    for (let i=1; i<=3; i++) {
        $('#indicator-page-'+i).removeClass('steplabel-prev')
        $('#indicator-page-'+i).removeClass('steplabel-now')
        $('#indicator-page-'+i).removeClass('steplabel-next')
        $('#indicator-page-'+i).addClass((page==i) ? 'steplabel-now' : ((page < i) ? 'steplabel-next' : 'steplabel-prev'))
        
        $('#page-'+i).hide()
    }
    $('#page-'+page).show()
    if (page == 2) {
        readFile($('#fileField')[0])
    }
    if (page == 3) {
        $('#nextBtn').hide()
        $('#restartBtn').show()
    }
    else {
        $('#nextBtn').show()
        $('#restartBtn').hide()
    }
}
$('#nextBtn').click(function () {
    page++;
    changePage();
});
$('#restartBtn').click(function() {
    page = 1;
    changePage();
});
var $croppie = $('#cropping').croppie({
    boundary: {
        width: 300,
        height: 300
    },
    viewport: {
        width: 200,
        height: 200
    }
});
changePage();
function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $croppie.croppie('destroy');
            $croppie.croppie({
                boundary: {
                    width: 300,
                    height: 300
                },
                viewport: {
                    width: 200,
                    height: 200
                },
                url: e.target.result
            });
        }
        reader.readAsDataURL(input.files[0]);
    }
    else {
        alert("Sorry. Your browser doesn't support FileReader API");
    }
}
$('#fileField').change(function () {
    $('#showSrcField').val(this.files[0].name);
});
