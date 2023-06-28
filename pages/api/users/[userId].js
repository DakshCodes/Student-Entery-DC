import connectMongo from '../../../database/conn'
import { getUser, updateUser, deleteUser } from '../../../database/controller';

export default async function handler(req, res) {
    
        connectMongo()

        // type of request
        const { method } = req

        switch (method){
            case "GET":
                getUser(req, res);
                break;
            case 'PUT':
                updateUser(req, res)
                break;
            case 'DELETE':
                deleteUser(req, res)
                break;
            default : 
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowd`)
                break;
        }
}