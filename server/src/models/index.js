const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize(
  'postgres://jf10:bin1226@127.0.0.1:25432/learndb'
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
