import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/login"; // Import your API call

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginApi(email, password);
      return response; // Return the API response (user and token)
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

// Utility function to handle localStorage operations
const loadUserFromLocalStorage = () => {
  try {
    const storedInfo = localStorage.getItem("admin");
    return storedInfo ? JSON.parse(storedInfo) : null;
  } catch (error) {
    console.error("Error parsing user info from local storage:", error);
    return null;
  }
};

// Initial state
const initialState = {
  currentUser: loadUserFromLocalStorage(),
  token: null,
  error: null,
  loading: false, // Add loading state
};

// Create slice
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.token = null;
      state.error = null;
      state.loading = false; // Reset loading state on sign out
      try {
        localStorage.removeItem("admin");
      } catch (error) {
        console.error("Error removing user info from local storage:", error);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.currentUser = user;
        state.token = token;
        state.error = null;
        state.loading = false;
        try {
          localStorage.setItem("admin", JSON.stringify(user));
        } catch (error) {
          console.error("Error saving user info to local storage:", error);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // The error message passed from thunk
      });
  }
});
console.log(adminSlice)
// Export actions
export const { signOutSuccess } = adminSlice.actions;

// Export reducer
export default adminSlice.reducer;
