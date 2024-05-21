import React from "react";
import Navbar from "./Navbar";

// import LineChart from "./LineChat";
// import Chart from "./Chart";
import EChartsExample from "./EChartsExample ";
import PieCharts from "./PieCharts";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="p-3 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 com-md-4 col-lg-3 p-3 bg-light">
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
                <i className="bi bi-currency-dollar fs-1 text-success"></i>
                <div>
                  <span>Sales</span>
                  <h2>234</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 com-md-4 col-lg-3 p-3 bg-light">
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
                <i className="bi bi-truck fs-1 text-primary"></i>
                <div>
                  <span>Delivery</span>
                  <h2>234</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 com-md-4 col-lg-3 p-3 bg-light">
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
                <i className="bi bi-graph-up-arrow fs-1 text-danger"></i>
                <div>
                  <span>Graph</span>
                  <h2>234</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 com-md-4 col-lg-3 p-3 bg-light">
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
                <i className="bi bi-graph-up-arrow fs-1 text-warning"></i>
                <div>
                  <span>Sales</span>
                  <h2>234</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 p-3">
              <EChartsExample />
            </div>
            <div className="col-12 col-md-6 p-3">
              <PieCharts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
