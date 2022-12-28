import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user_roles.model";

interface RoleCreationAttrs {
    value: string;
    descriptipn: string;
}

@Table({tableName:'roles'})
export class Role extends Model <Role, RoleCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique Role ID'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ApiProperty({example: 'DB_ADMIN', description: 'Unique Role Name'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;
    
    @ApiProperty({example: 'Database Administrator', description: 'Role Description'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
    
}