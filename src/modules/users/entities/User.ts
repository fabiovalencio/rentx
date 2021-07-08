/*
 * Entitie of User
 *
 */

// Dependencies
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_license: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at?: Date;

  // Constructor check id
  constructor() {
    if (!this.id) {
      // Create a unique uuid
      this.id = uuidv4();
    }
  }
}

export { User };
