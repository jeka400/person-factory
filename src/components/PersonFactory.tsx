import Infant  from './Infant';
import Child from './Child';
import Adult from './Adult';
import { IPerson } from './Person';

export class PersonFactory {
    getPerson(dateOfBirth: Date): IPerson {
      let dateNow = new Date();
      let currentMonth = dateNow.getMonth() + 1;
      let currentDate = dateNow.getDate();
  
      let date2YearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
      let date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);
  
      if(dateOfBirth >= date2YearsAgo) {
        let infant = new Infant(dateOfBirth);
        infant.print('Print from infant class');
        return infant;
        
      }
      if (dateOfBirth >= date18YearsAgo) {
        return new Child(dateOfBirth);
      } 
      let adult = new Adult(dateOfBirth);
      adult.callDelayedPromise();
      return adult;
    }
}