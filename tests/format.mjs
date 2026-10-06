import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const ignored=new Set(['.git','node_modules']);
const sourceRoots=['src','tests'];
const sourceFiles=[];

function walk(directory){
  for(const name of fs.readdirSync(directory)){
    if(ignored.has(name))continue;
    const full=path.join(directory,name);
    const stat=fs.statSync(full);
    if(stat.isDirectory())walk(full);
    else if(/\.(js|mjs|css|html)$/.test(name))sourceFiles.push(full);
  }
}

for(const rootName of sourceRoots){
  const full=path.join(root,rootName);
  if(fs.existsSync(full))walk(full);
}

assert.ok(sourceFiles.length>0,'format test should find source files');

let tabCount=0;
let trailingWhitespaceCount=0;
let obviousPlaceholderCount=0;

for(const file of sourceFiles){
  const content=fs.readFileSync(file,'utf8');
  tabCount+=(content.match(/\t/g)||[]).length;
  trailingWhitespaceCount+=(content.match(/[ \t]+$/gm)||[]).length;
  obviousPlaceholderCount+=(content.match(/TODO:|FIXME:|lorem ipsum/gi)||[]).length;
}

assert.equal(tabCount,0,'source should use spaces rather than tabs');
assert.equal(trailingWhitespaceCount,0,'source should not contain trailing whitespace');
assert.equal(obviousPlaceholderCount,0,'source should not contain obvious unfinished placeholders');

console.log('FORMAT TEST PASS — '+sourceFiles.length+' source files scanned');
