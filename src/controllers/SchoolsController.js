import School from '../models/school.model';

class SchoolsController{
   
    getSchools(req, res){
        console.log(School)
        res.status(200).send({
            success: 'true',
            message: 'schools retrieved successfully',
            schools: School
        })
    }
}

const schoolsController = new SchoolsController();
export default schoolsController;