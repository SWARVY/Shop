import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";
import { isAxiosError } from "axios";

interface RequestBody {
  email: string;
  password: string;
  name: string;
  image: string;
}

interface UserResponse {
  id: string;
  email: string;
  name: string;
  role: 0 | 1;
  image: string;
}

export const registerUser = createAsyncThunk<
  UserResponse,
  RequestBody,
  { rejectValue: string }
>("user/registerUser", async (body, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`/users/register`, body);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        typeof error.response?.data === "string"
          ? error.response.data
          : "An unknown error occurred";
      return thunkAPI.rejectWithValue(errorMessage);
    }

    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
