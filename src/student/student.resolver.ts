import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student, StudentInput } from '../graphql.schema';


@Resolver('Student')
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query()
  getAllStudents(): Student[] {
    return this.studentService.getAllStudents();
  }

  @Query()
  getStudentById(@Args('id') id: string):Student{
      return this.studentService.getStudentById(id);
  }

  @Mutation()
  create(@Args('student')student:StudentInput):Student{
    return this.studentService.createStudent(student);
  }
}
