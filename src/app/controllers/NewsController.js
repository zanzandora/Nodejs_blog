class NewsController {
    index(req, res) {
        res.render('news');
    }
    
    show(req, res) {
        res.send('News Details');
    }
}

export default new NewsController; 