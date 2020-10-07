import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  brandTitle: "wix-animations",
  brandUrl: "https://github.com/wix/wix-animations",
});

addons.setConfig({
  theme,
  showPanel: false,
  isFullscreen: false,
  storySort: undefined,
  isToolshown: true,
});
