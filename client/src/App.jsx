import { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import FooterComponent from './components/footerComponent';
import { observer } from 'mobx-react-lite';
import { Context } from './main';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = useContext(Context)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally( () => setLoading(false) )
    }, 1000)
  }, [])

  if(loading) {
    return <div className="loader" style={{margin: 'auto', position: 'relative', top: '20vw'}}></div>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <FooterComponent/>
    </BrowserRouter>
  );
})

export default App;
