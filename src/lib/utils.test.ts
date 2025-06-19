import { cn, formatPrice, formatDate, generateSlug, truncateText } from './utils';

describe('cn', () => {
  it('should return a single class name', () => {
    expect(cn('bg-red-500')).toBe('bg-red-500');
  });

  it('should return multiple class names', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
  });

  it('should handle conditional class names', () => {
    expect(cn('bg-red-500', true && 'text-white', false && 'p-4')).toBe('bg-red-500 text-white');
  });

  it('should handle conflicting class names with twMerge', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });
});

describe('formatPrice', () => {
  it('should format a whole number', () => {
    expect(formatPrice(100)).toBe('$100.00');
  });

  it('should format a decimal number', () => {
    expect(formatPrice(123.45)).toBe('$123.45');
  });

  it('should format with a different currency', () => {
    expect(formatPrice(50, 'EUR')).toBe('€50.00');
  });

  it('should format zero', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });

  it('should format a large number', () => {
    expect(formatPrice(1000000)).toBe('$1,000,000.00');
  });
});

describe('formatDate', () => {
  it('should format a Date object', () => {
    const date = new Date(2024, 0, 20); // January 20, 2024
    expect(formatDate(date)).toBe('January 20, 2024');
  });

  it('should format a date string', () => {
    expect(formatDate('2024-03-15T00:00:00.000Z')).toBe('March 15, 2024');
  });
});

describe('generateSlug', () => {
  it('should generate a slug from a simple string', () => {
    expect(generateSlug('Hello World')).toBe('hello-world');
  });

  it('should handle strings with spaces and mixed cases', () => {
    expect(generateSlug('  Another Example String  ')).toBe('another-example-string');
  });

  it('should handle strings with special characters', () => {
    expect(generateSlug('Special!@#$%^&*()_+Characters')).toBe('special-characters');
  });

  it('should remove leading/trailing hyphens/spaces', () => {
    expect(generateSlug('-Some Text-')).toBe('some-text');
    expect(generateSlug('  Some Text  ')).toBe('some-text');
  });

  it('should reduce multiple consecutive hyphens/spaces to one', () => {
    expect(generateSlug('Text---With---Multiple   Spaces')).toBe('text-with-multiple-spaces');
  });
});

describe('truncateText', () => {
  it('should not truncate if text length is less than or equal to maxLength', () => {
    expect(truncateText('short text', 20)).toBe('short text');
  });

  it('should truncate if text length is greater than maxLength', () => {
    expect(truncateText('This is a long text that needs truncation', 20)).toBe('This is a long text...');
  });

  it('should truncate at a word boundary', () => {
    expect(truncateText('This is a long text that needs truncation', 20)).toBe('This is a long text...');
    expect(truncateText('Another example here', 10)).toBe('Another...');
  });

  it('should handle an empty string', () => {
    expect(truncateText('', 10)).toBe('');
  });

  it('should handle maxLength of 0', () => {
    expect(truncateText('Any text', 0)).toBe('...');
  });
});
