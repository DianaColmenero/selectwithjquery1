$(document).ready(function(){
  function load_json(id, parent_id) {
    var paint = '';
    $.getJSON('state_city.json', function(data){
      paint += '<option value="">Select '+ id +'</option>';
      $.each(data, function(key, value){
        if(id == 'state')
        {
          if (value.parent_id == '0')
          {
            paint += '<option value='+value.id'>'+value.name +'</option>';
          }
        }
      });
    });
  }
});
