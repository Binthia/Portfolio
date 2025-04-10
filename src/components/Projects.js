import jarvis from '../assets/jarvis.png';
import pavees from '../assets/pavees.jpg';
import shop from '../assets/shop.jpg';
import student_management_system from '../assets/student_management_system.webp';
import social_media_community from '../assets/social_media_community.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: jarvis,
                description: 'Jarvis assistant built using Python',
                link: 'https://github.com/Binthia/Jarvis'
            },
            {
                image: shop,
                description: 'Shop project developed using Django',
                link: 'https://github.com/Binthia/Shop-Django'
            },
            {
                image: pavees,
                description: 'A real time website developed using HTML, CSS, JS',
                link: 'https://paveesmilk.com'
            },
            {
                image: student_management_system ,
                description: 'Student management system project built using Python, MySQL',
                link: 'https://github.com/Binthia/student_management_system'
            },
            {
                image: social_media_community ,
                description: 'Social media community project built using ReactJS, Tailwind CSS, Django, MySQL',
                link: 'https://github.com/Binthia/social-media-community'
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
