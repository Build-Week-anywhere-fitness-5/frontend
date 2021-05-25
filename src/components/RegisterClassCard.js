import React from 'react';

const RegisterClassCard = props => {
    const { nameOfClass, maxClassSize, numCurrentlyRegistered } = props;

    return(
        <div className="class">
            <h1>Class Name: {nameOfClass}</h1>
            <p>Max Class Size: {maxClassSize}</p>
            <p>{numCurrentlyRegistered}</p>

            <button>Add to Cart</button>
        </div>
    );
};

export default RegisterClassCard;