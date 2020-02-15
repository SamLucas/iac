import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";

import LoadingPage from "src/components/loading";
import Menu from "src/pages/backend/menu";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
`;

export default function Utils(Page) {
  const [loading, setLoading] = useState(true);
  // let history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataUser"));
    if (data) setLoading(false);
    // else history.push("/login");
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <Container>
      <Menu />
      <Page />
    </Container>
  );
}
