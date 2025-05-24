import { describe, it, expect } from 'vitest';
import { VModal } from './index'; // VModal is only a named export from this index.ts

describe('VModal index', () => {
  it('should export VModal as named export', () => {
    expect(VModal).toBeDefined();
  });
});
