import { RiTelegramLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";


export const contacts = [
  {
    type: 'contact',
    name: 'Phone number',
    text: '+380730062307',
    path: 'tel:+380730062307',
  },
  {
    type: 'contact',
    name: 'E-mail',
    text: 'bohdan.bihanskiy@gmail.com',
    path: 'mailto:bohdan.bihanskiy@gmail.com',
  },
  {
    type: 'contact',
    name: 'Address',
    text: 'Ukraine, Kyiv',
    path: 'https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.459407,30.4313858,10.96z/data=!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234',
  },
]

export const socialLinks = [
  {
    type: 'social',
    text: 'Facebook',
    icon: <RiFacebookFill style={{ fontSize: "40px" }} />,
    path: 'https://www.facebook.com/biganskyi',
  },
  {
    type: 'social',
    text: 'Telegram',
    icon: <RiTelegramLine style={{ fontSize: "40px" }} />,
    path: 'https://t.me/Bihanskiy/',
  },
  {
    type: 'social',
    text: 'Instagram',
    icon: <RiInstagramLine style={{ fontSize: "40px" }} />,
    path: 'https://www.instagram.com/_bihanskiy_/',
  },
  {
    type: 'social',
    text: 'LinkedIn',
    icon: <RiLinkedinFill style={{ fontSize: "40px" }} />,
    path: 'https://www.linkedin.com/in/bihanskyi/',
  },
  {
    type: 'social',
    text: 'GitHub',
    icon: <RiGithubFill style={{ fontSize: "40px" }} />,
    path: 'https://github.com/Bihanskiy',
  },
]