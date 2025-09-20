import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Setup & Configurations</h1>
        <p className="text-muted-foreground">System settings and configuration options</p>
      </div>

      <Card className="bg-gradient-card shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-primary" />
            System Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Configure system-wide settings and preferences</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;