import { ApiProperty } from "@nestjs/swagger";
import { Teacher } from "src/teacher/entities/teacher.entity";

export class CreateGroupDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    count: number;

    @ApiProperty()
    teacherId: number; 
}