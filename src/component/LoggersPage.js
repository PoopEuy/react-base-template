import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5/js/dataTables.bootstrap5.min.js";
import "./../App.css";
import { instanceBackEnd } from "../api/axios";

function History() {
  const [frame, setFrame] = useState([]);
  const [setNojsId, selectNojsId] = useState("");
  const [setVersion, selectVersion] = useState("");
  const [setSiteName, selectSiteName] = useState("");
  const [setValueOption, selectValueOption] = useState("");

  const frameTableRef = useRef(null);
  const historyTableRef = useRef(null);
  const historyTableInstance = useRef(null);
  const [sitesData, setSitesData] = useState([]);

  useEffect(() => {
    console.log("Component rendered");
    const getSites = async () => {
      console.log("get All Sites");
      try {
        const resSites = await instanceBackEnd.get("/getAllSite", {
          timeout: 1000, // Timeout in milliseconds (adjust as needed)
        });

        const jumlahSites = resSites.data.totalData;
        const { data } = resSites.data;
        const sortedData = data.sort((a, b) => {
          return a.site.localeCompare(b.site);
        });
        // Set sites data for select input
        setSitesData(sortedData);
        console.log("data : " + data);
      } catch (error) {
        console.log("errorAPI");
      }
    };

    return () => {
      console.log("Component rendered2");
      getSites();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectChange = (event) => {
    const selectedFrameCode = event.target.value;
    // Using split
    const splitValues = selectedFrameCode.split("-");
    const nojsId = splitValues[0];
    const version = splitValues[1];
    const siteName = splitValues[2];

    console.log("nojsId : " + nojsId);
    console.log("version : " + version);
    console.log("siteName : " + siteName);
    selectNojsId(nojsId);
    selectVersion(version);
    selectSiteName(siteName);
    selectValueOption(selectedFrameCode);
  };

  const handleClick = async (pcbCode) => {
    // setFrameCode(pcbCode);
    // try {
    //   const res = await instanceBackEnd.get(
    //     `/api/charging/frame-history/${pcbCode}`
    //   );
    //   const data2 = res.data.data;
    //   console.log("loggers history : ", data2);
    // //   cekBody(data2);
    // } catch (error) {
    //   console.log("error fetching history data:", error);
    // }
    console.log("Handle Click");
  };

  return (
    <div className="p-5 bg-light">
      <div className="p-1 bg-white rounded p-4">
        <div className="row">
          <h1 className="text-black fs-4"> Loggers Frame1</h1>
        </div>
        <div className="container mt-5">
          <select
            className="form-select"
            onChange={handleSelectChange}
            value={setValueOption}
          >
            <option value="">Select a frame</option>
            {sitesData.map((site) => (
              <option
                key={site.site}
                value={site.nojsId + "-" + site.version + "-" + site.site}
              >
                {site.site}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-1 bg-white rounded p-4">
        <div className="row">
          <h1 className="text-black fs-4"> History : {setSiteName}</h1>
        </div>
        <div className="container mt-5">
          <table
            ref={historyTableRef}
            className="table table-striped"
            style={{ width: "100%" }}
            id="historyTable2"
          >
            {/* Table header */}
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">PCB Barcode</th>
                <th scope="col">voltage</th>
                <th scope="col">Charging</th>
                <th scope="col">Current</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody id="historyBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History;
