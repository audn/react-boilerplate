import Dropdown from '../Dropdown';
import SyntaxHighlight from '../layout/SyntaxHighlight';

function DropdownExample() {
  const dropdown = [
    {
      label: 'My profile',
      icon: 'fa-solid fa-user',
      route: '#',
    },
    {
      label: 'Settings',
      icon: 'fa-solid fa-cog',
      route: '#',
    },
    {
      label: 'Sign out',
      icon: 'fa-solid fa-sign-out-alt',
      route: '#',
    },
  ];
  return (
    <div className="flex flex-col items-start mt-10 lg:flex-row-reverse">
      <div className="w-full p-5 rounded-lg lg:max-w-lg lg:ml-5 bg-types-100">
        <Dropdown
          list={dropdown}
          options={{ caret: true, box: true, animateCaret: true }}
        >
          Click me
        </Dropdown>
      </div>
      <div className="mt-10 lg:mt-0 w-full !text-sm">
        <SyntaxHighlight
          code={`const dropdown = [
    {
        label: 'My profile',
        icon: 'fa-solid fa-user',
        route: '#',
    },
    {
        label: 'Settings',
        icon: 'fa-solid fa-cog',
        route: '#',
    },
    {
        label: 'Sign out',
        icon: 'fa-solid fa-sign-out-alt',
        route: '#',
    },
];
<Dropdown
    list={dropdown}
    options={{ caret: true, box: true, animateCaret: true }}
>
    Click me
</Dropdown>`}
        />
      </div>
    </div>
  );
}

export default DropdownExample;
