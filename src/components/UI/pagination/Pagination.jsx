import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, setPage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    key={p}
                    className={page === p ? "page page__current" : "page"}
                    onClick={() => setPage(p)}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;