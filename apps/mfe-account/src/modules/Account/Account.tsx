import { Button } from '@workspace/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/shared/components/ui/card'
import { Input } from '@workspace/shared/components/ui/input'
import { Label } from '@workspace/shared/components/ui/label'

export default function Account() {
  return (
    <div>
      <div className="p-4 text-lg">MFE - Account Page</div>
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you&apos;re done.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-name">Name</Label>
            <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-username">Username</Label>
            <Input id="tabs-demo-username" defaultValue="@peduarte" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
