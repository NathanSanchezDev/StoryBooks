const express = require('express')
const router = express.Router()

//Login / landing page
//@route GET/
router.get('/', (req, res)=>{
  res.render('login', {
    layout: 'login'
  })
})

//@desc DASHBOARD
//@route GET /dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router