import Button from '~src/components/Button';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const message = 'Harvest season';
const onClick = jest.fn();

const setup = propOverrides => {
  const props = Object.assign({
    enabled: true,
    onClick,
    children: message
  }, propOverrides)

  const wrapper = shallow(<Button {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Button> component', function() {
  it('should render', function() {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render message', function() {
    const { wrapper } = setup();
    expect(wrapper.text()).toBe(message);
  });

  it('should call event handler on click', function() {
    const { wrapper } = setup();
    wrapper.find('button').simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  })
});
