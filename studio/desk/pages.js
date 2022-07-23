import S from "@sanity/desk-tool/structure-builder";
import { standardViews } from "./previews/standard";

export const pagesMenu = S.listItem()
  .title("Pages SEO Settings")
  .id("pages")
  .child(
    S.documentTypeList("page")
      .title("Pages")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("page")
          .views(standardViews)
      )
     
  );
