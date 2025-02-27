import styled from "styled-components";
import PageTemplate from "./components/PageTemplate";
import Typo from "./components/Typo";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/common/Layout";
import Join from "./components/Join";
import ResetPwd from "./components/ResetPwd";

function App() {
  // return <PageTemplate>
  //   <Typo style={{fontSize:'1.5rem'}}>Skeleton</Typo>
  // </PageTemplate>
  return (
    <Routes>
      <Route path="/" element={<PageTemplate>Test</PageTemplate>}></Route>
      <Route path="/join" element={<Join>Test2</Join>}></Route>
      <Route path="/resetPwd"element={<ResetPwd>Test3</ResetPwd>} ></Route>
    </Routes>
  )
}
export default App;
