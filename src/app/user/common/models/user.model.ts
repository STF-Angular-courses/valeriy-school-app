import {UserTypeEnum} from "./user-type.enum";
import {LessonModel} from "../../../common/models/lesson.model";

export interface UserModel {
  category: UserTypeEnum;
  name: string;
  lessonList: LessonModel[];
  facultativeList: LessonModel[];
}
