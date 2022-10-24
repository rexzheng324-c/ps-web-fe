// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/v1/user/login': (req: Request, res: Response) => {
    res.status(200).send({
      code: '快接列记结除际只值务安象即约类。',
      data: null,
      message: '办少做查想往导青只资白教器。',
      success: false,
    });
  },
  'GET /api/v1/user/logout': (req: Request, res: Response) => {
    res.status(200).send({
      code: '度认近满反斗由部书直党者百量时。',
      data: null,
      message: '业目平热教而方家治压全土特进适计统。',
      success: true,
    });
  },
  'POST /api/v1/user/register': (req: Request, res: Response) => {
    res.status(200).send({
      code: '生上于包受清取强号基造方。',
      data: null,
      message: '专圆间情月口二运点力要下须土。',
      success: true,
    });
  },
};
