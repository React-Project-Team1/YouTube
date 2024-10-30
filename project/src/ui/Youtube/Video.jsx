import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoWrap = styled.li`
    .video-wrap {
        width: 100%;
        padding-bottom: 56%;
        position: relative;
        margin-bottom: 1rem;
        border-radius: 1rem;
        overflow: hidden;
        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        iframe {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    .text-wrap {
        display: flex;
        .channel-logo {
            width: 3.4rem;
            height: 3rem;
            border-radius: 50%;
            margin-right: 1rem;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .movie_info {
            width: 100%;
            margin-bottom: 1%;
            .movie_title {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .movie_like_count,
            .channel_name {
                font-size: 1.4rem;
                color: #666;
            }
            .channel_name {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width: 70%;
            }
            .movie_date {
                margin-left: 1rem;
            }
        }
    }
`;
const Video = ({ movie }) => {
    const {
        movie_id,
        movie_title,
        movie_image,
        movie_video,
        movie_like_count,
        movie_date,
        movie_channel,
    } = movie;
    const { Channel } = useSelector((state) => state.channel);
    const [play, setPlay] = useState(false);
    const navigate = useNavigate();
    return (
        <VideoWrap onClick={() => navigate(`/watch/${movie_id}`)}>
            <div
                className='video-wrap'
                onMouseEnter={() => setPlay(true)}
                onMouseLeave={() => setPlay(false)}
            >
                {play ? (
                    <iframe
                        src={movie_video + '&controls=0'}
                        title={movie_title}
                        allowfullscreen='true'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        autoPlay='1'
                    />
                ) : (
                    <img src={movie_image} alt={movie_title} />
                )}
            </div>
            <div className='text-wrap'>
                <div className='channel-logo'>
                    <img src={Channel[movie_channel].channel_image} alt='' />
                </div>
                <div className='movie_info'>
                    <p className='movie_title'>{movie_title}</p>
                    <p className='channel_name'>{Channel[movie_channel].channel_name}</p>
                    <p className='movie_like_count'>
                        좋아요 {movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                        회
                        <span className='movie_date'>
                            {movie_date.year}.{movie_date.month}.{movie_date.day}
                        </span>
                    </p>
                </div>
            </div>
        </VideoWrap>
    );
};

export default Video;
