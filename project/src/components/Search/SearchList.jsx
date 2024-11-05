import { useSelector } from 'react-redux';
import { SearchListWrap } from '../../page/Search/styled';
import Popup from '../../ui/popup/Popup';
import SearchChannel from './SearchChannel';
import SearchMovies from './SearchMovies';
import { useState } from 'react';

const SearchList = ({ Search, allMovies }) => {
    const [isShown, setIsShown] = useState(false); // 검색창 클릭
    const { Channel } = useSelector((state) => state.channel);
    const { Movies } = Channel;
    const allChannel = Object.keys(Channel).map((key) => Channel[key]);
    const filteredChannel = allChannel.filter((channel) =>
        channel.channel_name.toLowerCase().includes(Search.toLowerCase())
    ); // 검색어와 일치하는 영상

    const handleShow = () => {
        // 인풋 클릭 시 검색창 보이기
        setIsShown(!isShown);
        setIsShown(false);
    };

    return (
        <SearchListWrap>
            {filteredChannel.map((channel) => (
                <SearchChannel
                    key={channel.channel_id}
                    channel={channel}
                    Movies={Movies}
                    handleShow={handleShow}
                />
            ))}
            <SearchMovies Search={Search} allMovies={allMovies} isShown={isShown} />
            {/* <Popup /> 해야 함 */}
        </SearchListWrap>
    );
};

export default SearchList;
