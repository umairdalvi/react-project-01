import SkillCard from "./SkillCard"

const Skills = () => {

    const skills = [
        {
            name: 'HTML',
            imgURL: './images/HTML5_logo.svg',
            dsc: 'A standard markup language used to create web pages, structuring content with tags and attributes.'
        },
        {
            name: 'CSS',
            imgURL: './images/css.svg',
            dsc: 'A styling language used to control the layout, appearance, and behavior of web pages.'
        },
        {
            name: 'Bootstrap',
            imgURL: './images/bootstrap.svg',
            dsc: 'A popular CSS framework for building responsive, mobile-first web applications.'
        },
        {
            name: 'Figma',
            imgURL: './images/Figma-logo.svg',
            dsc: 'A cloud-based interface design and prototyping platform for creating user interfaces and visual designs.'
        },
        {
            name: 'Python',
            imgURL: './images/Python-logo-notext.svg',
            dsc: 'A high-level, versatile language used for web development, data analysis, artificial intelligence, and more.'
        },
    ]

    return (
        <div className="container">
            <p className="skills-title">Our Skills</p>
            <div className="skills-content flex align-center justify-between">
                {
                    skills.map(skill => {
                        return <SkillCard
                            name={skill.name}
                            url={skill.imgURL}
                            dsc={skill.dsc}
                            key={skill.name}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Skills