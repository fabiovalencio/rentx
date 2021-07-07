/*
 * Interface of category
 *
 */

// Dependencies
import { v4 as uuidv4 } from "uuid";

// Initialize the class
class Category {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;

  // Constructor to create uuid
  constructor() {
    if (!this.id) {
      // Create a unique uuid
      this.id = uuidv4();
    }

    if (!this.created_at) {
      // Set the date
      this.created_at = new Date();
    }
  }
}

export { Category };
