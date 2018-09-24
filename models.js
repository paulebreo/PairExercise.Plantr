const db = require('./seed')

async function init() {
    try {
      db.authenticate().then(() => {
        console.log('connected to the database')
      });
      await db.sync()
    } catch (error) {
      console.log(error)
    }
}
  
init()