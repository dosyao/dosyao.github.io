import styled from 'styled-components';
import ReactParticles from 'react-tsparticles';
import configDark from '../../config/particlesjs-config.json';
import configLight from '../../config/particlesjs-config-light.json';

const StyledParticles = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
`;

const Particles = ({ theme }) => (
    <StyledParticles>
        <ReactParticles
            style={{ position: 'absolute', top: 0 }}
            params={theme === 'light' ? configLight : configDark}
        />
    </StyledParticles>
);

export default Particles;
