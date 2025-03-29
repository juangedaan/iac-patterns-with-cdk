
import { Construct } from 'constructs';
import { aws_iam as iam } from 'aws-cdk-lib';

export class IamPattern extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new iam.Role(this, 'DemoRole', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3ReadOnlyAccess')
      ]
    });
  }
}
