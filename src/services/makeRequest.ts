import axios, { AxiosRequestConfig } from "axios";

export async function makeRequest(
  url: string,
  options?: AxiosRequestConfig<any>
): Promise<any> {
  try {
    const response = await axios(url, options);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Error");
  }
}
