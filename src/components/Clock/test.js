import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Clock from './index';

it( 'renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <Clock />, div );
    ReactDOM.unmountComponentAtNode( div );
} );


test( 'есть корректный снимок', () => {
    const date = new Date(1000000000000);
    const component = renderer.create(
        <Clock date={date} />
    );
    const tree = component.toJSON();
    expect( tree ).toMatchSnapshot();
} );