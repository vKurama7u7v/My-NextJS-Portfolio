// Custom error handler
export class CustomError extends Error {
  public status: number
  public message: string
  public fields: any
  constructor(status: number, message: string, fields: any) {
    super(message)
    this.status = status
    this.message = message
    this.fields = fields
  }
}

export const createCustomError = (
  status: number,
  message: string,
  fields: any
) => {
  return new CustomError(status, message, fields)
}
