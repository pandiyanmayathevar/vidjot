if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://pandiyanmayathevar:Mpps098.@ds119078.mlab.com:19078/vdjot-prod'}
}else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}