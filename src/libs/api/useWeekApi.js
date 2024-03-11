import { useEffect, useState } from "react";
import { useWeekMerge } from "../merge/useWeekMerge";

const useWeekApi = ({ location, element }) => {
  const [elementData, setElementData] = useState(null);

  useEffect(() => {
    const Authorization = "CWB-56EF1CC4-5FBF-4E8F-B52B-10E28543341D";
    const locationName = location;
    const elementName = element;
    fetch(
      `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${Authorization}&locationName=${locationName}&elementName=${elementName}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const Data =
          data.records.locations[0].location[0].weatherElement[0].time;
        setElementData(Data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [location, element]);

  return useWeekMerge(elementData);
};

export default useWeekApi;
