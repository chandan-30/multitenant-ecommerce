import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
        <div className="p-8">
            <div className="flex flex-col gap-y-4">
                <div>
                    <Button variant={"elevated"}>Button</Button>
                </div>
                <div>
                    <Input placeholder="Input" />
                </div>
                <div>
                    <Progress value={50} />
                </div>
                <div>
                    <Textarea value="" placeholder="textarea" />
                </div>
                <div>
                    <Label>Checkbox</Label>
                    <Checkbox />
                </div>
            </div>
        </div>
    );
}
