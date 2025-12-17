import { Card, CardContent, CardHeader, CardTitle } from "@workspace/shared/components/ui/card"

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Users", "Sessions", "Errors", "Latency"].map((title) => (
          <Card key={title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
