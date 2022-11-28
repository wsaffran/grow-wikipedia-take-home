import { List } from "antd";
import cx from "classnames";

import { PinProps } from "../../utils/interfaces";

import PinnedArticle from "./PinnedArticle";

import styles from "./PinnedArticleList.module.scss";

interface ListRenderItem {
  title: string;
  content: JSX.Element;
}

function PinnedArticleList(props: PinProps) {
  const pins = Object.entries(props.pins);
  const isEmpty = pins.length === 0;
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
      <h3 className={styles.title}>Pinned Articles</h3>
      <List
        className={cx(styles.list, { [styles.empty]: isEmpty })}
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
