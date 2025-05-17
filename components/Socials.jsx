 import Link from "next/link"
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter , FaFacebook, FaWhatsapp,FaInstagram} from "react-icons/fa"


const socials = [
  {icon: <FaFacebook/>, path: "https://www.facebook.com/searchmavin/"},
  {icon: <FaLinkedin/>, path: "https://www.youtube.com/user/MyCompanyChannel"},
  {icon: <FaWhatsapp/>, path: "https://wa.me/8801883168140"},
  {icon: <FaTwitter/>, path: "https://x.com/Iam_sajibbarua"},
  {icon: <FaInstagram/>, path: "https://www.instagram.com/shajibsb/?hl=en"},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return(
          // <Link key={index} href={item.path} className={iconStyles} >
          // {item.icon}
          // </Link>

          <a href={item.path} key={index} target="_blank"  rel="noopener noreferrer" className={iconStyles} >{item.icon} </a>
        )
      })}
    </div>
  )
}

export default Socials
