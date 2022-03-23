import styled, { keyframes } from 'styled-components';
import { mediaQueries } from '../../../utils';

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    100%{
        transform: scaleY(1);
    }
`;

export const StyledSoundbar = styled.div`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 8rem;
    top: 3rem;
    z-index: 10;

    ${mediaQueries(40)`
        left: 1rem;
        top: 10rem;
    `};

    .line {
        background: ${(props) => props.theme.text};
        border: 1px solid ${(props) => props.theme.body};
        animation: ${play} 1s ease infinite;
        animation-play-state: ${(props) => (props.isPlay ? 'running' : 'paused')};
        height: 1rem;
        width: 2px;
        margin: 0 0.1rem;

        ${mediaQueries(40)`
            height:0.5rem;
            width:1px;
        `};
    }

    .line:nth-child(1) {
        animation-delay: 0.2s;
    }
    .line:nth-child(2) {
        animation-delay: 0.3s;
    }
    .line:nth-child(3) {
        animation-delay: 0.4s;
    }
    .line:nth-child(4) {
        animation-delay: 0.5s;
    }
    .line:nth-child(5) {
        animation-delay: 0.8s;
    }
`;
