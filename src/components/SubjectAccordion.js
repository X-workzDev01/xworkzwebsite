import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export class SubjectAccordion extends Component{
    
   
    render() {
      const { activeIndex } = this.state
  
      return (
        <div>
         {this.props.value.Topic.map((topic , i) =>
         <div>
         <Accordion fluid styled>
        <Accordion.Title
        active={activeIndex === 0}
        index={0}
        
      > 
        <Icon name='dropdown' />
        {topic.name}
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
            
              

          </Accordion.Content>
          </Accordion>
      </div>
)}    
</div>
          
  
         
       
      )
    }
  }

export default SubjectAccordion