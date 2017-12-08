import Navigation from '~src/components/Navigation';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const handleShowForm = jest.fn();
const handleSaveTasks = jest.fn();


const setup = propOverrides => {
  const props = Object.assign({
    handleShowForm,
    handleSaveTasks,
    saveEnabled: true
  }, propOverrides)

  const wrapper = shallow(<Navigation {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Navigation> component', function() {
  it('should render', function() {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should add task on click', function() {
    const { wrapper } = setup();
    wrapper.find('Button').at(0).simulate('click');
    expect(handleShowForm.mock.calls.length).toBe(1);
  });

  it('should not save when disabled', function() {
    const { wrapper } = setup({saveEnabled: false});
    wrapper.find('Button').at(1).simulate('click');
    expect(handleSaveTasks.mock.calls.length).toBe(0);
  });

  it('should save tasks on click', function() {
    const { wrapper } = setup();
    wrapper.find('Button').at(1).simulate('click');
    expect(handleSaveTasks.mock.calls.length).toBe(1);
  });
});
