class AppError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string, stock = '') {
    super(message);
    this.statusCode = statusCode;

    if (stock) {
      this.stack = stock;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
