import React from 'react';
import sinon from 'sinon';
import {mount} from 'enzyme';
import SearchForm from './SearchForm';

describe('`SearchForm` component tests', () => {
  test('should not submit form with empty values', () => {
    const onSubmit = sinon.spy();
    const submitting = false;
    const wrapper = mount(
      <SearchForm
        onSubmit={onSubmit}
        submitting={submitting}
      />
    );
    wrapper.find('form').simulate('submit');
    expect(onSubmit.called).toBeFalsy();
  });

  test('should submit form', () => {
    const onSubmit = sinon.spy();
    const submitting = false;
    const wrapper = mount(
      <SearchForm
        onSubmit={onSubmit}
        submitting={submitting}
      />
    );
    const queryInput = wrapper.find('input[name="query"]');
    expect(queryInput.length).toStrictEqual(1);
    queryInput.simulate('change', { target: { value: 'synack' } });
    wrapper.find('form').simulate('submit');
    expect(onSubmit.called).toBeTruthy();
  })
});