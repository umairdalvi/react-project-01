const BenefitCard = ({ bgColor = 'white', title, iconURL, dsc }) => {
    return (
        <div className={`benefit-card bg-${bgColor}`}>
            <div className="benefit-card-icon-wrapper">
                <img src={iconURL} alt="icon" className="benefit-card-icon" />
            </div>
            <div className="benefit-card-title-wrapper">
                <div className="benefit-card-title">{title}</div>
            </div>
            <div className="benefit-card-dsc-wrapper">
                <p className="benefit-card-dsc">{dsc}</p>
            </div>
        </div>
    )
}

export default BenefitCard