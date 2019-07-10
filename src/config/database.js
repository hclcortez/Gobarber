module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: '123',
  database: 'gobarber',
  operatorsAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
