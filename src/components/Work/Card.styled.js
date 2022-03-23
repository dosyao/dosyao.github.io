import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from '../../utils';

export const StyledCard = styled(motion.li)`
    width: 16rem;
    height: 40vh;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;
    border-radius: 0 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.body};
    transition: all 0.2s ease;

    &:hover {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
    }

    ${mediaQueries(50)`
        width: 16rem;
        margin-right: 6rem;
        height: 35vh;
    `};
    ${mediaQueries(40)`
        width: 14rem;
        margin-right: 4rem;
        height: 35vh;
    `};
    ${mediaQueries(25)`
        width: 12rem;
        margin-right: 4rem;
        height: 35vh;
        padding: 1.5rem 1.5rem;
    `};
    ${mediaQueries(20)`
        width: 10rem;
        margin-right: 4rem;
        height: 40vh;
    `};

    .title {
        font-size: calc(1em + 0.5vw);
    }

    .description {
        font-size: calc(0.8em + 0.3vw);
        font-family: "Karla", sans-serif;
        font-weight: 500;

        ${mediaQueries(25)`
            font-size:calc(0.7em + 0.3vw);
        `};
        ${mediaQueries(20)`
            font-size:calc(0.6em + 0.3vw);
        `};
    }

    .tags {
        border-top: 2px solid ${props => props.theme.body};
        padding-top: 0.5rem;
        display: flex;
        flex-wrap: wrap;

        .tag {
            margin-right: 1rem;
            font-size: calc(0.8em + 0.3vw);

            ${mediaQueries(25)`
                font-size: calc(0.7em);
            `};
        }
    }

    &:hover .tags {
        border-top: 2px solid ${props => props.theme.text};
    }

    .footer {
        display: flex;
        justify-content: space-between;

        .link {
            background-color: ${props => props.theme.body};
            color: ${props => props.theme.text};
            text-decoration: none;
            padding: 0.5rem calc(2rem + 2vw);
            border-radius: 0 0 0 50px;
            font-size: calc(1em + 0.5vw);
        }

        .git {
            color: inherit;
            text-decoration: none;
        }
    }

    &:hover .footer {
        .link {
            background-color: ${props => props.theme.text};
            color: ${props => props.theme.body};
        }

        .git {
            fill: ${props => props.theme.text};
        }
    }
`;
