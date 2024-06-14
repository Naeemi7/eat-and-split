import { useContext } from "react";
import SplitContext from "@context/splitContext";

export default function useSplitContext() {
  return useContext(SplitContext);
}
