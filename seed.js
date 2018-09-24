const  {db, Gardener, Vegetable, Plot} = require('./models')
// debbuger
const createData = () => {
    console.log('created vegetable then')
    return Vegetable.create({
        name: 'carrot',
        color: 'orange',
        planted_on: new Date()
    }).then((vegetable) => {
        console.log('a vegateble')
       return Plot.create({
            shaded: true,
            size: 1
        }).then((plot)=>{
            // console.log('plot', plot)
            return vegetable.addPlot(plot)
        })
    })
    // console.log(vegetable)
    // vegetable.save().then((vegetable) => {
    //     console.log('saved', vegetable.name)
    //     return vegetable
    // })
}
const createPlot = (vegetable) => {
  console.log('calling in then')
  return Plot.create({
      shaded: true,
      size: 1
  }).then((plot) => {
      console.log('saved plot')

  })

}

db.sync({force: false})
  .then(createData)
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => { // only if using a version of node WITH `finally`
    db.close()
  })
