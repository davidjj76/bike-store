import React from 'react';
import { shallow } from 'enzyme';
import BikesList from './BikesList';

describe('BikeList', () => {
  const props = {
    className: 'test',
    bikes: [{ id: '1' }, { id: '2' }],
    addToCart: jest.fn(),
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BikesList {...props} />);
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should have a "test" class', () => {
    expect(wrapper.hasClass(props.className)).toBe(true);
  });

  test('should render a List of bikes', () => {
    expect(wrapper.find('List').props().items).toEqual(props.bikes);
  });

  test('should add a bike to cart', () => {
    const bike = {
      id: '1',
      price: 895,
      name: 'name',
      image: 'image',
      hasStock: true,
    };
    const bikeItem = shallow(wrapper.find('List').props().renderItem(bike));
    bikeItem.find('button').simulate('click');
    expect(props.addToCart).toHaveBeenCalledWith(bike.id);
    // const bikeItem = wrapper.find('List').props().renderItem(bike);
    // bikeItem.props.onAddToCartClick();
    // expect(props.addToCart).toHaveBeenCalledWith(bike.id);
  });
});
