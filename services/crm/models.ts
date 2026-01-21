// Types for CRM module

export interface Customer {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  industry?: string;
  createdAt: string;
  lastContacted?: string;
  customFields?: Record<string, any>;
}

export interface Opportunity {
  id: string;
  customerId: string;
  value: number;
  stage: "new" | "qualified" | "proposal" | "won" | "lost";
  status: "open" | "closed";
  createdAt: string;
  closeDate?: string;
  notes?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "in_progress" | "blocked" | "done";
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt?: string;
  dueDate?: string;
  assignedTo?: string;
  relatedCustomerId?: string;
  relatedOpportunityId?: string;
}

export interface TaskSummary {
  totalTasks: number;
  openTasks: number;
  completedTasks: number;
  overdueTasks: number;
}

export interface CRMReport {
  summary: string;
  totalCustomers: number;
  openOpportunities: number;
  wonOpportunities: number;
  lostOpportunities: number;
  pipelineValue: number;
  aiInsights?: string;
  taskSummary?: TaskSummary;
}
