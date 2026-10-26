import axios from "axios";

export const getErrorMessage = (error: unknown, defaultMsg:string) => {
  const message = axios.isAxiosError<{ message?: string }>(error)
    ? (error.response?.data?.message ?? error.message)
    : error instanceof Error
      ? error.message
      : defaultMsg

  return message;
};
