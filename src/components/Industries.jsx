import Accordion from "./Accordion"

const Industries = () => {
    return (
        <div className='container'>
            <div className="industries-title-wrapper">
                <p className="industries-title">Industries we work in</p>
                <p className="industries-subtitle">Most of our projects come from the industries below</p>
            </div>
            <div className="industries-content flex justify-between">
                <div className="industries-left">
                    <Accordion />
                </div>
                <div className="industries-right">
                    <img src="./images/industries.jpg" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Industries