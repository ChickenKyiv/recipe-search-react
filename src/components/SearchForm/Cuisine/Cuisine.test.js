import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cuisine  from './Cuisine';

Enzyme.configure({ adapter: new Adapter() });

describe('<Cuisine />', () => {
    it('Cuisine renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Cuisine />, div);
    });
});
