import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'I am Binthia V H, an aspiring Software Engineer.',
        line2: 'Always eager to learn, grow, and challenge myself, I strive to gain new skills and explore innovative solutions.',
        line3: 'Passionate about problem-solving and software development, I aim to contribute effectively to impactful projects.'
    }

    return <section className='flex flex-col md:flex-row bg-black px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl mb-5 w-[170px] font-bold text-[#48b5bf]'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}