import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../error/appEror';
import httpStatus from 'http-status';
import { User } from '../users/user.model';
import { TStudent } from './student.interfach';
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchAbleFields } from './student.constant';

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  //   const queryObj={...query}

  // let searchTerm=''

  // if(query?.searchTerm){
  //   searchTerm=query?.searchTerm as string
  // }

  // const searchQuery=Student.find({
  //   $or:['email','presentAddress','name.firstname','name.middname'].map((field)=>({
  //     [field]:{$regex:searchTerm,$options:'i'}
  //   }))
  // })

  // const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
  // excludeFields.forEach((el) => delete queryObj[el]);

  // // const resualt = await searchQuery.find(queryObj)

  //   const filterQuery =  searchQuery.find(queryObj)
  //     // .populate('admissionSemester')
  //     // .populate('user')
  //     // .populate({
  //     //   path: 'academicDepartment',
  //     //   populate: { path: 'academicFaculty' },
  //     // });

  // let sort = '-createdAt'
  // if(query.sort){
  //   sort=query.sort as string
  // }
  // console.log(query,queryObj);
  // const sortQury= filterQuery.sort(sort)

  // // let page=1
  // let limit=1
  // let skip=0

  // if(query.limit){
  //   // limit=query.limit as number
  //   limit=Number(query.limit)
  // }
  //   if(query.page){
  //     page=Number(query.page)
  //     skip=(page-1)*limit
  //   }
  // const paginateQuery=sortQury.skip(skip)
  //   const limitQuery= paginateQuery.limit(limit)

  // let fields='-__v'

  // if(query.fields){
  //   fields=(query.fields as string).split(',').join(' ')
  //   console.log(fields);

  //   }
  // const fieldQuery=await limitQuery.select(fields)

  //   return fieldQuery;

  const studentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate('user')
      .populate({
        path: 'academicDepartment',
        populate: { path: 'academicFaculty' },
      }),
    query,
  )
    .search(studentSearchAbleFields)
    .filter()
    .sort()
    .apginet()
    .fields();
  const resualt = await studentQuery.modelQuery;
  return resualt;
};

const getSingleStudentFromDB = async (id: string) => {
  const resualt = await Student.findById(id)
    .populate('admissionSemester')
    .populate('user')
    .populate({
      path: 'academicDepartment',
      populate: { path: 'academicFaculty' },
    });
  return resualt;
};

const deletedSingleStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const deletedStudent = await Student.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }
    // const userId = deletedStudent.user;
    const deleteUser = await User.findByIdAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete User');
    }

    await session.commitTransaction();
    await session.endSession();

    return { deletedStudent, deleteUser };
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(`Faild to deleted Student and user, Because:${error}`);
  }
};

const updathStudentFromDB = async (id: string, paylods: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = paylods;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  //git hub link : https://github.com/Apollo-Level2-Web-Dev/Level2-Batch-3-PH-university-server/blob/part-3/src/app/modules/student/student.service.ts

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
    if (localGuardian && Object.keys(localGuardian).length) {
      for (const [key, value] of Object.entries(localGuardian)) {
        modifiedUpdatedData[`localGuardian.${key}`] = value;
      }
    }

    const resualt = await Student.findOneAndUpdate(
      { id },
      modifiedUpdatedData,
      {
        new: true,
        runValidators: true,
      },
    );
    return resualt;
  }
};

export const StudentServises = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deletedSingleStudentFromDB,
  updathStudentFromDB,
};
