import { connect } from "mongoose";


const url = 'mongosh "mongodb+srv://clusterlp.vqygrsy.mongodb.net/myFirstDatabase" --apiVersion 1 --username lisandropereyra'

const dbConnection = async () => {
    try {
        console.log('db conectada');
        return await connect(url)
    } catch (error) {
        console.log(error);
        process.exit()
    }
}

export default dbConnection