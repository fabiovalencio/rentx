/*
 * Interface of Specification
 *
 */

// Dependencies
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("specifications")
class Specification {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at?: Date;

  // Constructor chcek id and created_at
  constructor() {
    if (!this.id) {
      // Create a unique uuid
      this.id = uuidv4();
    }
  }
}

export { Specification };
