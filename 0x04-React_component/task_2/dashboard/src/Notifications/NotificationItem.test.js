/* eslint-disable no-undef */
import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ id: 0 });
  });

  it("Notifications renders without crashing", () => {
    wrapper.setProps({ value: 'test' });
    expect(wrapper.exists()).toEqual(true);
  });

  it('should behave value=“test”', () => {
    wrapper.setProps({ value: 'test' });
    expect(wrapper.find("li").text()).toEqual("test");
  });

  it('should behave type="urgent', () => {
    wrapper.setProps({ type: "urgent" });
    expect(wrapper.find("li").prop("data-priority")).toEqual("urgent");
  });

  it('should behave html={{ __html: "<u>test</u>" }}', () => {
    wrapper.setProps({ type: "urgent", html: { __html: "<p>test</p>" } });
    expect(wrapper.find("li").html().includes("<p>test</p>")).toEqual(true);
  });

  it('markAsRead should behave called to click in li componet', () => {
    const markAsReadMock = jest.fn();
    wrapper.setProps({ markAsRead: markAsReadMock });
    wrapper.find("li").simulate("click");
    expect(markAsReadMock).toHaveBeenCalled();
  });

});
