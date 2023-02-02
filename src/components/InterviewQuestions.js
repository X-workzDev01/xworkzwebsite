import React , { useState , useEffect }  from 'react'
import { Accordion, Button} from 'semantic-ui-react'
import "./InterviewQuestions.css"
import axios from 'axios'
import SubjectAccordion from './SubjectAccordion'
import coreJava from '../data/Core-Java.json';
import mysql from '../data/mysql.json';
import Spring from '../data/Spring.json';
import adavancedJava from '../data/Advanced-Java';
import InterviewQuestionTree from '../data/InterviewQuestionsTree.json'

const InterviewQuestions = () => {
    const [QuestionTree , setQuestionTree] = useState(null);
    const [Data, setData] = useState(null);
    const [active , setActive] = useState(false);

    useEffect(() => {
      axios.request({
        method: "GET",
        url: "https://ombn.in/xworkz_api/getInterviewQuestionsTree"
      })
      .then(res => {
        setQuestionTree(res.data);
        HandleClick(res.data.Module[0].url);
      })
      .catch(err => {
        console.log(err)
      });
    },[]);


    const HandleClick = (props) => {

        axios.get(props)
        .then(res =>{
          setData(res.data);
        });
        setActive(false)
       
    }
    
  return (
    <div className='question-page'>
        
        <div className="subject">
         { QuestionTree && <Button.Group>
          
          {QuestionTree.Module.map((value, index)=>{
            
            return <Button key={index} onClick={(e) => HandleClick(value.url, e)}>{value.name}</Button>
          })}
    
    </Button.Group>}
    </div>
    <div className="topics">
    { Data && <Accordion panels={Data.Topic.map((topic ,index )=>{
      
        return{
          key: index,
          title : topic.name,
          content : {
            content :(
              <div><ul>{topic.Questions.map(ques=>{
                return <li>{ques.question}</li>
              })}
                </ul>
              </div>
            ),
          }
            
           
        }
      })}>
        

      </Accordion>}
    </div>
    </div>
    
  )
}

export default InterviewQuestions