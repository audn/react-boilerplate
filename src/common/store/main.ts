import create from 'zustand';

type Store = {
  test: boolean;
};
const useMainState = create<Store>(() => ({
  test: false,
}));

export default useMainState;

{
  /* 
usage:

const state = useMainState(s => s.test);

useMainState.setState({test: false});

*/
}
