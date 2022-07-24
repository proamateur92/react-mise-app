import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMiseDB } from '../src/redux/modules/miseSlice';
import ViewMise from './Components/ViewMise';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMiseDB());
  }, []);
  return (
    <div className='App'>
      <ViewMise />
    </div>
  );
}

export default App;
