import axios from 'axios';
import { SUBSCRIBE_FORMID, SUBSCRIBE_FORM, CONTACT_FORMID } from '../../api/index';

export const submitSubscribeForm = async (body) => {
  let fields = [];
  Object.keys(body).forEach((key) => {
    fields.push({ name: key, value: body[key] });
  });

  let { data } = await axios.post(`${SUBSCRIBE_FORM}/${SUBSCRIBE_FORMID}`, {
    fields: fields,
  });
  return data;
};


export const submitContactForm = async (body) => {
  console.log('body === ', body)
  let fields = [];
  Object.keys(body).forEach((key) => {
    fields.push({ name: key, value: body[key] });
  });

  let { data } = await axios.post(`${SUBSCRIBE_FORM}/${CONTACT_FORMID}`, {
    fields: fields,
  });
  return data;
};


// export const fetchOperatorOptions = async (body) => {
//   let { data } = await axios.get(`${FORM_DETAILS}?formid=${SUBSCRIBE_FORMID}`);
//   return data;
// };
