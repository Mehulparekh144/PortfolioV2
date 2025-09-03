import React from "react";

export interface AnimateState{
  enableAnimation : boolean,
  setEnableAnimation: React.Dispatch<React.SetStateAction<boolean>>
}