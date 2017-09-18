$('#fileField').change(function() {
    // var imageb64 = $(this).val();
    // imageb64=imageb64.substr(imageb64.indexOf(',')+1,imageb64.length);
    $('#showSrcField').val(this.files[0].name);
});
