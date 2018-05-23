import idb from 'idb';

export default async function initDB() {
  // prefixes of implementation that we want to test window.indexedDB =
  // window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB ||
  // window.msIndexedDB; prefixes of window.IDB objects
  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.")
  }

  let db;

  db = await idb.open("db_ramadan", 1, upgradeDB => {
    upgradeDB.createObjectStore('countries', {keyPath: 'objectId'});
    upgradeDB.createObjectStore('states', {keyPath: 'objectId'});
    upgradeDB.createObjectStore('days', {keyPath: 'objectId'});
  })

  // request.onsuccess = event => {   db = request.result;   console.log(`success:
  // ${db}`); } request.onerror = event => {   console.log("UnExpected Error
  // occurs while connecting to db") } request.onupgradeneeded = (event) => {
  // const db = event.target.result;   db.createObjectStore('countries', {keyPath:
  // 'objectId'});   db.createObjectStore('states', {keyPath: 'objectId'});
  // db.createObjectStore('days', {keyPath: 'objectId'}); }

  return db

}

export async function saveBulk(arrDays, objectName) {
  let objStores = {
    "days": "days",
    "states": "states",
    "countries": "countries"
  }
  let db = await idb.open("db_ramadan", 1)

  let tx = db.transaction(objStores[objectName], 'readwrite')
  let store = tx.objectStore(objStores[objectName])
  await arrDays.map((item) => {
    store.put(item)
  })
  await tx.complete
  db.close()

}
