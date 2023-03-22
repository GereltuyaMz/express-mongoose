import './App.css';
import Router from './routes';
import { useState, createContext } from 'react';
import { Layout } from './components/Layout';
import { ToastContainer, toast } from 'react-toastify';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <Router />
        <ToastContainer />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
