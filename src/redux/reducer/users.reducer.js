import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "Courtney Henry",
    email: "courtneyhenry@gmail.com",
    img: "/assets/image/photos/user1.svg",
  },
  {
    id: 1,
    name: "Theresa Webb",
    email: "theresawebb@gmail.com",
    img: "/assets/image/photos/user2.svg",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    email: "jennywilson@gmail.com",
    img: "/assets/image/photos/user3.svg",
  },
  {
    id: 3,
    name: "Arlene McCoy",
    email: "arlenemccoy@gmail.com",
    img: "/assets/image/photos/user4.svg",
  },
  {
    id: 4,
    name: "Esther Howard",
    email: "estherhoward@gmail.com",
    img: "/assets/image/photos/user5.svg",
  },
  {
    id: 5,
    name: "Dianne Russell",
    email: "courtneyhenry@gmail.com",
    img: "/assets/image/photos/user6.svg",
  },
  {
    id: 6,
    name: "Marvin McKinney",
    email: "courtneyhenry@gmail.com",
    img: "/assets/image/photos/user7.svg",
  },
  {
    id: 7,
    name: "Darlene Robertson",
    email: "courtneyhenry@gmail.com",
    img: "/assets/image/photos/user8.svg",
  },
  {
    id: 8,
    name: "Guy Hawkins",
    email: "guyhawkins@gmail.com",
    img: "/assets/image/photos/user9.svg",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { deleteUser } = userSlice.actions;

export default userSlice.reducer;
