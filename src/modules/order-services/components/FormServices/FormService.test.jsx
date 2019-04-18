import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import FormServices from "./FormServices";
import sinon from 'sinon';

describe('Test <FormService />', () => {

    it('should have component initial state', () => {
        const wrapper = shallow(<FormServices onSave={() => null}/>);
        const component = wrapper.instance();
        const initialState = {
            data: {
                quantity: null,
                description: null,
                value: null
            },
            opened: false
        };

        expect(component.state).toEqual(initialState);

    });

    it('should change component state by method formHandleChange when passed index and value', () => {
        const wrapper = shallow(<FormServices onSave={() => null}/>);
        const component = wrapper.instance();

        const state = {
            quantity: 'quantity 1',
            description: 'description 1',
            value: 'value 1'
        };

         component.formHandleChange('quantity', state.quantity);
         component.formHandleChange('description', state.description);
         component.formHandleChange('value', state.value);

        expect(component.state.data).toEqual(state);
    });

    it('should open modal with data of form state', () => {
        const wrapper = shallow(<FormServices onSave={() => null} />);
        const component = wrapper.instance();
        const formState = { description: 'test', quantity: 1, value: 20};
        component.open(formState);
        expect(component.state.data).toEqual(formState);
    });

    it('should emit onSave event when the save button is clicked', () => {
        const onSave = sinon.spy();
        const wrapper = mount(<FormServices onSave={onSave} />);
        const component = wrapper.instance();
        component.open();
        wrapper.update();
        const button = wrapper.find('button.btn-save');
        expect(button.length).toEqual(1);
        button.simulate('click');
        expect(onSave.callCount).toEqual(1);
        wrapper.unmount();
    });

    it('should emit onSave event when use the method handleSave', () => {
        const onSave = sinon.spy();
        const wrapper = shallow(<FormServices onSave={onSave} />);
        const component = wrapper.instance();
        component.handleSave();
        expect(onSave.callCount).toEqual(1);
    });

    it('parameters of function "onSave" should be the same that component form data', () => {
        const onSave = sinon.spy();
        const wrapper = shallow(<FormServices onSave={onSave} />);
        const component = wrapper.instance();
        const formState = { description: 'test', quantity: 1, value: 20};
        component.open(formState);
        component.handleSave();
        expect(onSave.firstCall.args[0]).toEqual(formState);
    });

    it('should change state for opened when use method open', () => {
        const wrapper = shallow(<FormServices onSave={() => null}/>);
        const component = wrapper.instance();
        const formState = { description: 'test', quantity: 2, value: 10};
        component.open(formState);
        expect(component.state.opened).toEqual(true);
    });

    it('should reset state when onSave event is emitted', () => {
        const onSave = sinon.spy();
        const wrapper = shallow(<FormServices onSave={onSave} />);
        const component = wrapper.instance();

        const stateInitial = { description: null, quantity: null, value: null };
        const formState = { description: 'test', quantity: 100, value: 10 };
        component.open(formState);

        component.handleSave();
        expect(component.state.data).toEqual(stateInitial);
    });

    it('should emit onClose event when use the handleClose method', () => {
        const onClose = sinon.spy();
        const wrapper = shallow(<FormServices onSave={() => null} onClose={onClose} />);
        const component = wrapper.instance();
        component.handleClose();
        expect(onClose.callCount).toEqual(1);
    });

    it('should emit onClose event when the close button is clicked', () => {

        const onClose = sinon.spy();
        const wrapper = mount(<FormServices onSave={() => null} onClose={onClose} />);
        wrapper.instance().open();
        wrapper.update();
        const button = wrapper.find('button.btn-close');
        expect(button.length).toEqual(1);

        button.simulate('click');
        expect(onClose.callCount).toEqual(1);
        wrapper.unmount();
    });

    it('should render correctly when it is opened', () => {
        const wrapper = shallow(<FormServices onSave={() => null}/>);
        const component = wrapper.instance();
        component.open();
        expect(wrapper).toMatchSnapshot();
    });

    it('should emit onSave event when use the method handleSave', () => {
        const wrapper = shallow(<FormServices onSave={() => null} />);
        const component = wrapper.instance();
        component.open();
        expect(component.state.opened).toEqual(true);
        component.handleClose();
        expect(component.state.opened).toEqual(false);
    });

    it('should check snapshot version with state opened false', function () {
        const wrapper = shallow(<FormServices onSave={() => null}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('check snapshot version with state opened true', () => {
        const wrapper = shallow(<FormServices onSave={() => null}/>);
        wrapper.instance().open();
        expect(wrapper).toMatchSnapshot();
    });

    //todo test defaultProps
});