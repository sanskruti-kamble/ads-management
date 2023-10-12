import { useState } from "react";
import AdsInsightsTable from "../components/dashboard/AdsInsightsTable";
import AdsInsightsTable2 from "../components/dashboard/AdsInsightsTable2";
import PieChart from "../components/dashboard/PieChart";

export default function Dashboard() {
  const [isPieChartVisible, setIsPieChartVisible] = useState(true);
  const [selectedPieChartValue, setSelectedPieChartValue] = useState("clicks");

  const [pieChartData] = useState({
    clicks: {
      male: 348,
      female: 692,
      unknown: 105,
    },
    cost: {
      male: 12528,
      female: 24912,
      unknown: 3943,
    },
    conversions: {
      male: 42,
      female: 53,
      unknown: 3,
    },
    revenue: {
      male: 62118,
      female: 5175,
      unknown: 4489,
    },
    group: {
      male: 40,
      female: 35,
      unknown: 25,
    },
  });

  function toggleIsPieChartVisible() {
    setIsPieChartVisible(!isPieChartVisible);
  }

  return (
    <>
      <div className="d-flex flex-column flex-xl-row gap-3 gap-xl-0">
        <div className="pe-0 pe-xl-2 col-12 col-xl-6">
          <div className="border rounded bg-white">
            <div className="p-2 d-flex justify-content-between border-bottom">
              <h5 className="m-0 fw-semibold text-muted">Ad Insights</h5>

              <i className="bi bi-question-circle text-secondary text-opacity-25" />
            </div>
            <div className="d-flex justify-content-evenly">
              <AdsInsightsTable />
            </div>
          </div>
        </div>

        <div className="ps-0 ps-xl-2 col-12 col-xl-6">
          <div className="border rounded bg-white">
            <div className="p-2 d-flex justify-content-between border-bottom">
              <h5 className="m-0 fw-semibold text-muted">Ad Insights</h5>
              <div className="d-flex justify-content-between gap-3">
                {isPieChartVisible && (
                  <select
                    className="mb-0 pb-0 border bg-white"
                    value={selectedPieChartValue}
                    onChange={(event) => {
                      setSelectedPieChartValue(event.target.value);
                    }}
                  >
                    <option value="clicks">Clicks</option>
                    <option value="cost">Cost</option>
                    <option value="conversions">Conversions</option>
                    <option value="revenue">Revenue</option>
                    <option value="group">Group</option>
                  </select>
                )}
                <p className="m-0">
                  <i className="bi bi-question-circle text-secondary text-opacity-25" />
                </p>
              </div>
            </div>
            <div className="d-flex flex-column gap-3">
              {isPieChartVisible ? (
                <div className="m-0 mt-4 p-2 overflow-scroll">
                  <PieChart data={pieChartData[selectedPieChartValue]} />
                </div>
              ) : (
                <AdsInsightsTable2 />
              )}
              <div className="p-3 d-flex justify-content-end">
                <div
                  className="dashboards-pie-chart-toggle"
                  onClick={() => toggleIsPieChartVisible()}
                >
                  <div className={`tabX ${isPieChartVisible ? "active" : ""}`}>
                    <i className="bi bi-pie-chart" />
                  </div>
                  <div className={`tabX ${!isPieChartVisible ? "active" : ""}`}>
                    <i className="bi bi-table" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
