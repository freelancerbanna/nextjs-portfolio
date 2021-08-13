import { FunctionComponent } from "react"
import { Iskill } from "../type"
import {  motion } from "framer-motion"
const ResumeBar:FunctionComponent<{data:Iskill}>= ({data:{name,Icon,level}}) => {
  
  const variants= {
    initial:{
      width:0,
    },
    animate:{
      width:level,
      transition:{
        duration:0.4,
        type:'spring',
        damping:10,
        stiffness:100
      }
    }
  }
  return (
    <motion.div className='my-2 text-white bg-gray-200 rounded-full dark:bg-dark-300' variants={variants} initial='initial' animate='animate'>
      <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-400" style={{width:level}} >
        <Icon className='w-6 h-6 pr-3' />{name}</div>
    </motion.div>
  )
}

export default ResumeBar
