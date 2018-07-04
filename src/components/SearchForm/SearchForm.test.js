import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchForm from '../SearchForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchForm />', () => {
    it('SearchForm renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchForm />, div);
    });
});