import { Suspense, useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ABOUT, SKILLS, WORK } from '../../constants/routes';
import Loading from '../UI/Loading';
import Intro from './Intro';
import { StyledMain } from './Main.styled';
import { useHeight } from '../../utils';

const Logo = lazy(() => import('../UI/Logo'));
const PowerButton = lazy(() => import('../UI/PowerButton'));
const SocialIcons = lazy(() => import('../UI/SocialIcons'));
const YingYangIcon = lazy(() => import('./YingYangIcon'));

const Main = () => {
    const height = useHeight();
    const mq = window.matchMedia('(max-width: 50em)').matches;
    const [isShow, setShow] = useState(false);
    const [path, setPath] = useState('');

    const handleShow = () => setShow(!isShow);

    return (
        <Suspense fallback={<Loading />}>
            <StyledMain
                isShow={isShow}
                height={height}
                isMqShow={mq && isShow}
                aboutShow={!mq && isShow}
                key='modal'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={path === 'about' || path === 'skills' ? { y: '-100%' } : { x: '-100%' }}
                transition={{ duration: 0.5 }}
            >
                <div className='dark-block' />
                <div className='container'>
                    <Logo theme={isShow ? 'dark' : 'lights'} />
                    <PowerButton />
                    <SocialIcons theme={!mq && isShow ? 'dark' : 'light'} />
                    <button className='center'>
                        {mq ? (
                            <YingYangIcon
                                onClick={handleShow}
                                width={isShow ? 80 : 150}
                                height={isShow ? 80 : 150}
                                fill="currentColor"
                            />
                        ) : (
                            <YingYangIcon
                                onClick={handleShow}
                                width={isShow ? 120 : 200}
                                height={isShow ? 120 : 200}
                                fill="currentColor"
                            />
                        )}
                        <span>click here</span>
                    </button>
                    <NavLink
                        className='contact'
                        target="_blank"
                        rel='norererrer noopener'
                        to={{ pathname: "mailto:vnahornyi@outlook.com" }}
                    >
                        <motion.h3
                            initial={{
                            y: -200,
                            transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            animate={{
                            y: 0,
                            transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Say hi..
                        </motion.h3>
                    </NavLink>
                    <NavLink to={WORK} className='work'>
                        <motion.h2
                            onClick={setPath.bind(null, 'work')}
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Work
                        </motion.h2>
                    </NavLink>
                    <div className='bottom-bar'>
                        <NavLink to={ABOUT} className='about' onClick={setShow.bind(null, false)}>
                            <motion.h2
                                onClick={setPath.bind(null, 'about')}
                                initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                About
                            </motion.h2>
                        </NavLink>
                        <NavLink to={SKILLS} className='skills' onClick={setShow.bind(null, false)}>
                            <motion.h2
                                onClick={setPath.bind(null, 'skills')}
                                initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Skills
                            </motion.h2>
                        </NavLink>
                    </div>
                </div>
                {isShow && <Intro />}
            </StyledMain>
        </Suspense>
    )
}

export default Main;
