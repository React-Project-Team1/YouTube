import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IsAddList, IsDelList } from '../../store/modules/authSlice';
const SaveItem = ({ save, movie }) => {
    const { type, img, name, falseName, trueName, falseImg, trueImg } = save;
    const { isLoginUser } = useSelector((state) => state.auth);
    const itemRef = useRef(null);
    const dispatch = useDispatch();
    const [ofType, setOfType] = useState(false);
    const handleSave = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(IsAddList({ user_id: isLoginUser.user_id, type, movie }));
        setOfType(!ofType);
    };
    const handleDelete = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(IsDelList({ user_id: isLoginUser.user_id, type, movie }));
    };
    useEffect(() => {
        const itemElement = itemRef.current;
        if (itemElement) {
            itemElement.addEventListener('click', handleSave);
        }
        return () => {
            if (itemElement) {
                itemElement.removeEventListener('click', handleSave);
            }
            console.log(itemElement);
        };
    }, [handleSave]);
    if (type !== 'Download_List') {
        return (
            <li className='save-item' ref={itemRef}>
                <img src={img} alt={name} />
                {name}
            </li>
        );
    }
    return (
        <li className='save-item' ref={itemRef} onClick={ofType === true && handleDelete}>
            <img src={ofType ? trueImg : falseImg} alt={ofType ? trueName : falseName} />
            {ofType ? trueName : falseName}
        </li>
    );
};
export default SaveItem;
