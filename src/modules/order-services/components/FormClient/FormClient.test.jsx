import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import FormClient from './FormClient';

//todo criar metodo para abrir modal passando os dados necessários para edição
//todo quando salvar deve verificar se cpf ou cnpj está ativado e apagar o que nao estiver ativo

describe('Form Client Component', () => {

    it("The component's properties initial state should be empty", () => {
        const wrapper = shallow(<FormClient onClickSaveButton={() => null}/>);
        const componentInstance = wrapper.instance();
        const initialState = {
                name: '',
                phone: '',
                cpf: '',
                cnpj: '',
                birth_date: '',
                fantasy_name: '',
                email: '',
            };
        expect(componentInstance.state.infoClient).toEqual(initialState);
    });

    it('should change state of a specific property when handleChange method is used', () => {
        const wrapper = shallow(<FormClient onClickSaveButton={() => null}/>);
        const component = wrapper.instance();
        const stateExpected = {
            name: 'José Teste',
            phone: '357854954',
            cpf: '894846548645',
            cnpj: '1234234532',
            birth_date: '01/01/2000',
            fantasy_name: 'oitech',
            email: 'w@g.com',
        };

        component.handleChange('name', stateExpected.name);
        component.handleChange('phone', stateExpected.phone);
        component.handleChange('cpf', stateExpected.cpf);
        component.handleChange('cnpj', stateExpected.cnpj);
        component.handleChange('birth_date', stateExpected.birth_date);
        component.handleChange('fantasy_name', stateExpected.fantasy_name);
        component.handleChange('email', stateExpected.email);

        expect(component.state.infoClient).toEqual(stateExpected);

    });

    it('the method handleChangeCpfAndCnpjSelect should change cnpjSelected state (true or false)', () => {
        const wrapper = shallow(<FormClient onClickSaveButton={() => null}/>);
        const component = wrapper.instance();

        component.handleChangeCpfAndCnpjSelect();
        expect(component.state.cnpjSelected).toEqual(true);

        component.handleChangeCpfAndCnpjSelect();
        expect(component.state.cnpjSelected).toEqual(false);

    });

    describe('FormClient onClickSaveButton() event', () => {

        const stateResetedExpected = {
            infoClient: {
                name: '',
                phone: '',
                cpf: '',
                cnpj: '',
                birth_date: '',
                fantasy_name: '',
                email: '',
            },
            open: false,
            cnpjSelected: false
        };
        const stateModified = {
            infoClient: {
                name: 'John Doe',
                phone: '48 3357 2437',
                cpf: '800.550.551-89',
                cnpj: '654156.6545.516',
                birth_date: '20/10/1999',
                fantasy_name: 'JohnComp',
                email: 'johndoe@gmail.com',
            },
            open: true,
            cnpjSelected: true
        };

        const onClickSaveButtonEvent = sinon.spy();

        const wrapper = mount(<FormClient onClickSaveButton={onClickSaveButtonEvent} onClickCloseButton={() => null} />);
        const component = wrapper.instance();

        component.setState({ ...stateModified });
        wrapper.update();
        const buttonWrapper = wrapper.find('Button.save-button');

        it('should exist just one save button', () => {
            expect(buttonWrapper.length).toEqual(1);
        });

        it('save button should be clicked with sucess', () => {
            buttonWrapper.first().simulate('click');
            expect(onClickSaveButtonEvent.callCount).toEqual(1);
        });

        it('component state should be parameter in the onClickSaveButton when the same is clicked', () => {
            buttonWrapper.first().simulate('click');
            expect(onClickSaveButtonEvent.firstCall.args[0]).toEqual(stateModified.infoClient);
        });

        it('handleSaveButton() should pass the parameters to container', () => {
            component.handleSaveButton();
            expect(onClickSaveButtonEvent.firstCall.args[0]).toEqual(stateModified.infoClient);
        });

        it('the modal should be closed when save button is clicked', () => {
            buttonWrapper.first().simulate('click');
            expect(component.state.open).toEqual(false);
        });

        it('the state component should be reseted by resetState() callback event when cancel button is clicked', () => {
            buttonWrapper.first().simulate('click');
            expect(component.state).toEqual(stateResetedExpected);
        });

    });

    describe('open() from FormClient', () => {
        const wrapper = mount(<FormClient onClickSaveButton={() => null}/>);
        const component = wrapper.instance();

        const infoClientExpected = {
            name: 'José Test',
            phone: '5150161656',
            cpf: '5101505-25',
            cnpj: '',
            birth_date: '03/01/1996',
            email: 'teste@gmail.com',
            fantasy_name: ''
        };

        component.open(infoClientExpected);

        it('the open function should pass the parameters equal to the state component', () => {
            expect(component.state.infoClient).toEqual(infoClientExpected);
        });

        it('the state open should be true', () => {
            expect(component.state.open).toEqual(true);
        });

    });

    describe('Function handleChangeCpfAndCnpjSelect()', () => {

        it('CPF or the CNPJ/fantasyName should be empty string when the function handleChangeCpfAndCnpjSelect() is called', () => {
            const wrapper = shallow(<FormClient onClickSaveButton={() => null}/>);
            const component = wrapper.instance();

            component.setState({ infoClient: { cpf: '2020' } });
            component.handleChangeCpfAndCnpjSelect();

            expect(component.state.infoClient.cpf).toEqual("");

            component.setState({ infoClient: { cnpj: '2020', fantasy_name: 'imcode' } });
            component.handleChangeCpfAndCnpjSelect();

            expect(component.state.infoClient.cnpj).toEqual("");
            expect(component.state.infoClient.fantasy_name).toEqual("");
        });

    });

    describe('FormClient onClickCloseButton() event', () => {
        const stateResetedExpected = {
            infoClient: {
                name: '',
                phone: '',
                cpf: '',
                cnpj: '',
                birth_date: '',
                fantasy_name: '',
                email: '',
            },
            open: false,
            cnpjSelected: false
        };
        const stateModified = {
            infoClient: {
                name: 'John Doe',
                phone: '48 3357 2437',
                cpf: '800.550.551-89',
                cnpj: '654156.6545.516',
                birth_date: '20/10/1999',
                fantasy_name: 'JohnComp',
                email: 'johndoe@gmail.com',
            },
            open: true,
            cnpjSelected: true
        };

        const onClickCloseButtonEvent = sinon.spy();
        const wrapper = mount(<FormClient onClickSaveButton={() => null} onClickCloseButton={onClickCloseButtonEvent} />);
        const component = wrapper.instance();

        component.setState({ ...stateModified });
        wrapper.update();
        const buttonWrapper = wrapper.find('Button.cancel-button');

        it('state component should be reseted to the initial state by handleCancelButton()', () => {
            component.handleCancelButton();
            expect(component.state).toEqual(stateResetedExpected);
            onClickCloseButtonEvent.resetHistory();
        });

        it('should exist just one cancel button', () => {
            expect(buttonWrapper.length).toEqual(1);
        });

        it('should emit event onClickCloseButton when click on cancel button', () => {
            buttonWrapper.first().simulate('click');
            expect(onClickCloseButtonEvent.callCount).toEqual(1);
        });

        it('the modal should be closed', () => {
            buttonWrapper.first().simulate('click');
            expect(component.state.open).toEqual(false)
        });

        it('the state component should be reseted by the resetState() callback event when cancel button is clicked', () => {
            buttonWrapper.first().simulate('click');
            expect(component.state).toEqual(stateResetedExpected)
        });

    });

    it('test version snapshot without modal', () => {
        const wrapper = shallow(<FormClient onClickSaveButton={() => null} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('test version snapshot with modal', () => {
        const wrapper = shallow(<FormClient onClickSaveButton={() => null} />);
        const component = wrapper.instance();
        component.setState({ open: true});
        expect(component).toMatchSnapshot();
    });
});
