import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { stub } from 'sinon';
import PersonModel from 'models/Person';
import PersonItem from './index';

describe('<PersonItem /> component', function() {
  const personModel = new PersonModel({
    id: 1,
    name: 'User name',
  });

  const getPersonItem = (
    model = personModel,
    isSelected = false,
    clickHandler = () => {}
  ) => {
    const props = {
      model,
      isSelected,
      onClick: clickHandler,
    };

    return shallow(<PersonItem { ...props } />);
  };

  it('should not have selected class if not selected', function () {
    const personItem = getPersonItem();

    expect(personItem.find('.person-item--selected')).to.have.length(0);
  });

  it('should have selected class if selected', function () {
    const personItem = getPersonItem(undefined, true);

    expect(personItem.find('.person-item--selected')).to.have.length(1);
  });

  it('should render a person name', function () {
    const personItem = getPersonItem();

    expect(personItem.find('.person-item__name').text())
      .to
      .equal(personModel.get('name'));
  });

  it('should not render a company name if not exist', function () {
    const personItem = getPersonItem(new PersonModel({}));

    expect(personItem.find('.person-item__company')).to.have.length(0);
  });

  it('should render a company name if exists', function () {
    const personItem = getPersonItem(new PersonModel({ org_name: 'Company' }));

    expect(personItem.find('.person-item__company')).to.have.length(1);
  });

  it('should call handler from props on click', function() {
    const onClick = stub();
    const personItem = getPersonItem(undefined, undefined, onClick);

    personItem.find('.person-item').simulate('click');

    expect(onClick.called).to.be.true;
  });

  it('should pass a person id in onClick handler', function() {
    const onClick = stub();
    const personItem = getPersonItem(undefined, undefined, onClick);

    personItem.find('.person-item').simulate('click');

    expect(onClick.args[0]).to.deep.equal([ personModel.get('id') ]);
  });
});
