export interface Violation {
  code: string;
  description: string;
  oos: string;
  unit: string;
  basic?: string;
  section?: string;
  inSMS?: "YES" | "NO";
}
