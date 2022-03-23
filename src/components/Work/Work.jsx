import { ThemeProvider } from 'styled-components';
import { Suspense, lazy, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { darkTheme } from '../../constants/common';
import data from '../../data/work.json';
import Loading from '../UI/Loading';
import { StyledWork } from './Work.styled';

const Logo = lazy(() => import('../UI/Logo'));
const PowerButton = lazy(() => import('../UI/PowerButton'));
const SocialIcons = lazy(() => import('../UI/SocialIcons'));
const BigTitle = lazy(() => import('../UI/BigTitle'));
const Card = lazy(() => import('./Card'));
const YingYangIcon = lazy(() => import('../Main/YingYangIcon'));

const Work = () => {
    const listRef = useRef(null);
    const yinYangRef = useRef(null);

    useEffect(() => {
        const listElem = listRef.current;

        const rotate = () => {
            listElem.style.transform = `translateX(${-window.pageYOffset}px)`;
            return yinYangRef.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
        }
        window.addEventListener('scroll', rotate);
        return () => {
            window.removeEventListener('scroll', rotate);
        };
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <Suspense fallback={<Loading />}>
                <StyledWork
                    key='work'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ x: '200%', transition: { duration: 0.5 } }}
                >
                    <Logo theme='dark' />
                    <PowerButton />
                    <SocialIcons theme='dark' />
                    <motion.ul
                        ref={listRef}
                        className='main'
                        initial='hidden'
                        animate='show'
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                              opacity: 1,
                          
                              transition: {
                                staggerChildren: 0.5,
                                duration: 0.5,
                              },
                            },
                        }}
                    >
                        {data.map(el => <Card key={el.id} {...el} />)}
                    </motion.ul>
                    <BigTitle text='WORK' top='10%' right='20%' />
                    <span ref={yinYangRef} className='rotate'>
                        <YingYangIcon
                            width={80}
                            height={80}
                            fill={darkTheme.text}
                        />
                    </span>
                </StyledWork>
            </Suspense>
        </ThemeProvider>
    );
}

export default Work;
