import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WatchItemWrap } from "../../page/Watch/styled";

const WatchItem = ({ movie }) => {
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
  const { isSideMenu } = useSelector((state) => state.header);
  // 마우스 올렸을때 영상 재생 컨트롤
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  const movie_view_conunt = (movie_like_count) => {
    if (movie_like_count >= 10000) {
      return Math.floor(movie_like_count / 10000) + "만회";
    } else if (movie_like_count >= 1000) {
      return Math.floor(movie_like_count / 1000) + "천회";
    } else if (movie_like_count <= 1000) {
      return movie_like_count + "회";
    }
  };
  const navigate = useNavigate();
  return (
    <WatchItemWrap className="video-loder">
      <div className="content-wrap">
        <div
          className="video-wrap"
          onClick={() => {
            navigate(`/watch/${movie_id}`);
            if (isSideMenu) dispatch(SideMenuChange());
          }}
        >
          {play ? (
            <iframe
              className="video_main"
              src={movie_video + "&controls=0"}
              title={movie_title}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              autoPlay={play}
            />
          ) : (
            <img className="video_main" src={movie_image} alt={movie_title} />
          )}
        </div>
        <div className="text-wrap">
          <div
            className="movie_info"
            onClick={() => {
              navigate(`/watch/${movie_id}`);
              if (isSideMenu) dispatch(SideMenuChange());
            }}
          >
            <p className="movie_title">{movie_title}</p>
            <p className="channel ">{Channel[movie_channel].channel_name}</p>
            <p className="movie_like_count channel">
              조회수 {movie_view_conunt(movie_like_count)}
              <span className="movie_date channel">
                {movie_date.year}.{movie_date.month}.{movie_date.day}
              </span>
            </p>
          </div>
          <div className="pluse-menu">
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/See_more.svg"
              alt="pluse-menu"
            />
          </div>
        </div>
      </div>
    </WatchItemWrap>
  );
};

export default WatchItem;
