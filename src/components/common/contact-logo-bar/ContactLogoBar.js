import React from 'react'
import { Link } from "react-router-dom";
import { AppConstants } from 'components/App.constants';
import { MdOutlineEmail } from 'react-icons/md'
import { SiLinkedin, SiGithub, SiTwitter, SiLetterboxd } from 'react-icons/si';

const ContactLogoBar = () => (
  <div className="flex-row md:flex-row text-3xl md:text-2xl mr-1">
    <Link to="/contact" className="w-6 mx-2 inline-block">
      <MdOutlineEmail />
    </Link>
    <a href={AppConstants.linkedInUrl} target="_blank" rel="noreferrer" className="w-6 mx-2 inline-block">
      <SiLinkedin />
    </a>
    <a href={AppConstants.githubUrl} target="_blank" rel="noreferrer" className="w-6 mx-2 inline-block">
      <SiGithub />
    </a>
    <a href={AppConstants.twitterUrl} target="_blank" rel="noreferrer" className="w-6 mx-2 inline-block">
      <SiTwitter />
    </a>
    <a href={AppConstants.letterboxdUrl} target="_blank" rel="noreferrer" className="w-6 mx-2 inline-block">
      <SiLetterboxd />
    </a>
  </div>
)

export { ContactLogoBar };

