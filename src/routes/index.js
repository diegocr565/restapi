const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Diego",
        "instagram": "@caseroo__"
    };
    res.json(data);
})

module.exports = router;