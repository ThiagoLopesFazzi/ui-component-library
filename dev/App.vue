<template>
  <div class="page-container">
    <header class="app-header">
      <h1>UI Component Library</h1>
      <p class="text-lg text-gray-600">
        Showcasing PrimeVue 4 Integration & Custom Components
      </p>
    </header>

    <div class="container">
      <!-- PrimeVue 4 Message Component Demo -->
      <section class="component-section card">
        <h2 class="section-title">PrimeVue 4 Integration</h2>
        <Message severity="success" :closable="false" class="w-full">
          <span>PrimeVue 4 is successfully installed and working!</span>
        </Message>

        <div class="grid mt-5">
          <div class="col-12 md:col-6">
            <label for="calendar-demo" class="font-semibold block mb-2"
              >Calendar</label
            >
            <DatePicker
              id="calendar-demo"
              v-model="date"
              showIcon
              class="w-full"
            />
          </div>
          <div class="col-12 md:col-6">
            <label for="dropdown-demo" class="font-semibold block mb-2"
              >Dropdown</label
            >
            <Select
              id="dropdown-demo"
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              placeholder="Select a City"
              class="w-full"
            />
          </div>
        </div>
      </section>

      <section class="component-section card">
        <h2 class="section-title">VCard Component</h2>
        <div class="component-demo w-full">
          <VCard class="w-full">
            <template #header>
              <div class="flex align-items-center justify-content-between">
                <span class="text-xl font-bold">Card Header</span>
                <i class="pi pi-cog text-gray-500"></i>
              </div>
            </template>
            <template #title> Card Title </template>
            <template #subtitle> Card Subtitle </template>
            <template #content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </template>
            <template #footer>
              <div class="flex flex-wrap justify-content-end gap-2">
                <Button label="Cancel" severity="secondary" />
                <Button label="Save" severity="primary" />
              </div>
            </template>
          </VCard>
        </div>
      </section>

      <section class="component-section card">
        <h2 class="section-title">VModal Component</h2>
        <div class="component-demo w-full">
          <div class="grid grid-cols-4 gap-[1rem]">
            <div class="demo-box">
              <h3 class="demo-title">Basic Modal</h3>
              <Button
                label="Open Basic Modal"
                severity="primary"
                @click="showBasicModal = true"
                class="w-full"
              />
            </div>

            <div class="demo-box">
              <h3 class="demo-title">Large Modal with Description</h3>
              <Button
                label="Open Large Modal"
                severity="info"
                @click="showLargeModal = true"
                class="w-full"
              />
            </div>

            <div class="demo-box">
              <h3 class="demo-title">Confirmation Modal</h3>
              <Button
                label="Delete Item"
                severity="danger"
                @click="showConfirmModal = true"
                class="w-full"
              />
            </div>

            <div class="demo-box">
              <h3 class="demo-title">Custom Header Modal</h3>
              <Button
                label="Open Custom Modal"
                severity="warning"
                @click="showCustomModal = true"
                class="w-full"
              />
            </div>
          </div>
          <!-- Modal Definitions -->
          <VModal
            v-model:visible="showBasicModal"
            title="Basic Modal"
            :closeOnOutsideClick="true"
            :closeOnEscape="true"
          >
            <p>
              This is a basic modal dialog. You can close it by clicking the X
              button, Cancel button, pressing ESC, or clicking outside.
            </p>
          </VModal>
          <VModal
            v-model:visible="showLargeModal"
            title="Large Modal Example"
            description="This modal has a description for better accessibility"
            size="large"
            :responsive="true"
          >
            <div class="p-4">
              <h4>Modal Content</h4>
              <p>
                This is a larger modal with more content. It includes a
                description for accessibility and demonstrates the large size
                option.
              </p>
              <div class="mt-3">
                <label for="modal-input" class="block mb-2"
                  >Sample Input:</label
                >
                <input
                  id="modal-input"
                  type="text"
                  placeholder="Enter some text..."
                  class="w-full p-2 border border-gray-300 rounded"
                  v-model="modalInput"
                />
              </div>
            </div>
            <template #footer>
              <div class="flex justify-content-end gap-2">
                <Button
                  label="Cancel"
                  severity="secondary"
                  @click="showLargeModal = false"
                />
                <Button label="Save" severity="success" @click="handleSave" />
              </div>
            </template>
          </VModal>
          <VModal
            v-model:visible="showConfirmModal"
            title="Confirm Deletion"
            size="small"
            :closeOnOutsideClick="false"
            :closeOnEscape="false"
          >
            <div class="text-center p-4">
              <i
                class="pi pi-exclamation-triangle text-orange-500 text-6xl mb-3"
              ></i>
              <p class="mb-3">
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>
            </div>
            <template #footer>
              <div class="flex justify-content-center gap-2">
                <Button
                  label="Cancel"
                  severity="secondary"
                  @click="showConfirmModal = false"
                />
                <Button
                  label="Delete"
                  severity="danger"
                  @click="handleDelete"
                />
              </div>
            </template>
          </VModal>
          <VModal
            v-model:visible="showCustomModal"
            title="This title will be replaced"
            size="medium"
          >
            <template #header>
              <div
                class="flex align-items-center gap-3 p-3 bg-gray-100 rounded-t-lg"
              >
                <i class="pi pi-star text-yellow-500 text-2xl"></i>
                <div>
                  <h3 class="m-0 text-xl font-semibold">Custom Header</h3>
                  <p class="m-0 text-sm text-gray-600">
                    With custom styling and icons
                  </p>
                </div>
              </div>
            </template>
            <div class="p-4">
              <p>
                This modal demonstrates custom header content using slots. The
                header can contain any custom HTML structure.
              </p>
              <div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500">
                <p class="m-0 text-blue-700">
                  <i class="pi pi-info-circle mr-2"></i>
                  Custom headers are great for branding or providing additional
                  context.
                </p>
              </div>
            </div>
          </VModal>
        </div>
      </section>

      <section class="component-section card">
        <h2 class="section-title">Button Component</h2>
        <div class="grid grid-cols-4 gap-[1rem]">
          <div class="demo-box">
            <h3 class="demo-title">Severities</h3>
            <div class="flex flex-wrap gap-[1rem]">
              <Button
                label="Primary"
                severity="primary"
                class="w-full sm:w-auto"
              />
              <Button
                label="Secondary"
                severity="secondary"
                class="w-full sm:w-auto"
              />
              <Button
                label="Success"
                severity="success"
                class="w-full sm:w-auto"
              />
              <Button label="Info" severity="info" class="w-full sm:w-auto" />
              <Button
                label="Warning"
                severity="warn"
                class="w-full sm:w-auto"
              />
              <Button
                label="Danger"
                severity="danger"
                class="w-full sm:w-auto"
              />
            </div>
          </div>

          <div class="demo-box">
            <h3 class="demo-title">Variants</h3>
            <div class="flex flex-wrap gap-[1rem]">
              <Button
                label="Default"
                severity="primary"
                class="w-full sm:w-auto"
              />
              <Button
                label="Outlined"
                severity="primary"
                outlined
                class="w-full sm:w-auto"
              />
              <Button
                label="Raised"
                severity="primary"
                raised
                class="w-full sm:w-auto"
              />
              <Button
                label="Rounded"
                severity="primary"
                rounded
                class="w-full sm:w-auto"
              />
              <Button
                label="Text"
                severity="primary"
                text
                class="w-full sm:w-auto"
              />
            </div>
          </div>

          <div class="demo-box">
            <h3 class="demo-title">With Icons</h3>
            <div class="flex flex-wrap gap-[1rem]">
              <Button
                label="Save"
                icon="pi pi-save"
                severity="primary"
                class="w-full sm:w-auto"
              />
              <Button
                label="Delete"
                icon="pi pi-trash"
                severity="danger"
                class="w-full sm:w-auto"
              />
              <Button
                label="Search"
                icon="pi pi-search"
                iconPos="right"
                severity="info"
                class="w-full sm:w-auto"
              />
              <Button icon="pi pi-check" severity="success" rounded />
              <Button icon="pi pi-bookmark" severity="warn" rounded outlined />
            </div>
          </div>

          <div class="demo-box">
            <h3 class="demo-title">States & Sizes</h3>
            <div class="flex flex-wrap gap-[1rem]">
              <Button label="Loading" loading class="w-full sm:w-auto" />
              <Button
                label="Disabled"
                disabled
                severity="primary"
                class="w-full sm:w-auto"
              />
              <Button
                label="With Badge"
                badge="3"
                severity="primary"
                class="w-full sm:w-auto"
              />
              <Button
                label="Small"
                size="small"
                severity="primary"
                class="w-full sm:w-auto"
              />
              <Button
                label="Large"
                size="large"
                severity="primary"
                class="w-full sm:w-auto"
                åß
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Demo data
const date = ref(new Date());
const selectedCity = ref(null);
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'London', code: 'LDN' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Tokyo', code: 'TKY' },
]);

// Modal demo data
const showBasicModal = ref(false);
const showLargeModal = ref(false);
const showConfirmModal = ref(false);
const showCustomModal = ref(false);
const modalInput = ref('');

// Modal event handlers
const handleSave = () => {
  console.log('Saving data:', modalInput.value);
  showLargeModal.value = false;
  modalInput.value = '';
};

const handleDelete = () => {
  console.log('Item deleted');
  showConfirmModal.value = false;
};
</script>

<style scoped>
/* General Page Styles */
.page-container {
  min-height: 100vh;
  max-width: 60vw;
  margin: 0 auto;
}

/* Component Section Styling */
.component-section {
  margin-bottom: 2.5rem; /* Increased spacing between sections */
  background-color: var(--surface-card, #ffffff);
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 2rem; /* Add padding inside the card */
}

.section-title {
  font-size: 1.75rem; /* Larger section titles */
  font-weight: 600;
  color: var(--text-color, #334155); /* Use PrimeVue text color */
  border-bottom: 2px solid var(--primary-color, #3b82f6); /* Accent border */
  padding-bottom: 0.75rem;
  margin-bottom: 1.5rem;
}

/* Component Demo Area Styling */
.component-demo {
  margin-top: 1rem;
  /* Removed padding from here as it's now on .component-section or .demo-box */
}

.demo-box {
  background-color: var(
    --surface-ground,
    #f8f9fa
  ); /* Slightly different background for demo boxes */
  border: 1px solid var(--surface-border, #dee2e6);
  border-radius: 6px;
  padding: 1.5rem;
  height: 100%; /* Make boxes in a row equal height */
  display: flex;
  flex-direction: column;
}

.demo-title {
  font-size: 1.1rem; /* Slightly larger demo titles */
  font-weight: 500;
  color: var(
    --text-color-secondary,
    #64748b
  ); /* Use PrimeVue secondary text color */
  margin-bottom: 1.25rem; /* Increased margin */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .container {
    padding: 0 1rem 1rem;
  }
  .component-section {
    padding: 1.5rem;
  }
  .demo-box {
    padding: 1rem;
  }
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color-secondary, #4b5563);
}

.grid {
  margin-left: -0.75rem; /* Counteract padding on columns for alignment */
  margin-right: -0.75rem;
}
.grid > [class*='col-'] {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
</style>
