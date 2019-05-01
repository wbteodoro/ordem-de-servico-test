import React from 'react'
import { shallow, mount } from 'enzyme'
import CardClient from './CardClient'
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';


describe('Testing CardClient Component', () => {
 
  it('should test the component rendering, if there are 7 Typographys ', () => {
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = mount(<CardClient serviceOrder={serviceOrder}/>)
    expect(wrapper.find('Typography')).toHaveLength(7)
    
  })


  it('should check snapshot version', () => {    
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = shallow(<CardClient serviceOrder={serviceOrder}/>).dive()
    
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Testing the writting of the fileds', () => {
  
  it('should test if the firts field is Nome', () => {
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = mount(<CardClient serviceOrder={serviceOrder}/>)

    const findText = wrapper.find('Typography').at(0)
    // Quando acessado Typography o resultado obtido é o nome(CPF, Telefone) + o valor da  props.serviceOrder
    // Sendo assim, foi necessário separá-los e pegar o primerio elemento
    expect(findText.text().split(":")[0]).toEqual("Nome")
  })

  it('should test if the second field is CPF', () => {
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = mount(<CardClient serviceOrder={serviceOrder}/>)

    const findText = wrapper.find('Typography').at(1)
    expect(findText.text().split(":")[0]).toEqual("CPF")    
  })

  it('should test if the thrid field is CNPF', () => {
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = mount(<CardClient serviceOrder={serviceOrder}/>)

    const findText = wrapper.find('Typography').at(2)
    expect(findText.text().split(":")[0]).toEqual("CNPJ")    
  })

  it('should test if the fourth field is Telefone', () => {
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = mount(<CardClient serviceOrder={serviceOrder}/>)

    const findText = wrapper.find('Typography').at(3)
    expect(findText.text().split(":")[0]).toEqual("Telefone")    
  })

  it('should test if the fifth field is Data de Nascimento', () => {
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = mount(<CardClient serviceOrder={serviceOrder}/>)

    const findText = wrapper.find('Typography').at(4)
    expect(findText.text().split(":")[0]).toEqual("Data de Nascimento")    
  })

  it('should test if the sixth field is E-mail', () => {
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = mount(<CardClient serviceOrder={serviceOrder}/>)

    const findText = wrapper.find('Typography').at(5)
    expect(findText.text().split(":")[0]).toEqual("E-mail")    
  })

  it('should test if the seventh field is Nome Fantasia', () => {
    const serviceOrder = {name:'jose', birth_date:30, phone:30303030, email:'jose@gmail.com',cpf:123456, fantasName:''}

    const wrapper = mount(<CardClient serviceOrder={serviceOrder}/>)

    const findText = wrapper.find('Typography').at(6)
    expect(findText.text().split(":")[0]).toEqual("Nome Fantasia")    
  })

})
