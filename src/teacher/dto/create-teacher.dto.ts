import { ApiProperty } from "@nestjs/swagger"

export class CreateTeacherDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    surname: string
    @ApiProperty()
    email: string
    @ApiProperty()
    age: number
}
