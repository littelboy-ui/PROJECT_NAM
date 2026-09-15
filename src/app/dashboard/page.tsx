import { Filter, Plus } from "lucide-react";

import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { dashboardSummary, projectRows, recentActivities } from "@/components/dashboard/data";
import { ProjectTable } from "@/components/dashboard/project-table";
import { StatCard } from "@/components/dashboard/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-50 p-4 md:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-500">PRD-aligned overview</p>
            <h1 className="text-2xl font-semibold tracking-tight">Project NAM Dashboard</h1>
            <p className="text-sm text-zinc-600">Frontend-only preview with product and delivery KPIs.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Input placeholder="Search projects, teams, or tasks..." className="w-full sm:w-72" />
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardSummary.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </section>

        <Tabs defaultValue="projects">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Snapshot</CardTitle>
                <CardDescription>Mock data seeded from PRD priorities and sprint planning themes.</CardDescription>
              </CardHeader>
              <CardContent>
                <ProjectTable rows={projectRows} />
              </CardContent>
            </Card>
            <ActivityFeed items={recentActivities} />
          </TabsContent>

          <TabsContent value="delivery">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Health</CardTitle>
                <CardDescription>Current release confidence based on quality and schedule indicators.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <Card className="bg-zinc-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Release Readiness</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-zinc-700">
                    <div className="mb-3">
                      <Badge variant="success">On Track</Badge>
                    </div>
                    QA pass-rate and defect trends are within PRD tolerances.
                  </CardContent>
                </Card>
                <Card className="bg-zinc-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Risks</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-zinc-700">
                    <div className="mb-3">
                      <Badge variant="warning">2 Watch Items</Badge>
                    </div>
                    Analytics dependency and late review cycle are being monitored.
                  </CardContent>
                </Card>
                <Card className="bg-zinc-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Customer Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-zinc-700">
                    <div className="mb-3">
                      <Badge variant="secondary">Expected Lift +12%</Badge>
                    </div>
                    Focus areas map to conversion and retention goals in the PRD.
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
