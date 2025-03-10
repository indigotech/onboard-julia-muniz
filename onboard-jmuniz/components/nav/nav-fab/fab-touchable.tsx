import { StyledTouchable } from "@/components/common/styled-touchable";
import styled from "styled-components/native";

export const FabTouchable = styled(StyledTouchable)`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 20px;
  right: 10%;
  z-index: 1;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
