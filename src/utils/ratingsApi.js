import tokenService from "./tokenService";

const BASE_URL = "/api/";

export function create(locationId) {
  return fetch(`${BASE_URL}locations/${locationId}/ratings`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),

    },   
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error(res.error);
  });
}

export function removeRating(ratingId) {
  return fetch(`${BASE_URL}ratings/${ratingId}`, {
    method: "DELETE",
    Authorization: "Bearer " + tokenService.getToken(),
}).then((res) => {
  if (res.ok) return res.json();
  throw new Error(res.error);
});
}


// export function updateRating(ratingId) {
//   return fetch(`${BASE_URL}rating/${ratingId}`, {
//     method: "PUT",
//     Authorization: "Bearer " + tokenService.getToken(),
// }).then((res) => {
//   if (res.ok) return res.json();
//   throw new Error(res.error);
// });
// }
