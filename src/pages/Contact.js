import { OutsideLink } from "../components/atoms/OutsideLink";
import { Stack } from "../templates/Stack";

export const Contact = () => {
  return (
    <Stack>
      Send a mail to the developer:{" "}
      <OutsideLink href='mailto:kjestevez.0795@gmail.com'>
        kjestevez.0795@gmail.com
      </OutsideLink>
    </Stack>
  );
};
