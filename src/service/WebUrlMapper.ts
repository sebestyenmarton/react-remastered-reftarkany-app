import { IOption } from "../typings/global";
import { IAppRoutes, IRouterParams } from "../typings/service";

/* export const webRoutingConfiguration: IAppRoutes<string> = {
  "@delivery-create-form": "/comanda-curier",
  "@delivery-explained": "/livrare-cu-verificare",
}; */

export const routingConfiguration: IOption[] = [
  { label: "", value: "főoldal" },
  { label: "alkalmaink", value: "alkalmaink" },
  { label: "hirdetesek", value: "hírdetések" },
  { label: "egyhazkozsegunkrol", value: "egyházközségünkről" },
  { label: "felvetelek/1/9", value: "felvételek" },
  { label: "elerhetoseg", value: "elérhetőség" },
  { label: "egyebek", value: "egyebek" },
];
//"/felvetelek/:page/:pageSize"
export function webUrlMapper(urlId: string, params: IRouterParams): string {
  /*   if (webRoutingConfiguration[urlId]?.length > 0) {
    let url = webRoutingConfiguration[urlId];
    if (params?.path && Object.keys(params.path).length > 0) {
      for (const [id, value] of Object.entries(params.path)) {
        url = url.replace("{" + id + "}", value);
      }
    }

    const resultingUrl = stringifyUrl({
      url,
      query: params?.query,
      fragmentIdentifier: params?.fragmentIdentifier,
    });

    return resultingUrl;
  } */
  return "";
}
