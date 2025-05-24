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
    it('should apply default pt styles and classes', () => {
      const wrapper = mount(VButton);
      const primeButton = wrapper.findComponent({ name: 'Button' }); // Find the underlying PrimeVue button
      expect(primeButton.props().pt.root.style.fontSize).toBe('14px');
      expect(primeButton.props().pt.root.style.borderRadius).toBe('6px');
      expect(primeButton.props().pt.root.class).toContain(
        'v-button-default-root'
      );
    });

    it('should merge user-provided pt styles with default, user taking precedence', () => {
      const wrapper = mount(VButton, {
        props: {
          pt: {
            root: {
              style: {
                fontSize: '20px', // Override default
                color: 'blue', // Add new
              },
            },
          },
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt.root.style.fontSize).toBe('20px');
      expect(primeButton.props().pt.root.style.borderRadius).toBe('6px'); // Default should persist
      expect(primeButton.props().pt.root.style.color).toBe('blue');
    });

    it('should use user-provided pt class, overriding default class', () => {
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

    it('should apply default pt class if user pt provides style but no class for root', () => {
      const wrapper = mount(VButton, {
        props: {
          pt: {
            root: {
              style: { color: 'red' },
            },
          },
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      expect(primeButton.props().pt.root.class).toContain(
        'v-button-default-root'
      );
    });

    it('should handle pt for sections not defined in vButtonDefaultPt', () => {
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

    it('should remove style property if it becomes an empty object after merge', () => {
      // This test relies on a section not present in vButtonDefaultPt,
      // and the user providing an empty style object for it.
      // The component logic should remove the style object, and if the section becomes empty, remove the section.
      const wrapper = mount(VButton, {
        props: {
          pt: {
            icon: {
              // 'icon' is another valid section, not in vButtonDefaultPt with styles
              style: {},
            },
          },
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      // Expect the 'icon' section itself to be absent from the merged PT because it became empty
      expect(primeButton.props().pt.icon).toBeUndefined();
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

    it('should remove a section if it becomes an empty object after merge', () => {
      // This test relies on a section not present in vButtonDefaultPt,
      // and the user providing an empty object for it.
      const wrapper = mount(VButton, {
        props: {
          pt: {
            nonExistentSection: {},
          },
        },
      });
      const primeButton = wrapper.findComponent({ name: 'Button' });
      // Expect the 'nonExistentSection' to be absent from the merged PT
      expect(primeButton.props().pt.nonExistentSection).toBeUndefined();
    });

    it('should correctly merge when pt prop is not provided', () => {
      const wrapper = mount(VButton, {
        props: {
          label: 'Test Button',
          // pt prop is intentionally not provided to test the default null value
        },
      });

      // Access the computed property through the Vue instance
      const vm = wrapper.vm as any;
      const ptOutput = vm.mergedPt;

      // Expect the default vButtonDefaultPt to be used as userPt will be {}
      // and vButtonDefaultPt contains the base class 'v-button-default-root'
      expect(ptOutput.root.class).toContain('v-button-default-root');
      // Add more specific assertions if vButtonDefaultPt has more structure
      // For example, if vButtonDefaultPt.root.class is expected to be exactly 'v-button some-default-class'
      // then expect(ptOutput.root.class).toBe('v-button some-default-class');
    });
  });
});
