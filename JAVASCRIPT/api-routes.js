// JavaScript source code
let route = require('express').Router();
router.get('/', (req, res) => {
    res.json({
        status: 'API is working',
        message: 'MoviesApp rest API'
    })
});

module.exports = router;