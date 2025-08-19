import type { ElementType } from "react";
import type { SvgIconProps } from "@mui/material";

export interface ServiceItem {
  icon: ElementType<SvgIconProps>;
  title: string
  description: string
}