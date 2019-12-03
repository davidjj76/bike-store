import React from 'react';
import { shallow } from 'enzyme';
import BikesList from './BikesList';

const props = {
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
let wrapper;
beforeEach(() => {
  wrapper = shallow(<BikesList {...props} />);
});

it('should render a List of bikes', () => {
  expect(wrapper.find('List').props().items).toHaveLength(1);
});

it('should add a bike to cart', () => {
  const [bike] = props.bikes;
  const item = shallow(
    wrapper
      .find('List')
      .props()
      .renderItem(bike),
  );
  item.find('.actions button').simulate('click');
  expect(props.addToCart).toHaveBeenCalledWith(bike.id);
});
