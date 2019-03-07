export interface Dependency {
  crate_id: string;
  default_features: boolean;
  downloads: number;
  features: string[];
  id: number;
  kind: 'build' | 'normal' | 'dev';
  optional: boolean;
  req: string;
  target: any | null;
  version_id: number;
}
