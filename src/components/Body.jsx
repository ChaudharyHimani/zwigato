import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import RestaurantsData from '../utils/mockData';
import Shimmer from './Shimmer';

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
        );
        const json = await data.json();
        // console.log('JSON: ', json);
        // console.log(
        //     'Data to be fetched: ',
        //     // json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
        // );

        setListOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants,
        );
        setFilteredRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants,
        );
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='buttons'>
                <div className='search'>
                    <input
                        type='text'
                        className='search-box'
                        placeholder='Search for food, restaurants, cuisines...'
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            // console.log(searchText);
                        }}
                    />
                    <button
                        className='search-btn'
                        onClick={() => {
                            const filteredRestaurants =
                                listOfRestaurants.filter((res) => {
                                    return res?.info?.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase());
                                });
                            console.log(filteredRestaurants);
                            setFilteredRestaurants(filteredRestaurants);
                        }}>
                        Search
                    </button>
                </div>
                <button
                    className='filter-button'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4,
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
                <button
                    className='chinese-button'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.cuisines.includes('Chinese'),
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Chinese
                </button>
                <button
                    className='chinese-button'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.cuisines.includes('North Indian'),
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    North Indian
                </button>
                <button
                    className='chinese-button'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.cuisines.includes('South Indian'),
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    South Indian
                </button>
                <button
                    className='chinese-button'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.cuisines.includes('Pizzas'),
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Pizzas
                </button>
                <button
                    className='chinese-button'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.cuisines.includes('Biryani'),
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Biryani
                </button>
                <button
                    className='chinese-button'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.cuisines.includes('Snacks'),
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Snacks
                </button>
                <button
                    className='chinese-button'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.cuisines.includes('Desserts'),
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Desserts
                </button>
            </div>
            <div className='restaurant-container'>
                {filteredRestaurants.map((restaurant) => (
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
