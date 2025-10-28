import AccordionItem from "./AccordionItem"

const Accordion = () => {

    const accordionItemList = [
        {
            id: 0,
            accordionTitle: 'Finance and Insurance',
            accordionDsc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos non ad fuga dolore numquam similique maiores natus aspernatur ipsam.',
            defaultOpen: true
        },
        {
            id: 1,
            accordionTitle: 'Startup and Technology',
            accordionDsc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos non ad fuga dolore numquam similique maiores natus aspernatur ipsam.',
            defaultOpen: false
        },
        {
            id: 2,
            accordionTitle: 'Medicine and Beauty',
            accordionDsc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos non ad fuga dolore numquam similique maiores natus aspernatur ipsam.',
            defaultOpen: false
        },
        {
            id: 3,
            accordionTitle: 'E-commerce',
            accordionDsc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos non ad fuga dolore numquam similique maiores natus aspernatur ipsam.',
            defaultOpen: false
        }
    ]

    return (
        <div className="accordion-body">
            {
                accordionItemList.map(item => {
                    return <AccordionItem
                        accordionTitle={item.accordionTitle}
                        accordionDsc={item.accordionDsc}
                        accordionId={item.id}
                        key={item.id}
                        defaultOpen={item.defaultOpen}
                    />
                })
            }
        </div>
    )
}

export default Accordion