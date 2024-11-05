import styled from "styled-components";

export const WatchWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2% 3.5%;
  display: flex;

  .video-wrap {
    position: relative;
    width: 70%;
    margin: 0 auto;
    .videoInner {
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      position: relative;
      border-radius: 2rem;
      overflow: hidden;
    }
    iframe {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export const WatchListWrap = styled.div`
  width: 25%;
  /* padding-left: 2%; */
  display: flex;
  flex-direction: column;
  .sub_video_wrap {
    width: 100%;
    margin-left: -2.2rem;
  }
`;

export const WatchItemWrap = styled.li`
  cursor: pointer;
  .video_main {
    width: 85%;
    height: auto;
    max-width: 100%;
    border-radius: 1rem;
  }

  .video-loder {
    display: flex;
    margin-bottom: 16px;
  }

  .content-wrap {
    display: flex;
    width: 100%;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
  }

  .video-wrap {
    flex: 1;
  }

  .text-wrap {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: -2.5rem;
  }
  .movie_title {
    margin: 0 0 0.4rem 0;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    overflow: hidden;
    display: block;
    max-height: 4rem;
    -webkit-line-clamp: 2;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .channel {
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;
    overflow: hidden;
    display: block;
    max-height: 4rem;
    -webkit-line-clamp: 2;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: #606060;
  }
  .movie_like_count {
    display: flex;
    .movie_date {
      margin-left: 1rem;
    }
  }
`;
