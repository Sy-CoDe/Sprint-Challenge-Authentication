const { server } = require('./server');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth-users', {
  useMongoClient: true
}).then(conn => {
  console.log('\n connected to localhost mongodb auth-users \n');
})
.catch(err => console.log('error connecting to mongo', err));;

server.listen(port, () => {
  console.log(`\n Server listening on port ${port}`);
});
