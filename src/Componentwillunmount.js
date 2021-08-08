import React, { Component } from 'react'

export default class Componentwillunmount extends Component {
    componentWillUnmount() {
        console.log("my component will unmount")
    }
    
    render() {
        return (
            <div>
                Componentwillunmount
            </div>
        )
    }
}
