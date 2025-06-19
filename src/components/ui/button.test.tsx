import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from './button'; // Assuming ButtonProps is exported, or define locally if not

describe('Button Component', () => {
  // Helper to check base classes, variant classes, and size classes
  // Note: This is a simplified checker. For exact match, all classes from cn() in the component would need to be listed.
  // For robustness, it's better to check for specific functional classes rather than all visual utility classes.

  test('renders with default props', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90'); // Default variant
    expect(button).toHaveClass('h-10 py-2 px-4'); // Default size
    expect(button.textContent).toBe('Click Me');
  });

  const variants: ButtonProps['variant'][] = ['destructive', 'outline', 'secondary', 'ghost', 'link'];
  variants.forEach((variant) => {
    test(`renders with variant ${variant}`, () => {
      render(<Button variant={variant}>Click Me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });
      // Specific classes for each variant (from component source)
      if (variant === 'destructive') {
        expect(button).toHaveClass('bg-destructive text-destructive-foreground hover:bg-destructive/90');
      } else if (variant === 'outline') {
        expect(button).toHaveClass('border border-input hover:bg-accent hover:text-accent-foreground');
      } else if (variant === 'secondary') {
        expect(button).toHaveClass('bg-secondary text-secondary-foreground hover:bg-secondary/80');
      } else if (variant === 'ghost') {
        expect(button).toHaveClass('hover:bg-accent hover:text-accent-foreground');
      } else if (variant === 'link') {
        expect(button).toHaveClass('underline-offset-4 hover:underline text-primary');
      }
    });
  });

  const sizes: ButtonProps['size'][] = ['sm', 'lg', 'icon'];
  sizes.forEach((size) => {
    test(`renders with size ${size}`, () => {
      render(<Button size={size}>{size === 'icon' ? '<i>I</i>' : 'Click Me'}</Button>);
      const button = screen.getByRole('button');
      // Specific classes for each size (from component source)
      if (size === 'sm') {
        expect(button).toHaveClass('h-9 px-3 rounded-md');
      } else if (size === 'lg') {
        expect(button).toHaveClass('h-11 px-8 rounded-md');
      } else if (size === 'icon') {
        // For 'icon' size, children might be an icon component, so text content check might not be "Click Me"
        expect(button).toHaveClass('h-10 w-10');
         if (size === 'icon') {
            // expect(button.innerHTML).toBe('<i>I</i>'); // Example if icon is passed as HTML string
        }
      }
    });
  });

  test('onClick handler is called', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50 disabled:pointer-events-none');
  });

  test('passes through additional HTML attributes', () => {
    render(<Button data-testid="custom-button">Click Me</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Button className="my-custom-class">Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('my-custom-class');
    // Check if it also has default classes (e.g., from variant default)
    expect(button).toHaveClass('bg-primary');
  });
});
