import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <div className="container">
      <section className="services">
        <div className="services-content">
          <div className="services-title">
            <p>Our Services</p>
          </div>
          <div className="services-cards flex justify-between">
            <ServiceCard
              serviceIcon='./images/service-icon-1.svg'
              serviceTitle='Web Development'
              serviceDsc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem soluta. Modi harum odit, id facere aliquid sint tenetur asperiores.'
            />
            <ServiceCard
              serviceIcon='./images/service-icon-2.svg'
              serviceTitle='Mobile Development'
              serviceDsc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem soluta. Modi harum odit, id facere aliquid sint tenetur asperiores.'
            />
            <ServiceCard
              serviceIcon='./images/service-icon-3.svg'
              serviceTitle='Graphic Design'
              serviceDsc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem soluta. Modi harum odit, id facere aliquid sint tenetur asperiores.'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services