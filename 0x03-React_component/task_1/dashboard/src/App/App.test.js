import React from 'react';
import { shallow, mount} from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Should contain the Notifications component", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Notifications")).toHaveLength(1);
  });
  it("Should contain the Header component", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Header")).toHaveLength(1);
  });
  it("Should contain the Login component", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Login")).toHaveLength(1);
  });
  it("Should contain the Footer component", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Footer")).toHaveLength(1);
  });
  it("CourseList is not displayed with isLoggedIn false by default", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Login")).toHaveLength(1);
      expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it("isLoggedIn is true", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      wrapper.update();
      expect(wrapper.find("Login")).toHaveLength(0);
      expect(wrapper.find("CourseList")).toHaveLength(1);
  });
  it("Logout when the key control and h are pressed and an alert function is called with the string Logging you out", () => {
    const events = {};
    const logOut = jest.fn();
 
    document.addEventListener = jest.fn((event, cb) => {
      events[events] = cb;
    });
    
    window.alert = jest.fn();
    shallow(<App logOut={logout} />);
    events.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
