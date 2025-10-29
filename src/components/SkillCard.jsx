const SkillCard = ({ name, url, dsc }) => {
    return (
        <div className="skill-card flex flex-column align-center">
            <div className="skill-card-title-wrapper flex flex-column align-center justify-center">
                <div className="skill-card-img-wrapper">
                    <img className="skill-card-img" src={url} alt={name + '-logo'} />
                </div>
                <div className="skill-card-title-wrapper">
                    <p className="skill-card-title">{name}</p>
                </div>
            </div>
            <div className="skill-card-dsc-wrapper">
                <p className="skill-card-dsc">{dsc}</p>
            </div>
        </div>
    )
}

export default SkillCard