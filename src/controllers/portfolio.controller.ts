//-----------------------------------------------------
// Controllers are responsible for one thing: translating an HTTP request into a service call and an HTTP response. 
// All try/catch blocks forward errors to next(err) rather than handling them inline — this keeps error formatting 
// consistent and lets the global error handler own that responsibility.
//-----------------------------------------------------
import { Request, Response } from "express";
import { CreateUserQueryParams } from "../types/query-params";

export function getProjects(req : Request, res: Response){

}

/*
import { Request, Response, NextFunction } from 'express';
import { PortfolioService } from '../services/portfolio.service';
import { ApiResponse } from '../utils/ApiResponse';
import { ContactPayload } from '../types';

const portfolioService = new PortfolioService();

export class PortfolioController {
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
      const project = portfolioService.getProjectById(req.params.id);
      ApiResponse.success(res, project, 'Project fetched successfully');
    } catch (err) {
      next(err);
    }
  }

  sendContact(req: Request, res: Response, next: NextFunction): void {
    try {
      const result = portfolioService.sendContact(req.body as ContactPayload);
      ApiResponse.success(res, result, 'Message received — thank you!');
    } catch (err) {
      next(err);
    }
  }
}
*/