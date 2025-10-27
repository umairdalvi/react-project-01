import Button from "./Button"

const ServiceCard = ({
    serviceTitle,
    serviceDsc,
    serviceIcon
}) => {
    return (
        <div className='service-card flex flex-column align-center'>
            <div className='service-icon'>
                <img src={serviceIcon} alt="service-icon" />
            </div>
            <div className='service-text'>
                <p className='service-title'>{serviceTitle}</p>
                <p className='service-dsc'>{serviceDsc}</p>
            </div>
            <div className="service-btn">
                <Button
                    text={<i className="ri-arrow-right-long-line"></i>}
                    shape='circle'
                    fillType='outline'
                />
            </div>
        </div>
    )
}

export default ServiceCard