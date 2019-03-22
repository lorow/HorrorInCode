$(document).ready(function(){
    $("#id_image").change(function() {
        console.log('fuck');
        readURL(this);
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')').hide().fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
