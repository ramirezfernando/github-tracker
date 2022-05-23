import { Title, About, Search } from '../components/index';
import ReactGA from 'react-ga';
const GA_TRACKING_CODE = process.env.REACT_APP_GA_TRACKING_CODE

ReactGA.initialize(GA_TRACKING_CODE);

function Main() {
  return (
    <div>
        <Title />
        <About />
        <Search />
    </div>
  )
}

export default Main;