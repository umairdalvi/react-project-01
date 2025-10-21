const Submenu = ({ items }) => {
    const needsTwoCols = items.length > 8;

    return (
        <ul className={`sub-menu ${needsTwoCols ? 'col-2' : ''}`}>
            {items.map(item => (
                <li key={item.name} className="nav-item text-grey">
                    <a href={item.url}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
};

export default Submenu;
