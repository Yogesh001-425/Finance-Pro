// Placeholder for AI-powered CRM analysis

import { Customer, Opportunity, CRMReport, Task } from "./models";

export async function analyzeCRM(
  customers: Customer[],
  opportunities: Opportunity[],
  tasks: Task[] = []
): Promise<CRMReport> {
  // TODO: Integrate with real AI logic (OpenAI, Azure, etc.)
  const now = new Date();

  const openOpps = opportunities.filter(o => o.status === "open");
  const wonOpps = opportunities.filter(o => o.stage === "won");
  const lostOpps = opportunities.filter(o => o.stage === "lost");
  const openTasks = tasks.filter(task => task.status !== "done");
  const completedTasks = tasks.filter(task => task.status === "done");
  const overdueTasks = tasks.filter(task => {
    if (!task.dueDate) {
      return false;
    }
    const dueDate = new Date(task.dueDate);
    return task.status !== "done" && dueDate < now;
  });

  return {
    summary: "CRM metrics calculated. See pipeline and AI insights.",
    totalCustomers: customers.length,
    openOpportunities: openOpps.length,
    wonOpportunities: wonOpps.length,
    lostOpportunities: lostOpps.length,
    pipelineValue: openOpps.reduce((sum, o) => sum + o.value, 0),
    aiInsights: "AI: Top 3 accounts flagged for upsell. 2 leads are at risk of churn.",
    taskSummary: {
      totalTasks: tasks.length,
      openTasks: openTasks.length,
      completedTasks: completedTasks.length,
      overdueTasks: overdueTasks.length
    }
  };
}
