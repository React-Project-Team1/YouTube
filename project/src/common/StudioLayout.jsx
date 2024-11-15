import { Outlet, useNavigate } from 'react-router-dom';
import { StudioLayoutWrap } from '../style/styled';
import Header from './Header';
import { useSelector } from 'react-redux';
import StudioSideMenu from './StudioSideMenu';
import { useEffect, useState } from 'react';
import PopWrap from './PopWrap';
import EditChannelInfo from '../components/Studio/EditChannelInfo';

const StudioLayout = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    const { isAuth } = useSelector((state) => state.auth);
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) navigate('/login');
    }, []);
    if (isAuth)
        return (
            <StudioLayoutWrap>
                <Header />
                <div className='content-wrap'>
                    {isSideMenu && <StudioSideMenu setEdit={setEdit} />}
                    <Outlet />
                </div>
                <PopWrap />
                {edit && <EditChannelInfo setEdit={setEdit} />}
            </StudioLayoutWrap>
        );
};

export default StudioLayout;
