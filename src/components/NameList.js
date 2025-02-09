import React from 'react'
import Person from './Person';

function NameList() {
    const persons = [
  { id: 1, name: 'Bruce', age: 35, skill: 'Martial Arts' },
  { id: 2, name: 'Clark', age: 33, skill: 'Super Strength' },
  { id: 3, name: 'Diana', age: 30, skill: 'Combat' }
];
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList