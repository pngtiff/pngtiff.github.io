import './style.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Intro from './components/Intro'
import Youtube from './components/Youtube'
import Pricing from './components/Pricing';

function App() {
  return (
    <>
      <Header />
      <Signup />
      <Intro />
      <Youtube />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
