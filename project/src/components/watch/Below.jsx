import { BelowWrap } from './styled';
import { LuMoreHorizontal } from 'react-icons/lu';
import BelowDetail from './BelowDetail';
import { RiFlagLine } from 'react-icons/ri';
import { useState } from 'react';
import Comment from './Comment';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IsAddList, IsDelList } from '../../store/modules/authSlice';
import { Button } from '../../ui/Button';
import SubscribersBtn from '../../ui/Subscribers/SubscribersBtn';
import { getAllMovies, IsMovieChangeLike } from '../../store/modules/channelSlice';
import { useMouseOutside } from '../../hook/useMouseOutside';
import { isSavePopTrue } from '../../store/modules/savePopupSlice';

const Below = ({
    movie,
    title,
    channelName,
    channelSubscribers,
    movieLikeCount,
    channelImage,
    movieBody,
    movie_date,
    channelId,
    moviesComment,
    movie_id,
    channel_name,
    movie_channel,
    thisChannel,
}) => {
    const [showReport, setShowReport] = useState(false);
    const [showReport2, setShowReport2] = useState(false);
    const dispatch = useDispatch();
    const { isLoginUser, isAuth } = useSelector((state) => state.auth); // 로그인된 사용자 정보 가져오기
    const navigate = useNavigate();
    const wrapRef = useMouseOutside(() => setShowReport(false));

    // 오프라인/재생목록 저장
    const handleClickType = (e, saveType, Msg) => {
        e.preventDefault();

        if (!isLoginUser || !isAuth) {
            alert('로그인이 필요합니다.');
            navigate('/login');
            return;
        }

        const isMovieInList = (type) =>
            isLoginUser[type].some((user) => user.movie_id === movie_id);

        const removeMovieFromList = (type) => {
            dispatch(IsDelList({ user_id: isLoginUser.user_id, type, movie }));
        };

        const addMovieToList = () => {
            dispatch(IsAddList({ user_id: isLoginUser.user_id, type: saveType, movie }));
            dispatch(isSavePopTrue(Msg));
        };

        const updateMovieLikeStatus = (operation) => {
            dispatch(IsMovieChangeLike({ channel_name, movie_id, type: operation }));
        };

        if (isMovieInList(saveType)) {
            // 이미 리스트에 있는 경우 삭제
            removeMovieFromList(saveType);
            dispatch(isSavePopTrue(Msg));
            if (saveType === 'like_Movie_List') {
                updateMovieLikeStatus('minus');
                dispatch(getAllMovies());
            }
        } else {
            addMovieToList();
            if (saveType === 'like_Movie_List') {
                if (isMovieInList('dislike_Movie_List')) {
                    removeMovieFromList('dislike_Movie_List');
                }
                updateMovieLikeStatus('plus');
                dispatch(getAllMovies());
            } else if (saveType === 'dislike_Movie_List') {
                if (isMovieInList('like_Movie_List')) {
                    removeMovieFromList('like_Movie_List');
                    updateMovieLikeStatus('minus');
                    dispatch(getAllMovies());
                }
            }
        }
    };

    const handleReportClick = () => {
        setShowReport((prev) => !prev);
    };
    const handleReportClick2 = () => {
        setShowReport2((prev) => !prev);
    };

    return (
        <BelowWrap>
            <h2 className='title'>{title}</h2>
            <div className='top'>
                <div className='channel'>
                    <div onClick={() => navigate(`/channel/${channel_name}`)}>
                        <img className='channelImg' src={channelImage} alt='' />
                    </div>
                    <div
                        className='channel_detail'
                        onClick={() => navigate(`/channel/${channel_name}`)}
                    >
                        <h2 className='channel_name'>{channelName}</h2>
                        <p className='channel_subscribers'>{channelSubscribers}명</p>
                    </div>
                    <div className='subscribers'>
                        <SubscribersBtn
                            channel_id={channelId}
                            channel_name={channel_name}
                            thisChannel={thisChannel}
                        />
                    </div>
                </div>

                <div className='action'>
                    <span className='Like'>
                        <button
                            className='BelowBtn like'
                            onClick={(e) =>
                                handleClickType(
                                    e,
                                    'like_Movie_List',
                                    isLoginUser['like_Movie_List']?.find(
                                        (user) => user.movie_id === movie_id
                                    )
                                        ? '좋아요 목록에 삭제'
                                        : '좋아요 목록에 추가'
                                )
                            }
                        >
                            <img
                                className='img'
                                src={
                                    isLoginUser['like_Movie_List']?.find(
                                        (user) => user.movie_id === movie_id
                                    )
                                        ? 'https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/disLike_black.svg'
                                        : 'https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/like.svg.svg'
                                }
                                alt=''
                            />
                            <span className='BelowBtn_comment'>{movieLikeCount}</span>
                        </button>
                        <button
                            className='BelowBtn'
                            onClick={(e) =>
                                handleClickType(
                                    e,
                                    'dislike_Movie_List',
                                    isLoginUser['dislike_Movie_List']?.find(
                                        (user) => user.movie_id === movie_id
                                    )
                                        ? '싫어요 취소'
                                        : '싫어요'
                                )
                            }
                        >
                            <img
                                className='img'
                                src={
                                    isLoginUser['dislike_Movie_List']?.find(
                                        (user) => user.movie_id === movie_id
                                    )
                                        ? 'https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/DisLike_black.svg'
                                        : 'https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/dislike.svg.svg'
                                }
                                alt=''
                            />
                        </button>
                    </span>

                    <Button
                        className='BelowBtn pc'
                        onClick={(e) =>
                            handleClickType(
                                e,
                                'Download_List',
                                isLoginUser['Download_List']?.find(
                                    (user) => user.movie_id === movie_id
                                )
                                    ? '오프라인 저장 삭제'
                                    : '오프라인 저장'
                            )
                        }
                    >
                        <img
                            className='img'
                            src={
                                isLoginUser['Download_List']?.find(
                                    (user) => user.movie_id === movie_id
                                )
                                    ? 'https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg'
                                    : 'https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg'
                            }
                            alt=''
                        />
                        <span className='BelowBtn_comment'>
                            {isLoginUser['Download_List']?.find(
                                (user) => user.movie_id === movie_id
                            )
                                ? '오프라인 저장 삭제'
                                : '오프라인 저장'}
                        </span>
                    </Button>
                    <Button
                        className={'BelowBtn pc'}
                        onClick={(e) =>
                            handleClickType(
                                e,
                                'Playlist',
                                isLoginUser['Playlist']?.find((user) => user.movie_id === movie_id)
                                    ? '재생목록 삭제'
                                    : '재생목록 저장'
                            )
                        }
                    >
                        <img
                            className='img'
                            src='https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg'
                            alt=''
                        />
                        <span className='BelowBtn_comment'>
                            {isLoginUser['Playlist']?.find((user) => user.movie_id === movie_id)
                                ? '재생목록 삭제'
                                : '재생목록 저장'}
                        </span>
                    </Button>
                    <Button className='BelowBtn pc' onClick={handleReportClick}>
                        <LuMoreHorizontal className='icons' />
                    </Button>
                    {showReport && (
                        <div className='report-text' ref={wrapRef}>
                            <RiFlagLine /> 신고
                        </div>
                    )}
                    {/* 모바일 */}
                    <Button className='BelowBtn more2' onClick={handleReportClick2} ref={wrapRef}>
                        <LuMoreHorizontal className='icons' />
                    </Button>
                    {showReport2 && (
                        <div className='report-text'>
                            <Button className='mobile_save'>
                                <img
                                    className='img'
                                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/complaint.svg
               '
                                    alt=''
                                />
                                <span className='BelowBtn_comment'>신고</span>
                            </Button>
                            <Button
                                className='mobile_save'
                                onClick={(e) =>
                                    handleClickType(
                                        e,
                                        'Download_List',
                                        isLoginUser['Download_List']?.find(
                                            (user) => user.movie_id === movie_id
                                        )
                                            ? '오프라인 저장 삭제'
                                            : '오프라인 저장'
                                    )
                                }
                            >
                                <img
                                    className='img'
                                    src={
                                        isLoginUser['Download_List']?.find(
                                            (user) => user.movie_id === movie_id
                                        )
                                            ? 'https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg'
                                            : 'https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg'
                                    }
                                    alt=''
                                />
                                <span className='BelowBtn_comment'>
                                    {isLoginUser['Download_List']?.find(
                                        (user) => user.movie_id === movie_id
                                    )
                                        ? '오프라인 저장 삭제'
                                        : '오프라인 저장'}
                                </span>
                            </Button>
                            <Button
                                className='mobile_save'
                                onClick={(e) =>
                                    handleClickType(
                                        e,
                                        'Playlist',
                                        isLoginUser['Playlist']?.find(
                                            (user) => user.movie_id === movie_id
                                        )
                                            ? '재생목록 삭제'
                                            : '재생목록 저장'
                                    )
                                }
                            >
                                <img
                                    className='img'
                                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg'
                                    alt=''
                                />
                                <span className='BelowBtn_comment'>
                                    {isLoginUser['Playlist']?.find(
                                        (user) => user.movie_id === movie_id
                                    )
                                        ? '재생목록 삭제'
                                        : '재생목록 저장'}
                                </span>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <BelowDetail
                movieBody={movieBody}
                channelName={channelName}
                movie_date={movie_date}
                movieLikeCount={movieLikeCount}
                channelSubscribers={channelSubscribers}
                channelImage={channelImage}
                channel_name={channel_name}
            />
            <Comment
                moviesComment={moviesComment}
                movie_id={movie_id}
                movie_channel={movie_channel}
            />
        </BelowWrap>
    );
};

export default Below;
