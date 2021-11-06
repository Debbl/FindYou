import * as React from "react";
import '../assets/css/reset.css';
import '../assets/css/index.css';
import Home from './home';
import useFormatData from '../hooks/use-format-data';

function IndexPage() {
 const data = useFormatData();
 console.log(data);
  return (
    <Home />
  )
}

export default IndexPage;
