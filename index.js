let app= require('express')();
app.get('/', (req, res) => {
    res.send('i am working inside vercel server');
})





app.listen(3000, () => {
    console.log('server is running on port 3000');
})