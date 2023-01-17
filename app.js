//Exports and declarations
const express = require('express')
const app=express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')
app.use(express.static('public'))

const date = require(__dirname+'/custom_modules.js')

//Arrays that will store the items
let items = []
let workItems = []

//Gets and posts

app.get('/',(req,res)=>{

    let day = date.getDate()
    res.render('list',{
        title : day,
        newListItems : items,
        action: '/'
    })
})

app.post('/',(req,res)=>{
    items.push(req.body.nextItem)
    res.redirect('/')
})

app.get('/work',(req,res)=>{
    res.render('list',{
        title: 'Work list',
        newListItems : workItems,
        action: '/work'
    })
})

app.post('/work',(req,res)=>{
    let item = req.body.nextItem
    workItems.push(item)
    res.redirect('/work')

})


app.listen(8080,()=>{console.log('Server up and running on port 8080')})