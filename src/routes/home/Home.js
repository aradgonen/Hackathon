import React, { PropTypes } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {
  MenuItem,
  DropdownButton,
  Panel,
  PageHeader,
  ListGroup,
  ListGroupItem,
  Button
} from "react-bootstrap";

import s from "./Home.css";
import StatWidget from "../../components/Widget";
import Donut from "../../components/Donut";

import {
  Tooltip,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer
} from "../../vendor/recharts";

const title = "Sb Admin React";

const data = [
  { name: "Approved", uv: 4000, pv: 2400, amt: 2400, value: 600 },
  { name: "Canceled ", uv: 3000, pv: 1398, amt: 2210, value: 300 },
  { name: "It's on", uv: 2000, pv: 9800, amt: 2290, value: 500 }
];

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <PageHeader>Dashboard</PageHeader>
      <Panel
        header={
          <span>
            <i className="fa fa-bar-chart-o fa-fw" /> Statistics
          </span>
        }
      >
        <div>
          <Donut
            data={data}
            color="#8884d8"
            innerRadius="70%"
            outerRadius="90%"
          />
        </div>
      </Panel>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
