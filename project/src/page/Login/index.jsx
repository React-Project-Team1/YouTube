import { useNavigate } from 'react-router-dom';
import { LoginWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../../store/modules/authSlice';
import { useState } from 'react';
import { Button } from '../../ui/Button';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ user_email: '', user_password: '' });
    const { LoginUser } = useSelector((state) => state.auth);
    const { user_email, user_password } = LoginUser;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { user_email, user_password } = user;
        if (!user_email || !user_password) return;
        dispatch(UserLogin(user));
        navigate('/');
    };
    return (
        <LoginWrap>
            <div className='login-container'>
                <form className='login-box' onSubmit={onSubmit}>
                    <img
                        className='logo'
                        onClick={() => navigate('/')}
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_logo.svg'
                        alt='Youtube'
                    />
                    <p className='login-input'>
                        <input
                            type='email'
                            name='user_email'
                            // placeholder="이메일 또는 전화번호"
                            placeholder='이메일'
                            onChange={changeInput}
                            // value="test@naver.com"
                        />
                        <input
                            type='password'
                            name='user_password'
                            placeholder='비밀번호'
                            onChange={changeInput}
                        />
                    </p>
                    <Button className='login-btn' type='submit'>
                        로그인
                    </Button>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;
