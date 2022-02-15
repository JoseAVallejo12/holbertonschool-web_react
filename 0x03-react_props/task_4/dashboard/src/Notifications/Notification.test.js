import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notification";

describe("<Notifications />", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });
});