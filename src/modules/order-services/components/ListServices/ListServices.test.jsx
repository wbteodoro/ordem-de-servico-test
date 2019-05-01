import React from 'react'
import { shallow, mount } from 'enzyme'
import ListServices from './ListServices'
import sinon from 'sinon'

describe('Testing ListServices Component', () => {
 
  it('should show a message that any service was created', () => {
    const wrapper = shallow(
      <ListServices services={[]} 
        onClickServiceDeleteButton={()=> null}
        onClickServiceEditButton={()=> null}
      /> 
    ).dive();
    expect(wrapper.find('.no-services').length).toEqual(1);  
  });


  it('should test if there are two buttons with the property onClick', () => {
    const serviceProps = [
      {description: 'x', quantity: 1, value: 10},
      {description: 'y', quantity: 5, value: 120}
    ];
    
    const wrapper = shallow(
      <ListServices 
        services={serviceProps} 
        onClickServiceDeleteButton={()=> null}
        onClickServiceEditButton={()=> null}
      /> 
    ).dive();
    expect(wrapper.find('.delete-button[onClick]').length).toEqual(2)

  });


  it('should test if there are two buttons with the proprierty onClick', () => {
    const serviceProps = [
      {description: 'x', quantity: 1, value: 10},
      {description: 'y', quantity: 5, value: 120}
    ];
    
    const wrapper = shallow(
      <ListServices 
        services={serviceProps} 
        onClickServiceDeleteButton={()=> null}
        onClickServiceEditButton={()=> null}
      /> 
    ).dive();
    expect(wrapper.find('.edit-button[onClick]').length).toEqual(2)
  });
  
  
  it('should check snapshot version', () => {
    const serviceProps = [
      {description: 'x', quantity: 1, value: 10},
      {description: 'y', quantity: 5, value: 120}
    ];
    
    const wrapper = shallow(
      <ListServices 
        services={serviceProps} 
        onClickServiceDeleteButton={()=> null}
        onClickServiceEditButton={()=> null}
      /> 
    );
    expect(wrapper).toMatchSnapshot();
  });


  it('should test the event onClickServiceEditButton when the function handleClickDeleteButton is called', () => {
    const serviceProps = [
      {description: 'x', quantity: 1, value: 10},
      {description: 'y', quantity: 5, value: 120}
    ];
    
    const callbackClickDeleteButton = sinon.spy();
    const wrapper = shallow(
      <ListServices 
        services={serviceProps} 
        onClickServiceDeleteButton={callbackClickDeleteButton}
        onClickServiceEditButton={()=> null}
      /> 
    ).dive();
    
    const wrapperInstance = wrapper.instance();
    const mockInstanceConfirmAlert = sinon.stub(global, 'confirm');
    mockInstanceConfirmAlert.returns(true);

    wrapperInstance.handleClickDeleteButton(0);
    expect(callbackClickDeleteButton.callCount).toEqual(1);
    
    mockInstanceConfirmAlert.restore();

  });


  /**
  |--------------------------------------------------
  |     Tests using Mount to test events
  |--------------------------------------------------
  */

  it("should simulates delete event when clicked in the alert confirm", () => {
    const serviceProps = [
      {description: 'x', quantity: 1, value: 10},
      {description: 'y', quantity: 5, value: 120}
    ];
    
    const callbackClickDeleteButton = sinon.spy();

    const wrapper = mount(
      <ListServices 
        services={serviceProps} 
        onClickServiceDeleteButton={callbackClickDeleteButton}
        onClickServiceEditButton={()=> null}
      /> 
    );

    const deleteButton = wrapper.find('IconButton.delete-button').first();
    const confirmButtonDeleteService = sinon.stub(global, 'confirm');
    confirmButtonDeleteService.returns(true);
    deleteButton.simulate("click");
    expect(confirmButtonDeleteService.calledOnce).toEqual(true);

    confirmButtonDeleteService.restore();
  });
  

  it('should test the event onClick of button Edit', () => {
    const serviceProps = [
      {description: 'x', quantity: 1, value: 10},
      {description: 'y', quantity: 5, value: 120}
    ];
    
    const callbackClickEditButton = sinon.spy();
    const wrapper = mount(
      <ListServices 
        services={serviceProps} 
        onClickServiceDeleteButton={()=> null} 
        onClickServiceEditButton={callbackClickEditButton}
      /> 
    );
    wrapper.find('Button.edit-button').first().simulate('click');
    expect(callbackClickEditButton.callCount).toEqual(1)

    })
  
});

