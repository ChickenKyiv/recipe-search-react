import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainMenu from '../MainMenu';

Enzyme.configure({ adapter: new Adapter() });

describe('<MainMenu />', () => {
    it('MainMenu renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainMenu />, div);
    });
});