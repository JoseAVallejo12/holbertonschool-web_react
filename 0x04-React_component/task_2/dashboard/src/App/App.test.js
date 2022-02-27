/* eslint-disable no-undef */
// @ts-nocheck
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import App from "./App";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notification";


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
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("App renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should behave one Notifications component', () => {
    expect(wrapper.find('Notifications').length).toEqual(1);
  });

  it('should behave one Header component', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('should behave one Login component', () => {
    expect(wrapper.find('Login').length).toEqual(1);
    expect(wrapper.find('CourseList').length).toEqual(0);
  });

  it('should behave one CourseList component', () => {
    wrapper.setProps({ isLoggedIn: true });

    expect(wrapper.find('CourseList').length).toEqual(1);
    expect(wrapper.find('Login').length).toEqual(0);
  });

  it('should behave one Footer component', () => {
    expect(wrapper.find('Footer').length).toEqual(1);
  });

  it('When press key ctrl+h should be alert with "Logging you aut"', () => {
    const alertMock = jest.fn();
    window.alert = alertMock;
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    })

    let wrapper2 = shallow(<App />);
    map.keydown({ keyCode: 72, ctrlKey: true, preventDefault: () => { } });
    wrapper.setProps({ isLoggedIn: true });
    wrapper.simulate('keyDown', { keyCode: 72, ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    window.alert.mockClear();
    wrapper2.unmount();

  });
});
