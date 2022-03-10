interface getHeaders {
  authToken: string;
  params: any;
}

export const getHeadersWithAutorizationToken = ({
  authToken,
  params,
}: getHeaders) => {
    
  let requestConfig = {
    params: { ...params },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

 return requestConfig;
  
};
