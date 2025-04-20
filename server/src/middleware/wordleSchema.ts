import { z } from "zod";
import { Request, Response } from "express";
const wordleSchema = z.object({
  word: z.string().min(5).max(5),
});

export const validateSchema = (schema: z.ZodSchema) => {
  return async (req: Request, res: Response, next: any): Promise<void> => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid request data",
            details: (error as z.ZodError).errors,
          },
        });
        return;
      }
      next(error);
    }
  };
};
