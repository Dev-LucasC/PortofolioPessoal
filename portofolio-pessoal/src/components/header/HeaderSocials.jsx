import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/dev-lucasconceicao/" target='_blank'> <BsLinkedin /> </a>
            <a href="https://github.com/dev-lucasc" target='_blank'> <FaGithub /> </a>
            <a href="https://linkedin.com/dev-lucasc" target='_blank'></a>
        </div>
    )
}

export default HeaderSocials
