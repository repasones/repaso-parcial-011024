import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});


export class NursingAPI {
    //examiners
    //mental-state-exams

    getAllExaminers() {
        return http.get("examiners")
    }

    getAllExams() {
        return http.get("mental-state-exams")
    }

    getAllExamsByIdExaminer(id) {
        return http.get(`mental-state-exams?examinerId=${id}`);
    }
}