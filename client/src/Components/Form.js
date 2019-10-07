import React, { Components } from 'react'

export default class FormTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tittle: '' };
        // this.state = { name: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ tittle: event.target.value });
        // this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.todoSave(this.state.tittle);
        this.setState({ tittle:'' });
        // this.props.Todosave(this.state.nama);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="tittle">Tittle</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tittle"
                        aria-describedby="emailHelp"
                        placeholder="type..."
                        onChange={this.handleChange}
                        value={this.state.tittle}
                    />
                    <small id="emailHelp" className="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                    >
                </div>

                <button type="submit" className="btn btn-primary">save</button>
            </form>
        );
    }
}