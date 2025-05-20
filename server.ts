import app from "./src/app";
import { envConfig } from "./src/config/config";

function startServer(){
try {
    const port=envConfig.port || 4000
app.listen(port,()=>{
    console.log(`Server has been started at port ${port}.thank you`);
    
})
} catch (error) {
    console.log(error);
    
}
}
startServer()