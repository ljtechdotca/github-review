import BuyMeACoffee from "@public/icons/buymeacoffee.svg";
import Discord from "@public/icons/discord.svg";
import Dribbble from "@public/icons/dribbble.svg";
import Figma from "@public/icons/figma.svg";
import Fork from "@public/icons/fork.svg";
import GitHub from "@public/icons/github.svg";
import Issue from "@public/icons/issue.svg";
import LinkedIn from "@public/icons/linkedin.svg";
import Star from "@public/icons/star.svg";
import Twitch from "@public/icons/twitch.svg";
import Twitter from "@public/icons/twitter.svg";
import Watcher from "@public/icons/watcher.svg";

export interface IconProps {
  type:
    | "fork"
    | "issue"
    | "star"
    | "watcher"
    | "buymeacoffee"
    | "discord"
    | "dribbble"
    | "figma"
    | "github"
    | "linkedin"
    | "twitch"
    | "twitter";
  width: number;
  height: number;
}

export const Icon = ({ type, width, height }: IconProps) => {
  switch (type) {
    case "fork":
      return <Fork width={width} height={height} />;
    case "issue":
      return <Issue width={width} height={height} />;
    case "star":
      return <Star width={width} height={height} />;
    case "watcher":
      return <Watcher width={width} height={height} />;
    case "buymeacoffee":
      return <BuyMeACoffee width={width} height={height} />;
    case "discord":
      return <Discord width={width} height={height} />;
    case "dribbble":
      return <Dribbble width={width} height={height} />;
    case "figma":
      return <Figma width={width} height={height} />;
    case "github":
      return <GitHub width={width} height={height} />;
    case "linkedin":
      return <LinkedIn width={width} height={height} />;
    case "twitch":
      return <Twitch width={width} height={height} />;
    case "twitter":
      return <Twitter width={width} height={height} />;
    default:
      return <></>;
  }
};
