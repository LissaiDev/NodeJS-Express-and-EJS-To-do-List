const express = require('express')
const bodyParser = require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    
    let date = new Date()
    let day = date.getDay()

    switch (day){
        case 0:
            day= 'Sunday'
            break
        case 1:
            day= 'Monday'
            break
        case 2:
            day= 'Sunday'
            break
        case 3:
            day= 'Monday'
            break
        case 4:
            day= 'Sunday'
            break
        case 5:
            day= 'Monday'
            break
        case 6:
            day= 'Saturday'
            break
        default:
            (console.log("Impossible"))
        
    }
    
    res.render('list',{actualDay : day})

})


app.listen(8080,()=>{console.log('Server up and running on port 8080')})
