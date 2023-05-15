import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Graph =(props)=> {
  return (
    <div>
    <div style={{backgroundColor:'#0C134F',maxWidth:'1600',maxheight:'600'}}>
    <div style={{color:'white',border:'2px solid black',backgroundColor:'#D18FF2', maxWidth:'100%',height:'40px', display:'flex', justifyContent:'center',alignItems:'center',borderRadius:'30px'}}>
      <marquee direction="right">
        <h2 > *** THE 20 MOST OCCURING WORDS ***</h2>
      </marquee>
    </div>
    
    <BarChart
      width={1500}
      height={600}
      data={props.count}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      stroke="#fff" strokeWidth={2} 

      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="0" tick={{ fill: 'white' }}/>
      <YAxis  tick={{ fill: 'white' }}/>
      <Tooltip />
      <Bar dataKey="1" fill="#6F2D91" />
    </BarChart>
    </div>
    </div>
  )
}

export default Graph