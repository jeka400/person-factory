import { Person } from './Person';
import { PersonCategory } from './PersonCategory';

function classConstructorDecorator(constructor: Function) {
  console.log(`constructor.Category: ${(<any>constructor).name}`);
  constructor.prototype.testProperty = "18+";
}

@classConstructorDecorator
class Adult extends Person {
    constructor(dateOfBirth: Date) {
      super(dateOfBirth);
      
      this.Category = PersonCategory.Adult;
    }

    canSignContracts(): boolean {
      return true;
    }

    delayedPromise(): Promise<string> {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("Promise resolved with a message after 2 seconds");
        }, 2000);
      });
    }

    async callDelayedPromise() {
      console.log(`Calling await dalayed`);

      try {
        await this.delayedPromise();
      } catch (error) {
        console.log(`Error returned: ${error}`);
      }

      console.log(`After await delayed`);
    }
  }

export default Adult;