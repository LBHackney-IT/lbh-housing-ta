import type { NextPage } from "next";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

const Assets: NextPage = () => {
  return (
    <Layout>
      <h1 className="lbh-heading-h1">Accommodation</h1>
      <Pagination />
    </Layout>
  );
};

export default Assets;
