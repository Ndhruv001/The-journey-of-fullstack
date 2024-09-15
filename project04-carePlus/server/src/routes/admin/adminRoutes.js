import express from 'express';
import verifyJWT from '../../middlewares/user/verifyJWT.js'
import { getAppointmentsList } from '../../controllers/admin/appointmentControllers.js'
import { getApprovalList } from '../../controllers/admin/managementControllers.js'
import { getNotificationsList } from '../../controllers/admin/notificationControllers.js'

const router = express.Router();

// APPOINTMENT ROUTES
router.get('/appointments/overview', verifyJWT("admin"), getAppointmentsList);

// MANAGEMENT ROUTES
router.get("/management/approval/list", verifyJWT("admin"), getApprovalList);

// NOTIFICATION ROUTES
router.get('/notification/list', verifyJWT("admin"), getNotificationsList);

export default router;