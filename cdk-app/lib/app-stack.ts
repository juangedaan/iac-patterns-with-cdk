
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { VpcPattern } from './patterns/vpc';
import { EcsPattern } from './patterns/ecs';
import { IamPattern } from './patterns/iam';
import { SsmPattern } from './patterns/ssm';

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new VpcPattern(this, 'CustomVPC');
    new EcsPattern(this, 'FargateCluster');
    new IamPattern(this, 'AppIAM');
    new SsmPattern(this, 'SsmParams');
  }
}
