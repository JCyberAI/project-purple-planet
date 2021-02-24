require('dotenv').config();
const path = require('path');
const Importer = require('mysql-import');
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
let importer = new Importer({host, user, password});

importer.onProgress(progress=>{
  let percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer.import(path.join(__dirname, 'create_db.sql')).then(() => {
  let files_imported = importer.getImported(); 
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err => {
  console.log(err);
});