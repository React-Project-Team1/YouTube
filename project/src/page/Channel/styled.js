import styled from 'styled-components';

export const ChannelWrap = styled.div`
    /* background-color: black; */
    overflow: hidden;
    .header_banner {
        display: block;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        height: 21.2109rem;
        background-color: #dddddd;
        .channel_banner {
            height: 100%;
            img {
                display: inline-block;
                object-fit: cover;
                width: 100%;
                border-radius: 1.5rem;
                min-height: 1px;
                min-width: 1px;
            }
        }
    }
    .page_header {
        padding-top: 1.6rem;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        /* border: 1px solid #000; */
        .page_header_profile {
            display: flex;
            /* border: 1px solid red; */
            .header_left {
                margin-right: 16px;
                .channel_img {
                    border-radius: 50%;
                }
            }
            .header_right {
                .channel_name {
                    font-size: 2em;
                    font-weight: bold;
                }
                .channel_info {
                    color: #555;
                }
                .channel_desc {
                    margin-bottom: 1.2rem;
                    font-size: 1.4rem;
                }
                .subscribe_btn {
                    background: #000;
                    color: white;
                    font-size: 14px;
                    line-height: 36px;
                    border-radius: 5rem;
                    border: 1px solid black;
                    padding: 0 1.6rem;
                    margin: 12px 0 8px 0;
                }
            }
        }
    }
    .channel_navbar {
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        .inner {
            display: flex;
            line-height: 4.8rem;

            li {
            }
        }
    }
`;
