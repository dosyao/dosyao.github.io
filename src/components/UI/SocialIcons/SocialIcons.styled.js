import styled from 'styled-components';
import { darkTheme } from '../../../constants/common';
import { mediaQueries } from '../../../utils';

export const StyledSocialIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    & > *:not(:last-child) {
        margin: 0.5rem 0;

        ${mediaQueries(20)`
            margin: 0.3rem 0;
        `};
    }

    ${mediaQueries(40)`
        left: 1rem;

        svg {
            width:20px;
            height:20px
        }
    `};

    .line {
        width: 2px;
        height: 8rem;
        background-color: ${props => props.isDark ? darkTheme.text : darkTheme.body};
    }
`;
