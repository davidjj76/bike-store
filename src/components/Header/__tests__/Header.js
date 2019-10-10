import React from 'react';
import { shallow, mount } from 'enzyme';

import Root from '../../Root';
import Header from '../Header';
import ConnectedHeader from '../../Header';

describe('Header', () => {
  const defaultProps = {
    totalCartItems: 12,
  };

  const render = props => shallow(<Header {...defaultProps} {...props} />);
  let wrapper;

  beforeEach(() => {
    wrapper = render();
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('first link should be active if match is exact', () => {
    const match = { isExact: true };
    const location = {};
    expect(
      wrapper
        .find('.link')
        .at(0)
        .props()
        .isActive(match, location),
    ).toBe(true);
  });

  it('first link should be active if pathname is valid', () => {
    const match = { isExact: false };
    const location = { pathname: '/road' };
    expect(
      wrapper
        .find('.link')
        .at(0)
        .props()
        .isActive(match, location),
    ).toBe(true);
  });
});

describe('ConnectedHeader', () => {
  const defaultProps = {};
  const store = {
    getState: () => ({
      cart: {
        bike1: 2,
      },
    }),
    dispatch: () => {},
    subscribe: () => {},
  };
  const render = props =>
    mount(
      <Root store={store}>
        <ConnectedHeader {...defaultProps} {...props} />{' '}
      </Root>,
    );

  let wrapper;

  beforeEach(() => {
    wrapper = render();
  });

  it('should render connected Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
