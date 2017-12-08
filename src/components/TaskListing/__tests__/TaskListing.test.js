import TaskListing from '~src/components/TaskListing';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const tasks = [
  {name: 'Harvest season'},
  {name: 'Maiden Lane'},
]
const handleDeleteTask = jest.fn();

const setup = propOverrides => {
  const props = Object.assign({
    tasks,
    handleDeleteTask
  }, propOverrides)

  const wrapper = shallow(<TaskListing {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<TaskListing> component', function() {
  it('should render', function() {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render messages', function() {
    const { wrapper } = setup();
    expect(wrapper.find('Card').length).toBe(2);
  });
});
