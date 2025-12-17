import { Card, CardContent, CardHeader, CardTitle } from "@workspace/shared/components/ui/card"

export default function Settings() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </CardContent>
      </Card>
    </div>
  )
}
