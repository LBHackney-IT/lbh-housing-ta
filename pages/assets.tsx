import type { NextPage } from "next";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination/Pagination";
import SummaryPanel from "../components/SummaryPanel/SummaryPanel";

const Assets: NextPage = () => {
  return (
    <Layout>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="lbh-heading-h1 govuk-!-margin-bottom-9">Accommodation</h1>
          <div><p className="lbh-body-m">Showing 8 of 18 vacancies</p></div>
          <ul className="lbh-list">
            <li>
              <SummaryPanel />
            </li>
          </ul>
          <Pagination />
        </div>
      </div>
    </Layout >
  );
};

export default Assets;
