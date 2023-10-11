const YAML = require('yaml')
const fs = require('fs');
fs.readdirSync('./examples').filter(v=>v.endsWith('.yaml')).forEach(v=>{
    console.log(v);
    yaml = fs.readFileSync(`./examples/${v}`, {encoding: 'utf8'});
    y = YAML.parse(yaml)
    fs.writeFileSync(`./examples/${v.replace('.yaml', '.json')}`, JSON.stringify(y));
    console.log('done', v)
})