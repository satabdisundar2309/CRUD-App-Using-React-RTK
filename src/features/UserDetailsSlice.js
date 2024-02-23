import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// https://65d82db327d9a3bc1d7c4815.mockapi.io/CRUDUsers

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((user) => {
            return user.id !== id;
          });
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }, extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(showUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        // console.log(state.users);
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
 

 
});

export default userDetails.reducer;

// creating an action(user creation)
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://65d82db327d9a3bc1d7c4815.mockapi.io/CRUDUsers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// creating an action(users details read)
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://65d82db327d9a3bc1d7c4815.mockapi.io/CRUDUsers"
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// creating an action(users details delete)
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://65d82db327d9a3bc1d7c4815.mockapi.io/CRUDUsers/${id}`,
      { method: "DELETE" }
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// creating an action(users details update)
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(
      `https://65d82db327d9a3bc1d7c4815.mockapi.io/CRUDUsers/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
