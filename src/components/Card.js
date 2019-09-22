import React from 'react'
import { withRouter } from 'react-router-dom'

class Card extends React.Component{
    state = {
        gnome: JSON.parse(sessionStorage.getItem('gnome')),
        otherGnome: this.props.otherGnome || '',
        flag: false
    }

    componentDidMount() {
        const { otherGnome, gnome} = this.state
        if(otherGnome && gnome) this.setState({flag: true})
        else this.setState({flag: false})
    }

    UNSAFE_componentWillReceiveProps(nextProps) {this.setState({otherGnome: nextProps.otherGnome})}

    render() {
        const { gnome, otherGnome, flag } = this.state
        return(
            <div className='container-card'>
                {
                    flag ?
                        <div className='information-card'>
                            <h1>Gnome Information: </h1>
                            <img className='card-image' src={otherGnome.thumbnail} alt={otherGnome.name}/>
                            <p>{otherGnome.name}</p>
                            <p><b>Age: </b>{otherGnome.age}</p>
                            <p><b>Height: </b>{otherGnome.height}</p>
                            <p><b>Weight: </b>{otherGnome.weight}</p>
                            <footer className='card-footer'>
                                <div><p><b>Friends:</b></p>
                                    {otherGnome.friends ? otherGnome.friends.map(friend => <p key={friend}>{friend}</p>) : 'Don´t have friends... :( ' }
                                </div>
                                <div><p><b>Professions:</b></p>
                                    {otherGnome.professions ? otherGnome.professions.map(profession => <p key={profession}>{profession}</p>): ''}
                                </div>
                            </footer>
                        </div>
                        : <div className='information-card'>
                            <h1>Your Information: </h1>
                            <img className='card-image' src={gnome.thumbnail} alt={gnome.name}/>
                            <p>{gnome.name}</p>
                            <p><b>Age: </b>{gnome.age}</p>
                            <p><b>Height: </b>{gnome.height}</p>
                            <p><b>Weight: </b>{gnome.weight}</p>
                            <footer className='card-footer'>
                                <div><p><b>Friends:</b></p>
                                    {gnome.friends ? gnome.friends.map(friend => <p key={friend}>{friend}</p>) : 'Don´t have friends... :( ' }
                                </div>
                                <div><p><b>Professions:</b></p>
                                    {gnome.professions ? gnome.professions.map(profession => <p key={profession}>{profession}</p>): ''}
                                </div>
                            </footer>
                        </div>
                    }
            </div>
        )
    }
}

export default withRouter(Card)