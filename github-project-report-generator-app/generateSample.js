// Must be run with 'esm' flag -> node -r esm generateSample

import { generateFullReport } from './src/generateReport.js';

const fs = require('fs');
require('dotenv').config();

(async () => {
  fs.writeFileSync(
    'src/sampleData.json',
    JSON.stringify(
      // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
      // Then create a .env file and put your token there
      await generateFullReport(process.env.GITHUB_TOKEN, {
        owner: 'ArchawinWongkittiruk',
        repo: 'TheBackrowers',
      }),
      null,
      2
    )
  );
})();
