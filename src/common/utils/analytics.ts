export const GA_TRACKING_ID = 'UA-REPLACE-ME';

export const trackPageview = (url: string) => {
  try {
    window.gtag('config', GA_TRACKING_ID, { page_location: url });
  } catch (err) {
    console.error('Failed sending metrics', err);
  }
};

export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: string;
}) => {
      try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (err) {
    console.error('Failed sending metrics', err);
  }
};
