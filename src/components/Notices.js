import React from 'react'
import { withRouter } from 'react-router-dom'
import {logic} from "../logic";

class Notices extends React.Component{
    state = {
        gnomes: JSON.parse(localStorage.getItem('gnomes')),
        olderGnome: {},
        youngerGnome: {},
        moreWeightGnome: {},
        moreHeightGnome: {},
    }

    componentDidMount() {
        this.setState({
            olderGnome: logic.retrieveOlderGnome(this.state.gnomes),
            youngerGnome: logic.retrieveYoungerGnome(this.state.gnomes),
            moreWeightGnome: logic.retrieveMoreWeightGnome(this.state.gnomes),
            moreHeightGnome: logic.retrieveMoreHeight(this.state.gnomes),
        })
    }

    render() {
        const { olderGnome, youngerGnome, moreWeightGnome, moreHeightGnome } = this.state
        return(
            <div>
                <p className='home-subtitle'>BREAKING NEWS:</p>
                <p>We have the winners to the festival de Brastlewark in the principal four categories</p>
                <div className='container-winner'>
                    <div className='winner-item'>
                        <p>Winner by senior:</p>
                        {olderGnome ? <div>
                                <p>{olderGnome.name}</p>
                                <p>{olderGnome.age} years</p>
                                <img className='avatar' src={olderGnome.thumbnail} alt={olderGnome}/>
                            </div>
                            : ''}
                    </div>
                    <div className='winner-item'>
                        <p>Winner by junior:</p>
                        {youngerGnome ? <div>
                            <p>{youngerGnome.name}</p>
                            <p>{youngerGnome.age} years</p>
                            <img className='avatar' src={youngerGnome.thumbnail} alt={youngerGnome}/>
                        </div> : ''}
                    </div>
                    <div className='winner-item'>
                        <p>Winner for the heaviest person:</p>
                        {moreWeightGnome ? <div>
                                <p>{moreWeightGnome.name}</p>
                                <p>{moreWeightGnome.weight} lb</p>
                                <img className='avatar' src={moreWeightGnome.thumbnail} alt={moreWeightGnome}/>
                            </div>
                            : ''}
                    </div>
                    <div className='winner-item'>
                        <p>Winner by highest person:</p>
                        {moreHeightGnome ? <div>
                                <p>{moreHeightGnome.name}</p>
                                <p>{moreHeightGnome.height} cm</p>
                                <img className='avatar' src={moreHeightGnome.thumbnail} alt={moreHeightGnome}/>
                            </div>
                            : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Notices)
