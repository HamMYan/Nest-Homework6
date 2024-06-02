import { Student } from "src/student/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Raiting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userRating: number;

    @ManyToOne(() => Student, student => student.ratings)
    student: number;
}
