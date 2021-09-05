import { FC } from 'react'

export const Footer: FC = () => {
    const today = new Date();
    return (
        <footer>
            { today.getFullYear() }Copyright &#169; 
        </footer>
    )
}