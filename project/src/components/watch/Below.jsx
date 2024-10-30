import { Link, useNavigate } from "react-router-dom";
import { BelowWrap } from "./styled";
import Channel from "../../page/Channel";

const Below = ({ title }) => {
  return (
    <BelowWrap>
      <h2 className="title">{title}</h2>
      <div className="top">
        <div className="channel">
          <div>
            <img
              className="channelImg"
              src="https://yt3.googleusercontent.com/wNoNXmOpkCgBiPmx8pusWVLDeXIADKo1MhiYz22JBdpVxzCFII7kbZ9g8ihRh1oRszvrvwetgw=s160-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="channel_detail">
            <h2 className="channel_name">채널명</h2>
            <p className="channel_subscribers">구독자 xxx명</p>
          </div>
        </div>
        <div className="subscribers">
          <button className="subscribers-btn">구독</button>
        </div>
        <div className="action">
          <button>
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/Like_list.svg"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/Like_list.svg"
              alt=""
            />
          </button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </BelowWrap>
  );
};

export default Below;
