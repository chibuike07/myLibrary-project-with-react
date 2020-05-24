import React, { useState, useEffect } from "react";

const userData = (url, fetchOptions) => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    const fetchDatas = async () => {
      const jsonForm = await fetch(url, fetchOptions);
      const data = await jsonForm.json();
      setDatas(data[0]);

      //   console.log(datas);
    };
    fetchDatas();
  });

  return datas;
};

export default userData;
