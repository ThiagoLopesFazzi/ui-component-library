import { describe, it, expect, afterEach } from 'vitest'; // Removed vi from here
import { mount, VueWrapper } from '@vue/test-utils';
import VCard from '@/components/VCard/VCard.vue';
import PrimeCard from 'primevue/card'; // Ensure PrimeVue Card is imported for real use

describe('VCard', () => {
  let wrapper: VueWrapper<any>;

  afterEach(() => {
    if (wrapper && wrapper.exists()) {
      wrapper.unmount();
    }
  });

  describe('Component Tests with Real PrimeCard', () => {
    it('should render the PrimeVue Card component', () => {
      wrapper = mount(VCard, {
        global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
      });
      expect(wrapper.findComponent(PrimeCard).exists()).toBe(true);
    });

    it('should pass through pt options to PrimeVue Card', () => {
      const ptOptions = { root: { class: 'custom-card-root' } };
      wrapper = mount(VCard, {
        props: { pt: ptOptions },
        global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
      });
      const primeCardComponent = wrapper.findComponent(PrimeCard);
      expect(primeCardComponent.props('pt')).toEqual(ptOptions);
    });

    describe('Slot Passthrough with Real PrimeCard', () => {
      it('should render header slot content in PrimeCard', () => {
        const headerContent = '<div class="test-header">Header Content</div>';
        wrapper = mount(VCard, {
          slots: { header: headerContent },
          global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
        });
        // Check within the PrimeCard component for the slot content
        const primeCardWrapper = wrapper.findComponent(PrimeCard);
        expect(primeCardWrapper.find('.test-header').exists()).toBe(true);
        expect(primeCardWrapper.find('.test-header').text()).toBe(
          'Header Content'
        );
      });

      it('should render title slot content in PrimeCard', () => {
        const titleContent = '<div class="test-title">Title Content</div>';
        wrapper = mount(VCard, {
          slots: { title: titleContent },
          global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
        });
        const primeCardWrapper = wrapper.findComponent(PrimeCard);
        expect(primeCardWrapper.find('.test-title').exists()).toBe(true);
        expect(primeCardWrapper.find('.test-title').text()).toBe(
          'Title Content'
        );
      });

      it('should render subtitle slot content in PrimeCard', () => {
        const subtitleContent =
          '<div class="test-subtitle">Subtitle Content</div>';
        wrapper = mount(VCard, {
          slots: { subtitle: subtitleContent },
          global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
        });
        const primeCardWrapper = wrapper.findComponent(PrimeCard);
        expect(primeCardWrapper.find('.test-subtitle').exists()).toBe(true);
        expect(primeCardWrapper.find('.test-subtitle').text()).toBe(
          'Subtitle Content'
        );
      });

      it('should render content slot content in PrimeCard', () => {
        const contentSlot = '<div class="test-content">Main Content</div>';
        wrapper = mount(VCard, {
          slots: { content: contentSlot },
          global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
        });
        const primeCardWrapper = wrapper.findComponent(PrimeCard);
        expect(primeCardWrapper.find('.test-content').exists()).toBe(true);
        expect(primeCardWrapper.find('.test-content').text()).toBe(
          'Main Content'
        );
      });

      it('should render footer slot content in PrimeCard', () => {
        const footerContent = '<div class="test-footer">Footer Content</div>';
        wrapper = mount(VCard, {
          slots: { footer: footerContent },
          global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
        });
        const primeCardWrapper = wrapper.findComponent(PrimeCard);
        expect(primeCardWrapper.find('.test-footer').exists()).toBe(true);
        expect(primeCardWrapper.find('.test-footer').text()).toBe(
          'Footer Content'
        );
      });

      it('should render default slot content in PrimeCard if no named slots are provided in VCard', () => {
        const defaultSlotContent =
          '<div class="test-default">Default Slot Content</div>';
        wrapper = mount(VCard, {
          slots: { default: defaultSlotContent },
          global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
        });
        expect(wrapper.vm.hasNamedSlots).toBe(false);
        const primeCardWrapper = wrapper.findComponent(PrimeCard);
        expect(primeCardWrapper.find('.test-default').exists()).toBe(true);
        expect(primeCardWrapper.find('.test-default').text()).toBe(
          'Default Slot Content'
        );
      });

      it('VCard should not render its default slot content if a named slot is also provided', () => {
        const headerContent = '<div class="test-header">Header</div>';
        const defaultSlotContent =
          '<div class="test-default">Default Content Not Expected Here</div>';
        wrapper = mount(VCard, {
          slots: {
            header: headerContent,
            default: defaultSlotContent,
          },
          global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
        });
        expect(wrapper.vm.hasNamedSlots).toBe(true);
        const primeCardWrapper = wrapper.findComponent(PrimeCard);
        expect(primeCardWrapper.find('.test-header').exists()).toBe(true);
        // VCard's logic: if hasNamedSlots is true, its own <template v-if="!hasNamedSlots"><slot /></template> is skipped.
        // Therefore, the default slot content given to VCard is NOT passed to PrimeCard by that template.
        expect(primeCardWrapper.find('.test-default').exists()).toBe(false);
      });
    });
  });

  describe('Unit Tests for VCard specific logic', () => {
    it('hasNamedSlots computed property works correctly', () => {
      wrapper = mount(VCard, {
        slots: { header: '<div>Header</div>' },
        global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
      });
      expect(wrapper.vm.hasNamedSlots).toBe(true);
      wrapper.unmount();

      wrapper = mount(VCard, {
        slots: { default: '<div>Default</div>' },
        global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
      });
      expect(wrapper.vm.hasNamedSlots).toBe(false);
      wrapper.unmount();

      wrapper = mount(VCard, {
        slots: {
          title: '<div>Title</div>',
          subtitle: '<div>Subtitle</div>',
        },
        global: { components: { Card: PrimeCard } }, // Changed PrimeCard to Card: PrimeCard
      });
      expect(wrapper.vm.hasNamedSlots).toBe(true);
      wrapper.unmount();

      wrapper = mount(VCard, { global: { components: { Card: PrimeCard } } }); // No slots // Changed PrimeCard to Card: PrimeCard
      expect(wrapper.vm.hasNamedSlots).toBe(false);
    });
  });
});
