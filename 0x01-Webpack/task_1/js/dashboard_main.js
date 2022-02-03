import $ from 'jquery';
import * as _ from 'lodash';


$.when($.ready).then(function () {
  let count = 0;

  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<buttom type="button">Click here to get started</buttom>')
    .on('click', _.debounce(updateCounter, 300));
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  function updateCounter() {
    $('#count').text(`${count++} clicks on the button`);
  }
});
