import { PersonCategory } from "./PersonCategory";
import { PersonListView } from "./PersonListView";

export interface IPerson {
    Category: PersonCategory;
    canSignContracts(): boolean;
    printDetails(): any;
}
function personDecorator(hello: string) {
  return function(constructor: Function) {
    console.log(`decorator 2: ${hello}, constructor: ${(constructor as any).name}`);
  }
}

@personDecorator('hello')
export abstract class Person implements IPerson {
    Category: PersonCategory = PersonCategory.Adult;
    private dateOfBirth: Date;
  
    constructor(dateOfBirth: Date) {
      this.dateOfBirth = dateOfBirth;
    }
  
    abstract canSignContracts(): boolean;

    printDetails(): any {
      return (
        <PersonListView />
      )
    }
}