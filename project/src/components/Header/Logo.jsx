import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className='logo'>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                }}
            >
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_logo.svg'
                    alt='Youtube'
                />
            </a>
        </div>
    );
};

export default Logo;
