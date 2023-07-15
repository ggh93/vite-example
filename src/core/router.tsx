import { Route, Routes } from "react-router-dom";
import { Join } from "../Join";
import TestBoard from "../TestBoard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/board" element={<TestBoard />} />
    </Routes>
  );
}
