import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";

import { formatTitle } from "../../utils/utils";

interface ArticleDetailLinkProps {
  handleToggle: () => void;
  isArticlePinned: boolean;
  project?: string;
  title: string;
}

function ArticleDetailLink(props: ArticleDetailLinkProps) {
  const { title, project } = props;

  return (
    <>
      <Tooltip
        placement="top"
        title={props.isArticlePinned ? "Unpin Article" : "Pin Article"}
      >
        <button onClick={props.handleToggle}>
          <FontAwesomeIcon icon={faMapPin} />
        </button>
      </Tooltip>
      <Link to={`/article/${title}`} state={{ project }}>
        {formatTitle(title)}
      </Link>
    </>
  );
}

export default ArticleDetailLink;
