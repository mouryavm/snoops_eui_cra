// Dashboard.tsx
import React from "react";

import {
  Chart,
  Axis,
  BarSeries,
  Position,
  ScaleType,
  Settings
} from "@elastic/charts";

import { getMockESReponse } from "./mocks";
import moment from "moment";
import { EuiCard } from "@elastic/eui";

import { EUI_CHARTS_THEME_LIGHT } from "@elastic/eui/dist/eui_charts_theme";
 

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
        date
      }));
    }
  );
  return (
    <>
      <EuiCard title="" style={{ height: "95vh" }}>
        test
        <Chart size={["100%", 500]} >
        <Settings showLegend  />
       
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
      </EuiCard>
    </>
  );
};

export default Dashboard;
