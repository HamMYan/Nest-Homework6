import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupDto {
    @ApiProperty()
    name: string    
    @ApiProperty()
    count: number
    @ApiProperty()
    teacherId: number
}
