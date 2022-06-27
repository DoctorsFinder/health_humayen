import {Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity, JoinColumn} from "typeorm";

@Entity('user')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    blood_group: string

    @Column()
    gender: string

    @Column({
        type:"date"
    })
    date_of_birth: string

    @Column()
    address: string

    @Column({
        unique: true,
    })
    contact_number: string

    @Column({
        unique: true,
        nullable: true
    })
    email: string

    @Column({
        unique: true,
    })
    emergency_contact_number: string

    @Column("simple-json")
    official_id:{
        type: string,
        number: string
    }

}