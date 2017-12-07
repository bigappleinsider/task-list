import Alert from '~src/components/Alert';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const message = 'Harvest season';
const handleDismissAlert = jest.fn();

const setup = propOverrides => {
  const props = Object.assign({
    handleDismissAlert,
    children: message
  }, propOverrides)

  const wrapper = shallow(<Alert {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Alert> component', function() {
  it('should render', function() {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render message', function() {
    const { wrapper } = setup();
    expect(wrapper.text()).toBe(message);
  });

  it('should dissmiss alert on click', function() {
    const { wrapper } = setup();
    wrapper.find('div').at(2).simulate('click');
    expect(handleDismissAlert.mock.calls.length).toBe(1);
  })
});
