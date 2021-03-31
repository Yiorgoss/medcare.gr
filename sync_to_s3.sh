#/bin/bash
npm run build && aws s3 sync build/ s3://luigi-medcare --profile s3admin --dryrun

