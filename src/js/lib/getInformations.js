import axios from './axios';

export const getInformations = async () => {
  // Get informations from server
  const informations = await axios.get('/informations');
  return informations;
}
