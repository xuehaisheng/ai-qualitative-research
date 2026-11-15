import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {passwordHash} from './server.mjs';
const dir=process.env.ADMIN_DATA_DIR||path.join(path.dirname(fileURLToPath(import.meta.url)),'.admin-data');
if(!process.stdin.isTTY)throw new Error('请在本地终端运行此命令，或在服务器设置 ADMIN_PASSWORD。');
async function hidden(prompt){process.stdout.write(prompt);process.stdin.setRawMode(true);process.stdin.resume();let value='';return new Promise(resolve=>{const onData=b=>{for(const c of b.toString()){if(c==='\u0003'){process.exit(1);}else if(c==='\r'||c==='\n'){process.stdin.off('data',onData);process.stdin.setRawMode(false);process.stdin.pause();process.stdout.write('\n');resolve(value);return;}else if(c==='\u007f'){value=value.slice(0,-1);}else value+=c;}};process.stdin.on('data',onData);});}
const password=await hidden('设置后台密码（至少 12 位，输入不显示）：');if(password.length<12)throw new Error('密码至少需要 12 位');if(password!==await hidden('再输入一次：'))throw new Error('两次密码不一致');await fs.mkdir(dir,{recursive:true,mode:0o700});await fs.writeFile(path.join(dir,'account.json'),JSON.stringify(passwordHash(password)),{mode:0o600});console.log('密码已保存。运行 npm start 打开管理后台。');
