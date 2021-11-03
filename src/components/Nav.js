import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Walker
                </a>
            </h2>
            <nav>
                <ul className="flex-row nav nav-tabs">
                    {tabs.map(tab => (
                        <li className="nav-item" key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                // Whenever a tab is clicked on,
                                // the current page is set through the handlePageChange props.
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
