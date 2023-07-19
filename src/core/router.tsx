import { Route, Routes } from "react-router-dom";
import { Join } from "../Join";
import TestBoard from "../TestBoard";
import Example from "../Example";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/404" element={<TestBoard />} />
      <Route path="/board" element={<Example />} />
    </Routes>
  );
}
