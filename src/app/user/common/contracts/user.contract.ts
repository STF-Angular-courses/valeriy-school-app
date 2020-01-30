import {LessonModel} from "../../../common/models/lesson.model";

export default abstract class UserContract {
  abstract getLessons(type:string): LessonModel[];
  abstract getFacult(type: string): LessonModel[];
  abstract addLesson(type: string): void;
}
