// src/services/profileService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const profileService = {
  getProfileById: (id) => axios.get(`${API_URL}/profiles/${id}`),
  updateProfile: (id, profile) => axios.put(`${API_URL}/profiles/${id}`, profile),
  createProfile: (profile) => axios.post(`${API_URL}/profiles`, profile),
  deleteProfile: (id) => axios.delete(`${API_URL}/profiles/${id}`),
};

export default profileService;