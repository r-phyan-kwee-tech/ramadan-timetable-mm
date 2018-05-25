import Dexie from 'dexie';

const db = new Dexie('db_ramadan');
db
  .version(1)
  .stores({
    days: 'objectId,countryId,stateId'
  }, {
    states: 'objectId,countryId'
  }, {country: 'objectId'});

export default db;
