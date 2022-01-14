import React from 'react';
import Main from './sites/utils/components/layout/main/Main';
import WelcomeSite from './sites/welcome/Welcome';
import { useNavigate } from 'react-router-dom';
import AboutSite from './sites/about/About';
import './App.css';
// import InfoCard from './sites/about/InfoCard';

function App() 
{
  useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('site') || 'welcome';

  return (
      <div className="App">
        <Main>
          { site === 'welcome' && <WelcomeSite/>}
          { site === 'about' && <AboutSite/> }
          {/* <WelcomeSite/>
          <InfoCard name={'Personal Information'}>
            <ul >
              <li> I was born and Raised in the city of Guayaquil, located in Ecuador, South America.</li>
              <li> Since I was a kid I have a special interest in science and computation.</li>
              <li> Went to the german school in Guayaquil. There I learned German and English fluently.</li>
              <li> The last days of high school I decided to continue with college in Germany.</li>
            </ul>
          </InfoCard> */}
        </Main>
      </div>
  );
}

export default App;
