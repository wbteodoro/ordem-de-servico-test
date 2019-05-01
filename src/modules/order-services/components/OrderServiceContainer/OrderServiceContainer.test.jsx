import React from 'react';
import {shallow, mount} from "enzyme";
import configureStore from 'redux-mock-store';
import OrderServiceContainerConnected, {OrderServiceContainer} from "./OrderServiceContainer";
import {Provider} from 'react-redux';



describe('Test OrderServiceContainer Component', function () {

    const mockStore = configureStore();
    var Store;

    beforeEach(() => {
        Store = mockStore({
            orderService: {
                client:{},
                services:[]
            }
        });
    });

    describe('this.handleAddClient();', () => {

        const wrapper = mount(<OrderServiceContainer orderService={{}}/>);
        const component = wrapper.instance();
        component.handleAddClient();

        it('should change state open of FormClient component', function ()
        {
            expect(component.formClient.current.state.open).toEqual(true);
        });

        it('should render FormClient Modal', function () {
            expect(wrapper.find('Dialog.dialog-form-client').length).toEqual(1);
        });


    });




});