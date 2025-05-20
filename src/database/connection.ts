import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";
import User from "./models/UserModel";

const sequelize=new Sequelize(envConfig.connectionString as string,{
    models:[User]
})

try {
    sequelize.authenticate().then(()=>{
console.log('Database has been connected successfully!!');

    }).catch(err=>{
        console.log('Error occured',err);
        
    })
} catch (error) {
    console.log(error);
    
}

sequelize.sync({force:false,alter:false}).then(()=>{
    console.log('synced!!');
    
})
export default sequelize