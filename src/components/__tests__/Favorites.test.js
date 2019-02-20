import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from '../Favorites';

it('renders when no favorites', () => {
  const tree = renderer.create(<Favorites />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders when multiple favorites', () => {
    const favorites = [
    {id: 1, city: 'Helsinki'},
    {id: 2, city: 'Kemi'},
    {id: 3, city: 'Kolari'}];
    const tree = renderer.create(<Favorites favorites={favorites} />).toJSON();
    expect(tree).toMatchSnapshot();
  });