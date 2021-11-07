import * as React from "react";
import '../assets/css/reset.css';
import '../assets/css/index.css';
import useFormatData from '../hooks/use-format-data';
import HomeLayout from '../components/home-layout';

function IndexPage() {
 const data = useFormatData();
 console.log(data);
  return (
    <HomeLayout />
  )
}

export default IndexPage;
