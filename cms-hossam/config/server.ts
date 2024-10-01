interface Env {
  (variable: string, defaultValue?: string): string;
  int(variable: string, defaultValue?: number): number;
  array(variable: string): string[]; // Handle array type for APP_KEYS
}

export default ({ env }: { env: Env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
