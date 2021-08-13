import ResumeBar from "../components/ResumeBar"
import { languages, tools } from "../data"
import {motion} from 'framer-motion';
import { fadeInUp } from "../framer";
const resume = () => {

  return (
    <div className='px-6 py-4'>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div className='font-robotoSlab' variants={fadeInUp} animate='animate' initial='initial'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-2xl font-bold'>Bachelor of Arts || Department of English</h5>
            <p className='font-semibold '>Academy of RGCC (2019-2024)</p>
            <p className='leading-tight tracking-tighter'>Besides my education I am currently working in a local IT Company as Fullstack Web Developer. I have also earned a certified degree on Computer Training and Frontend Design from National Academy for Training Institute and Research (NACTAR)</p>
          </div>
        </motion.div>
        <motion.div className='font-robotoSlab' variants={fadeInUp} animate='animate' initial='initial'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-2xl font-bold'>Junior Fullstack Web Developer </h5>
            <p className='font-semibold '>Fns Software & Institute</p>
            <p className='leading-tight tracking-tighter'>Loving this passion so much</p>
          </div>
        </motion.div>
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        <div className="font-robotoSlab">
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          {
            languages.map(language=><ResumeBar key={language.name} data={language}/>)
          }
        </div>
        <div className="font-robotoSlab">
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          {
            tools.map(tool=><ResumeBar key={tool.name} data={tool}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default resume
