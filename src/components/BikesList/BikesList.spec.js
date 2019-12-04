import React from 'react';
import { shallow } from 'enzyme';

import BikesList from './BikesList';

describe('BikesList', () => {
  const defaultProps = {
    addToCart: jest.fn(),
    bikes: [
      {
        id: 'bike1',
        name: 'mountain cf 7.0',
        image: 'url/to/image',
        price: 3999.99,
        hasStock: true,
      },
    ],
  };
  const render = props => shallow(<BikesList {...defaultProps} {...props} />);
  let wrapper;

  beforeEach(() => {
    wrapper = render();
  });

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a list of bikes', () => {
    expect(wrapper.find('.list').props().items).toHaveLength(1);
  });

  it('should add a bike to cart', () => {
    const bike = defaultProps.bikes[0];
    const list = wrapper
      .find('.list')
      .props()
      .renderItem(bike);
    const { onAddToCartClick } = list.props;
    onAddToCartClick();
    expect(defaultProps.addToCart).toHaveBeenCalledWith(bike.id);
  });
});
