const hakkinda=function(req, res, next) { // arayüzler burda
    res.render('hakkinda', { title: 'hakkinda sayfasi' });
  };
  module.exports={
    hakkinda,
  }