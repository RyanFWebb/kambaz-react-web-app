import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";

const initialState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
    addCourse: (state, { payload: course }) => {
      const newCourse = {
        _id: new Date().getTime().toString(),
        ...course,
      };
      state.courses = [...state.courses, newCourse];
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c: any) => c._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      );
    },
    editCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? { ...c, ...course } : c
      );
    },
  },
});

export const { setCourses, addCourse, deleteCourse, updateCourse, editCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;