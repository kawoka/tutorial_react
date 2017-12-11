import React from 'react';
import ReactDOM from 'react-dom';
import {Square} from './square';

class Board extends React.Component {
    renderSquare(i) {
        const isHighlight = this.props.victoryLine ? this.props.victoryLine.indexOf(i) >= 0 : false;
        return <Square
                    key={i}
                    index={i}
                    value={this.props.squares[i]}
                    highlight={isHighlight}
                    onClick={() => this.props.onClick(i)}
                />;
    }

    render() {
        let col, row;
        let boardRows = new Array();
        for (col = 0; col < this.props.mode; col++) {
            let squares = new Array();
            for (row = 0; row < this.props.mode; row++) {
                squares.push(this.renderSquare(col * this.props.mode + row));
            }
            boardRows.push(<div key={col} className="board-row">{squares}</div>);
        }

        return (
            <div key="squares">{boardRows}</div>
        );
    }
}

export default Board;
