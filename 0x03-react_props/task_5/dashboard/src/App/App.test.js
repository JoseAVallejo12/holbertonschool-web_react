// @ts-nocheck
import { shallow } from "enzyme";
import React from "react";
import App from "./App";


const lista = [{
  id: 1,
  name: 'ES6',
  credit: 60,
}, {
  id: 2,
  name: 'Webpack',
  credit: 20,
}];

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should behave one Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').length).toEqual(1);
  });

  it('should behave one Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('should behave one Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').length).toEqual(1);
    expect(wrapper.find('CourseList').length).toEqual(0);
  });

  it('should behave one CourseList component', () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ isLoggedIn: true });

    expect(wrapper.find('CourseList').length).toEqual(1);
    expect(wrapper.find('Login').length).toEqual(0);
  });

  it('should behave one Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toEqual(1);
  });

});