import express from 'express';
import schoolController from '../controllers/SchoolsController';

const router = express.Router();

router.get('/api/schools', schoolController.getSchools);

export default router;