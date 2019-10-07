import React, { Components } from 'react'
import Form from './Form';
import ListItem from './ListItem'
import FormTodo from './Form';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.todoSave = this.todoSave.bind(this);
    }

     todoSave(tittle) {
        this.setState((state) =>({
            data: [{id: Date.now(), tittle}, ...state.data]
        }))
     }

    render() {
        return (
            <div className="container">
                <FormTodo todoSave={this.todoSave} />
                <hr />
                <ListItem data={this.state.data} />
            </div>
        );
    }
}