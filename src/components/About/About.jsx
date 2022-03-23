import { ThemeProvider } from 'styled-components';
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { darkTheme } from '../../constants/common';
import astronaut from '../../assets/images/spaceman.png';
import Loading from '../UI/Loading';
import { StyledAbout } from './About.styled';
import { useHeight } from '../../utils';

const Logo = lazy(() => import('../UI/Logo'));
const PowerButton = lazy(() => import('../UI/PowerButton'));
const SocialIcons = lazy(() => import('../UI/SocialIcons'));
const Particles = lazy(() => import('../Skills/Particles'));
const BigTitle = lazy(() => import('../UI/BigTitle'));

const About = () => {
    const height = useHeight();

    return (
        <ThemeProvider theme={darkTheme}>
            <Suspense fallback={<Loading />}>
                <StyledAbout
                    key='about'
                    height={height}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: '200%', transition: { duration: 0.5 } }}
                >
                    <Logo theme='dark' />
                    <PowerButton />
                    <SocialIcons theme='dark' />
                    <Particles theme='dark' />
                    <motion.div
                        className='spaceman'
                        initial={{ right: '-20%', top: '100%' }}
                        animate={{
                            right: '5%',
                            top: '10%',
                            transition: { duration: 2, delay: 0.5 },
                        }}
                    >
                        <img src={astronaut} alt='spaceman' />
                    </motion.div>
                    <motion.div
                        className='main'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
                    >
                        I'm a front-end developer located in Ukraine. I love to create complex SPA
                        and beautiful web applications with great user experience.
                        <br />
                        <br />
                        I'm interested in the whole frontend stack Like trying new things
                        and building great projects.
                    </motion.div>
                    <BigTitle text='ABOUT' top='10%' left='5%' />
                </StyledAbout>
            </Suspense>
        </ThemeProvider>
    );
}

export default About;
