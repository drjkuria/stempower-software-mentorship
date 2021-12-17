import { 
        addNewProvince, 
        getProvinces, 
        getProvinceById,
        updateProvince, 
        deleteProvince} from "../controllers/provinceController";

const routes = (app) => {
    app.route('/provinces/')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getProvinces)
        .post(addNewProvince);
    
    app.route('/provinces/:provinceId')
        .get(getProvinceById)
        .put(updateProvince)
        .delete(deleteProvince);
}

export default routes;