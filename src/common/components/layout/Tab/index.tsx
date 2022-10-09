import { useEffect, useRef, useState } from 'react';
import TabButton from './components/Button';
import TabWrapper from './components/Wrapper';

type Props = {
  list: { label: string }[];
  view: string;
  onChange: (val: any) => void;
};
function TabSelector({ list, view, onChange }: Props) {
  const [tab, setTab] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);

  const tabsRef = useRef<Partial<[any]>>([]);
  let currentTab = tabsRef.current[tab] as HTMLElement;

  function setTabPosition() {
    setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
    setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
  }

  useEffect(() => {
    setTabPosition();
    window.addEventListener('resize', setTabPosition);
    return () => window.removeEventListener('resize', setTabPosition);
  }, [tab, currentTab]);

  function mouseEvent(index: number) {
    const tab = tabsRef.current[index];
    setTabUnderlineLeft(tab?.offsetLeft ?? 0);
    setTabUnderlineWidth(tab?.clientWidth ?? 0);
  }

  function onClick(label: string, index: number) {
    onChange(label);
    setTab(index);
  }
  return (
    <TabWrapper>
      <div
        className="absolute inset-0 h-auto text-white duration-300 ease-out rounded-md pointer-events-none bg-types-200 transiton-all"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
      {list.map((x, i) => (
        <button
          onMouseEnter={() => mouseEvent(i)}
          onMouseLeave={setTabPosition}
          className={x.label == view ? 'text-white' : ''}
          onClick={() => onClick(x.label, i)}
          key={i}
          ref={(el) => (tabsRef.current[i] = el)}
        >
          <TabButton {...x} />
        </button>
      ))}
    </TabWrapper>
  );
}

export default TabSelector;
