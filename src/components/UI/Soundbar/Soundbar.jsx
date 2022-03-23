import { useState, useRef } from 'react';
import track from '../../../assets/audio/u-said-it-v13-1167.mp3';
import { StyledSoundbar } from './Soundbar.styled';

const Soundbar = () => {
    const playRef = useRef(null);
    const [isPlay, setPlay] = useState(false);

    const handlePlay = () => {
        setPlay(!isPlay);

        if (!isPlay) {
          playRef.current.play();
          return;
        }

        playRef.current.pause();
      };

    return (
        <StyledSoundbar isPlay={isPlay} onClick={handlePlay}>
           <span className='line' />
           <span className='line' /> 
           <span className='line' /> 
           <span className='line' /> 
           <span className='line' /> 
           <audio ref={playRef} src={track} loop />
        </StyledSoundbar>
    );
}

export default Soundbar;
