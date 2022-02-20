import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';

const lista = [{
  id: 1,
  name: 'ES6',
  credit: 60,
}, {
  id: 2,
  name: 'Webpack',
  credit: 20,
},
{
  id: 3,
  name: 'React',
  credit: 30,
},
];

describe('<CourseList />', () => {
  it('CourseList renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    wrapper.setProps({ listCourses: lista });
    expect(wrapper.exists()).toEqual(true);
  });
  it('should behave rendered 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    wrapper.setProps({ listCourses: lista });
    expect(wrapper.find('table CourseListRow').length).toEqual(5);
  });
})