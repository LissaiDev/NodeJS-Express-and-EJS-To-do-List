const express = require('express')
const bodyParser = require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))

let Items = []

app.get('/',(req,res)=>{
    let options = {
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    }
    let date = new Date()
    let day = date.toLocaleDateString('en-US',options)
    res.render('list',{
        actualDay : day,
        newListItems : Items
    })
})

app.post('/',(req,res)=>{
    Items.push(req.body.nextItem)
    res.redirect('/')
})


app.listen(8080,()=>{console.log('Server up and running on port 8080')})