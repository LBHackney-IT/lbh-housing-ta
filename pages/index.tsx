import type { NextPage } from "next";
import Link from 'next/link'
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="lbh-heading-h1">Hackney temporary accomodation</h1>
      <ul>
        <li>
          <Link href="/assets">
            <a>Assets</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
