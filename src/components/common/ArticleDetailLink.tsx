import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import cx from "classnames";

import { formatTitle } from "../../utils/utils";

import styles from "./ArticleDetailLink.module.scss";

interface ArticleDetailLinkProps {
  handleToggle: () => void;
  isArticlePinned: boolean;
  project?: string;
  title: string;
}

function ArticleDetailLink(props: ArticleDetailLinkProps) {
  const { handleToggle, isArticlePinned, project, title } = props;

  return (
    <div className={styles.root}>
      <Tooltip
        placement="top"
        title={isArticlePinned ? "Unpin Article" : "Pin Article"}
      >
        <button
          className={cx(styles.pin, {
            [styles.pinned]: isArticlePinned,
          })}
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faMapPin} />
        </button>
      </Tooltip>
      <Link
        className={styles.title}
        state={{ project }}
        to={`/article/${title}`}
      >
        {formatTitle(title)}
      </Link>
    </div>
  );
}

export default ArticleDetailLink;
