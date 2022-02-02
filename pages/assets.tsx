import type { NextPage } from "next";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

const Assets: NextPage = () => {
  return (
    <Layout>
      <h1 className="lbh-heading-h1 govuk-!-margin-bottom-9">Accommodation</h1>
      <div><p className="lbh-body-m">Showing 8 of 18 vacancies</p></div>
      <ul className="lbh-list">
        <li>
          <a href="#" className="lbh-link">Benefits calculators</a>
        </li>
        <li>
          <a href="#" className="lbh-link">Benefit overpayments</a>
        </li>
        <li>
          <a href="#" className="lbh-link">Benefit fraud</a>
        </li>
        <li>
          <a href="#" className="lbh-link">More</a>
        </li>
      </ul>
      <Pagination />
    </Layout >
  );
};

export default Assets;
