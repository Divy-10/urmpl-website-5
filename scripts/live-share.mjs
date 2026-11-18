import { spawn } from 'node:child_process';

async function main() {
  console.log('[1/2] Starting Vite preview server on port 4173...');
  const preview = spawn('npx.cmd', ['vite', 'preview', '--port', '4173', '--host', '0.0.0.0'], {
    shell: true,
    stdio: 'inherit'
  });

  await new Promise((r) => setTimeout(r, 2000));

  console.log('[2/2] Opening secure public tunnel via localhost.run (SSH)...');
  const tunnel = spawn('ssh.exe', [
    '-R', '80:localhost:4173',
    '-o', 'StrictHostKeyChecking=no',
    'nokey@localhost.run'
  ], {
    shell: false,
    stdio: ['ignore', 'pipe', 'inherit']
  });

  tunnel.stdout.on('data', (chunk) => {
    const text = chunk.toString();
    const match = text.match(/https:\/\/[a-zA-Z0-9.-]+\.lhr\.life/);
    if (match) {
      console.log('\n==============================================');
      console.log('🎉 URMPL PUBLIC LIVE LINK:');
      console.log('🌐 ' + match[0]);
      console.log('(No password required — opens instantly anywhere)');
      console.log('==============================================\n');
    }
  });

  process.on('SIGINT', () => {
    preview.kill();
    tunnel.kill();
    process.exit();
  });
}

main();
