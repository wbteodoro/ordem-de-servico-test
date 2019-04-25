import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import FormClient from './FormClient';

//todo criar evento de click no botão salvar
//todo criar evento de click no botão cancelar
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

    //todo realizar melhoria no teste de handleChange
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

    /**
     * simulation test
     */
    // todo deve fechar a janela quando salvar e resetar o estado.

    describe('onClickSaveButton from FormClient prop', () => {

        const expectedParams = {
            name: 'José Test',
            phone: '5150161656',
            cpf: '5101505-25',
            cnpj: '',
            birth_date: '03/01/1996',
            email: 'teste@gmail.com',
            fantasy_name: ''
        };

        const onClickSaveButtonEvent = sinon.spy();

        const wrapper = mount(<FormClient onClickSaveButton={onClickSaveButtonEvent}/>);
        const component = wrapper.instance();

        component.setState({ infoClient: {...expectedParams, cnpj: '', fantasy_name: ''}, open: true });
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
            expect(onClickSaveButtonEvent.firstCall.args[0]).toEqual(expectedParams);
        });

    });



    describe('open() from FormCLient', () => {
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

    describe('Function handleChangeCpfAndCnpjSelect() in FormClient', () => {

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




    // todo quando botao cancelar for clicado deve resetar estado e fechar modal.

    it('should emit event onClickCloseButton when click on cancel button', () => {

        const expectedParams = {
            name: 'José Test',
            phone: '5150161656',
            cpf: '5101505-25',
            cnpj: '',
            birth_date: '03/01/1996',
            email: 'teste@gmail.com',
            fantasy_name: ''
        };

        const onClickCloseButtonEvent = sinon.spy();

        const wrapper = mount(<FormClient onClickSaveButton={() => null} onClickCloseButton={onClickCloseButtonEvent} />);
        const component = wrapper.instance();

        const buttonWrapper = wrapper.find('Button.cancel-button');
        expect(buttonWrapper.length).toEqual(1);

        buttonWrapper.first().simulate('click');
        expect(onClickCloseButtonEvent.callCount).toEqual(1);

        expect(onClickCloseButtonEvent.firstCall.args[0]).toEqual(expectedParams);
    });


    /**
     * test render correctly
     */
    it('Save button should exist', () => {
        const wrapper = shallow(<FormClient onClickSaveButton={() => null}/>);
        expect(wrapper.find('.save-button').length).toEqual(1)
    });

    it('Cancel button should exist', () => {
        const wrapper = shallow(<FormClient onClickSaveButton={() => null}/>);
        expect(wrapper.find('.cancel-button').length).toEqual(1)
    });

    it('test version snapshot', () => {
        const wrapper = shallow(<FormClient onClickSaveButton={() => null} />);
        expect(wrapper).toMatchSnapshot();
    });
});
