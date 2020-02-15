import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import LoadingPage from "src/components/loading";

export default function Utils(Page) {
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataUser"));
    if (data) setLoading(false);
    else history.push("/login");
  }, []);

  return loading ? <LoadingPage /> : <Page />;
}
