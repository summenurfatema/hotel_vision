import React from 'react';

const ExpCard = ({ exp }) => {
    const { title, location, image, price, host, rating } = exp
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="">{title}</h2>
                <p>{location}</p>
                <p>{price}</p>
                <div className="rating gap-1">
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" /><p>{rating}</p>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default ExpCard;