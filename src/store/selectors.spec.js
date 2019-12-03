import * as selectors from './selectors';

it('should filter bikes', () => {
  const bikes = [{ id: '1', type: 'road' }, { id: '2', type: 'mountain' }];
  const filter = 'road';
  expect(selectors.getVisibleBikes(bikes, filter)).toHaveLength(1);
});
