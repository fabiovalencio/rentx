/*
 * Entity of category
 *
 */

// Dependencies
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at?: Date;

  // Constructor to create uuid
  constructor() {
    if (!this.id) {
      // Create a unique uuid
      this.id = uuidv4();
    }
  }
}

export { Category };
