// Types for CFO module

export interface FinancialData {
  period: string;
  revenue: number;
  expenses: number;
  cashFlow: number;
  balanceSheet?: Record<string, number>;
  customMetrics?: Record<string, number>;
}

export interface Suggestion {
  type: "cost_saving" | "revenue_growth" | "risk" | "other";
  message: string;
}

export interface CFOReport {
  summary: string;
  kpis: {
    grossMargin?: number;
    netProfit?: number;
    cashOnHand?: number;
    [key: string]: number | undefined;
  };
  suggestions: Suggestion[];
}