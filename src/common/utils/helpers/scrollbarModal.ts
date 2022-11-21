function handleScrollbarChange(open: boolean) {
  const body = document.querySelector('body') as HTMLBodyElement;
  if (open && typeof window !== 'undefined') {
    if (body.offsetHeight >= 939) {
      body.style.overflowY = 'scroll';
    }
    body.style.position = 'fixed';
    body.style.width = '100%';
  } else if (!open && body) {
    body.style.overflowY = 'auto';
    body.style.position = 'relative';
    body.style.width = 'auto';
  }
}
export default handleScrollbarChange;
