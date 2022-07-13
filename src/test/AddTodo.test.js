/**
 * @vitest-environment jsdom
 */

import { mount } from '@vue/test-utils';
import {
  beforeEach, describe, it, expect,
} from 'vitest';
import AddTodo from '../components/AddTodo.vue';

let wrapper;

beforeEach(() => {
  wrapper = mount(AddTodo);
});

describe('AddTodo', () => {
  describe('rendering', () => {
    it('renders the component', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('matches snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
