type Props = {
  onClick: (val: boolean) => void;
  isOpen: boolean;
};
function Hamburger({ onClick, isOpen }: Props) {
  return (
    <button
      onClick={() => onClick(!isOpen)}
      className="flex text-2xl sm:hidden text-on-100"
    >
      {!isOpen ? (
        <div key="open">
          <i className="fa-regular fa-bars" />
        </div>
      ) : (
        <div key="closed">
          <i className="fa-regular fa-times" />
        </div>
      )}
    </button>
  );
}

export default Hamburger;
