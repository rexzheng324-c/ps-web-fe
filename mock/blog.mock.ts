// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/v1/blog/create': (req: Request, res: Response) => {
    res.status(200).send({
      code: '外达很价几张并品装转山可管进族局。',
      data: null,
      message: '温写斗温土委置节该感米联统低道示。',
      success: true,
    });
  },
  'POST /api/v1/blog/delete': (req: Request, res: Response) => {
    res.status(200).send({
      code: '三再将联期格员号便起今连种共应则书必。',
      data: null,
      message: '面次程一切者今国志备表严以局。',
      success: false,
    });
  },
  'POST /api/v1/blog/list': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
