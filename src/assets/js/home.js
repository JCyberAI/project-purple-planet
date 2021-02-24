/* eslint-disable no-undef */
$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false
  });

  $('.modal').modal();

  let formInput = $('form');
  let name = $('input#name');
  let UserId = $('input#UserId');
  formInput.on('submit', function (event) {
    event.preventDefault();
    let userData = {
      name: name.val().trim(),
      UserId: Number(UserId.val().trim()),
    };
    console.log(userData);
    if (!userData.name || !userData.UserId) {
      return;
    }
    addRating(userData.name, userData.UserId);
    name.val('');
    UserId.val('');
  });
  // addRating does a post to our "api/item" route and if successful, redirects us the the home page
  function addRating(name, UserId) {
    $.post('/api/boards', {
      name: name,
      UserId: UserId
    })
      .then(function () {
        window.location.replace('/home');
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  $('.delete-board').on('click', function (e) {
    let id = e.target.id;
    fetch(`/api/boards/${id}/`, {
      method: 'DELETE',
    }).then(function (response) {
      if (response.ok) {
        location.replace('/home');
      }
    });
  });
});