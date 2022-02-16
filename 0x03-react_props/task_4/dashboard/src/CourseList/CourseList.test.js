import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  it('CourseList renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should behave rendered 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('table CourseListRow').length).toEqual(5);
  });
})