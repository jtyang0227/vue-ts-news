import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";
import { Actions } from "@/store/actions";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export type MyStore = Omit<Store<RootState>, "commit" | "dispatch"> & MyMutations & MyActions;
