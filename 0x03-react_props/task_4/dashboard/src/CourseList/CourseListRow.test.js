import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('CourseListRow renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='jose' />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should rendered th colspan=2 and innerText="jose"', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='jose' isHeader />);

    expect(wrapper.find('th').length).toEqual(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
    expect(wrapper.find('th').text()).toEqual('jose');
  });

  it('should rendered th elements with textFirstCell and textSecondCell', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='jose' textSecondCell='vallejo' isHeader />);
    expect(wrapper.find('th').length).toEqual(2);
    expect(wrapper.find('th').at(0).text()).toEqual('jose');
    expect(wrapper.find('th').at(1).text()).toEqual('vallejo');
  });

  it('should rendered td elements with textFirstCell and textSecondCell', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='jose' textSecondCell='vallejo' />);
    expect(wrapper.find('tr').length).toEqual(1);
    expect(wrapper.find('td').at(0).text()).toEqual('jose');
    expect(wrapper.find('td').at(1).text()).toEqual('vallejo');

  });
});