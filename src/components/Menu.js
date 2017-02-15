import React, { Component } from 'react';
import Links from './Links';

class Menu extends Component {
    render() {
        let menus = ['Home',
            'About',
            'Services',
            'Portfolio',
            'Contact us']
        return (
            <div>
                {
                    menus.map((v, i) => {
                        return (
                            <div key={i}>
                                <Links label={v}></Links>
                            </div>
                        )
                    })
                }
            </div>
        )
        // return React.createElement('div',
        //     null,
        //     menus.map((v, i) => {
        //         return React.createElement('div',
        //             { key: i },
        //             React.createElement(Link, { label: v })
        //         )
        //     })
        // )
    }
}

export default Menu;
