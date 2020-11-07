import api from './base';

const uploadFile = (uri: File) => {
  const form = new FormData();

  form.append('file', uri);

  return api.post('/upload', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export default { uploadFile };
