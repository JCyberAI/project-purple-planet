/* eslint-disable no-undef */
$(document).ready(function(){
  $.get('/api/user_data').then(function(data) {
    $('#userId').text(`User ID: ${data.id}`);
    $('#userEmail').text(data.email);
  });

  $('.board-button').on('click', function(e) {
    let id = e.target.id;
    fetch(`/boards/${id}/tasks`, {
      method: 'GET'
    }).then(function(response) {
      if(response.ok) {
        location.replace(`/boards/${id}/tasks`);
      }
    });
  });
  
  $('.sidenav').sidenav();
});
