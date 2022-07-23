import S from "@sanity/desk-tool/structure-builder";
import { pagesMenu } from "../desk/pages";

export default () =>
  S.list()
    .title("Website")
    .items([
      ...S.documentTypeListItems().filter(
        (item) => !["page"].includes(item.getId())
      ),
      S.divider(),
      pagesMenu,
    ]);
