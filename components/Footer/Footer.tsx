import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer footer-center p-2  text-base-content">
  <aside>
    <p>@2023 | Made with 💙 by Balaji Viswanadh</p>
    <div className="flex links">
    <FaInstagram  size={18}/>
    <a className="link link-primary ml-3" href="https://www.instagram.com/mb_viswanadh/" target="_blank">@mb_viswanadh</a>
    </div>
    
  </aside>
</footer>
  )
}

export default Footer
