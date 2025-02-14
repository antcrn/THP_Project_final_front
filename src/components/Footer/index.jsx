import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

const Footer = () => {

  return (
    <footer className="footer-distributed">
      <Box className="footer-right">
        <Link to="#"><FacebookIcon /></Link>
        <Link to="#"><InstagramIcon /></Link>
        <Link to="#"><GitHubIcon /></Link>
        <Link to="#">
          <img src="https://www.thehackingproject.org/assets/favicon/favicon-32x32-804b12d1c41c60fe721477b7c3b0a32811dc610580dd40ac92f1cc04cbd05ca4.png" alt="The-hacking-project logo" width="28px" />
        </Link>
      </Box>
      <Box className="footer-left" mb="0" pb="0">
        <p className="footer-links">
          <Link to="#home">Acceuil</Link>
          <Link to="/connexion">Se connecter / S'inscrire</Link>
          <Link to="/jeux">Jeux</Link>
          <Link to="#faq">FAQ</Link>
        </p>
        <p>PlayBOX &copy; 2021</p>
      </Box>
    </footer>
  )
}

export default Footer;