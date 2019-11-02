import React from "react";

class Blur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        document.getElementById("body").classList.add("noscroll");
        document.getElementById("root").classList.add("blur");
    }

    componentWillUnmount() {
        document.getElementById("body").classList.remove("noscroll");
        document.getElementById("root").classList.remove("blur");
    }

    render() {
        return <div />;
    }
}
export default Blur;
