import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Anything returned will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    // whenever select book is called, result should be passed to all of the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
    // whatever is returned here will show up as props of BookList
    return {
        books: state.books
    };
}

// Promote BookList from a component to a container. Dispatch method is available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);