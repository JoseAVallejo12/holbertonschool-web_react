import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';

fdescribe('<CourseListRow />', () => {
  it('CourseListRow renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='' textSecondCell='' />);
    expect(wrapper.exists()).toEqual(true);
  });
});