// @ts-nocheck
import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe('<Header />', () => {
  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Header should behave one img", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('img')).toEqual(true);
  });

  it("Header should behave one h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('h1')).toEqual(true);
  });
});
