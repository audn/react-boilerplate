type Props = {
  listening: any;
  setListening: (value: boolean) => void;
  menuRef: any;
  setIsOpen: (value: boolean) => void;
};
function listenForOutsideClick({
  listening,
  setListening,
  menuRef,
  setIsOpen,
}: Props) {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach(() => {
      document.addEventListener(`click`, (evt) => {
        if (menuRef.current && menuRef.current.contains(evt.target)) return;
        setIsOpen(false);
      });
    });
  };
}
export default listenForOutsideClick;
