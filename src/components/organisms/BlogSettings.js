import styled from "styled-components";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const FlexBox = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: end;
`;

export const BlogSettings = ({ text, href, ...props }) => {
  const navigate = useNavigate();

  return (
    <FlexBox {...props}>
      <Button onClick={() => navigate(href)}>{text}</Button>
    </FlexBox>
  );
};
