
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface StudentInput {
    _id?: string;
    FirstName?: string;
    LastName?: string;
    Standard?: number;
    FatherName?: string;
    MotherName?: string;
}

export interface Student {
    _id?: string;
    FirstName?: string;
    LastName?: string;
    Standard?: number;
    FatherName?: string;
    MotherName?: string;
}

export interface IQuery {
    getAllStudents(): Student[] | Promise<Student[]>;
    getStudentById(id?: string): Student | Promise<Student>;
}

export interface IMutation {
    create(student?: StudentInput): Student | Promise<Student>;
}
