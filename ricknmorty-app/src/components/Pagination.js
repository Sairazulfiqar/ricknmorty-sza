import React from 'react';

const Pagination = ({prev, next, onPrev, onNext}) => {

    const handlePrev = () => {
        onPrev();
    };

    const handleNext = () => {
        onNext();
    };

    return (
        <div>
            <ul className='pagination justify-content-center mt-4'>
                {prev ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handlePrev}>
                            Previous
                        </button>
                    </li>
                ) : null}
                {next ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handleNext}>
                            Next
                        </button>
                    </li>
                ) : null}

            </ul>

        </div>
    )
}

export default Pagination;
