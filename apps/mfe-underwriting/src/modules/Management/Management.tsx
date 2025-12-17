import { Card, CardContent, CardHeader, CardTitle } from "@workspace/shared/components/ui/card"

export default function Management() {
  return (
    <div className="px-6 py-8 space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">
          Management
        </h1>
        <p className="text-muted-foreground text-sm">
          Administrative tools and organizational controls
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Team Structure</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum at lacus sed metus posuere tincidunt.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Permissions</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
