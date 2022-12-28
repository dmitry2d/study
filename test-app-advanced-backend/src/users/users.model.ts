import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user_roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName:'users'})
export class User extends Model <User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique User ID'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ApiProperty({example: 'user@email.com', description: 'Unique User Email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    
    @ApiProperty({example: '12345678', description: 'User Password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    
    @ApiPropertyOptional ({example: 'true', description: 'Banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    
    @ApiPropertyOptional ({example: 'Did not pass to Mordor', description: 'Ban Reason'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany (() => Role, () => UserRoles)
    roles: Role[];

}