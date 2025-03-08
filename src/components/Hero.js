import BinthiaPhoto from '../assets/Binthiavh-photo.jpg';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'I am passionate about becoming a Software Engineer.',
        social: {
            github: 'https://github.com/Binthia',
            linkedin: 'https://www.linkedin.com/in/binthia-v-h/'
        }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-black justify-center'>
       <div className='md:w-1/2 mt-10 flex flex-col'>
            <h1 className=' text-white text-6xl font-poppins'>Hi, <br/> Im <span className='text-[#48b5bf]'>Binthia</span> V H 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/5 rounded-full object-cover' src={BinthiaPhoto} />
    </section>
}
