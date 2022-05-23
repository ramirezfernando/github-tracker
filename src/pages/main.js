import { Title, About, Search } from '../components/index';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

function Main() {
  const GA_TRACKING_CODE = process.env.REACT_APP_GA_TRACKING_CODE

  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_CODE);

    ReactGA.pageview('/')
  }, [])

  return (
    <div>
        <Title />
        <About />
        <Search />
    </div>
  )
}

export default Main;