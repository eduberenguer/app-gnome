const mayusFirst = require('../utils/mayusFirst');
const { logic } = require('./index');
const data = require('./data')

test('MayusFirst Function Test ', () => {
  expect(mayusFirst('test')).toBe('Test')
})

test('Professions Test', () => {
    return logic.professions(data.Brastlewark)
        .then(data => {
            expect(data.length).toEqual(24)
            expect(data).toEqual(["Metalworker", "Woodcarver", "Stonecarver", " Tinker", "Tailor", "Potter", "Brewer", "Medic", "Prospector", "Gemcutter", "Mason", "Cook", "Baker", "Miner", "Carpenter", "Farmer", "Tax inspector", "Smelter", "Butcher", "Sculptor", "Blacksmith", "Mechanic", "Leatherworker", "Marble Carver"]
            )
        });
})

test('Search Gnomes By Friends Test', () => {
    return logic.searchGnomesByFriends('Libalia Quickpower',data.Brastlewark)
        .then(data => {
            expect(data.length).toEqual(3)
            expect(data[0].name).toEqual('Twizzle Fusstorque')
            expect(data[1].name).toEqual('Fizkin Quickblade')
            expect(data[2].name).toEqual('Sarabink Chromepiston')
        })
})

test('Search Gnomes By Professions Test', () => {
    return logic.searchGnomesByProfession('Farmer',data.Brastlewark)
        .then(data => expect(data.length).toEqual(203));
})

test('Retrieve Gnome More Height Test', () => {
    expect(logic.retrieveMoreHeight(data.Brastlewark))
        .toStrictEqual({"age": 179, "friends": ["Fizkin Gyrowhistle", "Ecki Felspackle", "Midwig Magnabuster", "Fizkin Bitterwhistle"], "hair_color": "Black", "height": 91.41726, "id": 734, "name": "Libalia Nozzleblade", "professions": ["Marble Carver", "Mason", "Medic", "Potter", "Tax inspector", "Carpenter"], "thumbnail": "http://www.publicdomainpictures.net/pictures/20000/nahled/squirrel-in-winter-11298746828jAB.jpg", "weight": 41.66803})
})

test('Retrieve Gnome More Weight Test', () => {
    expect(logic.retrieveMoreWeightGnome(data.Brastlewark))
        .toStrictEqual({"age": 379, "friends": ["Modwell Voidbuster", "Fizwood Gyropiston", "Kinthony Quickblade", "Zedkin Wrongrivet"], "hair_color": "Red", "height": 114.47044, "id": 89, "name": "Libalia Quickpower", "professions": ["Mason", "Prospector", "Tax inspector"], "thumbnail": "http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg", "weight": 38.373962})
})

test('Retrieve Gnome Older Test', () => {
    expect(logic.retrieveOlderGnome(data.Brastlewark))
        .toStrictEqual({"age": 379, "friends": ["Modwell Voidbuster", "Fizwood Gyropiston", "Kinthony Quickblade", "Zedkin Wrongrivet"], "hair_color": "Red", "height": 114.47044, "id": 89, "name": "Libalia Quickpower", "professions": ["Mason", "Prospector", "Tax inspector"], "thumbnail": "http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg", "weight": 38.373962})
})

test('Retrieve Gnome Older Test', () => {
    expect(logic.retrieveYoungerGnome(data.Brastlewark))
        .toStrictEqual( {"age": 30, "friends": [], "hair_color": "Black", "height": 122.311485, "id": 95, "name": "Malbert Tinkweaver", "professions": ["Stonecarver", " Tinker"], "thumbnail": "http://www.publicdomainpictures.net/pictures/20000/nahled/sunset-in-winter.jpg", "weight": 36.85402})
})