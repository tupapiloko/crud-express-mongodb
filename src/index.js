import app from './server'

app.listen(app.get('port'), () => {
    console.log('server on port 3000')
})