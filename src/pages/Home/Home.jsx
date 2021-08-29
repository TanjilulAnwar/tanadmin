import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../dummyData'
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData}  title="User Analytics" dataKey="Active User" grid/>
        </div>
    )
}
