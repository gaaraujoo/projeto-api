const { Sequelize, Model } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database'
})

sequelize.authenticate()
    .then(() => {
        console.log('conexao efetuada no db com sucesso')
        return sequelize.sync()
    })

module.exports = sequelize