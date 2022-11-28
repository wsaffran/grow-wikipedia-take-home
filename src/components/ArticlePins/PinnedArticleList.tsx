import { List } from "antd";

import { PinProps } from "../../utils/interfaces";

import PinnedArticle from "./PinnedArticle";

interface ListRenderItem {
  title: string;
  content: JSX.Element;
}

function PinnedArticleList(props: PinProps) {
  const pins = Object.entries(props.pins);
  const data = pins.map(
    (pin: string[], index: number): ListRenderItem => ({
      title: pin[0],
      content: (
        <PinnedArticle key={index} pin={pin} togglePin={props.togglePin} />
      ),
    })
  );

  return (
    <>
      <h3>Pinned Articles</h3>
      <List
        bordered={true}
        dataSource={data}
        grid={{ gutter: 16, column: 3 }}
        itemLayout="vertical"
        pagination={{ pageSize: 3 }}
        renderItem={(item: ListRenderItem) => (
          <List.Item key={item.title}>{item.content}</List.Item>
        )}
      />
    </>
  );
}

export default PinnedArticleList;