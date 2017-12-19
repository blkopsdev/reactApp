import React from 'react';

class App extends React.Component {
    render() {
        var i = 1;
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
            <div>
                <h1 className="header" style={myStyle}>{i == 1 ? 'True!' : 'False'}</h1>
            </div>
        );
    }
}
export default App;