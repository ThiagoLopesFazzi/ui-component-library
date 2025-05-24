import { describe, it, expect } from 'vitest';
import VButton, { VButton as VButtonNamed } from './index';

describe('VButton index', () => {
  it('should export VButton as default', () => {
    expect(VButton).toBeDefined();
  });

  it('should export VButton as named export', () => {
    expect(VButtonNamed).toBeDefined();
  });
});
