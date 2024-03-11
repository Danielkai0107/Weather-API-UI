import { useEffect, useState } from "react";
import useDayMerge from "../merge/useDayMerge";

const useDayApi = ({ location }) => {
  const [elementData, setElementData] = useState(null);

  useEffect(() => {
    const Authorization = "CWB-56EF1CC4-5FBF-4E8F-B52B-10E28543341D";
    const locationName = location;
    fetch(
      `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${Authorization}&locationName=${locationName}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const Data =
          data.records.location[0].weatherElement;
        setElementData(Data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [location]);

  return useDayMerge(elementData);
};

export default useDayApi;
