// Will want to save questions to individual quizzes as a 1 to many relationship
// This may require a new collection in the database
import {
  Form,
  FormSelect,
  Button,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion, updateQuestion } from "./reducer";
import type { Question } from "./reducer";
import { useState, useEffect } from "react";
import * as questionClient from "./client";

export default function QuestionEditor() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const questions = useSelector((state: any) => state.questionsReducer?.questions ?? []);
    const existingQuestion = questions.find((a: Question) => a._id === qid);
    const isNewQuestion = qid === "new" || !existingQuestion;

    const [formData, setFormData] = useState<Partial<Question>>({
        questionType: "Multiple Choice",
        questionGroup: "Computer Science",
        title: "Unnamed Question",
        question: "",
        points: 100,
        correctAnswer: "",
        options: [],
        published: false,
    });

    useEffect(() => {
        if (!isNewQuestion && existingQuestion) {
        setFormData({ ...existingQuestion });
        } else if (isNewQuestion) {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const nextWeek = new Date(now);
        nextWeek.setDate(nextWeek.getDate() + 7);

        setFormData((prev) => ({
            ...prev,
            due: nextWeek.toISOString().split("T")[0],
            available: now.toISOString().split("T")[0],
            until: nextWeek.toISOString().split("T")[0],
            course: cid,
            quiz: qid,
        }));
        }
    }, [qid, existingQuestion, isNewQuestion, cid]);

    const handleInputChange = (field: keyof Question, value: any) => {
        setFormData((prev) => ({
        ...prev,
        [field]: value,
        }));
    };

    const handleSave = async () => {
        if (!formData.title?.trim()) {
            alert("Question name is required");
            return;
        }

        const questionData: Question = {
            _id: isNewQuestion ? Date.now().toString() : formData._id!,
            questionType: formData.questionType || "Multiple Choice",
            questionGroup: formData.questionGroup || "Computer Science",
            title: formData.title!,
            question: formData.question || "",
            points: Number(formData.points) || 100,
            correctAnswer: formData.correctAnswer || "",
            options: formData.options || [],
            published: formData.published ?? false,
        };

        try {
        if (isNewQuestion) {
            const created = await questionClient.createQuestion(cid!, questionData);
            dispatch(addQuestion(created));
        } else {
            const updated = await questionClient.updateQuestion(formData._id!, questionData);
            dispatch(updateQuestion(updated));
        }

        navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/Questions`);
        } catch (err) {
        console.error("Error saving question:", err);
        alert("Failed to save question.");
        }
    };

    const handlePublish = async () => {
        if (!formData._id) return;

        try {
            const updated = await questionClient.updateQuestion(formData._id, {
            ...formData,
            published: true,
            });
            setFormData(updated);
            dispatch(updateQuestion(updated));
        } catch (err) {
            console.error("Failed to publish:", err);
            alert("Failed to update publish status.");
        }
    };

    const handleSavePublish = async () => {
        handleSave();
        handlePublish();
    };

    const handleCancel = () => {
        navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/Questions`);
    };

    if (!isNewQuestion && !existingQuestion) {
        return <div>Question not found.</div>;
    }

    return (
        <div id="wd-questions-editor" className="container mt-4">
                    {/* Question Type */}
                    <Form.Group className="mb-3">
                        <Form.Label>Question Type</Form.Label>
                        <FormSelect
                            value={formData.questionType}
                            onChange={(e) => handleInputChange("questionType", e.target.value)}
                            >
                            <option>Multiple Choice</option>
                            <option>True False</option>
                            <option>Fill in the Blank</option>
                        </FormSelect>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Question Group</Form.Label>
                        <FormSelect
                            value={formData.questionGroup}
                            onChange={(e) => handleInputChange("questionGroup", e.target.value)}
                            >
                            <option>Computer Science</option>
                            <option>Data Science</option>
                        </FormSelect>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="wd-question-name">
                        <Form.Label>Question Name</Form.Label>
                        <Form.Control
                        type="text"
                        value={formData.title || ""}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="wd-question-question">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={4}
                        value={formData.question || ""}
                        onChange={(e) => handleInputChange("question", e.target.value)}
                        />
                    </Form.Group>

                    {/* Points */}
                    <Form.Group className="mb-3">
                        <Form.Label>Points</Form.Label>
                        <Form.Control
                        type="number"
                        value={formData.points}
                        onChange={(e) => handleInputChange("points", Number(e.target.value))}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="wd-question-answer">
                        <Form.Label>Correct Answer</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={4}
                        value={formData.correctAnswer || ""}
                        onChange={(e) => handleInputChange("correctAnswer", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="wd-question-options">
                        <Form.Label>Options (comma separated)</Form.Label>
                            <Form.Control
                                type="text"
                                value={(formData.options ?? []).map(opt => opt.text).join(", ")}
                                onChange={(e) => {
                                const optionTexts = e.target.value.split(",").map(s => s.trim());
                                const parsedOptions = optionTexts.map(text => ({
                                    text,
                                    isCorrect: false, // Default to false
                                }));
                                handleInputChange("options", parsedOptions);
                                }}
                            />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="wd-question-published">
                        <Form.Check
                            type="checkbox"
                            label="Published"
                            checked={formData.published ?? false}
                            onChange={(e) => handleInputChange("published", e.target.checked)}
                        />
                    </Form.Group>

                    {/* Buttons */}
                    <hr />
                    <div className="float-end">
                        <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                        </Button>
                        <Button variant="danger" className="ms-2" onClick={handleSave}>
                        Save
                        </Button>
                        <Button variant="success" className="ms-2" onClick={handleSavePublish}>
                        Save and Publish
                        </Button>
                    </div>
        </div>
    );
}