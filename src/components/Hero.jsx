import Button from "./Button";

const Hero = () => {

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const bg = document.getElementById('bg');
        bg.style.transform = `translateY(${scrolled * 0.3}px)`;
    });

    return (
        <div className="container">
            <section className="hero">
                <div className="hero-content flex">
                    <div className="hero-left flex flex-column justify-center">
                        <h1 className="hero-title text-white">Web studio of effective <span className="highlight-accent">development</span></h1>
                    </div>
                    <div className="hero-right flex flex-column justify-between">
                        <div className="hero-right-top">
                            <p className="hero-dsc">
                                We build websites, tools and applications that offer beautiful web
                                presence and ultimate user experience.
                            </p>
                            <div className="hero-buttons flex">
                                <Button text={"Let's Partner"} />
                                <Button
                                    text={"View Case Studies"}
                                    style={"text"}
                                    icon={<i class="ri-arrow-right-long-line ms-10"></i>}
                                    iconPosition={"right"}
                                />
                            </div>
                        </div>
                        <ul className="hero-features flex ">
                            <li>
                                <span className="highlight-accent">✔ </span>
                                Full spectrum of services
                            </li>
                            <li>
                                <span className="highlight-accent">✔ </span>
                                Flexible work terms
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="parallax-bg" id="bg"></div>
            </section>
        </div>
    );
};

export default Hero;