
import { Construct } from 'constructs';
import { aws_ssm as ssm } from 'aws-cdk-lib';

export class SsmPattern extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ssm.StringParameter(this, 'ExampleParam', {
      parameterName: '/demo/param',
      stringValue: 'value123'
    });
  }
}
