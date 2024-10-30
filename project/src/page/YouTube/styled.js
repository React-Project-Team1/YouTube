import styled from 'styled-components';

export const YouTubeWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        li {
            width: 19.2%;
            &:not(:nth-child(5n)) {
                margin-right: 1%;
            }
            margin-bottom: 1%;
        }
    }
`;
