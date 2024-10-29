import { useParams } from 'react-router-dom';
import { WatchWrap } from './styled';

const Watch = () => {
    const { Movie_ID } = useParams();
    return (
        <WatchWrap>
            <h2>Watch {Movie_ID}</h2>
        </WatchWrap>
    );
};

export default Watch;
