const server=require('./app.js');
const PORT=process.env.PORT||2000;

server.listen(PORT,()=>{
    console.log(`you server is running on http://localhost:${PORT}`);
})



