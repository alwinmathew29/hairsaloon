/**
 * Global error handler to prevent Chrome extension errors from breaking the app
 */

// Prevent Chrome extension errors from crashing the app
if (typeof window !== 'undefined') {
  // Handle unhandled errors
  window.addEventListener('error', (event) => {
    // Check if error is from Chrome extensions
    if (
      event.filename && (
        event.filename.includes('chrome-extension://') ||
        event.filename.includes('moz-extension://') ||
        event.filename.includes('safari-extension://')
      )
    ) {
      console.warn('Ignored extension error:', event.error);
      event.preventDefault();
      return false;
    }

    // Check for common Chrome extension error messages
    if (event.message && (
      event.message.includes('Cannot read properties of undefined') ||
      event.message.includes('onChanged') ||
      event.message.includes('onUpdated') ||
      event.message.includes('onClicked') ||
      event.message.includes('onCreated') ||
      event.message.includes('chrome') ||
      event.message.includes('_jsxDEV is not a function')
    )) {
      console.warn('Ignored potential extension error:', event.message);
      event.preventDefault();
      return false;
    }
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && typeof event.reason === 'string') {
      if (
        event.reason.includes('chrome-extension://') ||
        event.reason.includes('Extension') ||
        event.reason.includes('onChanged') ||
        event.reason.includes('onUpdated')
      ) {
        console.warn('Ignored extension promise rejection:', event.reason);
        event.preventDefault();
        return false;
      }
    }
  });

  // Monkey-patch console.error to filter out extension errors
  const originalConsoleError = console.error;
  console.error = (...args) => {
    const errorMessage = args.join(' ');
    if (
      errorMessage.includes('chrome-extension://') ||
      errorMessage.includes('Cannot read properties of undefined') && (
        errorMessage.includes('onChanged') ||
        errorMessage.includes('onUpdated') ||
        errorMessage.includes('onClicked') ||
        errorMessage.includes('onCreated')
      )
    ) {
      console.warn('Filtered extension error:', ...args);
      return;
    }
    originalConsoleError.apply(console, args);
  };
}

export {}; // Make this a module
