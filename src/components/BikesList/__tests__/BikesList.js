import React from 'react';
import { shallow } from 'enzyme';

import BikesList from '../BikesList';

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

  it('should render BikesList component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a bike to cart', () => {
    const [bike] = defaultProps.bikes;
    const item = shallow(
      wrapper
        .find('.list')
        .props()
        .renderItem(bike),
    );
    item.find('.actions button').simulate('click');
    expect(defaultProps.addToCart).toHaveBeenCalledWith(bike.id);
  });
});
