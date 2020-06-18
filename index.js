console.log('npm install ' + 
  Object.entries(
    JSON.parse(require('fs').readFileSync(0, 'utf8'))
  .dependencies).map(x => x[1].version ? `${x[0]}@${x[1].version}` : '').join(' ') + ' --save-exact'
);
