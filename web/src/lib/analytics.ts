/**
 * Google Analytics 4 Event Tracking Utilities
 *
 * Usage:
 * import { trackEvent } from '@/lib/analytics';
 *
 * trackEvent('form_submit', { form_name: 'contact' });
 */

type GAEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

/**
 * Send custom event to Google Analytics 4
 */
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * Track form submission
 */
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

/**
 * Track Calendly booking click
 */
export const trackCalendlyClick = (location: string = 'unknown') => {
  trackEvent('calendly_click', {
    button_location: location,
  });
};

/**
 * Track WhatsApp click
 */
export const trackWhatsAppClick = (location: string = 'unknown') => {
  trackEvent('whatsapp_click', {
    button_location: location,
  });
};

/**
 * Track ROI Calculator interaction
 */
export const trackCalculatorInteraction = (action: string, value?: number) => {
  trackEvent('calculator_interaction', {
    interaction_type: action,
    calculator_value: value,
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaName: string, destination: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_destination: destination,
  });
};

/**
 * Track resource download
 */
export const trackDownload = (resourceName: string, resourceType: string) => {
  trackEvent('download', {
    resource_name: resourceName,
    resource_type: resourceType,
  });
};

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
