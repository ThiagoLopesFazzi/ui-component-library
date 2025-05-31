import { DtFunction } from '@/themes/funk/components/types';

export default {
  datatable: {
    extend: {
      root: {
        borderRadius: '0.2rem',
        height: '4rem',
        backgroundColor: '#9d1804',
        hoverBackgroundColor: '#661a0e',
        outlinedBorderColor: '#454241',
        hoverSecondaryBackgroundColor: '#eeeded',
      },
    },
    css: ({ dt }: { dt: DtFunction }) => `
      .p-datatable {
        font-size: 1.3rem;
        line-height: 1.8rem;
      }

      .p-datatable-thead tr {
        height: 6rem;
      }

      .p-datatable-column-title  {
        font-size: 1.2rem;
        font-weight: 300;
        text-align: left;
        color: #000;
      }

      .p-datatable-header-cell {
        font-size: 1.2rem;
        border-bottom: 0.1rem solid #6a6766;
        font-weight: 300;
        text-align: left;
        color: #000;
        background: #fff;
        padding: .1rem .4rem 1rem 1.6rem;
      }

      .p-datatable-tbody > tr {
        background: #fff;
        height: 6rem;
        transition-behavior: normal;
        transition-property: background;
        transition-duration: 0.5s;
        transition-timing-function: ease-in;
        transition-delay: 0s;
      }

      .p-datatable-tbody > tr:hover {
        background: #eeeded;
        cursor: pointer;
      }

      .p-datatable-tbody > tr > td {
        padding: .4rem 1.6rem .4rem 1rem;
        cursor: pointer;
      }

      .p-datatable-column-header-content {
        gap: .6rem;
      }

      .p-datatable-column-header-content > span {
        height: 1.8rem;
      }

      .p-datatable-column-header-content span[data-pc-section="sort"] {
        width: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .p-datatable-column-header-content span[data-pc-section="sort"]:active {
        color: red;
      }

      .p-datatable-sort-icon {
        width: 1.8rem;
        min-width: 1.8rem;
        height: 1.8rem;
        min-height: 1.8rem;
        margin-left: .6rem;
        color: #000;
      }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
      background: red;
      color: red;
    }
    `,
  },
};
