const express = require('express')
const cors = require('cors')
const app = express()
const port =  process.env.PORT || 5000

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')


app.use(cors())

app.get('/', (req, res)=> {
    res.send("Best Chef's Server")
})

app.get('/chefs', (req, res)=> {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const chef = chefs.find(c => parseInt(c.id) === id);
    res.send(chef)
})

app.get('/recipes', (req, res)=> {
    res.send(recipes)
})

app.get('/recipes/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedRecipe = recipes.find(r=> parseInt(r.id) === id)
    res.send(selectedRecipe)
})



app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})