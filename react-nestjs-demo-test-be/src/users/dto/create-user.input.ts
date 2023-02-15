import { IsBoolean, IsString } from 'class-validator';

export class CreateUserInput {
  // @IsBoolean()
  // isManager: boolean;

  @IsString()
  name: string;
}
