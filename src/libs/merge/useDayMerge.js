import { useState, useEffect } from 'react';

const useDayMerge = (originalData) => {
  const [transformedData, setTransformedData] = useState(null);
  
  useEffect(() => {
    if (originalData) {
      const transformed = originalData.map((element) => {
        // 取得最新的時間段的資料
        const latestTimeData = element.time[element.time.length - 1];
        return {
          elementName: element.elementName,
          parameterName: latestTimeData.parameter.parameterName,
          parameterUnit: latestTimeData.parameter.parameterUnit,
        };
      });
      setTransformedData(transformed);
    }
  }, [originalData]);

  return transformedData;
};

export default useDayMerge;
