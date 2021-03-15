import BaseError from "./BaseError";

class FailedToCallApiError extends BaseError {
  constructor(message: string, public statusCode?: number) {
    super(message);
  }
}

export default FailedToCallApiError;
