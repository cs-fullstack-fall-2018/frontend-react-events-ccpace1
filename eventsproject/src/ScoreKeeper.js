import React, {Component} from 'react'
class ScoreKeeper extends Component{

    constructor(props){
        super(props);
        this.state = {score: this.props.score}
    }
    handleClickButton = () => {
        this.setState(
            {
                score: this.state.score+1
            }
        )
    };

    render()
    {
        return(
            <div>
                <button onClick=
                            {this.handleClickButton}>Add to Score?</button>
                <h1>Score:</h1>
                <h1>{this.state.score}</h1>
            </div>
        );
    }
}

export default ScoreKeeper