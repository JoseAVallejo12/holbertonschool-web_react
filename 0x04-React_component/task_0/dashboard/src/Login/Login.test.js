// @ts-nocheck
import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("<Login />", () => {
  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Login should behave 2 input", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(2);
  });

  it("Login should behave 2 label", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toEqual(2);
  });
});
