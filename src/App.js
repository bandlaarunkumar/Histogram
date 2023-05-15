import React, { useState } from "react";
import axios from "axios";
import Bar from './Graph'
import './index.css'
import { FaFileExport } from "react-icons/fa";

function App() {
  const [wordCount, setWordCount] = useState([]);
  const [csvData, setCsvData] = useState("");

  const fetchCount = async () => {
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      const text = response.data.toLowerCase();
      const words = text.match(/[a-z]+/g);
      const counts = {};
      words.forEach((word) => {
        counts[word] = counts[word] ? counts[word] + 1 : 1;
      });
      const sortedCounts = Object.entries(counts).sort(
        (a, b) => b[1] - a[1]
      );
      const topCounts = sortedCounts.slice(0, 20);
      setWordCount(topCounts);
      setCsvData(
        topCounts.map(([word, count]) => `${word},${count}`).join("\n")
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + csvData;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "word_Count.csv");
    document.body.appendChild(link);
    link.click(); 
  };

  const myStyle = {border:'3px solid #647E68',backgroundColor:'#D18FF2', minWidth:'20%', padding:'10px',borderRadius:'40px',color:'white',fontFamily:'serif',fontSize:'20px',cursor:'pointer'}


  const change =(e) =>{
    e.target.style.border="3px solid white";
    e.target.style.width='20%';
  }

  const normal =(e) =>{
    e.target.style.border="3px solid #647E68";
    e.target.style.width="19%";
  }

 
  

  return (
    <div className='app' style={{}}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'60px' }} >
      <button onClick={fetchCount} className='btn' title='Click here to fetch the details in graph format' onMouseEnter={change} onMouseLeave={normal} style={{ border:'3px solid #647E68',
        backgroundColor:'#D18FF2',
        minWidth:'19%',
        padding:'15px',
        borderRadius:'40px',
        color:'white',
        fontFamily:'serif',
        fontSize:'20px',
        cursor:'pointer'}} ><b>Submit</b></button>
    </div>
      {wordCount.length > 0 && (
        <div >
              <Bar count= {wordCount}/>
              <div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'40px'}}>

                      <button onClick={handleExport} onMouseEnter={change}  onMouseLeave={normal} style={myStyle}>
                      <FaFileExport style={{margin:'0px 10px 0px 0px'}}/>
                      <i><b>Export</b></i></button>
        </div>
    </div>
          
        </div>
      )}
    </div>
  );
}

export default App;


