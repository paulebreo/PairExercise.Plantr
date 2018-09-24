const  {db, Gardener, Vegetable, Plot} = require('./models')
// debbuger
const createData = () => {
    console.log('calling in then')
    return Vegetable.create({
        name: 'carrot',
        color: 'orange',
        planted_on: new Date()
    }).then((vegetable) => {
        console.log('saved', vegetable.name)
        return vegetable
    })      
    // console.log(vegetable)
    // vegetable.save().then((vegetable) => {
    //     console.log('saved', vegetable.name)
    //     return vegetable
    // })      
}
db.sync({force: true})
  .then(createData)
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => { // only if using a version of node WITH `finally`
    db.close()
  })
