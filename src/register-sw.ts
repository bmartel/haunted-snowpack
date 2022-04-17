// ServiceWorker
if (import.meta.env.MODE === 'production' && 'serviceWorker' in navigator) {
  const sw = async () => {
    const { Workbox } = await import('workbox-window');
    const wb = new Workbox('/sw.js');

    // TODO: handle this with ui confirmation
    // @see https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
    wb.addEventListener('controlling', () => {
      window.location.reload();
    });

    wb.messageSkipWaiting();
    wb.register();
  };
  sw();
}

