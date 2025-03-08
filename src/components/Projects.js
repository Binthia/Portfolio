import jarvis from '../assets/jarvis.png';
import ecommerce from '../assets/ecommerce-websites.jpg';
import pavees from '../assets/pavees.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: jarvis,
                description: 'Jarvis assistant built using Python',
                link: 'https://github.com/Binthia/Jarvis'
            },
            {
                image: ecommerce,
                description: '',
                link: ''
            },
            {
                image: pavees,
                description: 'A real time website built using HTML, CSS, JS',
                link: 'https://github.com/Binthia/Pavee-s-Website'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-black text-black">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl  mb-5 w-[150px] font-bold text-[#48b5bf]">Projects</h1>
                <p>These are some of my best projects. I have built these with Python, React, Tailwind CSS, Django. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}