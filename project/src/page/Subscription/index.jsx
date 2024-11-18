import { useSelector } from 'react-redux';
import SubscriptList from '../../components/Subscription/SubscriptList';

import { SubscriptionWrap } from './styled';
import NotSubscription from '../../components/Subscription/NotSubscription';
import { useEffect } from 'react';

const Subscription = () => {
    const { isAuth } = useSelector((state) => state.auth);

    useEffect(() => {
        document.title = '모든 구독 채널 | YouTube';
    }, []);

    return (
        <SubscriptionWrap>
            {isAuth ? (
                <div className='subscriptInner'>
                    <h2 className='subscriptH2'>모든 구독 채널</h2>
                    <div className='subscription-content-box'>
                        <SubscriptList />
                    </div>
                </div>
            ) : (
                <NotSubscription />
            )}
        </SubscriptionWrap>
    );
};

export default Subscription;
