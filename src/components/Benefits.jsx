import BenefitCard from "./BenefitCard"
import Button from "./Button"

const Benefits = () => {

    const dsc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt corporis veniam ab perspiciatis animi natus."

    const benefits = [
        {
            icon: './images/benefit-1.svg',
            title: "Time zones ain't no thing",
            dsc: dsc,
            bg: 'white'
        },
        {
            icon: './images/benefit-3.svg',
            title: "Impossible? We're on it",
            dsc: dsc,
            bg: 'accent'
        },
        {
            icon: './images/benefit-2.svg',
            title: 'Flexible work terms',
            dsc: dsc,
            bg: 'accent'
        },
        {
            icon: './images/benefit-1.svg',
            title: 'Full spectrum of services',
            dsc: dsc,
            bg: 'white'
        },
    ]

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="benefits-content flex justify-between">
                    <div className="benefits-left">
                        <div className="benefits-title-wrapper">
                            <p className="benefits-title">Benefits of working with us</p>
                            <p className="benefits-subtitle">
                                Morbi et massa fames ac scelerisque sit commodo dignissim
                                <br /> faucibus vel quisque proin lectus.
                            </p>
                        </div>
                        <div className="contact-form-wrapper">
                            <form className="contact-form">
                                <p className="form-title">Send your request!</p>
                                <div className="input-group">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input className="form-control" type="text" id="name" placeholder="Your name" />
                                </div>
                                <div className="input-group">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input className="form-control" type="email" id="email" placeholder="Email Address" />
                                </div>
                                <div className="input-group">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea className="form-control" name="message" id="message" placeholder="Your message"></textarea>
                                </div>
                                <div className="form-btn">
                                    <Button
                                        text='Send Request'
                                        color='black'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="benefits-right">
                        {
                            benefits.map(benefit => {
                                return <BenefitCard
                                    iconURL={benefit.icon}
                                    bgColor={benefit.bg}
                                    title={benefit.title}
                                    dsc={benefit.dsc}
                                    key={benefit.title}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Benefits