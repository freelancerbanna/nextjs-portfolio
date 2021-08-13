import { Iproject, Iservices, Iskill } from "./type";
import {RiComputerLine} from 'react-icons/ri';
import {FaServer} from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import {MdDeveloperMode} from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'
export const services:Iservices[]=[
  {
    title:'Frontend Development',
    about:'Can build a beautful and scalabe Website.',
    Icon:RiComputerLine
  },
  {
    title:'Backend Development',
    about:'Handling and testing database using <b>Express</b> and also <b>Laravel</b>',
    Icon: FaServer,
  },
  {
    title:'API Development',
    about:'I will be develop thorugh <b>REST API</b> using <b>NODE API</b>',
    Icon:AiOutlineApi,
  },
  {
    title:'Flexible Coder With Coding',
    about:'Flexibility is the modern eye catching with anything Coding or Bug',
    Icon:MdDeveloperMode
  },
  {
    title:'UI/UX designer',
    about:'Top level stunning and unique designer using <b>Figma</b>, <b>XD</b>, <b>Framer</b>',
    Icon:AiOutlineAntDesign
  },
  {
    title:'Whatever',
    about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deser...',
    Icon:RiComputerLine
  },
  
]
export const languages:Iskill[]=[
  {
    name:'Php',
    level:'75%',
    Icon:BsCircleFill
  },
  {
    name:'Javascript',
    level:'85%',
    Icon:BsCircleFill
  },
  {
    name:'React Js',
    level:'80%',
    Icon:BsCircleFill
  },
  {
    name:'Next Js',
    level:'82%',
    Icon:BsCircleFill
  },
  {
    name:'Bootstrap',
    level:'90%',
    Icon:BsCircleFill
  },
  {
    name:'Php',
    level:'75%',
    Icon:BsCircleFill
  },
]
export const tools:Iskill[]=[
  {
    name:'Phostoshop',
    level:'75%',
    Icon:BsCircleFill
  },
  {
    name:'Figma',
    level:'70%',
    Icon:BsCircleFill
  },
  {
    name:'Illustrator',
    level:'65%',
    Icon:BsCircleFill
  },
  {
    name:'Framer',
    level:'73%',
    Icon:BsCircleFill
  }
]
export const project:Iproject[]=[
  {
    id:1,
    name:'Multi Website',
    deployed_url:'https://bozzum.netlify.app/',
    github_url:'https://github.com/freelancerbanna/bozzum',
    image_path:'/images/bozzum.png',
    description:'This is made with only html, css and bootstrap',
    key_tags:['html','css','bootstrap'],
    category:['Bootstrap'],
  },
  {
    id:2,
    name:'Medical Medics',
    deployed_url:'https://medicalmedics.netlify.app/',
    github_url:'https://github.com/freelancerbanna/medics',
    image_path:'/images/medics.png',
    description:'This is a design for a client who wanted to redesign his website that made with only html, css ',
    key_tags:['html','css'],
    category:['HTML & CSS'],
  },
  {
    id:3,
    name:'Agency',
    deployed_url:'https://agencymain.netlify.app/',
    github_url:'https://github.com/freelancerbanna/agency',
    image_path:'/images/agency.png',
    description:'This is design is only for practice purpose made with only html, css and bootstrap',
    key_tags:['html','css','bootstrap'],
    category:['Bootstrap'],
  },
  {
    id:4,
    name:'Restaurant ',
    deployed_url:'https://bahabhus.netlify.app/',
    github_url:'https://github.com/freelancerbanna/bhus',
    image_path:'/images/restaurant.png',
    description:'This is design is only for practice purpose made with only html, css ',
    key_tags:['html','css','bootstrap'],
    category:['HTML & CSS'],
  },
  {
    id:5,
    name:'One Page Theme ',
    deployed_url:'https://zeikzu.netlify.app/',
    github_url:'https://github.com/freelancerbanna/bhus',
    image_path:'/images/zeikzu.png',
    description:'This is design is only for practice purpose made with only html, css ',
    key_tags:['html','css','bootstrap'],
    category:['HTML & CSS'],
  },
  {
    id:6,
    name:'Linkedin',
    deployed_url:'https://linkedin-clone-3106f.web.app/',
    github_url:'https://github.com/freelancerbanna',
    image_path:'/images/linkedin.png',
    description:'This is a clone of linkedin using react and redux with some login and logut functionality',
    key_tags:['React','Redux'],
    category:['React'],
  }
]
