import * as React from "react";
import '../assets/css/reset.css';
import '../assets/css/index.css';
import HomeLayout from '../components/home-layout';
import { useEffect } from 'react';

function IndexPage() {
  useEffect(() => {
    document.title = "Find You"
  })
  return (
    <HomeLayout />
  )
}

export default IndexPage;
