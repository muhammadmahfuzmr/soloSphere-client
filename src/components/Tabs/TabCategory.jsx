import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobByCategory/JobCard';
const TabCategory = () => {
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
          <h2><JobCard></JobCard></h2>
        </TabPanel>
       
        <TabPanel>
          <h2><JobCard></JobCard></h2>
        </TabPanel>
       
        <TabPanel>
          <h2><JobCard></JobCard></h2>
        </TabPanel>
       
    
      </Tabs>
    );
};

export default TabCategory;