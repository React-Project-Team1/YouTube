import { SubscriptListWrap } from "./styled";
import SubscriptItem from "./SubscriptItem";
import { useSelector } from "react-redux";

const SubscriptList = () => {
  const { Channel } = useSelector((state) => state.channel);
  const allChannel = Object.keys(Channel).map((key) => Channel[key]);
  console.log(allChannel);
  return (
    <SubscriptListWrap>
      {allChannel.map((channel) => (
        <SubscriptItem key={channel.channel_id} channel={channel} />
      ))}
    </SubscriptListWrap>
  );
};

export default SubscriptList;
