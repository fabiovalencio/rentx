/*
 * Interface of Specification
 *
 */

// Dependencies
import { v4 as uuidv4 } from "uuid";

// Initialize the class
class Specification {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;

  // Constructor chcek id and created_at
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

export { Specification };
