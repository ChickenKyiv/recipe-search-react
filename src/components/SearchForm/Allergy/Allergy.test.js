import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Allergy from '../Allergy';

Enzyme.configure({ adapter: new Adapter() });

describe('<Allergy />', () => {
    it('Allergy renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Allergy />, div);
    });
    
    it('has property `allergies` in state', () => {
        const component = shallow(<Allergy />);
        expect(component.property('allergies')).toBeDefined();
    });
});