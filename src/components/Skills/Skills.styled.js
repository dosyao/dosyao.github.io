import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from '../../utils';

export const StyledSkills = styled(motion.div)`
    background-color: ${(props) => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ${mediaQueries(50)`
        flex-direction:column;  
        padding:8rem 0;
        height:auto;

        &>*:nth-child(5){
            margin-bottom:5rem;
        }
            
    `};
    ${mediaQueries(30)`
        &>*:nth-child(5){
            margin-bottom:4rem;
        }   
    `};

    .main {
        border: 2px solid ${props => props.theme.text};
        color: ${props => props.theme.text};
        background-color: ${props => props.theme.body};
        padding: 2rem;
        width: 30vw;
        height: 60vh;
        z-index: 3;
        line-height: 1.5;

        ${mediaQueries(60)`
            height: 55vh;
        `};

        ${mediaQueries(50)`
            width: 50vw;
            height: max-content;
        `};

        font-family: "Ubuntu Mono", monospace;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:hover {
            color: ${props => props.theme.body};
            background-color: ${props => props.theme.text};
        }

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: calc(1em + 1vw);

            ${mediaQueries(60)`
                font-size:calc(0.8em + 1vw);
            `};

            ${mediaQueries(50)`
                font-size:calc(1em + 2vw);
                margin-bottom:1rem;
            `};

            ${mediaQueries(30)`
                font-size:calc(1em + 1vw);
            `};
            ${mediaQueries(25)`
                font-size:calc(0.8em + 1vw);
                svg{
                    width:30px;
                    height:30px;
                }
            `};

            & > *:first-child {
                margin-right: 1rem;
            }
        }

        .description {
            color: ${(props) => props.theme.text};
            font-size: calc(0.6em + 1vw);
            padding: 0.5rem 0;

            ${mediaQueries(50)`
                font-size: calc(0.8em + 1vw);
            `};

            ${mediaQueries(30)`
                font-size:calc(0.7em + 1vw);
            `};

            ${mediaQueries(25)`
                font-size:calc(0.5em + 1vw);
            `};

            strong {
                margin-bottom: 1rem;
                text-transform: uppercase;
            }
            p {
                margin-left: 2rem;
            }
        }

        &:hover * {
            color: ${props => props.theme.body};
            fill: ${props => props.theme.body};
        }
    }
`;
