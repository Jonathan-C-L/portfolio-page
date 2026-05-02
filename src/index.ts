//-----------------------------------------------------
// Author:  Jonathan Le
// Purpose: Entry point for all other components
//-----------------------------------------------------
import express, { Request, Response, NextFunction } from "express";
import usersRouter from "./routes/users"

const PORT = 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Server running...");
});

app.get("/api/users", (req: Request, response: Response, next: NextFunction) => {
    response.send([])
});

app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});