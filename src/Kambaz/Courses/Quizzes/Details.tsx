import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as quizClient from "./client";
import { Button, Card, Spinner } from "react-bootstrap";
import type { Quiz } from "./reducer";
import { FaPencil } from "react-icons/fa6";

export default function Details() {
    const { cid, qid } = useParams();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const editor = `/Kambaz/Courses/${cid}/Quizzes/${qid}`
    useEffect(() => {
        const loadQuiz = async () => {
        try {
            const quizzes = await quizClient.fetchQuizzesForCourse(cid!);
            const found = quizzes.find((q: Quiz) => q._id === qid);
            setQuiz(found || null);
        } catch (err) {
            console.error("Failed to fetch quizzes:", err);
            setQuiz(null);
        } finally {
            setLoading(false);
        }
        };
        loadQuiz();
    }, [cid, qid]);

    if (loading) return <Spinner animation="border" />;
    if (!quiz) return <div>Quiz not found.</div>;

    return (
        <div>
            <div className="d-flex justify-content-center my-3">
                <Button
                    className="me-2"
                    variant="secondary"
                    // onClick={() => navigate(editor)}
                >
                    Preview
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => navigate(editor)}
                >
                    <FaPencil className="me-2" />
                    Edit Quiz
                </Button>
            </div>
            <hr />
            <div className="container mt-4">
                <h2>{quiz.title}</h2>
                <Card className="mt-3">
                    <Card.Body>
                        <p><strong>Description:</strong> {quiz.description}</p>
                        <p><strong>Quiz Type:</strong> {quiz.quizType}</p>
                        <p><strong>Points:</strong> {quiz.points}</p>
                        <p><strong>Assignment Group:</strong> {quiz.assignmentGroup}</p>
                        <p><strong>Time Limit:</strong> {quiz.timeLimit} minutes</p>
                        <p><strong>Shuffle Answers:</strong> {quiz.shuffleAnswers ? "Yes" : "No"}</p>
                        <p><strong>Multiple Attempts:</strong> {quiz.multipleAttempts ? "Yes" : "No"}</p>
                        <p><strong>Show Correct Answers:</strong> {quiz.showCorrectAnswers ? "Yes" : "No"}</p>
                        <p><strong>Access Code:</strong> {quiz.accessCode || "(None)"}</p>
                        <p><strong>Available:</strong> {quiz.available?.split("T")[0]}</p>
                        <p><strong>Due:</strong> {quiz.due?.split("T")[0]}</p>
                        <p><strong>Until:</strong> {quiz.until?.split("T")[0]}</p>
                        <p><strong>Webcam Required:</strong> {quiz.webcamRequired ? "Yes" : "No"}</p>
                        <p><strong>Lock Questions After Answering:</strong> {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
                    </Card.Body>
                </Card>
            </div>
        </div>
  );
}
