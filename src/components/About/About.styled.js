import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from '../../utils';

const float = keyframes`
    0% {
        transform: translateY(-10px)
    }
    50% {
        transform: translateY(15px) translateX(15px)
    }
    100% {
        transform: translateY(-10px)
    }
`;

export const StyledAbout = styled(motion.div)`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: ${props => props.height}px;
    position: relative;
    overflow: hidden;

    .spaceman {
        position: absolute;
        top: 10%;
        right: 5%;
        animation: ${float} 4s ease infinite;
        width:20vw;

        img {
            width: 100%;
            height: auto;
        }
    }

    .main {
        border: 2px solid ${props => props.theme.text};
        color: ${props => props.theme.text};
        padding: 2rem;
        width: 50vw;
        height: 60vh;
        z-index: 3;
        line-height: 1.5;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: calc(0.6rem + 1vw);
        backdrop-filter: blur(4px);   
        position: absolute;
        left: calc(5rem + 5vw);
        top: 10rem;
        font-family: 'Ubuntu Mono', monospace;
        font-style: italic;

        ${mediaQueries(40)`
            width: 60vw;
            height: 50vh;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
        `};
        ${mediaQueries(30)`
            width: 50vw;
            height: auto;
            backdrop-filter: none;
            margin-top:2rem;
        `};
        ${mediaQueries(20)`
            padding: 1rem;
            font-size: calc(0.5rem + 1vw);
        `};
    }
`;
