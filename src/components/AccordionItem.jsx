const AccordionItem = ({
    accordionTitle,
    accordionDsc,
    accordionId,
    defaultOpen
}) => {

    function expandAccordion(id) {
        const acc = document.getElementById(`${id}`);
        acc.querySelector(".accordion-item-dsc").classList.toggle("accordion-item-dsc-expanded")
        acc.querySelector(".accordion-title-icon").classList.toggle("rotate-icon")
        acc.querySelector(".accordion-item-title").classList.toggle("highlight-accent")
    }

    const titleClassList = `accordion-item-title flex align-center justify-between ${defaultOpen ? "highlight-accent" : ""}`

    return (
        <div className="accordion-item" id={`${accordionId}`}>
            <div className={titleClassList} onClick={() => expandAccordion(accordionId)}>
                <p>{accordionTitle}</p>
                <span className="accordion-title-icon">
                    <i className="ri-arrow-down-s-line"></i>
                </span>
            </div>
            <div className={`accordion-item-dsc ${defaultOpen ? "accordion-item-dsc-expanded" : ""}`}>
                <p>{accordionDsc}</p>
            </div>
        </div>
    )
}

export default AccordionItem