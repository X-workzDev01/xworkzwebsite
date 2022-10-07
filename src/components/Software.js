import React from 'react'
import "./Software.css"
import {Link} from 'react-router-dom'


const Software = (props) => {
    
    return (
        <div className='software-page'>
        <div className='software col-12'>



            {props.value.Softwares
                ? props.value.Softwares.map((d, i) => (
                  
                        
                        <div class="card"> 

                            <h1>{d.name}</h1>

                            <a href={d.directLink}>
                                <button type="button">Download</button>
                            </a>
                            
                            

                           <a href={d.extranalLink}>
                                <button type="button">Other Versions</button>
                                </a>
                            <div class="accent-line"></div>
                        </div>

                        




                    
                    


                ))
                : 'loading'}

                



        </div>
        </div>








    )
}
export default Software;
