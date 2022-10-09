type Props = {
  label: string;
};
function TabButton({ label }: Props) {
  return (
    <div
      className={'flex relative items-center justify-center px-3 py-2 rounded'}
    >
      {label}
    </div>
  );
}

export default TabButton;
