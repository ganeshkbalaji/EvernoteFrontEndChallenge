$(document).on('ready', function() {
  var source = $('#tee_template').html();
  var template = Handlebars.compile(source);
  var source1 = $('#tees_template').html();
  var template1 = Handlebars.compile(source1);
  var $teeSelector = $('body').data('init').variants
  var context = {tees: $teeSelector};
  $('#tees').html(template(context))
  $('#tee-thumbnail').html(template1(context))

  $('body').on('click', '.image-thumbnail', function(event) {
    event.preventDefault();
  var price = $(this).attr('price');
  // debugger;
  var displayName = $(this).attr('display_name');
  var fullImage = $(this).attr('image');
  var teeId = $(this).attr('tee_id');
  $('#price').html('$' + (Number(price)/100).toFixed(2));
  $('#display_name').html(displayName);
  $('#full img').attr('src', fullImage);
  $('#full form').attr('id', teeId);
  $('img').removeClass("round-border");
  $(this).addClass("round-border");
});
});

