import styled from "styled-components";

const VideoStyled = styled.video``;
const VideoStyledEmbeded = styled.iframe`
  height: ${(props) => props.height || "100%"};
`;

export const Video = ({ src, embeded, ...props }) =>
  embeded ? (
    <VideoStyledEmbeded
      src={src}
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowfullscreen
      {...props}
    />
  ) : (
    <VideoStyled src={src} />
  );
