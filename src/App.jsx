import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  lazy,
  Suspense,
  useState,
  useEffect,
  createContext
} from 'react';

import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './constants/common';
import Loading from './components/UI/Loading';
import { ABOUT, HOME, SKILLS, WORK } from './constants/routes';

const Main = lazy(() => import('./components/Main'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Work = lazy(() => import('./components/Work'));
const Soundbar = lazy(() => import('./components/UI/Soundbar'));

export const HeightContext = createContext();

const App = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const location = useLocation();
  
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <HeightContext.Provider state={height}>
          <Soundbar />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path={HOME} component={Main} />
              <Route exact path={ABOUT} component={About} />
              <Route exact path={WORK} component={Work} />
              <Route exact path={SKILLS} component={Skills} />
            </Switch>
          </AnimatePresence>
          </HeightContext.Provider>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
