import { NavLink } from 'react-router-dom';
import { HOME } from '../../../constants/routes';
import PowerIcon from './PowerIcon';
import { StyledPowerButton } from './PowerButton.styled';

const PowerButton = () => (
    <NavLink to={HOME}>
        <StyledPowerButton>
            <PowerIcon width={30} height={30} fill='currentColor' />
        </StyledPowerButton>
    </NavLink>
);

export default PowerButton;
