import {IconType} from 'react-icons'
export interface Iservices{
  title:string,
  about:string,
  Icon: IconType
}
export interface Iskill{
  name:string,
  level:string,
  Icon:IconType
}
export interface Iproject{
  id:number,
  name:string,
  image_path:string,
  description:string,
  deployed_url:string,
  github_url:string,
  category:Category[],
  key_tags:string[]
}
export type Category= 'HTML & CSS' | 'Bootstrap' | 'Wordpress' | 'Php' | 'React' 