import star from '../../images/star-rating.png';
import { CON_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return (
        <div className='restaurant-card'>
            <img
                id='restaurant-image'
                src={CON_URL + cloudinaryImageId}
                width={180}
                // height={180}
            />
            <div className='restaurant-details'>
                <div className='restaurant-introduction'>
                    <h3 className='restaurant-name'>{name}</h3>
                    <p className='restaurant-cuisine'>{cuisines.join(', ')}</p>
                </div>
                <div className='restaurant-rating-delivery'>
                    <h4 className='restaurant-rating'>
                        {avgRating}
                        <span>
                            {' '}
                            <img src={star} width={12} />
                        </span>
                    </h4>
                    <p className='restaurant-cost-for-two'>
                        {costForTwo.toUpperCase()}
                    </p>
                    <p className='restaurant-delivery-time'>
                        {deliveryTime} minutes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
