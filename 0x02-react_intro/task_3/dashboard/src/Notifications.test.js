import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {

  it('should render correctly', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have 3 li tag', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('should have "Here is the list of notifications" in paragraph', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
})