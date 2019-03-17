import {data} from '../db/data';

class SchoolsController{
    getSchools(req, res){
        res.status(200).send({
            success: 'true',
            message: 'schools retrieved successfully',
            schools: data[0]
        })
    }
}

const schoolsController = new SchoolsController();
export default schoolsController;