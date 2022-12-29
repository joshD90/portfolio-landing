import { useLocation } from "react-router-dom";

import React from "react";

function DummyElement() {
  const location = useLocation();
  return <div style={{ padding: "5rem" }}>{JSON.stringify(location)}</div>;
}

export default DummyElement;
