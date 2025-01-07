import Article from '../models/Article.js';
class SiteController {
  async index(req, res, next) {
    Article.find({})
      .lean()
      .then((Articles) => res.render('home', { Articles }))
      .catch((err) => next(err));
  }

  login(req, res) {
    res.render('login');
  }
}

export default new SiteController();
//maiminhtu130803:K1fAp2EMayZm28RT
