import { useState, useEffect } from 'react';
import { IPerson } from './Person';
import { PersonCategory } from './PersonCategory';
import { PersonFactory } from './PersonFactory';
import { PersonItemView } from './PersonItemView';

declare var CONTACT_DATA: { Name: string; Birthday: string}[];

export const PersonListView = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);

  useEffect(() => {
    const factory = new PersonFactory();

    const personList: IPerson[] = CONTACT_DATA.map((contact) => {
      const person = factory.getPerson(new Date(contact.Birthday));
      (person as any).name = contact.Name;
      return person;
    })

    setPersons(personList);
  }, []);

  return (
    <div id="main" className="main-content-panel">
      <div className="row">
        <div className="col-sm-1">

          <button className="btn button-no-borders" >
            <span id="show-hide-side-button" className="fa "></span>
          </button>

        </div>
        
        <ol className="list-group">
          {persons.map((person, index) => (
            <li key={index} className="list-group-item">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <PersonItemView personName={(person as any).name} />
                  </h5>
                  <p className="card-text">
                    <strong>Date of Birth:</strong> {(person as any).dateOfBirth.toDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {PersonCategory[person.Category]}
                  </p>
                  <p className="card-text">
                    <strong>Can Sign Contracts:</strong> {person.canSignContracts() ? 'Yes' : 'No'}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  
  );
};
