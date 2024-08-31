import { Person } from './Person';
import { PersonCategory } from './PersonCategory';

function methodDecorator(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalFunction = descriptor.value;

  if (typeof originalFunction === 'function') {
    descriptor.value = function (...args: any[]) {
      console.log(`Decorator function: override of ${methodName} called`);
      return originalFunction.apply(this, args);
    };
  }
}

class Infant extends Person {  
  constructor(dateOfBirth: Date) {
    super(dateOfBirth);
    
    this.Category = PersonCategory.Infant;
  }

  canSignContracts(): boolean {
    return false;
  }

  @methodDecorator 
  print(output: string) {
    console.log(output);
  }
}

export default Infant;