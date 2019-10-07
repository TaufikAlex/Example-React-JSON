import React, { Components } from 'react'

export default function Item(props) {
    return (
        <tr>
            <td scope="row">{props.id}</td>
            <td scope="col">{props.tittle}</td>
        </tr>
    );
}