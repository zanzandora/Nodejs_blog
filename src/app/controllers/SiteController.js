import Article from '../models/Article.js';
class SiteController {
  async index(req, res) {
    try {
      const Articles = await Article.find({});
      res.json(Articles);
    } catch (err) {
      res.status(400).json({ error: 'error!' });
    }
    // res.render('home');
  }

  login(req, res) {
    res.render('login');
  }
}

export default new SiteController();
//maiminhtu130803:K1fAp2EMayZm28RT
