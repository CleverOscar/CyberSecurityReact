import './App.css';
import CyberSecurity from './components/CyberSecurity/CyberSecurity';
import Features from './components/Features/Features';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='silver-bg'>
      <Header />

      <CyberSecurity />

      <Features />
    </div>
  );
}

export default App;
