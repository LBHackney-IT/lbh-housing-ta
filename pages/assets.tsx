import type { NextPage } from "next";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

const Assets: NextPage = () => {
  return (
    <Layout>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="lbh-heading-h1 govuk-!-margin-bottom-9">Accommodation</h1>
          <div><p className="lbh-body-m">Showing 8 of 18 vacancies</p></div>
          <ul className="lbh-list">
            <li>
              <div className="lbh-summary-panel">
                <div className="lbh-summary-panel__content">
                  <a href="#" className="lbh-link">1 bedroom, 3 bathrooms</a>
                  <p className="lbh-body-m">Shared bathroom, shared kitchen</p>
                  <p className="lbh-body-m govuk-!-margin-bottom-3">Unknown access, unknown floor</p>
                  <p className="lbh-body-s">Hackney Hostel - Hostel LSE, £32 a night</p>
                  <p className="lbh-body-s">Room 1, 11 Meynell Road, Hackney. E9 7AP.</p>
                </div>
                <img className="lbh-summary-panel__img" src="https://hackneywebsite-wp-mediafiles.s3.eu-west-2.amazonaws.com/wp-content/uploads/1920_1920-hackneytownhallwithlights-2.jpg" alt="Hackney at Christmas"></img>
              </div>
            </li>
          </ul>
          <Pagination />
        </div>
      </div>
    </Layout >
  );
};

export default Assets;
