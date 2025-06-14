import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAssignmentsForCourse = async (cid: string) => {
  const response = await axios.get(`${COURSES_API}/${cid}/assignments`);
  return response.data;
};

export const fetchAssignmentById = async (aid: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${aid}`);
  return response.data;
};

export const createAssignment = async (cid: string, assignment: any) => {
  const response = await axios.post(`${COURSES_API}/${cid}/assignments`, assignment);
  return response.data;
};

export const updateAssignment = async (aid: string, updates: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${aid}`, updates);
  return response.data;
};

export const deleteAssignment = async (aid: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${aid}`);
  return response.status === 200;
};