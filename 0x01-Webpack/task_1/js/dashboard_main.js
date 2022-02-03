import $ from 'jquery';
import * as _ from 'lodash';


$.when($.ready).then(function () {
  let count = 0;

  $('body').append(`
    <p>Holberton Dashboard</p>
    <p>Dashboard data for the students</p>
    <buttom type="button">Click here to get started</buttom>
    <p id='count'></p>
    <p>Copyright - Holberton School</p>
  `);

  $('buttom').on('click', _.debounce(updateCounter, 300));

  function updateCounter() {
    $('#count').text(`${count++} clicks on the button`);
  }
});