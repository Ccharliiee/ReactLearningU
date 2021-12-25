import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxdataPointsValue = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.key}
          value={dataPoint.value}
          maxValue={maxdataPointsValue}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
