import { NavLink } from 'react-router-dom';
import GithubIcon from '../UI/SocialIcons/GithubIcon';
import { StyledCard } from './Card.styled';

const Card = ({ id, name, description, tags, demo, github }) => (
    <StyledCard
        key={id}
        variants={{
            hidden: { scale: 0 },
            show: { scale: 1, transition: { type: 'spring', duration: 0.5 } },
        }}
    >
        <h2 className='title'>{name}</h2>
        <h4 className='description'>{description}</h4>
        <div className='tags'>
            {tags.map((tag, idx) => <span className='tag' key={idx}>#{tag}</span>)}
        </div>
        <div className='footer'>
            <NavLink
                className='link'
                to={{ pathname: demo }}
                target='_blank'
                rel='noreferrer noopener'
            >
                Visit
            </NavLink>
            <NavLink
                className='git'
                to={{ pathname: github }}
                target='_blank'
                rel='noreferrer noopener'
            >
                <GithubIcon width={30} height={30} />
            </NavLink>
        </div>
    </StyledCard>
);

export default Card;
