import React, { useState } from "react";
import {
  Chart,
  Axis,
  BarSeries,
  Position,
  ScaleType,
  Settings,
} from "@elastic/charts";
import { EuiButton, EuiCard } from "@elastic/eui";
import { getMockESReponse } from "./mocks";
import moment from "moment";
import { useAuthContext } from "../../context/AuthContext/AuthProvider";

interface DataRow {
  count: number;
  carrier: string;
  date: number; // epoch time
}

const Dashboard = () => {
  const response = getMockESReponse();
  const buckets = response.aggregations.carrier.buckets;

  // We need to flatten this bucket data into a single array
  // or denormalizing the nested aggregation data
  const data: DataRow[] = buckets.flatMap(
    ({ key: carrier, date: { buckets } }) => {
      return buckets.map(({ key: date, doc_count: count }) => ({
        count,
        carrier,
        date,
      }));
    }
  );

  const { isSignIn, logout } = useAuthContext();

  const handleLogout = () => logout();

  if (!isSignIn) {
    return <div>You have been logged out. Redirecting to login page...</div>;
  }

  return (
    <EuiCard title="" style={{ height: "95vh" }}>
      test
      <Chart size={["100%", 500]}>
        <Settings showLegend />
        <BarSeries
          id="bars"
          name="flights by carrier"
          xScaleType={ScaleType.Time}
          stackAccessors={["true"]}
          splitSeriesAccessors={["carrier"]}
          xAccessor="date"
          yAccessors={["count"]}
          data={data}
        />
        <Axis id="count" title="Flight Count" position={Position.Left} />
        <Axis
          id="time"
          title="Time"
          position={Position.Bottom}
          tickFormat={(tickValue) => moment(tickValue).format("l")}
        />
      </Chart>
      {/* <EuiButton onClick={handleLogout}>Logout</EuiButton> */}
    </EuiCard>
  );
};

export default Dashboard;
