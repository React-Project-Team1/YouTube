import { useDispatch } from 'react-redux';
import { Button } from '../../ui/Button';
import { AddNewSubscription } from '../../store/modules/authSlice';
import Popup from '../../ui/popup/Popup';
import { useState } from 'react';

const SearchChannel = ({ channel }) => {
    const dispatch = useDispatch();
    const { channel_image, channel_name, channel_subscribers, Movies, channel_id } = channel;
    const [isSubscribed, setIsSubscribed] = useState(false);
    const subscribers_conunt = (channel_subscribers) => {
        if (channel_subscribers >= 10000) {
            return Math.floor(channel_subscribers / 10000) + '만명';
        } else if (channel_subscribers >= 1000) {
            return Math.floor(channel_subscribers / 1000) + '천명';
        } else if (channel_subscribers <= 1000) {
            return channel_subscribers + '명';
        }
    };

    const handelSubscription = () => {
        dispatch(AddNewSubscription(channel_id));
        setIsSubscribed(!isSubscribed);
    };

    const handleShowPopup = () => {
        const modal = document.querySelector('#subscript-popup');
        modal.showModal();
    };
    const handleClosePopup = () => {
        const modal = document.querySelector('#subscript-popup');
        modal.close();
    };

    return (
        <li className="channel-item">
            <div className="channel-profile">
                <img src={channel_image} alt={channel_name} className="channel-logo" />
            </div>
            <div className="channel-info">
                <div className="into-text">
                    <h3 className="name">{channel_name}</h3>
                    <p className="info">
                        @{Movies[0].movie_channel} • 구독자
                        {subscribers_conunt(channel_subscribers)}
                    </p>
                </div>
                {isSubscribed ? (
                    <Button
                        className="channel-unsub-btn"
                        onClick={(handelSubscription, handleShowPopup)}
                    >
                        구독 중
                    </Button>
                ) : (
                    <Button className="channel-btn" onClick={handelSubscription}>
                        구독
                    </Button>
                )}
                {/* 수정 필요 */}
                <Popup handleClosePopup={handleClosePopup} />
            </div>
        </li>
    );
};

export default SearchChannel;
