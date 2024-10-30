import { Link, useParams } from 'react-router-dom';
import { ChannelWrap } from './styled';
import { useSelector } from 'react-redux';

const Channel = () => {
    const { Channel_name } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    console.log(Channel[Channel_name]);
    return (
        <ChannelWrap>
            {/* 10-30 서희원님 작업 */}
            <div className='header_banner'>
                <div className='channel_banner'>
                    <img
                        src='https://yt3.googleusercontent.com/YSzNgAfL46tAd9qCJDyBKxIXVzfJUzq4ic8dY9LbGCsnGEuZ3S6QZkcY6zPZG_GIuuNaa9f1=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
                        alt=''
                    />
                </div>
            </div>
            <div className='page_header'>
                <div className='page_header_profile'>
                    <div className='header_left'>
                        <img
                            className='channel_img'
                            src='https://yt3.googleusercontent.com/ihi8LdmSNfcp96-gaHBE1Av3-PLotF9rOhUxTy_pY-CeHYCAkDzE1ktxfe4gbhtYR0CIYjUPba0=s160-c-k-c0x00ffffff-no-rj'
                            alt=''
                        />
                    </div>
                    <div className='header_right'>
                        <div className='channel_name'>채널명</div>
                        <div className='channel_info'>
                            {' '}
                            @xxx아이디 • 구독자 xxx만명 • 동영상 xxx개
                            <div className='channel_desc'> 채널소개 설명 ~~~</div>
                            <button className='subscribe_btn'>구독</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='channel_navbar'>
                <ul className='inner'>
                    <li>
                        <Link to={'/'}>홈</Link>
                    </li>
                    <li>
                        <Link to={'/'}>동영상</Link>
                    </li>
                </ul>
                {/* <div className="channel_search">
                    검색
                </div> */}
            </div>
        </ChannelWrap>
    );
};

export default Channel;
