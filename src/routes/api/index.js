import { Router } from 'express';
import accountRoute from './accountRoute';
import customer from './customerRoute';
import transactionRoute from './transactionRoute';

const router = Router();

router.use('/account', accountRoute);
router.use('/customer', customer);
router.use('/transaction', transactionRoute);

export default router;
