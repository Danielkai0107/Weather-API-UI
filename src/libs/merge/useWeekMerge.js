import { useEffect, useState } from "react";

export const useWeekMerge = (elementName) => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    if (elementName) {
      const newMergedData = [];
      for (let i = 0; i < elementName.length; i += 2) {
        const oddObject = elementName[i];
        const evenObject = elementName[i + 1];
        const date = oddObject.startTime.split(" ")[0];
        const status = oddObject.elementValue[0].value;
        const interval = `${evenObject.elementValue[0].value}-${oddObject.elementValue[0].value}℃`;
        newMergedData.push({ date, status, interval });
      }
      setMergedData(newMergedData);
    }
  }, [elementName]);

  return mergedData;
};
