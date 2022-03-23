import { useContext } from 'react';
import { HeightContext } from './App';

export const mediaQueries = key => {
    return style => `@media (max-width: ${key}em) { ${style} }`;
}

export const useHeight = () => {
    const height = useContext(HeightContext);

    return height;
}
