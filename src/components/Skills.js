export default function Skills() {
    const skills = [
        "Python",
        "Java",
        "React.js",
        "HTML & CSS",
        "Tailwind CSS",
        "JavaScript",
        "Django",
        "MySQL",
        "Git and GitHub"
    ];

    return (
        <section id='skills' className='flex flex-col items-center justify-center bg-black px-5 py-10'>
            <div className='w-full md:w-2/3 flex flex-col items-center text-white'>
                <h1 className='text-4xl mb-5 w-fit font-bold text-[#48b5bf]'>Skills</h1>
                <ul className='grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-center'>
                    {skills.map((skill, index) => (
                        <li key={index} className='bg-primary p-3 rounded-md text-center w-40'>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
