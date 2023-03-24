import React, { useState , useEffect} from 'react'
import "./Software.css"
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import axios from 'axios'


const Software = () => {

    const [softwareData , setSoftwareData ] = useState([])

    useEffect(() => {
      axios.get("https://ombn.in/xworkz_api/getSoftwareLinkData")
      .then(res =>{
        setSoftwareData(res.data.Softwares)
        
      })
    .catch(err => {
      console.log(err);
      axios.get("https://raw.githubusercontent.com/xworkzodc/JSON/master/SoftwareLinks.json")
        .then(res => {
          console.log("data getting from secondary source")
          setSoftwareData(res.data.Softwares);
        })
        .catch(err => {
          console.log(err);
        });
    })
    },[]); 
    
    
    return (
        <div className='software-page'>
            
        <div className='software col-12'>
            {softwareData
                ? softwareData.map((d, i) => (
                  
                        
                        <div className="card" key={i}> 

                            <h1>{d.name}</h1>

                            <a href={d.directLink}>
                                <button type="button">Download</button>
                            </a>
                          
                           <a href={d.extranalLink}>
                                <button type="button">Other Versions</button>
                                </a>
                            <div className="accent-line"></div>
                        </div>
                ))
                : 'loading'}

                



        </div>
        </div>








    )
}
export default Software;
