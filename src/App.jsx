import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Developer {
    constructor( firstname, lastname ) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName() {
        return this.firstname + ' ' + this.lastname;
    }
}

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    }, {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];


function isSearched( searchTerm ) {
    return function( item ) {
        return item.title.toLowerCase().includes( searchTerm.toLowerCase() );
    }
}


class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            list,
            searchTerm: '',
        };
        this.dismissItem = this.dismissItem.bind( this );
        this.onSearchChange = this.onSearchChange.bind( this );
        console.log( 'Constructor invoked' )
    }

    shouldComponentUpdate() {
        console.log( 'shouldComponentUpdate invoked' )
        return true
    }


    dismissItem( item ) {
        console.log( item );
    }


    onSearchChange( event ) {
        this.setState( { searchTerm: event.target.value } );
    }

    render() {
        console.log( 'Render started' )
        var helloWorld = 'Добро пожаловать в Путь к изучению React'
        const user = {
            name: 'Mihail',
            surname: 'Gagauz'
        }
        const {
            searchTerm,
            list
        } = this.state;
        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange={this.onSearchChange}
                    >
                        <b>Search</b>
                    </Search>
                </div>

                <Table
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.dismissItem}
                />

            </div>
        );
    }
}

const Button = ( { onClick, className = '', children } ) =>
    <button className={className} onClick={onClick}>{children}</button>


const wideCol = {
    width: '20%'
}

const Table = ( { list, pattern, onDismiss } ) =>
    <div className="table">
        {list.filter( isSearched( pattern ) ).map( item =>
            <div key={item.objectID} className="table-row">
                <span style={wideCol}>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span style={wideCol}>[{item.author}]</span>
                <span>[{item.num_comments}]</span>
                <span>[{item.points}]</span>
                <Button onClick={() => onDismiss( item )} className="button-inline">Dismiss</Button>
            </div>
        )}
    </div>

const Search = ( { value, onChange, children } ) =>
    <form>
        {children} <input
            type="text"
            value={value}
            onChange={onChange}
        />
    </form>

export default App;
