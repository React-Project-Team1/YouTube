import { useNavigate, useParams } from 'react-router-dom';
import { StudioWrap } from './styled';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SubscribersList from '../../components/Studio/SubscribersList';

const Studio = () => {
    const { User_ID } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    const { isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const thisChannel = Object.values(Channel).find(
        (channel) => channel.channel_id === Number(User_ID)
    );

    useEffect(() => {
        if (!isAuth) navigate('/login');
    }, [isAuth]);

    if (!thisChannel)
        return (
            <StudioWrap>
                <p>채널 만들기</p>
            </StudioWrap>
        );
    if (thisChannel)
        return (
            <StudioWrap>
                <h2 className='studio-title'>채널 대시보드</h2>
                <SubscribersList
                    subscribers={thisChannel.channel_subscribers}
                    channel={thisChannel.Movies[0].movie_channel}
                />
            </StudioWrap>
        );
};

export default Studio;
