import httpClient from "../../HttpClient/httpClient";
import PrepareResponse from "./prepareResponse";
import HandleException from "./handleException";

//  POST MATHEOD

export const post = async (url, data) => {
  try {
    let res = await httpClient.post(url, data);
    return PrepareResponse(res);
  } catch (error) {
    return HandleException(error);
  }
};

// GET METHOD

export const get = async (url, data) => {
  try {
    let res = await httpClient.get(url);
    return PrepareResponse(res);
  } catch (error) {
    return HandleException(error);
  }
};

// DELETE METHOD

export const deletes = async (url, data) => {
  try {
    let res = await httpClient.delete(url);
    return PrepareResponse(res);
  } catch (error) {
    return HandleException(error);
  }
};
