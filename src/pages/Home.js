import { Preview } from "../molecules/Preview";
import { Hero } from "../organisms/Hero";
import { NewsVideo } from "../organisms/NewsVideo";
import { TwoColumns } from "../organisms/TwoColumns";
import { Stack } from "../templates/Stack";

export const Home = () => {
  return (
    <div>
      <Hero
        img='https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_1280.jpg'
        text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
      />
      <TwoColumns>
        <Stack>
          <NewsVideo
            video='https://www.youtube.com/embed/T7bKgTeqGSM'
            topic={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}
          />
        </Stack>
        <Stack>
          <Preview
            img='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690_1280.jpg'
            text={`Nullam mauris erat, dapibus vel augue at, convallis eleifend ex. Sed fringilla neque in magna iaculis consectetur in eu neque. Cras odio dolor, suscipit sit amet eros eu, tempor ornare enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu venenatis tellus, vulputate hendrerit nisl. Vestibulum eleifend tortor non hendrerit mattis. Nulla facilisi.`}
          />
          <Preview
            img='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690_1280.jpg'
            text={`Nullam mauris erat, dapibus vel augue at, convallis eleifend ex. Sed fringilla neque in magna iaculis consectetur in eu neque. Cras odio dolor, suscipit sit amet eros eu, tempor ornare enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu venenatis tellus, vulputate hendrerit nisl. Vestibulum eleifend tortor non hendrerit mattis. Nulla facilisi.`}
          />
          <Preview
            img='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690_1280.jpg'
            text={`Nullam mauris erat, dapibus vel augue at, convallis eleifend ex. Sed fringilla neque in magna iaculis consectetur in eu neque. Cras odio dolor, suscipit sit amet eros eu, tempor ornare enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu venenatis tellus, vulputate hendrerit nisl. Vestibulum eleifend tortor non hendrerit mattis. Nulla facilisi.`}
          />
          <Preview
            img='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690_1280.jpg'
            text={`Nullam mauris erat, dapibus vel augue at, convallis eleifend ex. Sed fringilla neque in magna iaculis consectetur in eu neque. Cras odio dolor, suscipit sit amet eros eu, tempor ornare enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu venenatis tellus, vulputate hendrerit nisl. Vestibulum eleifend tortor non hendrerit mattis. Nulla facilisi.`}
          />
        </Stack>
      </TwoColumns>
    </div>
  );
};
