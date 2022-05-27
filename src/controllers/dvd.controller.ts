import { Request, Response } from "express";
import dvdService from "../services/dvd.service";

class DvdController {
  craetedDvdController = async (req: Request, res: Response) => {
    const createdDvd = await dvdService.createDvdService(req);

    return res.status(200).json(createdDvd);
  };

  getAllDvdController = async (req: Request, res: Response) => {
    const getAllDvd = await dvdService.getAllDvdService();

    return res.status(200).json({ dvds: getAllDvd });
  };
}

export default new DvdController();
