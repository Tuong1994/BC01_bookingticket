import React, { Component, PureComponent } from 'react'


// PureCompent giống Component tuy PureComponent sẽ xét giá trị đầu vào của props có thay đổi hay không => nếu có mới render lại 
// shouldComponentUpdate không tồn tại trong PureComponent (vì PureComponent đã xử lý render tự động tương đương với Lifecycle này)
export default class ChildComponent extends PureComponent {

    setInterval = {}
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');
        return currentState;
    }

    // shouldComponentUpdate(newProps, newState){
    //     return true
    // }

    render() {
        console.log('render lại rồi nha!!');
        return (
            <div>
                <br />
                Props Child : {this.props.stateNumber.number}<br />
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount child');
    }

    componentDidUpdate(prevProps, preveState) {
        console.log('componentDidUpdate child');
        this.setInterval = setInterval(() => {
            console.log('object');
        }, 1000)
    }

    // Lifecycle chạy trước khi component mất khỏi giao diện
    componentWillUnmount(){
        clearInterval(this.setInterval);
    }
}

