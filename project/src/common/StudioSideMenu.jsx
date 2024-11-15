import { useSelector } from 'react-redux';
import StudioMenuList from '../components/SideMenu/StudioMenuList';
import { SideMenuWrap } from '../style/styled';

const StudioSideMenu = ({ setEdit }) => {
    const { Channel } = useSelector((state) => state.channel);
    const { isLoginUser } = useSelector((state) => state.auth);
    const thisChannel = Object.values(Channel).find(
        (channel) => channel.channel_id === Number(isLoginUser.user_id)
    );
    return (
        <SideMenuWrap>
            {thisChannel && (
                <div className='channel'>
                    <div className='channel-img-wrap' onClick={() => setEdit(true)}>
                        <img src={thisChannel.channel_image} alt={thisChannel.channel_name} />
                        <div className='edit-img'>
                            <img
                                src='https://raw.githubusercontent.com/React-Project-Team1/data-center/12f918aeb4b87634ed4832e8b8f7679b31e3e53a/Icon/edit.svg'
                                alt='edit'
                            />
                        </div>
                    </div>
                    <div className='channel-name'>
                        <p className='my-channel'>내 채널</p>
                        <p className='my-channel-name'>{thisChannel.channel_name}</p>
                    </div>
                </div>
            )}
            <StudioMenuList />
        </SideMenuWrap>
    );
};

export default StudioSideMenu;
