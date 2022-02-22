import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notification";

describe("<Notifications />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });


  it("Notifications renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.exists()).toEqual(true);
  });

  it('div.menuItem is being displayed when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find("div.menuItem").length).toEqual(1);
  });

  it('div.menuItem is being displayed when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });

    expect(wrapper.find("div.menuItem").length).toEqual(1);
  });

  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });

    expect(wrapper.find("div.Notifications").length).toEqual(0);
  });

  it('div.Notifications is being displayed when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });

    expect(wrapper.find("div.Notifications").length).toEqual(1);
  });

  it('when listNotifications is empty should render one row => "No new notification for now', () => {
    wrapper.setProps({ listNotifications: [], displayDrawer: true });

    expect(wrapper.find("p.empty-notifications").at(0).text()).toEqual('No new notification for now');
  });

  it('when listNotifications is not empty should render one row for each notification', () => {
    const listNotifications = [{ id: 1, type: 'success', value: 'test', html: 'test' }];
    wrapper.setProps({ listNotifications: listNotifications, displayDrawer: true });

    expect(wrapper.find("ul").at(0).children().length).toEqual(1);
  });

});
