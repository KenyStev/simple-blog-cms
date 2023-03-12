import { Video } from "../atoms/Video";
import { JustifiedText } from "../atoms/Text";

export const NewsVideo = ({ video, topic }) => (
  <>
    <JustifiedText>{topic}</JustifiedText>
    <Video embeded src={video} height='400' />
  </>
);
