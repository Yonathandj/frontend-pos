import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { InfoTooltipProps } from "@/types/common";

const InfoTooltip = ({ children, content, side }: InfoTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} className="rounded-2xl">
        <span>{content}</span>
      </TooltipContent>
    </Tooltip>
  );
};

export default InfoTooltip;
