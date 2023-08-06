export const makeRequest = async <T = unknown>(
  url: string,
  config?: RequestInit,
): Promise<T> => {
  const data = await fetch(url, config);
  const response = await data.json();
  return response;
};
