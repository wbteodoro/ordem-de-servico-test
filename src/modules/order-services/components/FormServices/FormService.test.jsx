import React from 'react';
import { shallow, mount } from 'enzyme';
import FormServices from "./FormServices";
import sinon from 'sinon';

describe('Test <FormService />', () => {

    // it('should render correctly', () => {
    //     const wrapper = shallow(<FormServices/>);
    // });

    //todo test component props

    it('should have component initial state', () => {
        const wrapper = shallow(<FormServices/>);
        const component = wrapper.instance();
        const initialState = {
            quantity: null,
            description: null,
            value: null
        };

        expect(component.state).toEqual(initialState);
    });


    it('should change component state by index', () => {
        const wrapper = shallow(<FormServices/>);
        const component = wrapper.instance();

        const state = {
            quantity: 'quantity',
            description: 'description',
            value: 'value'
        };

        component.formHandleChange('quantity', state.quantity);
        component.formHandleChange('description', state.description);
        component.formHandleChange('value', state.value);

        expect(component.state).toEqual(state);
    });



    it('should emit onSave event when the save button is clicked', () => {
        const onSave = sinon.spy();
        const wrapper = mount(<FormServices onSave={onSave} />);
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

    it('should emit onSave event with state in callback args', () => {
        const onSave = sinon.spy();
        const wrapper = shallow(<FormServices onSave={onSave} />);
        const component = wrapper.instance();
        const args = { description: null, quantity: null, value: null };

        component.handleSave();
        expect(onSave.firstCall.args[0]).toEqual(args);
    });

    //todo verify how to do the test whe pass state for edit mode
    it('should reset state when onSave event is emitted', () => {
        // const onSave = sinon.spy();
        // const wrapper = shallow(<FormServices onSave={onSave} />);
        // const component = wrapper.instance();
        // const args = { description: null, quantity: null, value: null };
        //
        // component.handleSave();
        // expect(onSave.firstCall.args[0]).toEqual(args);
    });


    it('should emit onClose event when use the handleClose method', () => {
        const onClose = sinon.spy();
        const wrapper = shallow(<FormServices onClose={onClose} />);
        const component = wrapper.instance();
        component.handleClose();
        expect(onClose.callCount).toEqual(1);
    });

    it('should emit onClose event when the close button is clicked', () => {

        const onClose = sinon.spy();
        const wrapper = mount(<FormServices onClose={onClose} />);
        const button = wrapper.find('button.btn-close');
        expect(button.length).toEqual(1);

        button.simulate('click');
        expect(onClose.callCount).toEqual(1);
        wrapper.unmount();
    });

    it('check snapshot version', () => {
        const wrapper = shallow(<FormServices/>);
        expect(wrapper).toMatchSnapshot();
    });

    //todo test prop serviceData
    //todo test snapshot component with prop open false

});