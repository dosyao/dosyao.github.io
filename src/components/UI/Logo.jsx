import styled from 'styled-components';
import { darkTheme } from '../../constants/common';
import { mediaQueries } from '../../utils';

const Logo = ({ theme }) => (
    <StyledLogo isDark={theme === 'dark'}>
        VN
    </StyledLogo>
);

export default Logo;

const StyledLogo = styled.h1`
    display: inline-block;
    color: ${props => props.isDark ? darkTheme.text : darkTheme.body};
    font-family: "Pacifico", cursive;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;

    ${mediaQueries(40)`
        font-size:1.5em;
        left:1rem;
        top:2rem;
    `};
`;
