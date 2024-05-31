import { Outlet, useNavigation } from 'react-router-dom';
import './App.css'
import Header from './Components/Shared/Header/Header';
import Loading from './Components/Loading/Loading';

function App() {
  const navigation = useNavigation();

  return (
    <div className='app-container'>
      <Header />
      {navigation.state === 'loading' ? <Loading /> : <Outlet />}
    </div>
  )
}

export default App;