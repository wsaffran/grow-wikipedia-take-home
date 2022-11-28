import { Link } from "react-router-dom";

import { formatTitle } from "../../utils/utils";

interface ArticleDetailLinkProps {
  project?: string;
  title: string;
}

function ArticleDetailLink(props: ArticleDetailLinkProps) {
  const { title, project } = props;

  return (
    <Link to={`/article/${title}`} state={{ project }}>
      {formatTitle(title)}
    </Link>
  );
}

export default ArticleDetailLink;
