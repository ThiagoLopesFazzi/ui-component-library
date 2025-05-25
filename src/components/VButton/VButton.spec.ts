import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import VButton from './VButton.vue';

describe('VButton', () => {
  describe('Component Tests', () => {
    it('renders properly', () => {
      const wrapper = mount(VButton, { props: { label: 'Test Button' } });
      expect(wrapper.text()).toContain('Test Button');
    });

    it('renders default slot content', () => {
      const wrapper = mount(VButton, {
        slots: {
          default: 'Slot Content',
        },
      });
      expect(wrapper.text()).toContain('Slot Content');
    });

    it('emits click event when clicked', async () => {
      const wrapper = mount(VButton);
      await wrapper.trigger('click');
      expect(wrapper.emitted().click).toBeTruthy();
    });
  });

  describe('Unit Tests', () => {
    it('should be a placeholder for future unit tests', () => {
      expect(true).toBe(true);
    });
  });

  describe('PassThrough (pt) prop merging logic', () => {
    it('should pass null pt to PrimeVue Button if no pt prop is provided to VButton', () => {
      const wrapper = mount(VButton);
      const primeButton = wrapper.findComponent({ name: 'Button' }); // Find the underlying PrimeVue button
      expect(primeButton.props().pt).toBeNull();
    });

    it('should pass user-provided pt styles and classes directly to PrimeVue Button', () => {
      const userPt = {
        root: {
          style: {
            fontSize: '20px',
            color: 'blue',
          },
          class: 'user-root-class',
        },
      };
      const wrapper = mount(VButton, {
        props: {
          pt: userPt,
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt).toEqual(userPt);
    });

    it('should pass user-provided pt class directly to PrimeVue Button', () => {
      const wrapper = mount(VButton, {
        props: {
          pt: {
            root: {
              class: 'my-custom-class',
            },
          },
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt.root.class).toBe('my-custom-class');
    });

    it('should pass user-provided pt with style and no class, resulting in undefined class for that section', () => {
      const userPt = {
        root: {
          style: { color: 'red' },
        },
      };
      const wrapper = mount(VButton, {
        props: {
          pt: userPt,
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt.root.style.color).toBe('red');
      expect(primeButton.props().pt.root.class).toBeUndefined();
    });

    it('should pass pt for any valid PrimeVue Button section', () => {
      const wrapper = mount(VButton, {
        props: {
          pt: {
            label: {
              // 'label' is a valid section in PrimeVue Button, but not in vButtonDefaultPt
              class: 'my-label-class',
              style: { fontWeight: 'bold' },
            },
          },
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt.label.class).toBe('my-label-class');
      expect(primeButton.props().pt.label.style.fontWeight).toBe('bold');
    });

    it('should pass through a section with an empty style object', () => {
      // This test verifies that VButton passes the pt object as is,
      // even if a section contains an empty style object.
      const userPt = {
        icon: {
          style: {},
        },
      };
      const wrapper = mount(VButton, {
        props: {
          pt: userPt,
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt.icon).toEqual({ style: {} });
    });

    it('should remove class property if it becomes undefined after merge (no default, no user class)', () => {
      // This test relies on a section not present in vButtonDefaultPt with a class,
      // and the user not providing a class for it.
      const wrapper = mount(VButton, {
        props: {
          pt: {
            badge: {
              // 'badge' section, not in vButtonDefaultPt with a class
              // No class provided by user
              style: { color: 'red' }, // provide some other prop to make the section exist
            },
          },
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt.badge).toBeDefined();
      expect(primeButton.props().pt.badge.class).toBeUndefined();
    });

    it('should pass through an empty section object', () => {
      // This test verifies that VButton passes the pt object as is,
      // even if a section is an empty object.
      const userPt = {
        nonExistentSection: {},
      };
      const wrapper = mount(VButton, {
        props: {
          pt: userPt,
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt.nonExistentSection).toEqual({});
    });
  });
});
