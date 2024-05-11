import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobByCategory/JobCard';
import { useEffect, useState } from 'react';
import axios from'axios'
const TabCategory = () => {

  const [jobs, setJobs]= useState([])
  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)
      
    }
    getData()
  },[])

    return (
        <Tabs className='px-6 pt-5'>
            <h1>Browse Jobs By Categories</h1>
            <p>Three </p>
       <div className='flex justify-center items-center'>
       <TabList>
          <Tab>Web Design</Tab>
          <Tab>Graphics Design</Tab>
          <Tab>Digital Marketing</Tab>
        </TabList>
    </div>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
              jobs.filter(j=> j.category === "Web Development").map(job=> <JobCard job={job} key={job._id}></JobCard>)
            }
          </div>
        </TabPanel>
       
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
              jobs.filter(j=> j.category === "Graphics Design").map(job=> <JobCard job={job} key={job._id}></JobCard>)
            }
          </div>
        </TabPanel>
       
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
              jobs.filter(j=> j.category === "Digital Marketing").map(job=> <JobCard job={job} key={job._id}></JobCard>)
            }
          </div>
        </TabPanel>
       
       
    
      </Tabs>
    );
};

export default TabCategory;