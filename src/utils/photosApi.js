import tokenService from "./tokenService";

const BASE_URL = "/api/";

export function create(locationId){
  return fetch(`${BASE_URL}locations/${locationId}/photos`, {
    method: "POST",
    // body: 
    header: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error(res.error);
  })
}