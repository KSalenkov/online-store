import React, {useEffect} from "react";
import './App.css';

import Routes from "./routes";
import Layout from "./layout";
import Header from "./components/Header";

import { useDispatch } from "react-redux";

function App({dealers}) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch.main.getDealers(dealers || null)
  }, [dealers])
  
  return (
    <Layout header={<Header />}>
      <Routes />
    </Layout>
  );
}

export default App;
