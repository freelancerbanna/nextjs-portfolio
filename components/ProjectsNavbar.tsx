import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem:FunctionComponent<{value:Category | 'All',handleProjectCategory:Function,active:string}>=({value,handleProjectCategory,active})=> {
  let className='cursor-pointer hover:text-green'
  if(active===value){
    className+=' text-green'
  }

  return (
    <li onClick={()=>handleProjectCategory(value)} className={className}>{value}</li>
  )
}


const ProjectsNavbar:FunctionComponent<{handleProjectCategory,active:string}> = (props) => {
  return (
    <div className='flex px-3 py-3 mb-10 space-x-4 overflow-x-auto list-none top-50'>
      <NavItem value='All' {...props}/>
      <NavItem value='HTML & CSS' {...props}/>
      <NavItem value='Bootstrap' {...props}/>
      <NavItem value='React' {...props}/>
      <NavItem value='Php' {...props}/>
      <NavItem value='Wordpress' {...props}/>
    </div>
  )
}

export default ProjectsNavbar
