import React from 'react'
import { withRouter } from 'react-router-dom'
import ReactModal from 'react-modal';
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import logic from '../logic/index'
import Notices from "../components/Notices";

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            gnome: JSON.parse(sessionStorage.getItem('gnome')),
            gnomes: JSON.parse(localStorage.getItem('gnomes')),
            moreFriends: 0,
            nameFriend: '',
            moreProfessions: 0,
            nameProfession: '',
            professions: [],
            showModal: false,
            errorFriend: '',
            errorProfession: ''
        }
    }
    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({[name]:value})
    }
    handleOpenModal = () => {this.setState({showModal: true });}
    handleCloseModal = () => {this.setState({showModal: false});}
    handleLogout = () => this.props.handleLogout()

    goToProfile = (e) =>{
        e.preventDefault()
        return this.props.history.push('/user')
    }
    searchByFriends = (e) => {
        const { nameFriend, gnomes } = this.state
        this.resetInputs()
        e.preventDefault()
        logic.searchGnomesByFriends(nameFriend, gnomes)
            .then(res => {
                if(res.length) this.setState({ moreFriends: res.length+1, nameFriend: ''})
                else this.setState({errorFriend: 'Upps!! Gnome not found!'})
            })
    }
    searchByProfession = (e) => {
        e.preventDefault()
        this.resetInputs()
        logic.searchGnomesByProfession(this.state.nameProfession, this.state.gnomes)
            .then(res => {
                if(res.length) this.setState({ moreProfessions: res.length+1, nameProfession: ''})
                else this.setState({errorProfession: 'Upps!! Profession not found!'})
            })

    }
    getHint = (e) =>{
        e.preventDefault()
        logic.professions(this.state.gnomes)
            .then(professions => {
                this.setState({professions})
                this.handleOpenModal()
            })
    }
    resetInputs = () => {
        this.setState({
            nameFriend: '',
            nameProfession:'',
            moreProfessions: 0,
            moreFriends: 0,
            errorProfession: '',
            errorFriend: ''
        })
    }

    render() {
        const { gnome, moreFriends, moreProfessions, professions, nameFriend, nameProfession, errorFriend, errorProfession } = this.state
        return (
            <div>
                <Header logout={true} handleLogout={this.handleLogout}/>
                <div className='container-home'>
                    <section>
                        <header className='container-header'>
                            <h1 className="home-title">Hello <b>{gnome.name.substring(0, gnome.name.indexOf(' '))}</b></h1>
                            <button className='button' onClick={this.goToProfile}>My Profile</button>
                        </header>
                        <section className='principal-section'>
                            <Notices />
                            <aside>
                                <div className='container-information'>
                                    <p className='home-subtitle'>GNOME´S INFORMATION: </p>
                                    <div className='information-item'>
                                        <label>Do you want to know who has more friends? Guess it with name</label>
                                        <input type="text" onChange={this.handleChange} name='nameFriend' placeholder={`Example: ${gnome.name}`} value={nameFriend}/>
                                        <div className='searchProfession-button'>
                                            <button onClick={this.searchByFriends}>Search!</button>
                                            <button onClick={this.resetInputs}>Clear</button>
                                        </div>
                                        {moreFriends ? <p>He has {moreFriends} friends</p> : <p>{errorFriend}</p>}
                                    </div>
                                    <div className='information-item'>
                                        <label>Try to guess which is the most popular profession:</label>
                                        <input type="text" onChange={this.handleChange} name='nameProfession' placeholder='Example: Farmer...' value={nameProfession}/>
                                        <div className='searchProfession-button'>
                                            <button onClick={this.searchByProfession}>Search!</button>
                                            <button className='button' onClick={this.getHint}>Help!</button>
                                            <button onClick={this.resetInputs}>Clear</button>
                                        </div>
                                        {moreProfessions ? <p>This profession is exercised by {moreProfessions} gnomes</p> : <p>{errorProfession}</p>}
                                        <ReactModal
                                            isOpen={this.state.showModal}
                                            contentLabel="Minimal Modal Example"
                                            className='modal'
                                        >
                                            {professions.map(profession => <li key={profession}>{profession}</li>)}
                                            <button className='button' onClick={this.handleCloseModal}>Close</button>
                                        </ReactModal>
                                    </div>
                                </div>
                            </aside>
                        </section>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Home)