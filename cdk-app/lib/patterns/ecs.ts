
import { Construct } from 'constructs';
import { aws_ecs as ecs, aws_ec2 as ec2 } from 'aws-cdk-lib';

export class EcsPattern extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const vpc = ec2.Vpc.fromLookup(this, 'DefaultVPC', { isDefault: true });

    new ecs.Cluster(this, 'Cluster', {
      vpc: vpc
    });
  }
}
