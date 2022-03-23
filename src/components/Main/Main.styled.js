import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from '../../utils';

const rotate = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledMain = styled(motion.div)`
    background: ${props => props.theme.body};
    width: 100vw;
    height: ${props => props.height};
    position: relative;
    overflow: hidden;

    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }

    h2 {
        ${mediaQueries(40)`
            font-size:1.2em;
        `};

        ${mediaQueries(30)`
            font-size:1em;
        `};
    }

    .dark-block {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 50%;
        width: ${props => props.isShow ? "50%" : "0%"};
        background-color: #000000;
        height: ${props => props.isShow ? "100%" : "0%"};
        transition: height 0.5s ease, width 1s ease 0.5s;
        z-index: 1;

        ${props => props.isShow ? mediaQueries(50)`
            height: 50%;
            right:0;
            width: 100%;
            transition: width 0.5s ease, height 1s ease 0.5s;
        ` : mediaQueries(50)`
            height: 0;
            width: 0;
        `};
    }

    .container {
        padding: 2rem;

        .center {
            position: absolute;
            top: ${props => props.isShow ? "85%" : "50%"};
            left: ${props => props.isShow ? "92%" : "50%"};
            color: ${props => props.theme.text};
            transform: translate(-50%, -50%);
            border: none;
            outline: none;
            background: transparent;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 1s ease;
    
            & > *:first-child {
                animation: ${rotate} infinite 1.5s linear;
            }
            & > *:last-child {
                display: ${props => props.isShow ? "none" : "inline-block"};
                padding-top: 1rem;
            }

            @media only screen and (max-width: 50em) {
                top: ${props => props.isShow ? "90%" : "50%"};
                left: ${props => props.isShow ? "90%" : "50%"};
                width: ${props => props.isShow ? "80px" : "150px"};
                height: ${props => props.isShow ? "80px" : "150px"};
            }
            @media only screen and (max-width: 30em) {
                width: ${props => props.isShow ? "40px" : "150px"};
                height: ${props => props.isShow ? "40px" : "150px"};
            }
        }

        .contact {
            color: ${props => props.isMqShow ? props.theme.body : props.theme.text};
            position: absolute;
            top: 2rem;
            right: calc(1rem + 2vw);
            text-decoration: none;
            z-index: 1;
        }

        .work {
            color: ${props => props.isMqShow ? props.theme.body : props.theme.text};
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(-50%, -50%) rotate(-90deg);
            z-index: 1;
            text-decoration: none;

            @media only screen and (max-width: 50em) {
                text-shadow: ${(props) => (props.isShow ? "0 0 4px #000" : "none")};
            }
        }

        .bottom-bar {
            position: absolute;
            bottom: 1rem;
            left: 0;
            right: 0;
            width: 100%;
            display: flex;
            justify-content: space-evenly;

            .about {
                color: ${props => props.aboutShow ? props.theme.body : props.theme.text};
                text-decoration: none;
                z-index: 1;
            }

            .skills {
                color: ${props => props.theme.text};
                text-decoration: none;
                z-index: 1;
            }
        }
    }
`;
