import { describe, it, expect } from 'vitest';
import VCard, { VCard as VCardNamed } from './index';

describe('VCard index', () => {
  it('should export VCard as default', () => {
    expect(VCard).toBeDefined();
  });

  it('should export VCard as named export', () => {
    expect(VCardNamed).toBeDefined();
  });
});
