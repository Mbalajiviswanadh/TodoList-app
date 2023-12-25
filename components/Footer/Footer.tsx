import { FaInstagram } from "react-icons/fa6";
import './footer.css'
const Footer = () => {
  return (
    <>
    <footer className="footer footer-center p-2  text-base-content">
    <div className="note">
    <p style={{fontSize:'10px'}}><span className="font-bold underline">NOTE:</span> This is s simple Todo app, I also used Mongodb for the database thats why the <span className="font-semibold underline">Data will be same for every User</span></p>
    </div>
  <aside>
    <p>@2023 | Made with 💙 by Balaji Viswanadh</p>
    <div className="flex links">
    <FaInstagram  size={18}/>
    <a className="link link-primary ml-3" href="https://www.instagram.com/mb_viswanadh/" target="_blank">@mb_viswanadh</a>
    </div>
    
  </aside>
</footer>
</>
  )
}

export default Footer
