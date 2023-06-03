import React from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer';
import {useState} from "react";
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightlife';

const HomePage = () => {

    const [activeTab , setActiveTab]= useState("")
  return (
    <div>
        <Header/>
    <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
     {getCorrectedScreen(activeTab)}
    <Footer/>
    </div>
  )
}


const getCorrectedScreen=(tab)=>{
     switch (tab){
        case "Delivery":
            return <Delivery/>;
        case "Dining Out":
            return <DiningOut/>
            case "Nightlife":
                return <NightLife/>
                default :
                return <Delivery/>
     }
}

export default HomePage