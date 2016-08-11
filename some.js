$(document).ready(function(){
  //check the box at init
  $(function(){
    $('#remember-me').attr('checked', 'checked');
  });

  //get checkbox's status
  $('.btn').click(function(){
    alert($('#remember-me').is(':checked'));
  });
})
