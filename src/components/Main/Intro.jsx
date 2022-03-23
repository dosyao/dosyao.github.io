import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avatar from '../../assets/images/profile-img.png';
import { StyledIntro } from './Intro.styled';

const Intro = () => {
    const [height, setHeight] = useState('55vh');
  
    useEffect(() => {
        if (window.matchMedia('(max-width: 50em)').matches) {
            setHeight('70vh');
        }
        if (window.matchMedia('(max-width: 20em)').matches) {
            setHeight('60vh');
        }
    }, []);

    return (
      <StyledIntro
        initial={{ height: 0 }}
        animate={{ height: height }}
        transition={{ type: 'spring', duration: 2, delay: 1 }}
      >
        <div className='box'>
          <motion.div className='text'>
            <h1>Hi,</h1>
            <h3>I'm Vlad.</h3>
            <h6>I develop complex and beautiful web applications.</h6>
          </motion.div>
        </div>
        <div className='box'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <img className='pic' src={avatar} alt='My Pic' />
          </motion.div>
        </div>
      </StyledIntro>
    );
};
  
export default Intro;
