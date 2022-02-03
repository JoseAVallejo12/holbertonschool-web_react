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

  const debouncedFunc = _.debounce(() => {
    let count = updateCounter();
    $('#count').text(`${count} clicks on the button`);
  });
  $('button').on('click', debouncedFunc);
});
