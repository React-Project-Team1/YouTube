import styled from "styled-components";
export const BelowWrap = styled.div`
  height: 4rem;
  padding: 1% 0;
  .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.8rem;
  }

  .top {
    padding: 1% 0;
    display: flex;
    vertical-align: middle;
    .channel {
      display: flex;
      .channelImg {
        width: 4rem;
        margin-top: 0.5rem;
      }
      .channel_detail {
        margin-left: 1.2rem;
        margin-right: 2.4rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .channel_name {
          font-size: 1.7rem;
          font-weight: 600;
        }
        .channel_subscribers {
          font-size: 1.4rem;
          color: #606060;
        }
      }
    }
    .subscribers {
      transform: translateY(25%);
      margin-left: 1.5rem;
      .subscribers-btn {
        color: #fff;
        background: #0f0f0f;
        padding: 0 1.6rem;
        height: 3.6rem;
        font-size: 1.4rem;
        border-radius: 1.8rem;
      }
    }
  }
`;
