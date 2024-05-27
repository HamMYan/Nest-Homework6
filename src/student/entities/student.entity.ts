import { Group } from "src/group/entities/group.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    password: string;

    @Column()
    rating: number;

    @ManyToOne(() => Group, group => group.students)
    group: Group;
}
