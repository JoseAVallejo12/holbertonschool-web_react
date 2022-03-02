// @ts-nocheck
import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("Login renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Login should behave 2 input", () => {
    const wrapper = shallow(<Footer />);
    const paragraphInnerText = wrapper.find("p").text();

    expect(paragraphInnerText.includes('Copyright')).toEqual(true);
  });
});
