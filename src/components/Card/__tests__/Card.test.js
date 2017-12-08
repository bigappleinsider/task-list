import Card from '~src/components/Card';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const item = {
  name: 'Harvest season'
};
const handleDeleteTask = jest.fn();

const setup = propOverrides => {
  const props = Object.assign({
    item,
    idx: 1,
    handleDeleteTask
  }, propOverrides)

  const wrapper = shallow(<Card {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Card> component', function() {
  it('should render', function() {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render message', function() {
    const { wrapper } = setup();
    expect(wrapper.find('div').at(1).text()).toBe(item.name);
  });

  it('should delete task on click', function() {
    const { wrapper } = setup();
    wrapper.find('div').at(2).simulate('click');
    expect(handleDeleteTask.mock.calls.length).toBe(1);
  })
});
