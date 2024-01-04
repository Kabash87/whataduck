import client from "../../api/client";

/**
 * llamada al endpoint de la API
 */

const advertsUrl = "/api/adverts";

export const getLatestAdverts = () => {
  return client.get(advertsUrl);
};

export const getAdvert = (id) => {
  const url = `${advertsUrl}/${id}`;
  return client.get(url);
};

export const createAd = (newAdvert, token) => {
  const formData = new FormData();
  formData.append("name", newAdvert.name);
  formData.append("price", newAdvert.price);
  formData.append("description", newAdvert.description);
  formData.append("type", newAdvert.type);
  formData.append("tags", newAdvert.tags);
  formData.append("photo", newAdvert.photo);
  formData.append("username", newAdvert.username);
  formData.append("senderEmail", newAdvert.senderEmail);

  return client.post(`${advertsUrl}/create-advert`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
};

export const editAdvert = (id, updatedAdvert) => {
  const url = `${advertsUrl}/edit/${id}`;
  return client.put(url, updatedAdvert);
};

export const deleteAdvert = (id) => {
  const url = `${advertsUrl}/${id}`;
  return client.delete(url);
};
