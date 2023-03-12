import { Label } from "../atoms/Label";

export const BlogPost = ({ htmlContent, title }) => (
  <div>
    <Label text={title} />
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  </div>
);
