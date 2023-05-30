import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';

type SelectorMap = {
  [stateName: string]: (state: RootState) => any;
};
const useRedux = (stateName: string) => {
    // state.adminState.value
  const value = useSelector((state: SelectorMap) => state[stateName]);
  const dispatch = useDispatch();
  return [value, dispatch];
};

export default useRedux;
