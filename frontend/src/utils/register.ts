import axiosInstance from "./axios";

interface RequestBody {
  email: string;
  password: string;
  name: string;
  image: string;
}

interface RegisterProps {
  body: RequestBody;
}

const registerAxios = ({ body }: RegisterProps): Promise<RequestBody> =>
  axiosInstance.post(`/users/register`, body);

export default registerAxios;
