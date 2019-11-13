import axios from './axios';

/** Post information data to server
 * 
 * @param { Object } data
 *    - { String } info
 *    - { String } imageUrl
 *    - { Float }  x
 *    - { Float }  y
 */
export const postInformations = async (data) => {
  // Get and validate data
  const { info, imageUrl, x, y } = data;
  if (!info) {
    alert('情報を入力してください！')
    return false;
  }

  const newInfo = await axios.post('/informations', {
    info: info,
    x: x,
    y: y,
    image_url: imageUrl
  });

  return newInfo;
}
