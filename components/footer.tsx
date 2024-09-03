import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

interface FooterProps {
    facebookLink: string;
    twitterLink: string;
    instagramLink: string;
}

export default function Footer({
    facebookLink,
    twitterLink,
    instagramLink,
}: FooterProps) {
  return (
    <div className="bg-black py-20 border-t">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <p className="text-muted-foreground text-center">
          Follow us on social media for the latest updates.
        </p>
        <div className="flex space-x-6">
          <Link
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon
              className="text-foreground hover:text-purple-700 transition-colors"
              size={24}
            />
          </Link>
          <Link
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              className="text-foreground hover:text-purple-700 transition-colors"
              size={24}
            />
          </Link>
          <Link
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              className="text-foreground hover:text-purple-700 transition-colors"
              size={24}
            />
          </Link>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} SDUSD JROTC Brigade. All rights reserved.
        </p>
      </div>
    </div>
  );
}
