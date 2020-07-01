import React from 'react';
import ListItem from '../ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItems(props) {

          

         const items = props.items
         const listItems = items.map(item => {

          return <div className="list" key="item.key">
                      <p>{item.text}</p>
                      <span>
                        <FontAwesomeIcon className="faicons" icon='trash'/>
                      </span>
                 </div>

         })
         return (
           <ul>{listItems}</ul>
         );
}


export default ListItems;