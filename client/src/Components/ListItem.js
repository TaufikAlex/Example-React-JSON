import React, { Components } from 'react'
import Item from './Item';

export default function ListItem(props) {
    const ListNode = props.data.map((item,index)=> <Item key={index} id={item.id} tittle={item.tittle} />)
    return (
        <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Tittle</th>
              </tr>
            </thead>
            <tbody>
            {ListNode}
            </tbody>
          </table>
    );
}