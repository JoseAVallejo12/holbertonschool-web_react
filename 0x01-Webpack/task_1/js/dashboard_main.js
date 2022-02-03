import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  return count++;
}

$.when($.ready).then(function () {

  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button type="button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('button').on('click', _.debounce(() => {
    $('#count').text(`${updateCounter()} clicks on the button`);
  }));
});
