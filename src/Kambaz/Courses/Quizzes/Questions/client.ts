import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;

export const fetchQuestionsForQuiz = async (qid: string) => {
  const response = await axiosWithCredentials.get(`${QUIZZES_API}/${qid}/questions`);
  console.log('API response data:', response.data);
  return response.data;
};

export const fetchQuestionById = async (questid: string) => {
  const response = await axiosWithCredentials.get(`${QUESTIONS_API}/${questid}`);
  return response.data;
};

export const createQuestion = async (questid: string, question: any) => {
  const response = await axiosWithCredentials.post(`${QUIZZES_API}/${questid}/questions`, question);
  return response.data;
};

export const updateQuestion = async (questid: string, updates: any) => {
  const response = await axiosWithCredentials.put(`${QUESTIONS_API}/${questid}`, updates);
  return response.data;
};

export const deleteQuestion = async (questid: string) => {
  const response = await axiosWithCredentials.delete(`${QUESTIONS_API}/${questid}`);
  return response.status === 200;
};