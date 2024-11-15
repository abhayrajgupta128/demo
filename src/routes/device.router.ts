import {Router} from 'express';
import {DeviceController} from '../controllers';
import { AuthMiddleware } from '../middlewares';

const deviceRouter = Router();

deviceRouter.use("/devices", AuthMiddleware.verifyApiKey);

deviceRouter.post('/device', DeviceController.createDevice);
deviceRouter.get('/device', DeviceController.getDevices);
deviceRouter.get('/device/:id', DeviceController.getDevice);
deviceRouter.patch('/device/:id', DeviceController.updateDevice);
deviceRouter.delete('/device/:id', DeviceController.deleteDevice);

export default deviceRouter;