import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should behave value=“test”', () => {
    const wrapper = shallow(
      <NotificationItem
        value="test"
      />
    );

    expect(wrapper.find("li").text()).toEqual("test");
  });

  it('should behave type=“default”', () => {
    const wrapper = shallow(
      <NotificationItem
        type="default"
      />
    );

    expect(wrapper.find("li").prop("data-priority")).toEqual("default");
  });

  it('should behave html={{ __html: "<u>test</u>" }}', () => {
    const wrapper = shallow(
      <NotificationItem
        type="urgent"
        html={{ __html: "<p>test</p>" }}
      />
    );

    expect(wrapper.find("li").html().includes("<p>test</p>")).toEqual(true);
  });
});