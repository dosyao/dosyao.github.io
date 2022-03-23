import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { darkTheme } from '../../../constants/common';
import FacebookIcon from './FacebookIcon';
import GithubIcon from './GithubIcon';
import { StyledSocialIcons } from './SocialIcons.styled';

const SocialIcons = ({ theme }) => (
    <StyledSocialIcons isDark={theme === 'dark'}>
        <motion.div
            initial={{ transform: 'scale(0)' }}
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
            <NavLink
                to={{ pathname: 'https://github.com/dosyao' }}
                target='_blank'
                rel='noreferrer noopener'
            >
                <GithubIcon 
                    width={25}
                    height={25}
                    fill={theme === 'dark' ? darkTheme.text : darkTheme.body}
                />
            </NavLink>
        </motion.div>
        <motion.div
            initial={{ transform: 'scale(0)' }}
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.2 }}
        >
            <NavLink
                to={{ pathname: 'https://www.facebook.com/vladyslav.nahornyi' }}
                target='_blank'
                rel='noreferrer noopener'
            >
                <FacebookIcon 
                    width={25}
                    height={25}
                    fill={theme === 'dark' ? darkTheme.text : darkTheme.body}
                />
            </NavLink>
        </motion.div>
        <motion.span
            className='line'
            initial={{ height: 0 }}
            animate={{ height: '5rem' }}
            transition={{ type: 'spring', duration: 1, delay: 0.8 }}
        />
    </StyledSocialIcons>
);

export default SocialIcons;
