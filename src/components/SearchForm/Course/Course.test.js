import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Course from '../Course';

Enzyme.configure({ adapter: new Adapter() });

describe('<Course />', () => {
    it('Course renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Course />, div);
    });
});