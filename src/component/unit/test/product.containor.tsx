import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "./product.queries";
import TestPageUI from "./product.presenter";

export default function TestPage() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const rendom = 123;
  const random = 1234;

  return <TestPageUI data={data} />;
}
