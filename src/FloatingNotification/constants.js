export const TYPES = {
  standard: 'standard',
  success: 'success',
  destructive: 'destructive',
  warning: 'warning',
  premium: 'premium',
  preview: 'preview',
  dark: 'dark',
};

const dataHookPrefix = 'floating-notification';

export const dataHooks = {
  button: `${dataHookPrefix}-button`,
  textButton: `${dataHookPrefix}-text-button`,
  notificationText: `${dataHookPrefix}-text`,
  closeButton: `${dataHookPrefix}-close-button`,
};
