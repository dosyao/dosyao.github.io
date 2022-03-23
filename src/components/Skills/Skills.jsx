import { ThemeProvider } from 'styled-components';
import { Suspense, lazy } from 'react';
import { lightTheme } from '../../constants/common';
import Loading from '../UI/Loading';
import { StyledSkills } from './Skills.styled';

const Logo = lazy(() => import('../UI/Logo'));
const PowerButton = lazy(() => import('../UI/PowerButton'));
const SocialIcons = lazy(() => import('../UI/SocialIcons'));
const Particles = lazy(() => import('./Particles'));
const LaptopIcon = lazy(() => import('./LaptopIcon'));
const BigTitle = lazy(() => import('../UI/BigTitle'));

const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Suspense fallback={<Loading />}>
                <StyledSkills
                    key='skills'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: '200%', transition: { duration: 0.5 } }}
                >
                    <Logo theme='light' />
                    <PowerButton />
                    <SocialIcons theme='light' />
                    <Particles theme='light' />
                    <div className='main'>
                        <h2 className='title'>
                            <LaptopIcon width={40} height={40} /> Front-End Developer
                        </h2>
                        <div className='description'>
                            I develop complex SPA and PWA applications using modern technologies.
                        </div>
                        <div className='description'>
                            <strong>
                                SKILLS
                            </strong>
                            <p>
                                HTML5, CSS3, JavaScript, TypeScript, React 18, Redux, Next.js, LESS, Bootstrap, Tailwind etc.
                            </p>
                            <strong>
                                TOOLS
                            </strong>
                            <p>
                                VSCode, Github, Vercel etc.
                            </p>
                        </div>
                    </div>
                    <div className='main'>
                        <h2 className='title'>
                            <LaptopIcon width={40} height={40} /> Backend-End Developer
                        </h2>
                        <div className='description'>
                            I have experience in developing Back-End using Next.js 12 and MongoDB.
                        </div>
                        <div className='description'>
                            <strong>
                                SKILLS
                            </strong>
                            <p>
                                JavaScript, TypeScript, Next.js, Express, MongoDB etc.
                            </p>
                            <strong>
                                TOOLS
                            </strong>
                            <p>
                                VSCode, Github, Vercel etc.
                            </p>
                        </div>
                    </div>
                    <BigTitle text='Skills' top='80%' right='30%' />
                </StyledSkills>
            </Suspense>
        </ThemeProvider>
    );
}

export default Skills;
