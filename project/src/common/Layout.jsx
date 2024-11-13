import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import { LayoutWrap } from '../style/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Popup from '../ui/popup/Popup';
import SavePopup from '../ui/SaveList/SavePopup';
import { isSavePopFalse } from '../store/modules/savePopupSlice';

const Layout = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    const { pathname } = useLocation();
    const { isSubscribers } = useSelector((state) => state.subscribers);
    const { isSavePop } = useSelector((state) => state.savepop);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', // 스무스 스크롤 추가
        });
    }, [pathname]);

    useEffect(() => {
        if (isSubscribers) {
            const modal = document.querySelector('#subscript-popup');
            modal.showModal();
        }
    }, [isSubscribers]);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(isSavePopFalse());
        }, 1000);
        if (isSavePop) timer;
        return () => clearInterval(timer);
    }, [isSavePop]);

    return (
        <LayoutWrap>
            <Header />
            <div className='content-wrap'>
                {isSideMenu && <SideMenu />}
                <Outlet />
            </div>
            <Popup />
            {isSavePop && <SavePopup left={isSideMenu ? '28rem' : '4rem'} />}
        </LayoutWrap>
    );
};

export default Layout;
