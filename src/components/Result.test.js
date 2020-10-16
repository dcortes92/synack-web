import React from 'react';
import {mount} from 'enzyme';
import Result from './Result';

test('renders `Result` component with props', () => {
  const props = {
    title: 'Result title',
    description: 'Result description',
    link: 'Result url'
  }
  const wrapper = mount(<Result {...props} />);
  expect(wrapper.find('.link h3').text()).toStrictEqual(props.title);
  expect(wrapper.find('.link span').text()).toStrictEqual(props.link);
  expect(wrapper.find('.description p').text()).toStrictEqual(props.description);
});
