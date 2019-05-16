// Affiche l'image
function readURL(input) {
  if (input.files && input.files[0]) {
//     Variable
    var preview = input.id;
    var image_titre = $('#'+preview).val();
    var titre = image_titre.split("fakepath");
    var longueur = $('.group-img').length;
    var suivant = parseInt(preview) + 1;
    
    
    $('#desc-'+preview).css('display', 'none');
    $('#close-'+preview).html('<span><i class="fa fa-times" aria-hidden="true"></i></span>');
    //     Condition a rajouté si besoin
    if(preview == 1){
      $('.image-'+suivant).css('display','flex');
    }
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-"+preview).css('background-image', 'url('+e.target.result+')');
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// Enleve les images en cliquant pour supprimer
function app(input){
  preview = input.id;
  id = preview.split("-")[1];
  var suivant = parseInt(id) + 1;
  $('#desc-'+id).css('display', 'flex');
  $('#close-'+id).html('');
  $(".image-"+id).css('background-image', 'url("")');
  $('#'+id).val('');
  
  //     Condition a rajouté si besoin
  if(id == 1){
    $('.image-'+suivant).css('display','none');
    $(".image-"+suivant).css('background-image', 'url("")');
    // $('#close-'+suivant).css('display', 'none');
    // $('#desc-'+suivant).css('display', 'flex');
    $('#'+suivant).val('');
  }
}


$('.afficher .close').html('<span><i class="fa fa-times" aria-hidden="true"></i></span>');