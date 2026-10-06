import assert from 'node:assert/strict';
import { TOWERS, HEROES, MAPS, DIFFICULTIES, MODES } from '../src/data.js';
import { ROUND_CATALOG } from '../src/round-catalog.js';
import { ROUND_CATALOG_EXTENDED } from '../src/round-catalog-extended.js';

const contracts=[];
function contract(name,test){contracts.push([name,test]);}

contract('upgrade content dart path 0 tier 1',()=>{
  const upgrade=TOWERS['dart'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 0 tier 2',()=>{
  const upgrade=TOWERS['dart'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 0 tier 3',()=>{
  const upgrade=TOWERS['dart'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 0 tier 4',()=>{
  const upgrade=TOWERS['dart'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 0 tier 5',()=>{
  const upgrade=TOWERS['dart'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 1 tier 1',()=>{
  const upgrade=TOWERS['dart'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 1 tier 2',()=>{
  const upgrade=TOWERS['dart'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 1 tier 3',()=>{
  const upgrade=TOWERS['dart'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 1 tier 4',()=>{
  const upgrade=TOWERS['dart'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 1 tier 5',()=>{
  const upgrade=TOWERS['dart'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 2 tier 1',()=>{
  const upgrade=TOWERS['dart'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 2 tier 2',()=>{
  const upgrade=TOWERS['dart'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 2 tier 3',()=>{
  const upgrade=TOWERS['dart'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 2 tier 4',()=>{
  const upgrade=TOWERS['dart'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content dart path 2 tier 5',()=>{
  const upgrade=TOWERS['dart'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower dart path count',()=>{assert.equal(TOWERS['dart'].paths.length,3);});
contract('tower dart tier count',()=>{assert.ok(TOWERS['dart'].paths.every(path=>path.length===5));});
contract('upgrade content boomer path 0 tier 1',()=>{
  const upgrade=TOWERS['boomer'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 0 tier 2',()=>{
  const upgrade=TOWERS['boomer'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 0 tier 3',()=>{
  const upgrade=TOWERS['boomer'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 0 tier 4',()=>{
  const upgrade=TOWERS['boomer'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 0 tier 5',()=>{
  const upgrade=TOWERS['boomer'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 1 tier 1',()=>{
  const upgrade=TOWERS['boomer'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 1 tier 2',()=>{
  const upgrade=TOWERS['boomer'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 1 tier 3',()=>{
  const upgrade=TOWERS['boomer'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 1 tier 4',()=>{
  const upgrade=TOWERS['boomer'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 1 tier 5',()=>{
  const upgrade=TOWERS['boomer'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 2 tier 1',()=>{
  const upgrade=TOWERS['boomer'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 2 tier 2',()=>{
  const upgrade=TOWERS['boomer'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 2 tier 3',()=>{
  const upgrade=TOWERS['boomer'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 2 tier 4',()=>{
  const upgrade=TOWERS['boomer'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content boomer path 2 tier 5',()=>{
  const upgrade=TOWERS['boomer'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower boomer path count',()=>{assert.equal(TOWERS['boomer'].paths.length,3);});
contract('tower boomer tier count',()=>{assert.ok(TOWERS['boomer'].paths.every(path=>path.length===5));});
contract('upgrade content bomb path 0 tier 1',()=>{
  const upgrade=TOWERS['bomb'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 0 tier 2',()=>{
  const upgrade=TOWERS['bomb'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 0 tier 3',()=>{
  const upgrade=TOWERS['bomb'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 0 tier 4',()=>{
  const upgrade=TOWERS['bomb'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 0 tier 5',()=>{
  const upgrade=TOWERS['bomb'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 1 tier 1',()=>{
  const upgrade=TOWERS['bomb'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 1 tier 2',()=>{
  const upgrade=TOWERS['bomb'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 1 tier 3',()=>{
  const upgrade=TOWERS['bomb'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 1 tier 4',()=>{
  const upgrade=TOWERS['bomb'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 1 tier 5',()=>{
  const upgrade=TOWERS['bomb'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 2 tier 1',()=>{
  const upgrade=TOWERS['bomb'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 2 tier 2',()=>{
  const upgrade=TOWERS['bomb'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 2 tier 3',()=>{
  const upgrade=TOWERS['bomb'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 2 tier 4',()=>{
  const upgrade=TOWERS['bomb'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content bomb path 2 tier 5',()=>{
  const upgrade=TOWERS['bomb'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower bomb path count',()=>{assert.equal(TOWERS['bomb'].paths.length,3);});
contract('tower bomb tier count',()=>{assert.ok(TOWERS['bomb'].paths.every(path=>path.length===5));});
contract('upgrade content sniper path 0 tier 1',()=>{
  const upgrade=TOWERS['sniper'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 0 tier 2',()=>{
  const upgrade=TOWERS['sniper'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 0 tier 3',()=>{
  const upgrade=TOWERS['sniper'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 0 tier 4',()=>{
  const upgrade=TOWERS['sniper'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 0 tier 5',()=>{
  const upgrade=TOWERS['sniper'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 1 tier 1',()=>{
  const upgrade=TOWERS['sniper'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 1 tier 2',()=>{
  const upgrade=TOWERS['sniper'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 1 tier 3',()=>{
  const upgrade=TOWERS['sniper'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 1 tier 4',()=>{
  const upgrade=TOWERS['sniper'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 1 tier 5',()=>{
  const upgrade=TOWERS['sniper'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 2 tier 1',()=>{
  const upgrade=TOWERS['sniper'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 2 tier 2',()=>{
  const upgrade=TOWERS['sniper'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 2 tier 3',()=>{
  const upgrade=TOWERS['sniper'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 2 tier 4',()=>{
  const upgrade=TOWERS['sniper'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sniper path 2 tier 5',()=>{
  const upgrade=TOWERS['sniper'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower sniper path count',()=>{assert.equal(TOWERS['sniper'].paths.length,3);});
contract('tower sniper tier count',()=>{assert.ok(TOWERS['sniper'].paths.every(path=>path.length===5));});
contract('upgrade content sub path 0 tier 1',()=>{
  const upgrade=TOWERS['sub'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 0 tier 2',()=>{
  const upgrade=TOWERS['sub'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 0 tier 3',()=>{
  const upgrade=TOWERS['sub'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 0 tier 4',()=>{
  const upgrade=TOWERS['sub'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 0 tier 5',()=>{
  const upgrade=TOWERS['sub'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 1 tier 1',()=>{
  const upgrade=TOWERS['sub'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 1 tier 2',()=>{
  const upgrade=TOWERS['sub'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 1 tier 3',()=>{
  const upgrade=TOWERS['sub'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 1 tier 4',()=>{
  const upgrade=TOWERS['sub'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 1 tier 5',()=>{
  const upgrade=TOWERS['sub'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 2 tier 1',()=>{
  const upgrade=TOWERS['sub'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 2 tier 2',()=>{
  const upgrade=TOWERS['sub'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 2 tier 3',()=>{
  const upgrade=TOWERS['sub'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 2 tier 4',()=>{
  const upgrade=TOWERS['sub'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content sub path 2 tier 5',()=>{
  const upgrade=TOWERS['sub'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower sub path count',()=>{assert.equal(TOWERS['sub'].paths.length,3);});
contract('tower sub tier count',()=>{assert.ok(TOWERS['sub'].paths.every(path=>path.length===5));});
contract('upgrade content ace path 0 tier 1',()=>{
  const upgrade=TOWERS['ace'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 0 tier 2',()=>{
  const upgrade=TOWERS['ace'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 0 tier 3',()=>{
  const upgrade=TOWERS['ace'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 0 tier 4',()=>{
  const upgrade=TOWERS['ace'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 0 tier 5',()=>{
  const upgrade=TOWERS['ace'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 1 tier 1',()=>{
  const upgrade=TOWERS['ace'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 1 tier 2',()=>{
  const upgrade=TOWERS['ace'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 1 tier 3',()=>{
  const upgrade=TOWERS['ace'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 1 tier 4',()=>{
  const upgrade=TOWERS['ace'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 1 tier 5',()=>{
  const upgrade=TOWERS['ace'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 2 tier 1',()=>{
  const upgrade=TOWERS['ace'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 2 tier 2',()=>{
  const upgrade=TOWERS['ace'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 2 tier 3',()=>{
  const upgrade=TOWERS['ace'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 2 tier 4',()=>{
  const upgrade=TOWERS['ace'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ace path 2 tier 5',()=>{
  const upgrade=TOWERS['ace'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower ace path count',()=>{assert.equal(TOWERS['ace'].paths.length,3);});
contract('tower ace tier count',()=>{assert.ok(TOWERS['ace'].paths.every(path=>path.length===5));});
contract('upgrade content wizard path 0 tier 1',()=>{
  const upgrade=TOWERS['wizard'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 0 tier 2',()=>{
  const upgrade=TOWERS['wizard'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 0 tier 3',()=>{
  const upgrade=TOWERS['wizard'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 0 tier 4',()=>{
  const upgrade=TOWERS['wizard'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 0 tier 5',()=>{
  const upgrade=TOWERS['wizard'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 1 tier 1',()=>{
  const upgrade=TOWERS['wizard'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 1 tier 2',()=>{
  const upgrade=TOWERS['wizard'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 1 tier 3',()=>{
  const upgrade=TOWERS['wizard'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 1 tier 4',()=>{
  const upgrade=TOWERS['wizard'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 1 tier 5',()=>{
  const upgrade=TOWERS['wizard'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 2 tier 1',()=>{
  const upgrade=TOWERS['wizard'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 2 tier 2',()=>{
  const upgrade=TOWERS['wizard'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 2 tier 3',()=>{
  const upgrade=TOWERS['wizard'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 2 tier 4',()=>{
  const upgrade=TOWERS['wizard'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content wizard path 2 tier 5',()=>{
  const upgrade=TOWERS['wizard'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower wizard path count',()=>{assert.equal(TOWERS['wizard'].paths.length,3);});
contract('tower wizard tier count',()=>{assert.ok(TOWERS['wizard'].paths.every(path=>path.length===5));});
contract('upgrade content druid path 0 tier 1',()=>{
  const upgrade=TOWERS['druid'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 0 tier 2',()=>{
  const upgrade=TOWERS['druid'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 0 tier 3',()=>{
  const upgrade=TOWERS['druid'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 0 tier 4',()=>{
  const upgrade=TOWERS['druid'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 0 tier 5',()=>{
  const upgrade=TOWERS['druid'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 1 tier 1',()=>{
  const upgrade=TOWERS['druid'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 1 tier 2',()=>{
  const upgrade=TOWERS['druid'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 1 tier 3',()=>{
  const upgrade=TOWERS['druid'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 1 tier 4',()=>{
  const upgrade=TOWERS['druid'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 1 tier 5',()=>{
  const upgrade=TOWERS['druid'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 2 tier 1',()=>{
  const upgrade=TOWERS['druid'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 2 tier 2',()=>{
  const upgrade=TOWERS['druid'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 2 tier 3',()=>{
  const upgrade=TOWERS['druid'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 2 tier 4',()=>{
  const upgrade=TOWERS['druid'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content druid path 2 tier 5',()=>{
  const upgrade=TOWERS['druid'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower druid path count',()=>{assert.equal(TOWERS['druid'].paths.length,3);});
contract('tower druid tier count',()=>{assert.ok(TOWERS['druid'].paths.every(path=>path.length===5));});
contract('upgrade content alchemist path 0 tier 1',()=>{
  const upgrade=TOWERS['alchemist'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 0 tier 2',()=>{
  const upgrade=TOWERS['alchemist'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 0 tier 3',()=>{
  const upgrade=TOWERS['alchemist'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 0 tier 4',()=>{
  const upgrade=TOWERS['alchemist'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 0 tier 5',()=>{
  const upgrade=TOWERS['alchemist'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 1 tier 1',()=>{
  const upgrade=TOWERS['alchemist'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 1 tier 2',()=>{
  const upgrade=TOWERS['alchemist'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 1 tier 3',()=>{
  const upgrade=TOWERS['alchemist'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 1 tier 4',()=>{
  const upgrade=TOWERS['alchemist'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 1 tier 5',()=>{
  const upgrade=TOWERS['alchemist'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 2 tier 1',()=>{
  const upgrade=TOWERS['alchemist'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 2 tier 2',()=>{
  const upgrade=TOWERS['alchemist'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 2 tier 3',()=>{
  const upgrade=TOWERS['alchemist'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 2 tier 4',()=>{
  const upgrade=TOWERS['alchemist'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content alchemist path 2 tier 5',()=>{
  const upgrade=TOWERS['alchemist'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower alchemist path count',()=>{assert.equal(TOWERS['alchemist'].paths.length,3);});
contract('tower alchemist tier count',()=>{assert.ok(TOWERS['alchemist'].paths.every(path=>path.length===5));});
contract('upgrade content village path 0 tier 1',()=>{
  const upgrade=TOWERS['village'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 0 tier 2',()=>{
  const upgrade=TOWERS['village'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 0 tier 3',()=>{
  const upgrade=TOWERS['village'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 0 tier 4',()=>{
  const upgrade=TOWERS['village'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 0 tier 5',()=>{
  const upgrade=TOWERS['village'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 1 tier 1',()=>{
  const upgrade=TOWERS['village'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 1 tier 2',()=>{
  const upgrade=TOWERS['village'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 1 tier 3',()=>{
  const upgrade=TOWERS['village'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 1 tier 4',()=>{
  const upgrade=TOWERS['village'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 1 tier 5',()=>{
  const upgrade=TOWERS['village'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 2 tier 1',()=>{
  const upgrade=TOWERS['village'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 2 tier 2',()=>{
  const upgrade=TOWERS['village'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 2 tier 3',()=>{
  const upgrade=TOWERS['village'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 2 tier 4',()=>{
  const upgrade=TOWERS['village'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content village path 2 tier 5',()=>{
  const upgrade=TOWERS['village'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower village path count',()=>{assert.equal(TOWERS['village'].paths.length,3);});
contract('tower village tier count',()=>{assert.ok(TOWERS['village'].paths.every(path=>path.length===5));});
contract('upgrade content farm path 0 tier 1',()=>{
  const upgrade=TOWERS['farm'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 0 tier 2',()=>{
  const upgrade=TOWERS['farm'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 0 tier 3',()=>{
  const upgrade=TOWERS['farm'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 0 tier 4',()=>{
  const upgrade=TOWERS['farm'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 0 tier 5',()=>{
  const upgrade=TOWERS['farm'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 1 tier 1',()=>{
  const upgrade=TOWERS['farm'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 1 tier 2',()=>{
  const upgrade=TOWERS['farm'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 1 tier 3',()=>{
  const upgrade=TOWERS['farm'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 1 tier 4',()=>{
  const upgrade=TOWERS['farm'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 1 tier 5',()=>{
  const upgrade=TOWERS['farm'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 2 tier 1',()=>{
  const upgrade=TOWERS['farm'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 2 tier 2',()=>{
  const upgrade=TOWERS['farm'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 2 tier 3',()=>{
  const upgrade=TOWERS['farm'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 2 tier 4',()=>{
  const upgrade=TOWERS['farm'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content farm path 2 tier 5',()=>{
  const upgrade=TOWERS['farm'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower farm path count',()=>{assert.equal(TOWERS['farm'].paths.length,3);});
contract('tower farm tier count',()=>{assert.ok(TOWERS['farm'].paths.every(path=>path.length===5));});
contract('upgrade content spike path 0 tier 1',()=>{
  const upgrade=TOWERS['spike'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 0 tier 2',()=>{
  const upgrade=TOWERS['spike'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 0 tier 3',()=>{
  const upgrade=TOWERS['spike'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 0 tier 4',()=>{
  const upgrade=TOWERS['spike'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 0 tier 5',()=>{
  const upgrade=TOWERS['spike'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 1 tier 1',()=>{
  const upgrade=TOWERS['spike'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 1 tier 2',()=>{
  const upgrade=TOWERS['spike'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 1 tier 3',()=>{
  const upgrade=TOWERS['spike'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 1 tier 4',()=>{
  const upgrade=TOWERS['spike'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 1 tier 5',()=>{
  const upgrade=TOWERS['spike'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 2 tier 1',()=>{
  const upgrade=TOWERS['spike'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 2 tier 2',()=>{
  const upgrade=TOWERS['spike'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 2 tier 3',()=>{
  const upgrade=TOWERS['spike'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 2 tier 4',()=>{
  const upgrade=TOWERS['spike'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content spike path 2 tier 5',()=>{
  const upgrade=TOWERS['spike'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower spike path count',()=>{assert.equal(TOWERS['spike'].paths.length,3);});
contract('tower spike tier count',()=>{assert.ok(TOWERS['spike'].paths.every(path=>path.length===5));});
contract('upgrade content glue path 0 tier 1',()=>{
  const upgrade=TOWERS['glue'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 0 tier 2',()=>{
  const upgrade=TOWERS['glue'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 0 tier 3',()=>{
  const upgrade=TOWERS['glue'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 0 tier 4',()=>{
  const upgrade=TOWERS['glue'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 0 tier 5',()=>{
  const upgrade=TOWERS['glue'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 1 tier 1',()=>{
  const upgrade=TOWERS['glue'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 1 tier 2',()=>{
  const upgrade=TOWERS['glue'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 1 tier 3',()=>{
  const upgrade=TOWERS['glue'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 1 tier 4',()=>{
  const upgrade=TOWERS['glue'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 1 tier 5',()=>{
  const upgrade=TOWERS['glue'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 2 tier 1',()=>{
  const upgrade=TOWERS['glue'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 2 tier 2',()=>{
  const upgrade=TOWERS['glue'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 2 tier 3',()=>{
  const upgrade=TOWERS['glue'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 2 tier 4',()=>{
  const upgrade=TOWERS['glue'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content glue path 2 tier 5',()=>{
  const upgrade=TOWERS['glue'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower glue path count',()=>{assert.equal(TOWERS['glue'].paths.length,3);});
contract('tower glue tier count',()=>{assert.ok(TOWERS['glue'].paths.every(path=>path.length===5));});
contract('upgrade content tack path 0 tier 1',()=>{
  const upgrade=TOWERS['tack'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 0 tier 2',()=>{
  const upgrade=TOWERS['tack'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 0 tier 3',()=>{
  const upgrade=TOWERS['tack'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 0 tier 4',()=>{
  const upgrade=TOWERS['tack'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 0 tier 5',()=>{
  const upgrade=TOWERS['tack'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 1 tier 1',()=>{
  const upgrade=TOWERS['tack'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 1 tier 2',()=>{
  const upgrade=TOWERS['tack'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 1 tier 3',()=>{
  const upgrade=TOWERS['tack'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 1 tier 4',()=>{
  const upgrade=TOWERS['tack'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 1 tier 5',()=>{
  const upgrade=TOWERS['tack'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 2 tier 1',()=>{
  const upgrade=TOWERS['tack'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 2 tier 2',()=>{
  const upgrade=TOWERS['tack'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 2 tier 3',()=>{
  const upgrade=TOWERS['tack'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 2 tier 4',()=>{
  const upgrade=TOWERS['tack'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tack path 2 tier 5',()=>{
  const upgrade=TOWERS['tack'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower tack path count',()=>{assert.equal(TOWERS['tack'].paths.length,3);});
contract('tower tack tier count',()=>{assert.ok(TOWERS['tack'].paths.every(path=>path.length===5));});
contract('upgrade content ice path 0 tier 1',()=>{
  const upgrade=TOWERS['ice'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 0 tier 2',()=>{
  const upgrade=TOWERS['ice'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 0 tier 3',()=>{
  const upgrade=TOWERS['ice'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 0 tier 4',()=>{
  const upgrade=TOWERS['ice'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 0 tier 5',()=>{
  const upgrade=TOWERS['ice'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 1 tier 1',()=>{
  const upgrade=TOWERS['ice'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 1 tier 2',()=>{
  const upgrade=TOWERS['ice'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 1 tier 3',()=>{
  const upgrade=TOWERS['ice'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 1 tier 4',()=>{
  const upgrade=TOWERS['ice'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 1 tier 5',()=>{
  const upgrade=TOWERS['ice'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 2 tier 1',()=>{
  const upgrade=TOWERS['ice'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 2 tier 2',()=>{
  const upgrade=TOWERS['ice'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 2 tier 3',()=>{
  const upgrade=TOWERS['ice'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 2 tier 4',()=>{
  const upgrade=TOWERS['ice'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content ice path 2 tier 5',()=>{
  const upgrade=TOWERS['ice'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower ice path count',()=>{assert.equal(TOWERS['ice'].paths.length,3);});
contract('tower ice tier count',()=>{assert.ok(TOWERS['ice'].paths.every(path=>path.length===5));});
contract('upgrade content banana path 0 tier 1',()=>{
  const upgrade=TOWERS['banana'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 0 tier 2',()=>{
  const upgrade=TOWERS['banana'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 0 tier 3',()=>{
  const upgrade=TOWERS['banana'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 0 tier 4',()=>{
  const upgrade=TOWERS['banana'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 0 tier 5',()=>{
  const upgrade=TOWERS['banana'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 1 tier 1',()=>{
  const upgrade=TOWERS['banana'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 1 tier 2',()=>{
  const upgrade=TOWERS['banana'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 1 tier 3',()=>{
  const upgrade=TOWERS['banana'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 1 tier 4',()=>{
  const upgrade=TOWERS['banana'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 1 tier 5',()=>{
  const upgrade=TOWERS['banana'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 2 tier 1',()=>{
  const upgrade=TOWERS['banana'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 2 tier 2',()=>{
  const upgrade=TOWERS['banana'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 2 tier 3',()=>{
  const upgrade=TOWERS['banana'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 2 tier 4',()=>{
  const upgrade=TOWERS['banana'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content banana path 2 tier 5',()=>{
  const upgrade=TOWERS['banana'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower banana path count',()=>{assert.equal(TOWERS['banana'].paths.length,3);});
contract('tower banana tier count',()=>{assert.ok(TOWERS['banana'].paths.every(path=>path.length===5));});
contract('upgrade content prism path 0 tier 1',()=>{
  const upgrade=TOWERS['prism'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 0 tier 2',()=>{
  const upgrade=TOWERS['prism'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 0 tier 3',()=>{
  const upgrade=TOWERS['prism'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 0 tier 4',()=>{
  const upgrade=TOWERS['prism'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 0 tier 5',()=>{
  const upgrade=TOWERS['prism'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 1 tier 1',()=>{
  const upgrade=TOWERS['prism'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 1 tier 2',()=>{
  const upgrade=TOWERS['prism'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 1 tier 3',()=>{
  const upgrade=TOWERS['prism'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 1 tier 4',()=>{
  const upgrade=TOWERS['prism'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 1 tier 5',()=>{
  const upgrade=TOWERS['prism'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 2 tier 1',()=>{
  const upgrade=TOWERS['prism'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 2 tier 2',()=>{
  const upgrade=TOWERS['prism'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 2 tier 3',()=>{
  const upgrade=TOWERS['prism'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 2 tier 4',()=>{
  const upgrade=TOWERS['prism'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content prism path 2 tier 5',()=>{
  const upgrade=TOWERS['prism'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower prism path count',()=>{assert.equal(TOWERS['prism'].paths.length,3);});
contract('tower prism tier count',()=>{assert.ok(TOWERS['prism'].paths.every(path=>path.length===5));});
contract('upgrade content shadow path 0 tier 1',()=>{
  const upgrade=TOWERS['shadow'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 0 tier 2',()=>{
  const upgrade=TOWERS['shadow'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 0 tier 3',()=>{
  const upgrade=TOWERS['shadow'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 0 tier 4',()=>{
  const upgrade=TOWERS['shadow'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 0 tier 5',()=>{
  const upgrade=TOWERS['shadow'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 1 tier 1',()=>{
  const upgrade=TOWERS['shadow'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 1 tier 2',()=>{
  const upgrade=TOWERS['shadow'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 1 tier 3',()=>{
  const upgrade=TOWERS['shadow'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 1 tier 4',()=>{
  const upgrade=TOWERS['shadow'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 1 tier 5',()=>{
  const upgrade=TOWERS['shadow'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 2 tier 1',()=>{
  const upgrade=TOWERS['shadow'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 2 tier 2',()=>{
  const upgrade=TOWERS['shadow'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 2 tier 3',()=>{
  const upgrade=TOWERS['shadow'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 2 tier 4',()=>{
  const upgrade=TOWERS['shadow'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content shadow path 2 tier 5',()=>{
  const upgrade=TOWERS['shadow'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower shadow path count',()=>{assert.equal(TOWERS['shadow'].paths.length,3);});
contract('tower shadow tier count',()=>{assert.ok(TOWERS['shadow'].paths.every(path=>path.length===5));});
contract('upgrade content corsair path 0 tier 1',()=>{
  const upgrade=TOWERS['corsair'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 0 tier 2',()=>{
  const upgrade=TOWERS['corsair'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 0 tier 3',()=>{
  const upgrade=TOWERS['corsair'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 0 tier 4',()=>{
  const upgrade=TOWERS['corsair'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 0 tier 5',()=>{
  const upgrade=TOWERS['corsair'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 1 tier 1',()=>{
  const upgrade=TOWERS['corsair'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 1 tier 2',()=>{
  const upgrade=TOWERS['corsair'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 1 tier 3',()=>{
  const upgrade=TOWERS['corsair'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 1 tier 4',()=>{
  const upgrade=TOWERS['corsair'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 1 tier 5',()=>{
  const upgrade=TOWERS['corsair'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 2 tier 1',()=>{
  const upgrade=TOWERS['corsair'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 2 tier 2',()=>{
  const upgrade=TOWERS['corsair'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 2 tier 3',()=>{
  const upgrade=TOWERS['corsair'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 2 tier 4',()=>{
  const upgrade=TOWERS['corsair'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content corsair path 2 tier 5',()=>{
  const upgrade=TOWERS['corsair'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower corsair path count',()=>{assert.equal(TOWERS['corsair'].paths.length,3);});
contract('tower corsair tier count',()=>{assert.ok(TOWERS['corsair'].paths.every(path=>path.length===5));});
contract('upgrade content rotor path 0 tier 1',()=>{
  const upgrade=TOWERS['rotor'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 0 tier 2',()=>{
  const upgrade=TOWERS['rotor'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 0 tier 3',()=>{
  const upgrade=TOWERS['rotor'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 0 tier 4',()=>{
  const upgrade=TOWERS['rotor'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 0 tier 5',()=>{
  const upgrade=TOWERS['rotor'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 1 tier 1',()=>{
  const upgrade=TOWERS['rotor'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 1 tier 2',()=>{
  const upgrade=TOWERS['rotor'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 1 tier 3',()=>{
  const upgrade=TOWERS['rotor'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 1 tier 4',()=>{
  const upgrade=TOWERS['rotor'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 1 tier 5',()=>{
  const upgrade=TOWERS['rotor'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 2 tier 1',()=>{
  const upgrade=TOWERS['rotor'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 2 tier 2',()=>{
  const upgrade=TOWERS['rotor'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 2 tier 3',()=>{
  const upgrade=TOWERS['rotor'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 2 tier 4',()=>{
  const upgrade=TOWERS['rotor'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content rotor path 2 tier 5',()=>{
  const upgrade=TOWERS['rotor'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower rotor path count',()=>{assert.equal(TOWERS['rotor'].paths.length,3);});
contract('tower rotor tier count',()=>{assert.ok(TOWERS['rotor'].paths.every(path=>path.length===5));});
contract('upgrade content mortar path 0 tier 1',()=>{
  const upgrade=TOWERS['mortar'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 0 tier 2',()=>{
  const upgrade=TOWERS['mortar'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 0 tier 3',()=>{
  const upgrade=TOWERS['mortar'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 0 tier 4',()=>{
  const upgrade=TOWERS['mortar'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 0 tier 5',()=>{
  const upgrade=TOWERS['mortar'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 1 tier 1',()=>{
  const upgrade=TOWERS['mortar'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 1 tier 2',()=>{
  const upgrade=TOWERS['mortar'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 1 tier 3',()=>{
  const upgrade=TOWERS['mortar'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 1 tier 4',()=>{
  const upgrade=TOWERS['mortar'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 1 tier 5',()=>{
  const upgrade=TOWERS['mortar'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 2 tier 1',()=>{
  const upgrade=TOWERS['mortar'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 2 tier 2',()=>{
  const upgrade=TOWERS['mortar'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 2 tier 3',()=>{
  const upgrade=TOWERS['mortar'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 2 tier 4',()=>{
  const upgrade=TOWERS['mortar'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content mortar path 2 tier 5',()=>{
  const upgrade=TOWERS['mortar'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower mortar path count',()=>{assert.equal(TOWERS['mortar'].paths.length,3);});
contract('tower mortar tier count',()=>{assert.ok(TOWERS['mortar'].paths.every(path=>path.length===5));});
contract('upgrade content beast path 0 tier 1',()=>{
  const upgrade=TOWERS['beast'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 0 tier 2',()=>{
  const upgrade=TOWERS['beast'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 0 tier 3',()=>{
  const upgrade=TOWERS['beast'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 0 tier 4',()=>{
  const upgrade=TOWERS['beast'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 0 tier 5',()=>{
  const upgrade=TOWERS['beast'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 1 tier 1',()=>{
  const upgrade=TOWERS['beast'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 1 tier 2',()=>{
  const upgrade=TOWERS['beast'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 1 tier 3',()=>{
  const upgrade=TOWERS['beast'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 1 tier 4',()=>{
  const upgrade=TOWERS['beast'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 1 tier 5',()=>{
  const upgrade=TOWERS['beast'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 2 tier 1',()=>{
  const upgrade=TOWERS['beast'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 2 tier 2',()=>{
  const upgrade=TOWERS['beast'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 2 tier 3',()=>{
  const upgrade=TOWERS['beast'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 2 tier 4',()=>{
  const upgrade=TOWERS['beast'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content beast path 2 tier 5',()=>{
  const upgrade=TOWERS['beast'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower beast path count',()=>{assert.equal(TOWERS['beast'].paths.length,3);});
contract('tower beast tier count',()=>{assert.ok(TOWERS['beast'].paths.every(path=>path.length===5));});
contract('upgrade content tide path 0 tier 1',()=>{
  const upgrade=TOWERS['tide'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 0 tier 2',()=>{
  const upgrade=TOWERS['tide'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 0 tier 3',()=>{
  const upgrade=TOWERS['tide'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 0 tier 4',()=>{
  const upgrade=TOWERS['tide'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 0 tier 5',()=>{
  const upgrade=TOWERS['tide'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 1 tier 1',()=>{
  const upgrade=TOWERS['tide'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 1 tier 2',()=>{
  const upgrade=TOWERS['tide'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 1 tier 3',()=>{
  const upgrade=TOWERS['tide'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 1 tier 4',()=>{
  const upgrade=TOWERS['tide'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 1 tier 5',()=>{
  const upgrade=TOWERS['tide'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 2 tier 1',()=>{
  const upgrade=TOWERS['tide'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 2 tier 2',()=>{
  const upgrade=TOWERS['tide'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 2 tier 3',()=>{
  const upgrade=TOWERS['tide'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 2 tier 4',()=>{
  const upgrade=TOWERS['tide'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content tide path 2 tier 5',()=>{
  const upgrade=TOWERS['tide'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower tide path count',()=>{assert.equal(TOWERS['tide'].paths.length,3);});
contract('tower tide tier count',()=>{assert.ok(TOWERS['tide'].paths.every(path=>path.length===5));});
contract('upgrade content outlaw path 0 tier 1',()=>{
  const upgrade=TOWERS['outlaw'].paths[0][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 0 tier 2',()=>{
  const upgrade=TOWERS['outlaw'].paths[0][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 0 tier 3',()=>{
  const upgrade=TOWERS['outlaw'].paths[0][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 0 tier 4',()=>{
  const upgrade=TOWERS['outlaw'].paths[0][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 0 tier 5',()=>{
  const upgrade=TOWERS['outlaw'].paths[0][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 1 tier 1',()=>{
  const upgrade=TOWERS['outlaw'].paths[1][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 1 tier 2',()=>{
  const upgrade=TOWERS['outlaw'].paths[1][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 1 tier 3',()=>{
  const upgrade=TOWERS['outlaw'].paths[1][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 1 tier 4',()=>{
  const upgrade=TOWERS['outlaw'].paths[1][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 1 tier 5',()=>{
  const upgrade=TOWERS['outlaw'].paths[1][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 2 tier 1',()=>{
  const upgrade=TOWERS['outlaw'].paths[2][0];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 2 tier 2',()=>{
  const upgrade=TOWERS['outlaw'].paths[2][1];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 2 tier 3',()=>{
  const upgrade=TOWERS['outlaw'].paths[2][2];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 2 tier 4',()=>{
  const upgrade=TOWERS['outlaw'].paths[2][3];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('upgrade content outlaw path 2 tier 5',()=>{
  const upgrade=TOWERS['outlaw'].paths[2][4];assert.equal(typeof upgrade.name,'string');assert.ok(upgrade.name.length>2);assert.equal(typeof upgrade.desc,'string');assert.ok(upgrade.desc.length>8);assert.ok(upgrade.cost>0);
});
contract('tower outlaw path count',()=>{assert.equal(TOWERS['outlaw'].paths.length,3);});
contract('tower outlaw tier count',()=>{assert.ok(TOWERS['outlaw'].paths.every(path=>path.length===5));});
contract('hero ember range',()=>{assert.ok(HEROES['ember'].base.range>0);});
contract('hero ember rate',()=>{assert.ok(HEROES['ember'].base.attackRate>0);});
contract('hero ember levels',()=>{assert.ok(HEROES['ember'].levels.length>=10);});
contract('hero ember ability slot 0',()=>{assert.ok(HEROES['ember'].abilities[0]||a>=HEROES['ember'].abilities.length);});
contract('hero ember ability slot 1',()=>{assert.ok(HEROES['ember'].abilities[1]||a>=HEROES['ember'].abilities.length);});
contract('hero ember ability slot 2',()=>{assert.ok(HEROES['ember'].abilities[2]||a>=HEROES['ember'].abilities.length);});
contract('hero ranger range',()=>{assert.ok(HEROES['ranger'].base.range>0);});
contract('hero ranger rate',()=>{assert.ok(HEROES['ranger'].base.attackRate>0);});
contract('hero ranger levels',()=>{assert.ok(HEROES['ranger'].levels.length>=10);});
contract('hero ranger ability slot 0',()=>{assert.ok(HEROES['ranger'].abilities[0]||a>=HEROES['ranger'].abilities.length);});
contract('hero ranger ability slot 1',()=>{assert.ok(HEROES['ranger'].abilities[1]||a>=HEROES['ranger'].abilities.length);});
contract('hero ranger ability slot 2',()=>{assert.ok(HEROES['ranger'].abilities[2]||a>=HEROES['ranger'].abilities.length);});
contract('hero engineer range',()=>{assert.ok(HEROES['engineer'].base.range>0);});
contract('hero engineer rate',()=>{assert.ok(HEROES['engineer'].base.attackRate>0);});
contract('hero engineer levels',()=>{assert.ok(HEROES['engineer'].levels.length>=10);});
contract('hero engineer ability slot 0',()=>{assert.ok(HEROES['engineer'].abilities[0]||a>=HEROES['engineer'].abilities.length);});
contract('hero engineer ability slot 1',()=>{assert.ok(HEROES['engineer'].abilities[1]||a>=HEROES['engineer'].abilities.length);});
contract('hero engineer ability slot 2',()=>{assert.ok(HEROES['engineer'].abilities[2]||a>=HEROES['engineer'].abilities.length);});
contract('hero nova range',()=>{assert.ok(HEROES['nova'].base.range>0);});
contract('hero nova rate',()=>{assert.ok(HEROES['nova'].base.attackRate>0);});
contract('hero nova levels',()=>{assert.ok(HEROES['nova'].levels.length>=10);});
contract('hero nova ability slot 0',()=>{assert.ok(HEROES['nova'].abilities[0]||a>=HEROES['nova'].abilities.length);});
contract('hero nova ability slot 1',()=>{assert.ok(HEROES['nova'].abilities[1]||a>=HEROES['nova'].abilities.length);});
contract('hero nova ability slot 2',()=>{assert.ok(HEROES['nova'].abilities[2]||a>=HEROES['nova'].abilities.length);});
contract('hero moss range',()=>{assert.ok(HEROES['moss'].base.range>0);});
contract('hero moss rate',()=>{assert.ok(HEROES['moss'].base.attackRate>0);});
contract('hero moss levels',()=>{assert.ok(HEROES['moss'].levels.length>=10);});
contract('hero moss ability slot 0',()=>{assert.ok(HEROES['moss'].abilities[0]||a>=HEROES['moss'].abilities.length);});
contract('hero moss ability slot 1',()=>{assert.ok(HEROES['moss'].abilities[1]||a>=HEROES['moss'].abilities.length);});
contract('hero moss ability slot 2',()=>{assert.ok(HEROES['moss'].abilities[2]||a>=HEROES['moss'].abilities.length);});
contract('hero quartz range',()=>{assert.ok(HEROES['quartz'].base.range>0);});
contract('hero quartz rate',()=>{assert.ok(HEROES['quartz'].base.attackRate>0);});
contract('hero quartz levels',()=>{assert.ok(HEROES['quartz'].levels.length>=10);});
contract('hero quartz ability slot 0',()=>{assert.ok(HEROES['quartz'].abilities[0]||a>=HEROES['quartz'].abilities.length);});
contract('hero quartz ability slot 1',()=>{assert.ok(HEROES['quartz'].abilities[1]||a>=HEROES['quartz'].abilities.length);});
contract('hero quartz ability slot 2',()=>{assert.ok(HEROES['quartz'].abilities[2]||a>=HEROES['quartz'].abilities.length);});
contract('map meadow geometry',()=>{assert.ok(MAPS['meadow'].paths.length>=1);assert.ok(MAPS['meadow'].buildZones.length>=5);});
contract('map meadow width',()=>{assert.ok(MAPS['meadow'].pathWidth>0);});
contract('map canyon geometry',()=>{assert.ok(MAPS['canyon'].paths.length>=1);assert.ok(MAPS['canyon'].buildZones.length>=5);});
contract('map canyon width',()=>{assert.ok(MAPS['canyon'].pathWidth>0);});
contract('map harbor geometry',()=>{assert.ok(MAPS['harbor'].paths.length>=1);assert.ok(MAPS['harbor'].buildZones.length>=5);});
contract('map harbor width',()=>{assert.ok(MAPS['harbor'].pathWidth>0);});
contract('map highlands geometry',()=>{assert.ok(MAPS['highlands'].paths.length>=1);assert.ok(MAPS['highlands'].buildZones.length>=5);});
contract('map highlands width',()=>{assert.ok(MAPS['highlands'].pathWidth>0);});
contract('map ruins geometry',()=>{assert.ok(MAPS['ruins'].paths.length>=1);assert.ok(MAPS['ruins'].buildZones.length>=5);});
contract('map ruins width',()=>{assert.ok(MAPS['ruins'].pathWidth>0);});
contract('map orchard geometry',()=>{assert.ok(MAPS['orchard'].paths.length>=1);assert.ok(MAPS['orchard'].buildZones.length>=5);});
contract('map orchard width',()=>{assert.ok(MAPS['orchard'].pathWidth>0);});
contract('map icefield geometry',()=>{assert.ok(MAPS['icefield'].paths.length>=1);assert.ok(MAPS['icefield'].buildZones.length>=5);});
contract('map icefield width',()=>{assert.ok(MAPS['icefield'].pathWidth>0);});
contract('map foundry geometry',()=>{assert.ok(MAPS['foundry'].paths.length>=1);assert.ok(MAPS['foundry'].buildZones.length>=5);});
contract('map foundry width',()=>{assert.ok(MAPS['foundry'].pathWidth>0);});
contract('map coast geometry',()=>{assert.ok(MAPS['coast'].paths.length>=1);assert.ok(MAPS['coast'].buildZones.length>=5);});
contract('map coast width',()=>{assert.ok(MAPS['coast'].pathWidth>0);});
contract('map labyrinth geometry',()=>{assert.ok(MAPS['labyrinth'].paths.length>=1);assert.ok(MAPS['labyrinth'].buildZones.length>=5);});
contract('map labyrinth width',()=>{assert.ok(MAPS['labyrinth'].pathWidth>0);});
contract('difficulty easy hp',()=>{assert.ok(DIFFICULTIES['easy'].bloonHp>0);});
contract('difficulty easy speed',()=>{assert.ok(DIFFICULTIES['easy'].bloonSpeed>0);});
contract('difficulty easy reward',()=>{assert.ok(DIFFICULTIES['easy'].rewardMult>0);});
contract('difficulty normal hp',()=>{assert.ok(DIFFICULTIES['normal'].bloonHp>0);});
contract('difficulty normal speed',()=>{assert.ok(DIFFICULTIES['normal'].bloonSpeed>0);});
contract('difficulty normal reward',()=>{assert.ok(DIFFICULTIES['normal'].rewardMult>0);});
contract('difficulty hard hp',()=>{assert.ok(DIFFICULTIES['hard'].bloonHp>0);});
contract('difficulty hard speed',()=>{assert.ok(DIFFICULTIES['hard'].bloonSpeed>0);});
contract('difficulty hard reward',()=>{assert.ok(DIFFICULTIES['hard'].rewardMult>0);});
contract('difficulty extreme hp',()=>{assert.ok(DIFFICULTIES['extreme'].bloonHp>0);});
contract('difficulty extreme speed',()=>{assert.ok(DIFFICULTIES['extreme'].bloonSpeed>0);});
contract('difficulty extreme reward',()=>{assert.ok(DIFFICULTIES['extreme'].rewardMult>0);});
contract('difficulty impossible hp',()=>{assert.ok(DIFFICULTIES['impossible'].bloonHp>0);});
contract('difficulty impossible speed',()=>{assert.ok(DIFFICULTIES['impossible'].bloonSpeed>0);});
contract('difficulty impossible reward',()=>{assert.ok(DIFFICULTIES['impossible'].rewardMult>0);});
contract('mode standard cash',()=>{assert.ok(MODES['standard'].startCash>0);});
contract('mode standard lives',()=>{assert.ok(MODES['standard'].startLives>0);});
contract('mode standard cap',()=>{assert.ok(MODES['standard'].roundCap>=100);});
contract('mode deflation cash',()=>{assert.ok(MODES['deflation'].startCash>0);});
contract('mode deflation lives',()=>{assert.ok(MODES['deflation'].startLives>0);});
contract('mode deflation cap',()=>{assert.ok(MODES['deflation'].roundCap>=100);});
contract('mode halfCash cash',()=>{assert.ok(MODES['halfCash'].startCash>0);});
contract('mode halfCash lives',()=>{assert.ok(MODES['halfCash'].startLives>0);});
contract('mode halfCash cap',()=>{assert.ok(MODES['halfCash'].roundCap>=100);});
contract('mode freeplay cash',()=>{assert.ok(MODES['freeplay'].startCash>0);});
contract('mode freeplay lives',()=>{assert.ok(MODES['freeplay'].startLives>0);});
contract('mode freeplay cap',()=>{assert.ok(MODES['freeplay'].roundCap>=100);});
contract('mode alternate cash',()=>{assert.ok(MODES['alternate'].startCash>0);});
contract('mode alternate lives',()=>{assert.ok(MODES['alternate'].startLives>0);});
contract('mode alternate cap',()=>{assert.ok(MODES['alternate'].roundCap>=100);});
contract('mode noSell cash',()=>{assert.ok(MODES['noSell'].startCash>0);});
contract('mode noSell lives',()=>{assert.ok(MODES['noSell'].startLives>0);});
contract('mode noSell cap',()=>{assert.ok(MODES['noSell'].roundCap>=100);});
contract('mode doubleRush cash',()=>{assert.ok(MODES['doubleRush'].startCash>0);});
contract('mode doubleRush lives',()=>{assert.ok(MODES['doubleRush'].startLives>0);});
contract('mode doubleRush cap',()=>{assert.ok(MODES['doubleRush'].roundCap>=100);});
contract('mode oneLife cash',()=>{assert.ok(MODES['oneLife'].startCash>0);});
contract('mode oneLife lives',()=>{assert.ok(MODES['oneLife'].startLives>0);});
contract('mode oneLife cap',()=>{assert.ok(MODES['oneLife'].roundCap>=100);});
contract('mode bossGauntlet cash',()=>{assert.ok(MODES['bossGauntlet'].startCash>0);});
contract('mode bossGauntlet lives',()=>{assert.ok(MODES['bossGauntlet'].startLives>0);});
contract('mode bossGauntlet cap',()=>{assert.ok(MODES['bossGauntlet'].roundCap>=100);});
contract('mode endurance cash',()=>{assert.ok(MODES['endurance'].startCash>0);});
contract('mode endurance lives',()=>{assert.ok(MODES['endurance'].startLives>0);});
contract('mode endurance cap',()=>{assert.ok(MODES['endurance'].roundCap>=100);});
contract('catalog round 1',()=>{const r=ROUND_CATALOG[1];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 2',()=>{const r=ROUND_CATALOG[2];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 3',()=>{const r=ROUND_CATALOG[3];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 4',()=>{const r=ROUND_CATALOG[4];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 5',()=>{const r=ROUND_CATALOG[5];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 6',()=>{const r=ROUND_CATALOG[6];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 7',()=>{const r=ROUND_CATALOG[7];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 8',()=>{const r=ROUND_CATALOG[8];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 9',()=>{const r=ROUND_CATALOG[9];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 10',()=>{const r=ROUND_CATALOG[10];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 11',()=>{const r=ROUND_CATALOG[11];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 12',()=>{const r=ROUND_CATALOG[12];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 13',()=>{const r=ROUND_CATALOG[13];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 14',()=>{const r=ROUND_CATALOG[14];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 15',()=>{const r=ROUND_CATALOG[15];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 16',()=>{const r=ROUND_CATALOG[16];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 17',()=>{const r=ROUND_CATALOG[17];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 18',()=>{const r=ROUND_CATALOG[18];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 19',()=>{const r=ROUND_CATALOG[19];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 20',()=>{const r=ROUND_CATALOG[20];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 21',()=>{const r=ROUND_CATALOG[21];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 22',()=>{const r=ROUND_CATALOG[22];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 23',()=>{const r=ROUND_CATALOG[23];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 24',()=>{const r=ROUND_CATALOG[24];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 25',()=>{const r=ROUND_CATALOG[25];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 26',()=>{const r=ROUND_CATALOG[26];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 27',()=>{const r=ROUND_CATALOG[27];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 28',()=>{const r=ROUND_CATALOG[28];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 29',()=>{const r=ROUND_CATALOG[29];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 30',()=>{const r=ROUND_CATALOG[30];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 31',()=>{const r=ROUND_CATALOG[31];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 32',()=>{const r=ROUND_CATALOG[32];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 33',()=>{const r=ROUND_CATALOG[33];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 34',()=>{const r=ROUND_CATALOG[34];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 35',()=>{const r=ROUND_CATALOG[35];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 36',()=>{const r=ROUND_CATALOG[36];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 37',()=>{const r=ROUND_CATALOG[37];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 38',()=>{const r=ROUND_CATALOG[38];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 39',()=>{const r=ROUND_CATALOG[39];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 40',()=>{const r=ROUND_CATALOG[40];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 41',()=>{const r=ROUND_CATALOG[41];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 42',()=>{const r=ROUND_CATALOG[42];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 43',()=>{const r=ROUND_CATALOG[43];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 44',()=>{const r=ROUND_CATALOG[44];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 45',()=>{const r=ROUND_CATALOG[45];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 46',()=>{const r=ROUND_CATALOG[46];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 47',()=>{const r=ROUND_CATALOG[47];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 48',()=>{const r=ROUND_CATALOG[48];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 49',()=>{const r=ROUND_CATALOG[49];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 50',()=>{const r=ROUND_CATALOG[50];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 51',()=>{const r=ROUND_CATALOG[51];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 52',()=>{const r=ROUND_CATALOG[52];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 53',()=>{const r=ROUND_CATALOG[53];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 54',()=>{const r=ROUND_CATALOG[54];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 55',()=>{const r=ROUND_CATALOG[55];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 56',()=>{const r=ROUND_CATALOG[56];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 57',()=>{const r=ROUND_CATALOG[57];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 58',()=>{const r=ROUND_CATALOG[58];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 59',()=>{const r=ROUND_CATALOG[59];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 60',()=>{const r=ROUND_CATALOG[60];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 61',()=>{const r=ROUND_CATALOG[61];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 62',()=>{const r=ROUND_CATALOG[62];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 63',()=>{const r=ROUND_CATALOG[63];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 64',()=>{const r=ROUND_CATALOG[64];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 65',()=>{const r=ROUND_CATALOG[65];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 66',()=>{const r=ROUND_CATALOG[66];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 67',()=>{const r=ROUND_CATALOG[67];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 68',()=>{const r=ROUND_CATALOG[68];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 69',()=>{const r=ROUND_CATALOG[69];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 70',()=>{const r=ROUND_CATALOG[70];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 71',()=>{const r=ROUND_CATALOG[71];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 72',()=>{const r=ROUND_CATALOG[72];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 73',()=>{const r=ROUND_CATALOG[73];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 74',()=>{const r=ROUND_CATALOG[74];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 75',()=>{const r=ROUND_CATALOG[75];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 76',()=>{const r=ROUND_CATALOG[76];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 77',()=>{const r=ROUND_CATALOG[77];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 78',()=>{const r=ROUND_CATALOG[78];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 79',()=>{const r=ROUND_CATALOG[79];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 80',()=>{const r=ROUND_CATALOG[80];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 81',()=>{const r=ROUND_CATALOG[81];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 82',()=>{const r=ROUND_CATALOG[82];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 83',()=>{const r=ROUND_CATALOG[83];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 84',()=>{const r=ROUND_CATALOG[84];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 85',()=>{const r=ROUND_CATALOG[85];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 86',()=>{const r=ROUND_CATALOG[86];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 87',()=>{const r=ROUND_CATALOG[87];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 88',()=>{const r=ROUND_CATALOG[88];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 89',()=>{const r=ROUND_CATALOG[89];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 90',()=>{const r=ROUND_CATALOG[90];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 91',()=>{const r=ROUND_CATALOG[91];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 92',()=>{const r=ROUND_CATALOG[92];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 93',()=>{const r=ROUND_CATALOG[93];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 94',()=>{const r=ROUND_CATALOG[94];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 95',()=>{const r=ROUND_CATALOG[95];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 96',()=>{const r=ROUND_CATALOG[96];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 97',()=>{const r=ROUND_CATALOG[97];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 98',()=>{const r=ROUND_CATALOG[98];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 99',()=>{const r=ROUND_CATALOG[99];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 100',()=>{const r=ROUND_CATALOG[100];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 101',()=>{const r=ROUND_CATALOG[101];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 102',()=>{const r=ROUND_CATALOG[102];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 103',()=>{const r=ROUND_CATALOG[103];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 104',()=>{const r=ROUND_CATALOG[104];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 105',()=>{const r=ROUND_CATALOG[105];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 106',()=>{const r=ROUND_CATALOG[106];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 107',()=>{const r=ROUND_CATALOG[107];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 108',()=>{const r=ROUND_CATALOG[108];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 109',()=>{const r=ROUND_CATALOG[109];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 110',()=>{const r=ROUND_CATALOG[110];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 111',()=>{const r=ROUND_CATALOG[111];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 112',()=>{const r=ROUND_CATALOG[112];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 113',()=>{const r=ROUND_CATALOG[113];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 114',()=>{const r=ROUND_CATALOG[114];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 115',()=>{const r=ROUND_CATALOG[115];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 116',()=>{const r=ROUND_CATALOG[116];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 117',()=>{const r=ROUND_CATALOG[117];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 118',()=>{const r=ROUND_CATALOG[118];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 119',()=>{const r=ROUND_CATALOG[119];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 120',()=>{const r=ROUND_CATALOG[120];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 121',()=>{const r=ROUND_CATALOG[121];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 122',()=>{const r=ROUND_CATALOG[122];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 123',()=>{const r=ROUND_CATALOG[123];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 124',()=>{const r=ROUND_CATALOG[124];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 125',()=>{const r=ROUND_CATALOG[125];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 126',()=>{const r=ROUND_CATALOG[126];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 127',()=>{const r=ROUND_CATALOG[127];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 128',()=>{const r=ROUND_CATALOG[128];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 129',()=>{const r=ROUND_CATALOG[129];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 130',()=>{const r=ROUND_CATALOG[130];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 131',()=>{const r=ROUND_CATALOG[131];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 132',()=>{const r=ROUND_CATALOG[132];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 133',()=>{const r=ROUND_CATALOG[133];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 134',()=>{const r=ROUND_CATALOG[134];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 135',()=>{const r=ROUND_CATALOG[135];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 136',()=>{const r=ROUND_CATALOG[136];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 137',()=>{const r=ROUND_CATALOG[137];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 138',()=>{const r=ROUND_CATALOG[138];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 139',()=>{const r=ROUND_CATALOG[139];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 140',()=>{const r=ROUND_CATALOG[140];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 141',()=>{const r=ROUND_CATALOG[141];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 142',()=>{const r=ROUND_CATALOG[142];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 143',()=>{const r=ROUND_CATALOG[143];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 144',()=>{const r=ROUND_CATALOG[144];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 145',()=>{const r=ROUND_CATALOG[145];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 146',()=>{const r=ROUND_CATALOG[146];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 147',()=>{const r=ROUND_CATALOG[147];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 148',()=>{const r=ROUND_CATALOG[148];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 149',()=>{const r=ROUND_CATALOG[149];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 150',()=>{const r=ROUND_CATALOG[150];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 151',()=>{const r=ROUND_CATALOG[151];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 152',()=>{const r=ROUND_CATALOG[152];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 153',()=>{const r=ROUND_CATALOG[153];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 154',()=>{const r=ROUND_CATALOG[154];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 155',()=>{const r=ROUND_CATALOG[155];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 156',()=>{const r=ROUND_CATALOG[156];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 157',()=>{const r=ROUND_CATALOG[157];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 158',()=>{const r=ROUND_CATALOG[158];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 159',()=>{const r=ROUND_CATALOG[159];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 160',()=>{const r=ROUND_CATALOG[160];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 161',()=>{const r=ROUND_CATALOG[161];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 162',()=>{const r=ROUND_CATALOG[162];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 163',()=>{const r=ROUND_CATALOG[163];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 164',()=>{const r=ROUND_CATALOG[164];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 165',()=>{const r=ROUND_CATALOG[165];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 166',()=>{const r=ROUND_CATALOG[166];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 167',()=>{const r=ROUND_CATALOG[167];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 168',()=>{const r=ROUND_CATALOG[168];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 169',()=>{const r=ROUND_CATALOG[169];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 170',()=>{const r=ROUND_CATALOG[170];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 171',()=>{const r=ROUND_CATALOG[171];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 172',()=>{const r=ROUND_CATALOG[172];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 173',()=>{const r=ROUND_CATALOG[173];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 174',()=>{const r=ROUND_CATALOG[174];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 175',()=>{const r=ROUND_CATALOG[175];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 176',()=>{const r=ROUND_CATALOG[176];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 177',()=>{const r=ROUND_CATALOG[177];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 178',()=>{const r=ROUND_CATALOG[178];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 179',()=>{const r=ROUND_CATALOG[179];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 180',()=>{const r=ROUND_CATALOG[180];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 181',()=>{const r=ROUND_CATALOG[181];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 182',()=>{const r=ROUND_CATALOG[182];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 183',()=>{const r=ROUND_CATALOG[183];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 184',()=>{const r=ROUND_CATALOG[184];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 185',()=>{const r=ROUND_CATALOG[185];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 186',()=>{const r=ROUND_CATALOG[186];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 187',()=>{const r=ROUND_CATALOG[187];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 188',()=>{const r=ROUND_CATALOG[188];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 189',()=>{const r=ROUND_CATALOG[189];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 190',()=>{const r=ROUND_CATALOG[190];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 191',()=>{const r=ROUND_CATALOG[191];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 192',()=>{const r=ROUND_CATALOG[192];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 193',()=>{const r=ROUND_CATALOG[193];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 194',()=>{const r=ROUND_CATALOG[194];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 195',()=>{const r=ROUND_CATALOG[195];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 196',()=>{const r=ROUND_CATALOG[196];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 197',()=>{const r=ROUND_CATALOG[197];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 198',()=>{const r=ROUND_CATALOG[198];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 199',()=>{const r=ROUND_CATALOG[199];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 200',()=>{const r=ROUND_CATALOG[200];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 201',()=>{const r=ROUND_CATALOG[201];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 202',()=>{const r=ROUND_CATALOG[202];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 203',()=>{const r=ROUND_CATALOG[203];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 204',()=>{const r=ROUND_CATALOG[204];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 205',()=>{const r=ROUND_CATALOG[205];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 206',()=>{const r=ROUND_CATALOG[206];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 207',()=>{const r=ROUND_CATALOG[207];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 208',()=>{const r=ROUND_CATALOG[208];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 209',()=>{const r=ROUND_CATALOG[209];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 210',()=>{const r=ROUND_CATALOG[210];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 211',()=>{const r=ROUND_CATALOG[211];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 212',()=>{const r=ROUND_CATALOG[212];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 213',()=>{const r=ROUND_CATALOG[213];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 214',()=>{const r=ROUND_CATALOG[214];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 215',()=>{const r=ROUND_CATALOG[215];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 216',()=>{const r=ROUND_CATALOG[216];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 217',()=>{const r=ROUND_CATALOG[217];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 218',()=>{const r=ROUND_CATALOG[218];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 219',()=>{const r=ROUND_CATALOG[219];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 220',()=>{const r=ROUND_CATALOG[220];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 221',()=>{const r=ROUND_CATALOG[221];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 222',()=>{const r=ROUND_CATALOG[222];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 223',()=>{const r=ROUND_CATALOG[223];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 224',()=>{const r=ROUND_CATALOG[224];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 225',()=>{const r=ROUND_CATALOG[225];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 226',()=>{const r=ROUND_CATALOG[226];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 227',()=>{const r=ROUND_CATALOG[227];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 228',()=>{const r=ROUND_CATALOG[228];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 229',()=>{const r=ROUND_CATALOG[229];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 230',()=>{const r=ROUND_CATALOG[230];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 231',()=>{const r=ROUND_CATALOG[231];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 232',()=>{const r=ROUND_CATALOG[232];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 233',()=>{const r=ROUND_CATALOG[233];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 234',()=>{const r=ROUND_CATALOG[234];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 235',()=>{const r=ROUND_CATALOG[235];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 236',()=>{const r=ROUND_CATALOG[236];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 237',()=>{const r=ROUND_CATALOG[237];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 238',()=>{const r=ROUND_CATALOG[238];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 239',()=>{const r=ROUND_CATALOG[239];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 240',()=>{const r=ROUND_CATALOG[240];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 241',()=>{const r=ROUND_CATALOG[241];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 242',()=>{const r=ROUND_CATALOG[242];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 243',()=>{const r=ROUND_CATALOG[243];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 244',()=>{const r=ROUND_CATALOG[244];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 245',()=>{const r=ROUND_CATALOG[245];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 246',()=>{const r=ROUND_CATALOG[246];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 247',()=>{const r=ROUND_CATALOG[247];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 248',()=>{const r=ROUND_CATALOG[248];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 249',()=>{const r=ROUND_CATALOG[249];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 250',()=>{const r=ROUND_CATALOG[250];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 251',()=>{const r=ROUND_CATALOG[251];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 252',()=>{const r=ROUND_CATALOG[252];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 253',()=>{const r=ROUND_CATALOG[253];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 254',()=>{const r=ROUND_CATALOG[254];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 255',()=>{const r=ROUND_CATALOG[255];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 256',()=>{const r=ROUND_CATALOG[256];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 257',()=>{const r=ROUND_CATALOG[257];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 258',()=>{const r=ROUND_CATALOG[258];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 259',()=>{const r=ROUND_CATALOG[259];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 260',()=>{const r=ROUND_CATALOG[260];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 261',()=>{const r=ROUND_CATALOG[261];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 262',()=>{const r=ROUND_CATALOG[262];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 263',()=>{const r=ROUND_CATALOG[263];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 264',()=>{const r=ROUND_CATALOG[264];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 265',()=>{const r=ROUND_CATALOG[265];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 266',()=>{const r=ROUND_CATALOG[266];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 267',()=>{const r=ROUND_CATALOG[267];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 268',()=>{const r=ROUND_CATALOG[268];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 269',()=>{const r=ROUND_CATALOG[269];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 270',()=>{const r=ROUND_CATALOG[270];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 271',()=>{const r=ROUND_CATALOG[271];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 272',()=>{const r=ROUND_CATALOG[272];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 273',()=>{const r=ROUND_CATALOG[273];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 274',()=>{const r=ROUND_CATALOG[274];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 275',()=>{const r=ROUND_CATALOG[275];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 276',()=>{const r=ROUND_CATALOG[276];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 277',()=>{const r=ROUND_CATALOG[277];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 278',()=>{const r=ROUND_CATALOG[278];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 279',()=>{const r=ROUND_CATALOG[279];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 280',()=>{const r=ROUND_CATALOG[280];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 281',()=>{const r=ROUND_CATALOG[281];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 282',()=>{const r=ROUND_CATALOG[282];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 283',()=>{const r=ROUND_CATALOG[283];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 284',()=>{const r=ROUND_CATALOG[284];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 285',()=>{const r=ROUND_CATALOG[285];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 286',()=>{const r=ROUND_CATALOG[286];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 287',()=>{const r=ROUND_CATALOG[287];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 288',()=>{const r=ROUND_CATALOG[288];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 289',()=>{const r=ROUND_CATALOG[289];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 290',()=>{const r=ROUND_CATALOG[290];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 291',()=>{const r=ROUND_CATALOG[291];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 292',()=>{const r=ROUND_CATALOG[292];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 293',()=>{const r=ROUND_CATALOG[293];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 294',()=>{const r=ROUND_CATALOG[294];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 295',()=>{const r=ROUND_CATALOG[295];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 296',()=>{const r=ROUND_CATALOG[296];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 297',()=>{const r=ROUND_CATALOG[297];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 298',()=>{const r=ROUND_CATALOG[298];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 299',()=>{const r=ROUND_CATALOG[299];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 300',()=>{const r=ROUND_CATALOG[300];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 301',()=>{const r=ROUND_CATALOG[301];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 302',()=>{const r=ROUND_CATALOG[302];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 303',()=>{const r=ROUND_CATALOG[303];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 304',()=>{const r=ROUND_CATALOG[304];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 305',()=>{const r=ROUND_CATALOG[305];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 306',()=>{const r=ROUND_CATALOG[306];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 307',()=>{const r=ROUND_CATALOG[307];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 308',()=>{const r=ROUND_CATALOG[308];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 309',()=>{const r=ROUND_CATALOG[309];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 310',()=>{const r=ROUND_CATALOG[310];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 311',()=>{const r=ROUND_CATALOG[311];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 312',()=>{const r=ROUND_CATALOG[312];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 313',()=>{const r=ROUND_CATALOG[313];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 314',()=>{const r=ROUND_CATALOG[314];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 315',()=>{const r=ROUND_CATALOG[315];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 316',()=>{const r=ROUND_CATALOG[316];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 317',()=>{const r=ROUND_CATALOG[317];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 318',()=>{const r=ROUND_CATALOG[318];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 319',()=>{const r=ROUND_CATALOG[319];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 320',()=>{const r=ROUND_CATALOG[320];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 321',()=>{const r=ROUND_CATALOG[321];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 322',()=>{const r=ROUND_CATALOG[322];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 323',()=>{const r=ROUND_CATALOG[323];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 324',()=>{const r=ROUND_CATALOG[324];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 325',()=>{const r=ROUND_CATALOG[325];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 326',()=>{const r=ROUND_CATALOG[326];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 327',()=>{const r=ROUND_CATALOG[327];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 328',()=>{const r=ROUND_CATALOG[328];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 329',()=>{const r=ROUND_CATALOG[329];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 330',()=>{const r=ROUND_CATALOG[330];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 331',()=>{const r=ROUND_CATALOG[331];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 332',()=>{const r=ROUND_CATALOG[332];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 333',()=>{const r=ROUND_CATALOG[333];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 334',()=>{const r=ROUND_CATALOG[334];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 335',()=>{const r=ROUND_CATALOG[335];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 336',()=>{const r=ROUND_CATALOG[336];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 337',()=>{const r=ROUND_CATALOG[337];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 338',()=>{const r=ROUND_CATALOG[338];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 339',()=>{const r=ROUND_CATALOG[339];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 340',()=>{const r=ROUND_CATALOG[340];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 341',()=>{const r=ROUND_CATALOG[341];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 342',()=>{const r=ROUND_CATALOG[342];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 343',()=>{const r=ROUND_CATALOG[343];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 344',()=>{const r=ROUND_CATALOG[344];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 345',()=>{const r=ROUND_CATALOG[345];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 346',()=>{const r=ROUND_CATALOG[346];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 347',()=>{const r=ROUND_CATALOG[347];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 348',()=>{const r=ROUND_CATALOG[348];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 349',()=>{const r=ROUND_CATALOG[349];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 350',()=>{const r=ROUND_CATALOG[350];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 351',()=>{const r=ROUND_CATALOG[351];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 352',()=>{const r=ROUND_CATALOG[352];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 353',()=>{const r=ROUND_CATALOG[353];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 354',()=>{const r=ROUND_CATALOG[354];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 355',()=>{const r=ROUND_CATALOG[355];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 356',()=>{const r=ROUND_CATALOG[356];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 357',()=>{const r=ROUND_CATALOG[357];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 358',()=>{const r=ROUND_CATALOG[358];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 359',()=>{const r=ROUND_CATALOG[359];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 360',()=>{const r=ROUND_CATALOG[360];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 361',()=>{const r=ROUND_CATALOG[361];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 362',()=>{const r=ROUND_CATALOG[362];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 363',()=>{const r=ROUND_CATALOG[363];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 364',()=>{const r=ROUND_CATALOG[364];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 365',()=>{const r=ROUND_CATALOG[365];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 366',()=>{const r=ROUND_CATALOG[366];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 367',()=>{const r=ROUND_CATALOG[367];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 368',()=>{const r=ROUND_CATALOG[368];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 369',()=>{const r=ROUND_CATALOG[369];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 370',()=>{const r=ROUND_CATALOG[370];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 371',()=>{const r=ROUND_CATALOG[371];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 372',()=>{const r=ROUND_CATALOG[372];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 373',()=>{const r=ROUND_CATALOG[373];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 374',()=>{const r=ROUND_CATALOG[374];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 375',()=>{const r=ROUND_CATALOG[375];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 376',()=>{const r=ROUND_CATALOG[376];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 377',()=>{const r=ROUND_CATALOG[377];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 378',()=>{const r=ROUND_CATALOG[378];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 379',()=>{const r=ROUND_CATALOG[379];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 380',()=>{const r=ROUND_CATALOG[380];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 381',()=>{const r=ROUND_CATALOG[381];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 382',()=>{const r=ROUND_CATALOG[382];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 383',()=>{const r=ROUND_CATALOG[383];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 384',()=>{const r=ROUND_CATALOG[384];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 385',()=>{const r=ROUND_CATALOG[385];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 386',()=>{const r=ROUND_CATALOG[386];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 387',()=>{const r=ROUND_CATALOG[387];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 388',()=>{const r=ROUND_CATALOG[388];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 389',()=>{const r=ROUND_CATALOG[389];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 390',()=>{const r=ROUND_CATALOG[390];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 391',()=>{const r=ROUND_CATALOG[391];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 392',()=>{const r=ROUND_CATALOG[392];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 393',()=>{const r=ROUND_CATALOG[393];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 394',()=>{const r=ROUND_CATALOG[394];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 395',()=>{const r=ROUND_CATALOG[395];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 396',()=>{const r=ROUND_CATALOG[396];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 397',()=>{const r=ROUND_CATALOG[397];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 398',()=>{const r=ROUND_CATALOG[398];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 399',()=>{const r=ROUND_CATALOG[399];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 400',()=>{const r=ROUND_CATALOG[400];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 401',()=>{const r=ROUND_CATALOG[401];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 402',()=>{const r=ROUND_CATALOG[402];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 403',()=>{const r=ROUND_CATALOG[403];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 404',()=>{const r=ROUND_CATALOG[404];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 405',()=>{const r=ROUND_CATALOG[405];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 406',()=>{const r=ROUND_CATALOG[406];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 407',()=>{const r=ROUND_CATALOG[407];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 408',()=>{const r=ROUND_CATALOG[408];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 409',()=>{const r=ROUND_CATALOG[409];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 410',()=>{const r=ROUND_CATALOG[410];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 411',()=>{const r=ROUND_CATALOG[411];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 412',()=>{const r=ROUND_CATALOG[412];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 413',()=>{const r=ROUND_CATALOG[413];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 414',()=>{const r=ROUND_CATALOG[414];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 415',()=>{const r=ROUND_CATALOG[415];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 416',()=>{const r=ROUND_CATALOG[416];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 417',()=>{const r=ROUND_CATALOG[417];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 418',()=>{const r=ROUND_CATALOG[418];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 419',()=>{const r=ROUND_CATALOG[419];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 420',()=>{const r=ROUND_CATALOG[420];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 421',()=>{const r=ROUND_CATALOG[421];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 422',()=>{const r=ROUND_CATALOG[422];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 423',()=>{const r=ROUND_CATALOG[423];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 424',()=>{const r=ROUND_CATALOG[424];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 425',()=>{const r=ROUND_CATALOG[425];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 426',()=>{const r=ROUND_CATALOG[426];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 427',()=>{const r=ROUND_CATALOG[427];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 428',()=>{const r=ROUND_CATALOG[428];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 429',()=>{const r=ROUND_CATALOG[429];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 430',()=>{const r=ROUND_CATALOG[430];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 431',()=>{const r=ROUND_CATALOG[431];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 432',()=>{const r=ROUND_CATALOG[432];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 433',()=>{const r=ROUND_CATALOG[433];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 434',()=>{const r=ROUND_CATALOG[434];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 435',()=>{const r=ROUND_CATALOG[435];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 436',()=>{const r=ROUND_CATALOG[436];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 437',()=>{const r=ROUND_CATALOG[437];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 438',()=>{const r=ROUND_CATALOG[438];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 439',()=>{const r=ROUND_CATALOG[439];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 440',()=>{const r=ROUND_CATALOG[440];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 441',()=>{const r=ROUND_CATALOG[441];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 442',()=>{const r=ROUND_CATALOG[442];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 443',()=>{const r=ROUND_CATALOG[443];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 444',()=>{const r=ROUND_CATALOG[444];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 445',()=>{const r=ROUND_CATALOG[445];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 446',()=>{const r=ROUND_CATALOG[446];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 447',()=>{const r=ROUND_CATALOG[447];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 448',()=>{const r=ROUND_CATALOG[448];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 449',()=>{const r=ROUND_CATALOG[449];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 450',()=>{const r=ROUND_CATALOG[450];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 451',()=>{const r=ROUND_CATALOG[451];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 452',()=>{const r=ROUND_CATALOG[452];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 453',()=>{const r=ROUND_CATALOG[453];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 454',()=>{const r=ROUND_CATALOG[454];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 455',()=>{const r=ROUND_CATALOG[455];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 456',()=>{const r=ROUND_CATALOG[456];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 457',()=>{const r=ROUND_CATALOG[457];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 458',()=>{const r=ROUND_CATALOG[458];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 459',()=>{const r=ROUND_CATALOG[459];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 460',()=>{const r=ROUND_CATALOG[460];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 461',()=>{const r=ROUND_CATALOG[461];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 462',()=>{const r=ROUND_CATALOG[462];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 463',()=>{const r=ROUND_CATALOG[463];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 464',()=>{const r=ROUND_CATALOG[464];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 465',()=>{const r=ROUND_CATALOG[465];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 466',()=>{const r=ROUND_CATALOG[466];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 467',()=>{const r=ROUND_CATALOG[467];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 468',()=>{const r=ROUND_CATALOG[468];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 469',()=>{const r=ROUND_CATALOG[469];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 470',()=>{const r=ROUND_CATALOG[470];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 471',()=>{const r=ROUND_CATALOG[471];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 472',()=>{const r=ROUND_CATALOG[472];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 473',()=>{const r=ROUND_CATALOG[473];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 474',()=>{const r=ROUND_CATALOG[474];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 475',()=>{const r=ROUND_CATALOG[475];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 476',()=>{const r=ROUND_CATALOG[476];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 477',()=>{const r=ROUND_CATALOG[477];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 478',()=>{const r=ROUND_CATALOG[478];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 479',()=>{const r=ROUND_CATALOG[479];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 480',()=>{const r=ROUND_CATALOG[480];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 481',()=>{const r=ROUND_CATALOG[481];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 482',()=>{const r=ROUND_CATALOG[482];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 483',()=>{const r=ROUND_CATALOG[483];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 484',()=>{const r=ROUND_CATALOG[484];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 485',()=>{const r=ROUND_CATALOG[485];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 486',()=>{const r=ROUND_CATALOG[486];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 487',()=>{const r=ROUND_CATALOG[487];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 488',()=>{const r=ROUND_CATALOG[488];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 489',()=>{const r=ROUND_CATALOG[489];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 490',()=>{const r=ROUND_CATALOG[490];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 491',()=>{const r=ROUND_CATALOG[491];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 492',()=>{const r=ROUND_CATALOG[492];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 493',()=>{const r=ROUND_CATALOG[493];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 494',()=>{const r=ROUND_CATALOG[494];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 495',()=>{const r=ROUND_CATALOG[495];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 496',()=>{const r=ROUND_CATALOG[496];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 497',()=>{const r=ROUND_CATALOG[497];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 498',()=>{const r=ROUND_CATALOG[498];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 499',()=>{const r=ROUND_CATALOG[499];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('catalog round 500',()=>{const r=ROUND_CATALOG[500];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 501',()=>{const r=ROUND_CATALOG_EXTENDED[501];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 502',()=>{const r=ROUND_CATALOG_EXTENDED[502];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 503',()=>{const r=ROUND_CATALOG_EXTENDED[503];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 504',()=>{const r=ROUND_CATALOG_EXTENDED[504];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 505',()=>{const r=ROUND_CATALOG_EXTENDED[505];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 506',()=>{const r=ROUND_CATALOG_EXTENDED[506];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 507',()=>{const r=ROUND_CATALOG_EXTENDED[507];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 508',()=>{const r=ROUND_CATALOG_EXTENDED[508];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 509',()=>{const r=ROUND_CATALOG_EXTENDED[509];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 510',()=>{const r=ROUND_CATALOG_EXTENDED[510];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 511',()=>{const r=ROUND_CATALOG_EXTENDED[511];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 512',()=>{const r=ROUND_CATALOG_EXTENDED[512];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 513',()=>{const r=ROUND_CATALOG_EXTENDED[513];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 514',()=>{const r=ROUND_CATALOG_EXTENDED[514];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 515',()=>{const r=ROUND_CATALOG_EXTENDED[515];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 516',()=>{const r=ROUND_CATALOG_EXTENDED[516];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 517',()=>{const r=ROUND_CATALOG_EXTENDED[517];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 518',()=>{const r=ROUND_CATALOG_EXTENDED[518];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 519',()=>{const r=ROUND_CATALOG_EXTENDED[519];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 520',()=>{const r=ROUND_CATALOG_EXTENDED[520];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 521',()=>{const r=ROUND_CATALOG_EXTENDED[521];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 522',()=>{const r=ROUND_CATALOG_EXTENDED[522];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 523',()=>{const r=ROUND_CATALOG_EXTENDED[523];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 524',()=>{const r=ROUND_CATALOG_EXTENDED[524];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 525',()=>{const r=ROUND_CATALOG_EXTENDED[525];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 526',()=>{const r=ROUND_CATALOG_EXTENDED[526];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 527',()=>{const r=ROUND_CATALOG_EXTENDED[527];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 528',()=>{const r=ROUND_CATALOG_EXTENDED[528];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 529',()=>{const r=ROUND_CATALOG_EXTENDED[529];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 530',()=>{const r=ROUND_CATALOG_EXTENDED[530];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 531',()=>{const r=ROUND_CATALOG_EXTENDED[531];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 532',()=>{const r=ROUND_CATALOG_EXTENDED[532];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 533',()=>{const r=ROUND_CATALOG_EXTENDED[533];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 534',()=>{const r=ROUND_CATALOG_EXTENDED[534];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 535',()=>{const r=ROUND_CATALOG_EXTENDED[535];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 536',()=>{const r=ROUND_CATALOG_EXTENDED[536];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 537',()=>{const r=ROUND_CATALOG_EXTENDED[537];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 538',()=>{const r=ROUND_CATALOG_EXTENDED[538];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 539',()=>{const r=ROUND_CATALOG_EXTENDED[539];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 540',()=>{const r=ROUND_CATALOG_EXTENDED[540];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 541',()=>{const r=ROUND_CATALOG_EXTENDED[541];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 542',()=>{const r=ROUND_CATALOG_EXTENDED[542];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 543',()=>{const r=ROUND_CATALOG_EXTENDED[543];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 544',()=>{const r=ROUND_CATALOG_EXTENDED[544];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 545',()=>{const r=ROUND_CATALOG_EXTENDED[545];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 546',()=>{const r=ROUND_CATALOG_EXTENDED[546];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 547',()=>{const r=ROUND_CATALOG_EXTENDED[547];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 548',()=>{const r=ROUND_CATALOG_EXTENDED[548];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 549',()=>{const r=ROUND_CATALOG_EXTENDED[549];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 550',()=>{const r=ROUND_CATALOG_EXTENDED[550];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 551',()=>{const r=ROUND_CATALOG_EXTENDED[551];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 552',()=>{const r=ROUND_CATALOG_EXTENDED[552];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 553',()=>{const r=ROUND_CATALOG_EXTENDED[553];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 554',()=>{const r=ROUND_CATALOG_EXTENDED[554];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 555',()=>{const r=ROUND_CATALOG_EXTENDED[555];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 556',()=>{const r=ROUND_CATALOG_EXTENDED[556];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 557',()=>{const r=ROUND_CATALOG_EXTENDED[557];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 558',()=>{const r=ROUND_CATALOG_EXTENDED[558];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 559',()=>{const r=ROUND_CATALOG_EXTENDED[559];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 560',()=>{const r=ROUND_CATALOG_EXTENDED[560];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 561',()=>{const r=ROUND_CATALOG_EXTENDED[561];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 562',()=>{const r=ROUND_CATALOG_EXTENDED[562];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 563',()=>{const r=ROUND_CATALOG_EXTENDED[563];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 564',()=>{const r=ROUND_CATALOG_EXTENDED[564];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 565',()=>{const r=ROUND_CATALOG_EXTENDED[565];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 566',()=>{const r=ROUND_CATALOG_EXTENDED[566];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 567',()=>{const r=ROUND_CATALOG_EXTENDED[567];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 568',()=>{const r=ROUND_CATALOG_EXTENDED[568];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 569',()=>{const r=ROUND_CATALOG_EXTENDED[569];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 570',()=>{const r=ROUND_CATALOG_EXTENDED[570];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 571',()=>{const r=ROUND_CATALOG_EXTENDED[571];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 572',()=>{const r=ROUND_CATALOG_EXTENDED[572];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 573',()=>{const r=ROUND_CATALOG_EXTENDED[573];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 574',()=>{const r=ROUND_CATALOG_EXTENDED[574];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 575',()=>{const r=ROUND_CATALOG_EXTENDED[575];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 576',()=>{const r=ROUND_CATALOG_EXTENDED[576];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 577',()=>{const r=ROUND_CATALOG_EXTENDED[577];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 578',()=>{const r=ROUND_CATALOG_EXTENDED[578];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 579',()=>{const r=ROUND_CATALOG_EXTENDED[579];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 580',()=>{const r=ROUND_CATALOG_EXTENDED[580];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 581',()=>{const r=ROUND_CATALOG_EXTENDED[581];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 582',()=>{const r=ROUND_CATALOG_EXTENDED[582];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 583',()=>{const r=ROUND_CATALOG_EXTENDED[583];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 584',()=>{const r=ROUND_CATALOG_EXTENDED[584];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 585',()=>{const r=ROUND_CATALOG_EXTENDED[585];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 586',()=>{const r=ROUND_CATALOG_EXTENDED[586];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 587',()=>{const r=ROUND_CATALOG_EXTENDED[587];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 588',()=>{const r=ROUND_CATALOG_EXTENDED[588];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 589',()=>{const r=ROUND_CATALOG_EXTENDED[589];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 590',()=>{const r=ROUND_CATALOG_EXTENDED[590];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 591',()=>{const r=ROUND_CATALOG_EXTENDED[591];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 592',()=>{const r=ROUND_CATALOG_EXTENDED[592];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 593',()=>{const r=ROUND_CATALOG_EXTENDED[593];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 594',()=>{const r=ROUND_CATALOG_EXTENDED[594];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 595',()=>{const r=ROUND_CATALOG_EXTENDED[595];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 596',()=>{const r=ROUND_CATALOG_EXTENDED[596];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 597',()=>{const r=ROUND_CATALOG_EXTENDED[597];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 598',()=>{const r=ROUND_CATALOG_EXTENDED[598];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 599',()=>{const r=ROUND_CATALOG_EXTENDED[599];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 600',()=>{const r=ROUND_CATALOG_EXTENDED[600];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 601',()=>{const r=ROUND_CATALOG_EXTENDED[601];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 602',()=>{const r=ROUND_CATALOG_EXTENDED[602];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 603',()=>{const r=ROUND_CATALOG_EXTENDED[603];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 604',()=>{const r=ROUND_CATALOG_EXTENDED[604];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 605',()=>{const r=ROUND_CATALOG_EXTENDED[605];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 606',()=>{const r=ROUND_CATALOG_EXTENDED[606];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 607',()=>{const r=ROUND_CATALOG_EXTENDED[607];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 608',()=>{const r=ROUND_CATALOG_EXTENDED[608];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 609',()=>{const r=ROUND_CATALOG_EXTENDED[609];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 610',()=>{const r=ROUND_CATALOG_EXTENDED[610];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 611',()=>{const r=ROUND_CATALOG_EXTENDED[611];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 612',()=>{const r=ROUND_CATALOG_EXTENDED[612];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 613',()=>{const r=ROUND_CATALOG_EXTENDED[613];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 614',()=>{const r=ROUND_CATALOG_EXTENDED[614];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 615',()=>{const r=ROUND_CATALOG_EXTENDED[615];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 616',()=>{const r=ROUND_CATALOG_EXTENDED[616];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 617',()=>{const r=ROUND_CATALOG_EXTENDED[617];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 618',()=>{const r=ROUND_CATALOG_EXTENDED[618];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 619',()=>{const r=ROUND_CATALOG_EXTENDED[619];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 620',()=>{const r=ROUND_CATALOG_EXTENDED[620];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 621',()=>{const r=ROUND_CATALOG_EXTENDED[621];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 622',()=>{const r=ROUND_CATALOG_EXTENDED[622];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 623',()=>{const r=ROUND_CATALOG_EXTENDED[623];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 624',()=>{const r=ROUND_CATALOG_EXTENDED[624];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 625',()=>{const r=ROUND_CATALOG_EXTENDED[625];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 626',()=>{const r=ROUND_CATALOG_EXTENDED[626];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 627',()=>{const r=ROUND_CATALOG_EXTENDED[627];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 628',()=>{const r=ROUND_CATALOG_EXTENDED[628];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 629',()=>{const r=ROUND_CATALOG_EXTENDED[629];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 630',()=>{const r=ROUND_CATALOG_EXTENDED[630];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 631',()=>{const r=ROUND_CATALOG_EXTENDED[631];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 632',()=>{const r=ROUND_CATALOG_EXTENDED[632];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 633',()=>{const r=ROUND_CATALOG_EXTENDED[633];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 634',()=>{const r=ROUND_CATALOG_EXTENDED[634];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 635',()=>{const r=ROUND_CATALOG_EXTENDED[635];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 636',()=>{const r=ROUND_CATALOG_EXTENDED[636];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 637',()=>{const r=ROUND_CATALOG_EXTENDED[637];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 638',()=>{const r=ROUND_CATALOG_EXTENDED[638];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 639',()=>{const r=ROUND_CATALOG_EXTENDED[639];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 640',()=>{const r=ROUND_CATALOG_EXTENDED[640];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 641',()=>{const r=ROUND_CATALOG_EXTENDED[641];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 642',()=>{const r=ROUND_CATALOG_EXTENDED[642];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 643',()=>{const r=ROUND_CATALOG_EXTENDED[643];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 644',()=>{const r=ROUND_CATALOG_EXTENDED[644];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 645',()=>{const r=ROUND_CATALOG_EXTENDED[645];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 646',()=>{const r=ROUND_CATALOG_EXTENDED[646];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 647',()=>{const r=ROUND_CATALOG_EXTENDED[647];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 648',()=>{const r=ROUND_CATALOG_EXTENDED[648];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 649',()=>{const r=ROUND_CATALOG_EXTENDED[649];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 650',()=>{const r=ROUND_CATALOG_EXTENDED[650];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 651',()=>{const r=ROUND_CATALOG_EXTENDED[651];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 652',()=>{const r=ROUND_CATALOG_EXTENDED[652];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 653',()=>{const r=ROUND_CATALOG_EXTENDED[653];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 654',()=>{const r=ROUND_CATALOG_EXTENDED[654];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 655',()=>{const r=ROUND_CATALOG_EXTENDED[655];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 656',()=>{const r=ROUND_CATALOG_EXTENDED[656];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 657',()=>{const r=ROUND_CATALOG_EXTENDED[657];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 658',()=>{const r=ROUND_CATALOG_EXTENDED[658];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 659',()=>{const r=ROUND_CATALOG_EXTENDED[659];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 660',()=>{const r=ROUND_CATALOG_EXTENDED[660];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 661',()=>{const r=ROUND_CATALOG_EXTENDED[661];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 662',()=>{const r=ROUND_CATALOG_EXTENDED[662];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 663',()=>{const r=ROUND_CATALOG_EXTENDED[663];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 664',()=>{const r=ROUND_CATALOG_EXTENDED[664];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 665',()=>{const r=ROUND_CATALOG_EXTENDED[665];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 666',()=>{const r=ROUND_CATALOG_EXTENDED[666];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 667',()=>{const r=ROUND_CATALOG_EXTENDED[667];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 668',()=>{const r=ROUND_CATALOG_EXTENDED[668];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 669',()=>{const r=ROUND_CATALOG_EXTENDED[669];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 670',()=>{const r=ROUND_CATALOG_EXTENDED[670];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 671',()=>{const r=ROUND_CATALOG_EXTENDED[671];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 672',()=>{const r=ROUND_CATALOG_EXTENDED[672];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 673',()=>{const r=ROUND_CATALOG_EXTENDED[673];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 674',()=>{const r=ROUND_CATALOG_EXTENDED[674];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 675',()=>{const r=ROUND_CATALOG_EXTENDED[675];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 676',()=>{const r=ROUND_CATALOG_EXTENDED[676];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 677',()=>{const r=ROUND_CATALOG_EXTENDED[677];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 678',()=>{const r=ROUND_CATALOG_EXTENDED[678];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 679',()=>{const r=ROUND_CATALOG_EXTENDED[679];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 680',()=>{const r=ROUND_CATALOG_EXTENDED[680];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 681',()=>{const r=ROUND_CATALOG_EXTENDED[681];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 682',()=>{const r=ROUND_CATALOG_EXTENDED[682];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 683',()=>{const r=ROUND_CATALOG_EXTENDED[683];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 684',()=>{const r=ROUND_CATALOG_EXTENDED[684];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 685',()=>{const r=ROUND_CATALOG_EXTENDED[685];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 686',()=>{const r=ROUND_CATALOG_EXTENDED[686];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 687',()=>{const r=ROUND_CATALOG_EXTENDED[687];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 688',()=>{const r=ROUND_CATALOG_EXTENDED[688];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 689',()=>{const r=ROUND_CATALOG_EXTENDED[689];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 690',()=>{const r=ROUND_CATALOG_EXTENDED[690];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 691',()=>{const r=ROUND_CATALOG_EXTENDED[691];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 692',()=>{const r=ROUND_CATALOG_EXTENDED[692];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 693',()=>{const r=ROUND_CATALOG_EXTENDED[693];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 694',()=>{const r=ROUND_CATALOG_EXTENDED[694];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 695',()=>{const r=ROUND_CATALOG_EXTENDED[695];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 696',()=>{const r=ROUND_CATALOG_EXTENDED[696];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 697',()=>{const r=ROUND_CATALOG_EXTENDED[697];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 698',()=>{const r=ROUND_CATALOG_EXTENDED[698];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 699',()=>{const r=ROUND_CATALOG_EXTENDED[699];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 700',()=>{const r=ROUND_CATALOG_EXTENDED[700];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 701',()=>{const r=ROUND_CATALOG_EXTENDED[701];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 702',()=>{const r=ROUND_CATALOG_EXTENDED[702];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 703',()=>{const r=ROUND_CATALOG_EXTENDED[703];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 704',()=>{const r=ROUND_CATALOG_EXTENDED[704];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 705',()=>{const r=ROUND_CATALOG_EXTENDED[705];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 706',()=>{const r=ROUND_CATALOG_EXTENDED[706];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 707',()=>{const r=ROUND_CATALOG_EXTENDED[707];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 708',()=>{const r=ROUND_CATALOG_EXTENDED[708];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 709',()=>{const r=ROUND_CATALOG_EXTENDED[709];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 710',()=>{const r=ROUND_CATALOG_EXTENDED[710];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 711',()=>{const r=ROUND_CATALOG_EXTENDED[711];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 712',()=>{const r=ROUND_CATALOG_EXTENDED[712];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 713',()=>{const r=ROUND_CATALOG_EXTENDED[713];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 714',()=>{const r=ROUND_CATALOG_EXTENDED[714];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 715',()=>{const r=ROUND_CATALOG_EXTENDED[715];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 716',()=>{const r=ROUND_CATALOG_EXTENDED[716];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 717',()=>{const r=ROUND_CATALOG_EXTENDED[717];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 718',()=>{const r=ROUND_CATALOG_EXTENDED[718];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 719',()=>{const r=ROUND_CATALOG_EXTENDED[719];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 720',()=>{const r=ROUND_CATALOG_EXTENDED[720];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 721',()=>{const r=ROUND_CATALOG_EXTENDED[721];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 722',()=>{const r=ROUND_CATALOG_EXTENDED[722];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 723',()=>{const r=ROUND_CATALOG_EXTENDED[723];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 724',()=>{const r=ROUND_CATALOG_EXTENDED[724];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 725',()=>{const r=ROUND_CATALOG_EXTENDED[725];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 726',()=>{const r=ROUND_CATALOG_EXTENDED[726];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 727',()=>{const r=ROUND_CATALOG_EXTENDED[727];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 728',()=>{const r=ROUND_CATALOG_EXTENDED[728];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 729',()=>{const r=ROUND_CATALOG_EXTENDED[729];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 730',()=>{const r=ROUND_CATALOG_EXTENDED[730];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 731',()=>{const r=ROUND_CATALOG_EXTENDED[731];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 732',()=>{const r=ROUND_CATALOG_EXTENDED[732];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 733',()=>{const r=ROUND_CATALOG_EXTENDED[733];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 734',()=>{const r=ROUND_CATALOG_EXTENDED[734];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 735',()=>{const r=ROUND_CATALOG_EXTENDED[735];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 736',()=>{const r=ROUND_CATALOG_EXTENDED[736];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 737',()=>{const r=ROUND_CATALOG_EXTENDED[737];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 738',()=>{const r=ROUND_CATALOG_EXTENDED[738];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 739',()=>{const r=ROUND_CATALOG_EXTENDED[739];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 740',()=>{const r=ROUND_CATALOG_EXTENDED[740];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 741',()=>{const r=ROUND_CATALOG_EXTENDED[741];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 742',()=>{const r=ROUND_CATALOG_EXTENDED[742];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 743',()=>{const r=ROUND_CATALOG_EXTENDED[743];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 744',()=>{const r=ROUND_CATALOG_EXTENDED[744];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 745',()=>{const r=ROUND_CATALOG_EXTENDED[745];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 746',()=>{const r=ROUND_CATALOG_EXTENDED[746];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 747',()=>{const r=ROUND_CATALOG_EXTENDED[747];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 748',()=>{const r=ROUND_CATALOG_EXTENDED[748];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 749',()=>{const r=ROUND_CATALOG_EXTENDED[749];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 750',()=>{const r=ROUND_CATALOG_EXTENDED[750];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 751',()=>{const r=ROUND_CATALOG_EXTENDED[751];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 752',()=>{const r=ROUND_CATALOG_EXTENDED[752];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 753',()=>{const r=ROUND_CATALOG_EXTENDED[753];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 754',()=>{const r=ROUND_CATALOG_EXTENDED[754];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 755',()=>{const r=ROUND_CATALOG_EXTENDED[755];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 756',()=>{const r=ROUND_CATALOG_EXTENDED[756];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 757',()=>{const r=ROUND_CATALOG_EXTENDED[757];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 758',()=>{const r=ROUND_CATALOG_EXTENDED[758];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 759',()=>{const r=ROUND_CATALOG_EXTENDED[759];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 760',()=>{const r=ROUND_CATALOG_EXTENDED[760];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 761',()=>{const r=ROUND_CATALOG_EXTENDED[761];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 762',()=>{const r=ROUND_CATALOG_EXTENDED[762];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 763',()=>{const r=ROUND_CATALOG_EXTENDED[763];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 764',()=>{const r=ROUND_CATALOG_EXTENDED[764];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 765',()=>{const r=ROUND_CATALOG_EXTENDED[765];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 766',()=>{const r=ROUND_CATALOG_EXTENDED[766];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 767',()=>{const r=ROUND_CATALOG_EXTENDED[767];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 768',()=>{const r=ROUND_CATALOG_EXTENDED[768];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 769',()=>{const r=ROUND_CATALOG_EXTENDED[769];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 770',()=>{const r=ROUND_CATALOG_EXTENDED[770];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 771',()=>{const r=ROUND_CATALOG_EXTENDED[771];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 772',()=>{const r=ROUND_CATALOG_EXTENDED[772];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 773',()=>{const r=ROUND_CATALOG_EXTENDED[773];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 774',()=>{const r=ROUND_CATALOG_EXTENDED[774];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 775',()=>{const r=ROUND_CATALOG_EXTENDED[775];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 776',()=>{const r=ROUND_CATALOG_EXTENDED[776];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 777',()=>{const r=ROUND_CATALOG_EXTENDED[777];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 778',()=>{const r=ROUND_CATALOG_EXTENDED[778];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 779',()=>{const r=ROUND_CATALOG_EXTENDED[779];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 780',()=>{const r=ROUND_CATALOG_EXTENDED[780];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 781',()=>{const r=ROUND_CATALOG_EXTENDED[781];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 782',()=>{const r=ROUND_CATALOG_EXTENDED[782];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 783',()=>{const r=ROUND_CATALOG_EXTENDED[783];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 784',()=>{const r=ROUND_CATALOG_EXTENDED[784];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 785',()=>{const r=ROUND_CATALOG_EXTENDED[785];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 786',()=>{const r=ROUND_CATALOG_EXTENDED[786];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 787',()=>{const r=ROUND_CATALOG_EXTENDED[787];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 788',()=>{const r=ROUND_CATALOG_EXTENDED[788];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 789',()=>{const r=ROUND_CATALOG_EXTENDED[789];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 790',()=>{const r=ROUND_CATALOG_EXTENDED[790];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 791',()=>{const r=ROUND_CATALOG_EXTENDED[791];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 792',()=>{const r=ROUND_CATALOG_EXTENDED[792];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 793',()=>{const r=ROUND_CATALOG_EXTENDED[793];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 794',()=>{const r=ROUND_CATALOG_EXTENDED[794];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 795',()=>{const r=ROUND_CATALOG_EXTENDED[795];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 796',()=>{const r=ROUND_CATALOG_EXTENDED[796];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 797',()=>{const r=ROUND_CATALOG_EXTENDED[797];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 798',()=>{const r=ROUND_CATALOG_EXTENDED[798];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 799',()=>{const r=ROUND_CATALOG_EXTENDED[799];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 800',()=>{const r=ROUND_CATALOG_EXTENDED[800];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 801',()=>{const r=ROUND_CATALOG_EXTENDED[801];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 802',()=>{const r=ROUND_CATALOG_EXTENDED[802];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 803',()=>{const r=ROUND_CATALOG_EXTENDED[803];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 804',()=>{const r=ROUND_CATALOG_EXTENDED[804];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 805',()=>{const r=ROUND_CATALOG_EXTENDED[805];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 806',()=>{const r=ROUND_CATALOG_EXTENDED[806];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 807',()=>{const r=ROUND_CATALOG_EXTENDED[807];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 808',()=>{const r=ROUND_CATALOG_EXTENDED[808];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 809',()=>{const r=ROUND_CATALOG_EXTENDED[809];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 810',()=>{const r=ROUND_CATALOG_EXTENDED[810];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 811',()=>{const r=ROUND_CATALOG_EXTENDED[811];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 812',()=>{const r=ROUND_CATALOG_EXTENDED[812];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 813',()=>{const r=ROUND_CATALOG_EXTENDED[813];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 814',()=>{const r=ROUND_CATALOG_EXTENDED[814];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 815',()=>{const r=ROUND_CATALOG_EXTENDED[815];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 816',()=>{const r=ROUND_CATALOG_EXTENDED[816];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 817',()=>{const r=ROUND_CATALOG_EXTENDED[817];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 818',()=>{const r=ROUND_CATALOG_EXTENDED[818];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 819',()=>{const r=ROUND_CATALOG_EXTENDED[819];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 820',()=>{const r=ROUND_CATALOG_EXTENDED[820];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 821',()=>{const r=ROUND_CATALOG_EXTENDED[821];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 822',()=>{const r=ROUND_CATALOG_EXTENDED[822];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 823',()=>{const r=ROUND_CATALOG_EXTENDED[823];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 824',()=>{const r=ROUND_CATALOG_EXTENDED[824];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 825',()=>{const r=ROUND_CATALOG_EXTENDED[825];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 826',()=>{const r=ROUND_CATALOG_EXTENDED[826];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 827',()=>{const r=ROUND_CATALOG_EXTENDED[827];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 828',()=>{const r=ROUND_CATALOG_EXTENDED[828];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 829',()=>{const r=ROUND_CATALOG_EXTENDED[829];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 830',()=>{const r=ROUND_CATALOG_EXTENDED[830];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 831',()=>{const r=ROUND_CATALOG_EXTENDED[831];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 832',()=>{const r=ROUND_CATALOG_EXTENDED[832];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 833',()=>{const r=ROUND_CATALOG_EXTENDED[833];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 834',()=>{const r=ROUND_CATALOG_EXTENDED[834];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 835',()=>{const r=ROUND_CATALOG_EXTENDED[835];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 836',()=>{const r=ROUND_CATALOG_EXTENDED[836];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 837',()=>{const r=ROUND_CATALOG_EXTENDED[837];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 838',()=>{const r=ROUND_CATALOG_EXTENDED[838];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 839',()=>{const r=ROUND_CATALOG_EXTENDED[839];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 840',()=>{const r=ROUND_CATALOG_EXTENDED[840];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 841',()=>{const r=ROUND_CATALOG_EXTENDED[841];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 842',()=>{const r=ROUND_CATALOG_EXTENDED[842];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 843',()=>{const r=ROUND_CATALOG_EXTENDED[843];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 844',()=>{const r=ROUND_CATALOG_EXTENDED[844];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 845',()=>{const r=ROUND_CATALOG_EXTENDED[845];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 846',()=>{const r=ROUND_CATALOG_EXTENDED[846];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 847',()=>{const r=ROUND_CATALOG_EXTENDED[847];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 848',()=>{const r=ROUND_CATALOG_EXTENDED[848];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 849',()=>{const r=ROUND_CATALOG_EXTENDED[849];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 850',()=>{const r=ROUND_CATALOG_EXTENDED[850];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 851',()=>{const r=ROUND_CATALOG_EXTENDED[851];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 852',()=>{const r=ROUND_CATALOG_EXTENDED[852];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 853',()=>{const r=ROUND_CATALOG_EXTENDED[853];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 854',()=>{const r=ROUND_CATALOG_EXTENDED[854];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 855',()=>{const r=ROUND_CATALOG_EXTENDED[855];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 856',()=>{const r=ROUND_CATALOG_EXTENDED[856];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 857',()=>{const r=ROUND_CATALOG_EXTENDED[857];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 858',()=>{const r=ROUND_CATALOG_EXTENDED[858];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 859',()=>{const r=ROUND_CATALOG_EXTENDED[859];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 860',()=>{const r=ROUND_CATALOG_EXTENDED[860];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 861',()=>{const r=ROUND_CATALOG_EXTENDED[861];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 862',()=>{const r=ROUND_CATALOG_EXTENDED[862];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 863',()=>{const r=ROUND_CATALOG_EXTENDED[863];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 864',()=>{const r=ROUND_CATALOG_EXTENDED[864];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 865',()=>{const r=ROUND_CATALOG_EXTENDED[865];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 866',()=>{const r=ROUND_CATALOG_EXTENDED[866];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 867',()=>{const r=ROUND_CATALOG_EXTENDED[867];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 868',()=>{const r=ROUND_CATALOG_EXTENDED[868];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 869',()=>{const r=ROUND_CATALOG_EXTENDED[869];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 870',()=>{const r=ROUND_CATALOG_EXTENDED[870];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 871',()=>{const r=ROUND_CATALOG_EXTENDED[871];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 872',()=>{const r=ROUND_CATALOG_EXTENDED[872];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 873',()=>{const r=ROUND_CATALOG_EXTENDED[873];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 874',()=>{const r=ROUND_CATALOG_EXTENDED[874];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 875',()=>{const r=ROUND_CATALOG_EXTENDED[875];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 876',()=>{const r=ROUND_CATALOG_EXTENDED[876];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 877',()=>{const r=ROUND_CATALOG_EXTENDED[877];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 878',()=>{const r=ROUND_CATALOG_EXTENDED[878];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 879',()=>{const r=ROUND_CATALOG_EXTENDED[879];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 880',()=>{const r=ROUND_CATALOG_EXTENDED[880];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 881',()=>{const r=ROUND_CATALOG_EXTENDED[881];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 882',()=>{const r=ROUND_CATALOG_EXTENDED[882];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 883',()=>{const r=ROUND_CATALOG_EXTENDED[883];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 884',()=>{const r=ROUND_CATALOG_EXTENDED[884];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 885',()=>{const r=ROUND_CATALOG_EXTENDED[885];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 886',()=>{const r=ROUND_CATALOG_EXTENDED[886];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 887',()=>{const r=ROUND_CATALOG_EXTENDED[887];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 888',()=>{const r=ROUND_CATALOG_EXTENDED[888];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 889',()=>{const r=ROUND_CATALOG_EXTENDED[889];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 890',()=>{const r=ROUND_CATALOG_EXTENDED[890];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 891',()=>{const r=ROUND_CATALOG_EXTENDED[891];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 892',()=>{const r=ROUND_CATALOG_EXTENDED[892];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 893',()=>{const r=ROUND_CATALOG_EXTENDED[893];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 894',()=>{const r=ROUND_CATALOG_EXTENDED[894];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 895',()=>{const r=ROUND_CATALOG_EXTENDED[895];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 896',()=>{const r=ROUND_CATALOG_EXTENDED[896];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 897',()=>{const r=ROUND_CATALOG_EXTENDED[897];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 898',()=>{const r=ROUND_CATALOG_EXTENDED[898];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 899',()=>{const r=ROUND_CATALOG_EXTENDED[899];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 900',()=>{const r=ROUND_CATALOG_EXTENDED[900];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 901',()=>{const r=ROUND_CATALOG_EXTENDED[901];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 902',()=>{const r=ROUND_CATALOG_EXTENDED[902];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 903',()=>{const r=ROUND_CATALOG_EXTENDED[903];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 904',()=>{const r=ROUND_CATALOG_EXTENDED[904];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 905',()=>{const r=ROUND_CATALOG_EXTENDED[905];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 906',()=>{const r=ROUND_CATALOG_EXTENDED[906];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 907',()=>{const r=ROUND_CATALOG_EXTENDED[907];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 908',()=>{const r=ROUND_CATALOG_EXTENDED[908];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 909',()=>{const r=ROUND_CATALOG_EXTENDED[909];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 910',()=>{const r=ROUND_CATALOG_EXTENDED[910];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 911',()=>{const r=ROUND_CATALOG_EXTENDED[911];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 912',()=>{const r=ROUND_CATALOG_EXTENDED[912];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 913',()=>{const r=ROUND_CATALOG_EXTENDED[913];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 914',()=>{const r=ROUND_CATALOG_EXTENDED[914];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 915',()=>{const r=ROUND_CATALOG_EXTENDED[915];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 916',()=>{const r=ROUND_CATALOG_EXTENDED[916];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 917',()=>{const r=ROUND_CATALOG_EXTENDED[917];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 918',()=>{const r=ROUND_CATALOG_EXTENDED[918];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 919',()=>{const r=ROUND_CATALOG_EXTENDED[919];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 920',()=>{const r=ROUND_CATALOG_EXTENDED[920];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 921',()=>{const r=ROUND_CATALOG_EXTENDED[921];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 922',()=>{const r=ROUND_CATALOG_EXTENDED[922];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 923',()=>{const r=ROUND_CATALOG_EXTENDED[923];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 924',()=>{const r=ROUND_CATALOG_EXTENDED[924];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 925',()=>{const r=ROUND_CATALOG_EXTENDED[925];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 926',()=>{const r=ROUND_CATALOG_EXTENDED[926];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 927',()=>{const r=ROUND_CATALOG_EXTENDED[927];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 928',()=>{const r=ROUND_CATALOG_EXTENDED[928];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 929',()=>{const r=ROUND_CATALOG_EXTENDED[929];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 930',()=>{const r=ROUND_CATALOG_EXTENDED[930];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 931',()=>{const r=ROUND_CATALOG_EXTENDED[931];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 932',()=>{const r=ROUND_CATALOG_EXTENDED[932];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 933',()=>{const r=ROUND_CATALOG_EXTENDED[933];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 934',()=>{const r=ROUND_CATALOG_EXTENDED[934];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 935',()=>{const r=ROUND_CATALOG_EXTENDED[935];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 936',()=>{const r=ROUND_CATALOG_EXTENDED[936];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 937',()=>{const r=ROUND_CATALOG_EXTENDED[937];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 938',()=>{const r=ROUND_CATALOG_EXTENDED[938];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 939',()=>{const r=ROUND_CATALOG_EXTENDED[939];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 940',()=>{const r=ROUND_CATALOG_EXTENDED[940];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 941',()=>{const r=ROUND_CATALOG_EXTENDED[941];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 942',()=>{const r=ROUND_CATALOG_EXTENDED[942];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 943',()=>{const r=ROUND_CATALOG_EXTENDED[943];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 944',()=>{const r=ROUND_CATALOG_EXTENDED[944];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 945',()=>{const r=ROUND_CATALOG_EXTENDED[945];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 946',()=>{const r=ROUND_CATALOG_EXTENDED[946];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 947',()=>{const r=ROUND_CATALOG_EXTENDED[947];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 948',()=>{const r=ROUND_CATALOG_EXTENDED[948];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 949',()=>{const r=ROUND_CATALOG_EXTENDED[949];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 950',()=>{const r=ROUND_CATALOG_EXTENDED[950];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 951',()=>{const r=ROUND_CATALOG_EXTENDED[951];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 952',()=>{const r=ROUND_CATALOG_EXTENDED[952];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 953',()=>{const r=ROUND_CATALOG_EXTENDED[953];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 954',()=>{const r=ROUND_CATALOG_EXTENDED[954];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 955',()=>{const r=ROUND_CATALOG_EXTENDED[955];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 956',()=>{const r=ROUND_CATALOG_EXTENDED[956];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 957',()=>{const r=ROUND_CATALOG_EXTENDED[957];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 958',()=>{const r=ROUND_CATALOG_EXTENDED[958];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 959',()=>{const r=ROUND_CATALOG_EXTENDED[959];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 960',()=>{const r=ROUND_CATALOG_EXTENDED[960];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 961',()=>{const r=ROUND_CATALOG_EXTENDED[961];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 962',()=>{const r=ROUND_CATALOG_EXTENDED[962];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 963',()=>{const r=ROUND_CATALOG_EXTENDED[963];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 964',()=>{const r=ROUND_CATALOG_EXTENDED[964];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 965',()=>{const r=ROUND_CATALOG_EXTENDED[965];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 966',()=>{const r=ROUND_CATALOG_EXTENDED[966];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 967',()=>{const r=ROUND_CATALOG_EXTENDED[967];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 968',()=>{const r=ROUND_CATALOG_EXTENDED[968];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 969',()=>{const r=ROUND_CATALOG_EXTENDED[969];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 970',()=>{const r=ROUND_CATALOG_EXTENDED[970];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 971',()=>{const r=ROUND_CATALOG_EXTENDED[971];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 972',()=>{const r=ROUND_CATALOG_EXTENDED[972];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 973',()=>{const r=ROUND_CATALOG_EXTENDED[973];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 974',()=>{const r=ROUND_CATALOG_EXTENDED[974];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 975',()=>{const r=ROUND_CATALOG_EXTENDED[975];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 976',()=>{const r=ROUND_CATALOG_EXTENDED[976];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 977',()=>{const r=ROUND_CATALOG_EXTENDED[977];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 978',()=>{const r=ROUND_CATALOG_EXTENDED[978];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 979',()=>{const r=ROUND_CATALOG_EXTENDED[979];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 980',()=>{const r=ROUND_CATALOG_EXTENDED[980];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 981',()=>{const r=ROUND_CATALOG_EXTENDED[981];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 982',()=>{const r=ROUND_CATALOG_EXTENDED[982];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 983',()=>{const r=ROUND_CATALOG_EXTENDED[983];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 984',()=>{const r=ROUND_CATALOG_EXTENDED[984];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 985',()=>{const r=ROUND_CATALOG_EXTENDED[985];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 986',()=>{const r=ROUND_CATALOG_EXTENDED[986];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 987',()=>{const r=ROUND_CATALOG_EXTENDED[987];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 988',()=>{const r=ROUND_CATALOG_EXTENDED[988];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 989',()=>{const r=ROUND_CATALOG_EXTENDED[989];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 990',()=>{const r=ROUND_CATALOG_EXTENDED[990];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 991',()=>{const r=ROUND_CATALOG_EXTENDED[991];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 992',()=>{const r=ROUND_CATALOG_EXTENDED[992];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 993',()=>{const r=ROUND_CATALOG_EXTENDED[993];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 994',()=>{const r=ROUND_CATALOG_EXTENDED[994];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 995',()=>{const r=ROUND_CATALOG_EXTENDED[995];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 996',()=>{const r=ROUND_CATALOG_EXTENDED[996];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 997',()=>{const r=ROUND_CATALOG_EXTENDED[997];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 998',()=>{const r=ROUND_CATALOG_EXTENDED[998];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 999',()=>{const r=ROUND_CATALOG_EXTENDED[999];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1000',()=>{const r=ROUND_CATALOG_EXTENDED[1000];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1001',()=>{const r=ROUND_CATALOG_EXTENDED[1001];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1002',()=>{const r=ROUND_CATALOG_EXTENDED[1002];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1003',()=>{const r=ROUND_CATALOG_EXTENDED[1003];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1004',()=>{const r=ROUND_CATALOG_EXTENDED[1004];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1005',()=>{const r=ROUND_CATALOG_EXTENDED[1005];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1006',()=>{const r=ROUND_CATALOG_EXTENDED[1006];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1007',()=>{const r=ROUND_CATALOG_EXTENDED[1007];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1008',()=>{const r=ROUND_CATALOG_EXTENDED[1008];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1009',()=>{const r=ROUND_CATALOG_EXTENDED[1009];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1010',()=>{const r=ROUND_CATALOG_EXTENDED[1010];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1011',()=>{const r=ROUND_CATALOG_EXTENDED[1011];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1012',()=>{const r=ROUND_CATALOG_EXTENDED[1012];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1013',()=>{const r=ROUND_CATALOG_EXTENDED[1013];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1014',()=>{const r=ROUND_CATALOG_EXTENDED[1014];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1015',()=>{const r=ROUND_CATALOG_EXTENDED[1015];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1016',()=>{const r=ROUND_CATALOG_EXTENDED[1016];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1017',()=>{const r=ROUND_CATALOG_EXTENDED[1017];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1018',()=>{const r=ROUND_CATALOG_EXTENDED[1018];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1019',()=>{const r=ROUND_CATALOG_EXTENDED[1019];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1020',()=>{const r=ROUND_CATALOG_EXTENDED[1020];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1021',()=>{const r=ROUND_CATALOG_EXTENDED[1021];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1022',()=>{const r=ROUND_CATALOG_EXTENDED[1022];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1023',()=>{const r=ROUND_CATALOG_EXTENDED[1023];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1024',()=>{const r=ROUND_CATALOG_EXTENDED[1024];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1025',()=>{const r=ROUND_CATALOG_EXTENDED[1025];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1026',()=>{const r=ROUND_CATALOG_EXTENDED[1026];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1027',()=>{const r=ROUND_CATALOG_EXTENDED[1027];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1028',()=>{const r=ROUND_CATALOG_EXTENDED[1028];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1029',()=>{const r=ROUND_CATALOG_EXTENDED[1029];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1030',()=>{const r=ROUND_CATALOG_EXTENDED[1030];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1031',()=>{const r=ROUND_CATALOG_EXTENDED[1031];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1032',()=>{const r=ROUND_CATALOG_EXTENDED[1032];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1033',()=>{const r=ROUND_CATALOG_EXTENDED[1033];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1034',()=>{const r=ROUND_CATALOG_EXTENDED[1034];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1035',()=>{const r=ROUND_CATALOG_EXTENDED[1035];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1036',()=>{const r=ROUND_CATALOG_EXTENDED[1036];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1037',()=>{const r=ROUND_CATALOG_EXTENDED[1037];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1038',()=>{const r=ROUND_CATALOG_EXTENDED[1038];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1039',()=>{const r=ROUND_CATALOG_EXTENDED[1039];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1040',()=>{const r=ROUND_CATALOG_EXTENDED[1040];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1041',()=>{const r=ROUND_CATALOG_EXTENDED[1041];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1042',()=>{const r=ROUND_CATALOG_EXTENDED[1042];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1043',()=>{const r=ROUND_CATALOG_EXTENDED[1043];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1044',()=>{const r=ROUND_CATALOG_EXTENDED[1044];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1045',()=>{const r=ROUND_CATALOG_EXTENDED[1045];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1046',()=>{const r=ROUND_CATALOG_EXTENDED[1046];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1047',()=>{const r=ROUND_CATALOG_EXTENDED[1047];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1048',()=>{const r=ROUND_CATALOG_EXTENDED[1048];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1049',()=>{const r=ROUND_CATALOG_EXTENDED[1049];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1050',()=>{const r=ROUND_CATALOG_EXTENDED[1050];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1051',()=>{const r=ROUND_CATALOG_EXTENDED[1051];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1052',()=>{const r=ROUND_CATALOG_EXTENDED[1052];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1053',()=>{const r=ROUND_CATALOG_EXTENDED[1053];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1054',()=>{const r=ROUND_CATALOG_EXTENDED[1054];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1055',()=>{const r=ROUND_CATALOG_EXTENDED[1055];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1056',()=>{const r=ROUND_CATALOG_EXTENDED[1056];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1057',()=>{const r=ROUND_CATALOG_EXTENDED[1057];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1058',()=>{const r=ROUND_CATALOG_EXTENDED[1058];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1059',()=>{const r=ROUND_CATALOG_EXTENDED[1059];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1060',()=>{const r=ROUND_CATALOG_EXTENDED[1060];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1061',()=>{const r=ROUND_CATALOG_EXTENDED[1061];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1062',()=>{const r=ROUND_CATALOG_EXTENDED[1062];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1063',()=>{const r=ROUND_CATALOG_EXTENDED[1063];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1064',()=>{const r=ROUND_CATALOG_EXTENDED[1064];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1065',()=>{const r=ROUND_CATALOG_EXTENDED[1065];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1066',()=>{const r=ROUND_CATALOG_EXTENDED[1066];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1067',()=>{const r=ROUND_CATALOG_EXTENDED[1067];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1068',()=>{const r=ROUND_CATALOG_EXTENDED[1068];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1069',()=>{const r=ROUND_CATALOG_EXTENDED[1069];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1070',()=>{const r=ROUND_CATALOG_EXTENDED[1070];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1071',()=>{const r=ROUND_CATALOG_EXTENDED[1071];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1072',()=>{const r=ROUND_CATALOG_EXTENDED[1072];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1073',()=>{const r=ROUND_CATALOG_EXTENDED[1073];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1074',()=>{const r=ROUND_CATALOG_EXTENDED[1074];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1075',()=>{const r=ROUND_CATALOG_EXTENDED[1075];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1076',()=>{const r=ROUND_CATALOG_EXTENDED[1076];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1077',()=>{const r=ROUND_CATALOG_EXTENDED[1077];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1078',()=>{const r=ROUND_CATALOG_EXTENDED[1078];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1079',()=>{const r=ROUND_CATALOG_EXTENDED[1079];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1080',()=>{const r=ROUND_CATALOG_EXTENDED[1080];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1081',()=>{const r=ROUND_CATALOG_EXTENDED[1081];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1082',()=>{const r=ROUND_CATALOG_EXTENDED[1082];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1083',()=>{const r=ROUND_CATALOG_EXTENDED[1083];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1084',()=>{const r=ROUND_CATALOG_EXTENDED[1084];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1085',()=>{const r=ROUND_CATALOG_EXTENDED[1085];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1086',()=>{const r=ROUND_CATALOG_EXTENDED[1086];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1087',()=>{const r=ROUND_CATALOG_EXTENDED[1087];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1088',()=>{const r=ROUND_CATALOG_EXTENDED[1088];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1089',()=>{const r=ROUND_CATALOG_EXTENDED[1089];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1090',()=>{const r=ROUND_CATALOG_EXTENDED[1090];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1091',()=>{const r=ROUND_CATALOG_EXTENDED[1091];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1092',()=>{const r=ROUND_CATALOG_EXTENDED[1092];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1093',()=>{const r=ROUND_CATALOG_EXTENDED[1093];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1094',()=>{const r=ROUND_CATALOG_EXTENDED[1094];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1095',()=>{const r=ROUND_CATALOG_EXTENDED[1095];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1096',()=>{const r=ROUND_CATALOG_EXTENDED[1096];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1097',()=>{const r=ROUND_CATALOG_EXTENDED[1097];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1098',()=>{const r=ROUND_CATALOG_EXTENDED[1098];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1099',()=>{const r=ROUND_CATALOG_EXTENDED[1099];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1100',()=>{const r=ROUND_CATALOG_EXTENDED[1100];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1101',()=>{const r=ROUND_CATALOG_EXTENDED[1101];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1102',()=>{const r=ROUND_CATALOG_EXTENDED[1102];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1103',()=>{const r=ROUND_CATALOG_EXTENDED[1103];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1104',()=>{const r=ROUND_CATALOG_EXTENDED[1104];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1105',()=>{const r=ROUND_CATALOG_EXTENDED[1105];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1106',()=>{const r=ROUND_CATALOG_EXTENDED[1106];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1107',()=>{const r=ROUND_CATALOG_EXTENDED[1107];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1108',()=>{const r=ROUND_CATALOG_EXTENDED[1108];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1109',()=>{const r=ROUND_CATALOG_EXTENDED[1109];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1110',()=>{const r=ROUND_CATALOG_EXTENDED[1110];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1111',()=>{const r=ROUND_CATALOG_EXTENDED[1111];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1112',()=>{const r=ROUND_CATALOG_EXTENDED[1112];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1113',()=>{const r=ROUND_CATALOG_EXTENDED[1113];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1114',()=>{const r=ROUND_CATALOG_EXTENDED[1114];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1115',()=>{const r=ROUND_CATALOG_EXTENDED[1115];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1116',()=>{const r=ROUND_CATALOG_EXTENDED[1116];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1117',()=>{const r=ROUND_CATALOG_EXTENDED[1117];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1118',()=>{const r=ROUND_CATALOG_EXTENDED[1118];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1119',()=>{const r=ROUND_CATALOG_EXTENDED[1119];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1120',()=>{const r=ROUND_CATALOG_EXTENDED[1120];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1121',()=>{const r=ROUND_CATALOG_EXTENDED[1121];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1122',()=>{const r=ROUND_CATALOG_EXTENDED[1122];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1123',()=>{const r=ROUND_CATALOG_EXTENDED[1123];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1124',()=>{const r=ROUND_CATALOG_EXTENDED[1124];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1125',()=>{const r=ROUND_CATALOG_EXTENDED[1125];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1126',()=>{const r=ROUND_CATALOG_EXTENDED[1126];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1127',()=>{const r=ROUND_CATALOG_EXTENDED[1127];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1128',()=>{const r=ROUND_CATALOG_EXTENDED[1128];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1129',()=>{const r=ROUND_CATALOG_EXTENDED[1129];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1130',()=>{const r=ROUND_CATALOG_EXTENDED[1130];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1131',()=>{const r=ROUND_CATALOG_EXTENDED[1131];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1132',()=>{const r=ROUND_CATALOG_EXTENDED[1132];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1133',()=>{const r=ROUND_CATALOG_EXTENDED[1133];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1134',()=>{const r=ROUND_CATALOG_EXTENDED[1134];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1135',()=>{const r=ROUND_CATALOG_EXTENDED[1135];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1136',()=>{const r=ROUND_CATALOG_EXTENDED[1136];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1137',()=>{const r=ROUND_CATALOG_EXTENDED[1137];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1138',()=>{const r=ROUND_CATALOG_EXTENDED[1138];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1139',()=>{const r=ROUND_CATALOG_EXTENDED[1139];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1140',()=>{const r=ROUND_CATALOG_EXTENDED[1140];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1141',()=>{const r=ROUND_CATALOG_EXTENDED[1141];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1142',()=>{const r=ROUND_CATALOG_EXTENDED[1142];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1143',()=>{const r=ROUND_CATALOG_EXTENDED[1143];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1144',()=>{const r=ROUND_CATALOG_EXTENDED[1144];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1145',()=>{const r=ROUND_CATALOG_EXTENDED[1145];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1146',()=>{const r=ROUND_CATALOG_EXTENDED[1146];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1147',()=>{const r=ROUND_CATALOG_EXTENDED[1147];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1148',()=>{const r=ROUND_CATALOG_EXTENDED[1148];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1149',()=>{const r=ROUND_CATALOG_EXTENDED[1149];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1150',()=>{const r=ROUND_CATALOG_EXTENDED[1150];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1151',()=>{const r=ROUND_CATALOG_EXTENDED[1151];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1152',()=>{const r=ROUND_CATALOG_EXTENDED[1152];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1153',()=>{const r=ROUND_CATALOG_EXTENDED[1153];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1154',()=>{const r=ROUND_CATALOG_EXTENDED[1154];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1155',()=>{const r=ROUND_CATALOG_EXTENDED[1155];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1156',()=>{const r=ROUND_CATALOG_EXTENDED[1156];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1157',()=>{const r=ROUND_CATALOG_EXTENDED[1157];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1158',()=>{const r=ROUND_CATALOG_EXTENDED[1158];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1159',()=>{const r=ROUND_CATALOG_EXTENDED[1159];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1160',()=>{const r=ROUND_CATALOG_EXTENDED[1160];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1161',()=>{const r=ROUND_CATALOG_EXTENDED[1161];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1162',()=>{const r=ROUND_CATALOG_EXTENDED[1162];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1163',()=>{const r=ROUND_CATALOG_EXTENDED[1163];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1164',()=>{const r=ROUND_CATALOG_EXTENDED[1164];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1165',()=>{const r=ROUND_CATALOG_EXTENDED[1165];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1166',()=>{const r=ROUND_CATALOG_EXTENDED[1166];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1167',()=>{const r=ROUND_CATALOG_EXTENDED[1167];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1168',()=>{const r=ROUND_CATALOG_EXTENDED[1168];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1169',()=>{const r=ROUND_CATALOG_EXTENDED[1169];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1170',()=>{const r=ROUND_CATALOG_EXTENDED[1170];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1171',()=>{const r=ROUND_CATALOG_EXTENDED[1171];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1172',()=>{const r=ROUND_CATALOG_EXTENDED[1172];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1173',()=>{const r=ROUND_CATALOG_EXTENDED[1173];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1174',()=>{const r=ROUND_CATALOG_EXTENDED[1174];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1175',()=>{const r=ROUND_CATALOG_EXTENDED[1175];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1176',()=>{const r=ROUND_CATALOG_EXTENDED[1176];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1177',()=>{const r=ROUND_CATALOG_EXTENDED[1177];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1178',()=>{const r=ROUND_CATALOG_EXTENDED[1178];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1179',()=>{const r=ROUND_CATALOG_EXTENDED[1179];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1180',()=>{const r=ROUND_CATALOG_EXTENDED[1180];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1181',()=>{const r=ROUND_CATALOG_EXTENDED[1181];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1182',()=>{const r=ROUND_CATALOG_EXTENDED[1182];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1183',()=>{const r=ROUND_CATALOG_EXTENDED[1183];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1184',()=>{const r=ROUND_CATALOG_EXTENDED[1184];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1185',()=>{const r=ROUND_CATALOG_EXTENDED[1185];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1186',()=>{const r=ROUND_CATALOG_EXTENDED[1186];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1187',()=>{const r=ROUND_CATALOG_EXTENDED[1187];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1188',()=>{const r=ROUND_CATALOG_EXTENDED[1188];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1189',()=>{const r=ROUND_CATALOG_EXTENDED[1189];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1190',()=>{const r=ROUND_CATALOG_EXTENDED[1190];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1191',()=>{const r=ROUND_CATALOG_EXTENDED[1191];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1192',()=>{const r=ROUND_CATALOG_EXTENDED[1192];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1193',()=>{const r=ROUND_CATALOG_EXTENDED[1193];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1194',()=>{const r=ROUND_CATALOG_EXTENDED[1194];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1195',()=>{const r=ROUND_CATALOG_EXTENDED[1195];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1196',()=>{const r=ROUND_CATALOG_EXTENDED[1196];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1197',()=>{const r=ROUND_CATALOG_EXTENDED[1197];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1198',()=>{const r=ROUND_CATALOG_EXTENDED[1198];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1199',()=>{const r=ROUND_CATALOG_EXTENDED[1199];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1200',()=>{const r=ROUND_CATALOG_EXTENDED[1200];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1201',()=>{const r=ROUND_CATALOG_EXTENDED[1201];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1202',()=>{const r=ROUND_CATALOG_EXTENDED[1202];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1203',()=>{const r=ROUND_CATALOG_EXTENDED[1203];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1204',()=>{const r=ROUND_CATALOG_EXTENDED[1204];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1205',()=>{const r=ROUND_CATALOG_EXTENDED[1205];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1206',()=>{const r=ROUND_CATALOG_EXTENDED[1206];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1207',()=>{const r=ROUND_CATALOG_EXTENDED[1207];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1208',()=>{const r=ROUND_CATALOG_EXTENDED[1208];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1209',()=>{const r=ROUND_CATALOG_EXTENDED[1209];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1210',()=>{const r=ROUND_CATALOG_EXTENDED[1210];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1211',()=>{const r=ROUND_CATALOG_EXTENDED[1211];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1212',()=>{const r=ROUND_CATALOG_EXTENDED[1212];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1213',()=>{const r=ROUND_CATALOG_EXTENDED[1213];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1214',()=>{const r=ROUND_CATALOG_EXTENDED[1214];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1215',()=>{const r=ROUND_CATALOG_EXTENDED[1215];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1216',()=>{const r=ROUND_CATALOG_EXTENDED[1216];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1217',()=>{const r=ROUND_CATALOG_EXTENDED[1217];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1218',()=>{const r=ROUND_CATALOG_EXTENDED[1218];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1219',()=>{const r=ROUND_CATALOG_EXTENDED[1219];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1220',()=>{const r=ROUND_CATALOG_EXTENDED[1220];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1221',()=>{const r=ROUND_CATALOG_EXTENDED[1221];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1222',()=>{const r=ROUND_CATALOG_EXTENDED[1222];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1223',()=>{const r=ROUND_CATALOG_EXTENDED[1223];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1224',()=>{const r=ROUND_CATALOG_EXTENDED[1224];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1225',()=>{const r=ROUND_CATALOG_EXTENDED[1225];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1226',()=>{const r=ROUND_CATALOG_EXTENDED[1226];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1227',()=>{const r=ROUND_CATALOG_EXTENDED[1227];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1228',()=>{const r=ROUND_CATALOG_EXTENDED[1228];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1229',()=>{const r=ROUND_CATALOG_EXTENDED[1229];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1230',()=>{const r=ROUND_CATALOG_EXTENDED[1230];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1231',()=>{const r=ROUND_CATALOG_EXTENDED[1231];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1232',()=>{const r=ROUND_CATALOG_EXTENDED[1232];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1233',()=>{const r=ROUND_CATALOG_EXTENDED[1233];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1234',()=>{const r=ROUND_CATALOG_EXTENDED[1234];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1235',()=>{const r=ROUND_CATALOG_EXTENDED[1235];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1236',()=>{const r=ROUND_CATALOG_EXTENDED[1236];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1237',()=>{const r=ROUND_CATALOG_EXTENDED[1237];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1238',()=>{const r=ROUND_CATALOG_EXTENDED[1238];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1239',()=>{const r=ROUND_CATALOG_EXTENDED[1239];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1240',()=>{const r=ROUND_CATALOG_EXTENDED[1240];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1241',()=>{const r=ROUND_CATALOG_EXTENDED[1241];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1242',()=>{const r=ROUND_CATALOG_EXTENDED[1242];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1243',()=>{const r=ROUND_CATALOG_EXTENDED[1243];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1244',()=>{const r=ROUND_CATALOG_EXTENDED[1244];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1245',()=>{const r=ROUND_CATALOG_EXTENDED[1245];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1246',()=>{const r=ROUND_CATALOG_EXTENDED[1246];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1247',()=>{const r=ROUND_CATALOG_EXTENDED[1247];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1248',()=>{const r=ROUND_CATALOG_EXTENDED[1248];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1249',()=>{const r=ROUND_CATALOG_EXTENDED[1249];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1250',()=>{const r=ROUND_CATALOG_EXTENDED[1250];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1251',()=>{const r=ROUND_CATALOG_EXTENDED[1251];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1252',()=>{const r=ROUND_CATALOG_EXTENDED[1252];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1253',()=>{const r=ROUND_CATALOG_EXTENDED[1253];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1254',()=>{const r=ROUND_CATALOG_EXTENDED[1254];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1255',()=>{const r=ROUND_CATALOG_EXTENDED[1255];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1256',()=>{const r=ROUND_CATALOG_EXTENDED[1256];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1257',()=>{const r=ROUND_CATALOG_EXTENDED[1257];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1258',()=>{const r=ROUND_CATALOG_EXTENDED[1258];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1259',()=>{const r=ROUND_CATALOG_EXTENDED[1259];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1260',()=>{const r=ROUND_CATALOG_EXTENDED[1260];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1261',()=>{const r=ROUND_CATALOG_EXTENDED[1261];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1262',()=>{const r=ROUND_CATALOG_EXTENDED[1262];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1263',()=>{const r=ROUND_CATALOG_EXTENDED[1263];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1264',()=>{const r=ROUND_CATALOG_EXTENDED[1264];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1265',()=>{const r=ROUND_CATALOG_EXTENDED[1265];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1266',()=>{const r=ROUND_CATALOG_EXTENDED[1266];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1267',()=>{const r=ROUND_CATALOG_EXTENDED[1267];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1268',()=>{const r=ROUND_CATALOG_EXTENDED[1268];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1269',()=>{const r=ROUND_CATALOG_EXTENDED[1269];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1270',()=>{const r=ROUND_CATALOG_EXTENDED[1270];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1271',()=>{const r=ROUND_CATALOG_EXTENDED[1271];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1272',()=>{const r=ROUND_CATALOG_EXTENDED[1272];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1273',()=>{const r=ROUND_CATALOG_EXTENDED[1273];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1274',()=>{const r=ROUND_CATALOG_EXTENDED[1274];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1275',()=>{const r=ROUND_CATALOG_EXTENDED[1275];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1276',()=>{const r=ROUND_CATALOG_EXTENDED[1276];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1277',()=>{const r=ROUND_CATALOG_EXTENDED[1277];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1278',()=>{const r=ROUND_CATALOG_EXTENDED[1278];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1279',()=>{const r=ROUND_CATALOG_EXTENDED[1279];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1280',()=>{const r=ROUND_CATALOG_EXTENDED[1280];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1281',()=>{const r=ROUND_CATALOG_EXTENDED[1281];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1282',()=>{const r=ROUND_CATALOG_EXTENDED[1282];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1283',()=>{const r=ROUND_CATALOG_EXTENDED[1283];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1284',()=>{const r=ROUND_CATALOG_EXTENDED[1284];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1285',()=>{const r=ROUND_CATALOG_EXTENDED[1285];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1286',()=>{const r=ROUND_CATALOG_EXTENDED[1286];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1287',()=>{const r=ROUND_CATALOG_EXTENDED[1287];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1288',()=>{const r=ROUND_CATALOG_EXTENDED[1288];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1289',()=>{const r=ROUND_CATALOG_EXTENDED[1289];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1290',()=>{const r=ROUND_CATALOG_EXTENDED[1290];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1291',()=>{const r=ROUND_CATALOG_EXTENDED[1291];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1292',()=>{const r=ROUND_CATALOG_EXTENDED[1292];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1293',()=>{const r=ROUND_CATALOG_EXTENDED[1293];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1294',()=>{const r=ROUND_CATALOG_EXTENDED[1294];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1295',()=>{const r=ROUND_CATALOG_EXTENDED[1295];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1296',()=>{const r=ROUND_CATALOG_EXTENDED[1296];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1297',()=>{const r=ROUND_CATALOG_EXTENDED[1297];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1298',()=>{const r=ROUND_CATALOG_EXTENDED[1298];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1299',()=>{const r=ROUND_CATALOG_EXTENDED[1299];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1300',()=>{const r=ROUND_CATALOG_EXTENDED[1300];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1301',()=>{const r=ROUND_CATALOG_EXTENDED[1301];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1302',()=>{const r=ROUND_CATALOG_EXTENDED[1302];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1303',()=>{const r=ROUND_CATALOG_EXTENDED[1303];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1304',()=>{const r=ROUND_CATALOG_EXTENDED[1304];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1305',()=>{const r=ROUND_CATALOG_EXTENDED[1305];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1306',()=>{const r=ROUND_CATALOG_EXTENDED[1306];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1307',()=>{const r=ROUND_CATALOG_EXTENDED[1307];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1308',()=>{const r=ROUND_CATALOG_EXTENDED[1308];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1309',()=>{const r=ROUND_CATALOG_EXTENDED[1309];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1310',()=>{const r=ROUND_CATALOG_EXTENDED[1310];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1311',()=>{const r=ROUND_CATALOG_EXTENDED[1311];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1312',()=>{const r=ROUND_CATALOG_EXTENDED[1312];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1313',()=>{const r=ROUND_CATALOG_EXTENDED[1313];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1314',()=>{const r=ROUND_CATALOG_EXTENDED[1314];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1315',()=>{const r=ROUND_CATALOG_EXTENDED[1315];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1316',()=>{const r=ROUND_CATALOG_EXTENDED[1316];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1317',()=>{const r=ROUND_CATALOG_EXTENDED[1317];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1318',()=>{const r=ROUND_CATALOG_EXTENDED[1318];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1319',()=>{const r=ROUND_CATALOG_EXTENDED[1319];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1320',()=>{const r=ROUND_CATALOG_EXTENDED[1320];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1321',()=>{const r=ROUND_CATALOG_EXTENDED[1321];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1322',()=>{const r=ROUND_CATALOG_EXTENDED[1322];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1323',()=>{const r=ROUND_CATALOG_EXTENDED[1323];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1324',()=>{const r=ROUND_CATALOG_EXTENDED[1324];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1325',()=>{const r=ROUND_CATALOG_EXTENDED[1325];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1326',()=>{const r=ROUND_CATALOG_EXTENDED[1326];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1327',()=>{const r=ROUND_CATALOG_EXTENDED[1327];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1328',()=>{const r=ROUND_CATALOG_EXTENDED[1328];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1329',()=>{const r=ROUND_CATALOG_EXTENDED[1329];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1330',()=>{const r=ROUND_CATALOG_EXTENDED[1330];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1331',()=>{const r=ROUND_CATALOG_EXTENDED[1331];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1332',()=>{const r=ROUND_CATALOG_EXTENDED[1332];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1333',()=>{const r=ROUND_CATALOG_EXTENDED[1333];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1334',()=>{const r=ROUND_CATALOG_EXTENDED[1334];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1335',()=>{const r=ROUND_CATALOG_EXTENDED[1335];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1336',()=>{const r=ROUND_CATALOG_EXTENDED[1336];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1337',()=>{const r=ROUND_CATALOG_EXTENDED[1337];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1338',()=>{const r=ROUND_CATALOG_EXTENDED[1338];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1339',()=>{const r=ROUND_CATALOG_EXTENDED[1339];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1340',()=>{const r=ROUND_CATALOG_EXTENDED[1340];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1341',()=>{const r=ROUND_CATALOG_EXTENDED[1341];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1342',()=>{const r=ROUND_CATALOG_EXTENDED[1342];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1343',()=>{const r=ROUND_CATALOG_EXTENDED[1343];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1344',()=>{const r=ROUND_CATALOG_EXTENDED[1344];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1345',()=>{const r=ROUND_CATALOG_EXTENDED[1345];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1346',()=>{const r=ROUND_CATALOG_EXTENDED[1346];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1347',()=>{const r=ROUND_CATALOG_EXTENDED[1347];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1348',()=>{const r=ROUND_CATALOG_EXTENDED[1348];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1349',()=>{const r=ROUND_CATALOG_EXTENDED[1349];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1350',()=>{const r=ROUND_CATALOG_EXTENDED[1350];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1351',()=>{const r=ROUND_CATALOG_EXTENDED[1351];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1352',()=>{const r=ROUND_CATALOG_EXTENDED[1352];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1353',()=>{const r=ROUND_CATALOG_EXTENDED[1353];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1354',()=>{const r=ROUND_CATALOG_EXTENDED[1354];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1355',()=>{const r=ROUND_CATALOG_EXTENDED[1355];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1356',()=>{const r=ROUND_CATALOG_EXTENDED[1356];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1357',()=>{const r=ROUND_CATALOG_EXTENDED[1357];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1358',()=>{const r=ROUND_CATALOG_EXTENDED[1358];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1359',()=>{const r=ROUND_CATALOG_EXTENDED[1359];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1360',()=>{const r=ROUND_CATALOG_EXTENDED[1360];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1361',()=>{const r=ROUND_CATALOG_EXTENDED[1361];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1362',()=>{const r=ROUND_CATALOG_EXTENDED[1362];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1363',()=>{const r=ROUND_CATALOG_EXTENDED[1363];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1364',()=>{const r=ROUND_CATALOG_EXTENDED[1364];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1365',()=>{const r=ROUND_CATALOG_EXTENDED[1365];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1366',()=>{const r=ROUND_CATALOG_EXTENDED[1366];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1367',()=>{const r=ROUND_CATALOG_EXTENDED[1367];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1368',()=>{const r=ROUND_CATALOG_EXTENDED[1368];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1369',()=>{const r=ROUND_CATALOG_EXTENDED[1369];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1370',()=>{const r=ROUND_CATALOG_EXTENDED[1370];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1371',()=>{const r=ROUND_CATALOG_EXTENDED[1371];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1372',()=>{const r=ROUND_CATALOG_EXTENDED[1372];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1373',()=>{const r=ROUND_CATALOG_EXTENDED[1373];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1374',()=>{const r=ROUND_CATALOG_EXTENDED[1374];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1375',()=>{const r=ROUND_CATALOG_EXTENDED[1375];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1376',()=>{const r=ROUND_CATALOG_EXTENDED[1376];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1377',()=>{const r=ROUND_CATALOG_EXTENDED[1377];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1378',()=>{const r=ROUND_CATALOG_EXTENDED[1378];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1379',()=>{const r=ROUND_CATALOG_EXTENDED[1379];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1380',()=>{const r=ROUND_CATALOG_EXTENDED[1380];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1381',()=>{const r=ROUND_CATALOG_EXTENDED[1381];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1382',()=>{const r=ROUND_CATALOG_EXTENDED[1382];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1383',()=>{const r=ROUND_CATALOG_EXTENDED[1383];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1384',()=>{const r=ROUND_CATALOG_EXTENDED[1384];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1385',()=>{const r=ROUND_CATALOG_EXTENDED[1385];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1386',()=>{const r=ROUND_CATALOG_EXTENDED[1386];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1387',()=>{const r=ROUND_CATALOG_EXTENDED[1387];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1388',()=>{const r=ROUND_CATALOG_EXTENDED[1388];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1389',()=>{const r=ROUND_CATALOG_EXTENDED[1389];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1390',()=>{const r=ROUND_CATALOG_EXTENDED[1390];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1391',()=>{const r=ROUND_CATALOG_EXTENDED[1391];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1392',()=>{const r=ROUND_CATALOG_EXTENDED[1392];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1393',()=>{const r=ROUND_CATALOG_EXTENDED[1393];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1394',()=>{const r=ROUND_CATALOG_EXTENDED[1394];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1395',()=>{const r=ROUND_CATALOG_EXTENDED[1395];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1396',()=>{const r=ROUND_CATALOG_EXTENDED[1396];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1397',()=>{const r=ROUND_CATALOG_EXTENDED[1397];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1398',()=>{const r=ROUND_CATALOG_EXTENDED[1398];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1399',()=>{const r=ROUND_CATALOG_EXTENDED[1399];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1400',()=>{const r=ROUND_CATALOG_EXTENDED[1400];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1401',()=>{const r=ROUND_CATALOG_EXTENDED[1401];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1402',()=>{const r=ROUND_CATALOG_EXTENDED[1402];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1403',()=>{const r=ROUND_CATALOG_EXTENDED[1403];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1404',()=>{const r=ROUND_CATALOG_EXTENDED[1404];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1405',()=>{const r=ROUND_CATALOG_EXTENDED[1405];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1406',()=>{const r=ROUND_CATALOG_EXTENDED[1406];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1407',()=>{const r=ROUND_CATALOG_EXTENDED[1407];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1408',()=>{const r=ROUND_CATALOG_EXTENDED[1408];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1409',()=>{const r=ROUND_CATALOG_EXTENDED[1409];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1410',()=>{const r=ROUND_CATALOG_EXTENDED[1410];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1411',()=>{const r=ROUND_CATALOG_EXTENDED[1411];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1412',()=>{const r=ROUND_CATALOG_EXTENDED[1412];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1413',()=>{const r=ROUND_CATALOG_EXTENDED[1413];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1414',()=>{const r=ROUND_CATALOG_EXTENDED[1414];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1415',()=>{const r=ROUND_CATALOG_EXTENDED[1415];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1416',()=>{const r=ROUND_CATALOG_EXTENDED[1416];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1417',()=>{const r=ROUND_CATALOG_EXTENDED[1417];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1418',()=>{const r=ROUND_CATALOG_EXTENDED[1418];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1419',()=>{const r=ROUND_CATALOG_EXTENDED[1419];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1420',()=>{const r=ROUND_CATALOG_EXTENDED[1420];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1421',()=>{const r=ROUND_CATALOG_EXTENDED[1421];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1422',()=>{const r=ROUND_CATALOG_EXTENDED[1422];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1423',()=>{const r=ROUND_CATALOG_EXTENDED[1423];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1424',()=>{const r=ROUND_CATALOG_EXTENDED[1424];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1425',()=>{const r=ROUND_CATALOG_EXTENDED[1425];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1426',()=>{const r=ROUND_CATALOG_EXTENDED[1426];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1427',()=>{const r=ROUND_CATALOG_EXTENDED[1427];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1428',()=>{const r=ROUND_CATALOG_EXTENDED[1428];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1429',()=>{const r=ROUND_CATALOG_EXTENDED[1429];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1430',()=>{const r=ROUND_CATALOG_EXTENDED[1430];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1431',()=>{const r=ROUND_CATALOG_EXTENDED[1431];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1432',()=>{const r=ROUND_CATALOG_EXTENDED[1432];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1433',()=>{const r=ROUND_CATALOG_EXTENDED[1433];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1434',()=>{const r=ROUND_CATALOG_EXTENDED[1434];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1435',()=>{const r=ROUND_CATALOG_EXTENDED[1435];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1436',()=>{const r=ROUND_CATALOG_EXTENDED[1436];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1437',()=>{const r=ROUND_CATALOG_EXTENDED[1437];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1438',()=>{const r=ROUND_CATALOG_EXTENDED[1438];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1439',()=>{const r=ROUND_CATALOG_EXTENDED[1439];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1440',()=>{const r=ROUND_CATALOG_EXTENDED[1440];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1441',()=>{const r=ROUND_CATALOG_EXTENDED[1441];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1442',()=>{const r=ROUND_CATALOG_EXTENDED[1442];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1443',()=>{const r=ROUND_CATALOG_EXTENDED[1443];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1444',()=>{const r=ROUND_CATALOG_EXTENDED[1444];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1445',()=>{const r=ROUND_CATALOG_EXTENDED[1445];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1446',()=>{const r=ROUND_CATALOG_EXTENDED[1446];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1447',()=>{const r=ROUND_CATALOG_EXTENDED[1447];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1448',()=>{const r=ROUND_CATALOG_EXTENDED[1448];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1449',()=>{const r=ROUND_CATALOG_EXTENDED[1449];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1450',()=>{const r=ROUND_CATALOG_EXTENDED[1450];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1451',()=>{const r=ROUND_CATALOG_EXTENDED[1451];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1452',()=>{const r=ROUND_CATALOG_EXTENDED[1452];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1453',()=>{const r=ROUND_CATALOG_EXTENDED[1453];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1454',()=>{const r=ROUND_CATALOG_EXTENDED[1454];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1455',()=>{const r=ROUND_CATALOG_EXTENDED[1455];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1456',()=>{const r=ROUND_CATALOG_EXTENDED[1456];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1457',()=>{const r=ROUND_CATALOG_EXTENDED[1457];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1458',()=>{const r=ROUND_CATALOG_EXTENDED[1458];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1459',()=>{const r=ROUND_CATALOG_EXTENDED[1459];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1460',()=>{const r=ROUND_CATALOG_EXTENDED[1460];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1461',()=>{const r=ROUND_CATALOG_EXTENDED[1461];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1462',()=>{const r=ROUND_CATALOG_EXTENDED[1462];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1463',()=>{const r=ROUND_CATALOG_EXTENDED[1463];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1464',()=>{const r=ROUND_CATALOG_EXTENDED[1464];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1465',()=>{const r=ROUND_CATALOG_EXTENDED[1465];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1466',()=>{const r=ROUND_CATALOG_EXTENDED[1466];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1467',()=>{const r=ROUND_CATALOG_EXTENDED[1467];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1468',()=>{const r=ROUND_CATALOG_EXTENDED[1468];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1469',()=>{const r=ROUND_CATALOG_EXTENDED[1469];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1470',()=>{const r=ROUND_CATALOG_EXTENDED[1470];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1471',()=>{const r=ROUND_CATALOG_EXTENDED[1471];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1472',()=>{const r=ROUND_CATALOG_EXTENDED[1472];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1473',()=>{const r=ROUND_CATALOG_EXTENDED[1473];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1474',()=>{const r=ROUND_CATALOG_EXTENDED[1474];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1475',()=>{const r=ROUND_CATALOG_EXTENDED[1475];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1476',()=>{const r=ROUND_CATALOG_EXTENDED[1476];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1477',()=>{const r=ROUND_CATALOG_EXTENDED[1477];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1478',()=>{const r=ROUND_CATALOG_EXTENDED[1478];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1479',()=>{const r=ROUND_CATALOG_EXTENDED[1479];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1480',()=>{const r=ROUND_CATALOG_EXTENDED[1480];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1481',()=>{const r=ROUND_CATALOG_EXTENDED[1481];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1482',()=>{const r=ROUND_CATALOG_EXTENDED[1482];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1483',()=>{const r=ROUND_CATALOG_EXTENDED[1483];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1484',()=>{const r=ROUND_CATALOG_EXTENDED[1484];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1485',()=>{const r=ROUND_CATALOG_EXTENDED[1485];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1486',()=>{const r=ROUND_CATALOG_EXTENDED[1486];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1487',()=>{const r=ROUND_CATALOG_EXTENDED[1487];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1488',()=>{const r=ROUND_CATALOG_EXTENDED[1488];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1489',()=>{const r=ROUND_CATALOG_EXTENDED[1489];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1490',()=>{const r=ROUND_CATALOG_EXTENDED[1490];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1491',()=>{const r=ROUND_CATALOG_EXTENDED[1491];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1492',()=>{const r=ROUND_CATALOG_EXTENDED[1492];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1493',()=>{const r=ROUND_CATALOG_EXTENDED[1493];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1494',()=>{const r=ROUND_CATALOG_EXTENDED[1494];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1495',()=>{const r=ROUND_CATALOG_EXTENDED[1495];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1496',()=>{const r=ROUND_CATALOG_EXTENDED[1496];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1497',()=>{const r=ROUND_CATALOG_EXTENDED[1497];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1498',()=>{const r=ROUND_CATALOG_EXTENDED[1498];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1499',()=>{const r=ROUND_CATALOG_EXTENDED[1499];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1500',()=>{const r=ROUND_CATALOG_EXTENDED[1500];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1501',()=>{const r=ROUND_CATALOG_EXTENDED[1501];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1502',()=>{const r=ROUND_CATALOG_EXTENDED[1502];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1503',()=>{const r=ROUND_CATALOG_EXTENDED[1503];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1504',()=>{const r=ROUND_CATALOG_EXTENDED[1504];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1505',()=>{const r=ROUND_CATALOG_EXTENDED[1505];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1506',()=>{const r=ROUND_CATALOG_EXTENDED[1506];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1507',()=>{const r=ROUND_CATALOG_EXTENDED[1507];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1508',()=>{const r=ROUND_CATALOG_EXTENDED[1508];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1509',()=>{const r=ROUND_CATALOG_EXTENDED[1509];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1510',()=>{const r=ROUND_CATALOG_EXTENDED[1510];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1511',()=>{const r=ROUND_CATALOG_EXTENDED[1511];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1512',()=>{const r=ROUND_CATALOG_EXTENDED[1512];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1513',()=>{const r=ROUND_CATALOG_EXTENDED[1513];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1514',()=>{const r=ROUND_CATALOG_EXTENDED[1514];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1515',()=>{const r=ROUND_CATALOG_EXTENDED[1515];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1516',()=>{const r=ROUND_CATALOG_EXTENDED[1516];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1517',()=>{const r=ROUND_CATALOG_EXTENDED[1517];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1518',()=>{const r=ROUND_CATALOG_EXTENDED[1518];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1519',()=>{const r=ROUND_CATALOG_EXTENDED[1519];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1520',()=>{const r=ROUND_CATALOG_EXTENDED[1520];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1521',()=>{const r=ROUND_CATALOG_EXTENDED[1521];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1522',()=>{const r=ROUND_CATALOG_EXTENDED[1522];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1523',()=>{const r=ROUND_CATALOG_EXTENDED[1523];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1524',()=>{const r=ROUND_CATALOG_EXTENDED[1524];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1525',()=>{const r=ROUND_CATALOG_EXTENDED[1525];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1526',()=>{const r=ROUND_CATALOG_EXTENDED[1526];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1527',()=>{const r=ROUND_CATALOG_EXTENDED[1527];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1528',()=>{const r=ROUND_CATALOG_EXTENDED[1528];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1529',()=>{const r=ROUND_CATALOG_EXTENDED[1529];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1530',()=>{const r=ROUND_CATALOG_EXTENDED[1530];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1531',()=>{const r=ROUND_CATALOG_EXTENDED[1531];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1532',()=>{const r=ROUND_CATALOG_EXTENDED[1532];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1533',()=>{const r=ROUND_CATALOG_EXTENDED[1533];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1534',()=>{const r=ROUND_CATALOG_EXTENDED[1534];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1535',()=>{const r=ROUND_CATALOG_EXTENDED[1535];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1536',()=>{const r=ROUND_CATALOG_EXTENDED[1536];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1537',()=>{const r=ROUND_CATALOG_EXTENDED[1537];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1538',()=>{const r=ROUND_CATALOG_EXTENDED[1538];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1539',()=>{const r=ROUND_CATALOG_EXTENDED[1539];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1540',()=>{const r=ROUND_CATALOG_EXTENDED[1540];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1541',()=>{const r=ROUND_CATALOG_EXTENDED[1541];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1542',()=>{const r=ROUND_CATALOG_EXTENDED[1542];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1543',()=>{const r=ROUND_CATALOG_EXTENDED[1543];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1544',()=>{const r=ROUND_CATALOG_EXTENDED[1544];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1545',()=>{const r=ROUND_CATALOG_EXTENDED[1545];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1546',()=>{const r=ROUND_CATALOG_EXTENDED[1546];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1547',()=>{const r=ROUND_CATALOG_EXTENDED[1547];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1548',()=>{const r=ROUND_CATALOG_EXTENDED[1548];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1549',()=>{const r=ROUND_CATALOG_EXTENDED[1549];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1550',()=>{const r=ROUND_CATALOG_EXTENDED[1550];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1551',()=>{const r=ROUND_CATALOG_EXTENDED[1551];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1552',()=>{const r=ROUND_CATALOG_EXTENDED[1552];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1553',()=>{const r=ROUND_CATALOG_EXTENDED[1553];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1554',()=>{const r=ROUND_CATALOG_EXTENDED[1554];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1555',()=>{const r=ROUND_CATALOG_EXTENDED[1555];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1556',()=>{const r=ROUND_CATALOG_EXTENDED[1556];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1557',()=>{const r=ROUND_CATALOG_EXTENDED[1557];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1558',()=>{const r=ROUND_CATALOG_EXTENDED[1558];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1559',()=>{const r=ROUND_CATALOG_EXTENDED[1559];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1560',()=>{const r=ROUND_CATALOG_EXTENDED[1560];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1561',()=>{const r=ROUND_CATALOG_EXTENDED[1561];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1562',()=>{const r=ROUND_CATALOG_EXTENDED[1562];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1563',()=>{const r=ROUND_CATALOG_EXTENDED[1563];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1564',()=>{const r=ROUND_CATALOG_EXTENDED[1564];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1565',()=>{const r=ROUND_CATALOG_EXTENDED[1565];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1566',()=>{const r=ROUND_CATALOG_EXTENDED[1566];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1567',()=>{const r=ROUND_CATALOG_EXTENDED[1567];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1568',()=>{const r=ROUND_CATALOG_EXTENDED[1568];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1569',()=>{const r=ROUND_CATALOG_EXTENDED[1569];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1570',()=>{const r=ROUND_CATALOG_EXTENDED[1570];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1571',()=>{const r=ROUND_CATALOG_EXTENDED[1571];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1572',()=>{const r=ROUND_CATALOG_EXTENDED[1572];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1573',()=>{const r=ROUND_CATALOG_EXTENDED[1573];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1574',()=>{const r=ROUND_CATALOG_EXTENDED[1574];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1575',()=>{const r=ROUND_CATALOG_EXTENDED[1575];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1576',()=>{const r=ROUND_CATALOG_EXTENDED[1576];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1577',()=>{const r=ROUND_CATALOG_EXTENDED[1577];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1578',()=>{const r=ROUND_CATALOG_EXTENDED[1578];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1579',()=>{const r=ROUND_CATALOG_EXTENDED[1579];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1580',()=>{const r=ROUND_CATALOG_EXTENDED[1580];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1581',()=>{const r=ROUND_CATALOG_EXTENDED[1581];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1582',()=>{const r=ROUND_CATALOG_EXTENDED[1582];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1583',()=>{const r=ROUND_CATALOG_EXTENDED[1583];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1584',()=>{const r=ROUND_CATALOG_EXTENDED[1584];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1585',()=>{const r=ROUND_CATALOG_EXTENDED[1585];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1586',()=>{const r=ROUND_CATALOG_EXTENDED[1586];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1587',()=>{const r=ROUND_CATALOG_EXTENDED[1587];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1588',()=>{const r=ROUND_CATALOG_EXTENDED[1588];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1589',()=>{const r=ROUND_CATALOG_EXTENDED[1589];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1590',()=>{const r=ROUND_CATALOG_EXTENDED[1590];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1591',()=>{const r=ROUND_CATALOG_EXTENDED[1591];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1592',()=>{const r=ROUND_CATALOG_EXTENDED[1592];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1593',()=>{const r=ROUND_CATALOG_EXTENDED[1593];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1594',()=>{const r=ROUND_CATALOG_EXTENDED[1594];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1595',()=>{const r=ROUND_CATALOG_EXTENDED[1595];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1596',()=>{const r=ROUND_CATALOG_EXTENDED[1596];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1597',()=>{const r=ROUND_CATALOG_EXTENDED[1597];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1598',()=>{const r=ROUND_CATALOG_EXTENDED[1598];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1599',()=>{const r=ROUND_CATALOG_EXTENDED[1599];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1600',()=>{const r=ROUND_CATALOG_EXTENDED[1600];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1601',()=>{const r=ROUND_CATALOG_EXTENDED[1601];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1602',()=>{const r=ROUND_CATALOG_EXTENDED[1602];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1603',()=>{const r=ROUND_CATALOG_EXTENDED[1603];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1604',()=>{const r=ROUND_CATALOG_EXTENDED[1604];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1605',()=>{const r=ROUND_CATALOG_EXTENDED[1605];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1606',()=>{const r=ROUND_CATALOG_EXTENDED[1606];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1607',()=>{const r=ROUND_CATALOG_EXTENDED[1607];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1608',()=>{const r=ROUND_CATALOG_EXTENDED[1608];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1609',()=>{const r=ROUND_CATALOG_EXTENDED[1609];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1610',()=>{const r=ROUND_CATALOG_EXTENDED[1610];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1611',()=>{const r=ROUND_CATALOG_EXTENDED[1611];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1612',()=>{const r=ROUND_CATALOG_EXTENDED[1612];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1613',()=>{const r=ROUND_CATALOG_EXTENDED[1613];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1614',()=>{const r=ROUND_CATALOG_EXTENDED[1614];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1615',()=>{const r=ROUND_CATALOG_EXTENDED[1615];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1616',()=>{const r=ROUND_CATALOG_EXTENDED[1616];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1617',()=>{const r=ROUND_CATALOG_EXTENDED[1617];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1618',()=>{const r=ROUND_CATALOG_EXTENDED[1618];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1619',()=>{const r=ROUND_CATALOG_EXTENDED[1619];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1620',()=>{const r=ROUND_CATALOG_EXTENDED[1620];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1621',()=>{const r=ROUND_CATALOG_EXTENDED[1621];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1622',()=>{const r=ROUND_CATALOG_EXTENDED[1622];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1623',()=>{const r=ROUND_CATALOG_EXTENDED[1623];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1624',()=>{const r=ROUND_CATALOG_EXTENDED[1624];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1625',()=>{const r=ROUND_CATALOG_EXTENDED[1625];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1626',()=>{const r=ROUND_CATALOG_EXTENDED[1626];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1627',()=>{const r=ROUND_CATALOG_EXTENDED[1627];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1628',()=>{const r=ROUND_CATALOG_EXTENDED[1628];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1629',()=>{const r=ROUND_CATALOG_EXTENDED[1629];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1630',()=>{const r=ROUND_CATALOG_EXTENDED[1630];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1631',()=>{const r=ROUND_CATALOG_EXTENDED[1631];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1632',()=>{const r=ROUND_CATALOG_EXTENDED[1632];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1633',()=>{const r=ROUND_CATALOG_EXTENDED[1633];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1634',()=>{const r=ROUND_CATALOG_EXTENDED[1634];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1635',()=>{const r=ROUND_CATALOG_EXTENDED[1635];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1636',()=>{const r=ROUND_CATALOG_EXTENDED[1636];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1637',()=>{const r=ROUND_CATALOG_EXTENDED[1637];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1638',()=>{const r=ROUND_CATALOG_EXTENDED[1638];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1639',()=>{const r=ROUND_CATALOG_EXTENDED[1639];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1640',()=>{const r=ROUND_CATALOG_EXTENDED[1640];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1641',()=>{const r=ROUND_CATALOG_EXTENDED[1641];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1642',()=>{const r=ROUND_CATALOG_EXTENDED[1642];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1643',()=>{const r=ROUND_CATALOG_EXTENDED[1643];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1644',()=>{const r=ROUND_CATALOG_EXTENDED[1644];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1645',()=>{const r=ROUND_CATALOG_EXTENDED[1645];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1646',()=>{const r=ROUND_CATALOG_EXTENDED[1646];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1647',()=>{const r=ROUND_CATALOG_EXTENDED[1647];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1648',()=>{const r=ROUND_CATALOG_EXTENDED[1648];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1649',()=>{const r=ROUND_CATALOG_EXTENDED[1649];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1650',()=>{const r=ROUND_CATALOG_EXTENDED[1650];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1651',()=>{const r=ROUND_CATALOG_EXTENDED[1651];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1652',()=>{const r=ROUND_CATALOG_EXTENDED[1652];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1653',()=>{const r=ROUND_CATALOG_EXTENDED[1653];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1654',()=>{const r=ROUND_CATALOG_EXTENDED[1654];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1655',()=>{const r=ROUND_CATALOG_EXTENDED[1655];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1656',()=>{const r=ROUND_CATALOG_EXTENDED[1656];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1657',()=>{const r=ROUND_CATALOG_EXTENDED[1657];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1658',()=>{const r=ROUND_CATALOG_EXTENDED[1658];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1659',()=>{const r=ROUND_CATALOG_EXTENDED[1659];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1660',()=>{const r=ROUND_CATALOG_EXTENDED[1660];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1661',()=>{const r=ROUND_CATALOG_EXTENDED[1661];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1662',()=>{const r=ROUND_CATALOG_EXTENDED[1662];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1663',()=>{const r=ROUND_CATALOG_EXTENDED[1663];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1664',()=>{const r=ROUND_CATALOG_EXTENDED[1664];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1665',()=>{const r=ROUND_CATALOG_EXTENDED[1665];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1666',()=>{const r=ROUND_CATALOG_EXTENDED[1666];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1667',()=>{const r=ROUND_CATALOG_EXTENDED[1667];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1668',()=>{const r=ROUND_CATALOG_EXTENDED[1668];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1669',()=>{const r=ROUND_CATALOG_EXTENDED[1669];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1670',()=>{const r=ROUND_CATALOG_EXTENDED[1670];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1671',()=>{const r=ROUND_CATALOG_EXTENDED[1671];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1672',()=>{const r=ROUND_CATALOG_EXTENDED[1672];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1673',()=>{const r=ROUND_CATALOG_EXTENDED[1673];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1674',()=>{const r=ROUND_CATALOG_EXTENDED[1674];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1675',()=>{const r=ROUND_CATALOG_EXTENDED[1675];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1676',()=>{const r=ROUND_CATALOG_EXTENDED[1676];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1677',()=>{const r=ROUND_CATALOG_EXTENDED[1677];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1678',()=>{const r=ROUND_CATALOG_EXTENDED[1678];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1679',()=>{const r=ROUND_CATALOG_EXTENDED[1679];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1680',()=>{const r=ROUND_CATALOG_EXTENDED[1680];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1681',()=>{const r=ROUND_CATALOG_EXTENDED[1681];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1682',()=>{const r=ROUND_CATALOG_EXTENDED[1682];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1683',()=>{const r=ROUND_CATALOG_EXTENDED[1683];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1684',()=>{const r=ROUND_CATALOG_EXTENDED[1684];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1685',()=>{const r=ROUND_CATALOG_EXTENDED[1685];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1686',()=>{const r=ROUND_CATALOG_EXTENDED[1686];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1687',()=>{const r=ROUND_CATALOG_EXTENDED[1687];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1688',()=>{const r=ROUND_CATALOG_EXTENDED[1688];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1689',()=>{const r=ROUND_CATALOG_EXTENDED[1689];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1690',()=>{const r=ROUND_CATALOG_EXTENDED[1690];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1691',()=>{const r=ROUND_CATALOG_EXTENDED[1691];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1692',()=>{const r=ROUND_CATALOG_EXTENDED[1692];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1693',()=>{const r=ROUND_CATALOG_EXTENDED[1693];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1694',()=>{const r=ROUND_CATALOG_EXTENDED[1694];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1695',()=>{const r=ROUND_CATALOG_EXTENDED[1695];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1696',()=>{const r=ROUND_CATALOG_EXTENDED[1696];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1697',()=>{const r=ROUND_CATALOG_EXTENDED[1697];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1698',()=>{const r=ROUND_CATALOG_EXTENDED[1698];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1699',()=>{const r=ROUND_CATALOG_EXTENDED[1699];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1700',()=>{const r=ROUND_CATALOG_EXTENDED[1700];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1701',()=>{const r=ROUND_CATALOG_EXTENDED[1701];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1702',()=>{const r=ROUND_CATALOG_EXTENDED[1702];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1703',()=>{const r=ROUND_CATALOG_EXTENDED[1703];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1704',()=>{const r=ROUND_CATALOG_EXTENDED[1704];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1705',()=>{const r=ROUND_CATALOG_EXTENDED[1705];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1706',()=>{const r=ROUND_CATALOG_EXTENDED[1706];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1707',()=>{const r=ROUND_CATALOG_EXTENDED[1707];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1708',()=>{const r=ROUND_CATALOG_EXTENDED[1708];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1709',()=>{const r=ROUND_CATALOG_EXTENDED[1709];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1710',()=>{const r=ROUND_CATALOG_EXTENDED[1710];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1711',()=>{const r=ROUND_CATALOG_EXTENDED[1711];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1712',()=>{const r=ROUND_CATALOG_EXTENDED[1712];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1713',()=>{const r=ROUND_CATALOG_EXTENDED[1713];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1714',()=>{const r=ROUND_CATALOG_EXTENDED[1714];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1715',()=>{const r=ROUND_CATALOG_EXTENDED[1715];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1716',()=>{const r=ROUND_CATALOG_EXTENDED[1716];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1717',()=>{const r=ROUND_CATALOG_EXTENDED[1717];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1718',()=>{const r=ROUND_CATALOG_EXTENDED[1718];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1719',()=>{const r=ROUND_CATALOG_EXTENDED[1719];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1720',()=>{const r=ROUND_CATALOG_EXTENDED[1720];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1721',()=>{const r=ROUND_CATALOG_EXTENDED[1721];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1722',()=>{const r=ROUND_CATALOG_EXTENDED[1722];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1723',()=>{const r=ROUND_CATALOG_EXTENDED[1723];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1724',()=>{const r=ROUND_CATALOG_EXTENDED[1724];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1725',()=>{const r=ROUND_CATALOG_EXTENDED[1725];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1726',()=>{const r=ROUND_CATALOG_EXTENDED[1726];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1727',()=>{const r=ROUND_CATALOG_EXTENDED[1727];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1728',()=>{const r=ROUND_CATALOG_EXTENDED[1728];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1729',()=>{const r=ROUND_CATALOG_EXTENDED[1729];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1730',()=>{const r=ROUND_CATALOG_EXTENDED[1730];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1731',()=>{const r=ROUND_CATALOG_EXTENDED[1731];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1732',()=>{const r=ROUND_CATALOG_EXTENDED[1732];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1733',()=>{const r=ROUND_CATALOG_EXTENDED[1733];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1734',()=>{const r=ROUND_CATALOG_EXTENDED[1734];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1735',()=>{const r=ROUND_CATALOG_EXTENDED[1735];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1736',()=>{const r=ROUND_CATALOG_EXTENDED[1736];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1737',()=>{const r=ROUND_CATALOG_EXTENDED[1737];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1738',()=>{const r=ROUND_CATALOG_EXTENDED[1738];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1739',()=>{const r=ROUND_CATALOG_EXTENDED[1739];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1740',()=>{const r=ROUND_CATALOG_EXTENDED[1740];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1741',()=>{const r=ROUND_CATALOG_EXTENDED[1741];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1742',()=>{const r=ROUND_CATALOG_EXTENDED[1742];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1743',()=>{const r=ROUND_CATALOG_EXTENDED[1743];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1744',()=>{const r=ROUND_CATALOG_EXTENDED[1744];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1745',()=>{const r=ROUND_CATALOG_EXTENDED[1745];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1746',()=>{const r=ROUND_CATALOG_EXTENDED[1746];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1747',()=>{const r=ROUND_CATALOG_EXTENDED[1747];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1748',()=>{const r=ROUND_CATALOG_EXTENDED[1748];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1749',()=>{const r=ROUND_CATALOG_EXTENDED[1749];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1750',()=>{const r=ROUND_CATALOG_EXTENDED[1750];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1751',()=>{const r=ROUND_CATALOG_EXTENDED[1751];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1752',()=>{const r=ROUND_CATALOG_EXTENDED[1752];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1753',()=>{const r=ROUND_CATALOG_EXTENDED[1753];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1754',()=>{const r=ROUND_CATALOG_EXTENDED[1754];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1755',()=>{const r=ROUND_CATALOG_EXTENDED[1755];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1756',()=>{const r=ROUND_CATALOG_EXTENDED[1756];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1757',()=>{const r=ROUND_CATALOG_EXTENDED[1757];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1758',()=>{const r=ROUND_CATALOG_EXTENDED[1758];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1759',()=>{const r=ROUND_CATALOG_EXTENDED[1759];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1760',()=>{const r=ROUND_CATALOG_EXTENDED[1760];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1761',()=>{const r=ROUND_CATALOG_EXTENDED[1761];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1762',()=>{const r=ROUND_CATALOG_EXTENDED[1762];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1763',()=>{const r=ROUND_CATALOG_EXTENDED[1763];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1764',()=>{const r=ROUND_CATALOG_EXTENDED[1764];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1765',()=>{const r=ROUND_CATALOG_EXTENDED[1765];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1766',()=>{const r=ROUND_CATALOG_EXTENDED[1766];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1767',()=>{const r=ROUND_CATALOG_EXTENDED[1767];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1768',()=>{const r=ROUND_CATALOG_EXTENDED[1768];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1769',()=>{const r=ROUND_CATALOG_EXTENDED[1769];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1770',()=>{const r=ROUND_CATALOG_EXTENDED[1770];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1771',()=>{const r=ROUND_CATALOG_EXTENDED[1771];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1772',()=>{const r=ROUND_CATALOG_EXTENDED[1772];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1773',()=>{const r=ROUND_CATALOG_EXTENDED[1773];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1774',()=>{const r=ROUND_CATALOG_EXTENDED[1774];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1775',()=>{const r=ROUND_CATALOG_EXTENDED[1775];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1776',()=>{const r=ROUND_CATALOG_EXTENDED[1776];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1777',()=>{const r=ROUND_CATALOG_EXTENDED[1777];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1778',()=>{const r=ROUND_CATALOG_EXTENDED[1778];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1779',()=>{const r=ROUND_CATALOG_EXTENDED[1779];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1780',()=>{const r=ROUND_CATALOG_EXTENDED[1780];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1781',()=>{const r=ROUND_CATALOG_EXTENDED[1781];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1782',()=>{const r=ROUND_CATALOG_EXTENDED[1782];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1783',()=>{const r=ROUND_CATALOG_EXTENDED[1783];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1784',()=>{const r=ROUND_CATALOG_EXTENDED[1784];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1785',()=>{const r=ROUND_CATALOG_EXTENDED[1785];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1786',()=>{const r=ROUND_CATALOG_EXTENDED[1786];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1787',()=>{const r=ROUND_CATALOG_EXTENDED[1787];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1788',()=>{const r=ROUND_CATALOG_EXTENDED[1788];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1789',()=>{const r=ROUND_CATALOG_EXTENDED[1789];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1790',()=>{const r=ROUND_CATALOG_EXTENDED[1790];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1791',()=>{const r=ROUND_CATALOG_EXTENDED[1791];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1792',()=>{const r=ROUND_CATALOG_EXTENDED[1792];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1793',()=>{const r=ROUND_CATALOG_EXTENDED[1793];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1794',()=>{const r=ROUND_CATALOG_EXTENDED[1794];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1795',()=>{const r=ROUND_CATALOG_EXTENDED[1795];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1796',()=>{const r=ROUND_CATALOG_EXTENDED[1796];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1797',()=>{const r=ROUND_CATALOG_EXTENDED[1797];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1798',()=>{const r=ROUND_CATALOG_EXTENDED[1798];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1799',()=>{const r=ROUND_CATALOG_EXTENDED[1799];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1800',()=>{const r=ROUND_CATALOG_EXTENDED[1800];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1801',()=>{const r=ROUND_CATALOG_EXTENDED[1801];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1802',()=>{const r=ROUND_CATALOG_EXTENDED[1802];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1803',()=>{const r=ROUND_CATALOG_EXTENDED[1803];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1804',()=>{const r=ROUND_CATALOG_EXTENDED[1804];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1805',()=>{const r=ROUND_CATALOG_EXTENDED[1805];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1806',()=>{const r=ROUND_CATALOG_EXTENDED[1806];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1807',()=>{const r=ROUND_CATALOG_EXTENDED[1807];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1808',()=>{const r=ROUND_CATALOG_EXTENDED[1808];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1809',()=>{const r=ROUND_CATALOG_EXTENDED[1809];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1810',()=>{const r=ROUND_CATALOG_EXTENDED[1810];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1811',()=>{const r=ROUND_CATALOG_EXTENDED[1811];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1812',()=>{const r=ROUND_CATALOG_EXTENDED[1812];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1813',()=>{const r=ROUND_CATALOG_EXTENDED[1813];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1814',()=>{const r=ROUND_CATALOG_EXTENDED[1814];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1815',()=>{const r=ROUND_CATALOG_EXTENDED[1815];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1816',()=>{const r=ROUND_CATALOG_EXTENDED[1816];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1817',()=>{const r=ROUND_CATALOG_EXTENDED[1817];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1818',()=>{const r=ROUND_CATALOG_EXTENDED[1818];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1819',()=>{const r=ROUND_CATALOG_EXTENDED[1819];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1820',()=>{const r=ROUND_CATALOG_EXTENDED[1820];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1821',()=>{const r=ROUND_CATALOG_EXTENDED[1821];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1822',()=>{const r=ROUND_CATALOG_EXTENDED[1822];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1823',()=>{const r=ROUND_CATALOG_EXTENDED[1823];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1824',()=>{const r=ROUND_CATALOG_EXTENDED[1824];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1825',()=>{const r=ROUND_CATALOG_EXTENDED[1825];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1826',()=>{const r=ROUND_CATALOG_EXTENDED[1826];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1827',()=>{const r=ROUND_CATALOG_EXTENDED[1827];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1828',()=>{const r=ROUND_CATALOG_EXTENDED[1828];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1829',()=>{const r=ROUND_CATALOG_EXTENDED[1829];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1830',()=>{const r=ROUND_CATALOG_EXTENDED[1830];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1831',()=>{const r=ROUND_CATALOG_EXTENDED[1831];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1832',()=>{const r=ROUND_CATALOG_EXTENDED[1832];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1833',()=>{const r=ROUND_CATALOG_EXTENDED[1833];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1834',()=>{const r=ROUND_CATALOG_EXTENDED[1834];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1835',()=>{const r=ROUND_CATALOG_EXTENDED[1835];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1836',()=>{const r=ROUND_CATALOG_EXTENDED[1836];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1837',()=>{const r=ROUND_CATALOG_EXTENDED[1837];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1838',()=>{const r=ROUND_CATALOG_EXTENDED[1838];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1839',()=>{const r=ROUND_CATALOG_EXTENDED[1839];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1840',()=>{const r=ROUND_CATALOG_EXTENDED[1840];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1841',()=>{const r=ROUND_CATALOG_EXTENDED[1841];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1842',()=>{const r=ROUND_CATALOG_EXTENDED[1842];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1843',()=>{const r=ROUND_CATALOG_EXTENDED[1843];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1844',()=>{const r=ROUND_CATALOG_EXTENDED[1844];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1845',()=>{const r=ROUND_CATALOG_EXTENDED[1845];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1846',()=>{const r=ROUND_CATALOG_EXTENDED[1846];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1847',()=>{const r=ROUND_CATALOG_EXTENDED[1847];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1848',()=>{const r=ROUND_CATALOG_EXTENDED[1848];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1849',()=>{const r=ROUND_CATALOG_EXTENDED[1849];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1850',()=>{const r=ROUND_CATALOG_EXTENDED[1850];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1851',()=>{const r=ROUND_CATALOG_EXTENDED[1851];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1852',()=>{const r=ROUND_CATALOG_EXTENDED[1852];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1853',()=>{const r=ROUND_CATALOG_EXTENDED[1853];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1854',()=>{const r=ROUND_CATALOG_EXTENDED[1854];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1855',()=>{const r=ROUND_CATALOG_EXTENDED[1855];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1856',()=>{const r=ROUND_CATALOG_EXTENDED[1856];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1857',()=>{const r=ROUND_CATALOG_EXTENDED[1857];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1858',()=>{const r=ROUND_CATALOG_EXTENDED[1858];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1859',()=>{const r=ROUND_CATALOG_EXTENDED[1859];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1860',()=>{const r=ROUND_CATALOG_EXTENDED[1860];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1861',()=>{const r=ROUND_CATALOG_EXTENDED[1861];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1862',()=>{const r=ROUND_CATALOG_EXTENDED[1862];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1863',()=>{const r=ROUND_CATALOG_EXTENDED[1863];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1864',()=>{const r=ROUND_CATALOG_EXTENDED[1864];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1865',()=>{const r=ROUND_CATALOG_EXTENDED[1865];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1866',()=>{const r=ROUND_CATALOG_EXTENDED[1866];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1867',()=>{const r=ROUND_CATALOG_EXTENDED[1867];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1868',()=>{const r=ROUND_CATALOG_EXTENDED[1868];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1869',()=>{const r=ROUND_CATALOG_EXTENDED[1869];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1870',()=>{const r=ROUND_CATALOG_EXTENDED[1870];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1871',()=>{const r=ROUND_CATALOG_EXTENDED[1871];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1872',()=>{const r=ROUND_CATALOG_EXTENDED[1872];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1873',()=>{const r=ROUND_CATALOG_EXTENDED[1873];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1874',()=>{const r=ROUND_CATALOG_EXTENDED[1874];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1875',()=>{const r=ROUND_CATALOG_EXTENDED[1875];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1876',()=>{const r=ROUND_CATALOG_EXTENDED[1876];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1877',()=>{const r=ROUND_CATALOG_EXTENDED[1877];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1878',()=>{const r=ROUND_CATALOG_EXTENDED[1878];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1879',()=>{const r=ROUND_CATALOG_EXTENDED[1879];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1880',()=>{const r=ROUND_CATALOG_EXTENDED[1880];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1881',()=>{const r=ROUND_CATALOG_EXTENDED[1881];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1882',()=>{const r=ROUND_CATALOG_EXTENDED[1882];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1883',()=>{const r=ROUND_CATALOG_EXTENDED[1883];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1884',()=>{const r=ROUND_CATALOG_EXTENDED[1884];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1885',()=>{const r=ROUND_CATALOG_EXTENDED[1885];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1886',()=>{const r=ROUND_CATALOG_EXTENDED[1886];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1887',()=>{const r=ROUND_CATALOG_EXTENDED[1887];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1888',()=>{const r=ROUND_CATALOG_EXTENDED[1888];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1889',()=>{const r=ROUND_CATALOG_EXTENDED[1889];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1890',()=>{const r=ROUND_CATALOG_EXTENDED[1890];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1891',()=>{const r=ROUND_CATALOG_EXTENDED[1891];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1892',()=>{const r=ROUND_CATALOG_EXTENDED[1892];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1893',()=>{const r=ROUND_CATALOG_EXTENDED[1893];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1894',()=>{const r=ROUND_CATALOG_EXTENDED[1894];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1895',()=>{const r=ROUND_CATALOG_EXTENDED[1895];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1896',()=>{const r=ROUND_CATALOG_EXTENDED[1896];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1897',()=>{const r=ROUND_CATALOG_EXTENDED[1897];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1898',()=>{const r=ROUND_CATALOG_EXTENDED[1898];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1899',()=>{const r=ROUND_CATALOG_EXTENDED[1899];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1900',()=>{const r=ROUND_CATALOG_EXTENDED[1900];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1901',()=>{const r=ROUND_CATALOG_EXTENDED[1901];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1902',()=>{const r=ROUND_CATALOG_EXTENDED[1902];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1903',()=>{const r=ROUND_CATALOG_EXTENDED[1903];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1904',()=>{const r=ROUND_CATALOG_EXTENDED[1904];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1905',()=>{const r=ROUND_CATALOG_EXTENDED[1905];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1906',()=>{const r=ROUND_CATALOG_EXTENDED[1906];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1907',()=>{const r=ROUND_CATALOG_EXTENDED[1907];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1908',()=>{const r=ROUND_CATALOG_EXTENDED[1908];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1909',()=>{const r=ROUND_CATALOG_EXTENDED[1909];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1910',()=>{const r=ROUND_CATALOG_EXTENDED[1910];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1911',()=>{const r=ROUND_CATALOG_EXTENDED[1911];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1912',()=>{const r=ROUND_CATALOG_EXTENDED[1912];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1913',()=>{const r=ROUND_CATALOG_EXTENDED[1913];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1914',()=>{const r=ROUND_CATALOG_EXTENDED[1914];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1915',()=>{const r=ROUND_CATALOG_EXTENDED[1915];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1916',()=>{const r=ROUND_CATALOG_EXTENDED[1916];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1917',()=>{const r=ROUND_CATALOG_EXTENDED[1917];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1918',()=>{const r=ROUND_CATALOG_EXTENDED[1918];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1919',()=>{const r=ROUND_CATALOG_EXTENDED[1919];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1920',()=>{const r=ROUND_CATALOG_EXTENDED[1920];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1921',()=>{const r=ROUND_CATALOG_EXTENDED[1921];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1922',()=>{const r=ROUND_CATALOG_EXTENDED[1922];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1923',()=>{const r=ROUND_CATALOG_EXTENDED[1923];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1924',()=>{const r=ROUND_CATALOG_EXTENDED[1924];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1925',()=>{const r=ROUND_CATALOG_EXTENDED[1925];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1926',()=>{const r=ROUND_CATALOG_EXTENDED[1926];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1927',()=>{const r=ROUND_CATALOG_EXTENDED[1927];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1928',()=>{const r=ROUND_CATALOG_EXTENDED[1928];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1929',()=>{const r=ROUND_CATALOG_EXTENDED[1929];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1930',()=>{const r=ROUND_CATALOG_EXTENDED[1930];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1931',()=>{const r=ROUND_CATALOG_EXTENDED[1931];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1932',()=>{const r=ROUND_CATALOG_EXTENDED[1932];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1933',()=>{const r=ROUND_CATALOG_EXTENDED[1933];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1934',()=>{const r=ROUND_CATALOG_EXTENDED[1934];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1935',()=>{const r=ROUND_CATALOG_EXTENDED[1935];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1936',()=>{const r=ROUND_CATALOG_EXTENDED[1936];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1937',()=>{const r=ROUND_CATALOG_EXTENDED[1937];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1938',()=>{const r=ROUND_CATALOG_EXTENDED[1938];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1939',()=>{const r=ROUND_CATALOG_EXTENDED[1939];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1940',()=>{const r=ROUND_CATALOG_EXTENDED[1940];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1941',()=>{const r=ROUND_CATALOG_EXTENDED[1941];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1942',()=>{const r=ROUND_CATALOG_EXTENDED[1942];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1943',()=>{const r=ROUND_CATALOG_EXTENDED[1943];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1944',()=>{const r=ROUND_CATALOG_EXTENDED[1944];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1945',()=>{const r=ROUND_CATALOG_EXTENDED[1945];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1946',()=>{const r=ROUND_CATALOG_EXTENDED[1946];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1947',()=>{const r=ROUND_CATALOG_EXTENDED[1947];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1948',()=>{const r=ROUND_CATALOG_EXTENDED[1948];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1949',()=>{const r=ROUND_CATALOG_EXTENDED[1949];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1950',()=>{const r=ROUND_CATALOG_EXTENDED[1950];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1951',()=>{const r=ROUND_CATALOG_EXTENDED[1951];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1952',()=>{const r=ROUND_CATALOG_EXTENDED[1952];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1953',()=>{const r=ROUND_CATALOG_EXTENDED[1953];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1954',()=>{const r=ROUND_CATALOG_EXTENDED[1954];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1955',()=>{const r=ROUND_CATALOG_EXTENDED[1955];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1956',()=>{const r=ROUND_CATALOG_EXTENDED[1956];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1957',()=>{const r=ROUND_CATALOG_EXTENDED[1957];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1958',()=>{const r=ROUND_CATALOG_EXTENDED[1958];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1959',()=>{const r=ROUND_CATALOG_EXTENDED[1959];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1960',()=>{const r=ROUND_CATALOG_EXTENDED[1960];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1961',()=>{const r=ROUND_CATALOG_EXTENDED[1961];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1962',()=>{const r=ROUND_CATALOG_EXTENDED[1962];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1963',()=>{const r=ROUND_CATALOG_EXTENDED[1963];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1964',()=>{const r=ROUND_CATALOG_EXTENDED[1964];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1965',()=>{const r=ROUND_CATALOG_EXTENDED[1965];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1966',()=>{const r=ROUND_CATALOG_EXTENDED[1966];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1967',()=>{const r=ROUND_CATALOG_EXTENDED[1967];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1968',()=>{const r=ROUND_CATALOG_EXTENDED[1968];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1969',()=>{const r=ROUND_CATALOG_EXTENDED[1969];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1970',()=>{const r=ROUND_CATALOG_EXTENDED[1970];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1971',()=>{const r=ROUND_CATALOG_EXTENDED[1971];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1972',()=>{const r=ROUND_CATALOG_EXTENDED[1972];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1973',()=>{const r=ROUND_CATALOG_EXTENDED[1973];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1974',()=>{const r=ROUND_CATALOG_EXTENDED[1974];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1975',()=>{const r=ROUND_CATALOG_EXTENDED[1975];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1976',()=>{const r=ROUND_CATALOG_EXTENDED[1976];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1977',()=>{const r=ROUND_CATALOG_EXTENDED[1977];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1978',()=>{const r=ROUND_CATALOG_EXTENDED[1978];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1979',()=>{const r=ROUND_CATALOG_EXTENDED[1979];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1980',()=>{const r=ROUND_CATALOG_EXTENDED[1980];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1981',()=>{const r=ROUND_CATALOG_EXTENDED[1981];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1982',()=>{const r=ROUND_CATALOG_EXTENDED[1982];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1983',()=>{const r=ROUND_CATALOG_EXTENDED[1983];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1984',()=>{const r=ROUND_CATALOG_EXTENDED[1984];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1985',()=>{const r=ROUND_CATALOG_EXTENDED[1985];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1986',()=>{const r=ROUND_CATALOG_EXTENDED[1986];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1987',()=>{const r=ROUND_CATALOG_EXTENDED[1987];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1988',()=>{const r=ROUND_CATALOG_EXTENDED[1988];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1989',()=>{const r=ROUND_CATALOG_EXTENDED[1989];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1990',()=>{const r=ROUND_CATALOG_EXTENDED[1990];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1991',()=>{const r=ROUND_CATALOG_EXTENDED[1991];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1992',()=>{const r=ROUND_CATALOG_EXTENDED[1992];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1993',()=>{const r=ROUND_CATALOG_EXTENDED[1993];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1994',()=>{const r=ROUND_CATALOG_EXTENDED[1994];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1995',()=>{const r=ROUND_CATALOG_EXTENDED[1995];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1996',()=>{const r=ROUND_CATALOG_EXTENDED[1996];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1997',()=>{const r=ROUND_CATALOG_EXTENDED[1997];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1998',()=>{const r=ROUND_CATALOG_EXTENDED[1998];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 1999',()=>{const r=ROUND_CATALOG_EXTENDED[1999];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});
contract('extended round 2000',()=>{const r=ROUND_CATALOG_EXTENDED[2000];assert.ok(r);assert.ok(r.groups.length>0);assert.ok(r.difficulty>0);assert.ok(r.speed>0);});

let failures=0;
for(const [name,test] of contracts){try{test();}catch(error){failures+=1;console.error('FAIL:',name,error.message);}}
assert.equal(failures,0,'feature-contract matrix contains failures');
console.log('FEATURE CONTRACT TEST PASS — '+contracts.length+' executable contracts');
