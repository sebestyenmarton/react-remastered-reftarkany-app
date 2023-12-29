import { RootState as ReduxRootState } from "../reducers/userSlice";

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

export { ReduxRootState as RootState };
