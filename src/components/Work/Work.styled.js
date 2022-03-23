import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from '../../utils';

export const StyledWork = styled(motion.div)`
    background-color: ${props => props.theme.body};
    position: relative;
    display: flex;
    height: 230vh;

    .main {
        position: fixed;
        top: 12rem;
        left: calc(10rem + 15vw);
        height: 40vh;
        display: flex;

        ${mediaQueries(50)`
            left: calc(8rem + 15vw);
        `};
        ${mediaQueries(40)`
            top: 30%;          
            left: calc(6rem + 15vw);
        `};
        ${mediaQueries(40)`         
            left: calc(2rem + 15vw);
        `};
        ${mediaQueries(25)`    
            left: calc(1rem + 15vw);
        `};
    }

    .rotate {
        display: block;
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        width: 80px;
        height: 80px;
        z-index: 1;

        ${mediaQueries(40)`
            width: 60px;
            height: 60px; 
  
            svg {
                width: 60px;
                height: 60px;
            }
        `};
        ${mediaQueries(25)`
            width: 50px;
            height: 50px;

            svg {
                width: 50px;
                height: 50px;
            }
        `};
    }
`;
