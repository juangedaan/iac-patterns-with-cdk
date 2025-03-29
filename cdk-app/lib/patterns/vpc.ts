
import { Construct } from 'constructs';
import { aws_ec2 as ec2 } from 'aws-cdk-lib';

export class VpcPattern extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ec2.Vpc(this, 'Vpc', {
      maxAzs: 2,
      natGateways: 1
    });
  }
}
