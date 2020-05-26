import React from "react";
import PictureSelect from "./component/PictureSelect";

const pictures = [
  {
    id: "1",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
  {
    id: "2",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
  {
    id: "3",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
];

const PictureTemplete = () => {
  const [value] = React.useState(["1"]);

  return (
    <PictureSelect
      pictures={pictures}
      value={value}
      onChange={(value) => console.log(value)}
    />
  );
};

export default PictureTemplete;
