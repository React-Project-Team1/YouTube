import { useDispatch, useSelector } from 'react-redux';
import { UserMenuWrap } from './styled';
import { useNavigate } from 'react-router-dom';
import { UserLogout } from '../../store/modules/authSlice';

const UserMenuList = () => {
    const { isAuth, isLoginUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavClike = (name) => {
        if (!isAuth) return;
        if (name === 'logout') {
            dispatch(UserLogout());
            navigate(`/`);
        } else if (name === 'studio') {
            navigate(`/studio/${isLoginUser.user_id}/dashboard`);
        } else {
            alert('error');
        }
    };
    if (isAuth && isLoginUser)
        return (
            <UserMenuWrap>
                <li onClick={() => handleNavClike('logout')} className='log-out'>
                    로그아웃
                </li>
                <li onClick={() => handleNavClike('studio')} className='studio'>
                    Youtube 스튜디오
                </li>
            </UserMenuWrap>
        );
};

export default UserMenuList;
