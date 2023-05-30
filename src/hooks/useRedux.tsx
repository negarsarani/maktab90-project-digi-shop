import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';

type SelectorMap = (state: RootState) => any;


const useRedux = (stateName:SelectorMap ) => {
  const value = useSelector(stateName)

  const dispatch = useDispatch();
  return [value, dispatch];
};

export default useRedux;
