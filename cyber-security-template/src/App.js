import './App.css';
import About from './components/About/About';
import CyberSecurity from './components/CyberSecurity/CyberSecurity';
import Features from './components/Features/Features';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='silver-bg'>
      <Header />


        <CyberSecurity />

        <Features />
      

        <About />
    </div>
  );
}

export default App;
