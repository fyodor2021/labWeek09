import React, {Component} from "react";


export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            header: this.props.text,
            tag:this.props.tag
        }
    }
    render(){
        return <this.state.tag>{this.state.header}</this.state.tag>
    }
}