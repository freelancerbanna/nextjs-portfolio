import { FunctionComponent } from "react"
import { Iservices } from "../type"
const ServiceCard:FunctionComponent<{service:Iservices}> = ({service:{Icon,title,about}}) => {
  const createMarkup=()=>{
   return {
    __html:about
   }
  }
  return (
    <div className='flex items-center p-2 space-x-4 font-robotoSlab'>
      <Icon className='w-12 h-12 mt-5 text-green'/>
      <div>
        <h4 className='pt-3 pb-2 font-bold '>{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  )
}

export default ServiceCard
