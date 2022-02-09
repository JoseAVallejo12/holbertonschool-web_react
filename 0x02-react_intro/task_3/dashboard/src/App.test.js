
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have div with className="App-header"', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App-header')).toHaveLength(1);

  });

  it('should have div with className="App-header"', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App-body')).toHaveLength(1);

  });

  it('should have div with className="App-header"', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App-footer')).toHaveLength(1);

  });
})