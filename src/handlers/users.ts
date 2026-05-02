import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";

export function getUsers(req: Request, res: Response){
    res.send([]);
}

export function getUserById(req: Request, res: Response){
    res.send({});
}

export function createUser(req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>, res: Response){
    
}