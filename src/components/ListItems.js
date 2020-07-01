import React from 'react';
import ListItem from '../ListItem.css'

function ListItems(props) {

          

         const items = props.items
         const listItems = items.map(item => {

          return <div className="list" key="item.key">
                      <p>{item.text}</p>
                 </div>

         })
         return (
           <ul>{listItems}</ul>
         );
}


export default ListItems;