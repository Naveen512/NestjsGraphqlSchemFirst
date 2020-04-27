import {Student} from '../graphql.schema';

export class StudentService {
        students:Student[]=[{
            _id:"abc1",
            FirstName: "Naveen",
            LastName: "Bommidi",
            Standard: 7,
            FatherName: "Gopala Krishna",
            MotherName: "Mallikasulamma"
        },{
            _id:"abc2",
            FirstName: "Ram",
            LastName: "KK",
            Standard: 7,
            FatherName: "Nageswar",
            MotherName: "laxmi"
        },{
            _id:"abc3",
            FirstName: "Priya",
            LastName: "L",
            Standard: 7,
            FatherName: "Rajendra",
            MotherName: "Thulasi"
        }];

    getAllStudents():Student[]{
        return this.students;
    }

    getStudentById(id:string):Student{
        var filteredStudent = this.students.filter(_ => _._id === id)[0];
        return filteredStudent;
    }

    createStudent(newStudent:any):Student{
        this.students.push(newStudent);
        return newStudent;
    }
}
