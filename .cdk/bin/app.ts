import { App } from 'aws-cdk-lib';

import TeaXYZ from '../lib/tea.xyz';

const app = new App();

/**
 * The name of the stack depends on the STAGE environment variable so we can deploy the infrastructure multiple times in parallel
 * @example
 * AwesomeStack-pr-1-awesome-branch
 * AwesomeStack-production
 */
const stackName = 'TeaXYZ-' + process.env.STAGE;

new TeaXYZ(app, stackName);