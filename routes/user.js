const 
express     = require('express'),
router      = express.Router(),
passport    = require('passport'),
User        = require('../models/user')



//handling user sign up
router.post('/register', function(req, res){
    req.body.email
    req.body.password
    User.register(
        new User({email: req.body.email}), 
        req.body.password, 
        // function(err, user){
        //     if(err){
        //     console.log(err)
        //     return res.render('register')
        //     }
        //     passport.authenticate('local')(req, res, function(){
        //     res.redirect('/secret')
        //     })
        // }
    )
})

// login logic
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/secret',
        failureRedirect: '/login'
    }), 
    function(req, res){
    // res.send('login')
})






// router.post('/', async function(req, res){
//     try{
//         const { task, start_date, supposed_end_date, rate, stage, status, percent, end_date } = req.body;
//         console.log("reqbody", req.body)
//         console.log("req.body.percent", req.body.percent)
//         let kpiObject = await KPI.create({ task, start_date, supposed_end_date, rate, stage, status, percent, end_date });
        
//         res.send(kpiObject);
//     } catch(e){
//         console.log('error', e);
//         res.status(422).send(e)
//     }
// })

// router.get('/', function(req, res){
//     KPI.find({}, function(err, kpis){
//         err ? res.send(err) :
//         res.send(kpis)
//     })
// })

// router.get('/:id/edit', function(req, res){
//     KPI.findById(req.params.id, function(err, kpis){
//         err ? res.send(err) :
//         res.send(kpis)
//     })
// })

// router.put('/:id', async function(req, res){
//     try {
//         const updatedKPI = await KPI.findByIdAndUpdate(req.params.id, req.body,
//             {new: true} // return the just updated kpi
//         )
//         console.log("Success2: ", req.body)
//         res.send(updatedKPI)
//         // res.status(200).json('ok')
//     }catch(e){
//         console.log("Update Error:::::", e.message);
//         res.status(422).send(e)
//     }
// })

// router.delete('/:id', async (req, res) => {
//     try {
//         const deletedKPI = await KPI.findByIdAndRemove(req.params.id)
//         console.log("delete req.params.id", req.params.id)
//         res.send(deletedKPI)
//     } catch(e){
//         console.log("Delete Error:::::", e.message);
//         res.status(422).send(e)
//     }
// })

module.exports = router;