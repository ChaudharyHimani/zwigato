import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import RestaurantsData from '../utils/mockData';
// import resData from '../utils/mockData';

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(RestaurantsData);

    // const arr = useState(RestaurantsData);
    // const [listOfRestaurants, setListOfRestaurants] = arr;

    // const arr = useState(RestaurantsData);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];

    // all three of these above implementations are same!!!

    return (
        <div className='body'>
            {/* <div className='search'>search</div> */}
            <button
                className='filter-button'
                onClick={() => {
                    // console.log('Button Clicked');
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4,
                    );
                    setListOfRestaurants(filteredList);
                }}>
                Top Rated Restaurants
            </button>
            <div className='restaurant-container'>
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
