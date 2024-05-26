import { Group } from "src/group/entities/group.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    surname: string
    @Column()
    email: string
    @Column()
    age: number

    @OneToMany(type => Group, group => group.teacher)
    group: Group[]
}
