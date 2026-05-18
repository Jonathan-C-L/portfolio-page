//-----------------------------------------------------
// Controller for portfolio end points
//-----------------------------------------------------
import { Request, Response, NextFunction } from 'express';
import { PortfolioService } from '../services/portfolio.service';
import { ApiResponse } from '../utils/ApiResponse';

const portfolioService = new PortfolioService();

//------------------------------------------------------
// HTTP Request to Service Call Definitions
//------------------------------------------------------
export class PortfolioController {
  getPortfolioInfo(req: Request, res: Response, next: NextFunction): void {
    try{
      const title = portfolioService.getProjectById(req.params["id"] as string)["title"];
      ApiResponse.success(res, title, "Title successfully extracted!");
    } catch (err){
      next(err);
    }
  }
  
  getProjects(_req: Request, res: Response, next: NextFunction): void {
    try {
      const projects = portfolioService.getProjects();
      ApiResponse.success(res, projects, 'Projects fetched successfully');
    } catch (err) {
      next(err);
    }
  }

  getProjectById(req: Request, res: Response, next: NextFunction): void {
    try {
      const project = portfolioService.getProjectById(req.params["id"] as string);
      ApiResponse.success(res, project, 'Project fetched successfully');
    } catch (err) {
      next(err);
    }
  }

  getPortfolio(req: Request, res: Response, next: NextFunction): void {
    try {
      const portfolio = portfolioService.getPortfolio();
      ApiResponse.success(res, portfolio, "Portfolio fetched successfully");
    } catch (err) {
      next(err);
    }
  }

  // sendContact(req: Request, res: Response, next: NextFunction): void {
  //   try {
  //     const result = portfolioService.sendContact(req.body as ContactPayload);
  //     ApiResponse.success(res, result, 'Message received — thank you!');
  //   } catch (err) {
  //     next(err);
  //   }
  // }
}
