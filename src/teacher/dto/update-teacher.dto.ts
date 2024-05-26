import { ApiProperty } from "@nestjs/swagger"


export class UpdateTeacherDto{
    @ApiProperty()
    name: string
    @ApiProperty()
    surname: string
    @ApiProperty()
    email: string
    @ApiProperty()
    age: number
}
