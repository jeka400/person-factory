import { Person } from './Person';
import { PersonCategory } from './PersonCategory';

function propertyDecorator(target: any, propertyKey: string) {
  console.log(`1. target: ${target}`);

  console.log(`2. target constructor: ${target.constructor}`);

  if(typeof(target) === 'function') { 
    console.log(`3. class name: ${target.name}`);
  } else {
    console.log(`3. class name: ${target.constructor.name}`);
  }
  console.log(`4. property key: ${propertyKey}`);
}

class Child extends Person {
  @propertyDecorator Category: PersonCategory;

  constructor(dateOfBirth: Date) {
    super(dateOfBirth);
    
    this.Category = PersonCategory.Child;
  }

  canSignContracts(): boolean {
    return false;
  }
}

export default Child;