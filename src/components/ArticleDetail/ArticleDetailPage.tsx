import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Col, Row } from "antd";
import dayjs from "dayjs";

import {
  useArticleMonthlyPageViewData,
  useArticleSummaryData,
} from "../../services/articlesService";
import { DATE_FORMAT_USER } from "../../utils/constants";
import { PageViewData } from "../../utils/interfaces";
import { formatTitle } from "../../utils/utils";
import ErrorDisplay from "../common/ErrorDisplay";

import styles from "./ArticleDetailPage.module.scss";

function ArticleDetailPage() {
  const { id: title } = useParams();
  const {
    state: { project },
  } = useLocation();

  const {
    data: articlePageViews,
    isLoading: isViewsLoading,
    isError: isViewsError,
  } = useArticleMonthlyPageViewData(title || "", project);
  const {
    data: articleSummary,
    isLoading: isSummaryLoading,
    isError: isSummaryError,
  } = useArticleSummaryData(title || "");

  const isErrorOrLoading =
    isViewsError || isSummaryError || isViewsLoading || isSummaryLoading;

  if (isErrorOrLoading || !articleSummary || !articlePageViews) {
    return (
      <ErrorDisplay
        errorStates={[isViewsError, isSummaryError]}
        errorText="No data for this page..."
      />
    );
  }

  return (
    <div className={styles.root}>
      <h2>{formatTitle(articleSummary.title)}</h2>
      {parse(articleSummary.extract_html)}
      <Row className={styles["top-days-title"]}>
        <Col span={24}>Top Days This Month</Col>
      </Row>
      <Row>
        {articlePageViews.map((item: PageViewData, index: number) => (
          <Col key={index} span={8}>
            <b>{index + 1}.</b> {dayjs(item.timestamp).format(DATE_FORMAT_USER)}{" "}
            ({Intl.NumberFormat().format(item.views)})
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ArticleDetailPage;
