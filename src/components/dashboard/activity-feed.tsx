import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ActivityFeed({ items }: { items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
