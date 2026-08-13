import { Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { usePWAInstall } from "@/hooks/usePWAInstall";

const InstallButton = () => {
  const { canInstall, install } = usePWAInstall();

  if (!canInstall) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="sm"
      leftIcon={<Download size={17} />}
      onClick={install}
    >
      Install App 
    </Button>
  );
};

export default InstallButton;
