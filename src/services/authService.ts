import api from "./api";

export const register = (userData: {
  name: string;
  email: string;
  password: string;
  fileImageProfile: File | null;
}) => {
  const formData = new FormData();
  formData.append('name', userData.name);
  formData.append('email', userData.email);
  formData.append('password', userData.password);
  
  if (userData.fileImageProfile) {
    formData.append('fileImageProfile', userData.fileImageProfile);
  }

  return api.post('/auth/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};


// export interface UserRegisterDto {
//   name: string;
//   password:string;
//   email: string;
//   profileImage: string;
// }

export interface UserLoginDto {
  name: string;
  password: string;
  email: string;
}

// export const register = async (userData:UserRegisterDto) => {
//   const response = await api.post('/User/register', userData);
//   return response.data;
// };

export const login = async (credentials:UserLoginDto) => {
  const response = await api.post('/User/login', credentials);
  return response.data as {token:string}; // כאן נניח שתקבלי את ה־JWT
};