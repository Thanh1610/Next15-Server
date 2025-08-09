import { z } from 'zod';
import { Response } from 'express';

export const validate = <T>(schema: z.ZodSchema<T>, data: unknown, res: Response): T | null => {
  const result = schema.safeParse(data);
  if (!result.success) {
    res.status(400).json({
      status: 'ERR',
      message: 'Invalid data',
      errors: result.error.issues,
    });
    return null;
  }

  return result.data;
};
