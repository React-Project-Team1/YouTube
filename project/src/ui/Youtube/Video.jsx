import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoWrap = styled.li`
    .video-wrap {
        width: 100%;
        img {
            width: 100%;
            height: 100%;
        }
        iframe {
            width: 100%;
        }
    }
`;
const Video = ({ movie }) => {
    const { movie_id, movie_title, movie_image, movie_video, movie_like_count, movie_date } = movie;
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
                        src={movie_video}
                        title={movie_title}
                        allowfullscreen='true'
                        autoPlay='1'
                    />
                ) : (
                    <img src={movie_image} alt={movie_title} />
                )}
            </div>
            <div className='text-wrap'>
                <p className='movie_title'>{movie_title}</p>
            </div>
        </VideoWrap>
    );
};

export default Video;
