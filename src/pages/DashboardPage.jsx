import React, { useEffect, useState } from 'react'



import axios from 'axios';
import HightChart from '../components/HightChart/HightChart';
import Navbar from '../components/Navbar/Navbar'

const DashboardPage = () => {
  //use state to store data in array when fetch from api
  const [data, setData] = useState([]);

  //ATTENTION
  // i can fetch in many ways but i show you my knowldge how can i pass data via props


  // run one time when reload this pages
  useEffect(() => {

    try {
      // axios library help to fetch from api 
      async function fetchData() {
        // async await to wait the response of data
        const { data } = await axios.get(`https://raw.githubusercontent.com/cognativex/test-data/main/page_views_per_time.json`)
        setData(data.data.map(data => data));

      }
      fetchData();
    } catch (e) {
      console.log(e)
    }
  }, [])//i can put inside the [] any value when change for reload this function in diffrent project if i has any dynamic value inside url fetching

  return (
    <>
      <Navbar />

      <HightChart data={data} />
    </>
  )
}

export default DashboardPage