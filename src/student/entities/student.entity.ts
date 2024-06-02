import { Group } from "src/group/entities/group.entity";
import { Raiting } from "src/raiting/entities/raiting.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Group, group => group.students)
    group: Group;

    @ManyToOne(() => Raiting, raiting => raiting.student)
    ratings: Raiting[];
}
