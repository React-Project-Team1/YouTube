import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import Popup from '../popup/Popup';
import { AddNewSubscription } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';
import { SubscribersBtnWrap } from './styled';

const SubscribersBtn = ({ channel_id, channel_name }) => {
    const { isLoginUser, isAuth } = useSelector((state) => state.auth);

    const isSubscribed = isLoginUser?.Subscription_Id?.includes(channel_id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubscribeClick = (e) => {
        if (!isAuth) navigate(`/login`);
        e.stopPropagation();
        dispatch(
            AddNewSubscription({
                user_id: isLoginUser.user_id,
                channel_id,
            })
        );
    };
    const handleShowPopup = (e) => {
        if (!isAuth) navigate(`/login`);
        e.stopPropagation();
        const modal = document.querySelector('#subscript-popup');
        modal.showModal();
    };
    const handleClosePopup = () => {
        const modal = document.querySelector('#subscript-popup');
        modal.close();
    };

    return (
        <SubscribersBtnWrap>
            {isSubscribed ? (
                <Button className='subscribers-btn' onClick={handleShowPopup}>
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg'
                        alt='구독 중'
                        className='img'
                    />
                    구독중
                </Button>
            ) : (
                <Button className='not-subscribers-btn' onClick={handleSubscribeClick}>
                    구독
                </Button>
            )}

            <Popup
                handleClosePopup={handleClosePopup}
                channel_name={channel_name}
                thisChannelID={channel_id}
            />
        </SubscribersBtnWrap>
    );
};

export default SubscribersBtn;
