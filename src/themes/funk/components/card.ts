import { DtFunction } from '@/themes/funk/components/types';

export default {
  card: {
    root: {
      color: '{semantic.primary.900}',
      background: '{slate.50}',
      shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '0',
    },
    body: {
      padding: '1.5rem',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '600',
    },
    subtitle: {
      color: '{semantic.primary.900}',
    },
    caption: {
      gap: '2rem',
    },
    extend: {
      header: {
        padding: '0.75rem 1.5rem 0.75rem 1rem',
        color: '{semantic.primary.0}',
        backgroundColor: '{semantic.primary.800}',
        fontSize: '1.4rem',
        fontWeight: '600',
      },
    },
    css: ({ dt }: { dt: DtFunction }) => `
          .p-card-header {
            color: ${dt('card.header.color')};
            background-color: ${dt('card.header.backgroundColor')};
            padding: ${dt('card.header.padding')};
            font-size: ${dt('card.header.fontSize')};
          }
          .p-card-footer > div {
            display: flex;
            justify-content: end;
            gap: 1rem;
          }
        `,
  },
};
