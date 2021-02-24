/* eslint-disable no-undef */
$(document).ready(function() {
  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false
  });

  $('.modal').modal();

  let queryString = window.location.href;
  let board = queryString.split('/');

  let formInput = $('form');
  let title = $('input#title');
  let body = $('input#body');
  let status = $('input#status');
  let BoardId = Number(board[4]);
  formInput.on('submit', function (event) {
    event.preventDefault();
    let userData = {
      title: title.val().trim(),
      body: body.val().trim(),
      status: status.val().trim(),
      BoardId: BoardId,
    };
    console.log(userData);
    if (!userData.title || !userData.status || !userData.body) {
      return;
    }
    console.log(userData);
    addRating(userData.title, userData.body, userData.status, BoardId);
    title.val('');
    body.val('');
    status.val('');
  });
  // addRating does a post to our "api/item" route and if successful, redirects us the the home page
  function addRating(title, body, status, BoardId) {
    $.post('/api/tasks', {
      title: title,
      body: body,
      status: status,
      BoardId: BoardId
    })
      .then(function () {
        window.location.replace(`/boards/${BoardId}/tasks`);
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  $('.task-delete').on('click', function (e) {
    let id = e.target.id;
    fetch(`/api/tasks/${id}/`, {
      method: 'DELETE',
    }).then(function (response) {
      if (response.ok) {
        location.replace(`/boards/${BoardId}/tasks`);
      }
    });
  });
});