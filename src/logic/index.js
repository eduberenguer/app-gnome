//const gnomes = require('./data');
const mayusFirst = require('../utils/mayusFirst')

const logic = {

    //Método para recoger la información desde la url. Para así simular que se recoger desde una API.
    // (También tengo los datos de forma local donde se podrían realizar las operaciones)
    retrieveGnomes(path){
        return fetch(path)
            .then(res => res.json())
    },
    searchGnomesByFriends(friend, gnomes){
        return Promise.resolve()
            .then(() => {
                let moreFriends = []
                gnomes.forEach(gnome => {
                    gnome.friends.map(resFriend => {
                        if(friend === resFriend){
                            return moreFriends.push(gnome)
                        }
                        return ''
                    })
                })
                return moreFriends
            })
    },
    searchGnomesByProfession(profession, gnomes){
        return Promise.resolve()
            .then(() => {
                profession = mayusFirst(profession.toLowerCase())
                let moreProfessions = []
                gnomes.forEach(gnome => {
                    gnome.professions.map(resProfession => {
                        if(profession === resProfession){
                            return moreProfessions.push(gnome)
                        }
                        return ''
                    })
                })
                return moreProfessions
            })
    },
    professions(gnomes){
        return Promise.resolve()
            .then(() => {
                let professionList = []
                gnomes.forEach(gnome => {
                    gnome.professions.map(resProfession => {
                        professionList.push(resProfession)
                        return ''
                    })
                    return ''
                })
                let finalList = [...new Set(professionList)]
                return finalList
            })
            .catch(error => error)
    },
    retrieveOlderGnome(gnomes){
        let max = 0
        let olderGnome = {}
        gnomes.map(gnome => {
            if(max < gnome.age){
                max = gnome.age
                olderGnome = gnome
            }
            return ''
        })
        return olderGnome
    },
    retrieveYoungerGnome(gnomes){
        let min = Number.MAX_VALUE
        let youngerGnome = {}
        gnomes.map(gnome => {
            if(min > gnome.age){
                min = gnome.age
                youngerGnome = gnome
            }
            return ''
        })
        return youngerGnome
    },
    retrieveMoreWeightGnome(gnomes){
        let max = 0
        let moreWeightGnome = {}
        gnomes.map(gnome => {
            if(max < gnome.age){
                max = gnome.age
                moreWeightGnome = gnome
            }
            return ''
        })
        return moreWeightGnome
    },
    retrieveMoreHeight(gnomes){
        let min = Number.MAX_VALUE
        let moreHeightGnome = {}
        gnomes.map(gnome => {
            if(min > gnome.height){
                min = gnome.height
                moreHeightGnome = gnome
            }
            return ''
        })
        return moreHeightGnome
    },
}

module.exports = {logic}
