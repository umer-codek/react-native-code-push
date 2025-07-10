import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  installUpdate(url: string): Promise<boolean>;
  getUpdateMetadata(): Promise<{ version: string; hash: string }>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('CodePush');
