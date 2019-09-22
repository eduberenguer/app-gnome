import React from 'react'
import { withRouter} from 'react-router-dom'
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Card from "../components/Card";

class User extends React.Component{
    state = {
        gnomes: JSON.parse(localStorage.getItem('gnomes')),
        otherNameGnome: '',
        errorMessage: '',
        flagOther: false,
        otherGnome: []
    }

    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({[name]:value})
    }

    searchGnome = (e) => {
        e.preventDefault()
        this.setState({flagOther: false})
        this.state.gnomes.map(gnome  => {
            if(this.state.otherNameGnome === gnome.name) {
                this.setState({
                    errorMessage: '',
                    otherNameGnome: '',
                    otherGnome: gnome,
                    flagOther: true
                })
            }
            return ''
        })
    }
    clearResults = (e) => {
        e.preventDefault()
        this.setState({
            flagOther: false,
            otherNameGnome: ''
        })
    }


 render() {
        const { flagOther, otherGnome, otherNameGnome } = this.state
     return(
         <div>
             <Header returnPage={true}/>
             <form className='form'>
                 <h2>Compare yourself to other gnomes: (Write down your name)</h2>
                 <input type="text" placeholder='Gnome name...' name='otherNameGnome' onChange={this.handleChange} value={otherNameGnome}/>
                 <button onClick={this.searchGnome}>Search!</button>
                 <button onClick={this.clearResults}>Clear Results</button>
             </form>
             <Card />
             {flagOther ? <Card otherGnome={otherGnome} /> : ''}
             <Footer />
         </div>
     )
 }
}

export default withRouter(User)

