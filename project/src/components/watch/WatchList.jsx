import React from "react";
import { useSelector } from "react-redux";
import WatchItem from "./WatchItem";

const WatchList = ({ currentCategory, currentVideoCategory }) => {
  const { allMovies } = useSelector((state) => state.channel);

  // 현재 재생 중인 영상과 같은 카테고리의 영화만 필터링
  const filteredMovies = allMovies.filter(
    (movie) => movie.category === currentVideoCategory
  );

  return (
    <ul className="sub_video_wrap">
      {filteredMovies
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 15) // 최대 15개만 표시
        .map((movie) => (
          <WatchItem key={movie.movie_id} movie={movie} />
        ))}
    </ul>
  );
};

export default WatchList;
