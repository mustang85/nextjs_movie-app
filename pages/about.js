import React, { Component } from 'react';

// functional component
// when to use
/// 1. for smaller components
/// 2. reusable components
/// 3. presentional components, patialy right, we can use HOOKS and specify state
// const About = () => {
//     const message = 'Hello world';
//     return (
//         <h1>Hello About Page - {message}</h1>        
//     )
// };

class About extends Component {
    render() {
        const message = 'Hello world';
        return (
            <h1>Hello About Page - {message}</h1>
        )
    }
}

export default About;
